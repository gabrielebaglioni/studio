'use client';

import { useState } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import { getProjectById, isValidProjectId } from '@qia/types';
import type { ProjectId } from '@qia/types';
import { Button } from '@qia/ui';

export default function CryptoPaymentPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [txHash, setTxHash] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const slug = params.slug as string;
  const amount = parseFloat(searchParams.get('amount') || '0');

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

  const handleSubmitTxHash = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/verify-crypto-tx', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          txHash,
          projectId: slug,
          amount,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setSuccess(true);
      }
    } catch (err) {
      console.error('Error verifying transaction:', err);
      setError('Failed to verify transaction');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
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
          <h1 className="text-3xl font-bold mb-4">Transaction Verified!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your payment has been confirmed.
          </p>
          <Button asChild size="lg">
            <a href="/success">Continue</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Crypto Payment</h1>
          <p className="text-muted-foreground mb-8">
            Supporting {project.name} - ${amount.toFixed(2)}
          </p>

          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Payment Instructions</h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Connect your wallet (MetaMask, WalletConnect, etc.)</li>
                <li>Send the payment to the address provided</li>
                <li>Enter your transaction hash below to verify</li>
              </ol>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Payment Details</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-bold">${amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Project:</span>
                  <span className="font-bold">{project.name}</span>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    Payment Address (Ethereum):
                  </p>
                  <code className="block p-2 bg-background rounded text-sm break-all">
                    {process.env.NEXT_PUBLIC_CRYPTO_WALLET_ADDRESS || '0x...'}
                  </code>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmitTxHash} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Transaction Hash
                </label>
                <input
                  type="text"
                  value={txHash}
                  onChange={(e) => setTxHash(e.target.value)}
                  placeholder="0x..."
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Enter the transaction hash from your wallet after sending the payment.
                </p>
              </div>

              {error && (
                <div className="text-destructive text-sm">{error}</div>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                {submitting ? 'Verifying...' : 'Verify Transaction'}
              </Button>
            </form>

            <div className="text-sm text-muted-foreground">
              <p>• Transactions are verified on-chain</p>
              <p>• You will receive a confirmation email once verified</p>
              <p>• If you need help, please contact support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

