"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Navigation,
} from "lucide-react";

export default function VisitUs() {
  const contactItems = [
    {
      icon: MapPin,
      title: "OUR LOCATION",
      value: "Dubai, United Arab Emirates",
    },
    {
      icon: Phone,
      title: "CALL US",
      value: "+971 00 000 0000",
      href: "tel:+971000000000",
    },
    {
      icon: Mail,
      title: "EMAIL US",
      value: "hello@sirproperties.ae",
      href: "mailto:hello@sirproperties.ae",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#faf8fd] px-6 py-24 text-[#241735] lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full border border-purple-200 bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-[4px] text-purple-700">
            Visit Us
          </span>

          <h2 className="mt-6 text-4xl font-light tracking-tight sm:text-6xl">
            Visit us in{" "}
            <span className="font-semibold text-purple-700">Dubai.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            We would be delighted to help you explore Dubai's
            finest residential and investment opportunities.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-3xl border border-purple-100 bg-white p-8 shadow-[0_15px_50px_rgba(45,25,70,0.06)] sm:p-10"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-purple-600">
                Get In Touch
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[#241735]">
                Let's connect.
              </h3>

              <div className="mt-10 space-y-9">
                {contactItems.map((item) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-purple-50 text-purple-700">
                      <item.icon size={21} />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-2 text-[10px] font-bold tracking-[2px] text-gray-400">
                        {item.title}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="break-words text-base font-medium text-[#241735] transition hover:text-purple-700"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base font-medium text-[#241735]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Card — Logo + Name */}
            <div className="mt-12 rounded-2xl bg-[#382052] p-7 text-white">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full ring-1 ring-purple-400/40">
                  <Image
                    src="/logo.png"
                    alt="SIR.ae logo"
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[3px] text-purple-200">
                    SIR.ae
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/90">
                    Luxury Real Estate
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-5">
                <p className="text-xs text-white/65">
                  Exclusive Dubai Properties
                </p>

                <span className="text-xs font-semibold text-purple-200">
                  DUBAI · UAE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col overflow-hidden rounded-3xl border border-purple-100 bg-white p-3 shadow-[0_15px_50px_rgba(45,25,70,0.06)]"
          >
            <div className="flex items-center justify-between gap-3 px-4 py-4">
              <div>
                <h3 className="text-sm font-bold text-[#241735]">
                  Find Our Location
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Dubai, United Arab Emirates
                </p>
              </div>

              <a
                href="https://www.google.com/maps?q=Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-2 rounded-full bg-purple-50 px-4 py-2.5 text-xs font-semibold text-purple-700 transition hover:bg-purple-100"
              >
                <Navigation size={14} />
                Directions
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="min-h-[350px] flex-1 overflow-hidden rounded-2xl bg-purple-50">
              <iframe
                title="SIR.ae Dubai Location"
                src="https://www.google.com/maps?q=Dubai&output=embed"
                width="100%"
                height="100%"
                className="min-h-[350px] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}