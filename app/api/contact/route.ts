import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save to Supabase first so contact messages are never lost.
    const { error: dbError } = await supabase()
      .from("messages")
      .insert({ name, email, subject, message });

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to save message" },
        { status: 500 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error("Missing Resend environment variables");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 503 }
      );
    }

    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New Contact Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          </div>
          <div style="background: #ffffff; padding: 15px; border-left: 4px solid #2563eb; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "Message saved, but email notification failed" },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully", emailId: result.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
