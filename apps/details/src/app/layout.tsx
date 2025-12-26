import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@qia/ui';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'QIA - Project Details',
  description: 'Quick Impact Agency - Project Details',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-mfe="details" className="bg-background text-foreground">
      <body className="flex flex-col min-h-screen bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

