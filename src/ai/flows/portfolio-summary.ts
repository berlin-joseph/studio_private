'use server';

/**
 * @fileOverview A flow to generate a summary of a user's GitHub repositories for use in a portfolio.
 *
 * - generatePortfolioSummary - A function that generates a portfolio summary.
 * - GeneratePortfolioSummaryInput - The input type for the generatePortfolioSummary function.
 * - GeneratePortfolioSummaryOutput - The return type for the generatePortfolioSummary function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GeneratePortfolioSummaryInputSchema = z.object({
  githubProfileUrl: z
    .string()
    .describe('The URL of the GitHub profile to summarize.'),
});
export type GeneratePortfolioSummaryInput = z.infer<
  typeof GeneratePortfolioSummaryInputSchema
>;

const GeneratePortfolioSummaryOutputSchema = z.object({
  summary: z.string().describe('A summary of the GitHub repositories.'),
});
export type GeneratePortfolioSummaryOutput = z.infer<
  typeof GeneratePortfolioSummaryOutputSchema
>;

export async function generatePortfolioSummary(
  input: GeneratePortfolioSummaryInput
): Promise<GeneratePortfolioSummaryOutput> {
  return generatePortfolioSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioSummaryPrompt',
  input: {
    schema: z.object({
      githubProfileUrl: z
        .string()
        .describe('The URL of the GitHub profile to summarize.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A summary of the GitHub repositories.'),
    }),
  },
  prompt: `You are an AI expert in creating compelling descriptions for portfolio projects.

  Analyze the provided GitHub profile URL and generate a concise and engaging summary
  that highlights the key technologies, contributions, and overall impact of the projects
  featured in the repositories. Focus on aspects that would be most appealing to potential employers.

  GitHub Profile URL: {{{githubProfileUrl}}}
  Summary:
  `,
});

const generatePortfolioSummaryFlow = ai.defineFlow<
  typeof GeneratePortfolioSummaryInputSchema,
  typeof GeneratePortfolioSummaryOutputSchema
>({
  name: 'generatePortfolioSummaryFlow',
  inputSchema: GeneratePortfolioSummaryInputSchema,
  outputSchema: GeneratePortfolioSummaryOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
