import { NextRequest, NextResponse } from 'next/server';
const LAMBDA_URL = process.env.LAMBDA_URL as string;

// GET - Fetch live analytics data
export async function GET() {
  try {
    const response = await fetch(LAMBDA_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch analytics data');
    }

    const data = await response.json();

    return NextResponse.json({
      total_views: data.total_views,
      current_month_views: data.current_month_views,
      total_downloads: data.total_downloads,
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}

// POST - Add page view or resume download
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type } = body;

    if (!type || !['view', 'download'].includes(type)) {
      return NextResponse.json(
        { error: 'Invalid type. Must be "view" or "download"' },
        { status: 400 }
      );
    }

    const response = await fetch(LAMBDA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type }),
    });

    if (!response.ok) {
      throw new Error('Failed to update analytics');
    }

    const result = await response.json();

    return NextResponse.json({
      message: result.message,
      success: true,
    });
  } catch (error) {
    console.error('Error updating analytics:', error);
    return NextResponse.json(
      { error: 'Failed to update analytics' },
      { status: 500 }
    );
  }
}
