import { z } from 'zod';

export const userTypeSchema = z.object({
  userType: z.string(),
  email: z.string(),
});
