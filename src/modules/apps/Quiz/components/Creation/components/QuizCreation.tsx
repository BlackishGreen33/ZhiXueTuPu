'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { LuBookOpen, LuCopyCheck } from 'react-icons/lu';
import { z } from 'zod';

import { Button } from '@/common/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/common/components/ui/form';
import { Input } from '@/common/components/ui/input';
import { Separator } from '@/common/components/ui/separator';
import { useToast } from '@/common/components/ui/use-toast';
import { quizCreationSchema } from '@/common/schemas/forms/quiz';

import LoadingQuestions from './LoadingQuestions';

type Props = {
  topic: string;
};

type Input = z.infer<typeof quizCreationSchema>;

const QuizCreation = ({ topic: topicParam }: Props) => {
  const router = useRouter();
  const [showLoader, setShowLoader] = React.useState(false);
  const [finishedLoading, setFinishedLoading] = React.useState(false);
  const { toast } = useToast();
  // @ts-ignore
  const { mutate: getQuestions, isLoading } = useMutation({
    mutationFn: async ({ amount, topic, type }: Input) => {
      const response = await axios.post('/api/game', { amount, topic, type });
      return response.data;
    },
  });

  const form = useForm<Input>({
    resolver: zodResolver(quizCreationSchema),
    defaultValues: {
      topic: topicParam,
      type: 'mcq',
      amount: 3,
    },
  });

  const onSubmit = async (data: Input) => {
    setShowLoader(true);
    getQuestions(data, {
      onError: (error) => {
        setShowLoader(false);
        if (error instanceof AxiosError) {
          if (error.response?.status === 500) {
            toast({
              title: '错误',
              description: '发生了一些错误。请稍后再试。',
              variant: 'destructive',
            });
          }
        }
      },
      onSuccess: ({ gameId }: { gameId: string }) => {
        setFinishedLoading(true);
        setTimeout(() => {
          if (form.getValues('type') === 'mcq') {
            router.push(`/quiz/play/mcq/${gameId}`);
          } else if (form.getValues('type') === 'open_ended') {
            router.push(`/quiz/play/open-ended/${gameId}`);
          }
        }, 2000);
      },
    });
  };
  form.watch();

  if (showLoader) {
    return <LoadingQuestions finished={finishedLoading} />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">创建测验</CardTitle>
        <CardDescription>选择一个主题</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>主题</FormLabel>
                  <FormControl>
                    <Input placeholder="填入主题" {...field} />
                  </FormControl>
                  <FormDescription>
                    请在此处提供您想被测验的主题。
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>题目数量</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="How many questions?"
                      type="number"
                      {...field}
                      onChange={(e) => {
                        form.setValue('amount', parseInt(e.target.value));
                      }}
                      min={1}
                      max={10}
                    />
                  </FormControl>
                  <FormDescription>
                    你可以选择你想被测验的题目数量。
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <Button
                variant={
                  form.getValues('type') === 'mcq' ? 'default' : 'secondary'
                }
                className="w-1/2 rounded-none rounded-l-lg"
                onClick={() => {
                  form.setValue('type', 'mcq');
                }}
                type="button"
              >
                <LuCopyCheck className="mr-2 h-4 w-4" /> 选择题
              </Button>
              <Separator orientation="vertical" />
              <Button
                variant={
                  form.getValues('type') === 'open_ended'
                    ? 'default'
                    : 'secondary'
                }
                className="w-1/2 rounded-none rounded-r-lg"
                onClick={() => form.setValue('type', 'open_ended')}
                type="button"
              >
                <LuBookOpen className="mr-2 h-4 w-4" /> 填空题
              </Button>
            </div>
            <Button disabled={isLoading} type="submit">
              送出
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default QuizCreation;
