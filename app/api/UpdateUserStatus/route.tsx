import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../utils/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(req: Request) {
  try {
    const { db } = await connectToDatabase();
    const body = await req.json();

    const { id, Price, status } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing required field: id" },
        { status: 400 }
      );
    }

    const collection = db.collection("adddetails");

    // Build update object
    const updateData: any = {};
    if (Price !== undefined) updateData.Price = Price;
    if (status !== undefined) updateData.status = status;

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: "No document found with this ID" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Details updated successfully",
      updated: updateData,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
