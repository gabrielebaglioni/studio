'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import { getProjectById, isValidProjectId } from '@qia/types';
import type { ProjectId } from '@qia/types';
import { Button } from '@qia/ui';

export default function PayPalPaymentPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [approvalUrl, setApprovalUrl] = useState<string | null>(null);

  const slug = params.slug as string;
  const amount = parseFloat(searchParams.get('amount') || '0');

  useEffect(() => {
    if (!slug || !isValidProjectId(slug) || amount <= 0) {
      setError('Invalid project or amount');
      setLoading(false);
      return;
    }

    // Create PayPal Order
    fetch('/support/api/create-paypal-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, projectId: slug }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setApprovalUrl(data.approvalUrl);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error creating PayPal order:', err);
        setError('Failed to initialize PayPal payment');
        setLoading(false);
      });
  }, [slug, amount]);

  if (!slug || !isValidProjectId(slug)) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-lg">Invalid project</div>
      </div>
    );
  }

  const project = getProjectById(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-lg">Project not found</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-lg">Loading PayPal...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="text-lg text-destructive mb-4">{error}</div>
          <Button asChild>
            <a href={`/support/${slug}`}>Go Back</a>
          </Button>
        </div>
      </div>
    );
  }

  if (!approvalUrl) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Redirecting to PayPal</h1>
          <p className="text-muted-foreground mb-8">
            Supporting {project.name} - ${amount.toFixed(2)}
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            You will be redirected to PayPal to complete your payment.
          </p>
          <Button asChild size="lg">
            <a href={approvalUrl} target="_self">
              Continue to PayPal
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

