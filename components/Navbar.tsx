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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // 👇 two visual modes
  const isTransparent = isHome && !scrolled && !menuOpen;
  // transparent = white text on dark hero
  // solid      = cream bg + dark text

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isHome ? "fixed" : "sticky"
      } ${
        isTransparent
          ? "bg-transparent text-white"
          : "border-b border-[#263d50]/10 bg-[#f5f5f3]/95 text-[#20282f] shadow-[0_1px_0_rgba(38,61,80,0.08)] backdrop-blur"
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
            SIR
            <span
              className={
                isTransparent ? "text-[#a8c0d8]" : "text-[#8295a5]"
              }
            >
              .
            </span>
          </span>
          <span
            className={`mt-1.5 text-xs tracking-[0.3em] ${
              isTransparent ? "text-white/70" : "text-[#8295a5]"
            }`}
          >
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
            const underline = isTransparent ? "after:bg-[#a8c0d8]" : "after:bg-[#263d50]";
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-sm transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-300 ${underline} ${
                  isTransparent
                    ? active
                      ? "text-white after:w-full"
                      : "text-white/80 hover:text-white after:w-0 hover:after:w-full"
                    : active
                    ? "text-[#20282f] after:w-full"
                    : "text-[#4d5a63] hover:text-[#263d50] after:w-0 hover:after:w-full"
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
          className={`group hidden h-12 items-center gap-4 rounded-full border pl-6 pr-1.5 text-sm transition-colors duration-300 lg:flex ${
            isTransparent
              ? "border-white/40 hover:border-white hover:bg-white hover:text-[#263d50]"
              : "border-[#263d50]/25 hover:border-[#263d50] hover:bg-[#263d50] hover:text-white"
          }`}
        >
          Call us
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
              isTransparent
                ? "bg-white/15 group-hover:bg-[#263d50] group-hover:text-white"
                : "bg-[#263d50]/10 text-[#263d50] group-hover:bg-white group-hover:text-[#263d50]"
            }`}
          >
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
          className={`flex h-11 w-11 items-center justify-center border transition lg:hidden ${
            isTransparent
              ? "border-white/30 hover:bg-white hover:text-[#263d50]"
              : "border-[#263d50]/25 hover:bg-[#263d50] hover:text-white"
          }`}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`absolute left-0 top-full w-full border-t transition-all duration-300 lg:hidden ${
          isTransparent
            ? "border-white/10 bg-[#263d50] text-white"
            : "border-[#263d50]/10 bg-[#f5f5f3] text-[#20282f]"
        } ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`py-4 text-base transition ${
                isTransparent
                  ? "text-white/85 hover:text-[#a8c0d8]"
                  : "text-[#20282f]/85 hover:text-[#263d50]"
              } ${
                index !== NAV_LINKS.length - 1
                  ? isTransparent
                    ? "border-b border-white/10"
                    : "border-b border-[#263d50]/10"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={SITE.phoneHref}
            className="mt-5 flex items-center justify-center gap-3 bg-[#263d50] px-5 py-4 text-sm font-medium text-white transition hover:bg-[#1e3346]"
          >
            <Phone size={16} />
            Call our team
          </a>
        </nav>
      </div>
    </header>
  );
}