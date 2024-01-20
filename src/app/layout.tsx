import { montserrat } from '@/app/fonts';
import type { Metadata } from 'next';

import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'Github Finder',
  description: 'Github Finder App allows users to search for public repositories and users.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="author" content="Mohammad Shehadeh" />
        <meta name="robots" content="index, follow" />
      </head>
      <body>{children}</body>
    </html>
  );
}
