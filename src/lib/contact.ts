import { promises as fs } from "fs";
import path from "path";

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  interests: string[];
  createdAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const SUBMISSIONS_FILE = path.join(DATA_DIR, "contact-submissions.json");

export async function saveSubmission(
  data: Omit<ContactSubmission, "id" | "createdAt">
): Promise<ContactSubmission> {
  await fs.mkdir(DATA_DIR, { recursive: true });

  let submissions: ContactSubmission[] = [];
  try {
    const raw = await fs.readFile(SUBMISSIONS_FILE, "utf-8");
    submissions = JSON.parse(raw);
  } catch {
    submissions = [];
  }

  const submission: ContactSubmission = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...data,
  };

  submissions.push(submission);
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), "utf-8");

  return submission;
}

export async function sendContactEmail(submission: ContactSubmission): Promise<boolean> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    return false;
  }

  const nodemailer = await import("nodemailer");

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: SMTP_PORT === "465",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const interests =
    submission.interests.length > 0 ? submission.interests.join(", ") : "Not specified";

  await transporter.sendMail({
    from: `"EnterprisersForge Contact" <${SMTP_USER}>`,
    to: CONTACT_TO_EMAIL,
    replyTo: submission.email,
    subject: `New Discovery Request from ${submission.name}`,
    text: [
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      `Company: ${submission.company || "Not provided"}`,
      `Interests: ${interests}`,
      ``,
      `Message:`,
      submission.message,
    ].join("\n"),
    html: `
      <h2>New Discovery Request</h2>
      <p><strong>Name:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${submission.email}">${submission.email}</a></p>
      <p><strong>Company:</strong> ${submission.company || "Not provided"}</p>
      <p><strong>Interests:</strong> ${interests}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${submission.message.replace(/\n/g, "<br>")}</p>
    `,
  });

  return true;
}
