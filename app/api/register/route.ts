import { connectToDatabase } from "@/utils/mongodb";
import { NextResponse } from "next/server";

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  address: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, password, address }: RegisterRequest = await req.json();

    // Validate required fields
    if (!name || !email || !password || !address) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Connect to DB
    const { db } = await connectToDatabase();

    // Check if email is already registered
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 });
    }

    // Insert user into DB
    const result = await db.collection("users").insertOne({
      name,
      email,
      password, // NOTE: In production, hash the password before saving
      address,
      createdAt: new Date()
    });

    return NextResponse.json({
      success: true,
      message: "Registration successful",
      userId: result.insertedId
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
