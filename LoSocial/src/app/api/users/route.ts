// Standard API route for creating users:
import connectionToDatabase from "../../../../lib/mongoose";
import User, { IUser } from "../../../../models/User";
import { NextResponse } from "next/server";

// Define the type for the req parameter
export async function POST(req: Request) {
  try {
    await connectionToDatabase();

    // Extract data from the request body
    const { username, email }: IUser = await req.json(); // Use IUser for typing

    // Create a new user
    const newUser = new User({ username, email });
    await newUser.save();

    // Return a success response
    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    console.error("Error creating user:", err); // Log the error
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    ); // Return an error response
  }
}
