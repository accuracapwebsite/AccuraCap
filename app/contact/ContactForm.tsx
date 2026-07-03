"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  validateField,
  validateContact,
  FIELD_ORDER,
  LIMITS,
  type ContactField,
  type FieldErrors,
} from "@/app/lib/contact-validation";

type Status = "idle" | "submitting" | "success" | "error";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

const fields: {
  key: Exclude<ContactField, "message">;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  inputMode?: "text" | "email" | "tel";
  maxLength: number;
}[] = [
  { key: "name", label: "Name", type: "text", placeholder: "Your full name", autoComplete: "name", maxLength: LIMITS.name.max },
  { key: "email", label: "Email", type: "email", placeholder: "name@example.com", autoComplete: "email", inputMode: "email", maxLength: LIMITS.email.max },
  { key: "phone", label: "Phone", type: "tel", placeholder: "e.g. +91 98765 43210", autoComplete: "tel", inputMode: "tel", maxLength: LIMITS.phone.max },
  { key: "subject", label: "Subject", type: "text", placeholder: "What is this about?", autoComplete: "off", maxLength: LIMITS.subject.max },
];

const initialValues = { name: "", email: "", phone: "", subject: "", message: "", company: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const update =
    (key: keyof typeof initialValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setValues((v) => ({ ...v, [key]: value }));
      // Clear a field's error as soon as the user starts correcting it.
      if (key !== "company" && fieldErrors[key as ContactField]) {
        setFieldErrors((prev) => {
          const next = { ...prev };
          delete next[key as ContactField];
          return next;
        });
      }
    };

  // Validate a single field when the user leaves it.
  const handleBlur = (key: ContactField) => () => {
    const error = validateField(key, values[key]);
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (error) next[key] = error;
      else delete next[key];
      return next;
    });
  };

  const focusField = (key: ContactField) => {
    const el = formRef.current?.querySelector<HTMLElement>(`#contact-${key}`);
    el?.focus();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    setErrorMsg("");

    // 1) Validate every field up front and surface inline errors.
    const errors = validateContact(values);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      const firstInvalid = FIELD_ORDER.find((f) => errors[f]);
      if (firstInvalid) focusField(firstInvalid);
      return;
    }
    setFieldErrors({});

    // 2) reCAPTCHA must be solved.
    if (!captchaToken) {
      setStatus("error");
      setErrorMsg("Please complete the reCAPTCHA verification before sending.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, recaptchaToken: captchaToken }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        // The server may return field-level errors (e.g. on a tampered request).
        if (data.fieldErrors && typeof data.fieldErrors === "object") {
          setFieldErrors(data.fieldErrors as FieldErrors);
          const firstInvalid = FIELD_ORDER.find((f) => data.fieldErrors[f]);
          if (firstInvalid) focusField(firstInvalid);
        }
        setErrorMsg(data.error || "Could not send your message. Please try again.");
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
        return;
      }

      setStatus("success");
      setValues(initialValues);
      setFieldErrors({});
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

  const inputClass = (hasError: boolean) =>
    `w-full mt-1.5 px-4 py-2.5 bg-surface border text-[15.5px] text-black placeholder:text-[#595959] focus:outline-none transition-colors disabled:opacity-60 ${
      hasError ? "border-accent focus:border-accent" : "border-black/55 focus:border-black"
    }`;

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
      {fields.map((field) => {
        const error = fieldErrors[field.key];
        return (
          <div key={field.key}>
            <label htmlFor={`contact-${field.key}`} className="text-black text-[14.5px] tracking-wide font-medium">
              {field.label}
            </label>
            <input
              id={`contact-${field.key}`}
              name={field.key}
              type={field.type}
              inputMode={field.inputMode}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              maxLength={field.maxLength}
              value={values[field.key]}
              onChange={update(field.key)}
              onBlur={handleBlur(field.key)}
              disabled={isSubmitting}
              required
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `contact-${field.key}-error` : undefined}
              className={inputClass(Boolean(error))}
            />
            {error && (
              <p id={`contact-${field.key}-error`} role="alert" className="mt-1 text-[13px] text-accent">
                {error}
              </p>
            )}
          </div>
        );
      })}

      <div>
        <label htmlFor="contact-message" className="text-black text-[14.5px] tracking-wide font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Your message"
          value={values.message}
          onChange={update("message")}
          onBlur={handleBlur("message")}
          disabled={isSubmitting}
          required
          maxLength={LIMITS.message.max}
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
          className={inputClass(Boolean(fieldErrors.message))}
        />
        {fieldErrors.message && (
          <p id="contact-message-error" role="alert" className="mt-1 text-[13px] text-accent">
            {fieldErrors.message}
          </p>
        )}
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
      {status === "error" && errorMsg && (
        <p className="text-[14.5px] text-accent border-l-2 border-accent pl-3 py-1" role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
