// import { NextResponse } from 'next/server';
// import { connectToDatabase } from '@/utils/mongodb';
// import { ObjectId } from 'mongodb';

// export async function GET() {
//   try {
//     const { db } = await connectToDatabase();
//     const tailors = await db.collection('tailors').find({}).toArray();
//     return NextResponse.json(tailors);
//   } catch (error) {
//     console.error('Error fetching tailors:', error);
//     return NextResponse.json({ error: 'Failed to fetch tailors' }, { status: 500 });
//   }
// }
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/utils/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const tailors = await db.collection('tailors').find().toArray();
    return NextResponse.json(tailors);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch tailors' },
      { status: 500 }
    );
  }
}
