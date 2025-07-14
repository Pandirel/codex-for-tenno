// 'use server';
/**
 * @fileOverview A guide summarization AI agent.
 *
 * - summarizeGuide - A function that handles the guide summarization process.
 * - SummarizeGuideInput - The input type for the summarizeGuide function.
 * - SummarizeGuideOutput - The return type for the summarizeGuide function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeGuideInputSchema = z.object({
  guideText: z.string().describe('The text content of the Warframe guide to summarize.'),
});
export type SummarizeGuideInput = z.infer<typeof SummarizeGuideInputSchema>;

const SummarizeGuideOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the Warframe guide.'),
});
export type SummarizeGuideOutput = z.infer<typeof SummarizeGuideOutputSchema>;

export async function summarizeGuide(input: SummarizeGuideInput): Promise<SummarizeGuideOutput> {
  return summarizeGuideFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeGuidePrompt',
  input: {schema: SummarizeGuideInputSchema},
  output: {schema: SummarizeGuideOutputSchema},
  prompt: `You are an expert in Warframe, tasked with summarizing guides for players.\n
Please provide a concise summary of the following guide, highlighting the key points and recommendations:\n\nGuide Text: {{{guideText}}}\n  `,
});

const summarizeGuideFlow = ai.defineFlow(
  {
    name: 'summarizeGuideFlow',
    inputSchema: SummarizeGuideInputSchema,
    outputSchema: SummarizeGuideOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
