import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BedDouble, MapPin, Search } from "lucide-react";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/data/projects";
import { SITE } from "@/lib/site";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#20282f]">
      <Hero projectCount={projects.length} image={projects[0]?.image} />

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 py-24 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-20 lg:py-36"
      >
        <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight text-[#20282f] md:text-6xl lg:text-7xl">
          A different perspective on exceptional living.
        </h2>

        <div className="flex flex-col justify-center">
          <p className="max-w-xl text-sm leading-7 text-[#7c858c]">
            Discover a curated collection of exclusive residential developments
            across Dubai. Explore distinctive residences, exceptional
            architecture and remarkable destinations.
          </p>

          <Link
            href="/projects"
            className="group mt-10 inline-flex w-fit items-center gap-8 border border-[#263d50] px-7 py-5 text-[10px] tracking-[2px] text-[#263d50] transition hover:bg-[#263d50] hover:text-white"
          >
            DISCOVER OUR COLLECTION
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-[#e8edf0] px-6 py-24 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1600px]">
          {/* SECTION HEADING */}
          <div className="flex flex-col justify-between gap-8 border-b border-[#d8dcdf] pb-10 md:flex-row md:items-end">
            <div>
              <span className="text-[10px] tracking-[3px] text-[#8295a5]">
                CURATED DEVELOPMENTS
              </span>

              <h2 className="mt-4 font-serif text-4xl font-light md:text-6xl">
                Selected projects
              </h2>

              <p className="mt-4 text-sm text-[#7c858c]">
                Discover residences selected for exceptional living.
              </p>
            </div>

            <div className="flex items-end justify-between gap-8 md:justify-end">
              <div className="text-sm text-[#7c858c]">
                <span className="font-serif text-4xl text-[#20282f]">
                  {featuredProjects.length.toString().padStart(2, "0")}
                </span>
                <span className="ml-2 text-[10px] tracking-[2px]">
                  SHOWCASE
                </span>
              </div>

              <Link
                href="/projects"
                className="group inline-flex w-fit items-center gap-4 border border-[#263d50] px-6 py-3 text-[10px] tracking-[2px] text-[#263d50] transition hover:bg-[#263d50] hover:text-white"
              >
                VIEW ALL
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* PROJECT GRID */}
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                {/* IMAGE */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#dce2e6]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
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

                {/* INFO */}
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
        </div>
      </section>

      {/* LIFESTYLE BANNER */}
      <section className="relative isolate flex min-h-[550px] items-center justify-center overflow-hidden bg-[#263d50] px-6 py-24 text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=85"
          alt="Luxury Dubai residence"
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#172d40]/70" />

        <div className="max-w-3xl">
          <span className="text-[10px] tracking-[3px] text-[#c2d2df]">
            THE SIR EXPERIENCE
          </span>

          <p className="mt-6 font-serif text-5xl font-light leading-tight md:text-7xl">
            Find a place that feels
            <br />
            <span className="italic text-[#a8c0d8]">like your own.</span>
          </p>

          <Link
            href="/projects"
            className="group mt-12 inline-flex items-center gap-8 border border-white/70 px-8 py-5 text-[10px] tracking-[2px] transition hover:bg-white hover:text-[#263d50]"
          >
            EXPLORE RESIDENCES
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 py-24 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-20 lg:py-32"
      >
        <div>
          <span className="text-[10px] tracking-[3px] text-[#8295a5]">
            GET IN TOUCH
          </span>

          <h2 className="mt-5 font-serif text-5xl font-light leading-tight text-[#20282f] md:text-6xl">
            Your next chapter
            <br />
            <span className="italic text-[#8295a5]">starts here.</span>
          </h2>

          <p className="mt-7 max-w-md text-sm leading-7 text-[#7c858c]">
            Tell us what you are looking for and our property team will get back
            to you with matching developments.
          </p>
        </div>

        <ContactForm />
      </section>

      {/* LOCATION */}
      <section id="location" className="bg-[#e8edf0] px-6 py-24 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] tracking-[3px] text-[#8295a5]">
              OUR OFFICE
            </span>

            <h2 className="mt-4 font-serif text-4xl font-light text-[#20282f] md:text-5xl">
              Visit us in Dubai
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#7c858c]">{SITE.city}</p>

            <a
              href={SITE.phoneHref}
              className="mt-3 w-fit text-sm text-[#20282f] underline-offset-4 hover:underline"
            >
              {SITE.phoneDisplay}
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 w-fit text-sm text-[#20282f] underline-offset-4 hover:underline"
            >
              {SITE.email}
            </a>
          </div>

          {/* TODO: q=Dubai ki jagah apna exact office address daalo */}
          <iframe
            title="SIR Properties location in Dubai"
            src="https://www.google.com/maps?q=Dubai&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full border-0 md:h-[420px]"
          />
        </div>
      </section>
    </main>
  );
}