import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider';
import { HeroProvider } from '@/contexts/hero-context';
import { GoogleAnalyticsComponent } from '@/components/analytics/google-analytics';

export const metadata: Metadata = {
  title: 'QIA Impact Engine',
  description:
    'We restore damaged ecosystems and empower humanity. We assist Corporations, Institutions and Individuals to solve social and ecological problems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <HeroProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </HeroProvider>
        <Toaster />
        <GoogleAnalyticsComponent />
      </body>
    </html>
  );
}
