"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search, BedDouble, MapPin } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase().trim();
    if (!query) return projects;

    return projects.filter((project) =>
      [
        project.name,
        project.location,
        project.developer,
        project.propertyType,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-ink-deep text-white">
      {/* ============ PAGE HERO (NO IMAGE) ============ */}
      <section className="relative isolate overflow-hidden bg-ink-deep px-6 py-28 md:px-12 md:py-32 lg:px-20">
        {/* ambient purple glows */}
        <div className="glow-blob -top-40 right-1/4 h-[500px] w-[500px]" />
        <div className="glow-blob-accent -bottom-40 left-1/4 h-[400px] w-[400px]" />

        {/* subtle grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="relative mx-auto max-w-[1500px]">
          <span className="eyebrow-badge mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-glow shadow-[0_0_10px_#a855f7]" />
            SIR PROPERTIES · DUBAI
          </span>

          <h1 className="max-w-5xl font-serif text-6xl font-light leading-[1.05] tracking-tight md:text-8xl lg:text-[110px]">
            Discover
            <br />
            <span className="text-gradient-purple italic">exceptional</span>{" "}
            living.
          </h1>

          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/10 pt-7 md:flex-row md:items-end">
            <p className="max-w-lg text-sm leading-7 text-white/60">
              Explore an exclusive collection of luxury residences, signature
              developments and exceptional homes across Dubai.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <span className="text-[10px] tracking-[3px] text-white/40">
                OUR PROPERTY COLLECTION
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] tracking-[2px] text-white/70 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-glow shadow-[0_0_8px_#a855f7]" />
                {projects.length} LISTED
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROJECT LISTING ============ */}
      <section className="relative mx-auto max-w-[1600px] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        {/* SECTION HEADING */}
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">CURATED DEVELOPMENTS</span>

            <h2 className="mt-4 font-serif text-4xl font-light md:text-6xl">
              Explore our projects
            </h2>

            <p className="mt-4 text-sm text-white/50">
              Discover residences selected for exceptional living.
            </p>
          </div>

          <div className="flex items-baseline gap-2 text-sm text-white/50">
            <span className="font-serif text-4xl text-white">
              {filteredProjects.length.toString().padStart(2, "0")}
            </span>
            <span className="text-[10px] tracking-[2px]">PROJECTS</span>
          </div>
        </div>

        {/* SEARCH */}
        <div className="my-10 max-w-xl">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3.5 backdrop-blur-xl transition focus-within:border-lilac/50 focus-within:bg-white/10 focus-within:shadow-[0_0_0_3px_rgba(168,85,247,0.12)]">
            <Search size={18} className="shrink-0 text-lilac" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by project, location or developer..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="shrink-0 text-[10px] tracking-[1.5px] text-lilac/80 transition hover:text-lilac"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* PROJECT GRID */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                {/* IMAGE CARD */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-ink-card">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/95 via-ink-deep/20 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[9px] tracking-[2px] text-white backdrop-blur-xl">
                    FEATURED
                  </span>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white">
                    <div className="min-w-0">
                      <p className="flex items-center gap-1.5 text-[9px] tracking-[2px] text-lilac/90">
                        <MapPin size={11} />
                        <span className="truncate">{project.location}</span>
                      </p>
                      <p className="mt-2 truncate font-serif text-2xl md:text-3xl">
                        {project.name}
                      </p>
                    </div>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 group-hover:border-lilac/60 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-glow group-hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.8)]">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                </div>

                {/* PROJECT INFO — glass card */}
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-lilac/30 group-hover:bg-white/10">
                  <div className="flex items-center justify-between gap-3">
                    <span className="truncate text-[10px] tracking-[2px] text-lilac/80">
                      {project.developer}
                    </span>
                    <span className="shrink-0 text-[10px] text-white/40">
                      {project.handover}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] tracking-[2px] text-white/40">
                        STARTING FROM
                      </p>
                      <p className="mt-1 font-serif text-2xl text-white">
                        AED {project.price.replace(/^AED\s*/i, "")}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-white/60">
                      <BedDouble size={15} className="text-lilac/80" />
                      {project.bedrooms} Bedrooms
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-[10px] tracking-[1.5px]">
                    <span className="text-white/50">
                      {project.propertyType}
                    </span>
                    <span className="flex shrink-0 items-center gap-2 text-lilac transition-all group-hover:gap-4 group-hover:text-glow">
                      VIEW DETAILS
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h3 className="font-serif text-3xl text-white">No projects found</h3>
            <p className="mt-3 text-sm text-white/50">
              Try searching with another project name or location.
            </p>
            <button
              onClick={() => setSearch("")}
              className="btn-secondary mt-6"
            >
              CLEAR SEARCH
            </button>
          </div>
        )}
      </section>

      {/* ============ BOTTOM CTA ============ */}
      <section className="relative overflow-hidden bg-ink-soft px-6 py-20 md:px-12 lg:px-20">
        <div className="glow-blob -bottom-40 left-1/4 h-[500px] w-[500px]" />
        <div className="glow-blob-accent -top-40 right-1/4 h-[400px] w-[400px]" />

        <div className="relative mx-auto flex max-w-[1500px] flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">YOUR NEXT ADDRESS</span>

            <h2 className="mt-5 font-serif text-4xl font-light md:text-6xl">
              Let&apos;s find your
              <br />
              <span className="text-gradient-purple italic">perfect place.</span>
            </h2>
          </div>

          <Link href="/#contact" className="btn-primary group w-fit">
            CONTACT OUR TEAM
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}