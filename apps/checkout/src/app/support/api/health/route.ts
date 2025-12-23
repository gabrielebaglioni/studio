import { NextResponse } from 'next/server';

/**
 * Health check endpoint for testing
 */
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      service: 'checkout-api',
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}

