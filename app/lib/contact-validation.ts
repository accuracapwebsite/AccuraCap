// Single source of truth for contact-form validation.
// Imported by BOTH the client form (instant feedback) and the API route
// (security — the server re-validates and never trusts the client).

export type ContactField = "name" | "email" | "phone" | "subject" | "message";

export type ContactInput = Record<ContactField, string>;

export type FieldErrors = Partial<Record<ContactField, string>>;

// Field order used for "focus the first invalid field" on the client.
export const FIELD_ORDER: ContactField[] = ["name", "email", "phone", "subject", "message"];

// Hard length limits — also wired to maxLength on the inputs.
export const LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  phone: { minDigits: 7, maxDigits: 15, max: 25 },
  subject: { min: 3, max: 150 },
  message: { min: 10, max: 5000 },
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Names: a letter to start, then letters (any language), spaces, . ' -
const NAME_REGEX = /^[\p{L}][\p{L}\s.'-]*$/u;
// Phones: digits and common separators only
const PHONE_ALLOWED_REGEX = /^[+\d\s()./-]+$/;
// Catches web addresses pasted into name/subject (a common spam tell)
const URL_REGEX = /(https?:\/\/|www\.|\b[a-z0-9-]+\.(com|net|org|io|ru|cn|info|xyz|top|biz|online|click)\b)/i;
// Same character repeated 10+ times — "aaaaaaaaaa", "!!!!!!!!!!" etc.
const REPEAT_REGEX = /(.)\1{9,}/;

/** Validate one field. Returns a human-readable error, or null if valid. */
export function validateField(field: ContactField, raw: string): string | null {
  const value = (raw ?? "").trim();

  switch (field) {
    case "name": {
      if (!value) return "Please enter your name.";
      if (value.length < LIMITS.name.min) return "Your name must be at least 2 characters.";
      if (value.length > LIMITS.name.max) return "Your name must be 80 characters or fewer.";
      if (REPEAT_REGEX.test(value)) return "Please enter your real name.";
      if (URL_REGEX.test(value)) return "Your name can’t contain a web address.";
      if (!NAME_REGEX.test(value))
        return "Please enter a valid name — letters, spaces, hyphens and apostrophes only.";
      return null;
    }

    case "email": {
      if (!value) return "Please enter your email address.";
      if (value.length > LIMITS.email.max) return "That email address is too long.";
      if (!EMAIL_REGEX.test(value))
        return "Please enter a valid email address (e.g. name@example.com).";
      return null;
    }

    case "phone": {
      if (!value) return "Please enter your phone number.";
      if (value.length > LIMITS.phone.max)
        return "That phone number is too long.";
      if (!PHONE_ALLOWED_REGEX.test(value))
        return "Please enter a valid phone number — digits, spaces, +, -, ( ) only.";
      const digits = value.replace(/\D/g, "");
      if (digits.length < LIMITS.phone.minDigits)
        return "Please enter a valid phone number (at least 7 digits).";
      if (digits.length > LIMITS.phone.maxDigits)
        return "Please enter a valid phone number (no more than 15 digits).";
      return null;
    }

    case "subject": {
      if (!value) return "Please enter a subject.";
      if (value.length < LIMITS.subject.min) return "Your subject must be at least 3 characters.";
      if (value.length > LIMITS.subject.max) return "Your subject must be 150 characters or fewer.";
      if (URL_REGEX.test(value)) return "Please remove the web address from the subject.";
      return null;
    }

    case "message": {
      if (!value) return "Please enter a message.";
      if (value.length < LIMITS.message.min) return "Your message must be at least 10 characters.";
      if (value.length > LIMITS.message.max)
        return "Your message must be 5,000 characters or fewer.";
      if (REPEAT_REGEX.test(value))
        return "Your message looks like spam — please write a real message.";
      return null;
    }

    default:
      return null;
  }
}

/** Validate the whole form. Returns a map of field -> error (empty if all valid). */
export function validateContact(input: Partial<ContactInput>): FieldErrors {
  const errors: FieldErrors = {};
  for (const field of FIELD_ORDER) {
    const error = validateField(field, input[field] ?? "");
    if (error) errors[field] = error;
  }
  return errors;
}
