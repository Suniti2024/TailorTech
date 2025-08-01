// app/api/test/route.ts

import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../utils/db';
import User from '../../../modals/user';

export async function GET() {
  await connectDB();
  const users = await User.find({});
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();
  const { name, email } = body;
  const newUser = await User.create({ name, email });
  return NextResponse.json(newUser, { status: 201 });
}
