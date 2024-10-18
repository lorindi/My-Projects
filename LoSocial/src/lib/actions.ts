"use server";

import { auth } from "@clerk/nextjs/server";
import connectionToDatabase from "./mongoose";

export const switchFollow = async () => {
    connectionToDatabase()
  try {
    const userId = auth()
  } catch (err) {
    console.log(err)
    throw new Error("Something went wrong!");
  }
};
