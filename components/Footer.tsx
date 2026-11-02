
import Link from "next/link";
import { Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import CurrentYear from "@/components/CurrentYear";

export default function Footer() {
  return (
    <footer className="bg-[#20282f] px-6 pb-6 pt-16 text-white">
      <div className="mx-auto max-w-[1400px]">

        <div className="flex flex-col gap-10 pb-14 md:flex-row md:items-center md:justify-between">

          {/* BRAND */}
          <div>
            <p className="font-serif text-5xl font-medium tracking-[0.12em]">
              SIR<span className="text-sky">.</span>
            </p>

            <p className="mt-3 text-sm text-white/70">
              Luxury real estate in Dubai
            </p>
          </div>

          {/* NAVIGATION */}
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/80 transition-colors hover:text-sky"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* PHONE */}
          <a
            href={SITE.phoneHref}
            className="flex w-fit items-center gap-3 border border-white/40 px-5 py-4 text-sm transition-colors hover:bg-white hover:text-ink-deep"
          >
            <Phone size={16} />
            {SITE.phoneDisplay}
          </a>

        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/60 md:flex-row md:justify-between">

          <p>
            &copy; <CurrentYear /> {SITE.name}. All rights reserved.
          </p>

          <p>{SITE.city}</p>

        </div>

      </div>
    </footer>
  );
}
