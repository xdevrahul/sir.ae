
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiCalendar,
  FiArrowUpRight,
  FiArrowRight,
} from "react-icons/fi";
import { LuBedDouble } from "react-icons/lu";

import { projects } from "@/data/projects";

// Local project image folders inside public/
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

  "the-edit-at-d3":
    "Meraas_Dubai_Holding_Real_Estate/The_Edit_at_D3",
};

/** Get actual local project image */
function getProjectImage(slug: string, fallback: string) {
  const folder = projectImageFolders[slug];

  if (!folder) return fallback;

  return `/${folder}/image_001.webp`;
}

/** Price string me pehle se AED ho to duplicate na lagaye */
function formatPrice(price: string) {
  const trimmed = price.trim();

  if (!trimmed) return "Price on request";

  return /^aed/i.test(trimmed) ? trimmed : `AED ${trimmed}`;
}

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section
      id="featured-projects"
      className="bg-[#faf8fd] px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section Heading */}
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

            <FiArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {featuredProjects.map((project, index) => {
            const localImage = getProjectImage(
              project.slug,
              project.image
            );

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.1,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-purple-100/80 bg-white shadow-[0_8px_35px_rgba(45,25,70,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(45,25,70,0.13)]"
              >

                {/* Image + Overlay */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative block h-[240px] overflow-hidden bg-gray-100"
                >
                  <img
                    src={localImage}
                    alt={project.name}
                    loading="lazy"
                    onError={(event) => {
                      const image = event.currentTarget;

                      if (image.src !== project.image) {
                        image.src = project.image;
                      }
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                  {/* Developer Badge */}
                  <span
                    title={project.developer}
                    className="absolute left-4 top-4 max-w-[65%] truncate rounded-md border border-white/30 bg-white/90 px-3 py-2 text-[10px] font-bold text-gray-800"
                  >
                    {project.developer}
                  </span>

                  {/* Arrow Icon */}
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-gray-900 transition group-hover:bg-purple-600 group-hover:text-white">
                    <FiArrowUpRight size={19} />
                  </span>

                  {/* Location */}
                  <span
                    title={project.location}
                    className="absolute bottom-4 left-4 flex max-w-[85%] items-center gap-2 truncate text-xs font-medium text-white"
                  >
                    <FiMapPin size={14} className="shrink-0" />
                    <span className="truncate">
                      {project.location}
                    </span>
                  </span>

                </Link>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5">

                  {/* Property Type */}
                  <p
                    title={project.propertyType}
                    className="truncate text-[10px] font-bold uppercase tracking-wider text-purple-600"
                  >
                    {project.propertyType}
                  </p>

                  {/* Project Name */}
                  <Link href={`/projects/${project.slug}`}>
                    <h3
                      title={project.name}
                      className="mt-2 line-clamp-2 min-h-[56px] text-xl font-bold leading-snug text-[#241735] transition group-hover:text-purple-700"
                    >
                      {project.name}
                    </h3>
                  </Link>

                  {/* Price + Handover */}
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
                        <FiCalendar
                          size={14}
                          className="shrink-0 text-purple-500"
                        />
                        {project.handover}
                      </p>
                    </div>

                  </div>

                  <div className="my-5 border-t border-gray-100" />

                  {/* Bedrooms + Developer */}
                  <div className="flex items-center justify-between gap-3 text-xs text-gray-500">

                    <span
                      title={project.bedrooms}
                      className="flex min-w-0 items-center gap-2"
                    >
                      <LuBedDouble
                        size={16}
                        className="shrink-0 text-purple-500"
                      />

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

                  {/* CTA */}
                  <div className="mt-auto pt-5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex w-full items-center justify-center gap-2 rounded-md bg-[#382052] py-3.5 text-xs font-bold text-white transition hover:bg-purple-600"
                    >
                      View Project
                      <FiArrowUpRight size={16} />
                    </Link>
                  </div>

                </div>
              </motion.article>
            );
          })}

        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            Looking for something specific?

            <Link
              href="/projects"
              className="ml-2 font-bold text-purple-700 hover:underline"
            >
              Explore all {projects.length} projects →
            </Link>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
