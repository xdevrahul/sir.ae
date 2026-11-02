"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#1a0f2e]/80 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-purple-500 font-bold">
            S
          </span>
          <span className="text-lg font-bold tracking-tight">SIR.ae</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-white/70 transition hover:text-purple-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+971501234567"
            className="flex items-center gap-2 text-xs text-white/80"
          >
            <Phone size={15} />
            +971 50 123 4567
          </a>

          <a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md bg-purple-500 px-4 py-3 text-xs font-semibold transition hover:bg-purple-600"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#1a0f2e] md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/10 py-4 text-sm text-white/80 hover:text-purple-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}