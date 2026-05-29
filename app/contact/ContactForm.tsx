"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type FieldKey = "name" | "email" | "phone" | "subject";
type Status = "idle" | "submitting" | "success" | "error";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

const fields: { key: FieldKey; label: string; type: string; placeholder: string; autoComplete: string }[] = [
  { key: "name", label: "Name", type: "text", placeholder: "Name", autoComplete: "name" },
  { key: "email", label: "Email", type: "email", placeholder: "Email", autoComplete: "email" },
  { key: "phone", label: "Phone", type: "tel", placeholder: "Enter your contact details", autoComplete: "tel" },
  { key: "subject", label: "Subject", type: "text", placeholder: "Subject", autoComplete: "off" },
];

const initialValues = { name: "", email: "", phone: "", subject: "", message: "", company: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const update = (key: keyof typeof initialValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (!captchaToken) {
      setStatus("error");
      setErrorMsg("Please complete the reCAPTCHA verification.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, recaptchaToken: captchaToken }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Could not send your message. Please try again.");
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
        return;
      }

      setStatus("success");
      setValues(initialValues);
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {fields.map((field) => (
        <div key={field.key}>
          <label htmlFor={`contact-${field.key}`} className="text-black text-[14.5px] tracking-wide font-medium">
            {field.label}
          </label>
          <input
            id={`contact-${field.key}`}
            name={field.key}
            type={field.type}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            value={values[field.key]}
            onChange={update(field.key)}
            disabled={isSubmitting}
            required
            className="w-full mt-1.5 px-4 py-2.5 bg-surface border border-black/55 text-[15.5px] text-black placeholder:text-black/65 focus:outline-none focus:border-black transition-colors disabled:opacity-60"
          />
        </div>
      ))}

      <div>
        <label htmlFor="contact-message" className="text-black text-[14.5px] tracking-wide font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Message"
          value={values.message}
          onChange={update("message")}
          disabled={isSubmitting}
          required
          maxLength={5000}
          className="w-full mt-1.5 px-4 py-2.5 bg-surface border border-black/55 text-[15.5px] text-black placeholder:text-black/65 focus:outline-none focus:border-black transition-colors disabled:opacity-60"
        />
      </div>

      {/* Honeypot — hidden from real users; bots tend to fill every field */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-company">Company (do not fill)</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={update("company")}
        />
      </div>

      {RECAPTCHA_SITE_KEY && (
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={(token) => setCaptchaToken(token)}
          onExpired={() => setCaptchaToken(null)}
          onErrored={() => setCaptchaToken(null)}
        />
      )}

      <button
        type="submit"
        disabled={isSubmitting || !captchaToken}
        className="w-full bg-black text-white py-3 text-[14px] tracking-[0.14em] uppercase font-medium hover:bg-black/85 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-[14.5px] text-black/75 border-l-2 border-accent pl-3 py-1" role="status">
          Thanks — your message has been sent. We&apos;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-[14.5px] text-accent border-l-2 border-accent pl-3 py-1" role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
