import { NextResponse } from "next/server";
import { verifyMathChallenge } from "@/lib/captcha";
import { saveSubmission, sendContactEmail } from "@/lib/contact";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  interests?: string[];
  captchaToken?: string;
  captchaAnswer?: string;
  website?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    if (body.website?.trim()) {
      return NextResponse.json({ error: "Verification failed." }, { status: 400 });
    }

    const captchaToken = body.captchaToken?.trim();
    const captchaAnswer = body.captchaAnswer?.trim();

    if (!captchaToken || !captchaAnswer) {
      return NextResponse.json(
        { error: "Please complete the human verification challenge." },
        { status: 400 }
      );
    }

    if (!verifyMathChallenge(captchaToken, captchaAnswer)) {
      return NextResponse.json(
        { error: "Incorrect or expired verification answer. Please try again." },
        { status: 400 }
      );
    }

    const name = body.name?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim() || "";
    const message = body.message?.trim();
    const interests = Array.isArray(body.interests) ? body.interests : [];

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid work email." }, { status: 400 });
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Please provide more details about your project (at least 10 characters)." },
        { status: 400 }
      );
    }

    const submission = await saveSubmission({
      name,
      email,
      company,
      message,
      interests,
    });

    const emailSent = await sendContactEmail(submission);

    return NextResponse.json({
      success: true,
      message: "Your discovery request has been received. We'll be in touch soon!",
      emailSent,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit your request. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
