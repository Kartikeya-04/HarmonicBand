import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  const newUrl = process.env.NEWURL;

  if (!newUrl) {
    throw new Error('Environment variable NEWURL is not defined');
  }

  try {
    await mongoose.connect(newUrl);

    console.log('Connected');
  } catch (error) {
    console.log(error);
  }
};
