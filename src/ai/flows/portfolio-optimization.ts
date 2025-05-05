'use server';

/**
 * @fileOverview An AI-powered tool that analyzes portfolio content and suggests optimizations.
 *
 * - optimizePortfolio - A function that handles the portfolio optimization process.
 * - OptimizePortfolioInput - The input type for the optimizePortfolio function.
 * - OptimizePortfolioOutput - The return type for the optimizePortfolio function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const OptimizePortfolioInputSchema = z.object({
  portfolioContent: z.string().describe('The content of the portfolio to be analyzed.'),
  userGoals: z
    .string()
    .describe(
      'The goals of the user for their portfolio (e.g., attract employers, showcase specific skills).' 
    ),
});
export type OptimizePortfolioInput = z.infer<typeof OptimizePortfolioInputSchema>;

const OptimizePortfolioOutputSchema = z.object({
  suggestedLayout: z
    .string()
    .describe('Suggestions for the optimal layout of the portfolio.'),
  suggestedWording: z
    .string()
    .describe('Suggestions for improving the wording and messaging in the portfolio.'),
  suggestedColorSchemes: z
    .string()
    .describe('Suggestions for color schemes to maximize user engagement and aesthetic appeal.'),
  suggestedAnimations: z
    .string()
    .describe('Suggestions for animations to enhance user experience.'),
});
export type OptimizePortfolioOutput = z.infer<typeof OptimizePortfolioOutputSchema>;

export async function optimizePortfolio(input: OptimizePortfolioInput): Promise<OptimizePortfolioOutput> {
  return optimizePortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizePortfolioPrompt',
  input: {
    schema: z.object({
      portfolioContent: z.string().describe('The content of the portfolio to be analyzed.'),
      userGoals: z
        .string()
        .describe(
          'The goals of the user for their portfolio (e.g., attract employers, showcase specific skills).'
        ),
    }),
  },
  output: {
    schema: z.object({
      suggestedLayout: z
        .string()
        .describe('Suggestions for the optimal layout of the portfolio.'),
      suggestedWording: z
        .string()
        .describe('Suggestions for improving the wording and messaging in the portfolio.'),
      suggestedColorSchemes: z
        .string()
        .describe('Suggestions for color schemes to maximize user engagement and aesthetic appeal.'),
      suggestedAnimations: z
        .string()
        .describe('Suggestions for animations to enhance user experience.'),
    }),
  },
  prompt: `You are an AI-powered portfolio optimization tool. Analyze the provided portfolio content and suggest improvements.

Portfolio Content: {{{portfolioContent}}}

User Goals: {{{userGoals}}}

Based on the content and goals, provide specific suggestions for the following:

- Layout: How should the portfolio be structured to best showcase the user's work and skills?
- Wording: How can the wording and messaging be improved to be more clear, concise, and engaging?
- Color Schemes: Suggest color schemes that maximize user engagement and aesthetic appeal.
- Animations: Suggest animations that enhance the user experience without being distracting.`, 
});

const optimizePortfolioFlow = ai.defineFlow<
  typeof OptimizePortfolioInputSchema,
  typeof OptimizePortfolioOutputSchema
>({
  name: 'optimizePortfolioFlow',
  inputSchema: OptimizePortfolioInputSchema,
  outputSchema: OptimizePortfolioOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});

