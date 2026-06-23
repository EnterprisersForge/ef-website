import { createHmac, timingSafeEqual } from "crypto";

const TTL_MS = 10 * 60 * 1000;

type ChallengePayload = {
  a: number;
  b: number;
  op: "+" | "-";
  exp: number;
};

function getSecret(): string {
  const secret =
    process.env.CONTACT_CAPTCHA_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!secret) {
    throw new Error(
      "Missing CONTACT_CAPTCHA_SECRET (or SUPABASE_SERVICE_ROLE_KEY fallback)."
    );
  }

  return secret;
}

function sign(data: string): string {
  return createHmac("sha256", getSecret()).update(data).digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export function createMathChallenge(): { token: string; question: string } {
  const op: "+" | "-" = Math.random() > 0.5 ? "+" : "-";
  let a = Math.floor(Math.random() * 12) + 2;
  let b = Math.floor(Math.random() * 10) + 1;

  if (op === "-" && b > a) {
    [a, b] = [b, a];
  }

  const payload: ChallengePayload = {
    a,
    b,
    op,
    exp: Date.now() + TTL_MS,
  };

  const data = JSON.stringify(payload);
  const token = `${Buffer.from(data).toString("base64url")}.${sign(data)}`;
  const question =
    op === "+" ? `What is ${a} + ${b}?` : `What is ${a} − ${b}?`;

  return { token, question };
}

export function verifyMathChallenge(token: string, answer: string): boolean {
  const [payloadB64, signature] = token.split(".");
  if (!payloadB64 || !signature) return false;

  let data: string;
  try {
    data = Buffer.from(payloadB64, "base64url").toString("utf-8");
  } catch {
    return false;
  }

  if (!safeEqual(sign(data), signature)) return false;

  let payload: ChallengePayload;
  try {
    payload = JSON.parse(data) as ChallengePayload;
  } catch {
    return false;
  }

  if (!payload.a || !payload.b || !payload.op || !payload.exp) return false;
  if (Date.now() > payload.exp) return false;

  const expected =
    payload.op === "+" ? payload.a + payload.b : payload.a - payload.b;

  const userAnswer = Number.parseInt(answer.trim(), 10);
  if (Number.isNaN(userAnswer)) return false;

  return userAnswer === expected;
}
