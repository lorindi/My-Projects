import { WebhookEvent } from "@clerk/clerk-sdk-node";
import { NextRequest, NextResponse } from "next/server";
import connectionToDatabase from "../../../../lib/mongoose";
import User from "../../../../models/User";



export async function POST(req: NextRequest) {
  await connectionToDatabase();

  try {
    const body = await req.json();
    const event: WebhookEvent = body;

    // Handle user creation event
    if (event.type === "user.created") {
      const { id, email_addresses, first_name, last_name, username } =
        event.data;
      console.log(email_addresses);

      const email = email_addresses[0]?.email_address;

      const newUser = new User({
        username: `${username}`,
        email: email,
        clerkId: id,
      });

      await newUser.save();

      return NextResponse.json(newUser, { status: 201 });
    }

    // Handle user update event
    if (event.type === "user.updated") {
      const { id, email_addresses, first_name, last_name } = event.data;

      const email = email_addresses[0]?.email_address;

      const updatedUser = await User.findOneAndUpdate(
        { clerkId: id },
        { username: `${first_name} ${last_name}`, email: email },
        { new: true }
      );

      return NextResponse.json(
        { message: "User updated in MongoDB", user: updatedUser },
        { status: 200 }
      );
    }

    // Handle user deletion event
    if (event.type === "user.deleted") {
      const { id } = event.data;

      await User.deleteOne({ clerkId: id });

      return new NextResponse(null, { status: 204 });
    }

    return NextResponse.json({ message: "Unhandled event" }, { status: 400 });
  } catch (err) {
    console.error("Error processing Clerk webhook:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
