"use client";

import { useCallback, useEffect, useState } from "react";
import { interestOptions } from "@/lib/data";

type FormState = "idle" | "loading" | "success" | "error";

type CaptchaChallenge = {
  token: string;
  question: string;
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [captcha, setCaptcha] = useState<CaptchaChallenge | null>(null);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaLoading, setCaptchaLoading] = useState(true);

  const loadCaptcha = useCallback(async () => {
    setCaptchaLoading(true);
    try {
      const res = await fetch("/api/contact/challenge");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load verification.");
      setCaptcha(data);
      setCaptchaAnswer("");
    } catch {
      setCaptcha(null);
      setErrorMessage("Could not load verification challenge. Please refresh the page.");
    } finally {
      setCaptchaLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCaptcha();
  }, [loadCaptcha]);

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    if (!captcha?.token) {
      setFormState("error");
      setErrorMessage("Verification challenge not ready. Please wait or refresh.");
      return;
    }

    if (!captchaAnswer.trim()) {
      setFormState("error");
      setErrorMessage("Please solve the verification challenge.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
      interests,
      captchaToken: captcha.token,
      captchaAnswer,
      website: formData.get("website") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 400 && data.error?.includes("verification")) {
          await loadCaptcha();
        }
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setFormState("success");
      form.reset();
      setInterests([]);
      setCaptchaAnswer("");
      await loadCaptcha();
    } catch (err) {
      setFormState("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (formState === "success") {
    return (
      <div className="glass rounded-3xl p-12 border border-[rgba(16,185,129,0.3)] text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display text-2xl font-bold mb-3">Request Sent!</h3>
        <p className="text-[#94A3B8] mb-6">
          Thanks for reaching out. We&apos;ll get back to you within 4 business hours.
        </p>
        <button
          onClick={() => {
            setFormState("idle");
            loadCaptcha();
          }}
          className="btn-ghost"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-3xl p-12 border border-[rgba(148,163,184,0.1)] text-left relative"
    >
      <div className="orb w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(124,58,237,0.12),transparent_65%)] -bottom-[100px] -right-[100px] blur-[60px]" />

      {/* Honeypot — hidden from humans, bots often fill this */}
      <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="form-label">
            FULL NAME
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Alex Martinez"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            WORK EMAIL
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="alex@company.com"
            className="form-input"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="company" className="form-label">
          COMPANY & ROLE
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Corp — Head of Technology"
          className="form-input"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="form-label">
          WHAT ARE YOU BUILDING?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project, timeline, and current pain points..."
          className="form-input resize-y"
        />
      </div>

      <div className="mb-6">
        <span className="form-label">I&apos;M INTERESTED IN</span>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => toggleInterest(option)}
              className={`interest-tag ${interests.includes(option) ? "active" : ""}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 p-5 rounded-xl border border-[rgba(6,182,212,0.2)] bg-[rgba(6,182,212,0.04)]">
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="form-label !mb-0">HUMAN VERIFICATION</span>
          <button
            type="button"
            onClick={loadCaptcha}
            disabled={captchaLoading}
            className="text-[#06B6D4] text-xs font-mono hover:text-[#67E8F9] transition-colors disabled:opacity-50"
            aria-label="Refresh verification challenge"
          >
            ↻ New challenge
          </button>
        </div>

        {captchaLoading ? (
          <p className="text-[#64748B] text-sm">Loading challenge...</p>
        ) : captcha ? (
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="font-display font-semibold text-[#F8FAFC] text-lg shrink-0">
              {captcha.question}
            </p>
            <input
              type="number"
              inputMode="numeric"
              required
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              placeholder="Your answer"
              className="form-input sm:max-w-[140px]"
              aria-label="Verification answer"
            />
          </div>
        ) : (
          <p className="text-[#FCA5A5] text-sm">Failed to load challenge. Click refresh above.</p>
        )}
      </div>

      {formState === "error" && (
        <div className="mb-4 p-3 rounded-lg bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-[#FCA5A5] text-sm">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={formState === "loading" || captchaLoading || !captcha}
        className="btn-primary w-full justify-center !py-4 !text-base"
      >
        {formState === "loading" ? "Sending..." : "Send Discovery Request ⚡"}
      </button>
      <p className="text-center text-[#334155] text-xs mt-3">
        We respond within 4 business hours · Your information is private and secure
      </p>
    </form>
  );
}
