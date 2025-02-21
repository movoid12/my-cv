import { z } from 'zod';

const configSchema = z.object({
  primaryLanguageApiUrl: z.string().optional(),
  secondaryLanguageApiUrl: z.string().nullish(),
});

export const configs = configSchema.parse({
  primaryLanguageApiUrl: import.meta.env.VITE_CONFIG_API_URL_PRIMARY_LOCALE,
  secondaryLanguageApiUrl: import.meta.env.VITE_CONFIG_API_URL_SECONDARY_LOCALE,
});
