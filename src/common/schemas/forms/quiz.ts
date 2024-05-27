import { z } from 'zod';

export const quizCreationSchema = z.object({
  topic: z
    .string()
    .min(4, {
      message: '主题必须至少 4 个字符',
    })
    .max(50, {
      message: '主题必须最多 50 个字符',
    }),
  type: z.enum(['mcq', 'open_ended']),
  amount: z.number().min(1).max(10),
});
