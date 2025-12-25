import { NextRequest, NextResponse } from 'next/server';

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_BASE_URL = process.env.PAYPAL_BASE_URL || 'https://api-m.sandbox.paypal.com';

async function getPayPalAccessToken(): Promise<string> {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64');
  
  const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  return data.access_token;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const eventType = body.event_type;

    // Verify webhook (in production, verify signature)
    // For now, we'll just log and process events

    switch (eventType) {
      case 'PAYMENT.CAPTURE.COMPLETED':
        const capture = body.resource;
        console.log('💰 PayPal payment captured:', capture.id);
        console.log('Amount:', capture.amount);
        console.log('Custom ID (Project ID):', capture.custom_id);
        // TODO: Update database, send confirmation email, etc.
        break;

      case 'PAYMENT.CAPTURE.DENIED':
        const denied = body.resource;
        console.log('❌ PayPal payment denied:', denied.id);
        // TODO: Notify customer, log failure, etc.
        break;

      case 'CHECKOUT.ORDER.APPROVED':
        const order = body.resource;
        console.log('🔔 PayPal order approved:', order.id);
        // TODO: Process order approval
        break;

      default:
        console.log(`Unhandled PayPal event type: ${eventType}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing PayPal webhook:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
}

