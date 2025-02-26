import "./globals.css";
import { Figtree, DM_Serif_Text } from 'next/font/google';

const figtree = Figtree({
  subsets: ['latin'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
  variable: '--figtree',
});
const dmSerifText = DM_Serif_Text({
  subsets: ['latin'],
  weight: '400',
  fallback: ['Georgia', 'serif'],
  variable: '--dmSerifText',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
