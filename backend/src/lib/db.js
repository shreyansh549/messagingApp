import mongoose from "mongoose";

export async function connectDB() {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI is required");
    }

    const conn = await mongoose.connect(mongoUri);

    console.log("Mongo DB coonected", conn.connection.host);
  } catch (error) {
    console.error("Mongo DB connection error", error.message);
    process.exit(1);

    // 1- failue and 0 - success
  }
}
