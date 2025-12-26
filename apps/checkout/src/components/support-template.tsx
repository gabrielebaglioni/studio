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
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div className="container mx-auto px-4 py-16">
          <p className="text-foreground/70">Support information not available.</p>
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
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Section with Brand Colors */}
      {support.heroImage && (
        <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
          <Image
            src={support.heroImage}
            alt={`Support ${project.name}`}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay using brand colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 space-y-6 animate-in fade-in duration-1000">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black uppercase tracking-tighter mb-4 text-foreground drop-shadow-2xl">
                Support {project.name}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-body font-light text-foreground/90 max-w-3xl mx-auto leading-relaxed">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Description */}
          <section className="py-8 text-center">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/90 font-body font-light max-w-2xl mx-auto">
              {support.description}
            </p>
          </section>

          {/* Amount Selection */}
          <section className="space-y-8 bg-gradient-to-br from-card via-card/90 to-card rounded-3xl p-8 md:p-10 border-2 border-primary/30 shadow-2xl backdrop-blur-sm">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-black uppercase tracking-tight mb-4 text-foreground">
                Select Amount
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {support.suggestedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
                    selectedAmount === amount
                      ? 'border-primary bg-primary/30 shadow-primary/30 scale-105 ring-2 ring-primary/50'
                      : 'border-primary/30 hover:border-primary/60 bg-background/60 hover:scale-105'
                  }`}
                  aria-pressed={selectedAmount === amount}
                >
                  <div className={`text-2xl md:text-3xl font-headline font-black ${
                    selectedAmount === amount 
                      ? 'bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent'
                      : 'text-foreground'
                  }`}>
                    ${amount}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-8">
              <label className="block text-sm md:text-base font-body font-semibold mb-4 text-foreground/90">
                Or Enter Custom Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/70 font-body font-medium text-lg">$</span>
                <input
                  type="number"
                  min="1"
                  step="0.01"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  placeholder={`${defaultAmount}`}
                  className="w-full pl-8 pr-4 py-4 border-2 border-primary/30 rounded-xl bg-background/60 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-md hover:shadow-lg font-body text-lg"
                  aria-label="Custom donation amount"
                />
              </div>
            </div>
          </section>

          {/* Payment Method Selection */}
          <section className="space-y-8 bg-gradient-to-br from-card via-card/90 to-card rounded-3xl p-8 md:p-10 border-2 border-primary/30 shadow-2xl backdrop-blur-sm">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-black uppercase tracking-tight mb-4 text-foreground">
                Payment Method
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button
                onClick={() => setPaymentMethod('stripe')}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left shadow-lg hover:shadow-xl ${
                  paymentMethod === 'stripe'
                    ? 'border-primary bg-primary/30 shadow-primary/30 scale-105 ring-2 ring-primary/50'
                    : 'border-primary/30 hover:border-primary/60 bg-background/60 hover:scale-105'
                }`}
                aria-pressed={paymentMethod === 'stripe'}
              >
                <div className={`text-xl md:text-2xl font-headline font-black mb-3 ${
                  paymentMethod === 'stripe'
                    ? 'bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent'
                    : 'text-foreground'
                }`}>
                  💳 Card Payment
                </div>
                <div className="text-sm md:text-base text-foreground/80 font-body">
                  Secure payment via Stripe
                  <br />
                  Apple Pay • Google Pay
                </div>
              </button>
              
              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left shadow-lg hover:shadow-xl ${
                  paymentMethod === 'paypal'
                    ? 'border-primary bg-primary/30 shadow-primary/30 scale-105 ring-2 ring-primary/50'
                    : 'border-primary/30 hover:border-primary/60 bg-background/60 hover:scale-105'
                }`}
                aria-pressed={paymentMethod === 'paypal'}
              >
                <div className={`text-xl md:text-2xl font-headline font-black mb-3 ${
                  paymentMethod === 'paypal'
                    ? 'bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent'
                    : 'text-foreground'
                }`}>
                  🅿️ PayPal
                </div>
                <div className="text-sm md:text-base text-foreground/80 font-body">
                  Pay with your PayPal account
                </div>
              </button>
              
              <button
                onClick={() => setPaymentMethod('crypto')}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left shadow-lg hover:shadow-xl ${
                  paymentMethod === 'crypto'
                    ? 'border-primary bg-primary/30 shadow-primary/30 scale-105 ring-2 ring-primary/50'
                    : 'border-primary/30 hover:border-primary/60 bg-background/60 hover:scale-105'
                }`}
                aria-pressed={paymentMethod === 'crypto'}
              >
                <div className={`text-xl md:text-2xl font-headline font-black mb-3 ${
                  paymentMethod === 'crypto'
                    ? 'bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent'
                    : 'text-foreground'
                }`}>
                  ₿ Crypto
                </div>
                <div className="text-sm md:text-base text-foreground/80 font-body">
                  MetaMask • WalletConnect
                </div>
              </button>
            </div>
          </section>

          {/* Payment Summary & Button */}
          {paymentMethod && (
            <section className="space-y-8">
              <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 rounded-3xl p-8 md:p-10 mb-6 border-2 border-primary/40 shadow-2xl backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                  <span className="text-lg md:text-xl font-body font-semibold text-foreground/90">Total Amount</span>
                  <span className="text-4xl md:text-5xl font-headline font-black bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
                    ${finalAmount.toFixed(2)}
                  </span>
                </div>
                <div className="pt-6 border-t-2 border-primary/30">
                  <div className="text-sm md:text-base text-foreground/80 font-body font-medium">
                    Payment method: <span className="text-primary font-semibold">{paymentMethod === 'stripe' ? 'Card / Apple Pay / Google Pay' : paymentMethod === 'paypal' ? 'PayPal' : 'Cryptocurrency'}</span>
                  </div>
                </div>
              </div>
              
              <Button
                asChild
                size="lg"
                className="w-full text-lg md:text-xl py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary/50"
              >
                <Link href={`/${projectId}/stripe?amount=${finalAmount}&method=${paymentMethod}`}>
                  Continue to Payment
                </Link>
              </Button>
            </section>
          )}

          {/* Trust & Security Info */}
          <section className="bg-gradient-to-br from-card/50 to-card/30 rounded-2xl p-8 border-2 border-primary/20 shadow-xl space-y-4">
            <h3 className="text-xl md:text-2xl font-headline font-black uppercase tracking-tight mb-6 text-foreground">
              Secure & Trusted
            </h3>
            <div className="space-y-4">
              <p className="text-sm md:text-base text-foreground/80 font-body flex items-start gap-3">
                <span className="text-primary text-xl font-bold mt-0.5">✓</span>
                <span>All payments are secure and encrypted with industry-standard security</span>
              </p>
              <p className="text-sm md:text-base text-foreground/80 font-body flex items-start gap-3">
                <span className="text-primary text-xl font-bold mt-0.5">✓</span>
                <span>You will receive a confirmation email with your donation receipt</span>
              </p>
              <p className="text-sm md:text-base text-foreground/80 font-body flex items-start gap-3">
                <span className="text-primary text-xl font-bold mt-0.5">✓</span>
                <span>Your contribution is tax-deductible and supports our mission</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
