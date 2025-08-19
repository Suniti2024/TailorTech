

import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../utils/mongodb"; // keep your existing path

export async function POST(req: Request) {
  try {
    const { db } = await connectToDatabase();

    // Parse multipart form-data
    const form = await req.formData();

    const userId = (form.get("userId") as string) || undefined;
    const kurtiLength = (form.get("kurtiLength") as string) || "";
    const sleeveType = (form.get("sleeveType") as string) || "";
    const neckDesign = (form.get("neckDesign") as string) || "";
    const fabricType = (form.get("fabricType") as string) || "";
    const extraNotes = (form.get("extraNotes") as string) || "";

    // Optional file
    const file = form.get("referenceImage") as File | null;

    // Basic validation
    if (!kurtiLength || !sleeveType || !neckDesign || !fabricType) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    let referenceImage: any = undefined;
    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      referenceImage = {
        data: Buffer.from(arrayBuffer),
        contentType: file.type || "application/octet-stream",
        filename: file.name || "upload",
        size: file.size,
      };
    }

    // Save directly to MongoDB collection
    const result = await db.collection("adddetails").insertOne({
      userId,
      kurtiLength,
      sleeveType,
      neckDesign,
      fabricType,
      extraNotes,
      referenceImage,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Error saving details:", err);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { db } = await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    const filter = userId ? { userId } : {};
    const items = await db
      .collection("adddetails")
      .find(filter)
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, data: items }, { status: 200 });
  } catch (err: any) {
    console.error("Error fetching details:", err);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
