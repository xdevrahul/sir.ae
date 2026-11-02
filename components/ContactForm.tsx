"use client";

import { useActionState } from "react";
import { ArrowUpRight } from "lucide-react";
import { sendEnquiry, type EnquiryState } from "@/app/actions";

const field =
  "w-full border-b border-[#d8dcdf] bg-transparent py-3 text-sm text-[#20282f] outline-none transition-colors placeholder:text-[#92999e] focus:border-[#263d50]";

const labelText = "text-[10px] tracking-[2px] text-[#8295a5]";

export default function ContactForm() {
  const [state, action, pending] = useActionState<EnquiryState, FormData>(
    sendEnquiry,
    null
  );

  return (
    <form
      action={action}
      className="relative flex flex-col justify-center gap-8"
      noValidate
    >
      {/* Honeypot: real users ko dikhta nahi */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mb-2">
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
          PHONE NUMBER <span className="text-[#92999e]">(OPTIONAL)</span>
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

      <button
        type="submit"
        disabled={pending}
        className="group mt-2 flex w-full items-center justify-between bg-[#263d50] px-7 py-5 text-[10px] tracking-[2px] text-white transition-colors hover:bg-[#405b72] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span>{pending ? "SENDING..." : "SEND ENQUIRY"}</span>
        {!pending && (
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        )}
      </button>

      <div aria-live="polite" className="min-h-6 text-xs">
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