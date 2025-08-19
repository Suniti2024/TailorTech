import mongoose, { Schema, Document, Types } from "mongoose";

export interface IAddDetails extends Document {
  userId?: Types.ObjectId; // optional link to User without auth
  kurtiLength: string;
  sleeveType: string;
  neckDesign: string;
  fabricType: string;
  extraNotes?: string;
  referenceImage?: {
    data: Buffer;
    contentType: string;
    filename: string;
    size: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ReferenceImageSchema = new Schema(
  {
    data: Buffer,
    contentType: String,
    filename: String,
    size: Number,
  },
  { _id: false }
);

const AddDetailsSchema = new Schema<IAddDetails>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: false },
    kurtiLength: { type: String, required: true },
    sleeveType: { type: String, required: true },
    neckDesign: { type: String, required: true },
    fabricType: { type: String, required: true },
    extraNotes: { type: String },
    referenceImage: { type: ReferenceImageSchema, required: false },
  },
  { timestamps: true }
);

export default mongoose.models.AddDetails ||
  mongoose.model<IAddDetails>("AddDetails", AddDetailsSchema);
