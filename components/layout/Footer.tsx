
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#21152f] text-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-12">

        {/* Brand */}
        <div>
          <Link href="/" className="inline-block">
            <h2 className="text-3xl font-bold tracking-[3px]">
              SIR<span className="text-purple-300">.ae</span>
            </h2>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
            Your trusted partner for discovering exceptional luxury
            residences and premium real estate opportunities in Dubai.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[2px] text-purple-300">
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm text-white/65">
            <li>
              <Link href="/" className="transition-colors hover:text-purple-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="transition-colors hover:text-purple-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#about" className="transition-colors hover:text-purple-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#services" className="transition-colors hover:text-purple-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="transition-colors hover:text-purple-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[2px] text-purple-300">
            Explore
          </h3>

          <ul className="space-y-4 text-sm text-white/65">
            <li>Luxury Apartments</li>
            <li>Premium Villas</li>
            <li>Off-Plan Properties</li>
            <li>Exclusive Residences</li>
            <li>Dubai Real Estate</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[2px] text-purple-300">
            Get In Touch
          </h3>

          <div className="space-y-4 text-sm text-white/65">
            <p>Dubai, United Arab Emirates</p>

            <p>
              <a
                href="mailto:info@sir.ae"
                className="transition-colors hover:text-purple-300"
              >
                info@sir.ae
              </a>
            </p>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 font-semibold text-purple-300 transition-colors hover:text-purple-200"
            >
              Contact Our Team
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>© 2026 SIR.ae. All rights reserved.</p>
          <p>Luxury Real Estate in Dubai</p>
        </div>
      </div>
    </footer>
  );
}
