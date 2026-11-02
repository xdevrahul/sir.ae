// components/Hero.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DubaiTime from "@/components/DubaiTime";
import { serif } from "@/lib/fonts";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=85";

type HeroProps = {
  projectCount: number;
  image?: string;
};

export default function Hero({ projectCount, image }: HeroProps) {
  const src = image ?? FALLBACK_IMAGE;

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#263d50] text-white">
      <div className="mx-auto grid min-h-[100svh] w-full max-w-[1800px] grid-cols-1 px-6 pb-10 pt-28 sm:px-10 md:px-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-20">
        {/* LEFT: TEXT */}
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex items-center gap-3 text-[10px] tracking-[3px] text-[#a8c0d8]">
            <span className="h-px w-8 bg-[#a8c0d8]" />
            SIR PROPERTIES · DUBAI
          </span>

          <h1
            className={`${serif.className} text-[clamp(3.5rem,9vw,8rem)] font-light leading-[0.92] tracking-[-0.02em]`}
          >
            Considered
            <br />
            <span className="italic text-[#a8c0d8]">residences.</span>
          </h1>

          <p className="mt-8 max-w-md text-sm leading-7 text-white/70">
            {projectCount} developments across Dubai&apos;s finest addresses —
            each chosen for its architecture and its location.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-4 bg-white px-7 py-4 text-sm font-medium text-[#263d50] transition-colors hover:bg-[#a8c0d8]"
            >
              View projects
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/#contact"
              className="border-b border-white/40 pb-1 text-sm text-white/80 transition hover:border-white hover:text-white"
            >
              Send an enquiry
            </Link>
          </div>

          {/* bottom row */}
          <div className="mt-auto flex items-center justify-between gap-6 border-t border-white/15 pt-6 mt-16">
            <p className="text-[10px] tracking-[3px] text-white/50">
              EST. DUBAI · UAE
            </p>
            <DubaiTime />
          </div>
        </div>

        {/* RIGHT: IMAGE CARD */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              loading="eager"
            />
            {/* soft gradient so it blends into bg */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#263d50]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#263d50]/60 via-transparent to-transparent" />
          </div>

          {/* floating label */}
          <div className="absolute bottom-8 left-8 border border-white/25 bg-black/30 px-4 py-3 text-[10px] tracking-[2px] backdrop-blur">
            <p className="text-white/60">FEATURED</p>
            <p className="mt-1 text-white">Palm Jumeirah</p>
          </div>
        </div>

        {/* MOBILE IMAGE STRIP */}
        <div className="relative -mx-6 mt-10 h-72 overflow-hidden sm:-mx-10 md:-mx-16 lg:hidden">
          <img src={src} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#263d50]/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}