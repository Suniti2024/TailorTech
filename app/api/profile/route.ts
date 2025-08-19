


import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../utils/mongodb";

// ✅ Create/Update Profile (PUT)
export async function PUT(req: Request) {
  try {
    const { db } = await connectToDatabase();
    const body = await req.json();

    const {
      email,
      username,
      street,
      area,
      city,
      state,
      pincode,
      landmark,
      description,
      profileImage,
    } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const result = await db.collection("profiles").updateOne(
      { email },
      {
        $set: {
          username,
          street,
          area,
          city,
          state,
          pincode,
          landmark,
          description,
          profileImage,
          email,
        },
      },
      { upsert: true }
    );

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Error in PUT /api/profile:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// ✅ Get Profile
export async function GET(req: Request) {
  try {
    const { db } = await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const profile = await db.collection("profiles").findOne({ email });

    if (!profile) {
      return NextResponse.json(
        { success: false, message: "Profile not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, profile });
  } catch (error) {
    console.error("Error in GET /api/profile:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
