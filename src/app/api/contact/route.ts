import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendContactNotification } from "@/lib/bot-master";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const validationResult = contactSchema.safeParse(body);
    
    if (!validationResult.success) {
      const issues = validationResult.error?.issues || [];
      const errorMessages = issues.map((e: { message: string }) => e.message).join(", ");
      return NextResponse.json({
        success: false,
        message: `Validation failed: ${errorMessages}`,
        errors: issues,
      }, { status: 400 });
    }
    
    const validatedData = validationResult.data;
    
    // 1. Save to SQLite database
    const contact = await db.contact.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        company: validatedData.company || null,
        subject: validatedData.subject,
        message: validatedData.message,
      },
    });

    console.log("[Contact] Saved to database:", contact.id);
    
    // 2. Send WhatsApp notification via Bot Master Sender (non-blocking)
    sendContactNotification({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      company: validatedData.company,
      subject: validatedData.subject,
      message: validatedData.message,
    }).catch((error) => {
      console.error("[Contact] Failed to send WhatsApp notification:", error);
    });
    
    return NextResponse.json({
      success: true,
      message: "Thank you for contacting us! We'll get back to you soon.",
      data: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again later.",
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const contacts = await db.contact.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    
    return NextResponse.json({
      success: true,
      message: "Contacts fetched successfully",
      data: contacts,
    });
  } catch (error) {
    console.error("Get contacts error:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch contacts",
    }, { status: 500 });
  }
}
