import { z } from 'zod';

export const apiKeySchema = z.object({
  apiKey: z.string(),
  email: z.string(),
});
