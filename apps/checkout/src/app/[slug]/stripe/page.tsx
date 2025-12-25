'use client';

import { useEffect, useState, useRef } from 'react';
import { useSearchParams, useParams, useRouter } from 'next/navigation';
import { loadStripe, Stripe, StripeElements, StripePaymentElement } from '@stripe/stripe-js';
import { getProjectById, isValidProjectId } from '@qia/types';
import type { ProjectId } from '@qia/types';
import { Button } from '@qia/ui';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function StripePaymentPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [elements, setElements] = useState<StripeElements | null>(null);
  const [paymentElement, setPaymentElement] = useState<StripePaymentElement | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const paymentElementRef = useRef<HTMLDivElement>(null);

  const slug = params.slug as string;
  const amount = parseFloat(searchParams.get('amount') || '0');

  // Initialize Stripe and create PaymentIntent
  useEffect(() => {
    if (!slug || !isValidProjectId(slug) || amount <= 0) {
      setError('Invalid project or amount');
      setLoading(false);
      return;
    }

    const initializeStripe = async () => {
      try {
        // Load Stripe
        const stripeInstance = await stripePromise;
        if (!stripeInstance) {
          setError('Failed to load Stripe');
          setLoading(false);
          return;
        }
        setStripe(stripeInstance);

        // Create PaymentIntent
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount, projectId: slug }),
        });

        const data = await response.json();
        if (data.error) {
          setError(data.error);
          setLoading(false);
          return;
        }

        setClientSecret(data.clientSecret);

        // Create Elements
        const elementsInstance = stripeInstance.elements({
          clientSecret: data.clientSecret,
          appearance: {
            theme: 'stripe',
          },
        });

        setElements(elementsInstance);

        // Create and mount PaymentElement
        const payment = elementsInstance.create('payment');
        if (paymentElementRef.current) {
          payment.mount(paymentElementRef.current);
          setPaymentElement(payment);
        }

        setLoading(false);
      } catch (err) {
        console.error('Error initializing Stripe:', err);
        setError('Failed to initialize payment');
        setLoading(false);
      }
    };

    initializeStripe();
  }, [slug, amount]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !paymentElement || !clientSecret) {
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      // Submit payment
      const { error: confirmError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/success?projectId=${slug}&amount=${amount}`,
        },
      });

      if (confirmError) {
        setError(confirmError.message);
        setProcessing(false);
      }
      // If successful, user will be redirected by Stripe
    } catch (err) {
      console.error('Error confirming payment:', err);
      setError('An error occurred while processing your payment');
      setProcessing(false);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (paymentElement) {
        paymentElement.unmount();
      }
    };
  }, [paymentElement]);

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
        <div className="text-lg">Loading payment form...</div>
      </div>
    );
  }

  if (error && !clientSecret) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="text-lg text-destructive mb-4">{error}</div>
          <Button asChild>
            <a href={`/${slug}`}>Go Back</a>
          </Button>
        </div>
      </div>
    );
  }

  if (!clientSecret || !stripe || !elements) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Complete Your Payment</h1>
          <p className="text-muted-foreground mb-8">
            Supporting {project.name} - ${amount.toFixed(2)}
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div ref={paymentElementRef} className="mb-6" />
            {error && <div className="text-destructive text-sm">{error}</div>}
            <Button type="submit" size="lg" className="w-full" disabled={processing || !stripe}>
              {processing ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
