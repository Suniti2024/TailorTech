 import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../utils/mongodb";

export async function GET(req:Request) {
  try {
    const { db } = await connectToDatabase();  // connect to DB
const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userID");
console.log(userId);


    const collection = db.collection("adddetails");
    const data = await collection.find({userId:userId}).toArray();

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
