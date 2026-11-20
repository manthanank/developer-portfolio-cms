import { NextResponse } from "next/server";
import { generateAssistantReply } from "@/lib/ai-assistant";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const reply = generateAssistantReply(message);

    return NextResponse.json({
      reply,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process AI chat query." },
      { status: 500 }
    );
  }
}

