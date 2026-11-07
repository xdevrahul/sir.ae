
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  BedDouble,
  CalendarDays,
  ArrowUpRight,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { projects } from "@/data/projects";

// Exact folder paths from your public directory.
// Projects without downloaded images use project.image as fallback.
const projectImageFolders: Record<string, string> = {
  "montura-2":
    "Emaar_Properties/Montura_2",

  "palmiera-collective":
    "Emaar_Properties/Palmiera_Collective",

  "habtoor-grand-residences":
    "Al_Habtoor_Group/Habtoor_Grand_Residences",

  "the-chedi-private-residences":
    "Al_Seeb_Real_Estate_Development/The_Chedi_Private_Residences",

  "fleurs-de-jardin":
    "AMIS_Development/Fleurs_de_Jardin",

  "ellington-ocean-house":
    "Ellington_Properties/Ellington_Ocean_House",

  "knightsbridge-phase-2":
    "LEOS_Developments/Knightsbridge_Phase_2",

  "the-alba-residences":
    "OMNIYAT/The_Alba_Residences_(Dorchester_Collection)",

  "casa-ahs":
    "AHS_Properties/Casa_AHS",

  "edra-villas":
    "H&H_Development/EDRA_Villas",

  "villa-del-divos":
    "Mr_Eight_Development/Villa_del_DIVOS",

  "palm-central-private-residences-frond-m":
    "Nakheel/Palm_Central_Private_Residences_Frond_M",

  "east-residence-6-serenia-district":
    "Palma_Development/East_Residence_6_at_Serenia_District",

  "prestige-one-residences":
    "Prestige_One_Developments/Prestige_One_Residences",

  "eywa-tree-of-life":
    "R.Evolution/Eywa_Tree_of_Life",
};

// Return the local downloaded image for each project.
function getProjectImage(slug: string, fallback: string) {
  const folder = projectImageFolders[slug];

  if (!folder) return fallback;

  return `/${folder}/image_001.webp`;
}

/** Avoid duplicate AED prefix */
function formatPrice(price: string) {
  const trimmed = price.trim();

  if (!trimmed) return "Price on request";

  return /^aed/i.test(trimmed) ? trimmed : `AED ${trimmed}`;
}

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [propertyType, setPropertyType] = useState("All Types");
  const [sort, setSort] = useState("default");

  const locations = useMemo(
    () =>
      Array.from(new Set(projects.map((p) => p.location))).sort(
        (a, b) => a.localeCompare(b)
      ),
    []
  );

  const types = useMemo(
    () =>
      Array.from(new Set(projects.map((p) => p.propertyType))).sort(
        (a, b) => a.localeCompare(b)
      ),
    []
  );

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = projects.filter((project) => {
      const matchesSearch =
        !query ||
        project.name.toLowerCase().includes(query) ||
        project.developer.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.price.toLowerCase().includes(query);

      const matchesLocation =
        location === "All Locations" ||
        project.location === location;

      const matchesType =
        propertyType === "All Types" ||
        project.propertyType === propertyType;

      return matchesSearch && matchesLocation && matchesType;
    });

    if (sort === "az") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sort === "za") {
      result = [...result].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    return result;
  }, [search, location, propertyType, sort]);

  const clearFilters = () => {
    setSearch("");
    setLocation("All Locations");
    setPropertyType("All Types");
    setSort("default");
  };

  return (
    <main className="min-h-screen bg-[#faf8fd]">

      {/* Projects Banner */}
      <section className="relative flex min-h-[370px] items-center justify-center overflow-hidden bg-[#21152f] px-5 pb-12 pt-28 text-center text-white md:min-h-[390px]">

        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-[#21152f]/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#21152f]/60 via-[#21152f]/40 to-[#21152f]/90" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-3xl"
        >
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[4px] text-purple-200 sm:text-xs">
            SIR.ae · Property Collection
          </p>

          <h1 className="text-3xl font-light leading-tight sm:text-5xl lg:text-6xl">
            Discover Exceptional

            <span className="mt-1 block font-semibold text-purple-200">
              Dubai Properties
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/80">
            Explore luxury residences, premium villas and exclusive
            developments across Dubai.
          </p>

          <Link
            href="#all-developments"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-purple-600 px-6 py-3 text-xs font-bold text-white transition hover:bg-purple-500"
          >
            Explore Properties
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
      </section>

      {/* Projects Listing */}
      <section
        id="all-developments"
        className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12"
      >

        {/* Heading */}
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600">
              Explore Properties
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#21152f] sm:text-4xl">
              All Developments
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              Find your ideal property in Dubai. Explore exclusive
              residences and premium developments.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Showing{" "}
            <strong className="text-purple-600">
              {filteredProjects.length}
            </strong>{" "}
            of {projects.length} projects
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 rounded-xl border border-purple-100 bg-white p-5 shadow-sm">

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

            {/* Search */}
            <div className="flex h-12 items-center gap-3 rounded-md border border-gray-200 px-4 transition focus-within:border-purple-400 md:col-span-2">

              <Search size={18} className="shrink-0 text-purple-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search project, developer, location or price..."
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />
            </div>

            {/* Property Type */}
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="h-12 w-full truncate rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none focus:border-purple-500"
            >
              <option value="All Types">
                All Property Types
              </option>

              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            {/* Location */}
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-12 w-full truncate rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none focus:border-purple-500"
            >
              <option value="All Locations">
                All Locations
              </option>

              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

          </div>

          {/* Sorting */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-4">

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <SlidersHorizontal size={15} />
              Refine your search
            </div>

            <div className="flex flex-wrap items-center gap-4">

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-md border border-gray-200 bg-white px-3 py-2.5 text-xs text-gray-600 outline-none focus:border-purple-500"
              >
                <option value="default">Default Order</option>
                <option value="az">Name: A to Z</option>
                <option value="za">Name: Z to A</option>
              </select>

              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 transition hover:text-purple-800"
              >
                <X size={14} />
                Clear Filters
              </button>

            </div>
          </div>
        </div>

        {/* Project Cards */}
        {filteredProjects.length > 0 ? (

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {filteredProjects.map((project, index) => {

              const image = getProjectImage(
                project.slug,
                project.image
              );

              return (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: (index % 6) * 0.05,
                  }}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-purple-100/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/10"
                >

                  {/* Project Image */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative block h-[240px] overflow-hidden"
                  >

                    <img
                      src={image}
                      alt={project.name}
                      loading="lazy"
                      onError={(e) => {
                        const img = e.currentTarget;

                        if (img.src !== new URL(project.image, window.location.origin).href) {
                          img.src = project.image;
                        }
                      }}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                    {/* Developer */}
                    <span
                      title={project.developer}
                      className="absolute left-4 top-4 max-w-[65%] truncate rounded-md border border-white/30 bg-white/90 px-3 py-2 text-[10px] font-bold text-gray-800"
                    >
                      {project.developer}
                    </span>

                    {/* Arrow */}
                    <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-gray-900 transition group-hover:bg-purple-600 group-hover:text-white">
                      <ArrowUpRight size={19} />
                    </span>

                    {/* Location */}
                    <span
                      title={project.location}
                      className="absolute bottom-4 left-4 flex max-w-[85%] items-center gap-2 truncate text-xs font-medium text-white"
                    >
                      <MapPin size={14} className="shrink-0" />
                      <span className="truncate">
                        {project.location}
                      </span>
                    </span>

                  </Link>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-5">

                    <p
                      title={project.propertyType}
                      className="truncate text-[10px] font-bold uppercase tracking-wider text-purple-600"
                    >
                      {project.propertyType}
                    </p>

                    <Link href={`/projects/${project.slug}`}>
                      <h3
                        title={project.name}
                        className="mt-2 min-h-[56px] line-clamp-2 text-xl font-bold leading-snug text-[#21152f] transition group-hover:text-purple-600"
                      >
                        {project.name}
                      </h3>
                    </Link>

                    {/* Price and Handover */}
                    <div className="mt-4 flex items-start justify-between gap-3">

                      <div className="min-w-0">
                        <p className="text-xs text-gray-400">
                          Starting Price
                        </p>

                        <p
                          title={formatPrice(project.price)}
                          className="mt-1 truncate text-lg font-bold text-purple-700"
                        >
                          {formatPrice(project.price)}
                        </p>
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="text-xs text-gray-400">
                          Handover
                        </p>

                        <p className="mt-1 flex items-center justify-end gap-1 whitespace-nowrap text-sm font-semibold text-gray-700">
                          <CalendarDays size={14} className="shrink-0" />
                          {project.handover}
                        </p>
                      </div>

                    </div>

                    <div className="my-5 border-t border-gray-100" />

                    {/* Project Details */}
                    <div className="flex items-center justify-between gap-3 text-xs text-gray-500">

                      <span
                        title={project.bedrooms}
                        className="flex min-w-0 items-center gap-2"
                      >
                        <BedDouble size={16} className="shrink-0 text-purple-500" />
                        <span className="truncate">
                          {project.bedrooms}
                        </span>
                      </span>

                      <span
                        title={project.developer}
                        className="max-w-[45%] shrink-0 truncate"
                      >
                        {project.developer}
                      </span>

                    </div>

                    {/* View Project */}
                    <div className="mt-auto pt-5">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex w-full items-center justify-center gap-2 rounded-md bg-[#382052] py-3.5 text-xs font-bold text-white transition hover:bg-purple-600"
                      >
                        View Project
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>

                  </div>

                </motion.article>
              );
            })}

          </div>

        ) : (

          /* No Results */
          <div className="rounded-xl border border-purple-100 bg-white px-5 py-20 text-center">

            <Search size={38} className="mx-auto text-purple-200" />

            <h3 className="mt-5 text-xl font-bold text-[#21152f]">
              No Projects Found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try changing your search or filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-6 rounded-md bg-purple-600 px-6 py-3 text-xs font-bold text-white transition hover:bg-purple-700"
            >
              Clear All Filters
            </button>

          </div>

        )}

      </section>
    </main>
  );
}
