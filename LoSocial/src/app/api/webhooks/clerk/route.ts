// To use Clerk in the route.ts file of Next.js, I need to configure a webhook in Clerk,
// but since I am using loca.lt, every time I run npm run dev, I need to update
// the webhook link with the new URL from loca.lt, which I get after running npm run dev
// and in a separate terminal, I run lt --port 3000.
import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import connectionToDatabase from "../../../../lib/mongoose";
import User from "../../../../models/User";
export async function POST(req: Request) {
  await connectionToDatabase();
  
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  const { id } = evt.data;
  const eventType = evt.type;
    // console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
    // console.log('Webhook body:', body)

  if (eventType === "user.created") {
    
    const { email_addresses, username, image_url } = evt.data;

    // Extract the first email from the email_addresses array.
    const email = email_addresses && email_addresses[0]?.email_address;

    if (!email) {
      console.error("Email is missing in the user.created event payload");
      return new Response("Email is missing", { status: 400 });
    }
    try {
      const newUser = new User({
        clerkId: evt.data.id,
        username: username,
        email: email,
        avatar: image_url || "/noAvatar.png",
        cover: null,
      });

      await newUser.save();

      return new Response("User created successfully!", { status: 201 });
    } catch (err) {
      console.log(err);
      return new Response("Failed to create the user!", { status: 500 });
    }
  }
  if (eventType === "user.updated") {
    const { id, email_addresses, username, image_url } = evt.data;
    const email = email_addresses && email_addresses[0]?.email_address;
    try {
      const updatedUser = await User.findOneAndUpdate(
        { clerkId: id },
        { username: username, avatar: image_url, email: email },
        { new: true }
      );
      return new Response("User updated successfully!", { status: 201 });
    } catch (err) {
      console.log(err);
      return new Response("Failed to update the user!", { status: 500 });
    }
  }
  if (eventType === "user.deleted") {
    const { id } = evt.data;
    try {
      await User.deleteOne({ clerkId: id });

      return new Response(null, { status: 204 });
    } catch (err) {
      console.log(err);
      return new Response("Failed to delete the user!", { status: 500 });
    }
  }

  return new Response("Webhook received", { status: 200 });
}
