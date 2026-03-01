import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendDemoNotification } from "@/lib/bot-master";
import { z } from "zod";

const demoSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  source: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const validationResult = demoSchema.safeParse(body);
    
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
    const demo = await db.demo.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        source: validatedData.source || "popup",
      },
    });

    console.log("[Demo] Saved to database:", demo.id);
    
    // 2. Send WhatsApp notification via Bot Master Sender (non-blocking)
    sendDemoNotification({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      source: validatedData.source,
    }).catch((error) => {
      console.error("[Demo] Failed to send WhatsApp notification:", error);
    });
    
    return NextResponse.json({
      success: true,
      message: "Thank you for your interest! We'll contact you shortly to schedule your demo.",
      data: {
        id: demo.id,
        name: demo.name,
        email: demo.email,
        createdAt: demo.createdAt,
      },
    });
  } catch (error) {
    console.error("Demo form error:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again later.",
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const demos = await db.demo.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    
    return NextResponse.json({
      success: true,
      message: "Demo requests fetched successfully",
      data: demos,
    });
  } catch (error) {
    console.error("Get demos error:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch demo requests",
    }, { status: 500 });
  }
}
