"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";

export default function EnquirySection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Enquiry:", form);

    setSubmitted(true);
    setForm({ name: "", email: "", phone: "" });

    // 4s baad success message auto-hide
    setTimeout(() => setSubmitted(false), 4000);
  };

  const steps = [
    { num: "01", label: "Share your requirements" },
    { num: "02", label: "Get expert guidance" },
    { num: "03", label: "Find your property" },
  ];

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden bg-[#f6f3fb] px-5 py-24 sm:px-8 lg:py-32"
    >
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ── Centered Title Block ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-purple-700">
            <span className="h-2 w-2 rounded-full bg-purple-600" />
            Let&apos;s Talk Properties
          </span>

          <h2 className="mt-6 text-4xl font-light leading-tight tracking-tight text-[#241735] sm:text-5xl lg:text-6xl">
            Your next chapter
            <br />
            <span className="font-semibold italic text-purple-700">
              starts here.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
            Tell us what you are looking for. Our property specialists
            will help you discover residences that match your lifestyle
            and investment goals.
          </p>
        </motion.div>

        {/* ── Steps + Form Grid ────────────────────────────── */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Steps (left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-purple-600">
                How It Works
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#241735] sm:text-3xl">
                Three simple steps.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
                From first conversation to finding your dream home — we
                make the journey effortless.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="group flex items-center gap-5 rounded-2xl border border-purple-100 bg-white p-5 shadow-[0_6px_25px_rgba(55,30,90,0.04)] transition hover:border-purple-300 hover:shadow-[0_15px_40px_rgba(55,30,90,0.10)]"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-purple-50 text-lg font-bold text-purple-700 transition group-hover:bg-purple-600 group-hover:text-white">
                    {step.num}
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#241735]">
                      Step {step.num}
                    </p>
                    <p className="mt-0.5 text-sm text-gray-500">
                      {step.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enquiry Form (right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-purple-100 bg-white p-7 shadow-[0_25px_80px_rgba(55,30,90,0.10)] sm:p-10"
          >
            <div className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-purple-600">
                Enquiry Form
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#241735]">
                How can we help you?
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Fill in your details and our team will contact you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-600">
                  Full Name
                </label>
                <div className="flex h-14 items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100">
                  <FiUser size={18} className="shrink-0 text-purple-500" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-600">
                  Email Address
                </label>
                <div className="flex h-14 items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100">
                  <FiMail size={18} className="shrink-0 text-purple-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-600">
                  Phone Number{" "}
                  <span className="font-normal text-gray-400">(Optional)</span>
                </label>
                <div className="flex h-14 items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100">
                  <FiPhone size={18} className="shrink-0 text-purple-500" />
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#382052] text-sm font-bold text-white shadow-lg shadow-purple-900/15 transition hover:-translate-y-0.5 hover:bg-purple-700"
              >
                Send Enquiry
                <FiArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              {/* Success */}
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg bg-purple-50 px-3 py-2.5 text-sm text-purple-700"
                >
                  <FiCheckCircle size={17} className="shrink-0" />
                  Thank you! Your enquiry was received.
                </motion.p>
              )}

              <p className="text-center text-[11px] leading-5 text-gray-400">
                Your information will only be used to respond to your enquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}