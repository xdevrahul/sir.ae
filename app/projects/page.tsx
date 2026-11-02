"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Search,
  BedDouble,
} from "lucide-react";
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
    <main className="min-h-screen bg-[#f5f5f3] text-[#20282f]">

      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-[#263d50] px-6 py-28 text-white md:px-12 md:py-36 lg:px-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#172d40]/90 via-[#263d50]/75 to-[#263d50]/30" />

        <div className="relative mx-auto max-w-[1500px]">
          <div className="mb-8 flex items-center gap-3 text-[10px] tracking-[3px] text-[#c2d2df]">
            <span className="h-px w-8 bg-[#c2d2df]" />
            SIR PROPERTIES · DUBAI
          </div>

          <h1 className="max-w-5xl font-serif text-6xl font-light leading-[1.05] tracking-tight md:text-8xl lg:text-[110px]">
            Discover
            <br />
            <span className="italic text-[#a8c0d8]">
              exceptional
            </span>{" "}
            living.
          </h1>

          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/20 pt-7 md:flex-row md:items-end">
            <p className="max-w-lg text-sm leading-7 text-white/70">
              Explore an exclusive collection of luxury residences,
              signature developments and exceptional homes across Dubai.
            </p>

            <span className="text-[10px] tracking-[3px] text-white/60">
              OUR PROPERTY COLLECTION
            </span>
          </div>
        </div>
      </section>

      {/* PROJECT LISTING */}
      <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 lg:px-20 lg:py-28">

        {/* SECTION HEADING */}
        <div className="flex flex-col justify-between gap-8 border-b border-[#d8dcdf] pb-10 md:flex-row md:items-end">
          <div>
            <span className="text-[10px] tracking-[3px] text-[#8295a5]">
              CURATED DEVELOPMENTS
            </span>

            <h2 className="mt-4 font-serif text-4xl font-light md:text-6xl">
              Explore our projects
            </h2>

            <p className="mt-4 text-sm text-[#7c858c]">
              Discover residences selected for exceptional living.
            </p>
          </div>

          <div className="text-sm text-[#7c858c]">
            <span className="font-serif text-4xl text-[#20282f]">
              {filteredProjects.length.toString().padStart(2, "0")}
            </span>

            <span className="ml-2 text-[10px] tracking-[2px]">
              PROJECTS
            </span>
          </div>
        </div>

        {/* SEARCH */}
        <div className="my-10 flex max-w-xl items-center gap-4 border-b border-[#bfc6cb] py-4">
          <Search size={18} className="text-[#8295a5]" />

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by project, location or developer..."
            className="w-full bg-transparent text-sm text-[#20282f] outline-none placeholder:text-[#92999e]"
          />
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

                {/* IMAGE */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#dce2e6]">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />

                  <span className="absolute left-5 top-5 bg-white/90 px-4 py-2 text-[9px] tracking-[2px] text-[#263d50]">
                    FEATURED DEVELOPMENT
                  </span>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                    <div>
                      <p className="text-[9px] tracking-[2px] text-white/75">
                        {project.location}
                      </p>

                      <p className="mt-2 font-serif text-2xl md:text-3xl">
                        {project.name}
                      </p>
                    </div>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/70 transition-all duration-300 group-hover:bg-white group-hover:text-[#263d50]">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                </div>

                {/* PROJECT INFORMATION */}
                <div className="border-b border-[#d8dcdf] py-6">

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] tracking-[2px] text-[#8295a5]">
                      {project.developer}
                    </span>

                    <span className="text-[10px] text-[#7c858c]">
                      {project.handover}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] tracking-[2px] text-[#92999e]">
                        STARTING FROM
                      </p>

                      <p className="mt-1 font-serif text-2xl">
                        AED {project.price.replace(/^AED\s*/i, "")}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-[#7c858c]">
                      <BedDouble size={15} />
                      {project.bedrooms} Bedrooms
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 text-[10px] tracking-[1.5px]">
                    <span className="text-[#7c858c]">
                      {project.propertyType}
                    </span>

                    <span className="flex shrink-0 items-center gap-2 text-[#263d50] transition-all group-hover:gap-4">
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
            <h3 className="font-serif text-3xl">
              No projects found
            </h3>

            <p className="mt-3 text-sm text-[#7c858c]">
              Try searching with another project name or location.
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-6 border border-[#263d50] px-6 py-3 text-[10px] tracking-[2px] transition hover:bg-[#263d50] hover:text-white"
            >
              CLEAR SEARCH
            </button>
          </div>
        )}

      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#e8edf0] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="text-[10px] tracking-[3px] text-[#8295a5]">
              YOUR NEXT ADDRESS
            </span>

            <h2 className="mt-5 font-serif text-4xl font-light md:text-6xl">
              Let&apos;s find your
              <br />
              <span className="italic text-[#8295a5]">
                perfect place.
              </span>
            </h2>
          </div>

          <Link
            href="/#contact"
            className="group inline-flex w-fit items-center gap-8 border border-[#263d50] px-7 py-5 text-[10px] tracking-[2px] transition hover:bg-[#263d50] hover:text-white"
          >
            CONTACT OUR TEAM

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>

    </main>
  );
}