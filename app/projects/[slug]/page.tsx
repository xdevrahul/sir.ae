import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  BedDouble,
  Building2,
  CalendarDays,
  ExternalLink,
  FileText,
} from "lucide-react";

import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found | SIR Properties" };
  }

  return {
    title: `${project.name} | SIR Properties`,
    description: project.description,
  };
}

// AED duplicate-safe formatting
const formatPrice = (price: string) =>
  price.replace(/^AED\s*/i, "").trim();

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-ink-deep text-white">
      {/* ============ PROJECT HERO ============ */}
      <section className="relative flex min-h-[680px] items-end overflow-hidden bg-ink-deep md:min-h-[820px]">
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* purple-tinted overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.35),transparent_60%)]" />

        {/* ambient glows */}
        <div className="glow-blob-accent -top-40 right-1/4 h-[400px] w-[400px]" />

        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 text-white md:px-12 md:pb-20 lg:px-20">
          {/* breadcrumb */}
          <div className="mb-12 flex flex-wrap items-center gap-3 text-[10px] tracking-[2px] text-white/60">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 transition hover:text-lilac"
            >
              <ArrowLeft size={14} />
              PROJECTS
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/90">{project.name}</span>
          </div>

          <p className="eyebrow mb-5">{project.developer}</p>

          <h1 className="max-w-5xl font-serif text-5xl font-light leading-[1.05] md:text-7xl lg:text-8xl">
            {project.name}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/80">
            <span className="flex items-center gap-2">
              <MapPin size={15} className="text-lilac" />
              {project.location}
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="flex items-center gap-2">
              <BedDouble size={15} className="text-lilac" />
              {project.bedrooms} Bedrooms
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="flex items-center gap-2">
              <CalendarDays size={15} className="text-lilac" />
              {project.handover}
            </span>
          </div>

          {/* quick badges — glass pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[9px] tracking-[2px] text-white backdrop-blur-xl">
              {project.propertyType}
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[9px] tracking-[2px] text-white backdrop-blur-xl">
              HANDOVER · {project.handover}
            </span>
            <span className="rounded-full border border-lilac/30 bg-lilac/10 px-4 py-2 text-[9px] tracking-[2px] text-lilac backdrop-blur-xl">
              FROM AED {formatPrice(project.price)}
            </span>
          </div>
        </div>
      </section>

      {/* ============ PROJECT INFORMATION ============ */}
      <section className="relative mx-auto max-w-[1500px] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          {/* LEFT DETAILS */}
          <div>
            <span className="eyebrow">ABOUT THE DEVELOPMENT</span>

            <h2 className="mt-6 max-w-3xl font-serif text-4xl font-light leading-tight md:text-5xl">
              Discover a{" "}
              <span className="text-gradient-purple italic">new standard</span>{" "}
              of living.
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-white/60">
              {project.description}
            </p>

            {/* OVERVIEW — glass grid */}
            <div className="mt-14 border-t border-white/10 pt-8">
              <h3 className="font-serif text-3xl font-light">
                Project overview
              </h3>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Building2,
                    label: "PROPERTY TYPE",
                    value: project.propertyType,
                  },
                  {
                    icon: BedDouble,
                    label: "BEDROOMS",
                    value: project.bedrooms,
                  },
                  {
                    icon: CalendarDays,
                    label: "EXPECTED HANDOVER",
                    value: project.handover,
                  },
                  {
                    icon: MapPin,
                    label: "LOCATION",
                    value: project.location,
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="glass-card-hover p-5"
                  >
                    <div className="flex items-center gap-3 text-lilac/80">
                      <Icon size={18} />
                      <span className="text-[9px] tracking-[2px]">
                        {label}
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PRICE CARD — glass */}
          <aside>
            <div className="sticky top-10 rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_8px_60px_-15px_rgba(124,58,237,0.3)] backdrop-blur-xl md:p-9">
              <span className="text-[9px] tracking-[2px] text-lilac/80">
                PROPERTY INVESTMENT
              </span>

              <p className="mt-5 font-serif text-4xl font-light md:text-5xl">
                <span className="text-lg tracking-wide text-white/40">
                  AED{" "}
                </span>
                <span className="text-gradient-purple">
                  {formatPrice(project.price)}
                </span>
              </p>

              <p className="mt-3 text-xs text-white/40">
                Starting price
              </p>

              <div className="my-8 border-t border-white/10" />

              <div className="flex justify-between gap-4 py-3 text-sm">
                <span className="text-white/40">Developer</span>
                <span className="text-right text-white">
                  {project.developer}
                </span>
              </div>
              <div className="flex justify-between gap-4 py-3 text-sm">
                <span className="text-white/40">Bedrooms</span>
                <span className="text-white">{project.bedrooms}</span>
              </div>
              <div className="flex justify-between gap-4 py-3 text-sm">
                <span className="text-white/40">Handover</span>
                <span className="text-white">{project.handover}</span>
              </div>

              {/* ENQUIRY */}
              <Link
                href="/#contact"
                className="group mt-8 flex w-full items-center justify-between rounded-full bg-gradient-to-r from-brand-500 to-glow px-6 py-5 text-[10px] tracking-[2px] text-white shadow-glow-purple transition-all hover:shadow-glow-purple-lg"
              >
                ENQUIRE ABOUT THIS PROJECT
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              {/* BROCHURE */}
              {project.brochure && (
                <a
                  href={project.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-[10px] tracking-[1.5px] text-white/85 backdrop-blur-xl transition hover:border-lilac/40 hover:bg-white/10"
                >
                  <FileText size={16} className="text-lilac" />
                  DOWNLOAD BROCHURE
                  <ExternalLink size={13} className="text-lilac/60" />
                </a>
              )}

              {/* DEVELOPER WEBSITE */}
              {project.officialWebsite && (
                <a
                  href={project.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 text-[9px] tracking-[1.5px] text-white/40 transition hover:text-lilac"
                >
                  OFFICIAL DEVELOPER WEBSITE
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* ============ BOTTOM CTA ============ */}
      <section className="relative overflow-hidden bg-ink-soft px-6 py-20 text-center md:px-12">
        <div className="glow-blob -bottom-40 left-1/4 h-[500px] w-[500px]" />
        <div className="glow-blob-accent -top-40 right-1/4 h-[400px] w-[400px]" />

        <div className="relative mx-auto max-w-[900px]">
          <span className="eyebrow">SIR PROPERTIES</span>

          <h2 className="mt-5 font-serif text-4xl font-light md:text-6xl">
            Explore more{" "}
            <span className="text-gradient-purple italic">possibilities.</span>
          </h2>

          <Link
            href="/projects"
            className="btn-secondary group mt-8"
          >
            VIEW ALL PROJECTS
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}