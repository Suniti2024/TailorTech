 
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI as string);

export const connectToDatabase = async () => {
  try {
    await client.connect();
    const db = client.db("tailortech"); // Change to your database name if needed
    console.log("Connected to MongoDB");
    return { db };
  } catch (error) {
    console.error("Failed to connect to the database", error);
    throw new Error("Failed to connect to the database");
  }
};
