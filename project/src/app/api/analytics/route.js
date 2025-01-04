import { NextResponse } from 'next/server';

import { aggregateDataByPostType } from '../../lib/analytics';

export async function GET() {
  try {
    // Mock data for development - replace with actual DB query when ready
    const mockData = [
      {
        "Post Type": "Static Post",
        "Likes": 20,
        "Comments": 70,
        "Shares": 4,
        "Reach": 1157
      },
      {
        "Post Type": "Carousel",
        "Likes": 30,
        "Comments": 85,
        "Shares": 8,
        "Reach": 2000
      },
      {
        "Post Type": "Reels",
        "Likes": 50,
        "Comments": 120,
        "Shares": 15,
        "Reach": 3500
      }
    ];

    // Use mock data for now
    const aggregatedData = aggregateDataByPostType(mockData);
    
    return NextResponse.json(aggregatedData);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}