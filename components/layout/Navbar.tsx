"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  /* ── Scroll pe navbar compact + zyada blur ───────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Route change pe mobile menu auto-close ──────────────── */
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /* ── Body scroll lock jab mobile menu khula ho ───────────── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 z-50 w-full border-b text-white transition-all duration-500 ${
        scrolled
          ? "border-white/10 bg-[#1a0f2e]/90 shadow-lg shadow-black/20 backdrop-blur-2xl"
          : "border-transparent bg-[#1a0f2e]/60 backdrop-blur-xl"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 transition-all duration-500 lg:px-12 ${
          scrolled ? "h-[72px]" : "h-[88px]"
        }`}
      >
        {/* ── Logo ───────────────────────────────────────────── */}
        <Link href="/" className="group flex items-center gap-3.5">
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
              priority
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

        {/* ── Desktop Navigation ─────────────────────────────── */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative rounded-full px-4 py-2.5 text-sm transition-colors duration-300 ${
                  active
                    ? "text-white"
                    : "text-white/70 hover:text-purple-300"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-purple-500/15 ring-1 ring-purple-400/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>

                {!active && (
                  <span className="absolute inset-x-4 bottom-1.5 h-[1.5px] origin-left scale-x-0 rounded-full bg-purple-400/70 transition-transform duration-300 group-hover:scale-x-100" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Contact (Desktop) ──────────────────────────────── */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+971501234567"
            className="group flex items-center gap-2 text-xs text-white/80 transition hover:text-purple-300"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 transition group-hover:border-purple-400/40 group-hover:bg-purple-500/10">
              <FiPhone size={13} />
            </span>
            <span className="hidden xl:inline">+971 50 123 4567</span>
          </a>

          <motion.a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 rounded-full bg-purple-500 px-5 py-2.5 text-xs font-semibold shadow-lg shadow-purple-900/40 transition-colors hover:bg-purple-600"
          >
            <FaWhatsapp
              size={15}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            WhatsApp
            <FiArrowUpRight
              size={13}
              className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
            />
          </motion.a>
        </div>

        {/* ── Mobile Toggle ──────────────────────────────────── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 transition hover:border-purple-400/40 hover:bg-purple-500/10 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiX size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiMenu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile Navigation ────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-[#1a0f2e]/98 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between border-b border-white/10 py-4 text-sm transition ${
                        active
                          ? "font-semibold text-purple-300"
                          : "text-white/80 hover:text-purple-300"
                      }`}
                    >
                      <span>{link.name}</span>
                      {active ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_2px_rgba(168,85,247,0.6)]" />
                      ) : (
                        <FiArrowUpRight
                          size={15}
                          className="text-white/30"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Contact Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="mt-5 flex flex-col gap-3 pb-2"
              >
                <a
                  href="tel:+971501234567"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3.5 text-xs font-semibold text-white/80 transition hover:border-purple-400/40 hover:bg-purple-500/10"
                >
                  <FiPhone size={15} />
                  +971 50 123 4567
                </a>

                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-purple-500 py-3.5 text-xs font-semibold text-white transition hover:bg-purple-600"
                >
                  <FaWhatsapp size={15} />
                  WhatsApp
                  <FiArrowUpRight size={13} />
                </a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}