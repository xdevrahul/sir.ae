import Link from "next/link";
import { Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import CurrentYear from "@/components/CurrentYear";

export default function Footer() {
  return (
    <footer className="bg-[#1e3346] px-6 pt-20 pb-8 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1500px]">
        {/* TOP ROW */}
        <div className="flex flex-col gap-12 pb-16 md:flex-row md:items-start md:justify-between">
          {/* BRAND */}
          <div className="max-w-sm">
            <span className="text-[10px] tracking-[3px] text-[#a8c0d8]/70">
              DUBAI · UAE
            </span>

            <p className="mt-5 font-serif text-5xl font-medium tracking-[0.12em] md:text-6xl">
              SIR<span className="text-[#a8c0d8]">.</span>
            </p>

            <p className="mt-4 text-sm leading-7 text-white/55">
              Luxury real estate in Dubai.
            </p>
          </div>

          {/* NAVIGATION */}
          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="mb-2 text-[10px] tracking-[3px] text-[#a8c0d8]/70">
              NAVIGATE
            </span>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="w-fit text-sm text-white/65 transition-colors hover:text-[#a8c0d8]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CONTACT */}
          <div className="flex flex-col gap-3">
            <span className="mb-2 text-[10px] tracking-[3px] text-[#a8c0d8]/70">
              GET IN TOUCH
            </span>

            <a
              href={SITE.phoneHref}
              className="group flex w-fit items-center gap-3 text-sm text-white/65 transition-colors hover:text-[#a8c0d8]"
            >
              <Phone size={15} />
              {SITE.phoneDisplay}
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="w-fit text-sm text-white/65 underline-offset-4 transition-colors hover:text-[#a8c0d8] hover:underline"
            >
              {SITE.email}
            </a>

            <Link
              href="/#contact"
              className="group mt-3 inline-flex w-fit items-center gap-4 border border-white/25 bg-white/5 px-6 py-4 text-[10px] tracking-[2px] transition-colors hover:border-white hover:bg-white hover:text-[#1e3346]"
            >
              SEND AN ENQUIRY
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] tracking-[2px] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; <CurrentYear /> {SITE.name}. ALL RIGHTS RESERVED.
          </p>
          <p>{SITE.city.toUpperCase()}</p>
        </div>
      </div>
    </footer>
  );
}