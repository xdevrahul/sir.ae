
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Send,
  Clock,
  MessageCircle,
  Building2,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const interest = formData.get("interest");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Property Enquiry - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterested In: ${interest}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:info@sir.ae?subject=${subject}&body=${body}`;

    setSubmitted(true);
    form.reset();
  };

  return (
    <main className="overflow-hidden bg-[#faf8fd] text-[#21152f]">

      {/* Hero Section */}
      <section className="relative mt-6 flex min-h-[390px] items-center justify-center overflow-hidden bg-[#21152f] px-6 py-20 text-center text-white md:min-h-[430px]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-[#21152f]/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#21152f]/40 via-[#21152f]/50 to-[#21152f]/90" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[5px] text-purple-200">
            Get In Touch · SIR.ae
          </p>

          <h1 className="text-4xl font-light leading-tight sm:text-6xl lg:text-7xl">
            Let's Start A
            <span className="mt-2 block font-semibold text-purple-200">
              Conversation
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/80 sm:text-base">
            Have a question or looking for your next property in Dubai?
            We would love to hear from you.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
      </section>

      {/* Contact Information + Form */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">

        <div className="grid items-start gap-12 lg:grid-cols-5">

          {/* Left Contact Information */}
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600">
              Contact Information
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              We're Here To
              <span className="block text-purple-600">
                Help You
              </span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-500">
              Whether you are exploring luxury residences, investment
              opportunities or need more information about a development,
              get in touch with our team.
            </p>

            {/* Contact Cards */}
            <div className="mt-9 space-y-5">

              <a
                href="mailto:info@sir.ae"
                className="group flex items-center gap-4 rounded-xl border border-purple-100 bg-white p-5 transition hover:border-purple-300 hover:shadow-lg"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-purple-50 text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="text-xs text-gray-400">Email Us</p>
                  <p className="mt-1 text-sm font-bold text-[#21152f]">
                    info@sir.ae
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-purple-100 bg-white p-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-purple-50 text-purple-600">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-xs text-gray-400">Our Location</p>
                  <p className="mt-1 text-sm font-bold text-[#21152f]">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-purple-100 bg-white p-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-purple-50 text-purple-600">
                  <Clock size={21} />
                </div>

                <div>
                  <p className="text-xs text-gray-400">Business Enquiries</p>
                  <p className="mt-1 text-sm font-bold text-[#21152f]">
                    Contact us by email
                  </p>
                </div>
              </div>

            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 rounded-xl bg-[#21152f] p-6 text-white">
              <div className="flex items-center gap-3">
                <MessageCircle size={25} className="text-purple-300" />
                <h3 className="font-bold">Have a Property Enquiry?</h3>
              </div>

              <p className="mt-3 text-sm leading-7 text-white/60">
                Send us an email with your requirements and our team can
                assist you.
              </p>

              <a
                href="mailto:info@sir.ae"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-purple-300 transition hover:text-white"
              >
                Email Our Team
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          {/* Right Enquiry Form */}
          <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm sm:p-9 lg:col-span-3">

            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600">
                Send An Enquiry
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Tell Us What You're Looking For
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Fill in the details below and get in touch with our team.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-lg border border-purple-200 bg-purple-50 p-4 text-sm text-purple-800">
                <CheckCircle2 size={20} className="shrink-0" />
                <p>
                  Your email application has been opened. Please send the
                  prepared email to complete your enquiry.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-bold text-gray-700">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="h-12 w-full rounded-lg border border-gray-200 bg-[#faf8fd] px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold text-gray-700">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="h-12 w-full rounded-lg border border-gray-200 bg-[#faf8fd] px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:bg-white"
                  />
                </div>

              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-bold text-gray-700">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+971"
                    className="h-12 w-full rounded-lg border border-gray-200 bg-[#faf8fd] px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold text-gray-700">
                    Interested In *
                  </label>

                  <select
                    name="interest"
                    required
                    defaultValue=""
                    className="h-12 w-full rounded-lg border border-gray-200 bg-[#faf8fd] px-4 text-sm text-gray-600 outline-none transition focus:border-purple-500 focus:bg-white"
                  >
                    <option value="" disabled>
                      Select Property Type
                    </option>
                    <option value="Apartment">Luxury Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Off-Plan">Off-Plan Property</option>
                    <option value="Investment">Investment Opportunity</option>
                    <option value="Other">Other Enquiry</option>
                  </select>
                </div>

              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-gray-700">
                  Your Message *
                </label>

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your property requirements..."
                  className="w-full resize-none rounded-lg border border-gray-200 bg-[#faf8fd] p-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#382052] py-4 text-sm font-bold text-white transition hover:bg-purple-600 sm:w-auto sm:px-10"
              >
                Send Enquiry
                <Send size={17} />
              </button>

              <p className="text-xs leading-6 text-gray-400">
                By submitting this form, you agree to be contacted regarding
                your property enquiry.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* Location Section */}
      <section className="bg-[#f1ebfa] px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600">
              Find Us
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Our Location
            </h2>

            <p className="mt-4 text-sm text-gray-500">
              Serving property enquiries focused on Dubai, UAE.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-purple-100 bg-white p-2 shadow-sm">
            <iframe
              title="Dubai Map"
              src="https://www.google.com/maps?q=Dubai,UAE&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-purple-600">
                <Building2 size={22} />
              </div>

              <div>
                <p className="text-sm font-bold">SIR.ae</p>
                <p className="text-xs text-gray-500">
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>

            <Link
              href="https://www.google.com/maps/search/?api=1&query=Dubai+UAE"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-bold text-purple-700 transition hover:text-purple-900"
            >
              Open In Google Maps
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#21152f] px-6 py-20 text-center text-white lg:py-24">

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-600/20 blur-[100px]" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-purple-500/20 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[4px] text-purple-300">
            SIR.ae · Dubai Real Estate
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
            Let's Find Your
            <span className="block text-purple-300">
              Next Property
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/65">
            Explore our collection of premium properties and take the next
            step towards your Dubai real estate journey.
          </p>

          <Link
            href="/projects"
            className="mt-9 inline-flex items-center justify-center gap-3 rounded-md bg-purple-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-purple-500"
          >
            Explore Properties
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

    </main>
  );
}
