import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HeroBackdrop from "@/components/HeroBackdrop";
import HeroWordmark from "@/components/HeroWordmark";
import DubaiTime from "@/components/DubaiTime";
import { serif } from "@/lib/fonts";

// page.tsx pehle project ki photo bhejta hai. Wo na mile to ye fallback chalega.
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85";

type HeroProps = {
  projectCount: number;
  image?: string;
};

export default function Hero({ projectCount, image }: HeroProps) {
  const src = image ?? FALLBACK_IMAGE;

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink-deep text-white">
      <HeroBackdrop image={src} />

      {/* pt-28: navbar fixed hai, uske neeche se shuru */}
      <div className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col justify-end px-6 pb-10 pt-28 sm:px-10 md:px-16 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-16">
          <h1>
            <HeroWordmark image={src} />
            <span className="sr-only"> Properties</span>
          </h1>

          <div className="max-w-sm lg:justify-self-end lg:pb-[1.5vw]">
            <p
              className={`${serif.className} text-3xl font-light leading-[1.2] md:text-[34px]`}
            >
              Considered residences in Dubai&apos;s finest addresses.
            </p>

            <p className="mt-5 text-sm leading-7 text-white/85">
              {projectCount} developments, each chosen for its architecture and
              its location.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-4 bg-white px-7 py-4 text-sm font-medium text-ink-deep transition-colors duration-300 hover:bg-sky"
              >
                View projects
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/#contact"
                className="border-b border-white/60 pb-1 text-sm transition-colors hover:border-sky hover:text-sky"
              >
                Send an enquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Horizon line: wordmark ke baseline pe */}
        <div className="mt-2 flex items-end justify-between gap-6 border-t border-white/40 pt-4 md:pt-5">
          <p
            aria-hidden="true"
            className={`${serif.className} text-4xl font-light italic leading-none md:text-6xl`}
          >
            Properties
          </p>
          <DubaiTime />
        </div>
      </div>
    </section>
  );
}