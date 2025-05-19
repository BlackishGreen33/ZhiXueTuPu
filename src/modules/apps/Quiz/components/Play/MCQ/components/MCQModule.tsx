'use client';

import { Game, Question } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { differenceInSeconds } from 'date-fns';
import Link from 'next/link';
import * as React from 'react';
import { LuBarChart, LuChevronRight, LuLoader2, LuTimer } from 'react-icons/lu';
import { z } from 'zod';

import { Button, buttonVariants } from '@/common/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';
import { useToast } from '@/common/components/ui/use-toast';
import { checkAnswerSchema, endGameSchema } from '@/common/schemas/questions';
import { cn, formatTimeDelta } from '@/common/utils/utils';

import MCQCounter from './MCQCounter';

type MCQModuleProps = {
  game: Game & { questions: Pick<Question, 'id' | 'options' | 'question'>[] };
};

const MCQModule: React.FC<MCQModuleProps> = React.memo(({ game }) => {
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [hasEnded, setHasEnded] = React.useState(false);
  const [stats, setStats] = React.useState({
    correct_answers: 0,
    wrong_answers: 0,
  });
  const [selectedChoice, setSelectedChoice] = React.useState<number>(0);
  const [now, setNow] = React.useState(new Date());

  const currentQuestion = React.useMemo(() => {
    return game.questions[questionIndex];
  }, [questionIndex, game.questions]);

  const options = React.useMemo(() => {
    if (!currentQuestion) return [];
    if (!currentQuestion.options) return [];
    return JSON.parse(currentQuestion.options as string) as string[];
  }, [currentQuestion]);

  const { toast } = useToast();
  // @ts-ignore
  const { mutate: checkAnswer, isLoading: isChecking } = useMutation({
    mutationFn: async () => {
      const payload: z.infer<typeof checkAnswerSchema> = {
        questionId: currentQuestion.id,
        userInput: options[selectedChoice],
      };
      const response = await axios.post(`/api/checkAnswer`, payload);
      return response.data;
    },
  });

  const { mutate: endGame } = useMutation({
    mutationFn: async () => {
      const payload: z.infer<typeof endGameSchema> = {
        gameId: game.id,
      };
      const response = await axios.post(`/api/endGame`, payload);
      return response.data;
    },
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!hasEnded) {
        setNow(new Date());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [hasEnded]);

  const handleNext = React.useCallback(() => {
    checkAnswer(undefined, {
      onSuccess: ({ isCorrect }) => {
        if (isCorrect) {
          setStats((stats) => ({
            ...stats,
            correct_answers: stats.correct_answers + 1,
          }));
          toast({
            title: '正确',
            description: '你答对了!',
            // @ts-ignore
            variant: 'success',
          });
        } else {
          setStats((stats) => ({
            ...stats,
            wrong_answers: stats.wrong_answers + 1,
          }));
          toast({
            title: '错误',
            description: '你答错了!',
            variant: 'destructive',
          });
        }
        if (questionIndex === game.questions.length - 1) {
          endGame();
          setHasEnded(true);
          return;
        }
        setQuestionIndex((questionIndex) => questionIndex + 1);
      },
    });
  }, [checkAnswer, questionIndex, game.questions.length, toast, endGame]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;

      if (key === '1') {
        setSelectedChoice(0);
      } else if (key === '2') {
        setSelectedChoice(1);
      } else if (key === '3') {
        setSelectedChoice(2);
      } else if (key === '4') {
        setSelectedChoice(3);
      } else if (key === 'Enter') {
        handleNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext]);

  if (hasEnded) {
    return (
      <div className="flex h-[50vh] w-full items-center justify-center">
        <div className="flex flex-col justify-center">
          <div className="mt-2 whitespace-nowrap rounded-md bg-green-500 px-4 py-2 font-semibold text-white">
            你在 {formatTimeDelta(differenceInSeconds(now, game.timeStarted))}{' '}
            完成了本次测试
          </div>
          <Link
            href={`/quiz/statistics/${game.id}`}
            className={cn(buttonVariants({ size: 'lg' }), 'mt-2')}
          >
            查看统计
            <LuBarChart className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-[90vw] max-w-4xl md:w-[80vw]">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            {/* topic */}
            <p>
              <span className="text-slate-400">主题</span> &nbsp;
              <span className="rounded-lg bg-slate-800 px-2 py-1 text-white">
                {game.topic}
              </span>
            </p>
            <div className="mt-3 flex self-start text-slate-400">
              <LuTimer className="mr-2" />
              {formatTimeDelta(differenceInSeconds(now, game.timeStarted))}
            </div>
          </div>
          <MCQCounter
            correct_answers={stats.correct_answers}
            wrong_answers={stats.wrong_answers}
          />
        </div>
        <Card className="mt-4 w-full">
          <CardHeader className="flex flex-row items-center">
            <CardTitle className="mr-5 divide-y divide-zinc-600/50 text-center">
              <div>{questionIndex + 1}</div>
              <div className="text-base text-slate-400">
                {game.questions.length}
              </div>
            </CardTitle>
            <CardDescription className="flex-grow text-lg">
              {currentQuestion?.question}
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="mt-4 flex w-full flex-col items-center justify-center">
          {options.map((option, index) => {
            return (
              <Button
                key={option}
                variant={selectedChoice === index ? 'default' : 'outline'}
                className="mb-4 w-full justify-start py-8"
                onClick={() => setSelectedChoice(index)}
              >
                <div className="flex items-center justify-start">
                  <div className="mr-5 rounded-md border p-2 px-3">
                    {index + 1}
                  </div>
                  <div className="text-start">{option}</div>
                </div>
              </Button>
            );
          })}
          <Button
            variant="default"
            className="mt-2"
            size="lg"
            disabled={isChecking || hasEnded}
            onClick={() => {
              handleNext();
            }}
          >
            {isChecking && <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />}
            下一题 <LuChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
});

export default MCQModule;
