import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log("\n mongoose connected");
  } catch (error) {
    console.log("ERROR", error);
  }
}

export default connectDB;
