import { NextResponse } from "next/server";
import { createMathChallenge } from "@/lib/captcha";

export async function GET() {
  try {
    const challenge = createMathChallenge();
    return NextResponse.json(challenge);
  } catch (error) {
    console.error("Captcha challenge error:", error);
    return NextResponse.json(
      { error: "Unable to load verification challenge." },
      { status: 500 }
    );
  }
}
