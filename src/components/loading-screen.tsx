import { Progress } from '@/components/ui/progress';
import { agencyConfig } from '@/lib/data';

interface LoadingScreenProps {
  progress: number;
}

export function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-headline text-6xl font-black tracking-tighter text-foreground">
          {agencyConfig.name}
        </h1>
        <div className="w-64">
          <Progress value={progress} className="h-2" />
          <p className="mt-2 text-sm text-muted-foreground">
            Loading {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
}
