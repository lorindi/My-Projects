import { WebhookEvent } from "@clerk/clerk-sdk-node";
import { NextRequest, NextResponse } from "next/server";
import connectionToDatabase from "@/lib/mongoose";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await connectionToDatabase();

    const body = await req.json();
    console.log(body);
    
    const event: WebhookEvent = body;

    // Обработка на събитие за създаване на потребител
    if (event.type === "user.created") {
      const { id, email_addresses, username } = event.data;

      const email = email_addresses[0]?.email_address;

      const newUser = new User({
        username: username,
        email: email,
        clerkId: id,
      });

      await newUser.save();

      return NextResponse.json({ message: "User created in MongoDB" }, { status: 201 });
    }

    // Обработка на събитие за обновяване на потребител
    if (event.type === "user.updated") {
      const { id, email_addresses, username, first_name, last_name } = event.data;

      const email = email_addresses[0]?.email_address;

      const updatedUser = await User.findOneAndUpdate(
        { clerkId: id },
        { username: username, email: email },
        { new: true }
      );

      return NextResponse.json({ message: "User updated in MongoDB", user: updatedUser }, { status: 200 });
    }

    // Обработка на събитие за изтриване на потребител
    if (event.type === "user.deleted") {
      const { id } = event.data;

      await User.deleteOne({ clerkId: id });

      // Върни 204 статус без тяло
      return NextResponse.json({ status: 204 });
    }

    return NextResponse.json({ message: "Unhandled event" }, { status: 400 });
  } catch (err) {
    console.error("Error processing Clerk webhook:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
