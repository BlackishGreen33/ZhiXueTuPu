'use client';

import { Game, Question } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { differenceInSeconds } from 'date-fns';
import Link from 'next/link';
import React from 'react';
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

import BlankAnswerInput from './BlankAnswerInput';
import OpenEndedPercentage from './OpenEndedPercentage';

interface OpenEndedModulesProps {
  game: Game & { questions: Pick<Question, 'id' | 'question' | 'answer'>[] };
}

const OpenEndedModules: React.FC<OpenEndedModulesProps> = React.memo(
  ({ game }) => {
    const [hasEnded, setHasEnded] = React.useState(false);
    const [questionIndex, setQuestionIndex] = React.useState(0);
    const [blankAnswer, setBlankAnswer] = React.useState('');
    const [averagePercentage, setAveragePercentage] = React.useState(0);
    const currentQuestion = React.useMemo(() => {
      return game.questions[questionIndex];
    }, [questionIndex, game.questions]);
    const { mutate: endGame } = useMutation({
      mutationFn: async () => {
        const payload: z.infer<typeof endGameSchema> = {
          gameId: game.id,
        };
        const response = await axios.post(`/api/endGame`, payload);
        return response.data;
      },
    });
    const { toast } = useToast();
    const [now, setNow] = React.useState(new Date());
    // @ts-ignore
    const { mutate: checkAnswer, isLoading: isChecking } = useMutation({
      mutationFn: async () => {
        let filledAnswer = blankAnswer;
        document.querySelectorAll('#user-blank-input').forEach((input) => {
          // @ts-ignore
          filledAnswer = filledAnswer.replace('_____', input.value);
          // @ts-ignore
          input.value = '';
        });
        const payload: z.infer<typeof checkAnswerSchema> = {
          questionId: currentQuestion.id,
          userInput: filledAnswer,
        };
        const response = await axios.post(`/api/checkAnswer`, payload);
        return response.data;
      },
    });
    React.useEffect(() => {
      if (!hasEnded) {
        const interval = setInterval(() => {
          setNow(new Date());
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [hasEnded]);

    const handleNext = React.useCallback(() => {
      checkAnswer(undefined, {
        onSuccess: ({ percentageSimilar }) => {
          toast({
            title: `Your answer is ${percentageSimilar}% similar to the correct answer`,
          });
          setAveragePercentage((prev) => {
            return (prev + percentageSimilar) / (questionIndex + 1);
          });
          if (questionIndex === game.questions.length - 1) {
            endGame();
            setHasEnded(true);
            return;
          }
          setQuestionIndex((prev) => prev + 1);
        },
        onError: (error) => {
          console.error(error);
          toast({
            title: 'Something went wrong',
            variant: 'destructive',
          });
        },
      });
    }, [checkAnswer, questionIndex, toast, endGame, game.questions.length]);
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        const key = event.key;
        if (key === 'Enter') {
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
              你在{' '}{formatTimeDelta(differenceInSeconds(now, game.timeStarted))}{' '}完成本次测试
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
      <div className="flex h-[50vh] w-full items-center justify-center">
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
            <OpenEndedPercentage percentage={averagePercentage} />
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
            <BlankAnswerInput
              setBlankAnswer={setBlankAnswer}
              answer={currentQuestion.answer}
            />
            <Button
              variant="outline"
              className="mt-4"
              disabled={isChecking || hasEnded}
              onClick={() => {
                handleNext();
              }}
            >
              {isChecking && (
                <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              下一题 <LuChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

export default OpenEndedModules;
