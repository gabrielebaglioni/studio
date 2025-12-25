import { NextRequest, NextResponse } from 'next/server';
import { createPublicClient, http, formatEther } from 'viem';
import { mainnet } from 'viem/chains';

const WALLET_ADDRESS = process.env.CRYPTO_WALLET_ADDRESS;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { txHash, projectId, amount } = body;

    if (!txHash || !projectId || !amount) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    if (!WALLET_ADDRESS) {
      return NextResponse.json(
        { error: 'Wallet address not configured' },
        { status: 500 }
      );
    }

    // Create public client for Ethereum mainnet
    const client = createPublicClient({
      chain: mainnet,
      transport: http(),
    });

    // Get transaction receipt
    const receipt = await client.getTransactionReceipt({
      hash: txHash as `0x${string}`,
    });

    if (!receipt) {
      return NextResponse.json(
        { error: 'Transaction not found' },
        { status: 404 }
      );
    }

    // Verify transaction
    if (receipt.status !== 'success') {
      return NextResponse.json(
        { error: 'Transaction failed' },
        { status: 400 }
      );
    }

    // Verify recipient address
    if (receipt.to?.toLowerCase() !== WALLET_ADDRESS.toLowerCase()) {
      return NextResponse.json(
        { error: 'Transaction sent to wrong address' },
        { status: 400 }
      );
    }

    // Get transaction details
    const tx = await client.getTransaction({
      hash: txHash as `0x${string}`,
    });

    // Verify amount (convert from wei to ETH, then to USD equivalent)
    // Note: In production, you'd want to check the actual USD value at time of transaction
    const txAmount = parseFloat(formatEther(tx.value));
    const expectedAmount = amount;

    // For now, we'll just verify the transaction exists and is successful
    // In production, you'd want to verify the USD equivalent using an oracle or price feed

    // TODO: Save transaction to database
    // TODO: Send confirmation email
    // TODO: Update project funding totals

    return NextResponse.json({
      success: true,
      txHash,
      confirmations: receipt.blockNumber ? 1 : 0, // Simplified
      amount: txAmount,
    });
  } catch (error) {
    console.error('Error verifying crypto transaction:', error);
    return NextResponse.json(
      { error: 'Failed to verify transaction' },
      { status: 500 }
    );
  }
}

