"use client";

import { useActionState } from "react";
import { ArrowUpRight } from "lucide-react";
import { sendEnquiry, type EnquiryState } from "@/app/actions";

const field =
  "w-full border-b border-line bg-transparent py-3 text-base outline-none transition-colors placeholder:text-[#8a949b] focus:border-ink";

export default function ContactForm() {
  const [state, action, pending] = useActionState<EnquiryState, FormData>(
    sendEnquiry,
    null
  );

  return (
    <form action={action} className="flex flex-col justify-center gap-7" noValidate>
      {/* Honeypot: real users ko dikhta nahi */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="block text-sm text-steel">
        Your name
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          defaultValue={state?.values.name}
          className={field}
          placeholder="Full name"
        />
      </label>

      <label className="block text-sm text-steel">
        Email address
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={state?.values.email}
          className={field}
          placeholder="you@example.com"
        />
      </label>

      <label className="block text-sm text-steel">
        Phone number (optional)
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          defaultValue={state?.values.phone}
          className={field}
          placeholder="+971 50 000 0000"
        />
      </label>

      <button
        type="submit"
        disabled={pending}
        className="mt-2 flex items-center justify-center gap-4 bg-ink px-8 py-5 text-sm text-white transition-colors hover:bg-steel disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send enquiry"}
        {!pending && <ArrowUpRight size={17} />}
      </button>

      <div aria-live="polite" className="min-h-6 text-sm">
        {state?.error && <p className="text-red-700">{state.error}</p>}
        {state?.ok && (
          <p className="text-green-800">
            Thank you. Our team will contact you shortly.
          </p>
        )}
      </div>
    </form>
  );
}