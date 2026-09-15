import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, projectType, budget, timeline } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Name, email, subject and message are required" }, { status: 400 });
    }

    const leadDetails = [
      `Project Type: ${projectType || "Not specified"}`,
      `Budget: ${budget || "Not specified"}`,
      `Timeline: ${timeline || "Not specified"}`,
      "",
      message,
    ].join("\n");

    const { error: dbError } = await supabase()
      .from("messages")
      .insert({ name, email, subject, message: leadDetails });

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
    }

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 });
  }
}
