import mongoose from "mongoose";

const connectionToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MongoURL as string);
    console.log("Connected to db");
  } catch (err) {
    console.log("Error connecting to db:", err);
  }
};

export default connectionToDatabase;