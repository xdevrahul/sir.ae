
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { getProjectImages } from "@/lib/project-images";

import {
  MapPin,
  Building2,
  BedDouble,
  CalendarDays,
  ArrowLeft,
  ExternalLink,
  Download,
  ArrowUpRight,
  Images,
} from "lucide-react";

export const instant = false;

interface Props {
  params: Promise<{ slug: string }>;
}

async function getProject(params: Props["params"]) {
  const { slug } = await params;

  if (!slug) {
    return null;
  }

  return projects.find((item) => item.slug === slug) ?? null;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const project = await getProject(params);

  if (!project) {
    return {
      title: "Project Not Found | SIR.ae",
    };
  }

  return {
    title: `${project.name} | SIR.ae`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({ params }: Props) {
  const project = await getProject(params);

  if (!project) {
    notFound();
  }

  // Read all actual images from the local public folder
  const galleryImages = await getProjectImages(project.slug);

  // First local image is used as the hero image
  const heroImage = galleryImages[0] || project.image;

  return (
    <main className="min-h-screen bg-[#faf8fd]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[480px] overflow-hidden bg-[#21152f] sm:h-[530px]">

        <img
          src={heroImage}
          alt={project.name}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#21152f]/30" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#170d20]/95 via-[#21152f]/35 to-[#21152f]/20" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 lg:px-12">

            <Link
              href="/projects"
              className="mb-7 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-purple-200"
            >
              <ArrowLeft size={17} />
              Back to Projects
            </Link>

            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-purple-200">
              {project.developer}
            </p>

            <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {project.name}
            </h1>

            <p className="mt-5 flex items-center gap-2 text-sm text-white/80">
              <MapPin size={17} className="text-purple-300" />
              {project.location}
            </p>

            {galleryImages.length > 0 && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-xs text-white backdrop-blur-sm">
                <Images size={15} />
                {galleryImages.length} Project Photos
              </p>
            )}

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
      </section>

      {/* ================= PROJECT GALLERY ================= */}
      {galleryImages.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pt-14 lg:px-12">

          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600">
                Visual Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#21152f]">
                Project Gallery
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Explore the architecture, interiors and lifestyle.
              </p>
            </div>

            <span className="text-sm font-semibold text-purple-600">
              {galleryImages.length} Photos
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {galleryImages.map((image, index) => (
              <a
                key={image}
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block overflow-hidden rounded-xl bg-gray-100 ${
                  index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${project.name} - Image ${index + 1}`}
                  loading="lazy"
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                    index === 0
                      ? "h-[280px] sm:h-full sm:min-h-[420px]"
                      : "h-[250px]"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />

                <span className="absolute bottom-4 left-4 rounded-md bg-black/50 px-3 py-2 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  View Image
                </span>
              </a>
            ))}

          </div>
        </section>
      )}

      {/* ================= PROJECT DETAILS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Main Content */}
          <div className="space-y-10 lg:col-span-2">

            {/* About Development */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600">
                About Development
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#21152f]">
                About {project.name}
              </h2>

              <p className="mt-5 text-base leading-8 text-gray-600">
                {project.description}
              </p>
            </div>

            {/* Project Overview */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#21152f]">
                Project Overview
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: Building2,
                    label: "Developer",
                    value: project.developer,
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: project.location,
                  },
                  {
                    icon: BedDouble,
                    label: "Bedrooms",
                    value: project.bedrooms,
                  },
                  {
                    icon: CalendarDays,
                    label: "Handover",
                    value: project.handover,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-xl border border-purple-100 bg-white p-5 transition hover:border-purple-200 hover:shadow-md"
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-purple-50 text-purple-600">
                      <item.icon size={20} />
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">
                        {item.label}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#21152f]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Property Type */}
            <div className="rounded-xl border border-purple-100 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[2px] text-purple-400">
                Property Type
              </p>

              <p className="mt-2 text-lg font-semibold text-[#21152f]">
                {project.propertyType}
              </p>
            </div>

          </div>

          {/* ================= SIDEBAR ================= */}
          <aside>
            <div className="sticky top-28 rounded-xl border border-purple-100 bg-white p-7 shadow-sm">

              <p className="text-xs font-bold uppercase tracking-[2px] text-purple-600">
                Starting Price
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#21152f]">
                AED {project.price}
              </h2>

              <div className="my-7 border-t border-purple-100" />

              <div className="space-y-5 text-sm">

                <div className="flex justify-between gap-3">
                  <span className="text-gray-400">Developer</span>
                  <span className="text-right font-semibold text-[#21152f]">
                    {project.developer}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-400">Bedrooms</span>
                  <span className="font-semibold text-[#21152f]">
                    {project.bedrooms}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-400">Handover</span>
                  <span className="font-semibold text-[#21152f]">
                    {project.handover}
                  </span>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#382052] py-4 text-sm font-bold text-white transition hover:bg-purple-600"
                >
                  Enquire Now
                  <ArrowUpRight size={17} />
                </Link>

                {project.brochure && (
                  <a
                    href={project.brochure}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-purple-200 py-4 text-sm font-semibold text-[#382052] transition hover:border-purple-500 hover:bg-purple-50 hover:text-purple-700"
                  >
                    Download Brochure
                    <Download size={16} />
                  </a>
                )}

                {project.officialWebsite && (
                  <a
                    href={project.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 py-3 text-xs font-semibold text-gray-500 transition hover:text-purple-600"
                  >
                    Official Developer Website
                    <ExternalLink size={14} />
                  </a>
                )}

              </div>
            </div>
          </aside>

        </div>
      </section>

      {/* ================= EXPLORE MORE ================= */}
      <section className="border-t border-purple-100 bg-white px-6 py-12 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 transition hover:text-purple-900"
        >
          <ArrowLeft size={17} />
          Explore More Projects
        </Link>
      </section>

    </main>
  );
}
