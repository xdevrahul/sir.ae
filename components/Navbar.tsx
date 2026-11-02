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

  // Scroll ke baad navbar solid ho jata hai
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Page change hone par mobile menu band
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Escape dabane par menu band
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const transparent = isHome && !scrolled && !menuOpen;

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${
        isHome ? "fixed" : "sticky"
      } ${
        transparent
          ? "bg-transparent"
          : "bg-ink-deep/95 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1800px] items-center justify-between px-6 md:h-[88px] md:px-10 xl:px-20">
        {/* LOGO */}
        <Link href="/" className="flex shrink-0 flex-col" aria-label="SIR Properties home">
          <span className="font-serif text-[32px] font-medium leading-none tracking-[0.14em] md:text-[36px]">
            SIR<span className="text-sky">.</span>
          </span>
          <span className="mt-1.5 text-xs tracking-[0.3em] text-white/70">
            Properties
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex xl:gap-10" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-sm transition-colors duration-300 hover:text-sky after:absolute after:bottom-0 after:left-0 after:h-px after:bg-sky after:transition-all after:duration-300 ${
                  active
                    ? "text-white after:w-full"
                    : "text-white/80 after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* PHONE CTA */}
        <a
          href={SITE.phoneHref}
          className="group hidden h-12 items-center gap-4 rounded-full border border-white/40 pl-6 pr-1.5 text-sm transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink-deep lg:flex"
        >
          Call us
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-ink-deep group-hover:text-white">
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
          className="flex h-11 w-11 items-center justify-center border border-white/30 transition hover:bg-white hover:text-ink-deep lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`absolute left-0 top-full w-full border-t border-white/10 bg-ink-deep px-6 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col py-4" aria-label="Mobile">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`py-4 text-base text-white/85 transition hover:text-sky ${
                index !== NAV_LINKS.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={SITE.phoneHref}
            className="mt-5 flex items-center justify-center gap-3 bg-white px-5 py-4 text-sm font-medium text-ink-deep"
          >
            <Phone size={16} />
            Call our team
          </a>
        </nav>
      </div>
    </header>
  );
}