import { z } from 'zod';

export const userTypeSchema = z.object({
  userType: z.string(),
  id: z.string(),
});
