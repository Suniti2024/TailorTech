// import { connectToDatabase } from '@/utils/mongodb';
// import { Tailor } from '../../types/tailor';
// import bcrypt from 'bcryptjs';

// export async function POST(req: Request) {
//   const { db } = await connectToDatabase();
//   const body: Tailor = await req.json();

//   const hashedPassword = await bcrypt.hash(body.password, 10);

//   const tailor: Tailor = {
//     ...body,
//     password: hashedPassword,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   };

//   const result = await db.collection<Tailor>('tailors').insertOne(tailor);
//   return new Response(JSON.stringify({ id: result.insertedId }), { status: 201 });
// }
// app/api/tailors/route.js
 import { connectToDatabase } from '@/utils/mongodb';
import { ObjectId } from 'mongodb';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { db } = await connectToDatabase();

    const result = await db.collection('tailors').insertOne(body);

    return new Response(
      JSON.stringify({ success: true, id: result.insertedId.toString() }),
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error inserting tailor:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
