
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  BedDouble,
  ArrowUpRight,
  CalendarDays,
  Building2,
  ArrowRight,
} from "lucide-react";

import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section
      id="featured-projects"
      className="bg-[#faf8fd] px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="inline-block rounded-full border border-purple-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-purple-700">
              Exclusive Properties
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#241735] sm:text-5xl">
              Discover Our
              <span className="block text-purple-700">
                Featured Projects
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Explore Dubai&apos;s finest residential developments,
              selected for exceptional living and investment opportunities.
            </p>
          </div>

          <Link
            href="/projects"
            className="group flex w-fit items-center gap-3 rounded-full border border-purple-300 bg-white px-6 py-3 text-sm font-semibold text-purple-800 transition hover:border-purple-800 hover:bg-[#382052] hover:text-white"
          >
            View All Projects
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-purple-100/80 bg-white shadow-[0_8px_35px_rgba(45,25,70,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(45,25,70,0.13)]"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="relative block h-[260px] overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#160d20]/75 via-transparent to-black/10" />

                <span className="absolute left-4 top-4 max-w-[75%] truncate rounded-full border border-white/30 bg-black/30 px-4 py-2 text-[10px] font-semibold text-white backdrop-blur-md">
                  {project.developer}
                </span>

                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[#382052] transition group-hover:bg-purple-600 group-hover:text-white">
                  <ArrowUpRight size={19} />
                </span>

                <span className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-medium text-white">
                  <MapPin size={14} />
                  {project.location}
                </span>
              </Link>

              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">
                  {project.propertyType}
                </span>

                <Link href={`/projects/${project.slug}`}>
                  <h3 className="mt-2 line-clamp-1 text-xl font-bold text-[#241735] transition group-hover:text-purple-700">
                    {project.name}
                  </h3>
                </Link>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-gray-400">Starting Price</p>
                    <p className="mt-1 text-xl font-bold text-purple-700">
                      AED {project.price}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-400">Handover</p>
                    <p className="mt-1 flex items-center justify-end gap-1 text-sm font-semibold text-gray-700">
                      <CalendarDays size={14} className="text-purple-500" />
                      {project.handover}
                    </p>
                  </div>
                </div>

                <div className="my-5 border-t border-purple-100" />

                <div className="flex items-center justify-between gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-2">
                    <BedDouble size={16} className="text-purple-600" />
                    {project.bedrooms} Beds
                  </span>

                  <span className="flex max-w-[60%] items-center gap-2 truncate">
                    <Building2 size={16} className="shrink-0 text-purple-600" />
                    <span className="truncate">{project.developer}</span>
                  </span>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#382052] py-3.5 text-xs font-bold text-white transition hover:bg-purple-700"
                >
                  Explore Project
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            Looking for something specific?
            <Link href="/projects" className="ml-2 font-bold text-purple-700 hover:underline">
              Explore all {projects.length} projects →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
