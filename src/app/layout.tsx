import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import JsonLd from '@/components/JsonLd';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Austin Chiatto | Full Stack Developer',
  description: 'I build full-stack tools to solve problems, daydream of finding the perfect notes app, and try every day to give more than I take.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Vancouver', 'Portfolio'],
  authors: [{ name: 'Austin Chiatto' }],
  openGraph: {
    title: 'Austin Chiatto | Full Stack Developer',
    description: 'I build full-stack tools to solve problems, daydream of finding the perfect notes app, and try every day to give more than I take.',
    url: 'https://austinchiatto.com',
    siteName: 'Austin Chiatto Portfolio',
    images: [
      {
        url: 'images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Austin Chiatto - Full Stack Developer'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/favicon.ico'
  },
  alternates: {
    canonical: 'https://austinchiatto.com'
  },
  other: {
    'geo.region': 'CA'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <JsonLd />
        </head>
        <body className={`${fontSans.variable} antialiased`}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
