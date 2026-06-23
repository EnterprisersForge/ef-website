import { createSupabaseAdmin } from "@/lib/supabase/server";

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  interests: string[];
  createdAt: string;
};

type ContactSubmissionRow = {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  interests: string[];
  created_at: string;
};

function mapRow(row: ContactSubmissionRow): ContactSubmission {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    company: row.company,
    message: row.message,
    interests: row.interests ?? [],
    createdAt: row.created_at,
  };
}

export async function saveSubmission(
  data: Omit<ContactSubmission, "id" | "createdAt">
): Promise<ContactSubmission> {
  const supabase = createSupabaseAdmin();

  const { data: row, error } = await supabase
    .from("contact_submissions")
    .insert({
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message,
      interests: data.interests,
    })
    .select("id, name, email, company, message, interests, created_at")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return mapRow(row as ContactSubmissionRow);
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
