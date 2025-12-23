import Link from 'next/link';
import { getProjectById, isValidProjectId } from '@qia/types';
import { Button } from '@qia/ui';

interface CancelPageProps {
  searchParams: Promise<{ projectId?: string }>;
}

/**
 * Cancel page when payment is cancelled
 */
export default async function CancelPage({ searchParams }: CancelPageProps) {
  const params = await searchParams;
  const projectId = params.projectId;

  const project = projectId && isValidProjectId(projectId) 
    ? getProjectById(projectId) 
    : null;

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Payment Cancelled</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your payment was cancelled. No charges were made.
          </p>
        </div>
        <div className="space-y-4">
          <Button asChild size="lg" className="w-full">
            <Link href="/">Return Home</Link>
          </Button>
          {project && (
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link href={`/support/${project.id}`}>Try Again</Link>
            </Button>
          )}
          <p className="text-sm text-muted-foreground">
            If you experienced any issues, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
}

