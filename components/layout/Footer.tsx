"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const exploreLinks = [
  "Luxury Apartments",
  "Premium Villas",
  "Off-Plan Properties",
  "Exclusive Residences",
  "Dubai Real Estate",
];

const socials = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#21152f] text-white">
      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />

      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

      {/* ── Main Footer ─────────────────────────────────────── */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {/* Brand */}
        <div>
          <Link href="/" className="group inline-flex items-center gap-3.5">
            <motion.span
              whileHover={{ scale: 1.06, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full ring-1 ring-purple-400/40 transition-shadow duration-300 group-hover:ring-purple-400 group-hover:shadow-[0_0_25px_-4px_rgba(168,85,247,0.6)] sm:h-16 sm:w-16"
            >
              <Image
                src="/logo.png"
                alt="SIR.ae logo"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </motion.span>

            <span className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight sm:text-2xl">
                SIR.ae
              </span>
              <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[3.5px] text-purple-300/80 sm:text-[10px]">
                Dubai Real Estate
              </span>
            </span>
          </Link>

          <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
            Your trusted partner for discovering exceptional luxury
            residences and premium real estate opportunities in Dubai.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-purple-400/50 hover:bg-purple-500/15 hover:text-purple-300"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[2px] text-purple-300">
            Quick Links
          </h3>

          <ul className="space-y-3.5 text-sm text-white/65">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 transition-colors hover:text-purple-300"
                >
                  <span className="h-px w-0 bg-purple-400 transition-all duration-300 group-hover:w-3" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[2px] text-purple-300">
            Explore
          </h3>

          <ul className="space-y-3.5 text-sm text-white/65">
            {exploreLinks.map((item) => (
              <li
                key={item}
                className="group flex cursor-default items-center gap-1.5 transition-colors hover:text-purple-300"
              >
                <span className="h-px w-0 bg-purple-400 transition-all duration-300 group-hover:w-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[2px] text-purple-300">
            Get In Touch
          </h3>

          <div className="space-y-4 text-sm text-white/65">
            <p className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-purple-400" />
              Dubai, United Arab Emirates
            </p>

            <p className="flex items-center gap-2.5">
              <Mail size={15} className="shrink-0 text-purple-400" />
              <a
                href="mailto:info@sir.ae"
                className="transition-colors hover:text-purple-300"
              >
                info@sir.ae
              </a>
            </p>

            <p className="flex items-center gap-2.5">
              <Phone size={15} className="shrink-0 text-purple-400" />
              <a
                href="tel:+971501234567"
                className="transition-colors hover:text-purple-300"
              >
                +971 50 123 4567
              </a>
            </p>

            <Link
              href="/#contact"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-purple-500/15 px-4 py-2.5 text-xs font-semibold text-purple-300 ring-1 ring-purple-400/30 transition hover:bg-purple-500/25 hover:text-purple-200"
            >
              <MessageCircle size={14} />
              Contact Our Team
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom Footer ──────────────────────────────────── */}
      <div className="relative border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>© 2026 SIR.ae. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="transition-colors hover:text-purple-300"
            >
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-white/15" />
            <Link
              href="/terms"
              className="transition-colors hover:text-purple-300"
            >
              Terms
            </Link>
          </div>

          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            Luxury Real Estate in Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}