import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const connectionString = process.env.mongodbURI;

export default async function connectDB() {
  try {
    await mongoose.connect(connectionString);
    console.log(`MongoDB Connected...`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}