import Link from 'next/link';
import { getProjectById, isValidProjectId } from '@qia/types';
import { Button } from '@qia/ui';

interface SuccessPageProps {
  searchParams: Promise<{ projectId?: string; amount?: string }>;
}

/**
 * Success page after successful payment
 */
export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams;
  const projectId = params.projectId;
  const amount = params.amount ? parseFloat(params.amount) : null;

  const project = projectId && isValidProjectId(projectId) 
    ? getProjectById(projectId) 
    : null;

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Your payment has been processed successfully.
          </p>
          {project && (
            <p className="text-lg font-medium mb-2">
              Supporting {project.name}
            </p>
          )}
          {amount && (
            <p className="text-2xl font-bold mb-8">
              ${amount.toFixed(2)}
            </p>
          )}
          <p className="text-sm text-muted-foreground mb-8">
            You will receive a confirmation email shortly.
          </p>
        </div>
        <div className="space-y-4">
          <Button asChild size="lg" className="w-full">
            <Link href="/">Return Home</Link>
          </Button>
          {project && (
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link href={`/projects/${project.id}`}>View Project Details</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

