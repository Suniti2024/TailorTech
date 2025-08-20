import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../utils/mongodb"; // keep your existing path

export async function POST(req: Request) {
  try {
    const { db } = await connectToDatabase();

    // Parse multipart form-data
    const form = await req.formData();

    const userID = (form.get("userID") as string) || undefined;
    const kurtiLength = (form.get("kurtiLength") as string) || "";
    const sleeveType = (form.get("sleeveType") as string) || "";
    const neckDesign = (form.get("neckDesign") as string) || "";
    const fabricType = (form.get("fabricType") as string) || "";
    const extraNotes = (form.get("extraNotes") as string) || "";
    const chest = (form.get("chest") as string) || "";
    const waist = (form.get("waist") as string) || "";
    const hips = (form.get("hips") as string) || "";
    const length = (form.get("length") as string) || "";
    const status = (form.get("Status") as string) || "";
    const TailorName = (form.get("TailorName") as String) || "";
    const TailorID = (form.get("TailorID") as String) || "";
    const TailorEmail = (form.get("TailorEmail") as String) || "";
    const TailorPhone = (form.get("TailorPhone") as String) || "";
    const TailorAddress = (form.get("TailorAddress") as String) || "";
    const Price = (form.get("Price") as String) || "";

    // File handling
    const file = form.get("referenceImage") as File | null;

    let referenceImage: any = null;
    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      referenceImage = {
        data: Buffer.from(arrayBuffer), // Binary data
        contentType: file.type || "application/octet-stream",
        filename: file.name || "upload",
        size: file.size,
      };
    }

    // Basic validation
    if (
      !kurtiLength ||
      !sleeveType ||
      !neckDesign ||
      !fabricType ||
      !chest ||
      !waist ||
      !hips ||
      !length
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const result = await db.collection("adddetails").insertOne({
      userID,
      kurtiLength,
      sleeveType,
      neckDesign,
      fabricType,
      extraNotes,
      chest,
      waist,
      hips,
      length,
      referenceImage,
      status,
      TailorName,
      TailorID,
      TailorEmail,
      TailorPhone,
      TailorAddress,
      Price,
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
    const userId = searchParams.get("userID");

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
