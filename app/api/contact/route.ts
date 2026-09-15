import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Save to Supabase
    const { error: dbError } = await supabase()
      .from("messages")
      .insert({
        name,
        email,
        subject,
        message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to save message" },
        { status: 500 }
      );
    }

    // Send email notification
    try {
      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["suhailahmedamro786@gmail.com"],
        subject: `New Contact Message: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background: #ffffff; padding: 15px; border-left: 4px solid #2563eb; border-radius: 8px;">
              <h3 style="margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Continue even if email fails
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
