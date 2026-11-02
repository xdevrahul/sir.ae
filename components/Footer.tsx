import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import CurrentYear from "@/components/CurrentYear";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-deep px-6 pt-20 pb-8 text-white md:px-12 lg:px-20">
      {/* ambient purple glows */}
      <div className="glow-blob -top-40 left-1/4 h-[500px] w-[500px]" />
      <div className="glow-blob-accent -bottom-40 right-1/4 h-[400px] w-[400px]" />

      {/* top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lilac/30 to-transparent" />

      <div className="relative mx-auto max-w-[1500px]">
        {/* ===== TOP ROW ===== */}
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-[1.2fr_0.8fr_1fr] md:gap-10 lg:gap-16">
          {/* BRAND */}
          <div className="max-w-sm">
            <span className="eyebrow">DUBAI · UAE</span>

            <p className="mt-5 font-serif text-5xl font-medium tracking-[0.12em] md:text-6xl">
              SIR<span className="text-gradient-purple">.</span>
            </p>

            <p className="mt-5 text-sm leading-7 text-white/55">
              Luxury real estate in Dubai — considered residences across the
              city&apos;s finest addresses.
            </p>

            {/* location chip */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] tracking-[2px] text-white/60 backdrop-blur-xl">
              <MapPin size={12} className="text-lilac" />
              {SITE.city.toUpperCase()}
            </div>
          </div>

          {/* NAVIGATION */}
          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="eyebrow mb-2">NAVIGATE</span>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex w-fit items-center gap-2 text-sm text-white/65 transition-colors hover:text-lilac"
              >
                <span className="h-px w-0 bg-lilac transition-all duration-300 group-hover:w-4" />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CONTACT */}
          <div className="flex flex-col gap-4">
            <span className="eyebrow mb-2">GET IN TOUCH</span>

            <a
              href={SITE.phoneHref}
              className="group flex w-fit items-center gap-3 text-sm text-white/70 transition-colors hover:text-lilac"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition group-hover:border-lilac/40 group-hover:bg-white/10">
                <Phone size={14} className="text-lilac" />
              </span>
              {SITE.phoneDisplay}
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="group flex w-fit items-center gap-3 text-sm text-white/70 transition-colors hover:text-lilac"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition group-hover:border-lilac/40 group-hover:bg-white/10">
                <Mail size={14} className="text-lilac" />
              </span>
              <span className="underline-offset-4 group-hover:underline">
                {SITE.email}
              </span>
            </a>

            <Link
              href="/#contact"
              className="group mt-2 inline-flex w-fit items-center gap-4 rounded-full bg-gradient-to-r from-brand-500 to-glow px-6 py-4 text-[10px] tracking-[2px] text-white shadow-glow-purple transition-all hover:shadow-glow-purple-lg"
            >
              SEND AN ENQUIRY
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-[10px] tracking-[2px] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; <CurrentYear /> {SITE.name}. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline">{SITE.city.toUpperCase()}</span>
            <Link
              href="/#contact"
              className="transition-colors hover:text-lilac"
            >
              CONTACT
            </Link>
            <Link
              href="/projects"
              className="transition-colors hover:text-lilac"
            >
              PROJECTS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}