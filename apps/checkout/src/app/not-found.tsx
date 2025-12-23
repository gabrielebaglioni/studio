import Link from 'next/link';
import { Button } from '@qia/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-black mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="space-y-4">
          <Button asChild size="lg" className="w-full">
            <Link href="/support/climate">Support a Project</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

