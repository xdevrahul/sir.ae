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
    <main className="min-h-screen bg-[#f5f5f3] text-[#20282f]">
      {/* ============ PROJECT HERO ============ */}
      <section className="relative flex min-h-[680px] items-end overflow-hidden bg-[#263d50] md:min-h-[820px]">
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* readable overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1822]/95 via-[#0c1822]/45 to-black/15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.35),transparent_60%)]" />

        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 text-white md:px-12 md:pb-20 lg:px-20">
          {/* breadcrumb + back */}
          <div className="mb-12 flex flex-wrap items-center gap-3 text-[10px] tracking-[2px] text-white/70">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <ArrowLeft size={14} />
              PROJECTS
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white/90">{project.name}</span>
          </div>

          <p className="mb-5 text-[10px] tracking-[3px] text-[#c6d8e6]">
            {project.developer}
          </p>

          <h1 className="max-w-5xl font-serif text-5xl font-light leading-[1.05] md:text-7xl lg:text-8xl">
            {project.name}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/85">
            <span className="flex items-center gap-2">
              <MapPin size={15} />
              {project.location}
            </span>
            <span className="hidden h-4 w-px bg-white/30 sm:block" />
            <span className="flex items-center gap-2">
              <BedDouble size={15} />
              {project.bedrooms} Bedrooms
            </span>
            <span className="hidden h-4 w-px bg-white/30 sm:block" />
            <span className="flex items-center gap-2">
              <CalendarDays size={15} />
              {project.handover}
            </span>
          </div>

          {/* quick badges */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[9px] tracking-[2px] backdrop-blur">
              {project.propertyType}
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[9px] tracking-[2px] backdrop-blur">
              HANDOVER · {project.handover}
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[9px] tracking-[2px] backdrop-blur">
              FROM AED {formatPrice(project.price)}
            </span>
          </div>
        </div>
      </section>

      {/* ============ PROJECT INFORMATION ============ */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          {/* LEFT DETAILS */}
          <div>
            <span className="text-[10px] tracking-[3px] text-[#8295a5]">
              ABOUT THE DEVELOPMENT
            </span>

            <h2 className="mt-6 max-w-3xl font-serif text-4xl font-light leading-tight md:text-5xl">
              Discover a new standard of living.
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#737b83]">
              {project.description}
            </p>

            {/* OVERVIEW */}
            <div className="mt-14 border-t border-[#d8dcdf] pt-8">
              <h3 className="font-serif text-3xl font-light">
                Project overview
              </h3>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
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
                    className="group border-b border-[#d8dcdf] pb-5 transition-colors hover:border-[#263d50]"
                  >
                    <div className="flex items-center gap-3 text-[#8295a5]">
                      <Icon
                        size={18}
                        className="transition-colors group-hover:text-[#263d50]"
                      />
                      <span className="text-[9px] tracking-[2px]">
                        {label}
                      </span>
                    </div>
                    <p className="mt-4 text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PRICE CARD */}
          <aside>
            <div className="sticky top-10 border border-[#d8dcdf] bg-white p-7 shadow-[0_2px_30px_-15px_rgba(38,61,80,0.25)] md:p-9">
              <span className="text-[9px] tracking-[2px] text-[#8295a5]">
                PROPERTY INVESTMENT
              </span>

              <p className="mt-5 font-serif text-4xl font-light md:text-5xl">
                <span className="text-lg tracking-wide text-[#8295a5]">
                  AED{" "}
                </span>
                {formatPrice(project.price)}
              </p>

              <p className="mt-3 text-xs text-[#8295a5]">
                Starting price
              </p>

              <div className="my-8 border-t border-[#e1e4e6]" />

              <div className="flex justify-between gap-4 py-3 text-sm">
                <span className="text-[#8295a5]">Developer</span>
                <span className="text-right">{project.developer}</span>
              </div>
              <div className="flex justify-between gap-4 py-3 text-sm">
                <span className="text-[#8295a5]">Bedrooms</span>
                <span>{project.bedrooms}</span>
              </div>
              <div className="flex justify-between gap-4 py-3 text-sm">
                <span className="text-[#8295a5]">Handover</span>
                <span>{project.handover}</span>
              </div>

              {/* ENQUIRY */}
              <Link
                href="/#contact"
                className="group mt-8 flex w-full items-center justify-between bg-[#263d50] px-6 py-5 text-[10px] tracking-[2px] text-white transition hover:bg-[#405b72]"
              >
                ENQUIRE ABOUT THIS PROJECT
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              {/* BROCHURE */}
              {project.brochure && (
                <a
                  href={project.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-3 border border-[#d8dcdf] px-6 py-4 text-[10px] tracking-[1.5px] transition hover:border-[#263d50]"
                >
                  <FileText size={16} />
                  DOWNLOAD BROCHURE
                  <ExternalLink size={13} />
                </a>
              )}

              {/* DEVELOPER WEBSITE */}
              {project.officialWebsite && (
                <a
                  href={project.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 text-[9px] tracking-[1.5px] text-[#8295a5] transition hover:text-[#263d50]"
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
      <section className="bg-[#e8edf0] px-6 py-20 text-center md:px-12">
        <span className="text-[10px] tracking-[3px] text-[#8295a5]">
          SIR PROPERTIES
        </span>

        <h2 className="mt-5 font-serif text-4xl font-light md:text-6xl">
          Explore more possibilities.
        </h2>

        <Link
          href="/projects"
          className="group mt-8 inline-flex items-center gap-6 border border-[#263d50] px-7 py-5 text-[10px] tracking-[2px] transition hover:bg-[#263d50] hover:text-white"
        >
          VIEW ALL PROJECTS
          <ArrowRight
            size={17}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </section>
    </main>
  );
}