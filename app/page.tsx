import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BedDouble, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/data/projects";
import { SITE } from "@/lib/site";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-paper">
      <Hero projectCount={projects.length} image={projects[0]?.image} />

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 py-24 md:px-14 lg:grid-cols-2 lg:gap-24 lg:px-20 lg:py-36"
      >
        <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight text-ink md:text-6xl lg:text-7xl">
          A different perspective on exceptional living.
        </h2>

        <div className="flex flex-col justify-center">
          <p className="max-w-xl text-base leading-8 text-body">
            Discover a curated collection of exclusive residential developments
            across Dubai. Explore distinctive residences, exceptional
            architecture and remarkable destinations.
          </p>

          <Link
            href="/projects"
            className="mt-9 inline-flex w-fit items-center gap-4 border-b border-steel pb-3 text-sm transition-colors hover:text-steel"
          >
            Discover our collection
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-mist px-6 py-24 md:px-14 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-serif text-5xl font-light tracking-tight text-ink md:text-6xl">
              Selected projects
            </h2>

            <Link
              href="/projects"
              className="flex w-fit items-center gap-4 border-b border-steel pb-3 text-sm transition-colors hover:text-steel"
            >
              View all projects
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block bg-[#f5f6f6]"
              >
                <div className="relative h-[320px] overflow-hidden bg-line md:h-[370px]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink transition-colors group-hover:bg-sky">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <div className="px-6 py-7">
                  <p className="text-sm text-steel">{project.developer}</p>

                  <h3 className="mt-2 font-serif text-3xl font-normal text-ink">
                    {project.name}
                  </h3>

                  <p className="mt-3 flex items-center gap-2 text-sm text-body">
                    <MapPin size={15} />
                    {project.location}
                  </p>

                  <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
                    <div>
                      <p className="text-xs text-body">Starting from</p>
                      <p className="mt-1 text-lg text-ink">{project.price}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-body">Bedrooms</p>
                      <p className="mt-1 flex items-center justify-end gap-2 text-sm text-ink">
                        <BedDouble size={16} />
                        {project.bedrooms}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE BANNER */}
      <section className="relative isolate flex min-h-[550px] items-center justify-center overflow-hidden bg-ink px-6 py-24 text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=85"
          alt="Luxury Dubai residence"
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-ink-deep/65" />

        <div className="max-w-3xl">
          <p className="font-serif text-5xl font-light leading-tight md:text-7xl">
            Find a place that feels like your own.
          </p>

          <Link
            href="/projects"
            className="mt-12 inline-flex items-center gap-5 border border-white/70 px-8 py-5 text-sm transition-colors hover:bg-white hover:text-ink"
          >
            Explore residences
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-24 md:px-14 lg:grid-cols-2 lg:gap-24 lg:px-20 lg:py-32"
      >
        <div>
          <h2 className="font-serif text-5xl font-light leading-tight text-ink md:text-6xl">
            Your next chapter starts here.
          </h2>

          <p className="mt-7 max-w-md text-base leading-8 text-body">
            Tell us what you are looking for and our property team will get back
            to you with matching developments.
          </p>
        </div>

        <ContactForm />
      </section>

      {/* LOCATION */}
      <section id="location" className="bg-mist px-6 py-24 md:px-14 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-4xl font-light text-ink md:text-5xl">
              Visit us in Dubai
            </h2>
            <p className="mt-6 text-base leading-8 text-body">{SITE.city}</p>
            <a
              href={SITE.phoneHref}
              className="mt-3 w-fit text-base text-ink underline-offset-4 hover:underline"
            >
              {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 w-fit text-base text-ink underline-offset-4 hover:underline"
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