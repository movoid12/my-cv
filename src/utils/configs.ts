import { z } from 'zod';

const configSchema = z.object({
  apiUrl: z.string().optional(),
});

export const configs = configSchema.parse({
  apiUrl: import.meta.env.VITE_CONFIG_API_URL,
});
