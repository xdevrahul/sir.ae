// components/Hero.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DubaiTime from "@/components/DubaiTime";
import { serif } from "@/lib/fonts";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=85";

type HeroProps = { projectCount: number; image?: string };

export default function Hero({ projectCount, image }: HeroProps) {
  const src = image ?? FALLBACK_IMAGE;

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#0a0612] text-white">
      {/* ambient purple glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-[#7c3aed]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#a855f7]/15 blur-[120px]" />

      <div className="mx-auto grid min-h-[100svh] w-full max-w-[1800px] grid-cols-1 px-6 pb-10 pt-28 sm:px-10 md:px-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-20">
        {/* LEFT: TEXT */}
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] tracking-[3px] text-[#c4a7ff] backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7] shadow-[0_0_10px_#a855f7]" />
            SIR PROPERTIES · DUBAI
          </span>

          <h1
            className={`${serif.className} text-[clamp(3.5rem,9vw,8rem)] font-light leading-[0.92] tracking-[-0.02em]`}
          >
            Considered
            <br />
            <span className="text-gradient-purple italic">residences.</span>
          </h1>

          <p className="mt-8 max-w-md text-sm leading-7 text-white/65">
            {projectCount} developments across Dubai&apos;s finest addresses —
            each chosen for its architecture and its location.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-7 py-4 text-sm font-medium text-white shadow-[0_8px_40px_-10px_rgba(168,85,247,0.6)] transition-all hover:shadow-[0_8px_50px_-5px_rgba(168,85,247,0.9)]"
            >
              View projects
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm text-white/85 backdrop-blur-xl transition hover:border-[#c4a7ff]/40 hover:bg-white/10"
            >
              Send an enquiry
            </Link>
          </div>

          <div className="mt-16 flex items-center justify-between gap-6 border-t border-white/10 pt-6">
            <p className="text-[10px] tracking-[3px] text-white/40">
              EST. DUBAI · UAE
            </p>
            <DubaiTime />
          </div>
        </div>

        {/* RIGHT: GLASS IMAGE CARD */}
        <div className="relative hidden lg:block">
          <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
            <div className="relative h-full overflow-hidden rounded-2xl">
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0612]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-2xl">
                <p className="text-[9px] tracking-[2px] text-[#c4a7ff]">
                  FEATURED
                </p>
                <p className="mt-1 font-serif text-xl">Palm Jumeirah</p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className="relative -mx-6 mt-10 h-72 overflow-hidden sm:-mx-10 md:-mx-16 lg:hidden">
          <img src={src} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0612] to-transparent" />
        </div>
      </div>
    </section>
  );
}