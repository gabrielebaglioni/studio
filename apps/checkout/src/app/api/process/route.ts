import { NextRequest, NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const projectId = searchParams.get('projectId');
  const amount = searchParams.get('amount');
  const method = searchParams.get('method');

  if (!projectId || !amount || !method) {
    return NextResponse.json(
      { error: 'Missing required parameters' },
      { status: 400 }
    );
  }

  // Redirect to appropriate payment page
  if (method === 'stripe') {
    return redirect(`/${projectId}/stripe?amount=${amount}`);
  } else if (method === 'paypal') {
    return redirect(`/${projectId}/paypal?amount=${amount}`);
  } else if (method === 'crypto') {
    return redirect(`/${projectId}/crypto?amount=${amount}`);
  }

  return NextResponse.json(
    { error: 'Invalid payment method' },
    { status: 400 }
  );
}

