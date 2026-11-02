"use client";

import { useActionState } from "react";
import { ArrowUpRight } from "lucide-react";
import { sendEnquiry, type EnquiryState } from "@/app/actions";

const field =
  "w-full rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/35 hover:border-white/20 focus:border-lilac/50 focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.1)]";

const labelText = "text-[10px] tracking-[2px] text-lilac/70";

export default function ContactForm() {
  const [state, action, pending] = useActionState<EnquiryState, FormData>(
    sendEnquiry,
    null
  );

  return (
    <form
      action={action}
      className="relative flex flex-col justify-center gap-6"
      noValidate
    >
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Header */}
      <div className="mb-1 flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-glow shadow-[0_0_10px_#a855f7]" />
        <span className={labelText}>ENQUIRY FORM</span>
      </div>

      <label className="block">
        <span className={labelText}>YOUR NAME</span>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          defaultValue={state?.values.name}
          className={`${field} mt-2`}
          placeholder="Full name"
        />
      </label>

      <label className="block">
        <span className={labelText}>EMAIL ADDRESS</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={state?.values.email}
          className={`${field} mt-2`}
          placeholder="you@example.com"
        />
      </label>

      <label className="block">
        <span className={labelText}>
          PHONE NUMBER <span className="text-white/30">(OPTIONAL)</span>
        </span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          defaultValue={state?.values.phone}
          className={`${field} mt-2`}
          placeholder="+971 50 000 0000"
        />
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={pending}
        className="group mt-2 flex w-full items-center justify-between rounded-full bg-gradient-to-r from-brand-500 to-glow px-7 py-5 text-[10px] tracking-[2px] text-white shadow-glow-purple transition-all hover:shadow-glow-purple-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none"
      >
        <span>{pending ? "SENDING..." : "SEND ENQUIRY"}</span>
        {!pending && (
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        )}
        {pending && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        )}
      </button>

      {/* Status messages */}
      <div aria-live="polite" className="min-h-6 text-xs">
        {state?.error && (
          <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-red-200 backdrop-blur-xl">
            {state.error}
          </p>
        )}
        {state?.ok && (
          <p className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-emerald-200 backdrop-blur-xl">
            Thank you. Our team will contact you shortly.
          </p>
        )}
      </div>
    </form>
  );
}