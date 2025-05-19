'use client';

import { Question } from '@prisma/client';
import * as React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/common/components/ui/table';

interface QuestionsListProps {
  questions: Question[];
}

const QuestionsList: React.FC<QuestionsListProps> = React.memo(
  ({ questions }) => {
    return (
      <Table className="mt-4">
        <TableCaption>列表结尾</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10px]">No.</TableHead>
            <TableHead>问题 & 正确答案</TableHead>
            <TableHead>你的答案</TableHead>

            {questions[0].questionType === 'open_ended' && (
              <TableHead className="w-[10px] text-right">正确率</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          <>
            {questions.map(
              (
                { answer, question, userAnswer, percentageCorrect, isCorrect },
                index
              ) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>
                      {question} <br />
                      <br />
                      <span className="font-semibold">{answer}</span>
                    </TableCell>
                    {questions[0].questionType === 'open_ended' ? (
                      <TableCell className={`font-semibold`}>
                        {userAnswer}
                      </TableCell>
                    ) : (
                      <TableCell
                        className={`${
                          isCorrect ? 'text-green-600' : 'text-red-600'
                        } font-semibold`}
                      >
                        {userAnswer}
                      </TableCell>
                    )}

                    {percentageCorrect && (
                      <TableCell className="text-right">
                        {percentageCorrect}
                      </TableCell>
                    )}
                  </TableRow>
                );
              }
            )}
          </>
        </TableBody>
      </Table>
    );
  }
);

export default QuestionsList;
