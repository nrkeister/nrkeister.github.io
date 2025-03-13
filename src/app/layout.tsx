import React from 'react';
import './globals.css';
import './pagebody.css';
import Navbar from './components/navbar';
import { figtree } from './utils/fonts';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.className}>
      <body className="pagebody">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
