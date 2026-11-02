
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, ArrowUpRight, CheckCircle2 } from "lucide-react";

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
  };

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden bg-[#f6f3fb] px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-purple-700">
            <span className="h-2 w-2 rounded-full bg-purple-600" />
            Let's Talk Properties
          </span>

          <h2 className="mt-7 max-w-xl text-4xl font-light leading-tight tracking-tight text-[#241735] sm:text-6xl">
            Your next chapter
            <br />
            <span className="font-semibold italic text-purple-700">
              starts here.
            </span>
          </h2>

          <p className="mt-7 max-w-md text-base leading-8 text-gray-600">
            Tell us what you are looking for. Our property specialists
            will help you discover residences that match your lifestyle
            and investment goals.
          </p>

          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <p className="text-3xl font-bold text-[#241735]">01</p>
              <p className="mt-1 text-xs text-gray-500">Share your requirements</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#241735]">02</p>
              <p className="mt-1 text-xs text-gray-500">Get expert guidance</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#241735]">03</p>
              <p className="mt-1 text-xs text-gray-500">Find your property</p>
            </div>
          </div>
        </motion.div>

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
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">
                Full Name
              </label>
              <div className="flex h-14 items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100">
                <User size={18} className="text-purple-500" />
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

            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">
                Email Address
              </label>
              <div className="flex h-14 items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100">
                <Mail size={18} className="text-purple-500" />
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

            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">
                Phone Number <span className="font-normal text-gray-400">(Optional)</span>
              </label>
              <div className="flex h-14 items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100">
                <Phone size={18} className="text-purple-500" />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#382052] text-sm font-bold text-white shadow-lg shadow-purple-900/15 transition hover:-translate-y-0.5 hover:bg-purple-700"
            >
              Send Enquiry
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            {submitted && (
              <p className="flex items-center gap-2 text-sm text-purple-700">
                <CheckCircle2 size={17} />
                Thank you! Your enquiry was received in this session.
              </p>
            )}

            <p className="text-center text-[11px] leading-5 text-gray-400">
              Your information will only be used to respond to your enquiry.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
