'use client';

import { useState } from 'react';
import { getProjectById } from '@qia/types';
import type { ProjectId } from '@qia/types';
import Image from 'next/image';
import { Button } from '@qia/ui';
import Link from 'next/link';

interface SupportTemplateProps {
  projectId: ProjectId;
}

export function SupportTemplate({ projectId }: SupportTemplateProps) {
  const project = getProjectById(projectId);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal' | 'crypto' | null>(null);

  if (!project || !project.support) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 py-16">
          <p>Support information not available.</p>
        </div>
      </div>
    );
  }

  const { support } = project;
  const defaultAmount = support.defaultAmount || 50;

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const finalAmount = selectedAmount || (customAmount ? parseFloat(customAmount) : defaultAmount);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      {support.heroImage && (
        <div className="relative w-full h-[50vh] min-h-[300px] overflow-hidden">
          <Image
            src={support.heroImage}
            alt={`Support ${project.name}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 animate-in fade-in duration-700">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4 drop-shadow-2xl">
                Support {project.name}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-light text-white/90 drop-shadow-lg">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Description */}
          <section className="py-4">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-light">
              {support.description}
            </p>
          </section>

          {/* Amount Selection */}
          <section className="space-y-6 bg-gradient-to-br from-card/50 to-card/30 rounded-2xl p-6 md:p-8 border border-border shadow-lg">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Select Amount
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {support.suggestedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 ${
                    selectedAmount === amount
                      ? 'border-primary bg-primary/20 shadow-primary/20 shadow-lg scale-105'
                      : 'border-border hover:border-primary/50 bg-background/50'
                  }`}
                >
                  <div className={`text-2xl font-black ${
                    selectedAmount === amount 
                      ? 'bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent'
                      : 'text-foreground'
                  }`}>
                    ${amount}
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-6">
              <label className="block text-sm font-semibold mb-3 text-foreground/90">
                Custom Amount
              </label>
              <input
                type="number"
                min="1"
                step="0.01"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                placeholder={`$${defaultAmount}`}
                className="w-full px-4 py-3 border-2 border-border rounded-xl bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm hover:shadow-md"
              />
            </div>
          </section>

          {/* Payment Method Selection */}
          <section className="space-y-6 bg-gradient-to-br from-card/50 to-card/30 rounded-2xl p-6 md:p-8 border border-border shadow-lg">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Payment Method
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setPaymentMethod('stripe')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left shadow-md hover:shadow-lg hover:scale-105 ${
                  paymentMethod === 'stripe'
                    ? 'border-primary bg-primary/20 shadow-primary/20 shadow-lg scale-105'
                    : 'border-border hover:border-primary/50 bg-background/50'
                }`}
              >
                <div className={`text-lg font-black mb-2 ${
                  paymentMethod === 'stripe'
                    ? 'bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent'
                    : 'text-foreground'
                }`}>
                  💳 Card / Apple Pay / Google Pay
                </div>
                <div className="text-sm text-foreground/70">
                  Secure payment via Stripe
                </div>
              </button>
              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left shadow-md hover:shadow-lg hover:scale-105 ${
                  paymentMethod === 'paypal'
                    ? 'border-primary bg-primary/20 shadow-primary/20 shadow-lg scale-105'
                    : 'border-border hover:border-primary/50 bg-background/50'
                }`}
              >
                <div className={`text-lg font-black mb-2 ${
                  paymentMethod === 'paypal'
                    ? 'bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent'
                    : 'text-foreground'
                }`}>
                  🅿️ PayPal
                </div>
                <div className="text-sm text-foreground/70">
                  Pay with your PayPal account
                </div>
              </button>
              <button
                onClick={() => setPaymentMethod('crypto')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left shadow-md hover:shadow-lg hover:scale-105 ${
                  paymentMethod === 'crypto'
                    ? 'border-primary bg-primary/20 shadow-primary/20 shadow-lg scale-105'
                    : 'border-border hover:border-primary/50 bg-background/50'
                }`}
              >
                <div className={`text-lg font-black mb-2 ${
                  paymentMethod === 'crypto'
                    ? 'bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent'
                    : 'text-foreground'
                }`}>
                  ₿ Crypto
                </div>
                <div className="text-sm text-foreground/70">
                  MetaMask / WalletConnect
                </div>
              </button>
            </div>
          </section>

          {/* Payment Button */}
          {paymentMethod && (
            <section className="pt-8">
              <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 rounded-2xl p-6 md:p-8 mb-6 border border-primary/30 shadow-xl backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg md:text-xl font-semibold text-foreground/90">Total Amount</span>
                  <span className="text-3xl md:text-4xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    ${finalAmount.toFixed(2)}
                  </span>
                </div>
                <div className="text-sm md:text-base text-foreground/70 font-medium">
                  Payment method: {paymentMethod === 'stripe' ? 'Card / Apple Pay / Google Pay' : paymentMethod === 'paypal' ? 'PayPal' : 'Crypto'}
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href={`/support/api/process?projectId=${projectId}&amount=${finalAmount}&method=${paymentMethod}`}>
                  Continue to Payment
                </Link>
              </Button>
            </section>
          )}

          {/* Info */}
          <section className="bg-card/30 rounded-xl p-6 border border-border/50 space-y-3">
            <p className="text-sm md:text-base text-foreground/70 flex items-center gap-2">
              <span className="text-primary">✓</span>
              All payments are secure and encrypted
            </p>
            <p className="text-sm md:text-base text-foreground/70 flex items-center gap-2">
              <span className="text-primary">✓</span>
              You will receive a confirmation email
            </p>
            <p className="text-sm md:text-base text-foreground/70 flex items-center gap-2">
              <span className="text-primary">✓</span>
              Your contribution is tax-deductible
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

