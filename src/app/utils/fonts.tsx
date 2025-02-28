import { Figtree, DM_Serif_Text } from 'next/font/google';

export const figtree = Figtree({
  subsets: ['latin'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
  variable: '--figtree',
});

export const dmSerifText = DM_Serif_Text({
  subsets: ['latin'],
  weight: '400',
  fallback: ['Georgia', 'serif'],
  variable: '--dmSerifText',
});