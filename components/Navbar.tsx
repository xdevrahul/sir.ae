"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Page change pe menu band
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Escape pe menu band
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Lock body scroll jab mobile menu open ho
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  // Home pe top par transparent; warna glass-nav solid
  const isTransparent = isHome && !scrolled && !menuOpen;

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        isHome ? "fixed" : "sticky"
      } ${
        isTransparent
          ? "bg-transparent"
          : "glass-nav shadow-[0_1px_0_rgba(255,255,255,0.06)]"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1800px] items-center justify-between px-6 md:h-[88px] md:px-10 xl:px-20">
        {/* LOGO */}
        <Link
          href="/"
          className="flex shrink-0 flex-col"
          aria-label="SIR Properties home"
        >
          <span className="font-serif text-[32px] font-medium leading-none tracking-[0.14em] md:text-[36px]">
            SIR<span className="text-gradient-purple">.</span>
          </span>
          <span className="mt-1.5 text-xs tracking-[0.3em] text-white/60">
            Properties
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className="hidden items-center gap-8 lg:flex xl:gap-10"
          aria-label="Main"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-sm transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gradient-to-r after:from-lilac after:to-glow after:transition-all after:duration-300 ${
                  active
                    ? "text-white after:w-full"
                    : "text-white/75 after:w-0 hover:text-white hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* PHONE CTA (desktop) */}
        <a
          href={SITE.phoneHref}
          className="group hidden h-12 items-center gap-4 rounded-full border border-white/15 bg-white/5 pl-6 pr-1.5 text-sm text-white/90 backdrop-blur-xl transition-all duration-300 hover:border-lilac/40 hover:bg-white/10 lg:flex"
        >
          Call us
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-glow text-white shadow-[0_0_20px_-5px_rgba(168,85,247,0.8)] transition-transform group-hover:scale-105">
            <Phone size={15} />
          </span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-xl transition hover:border-lilac/40 hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-white/10 bg-ink-deep/95 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible max-h-[80vh] translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-3 opacity-0"
        }`}
      >
        <nav
          className="flex max-h-[80vh] flex-col overflow-y-auto px-6 py-4"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`py-4 text-base text-white/85 transition hover:text-lilac ${
                index !== NAV_LINKS.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={SITE.phoneHref}
            className="mt-5 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand-500 to-glow px-5 py-4 text-sm font-medium text-white shadow-glow-purple"
          >
            <Phone size={16} />
            Call our team
          </a>
        </nav>
      </div>
    </header>
  );
}