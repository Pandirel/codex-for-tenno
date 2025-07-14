'use server';

import { summarizeGuide } from '@/ai/flows/summarize-guide';
import { z } from 'zod';

const inputSchema = z.object({
  guideText: z.string().min(1, { message: "Guide text cannot be empty." }),
});

export async function getSummaryAction(input: { guideText: string }) {
  try {
    const validatedInput = inputSchema.parse(input);
    const result = await summarizeGuide(validatedInput);
    if (!result || !result.summary) {
      throw new Error('Failed to generate summary.');
    }
    return { summary: result.summary, error: null };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { summary: null, error: `AI Error: ${errorMessage}` };
  }
}
