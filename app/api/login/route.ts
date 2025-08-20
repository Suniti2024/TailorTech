
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/mongodb"; // your db connection file

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Since passwords are not hashed in your DB
    if (user.password !== password) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // If successful
    return NextResponse.json(
      { message: "Login successful", user: { email: user.email,
        userID: user._id
       } },
      { status: 200 }
    );

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
