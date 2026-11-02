
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Gem,
  HeartHandshake,
  Target,
  Eye,
  ShieldCheck,
  Sparkles,
  MapPin,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "We believe every property journey should be built on honesty, clear communication and trust.",
  },
  {
    icon: Gem,
    title: "Quality & Excellence",
    description:
      "We focus on exceptional properties, thoughtful service and attention to every detail.",
  },
  {
    icon: HeartHandshake,
    title: "Client First",
    description:
      "Understanding your needs comes first. We aim to make every interaction personal and meaningful.",
  },
  {
    icon: Sparkles,
    title: "Modern Approach",
    description:
      "We bring a fresh perspective to discovering premium real estate opportunities in Dubai.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#faf8fd] text-[#21152f]">

      {/* Hero Section */}
      <section className="relative mt-6 flex min-h-[430px] items-center justify-center overflow-hidden bg-[#21152f] px-6 py-24 text-center text-white md:min-h-[480px]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-[#21152f]/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#21152f]/40 via-[#21152f]/50 to-[#21152f]/90" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[5px] text-purple-200">
            Get To Know Us · SIR.ae
          </p>

          <h1 className="text-4xl font-light leading-tight sm:text-6xl lg:text-7xl">
            More Than Just
            <span className="mt-2 block font-semibold text-purple-200">
              Real Estate
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/80 sm:text-base">
            Discover a new perspective on luxury living. We help you explore
            exceptional properties and opportunities across Dubai.
          </p>

          <Link
            href="/projects"
            className="mt-9 inline-flex items-center gap-3 rounded-md bg-purple-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-purple-500"
          >
            Explore Properties
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
      </section>

      {/* Introduction Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-12 lg:py-28">

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90"
              alt="Luxury modern Dubai residence"
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[520px]"
            />
          </div>

          <div className="absolute -bottom-6 -right-3 rounded-xl bg-[#382052] p-6 text-white shadow-xl sm:-right-6 sm:p-8">
            <Building2 size={30} className="mb-3 text-purple-200" />
            <p className="text-2xl font-bold">SIR.ae</p>
            <p className="mt-1 text-xs text-white/65">
              Your Property Journey
            </p>
          </div>
        </div>

        <div className="pt-5 lg:pl-5">
          <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600">
            Who We Are
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
            Redefining The Way You
            <span className="text-purple-600"> Discover Dubai</span>
          </h2>

          <p className="mt-7 text-sm leading-8 text-gray-600">
            At SIR.ae, we believe finding the right property is about more
            than choosing a location. It is about discovering a place that
            matches your lifestyle, ambitions and future plans.
          </p>

          <p className="mt-5 text-sm leading-8 text-gray-600">
            Our focus is on showcasing exceptional residential developments,
            luxury apartments, premium villas and exclusive property
            opportunities across Dubai.
          </p>

          <p className="mt-5 text-sm leading-8 text-gray-600">
            Whether you are exploring your next home or considering a property
            investment, we aim to make your journey informed, clear and
            convenient.
          </p>

          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-3 font-bold text-purple-700 transition hover:gap-5"
          >
            Discover Our Properties
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#21152f] px-6 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-purple-300">
              Our Purpose
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              What Drives Us Forward
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Our approach is shaped by a simple belief: great property
              experiences begin with understanding people.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-8 sm:p-10">
              <div className="mb-7 grid h-14 w-14 place-items-center rounded-xl bg-purple-500/20 text-purple-300">
                <Target size={28} />
              </div>

              <h3 className="text-2xl font-bold">Our Mission</h3>

              <p className="mt-5 text-sm leading-8 text-white/65">
                To make discovering premium properties in Dubai easier
                through clear information, carefully presented developments
                and a client-focused experience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-8 sm:p-10">
              <div className="mb-7 grid h-14 w-14 place-items-center rounded-xl bg-purple-500/20 text-purple-300">
                <Eye size={28} />
              </div>

              <h3 className="text-2xl font-bold">Our Vision</h3>

              <p className="mt-5 text-sm leading-8 text-white/65">
                To become a trusted destination for people exploring
                exceptional real estate opportunities and luxury living
                across Dubai.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">

        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600">
            What Matters To Us
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            The Values Behind
            <span className="text-purple-600"> SIR.ae</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-500">
            The principles that guide how we present properties and work
            towards a better client experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-purple-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/5"
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-purple-50 text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white">
                <item.icon size={26} />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f1ebfa] px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600">
              The SIR.ae Experience
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              A Better Way To Explore
              <span className="text-purple-600"> Dubai Real Estate</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-600">
              Property decisions deserve attention and the right information.
              We bring together property details and development information
              to help you explore your options with greater clarity.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Explore premium residential developments",
                "Discover properties across Dubai locations",
                "Access project information in one place",
                "Connect with our team for property enquiries",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-purple-600"
                  />
                  <p className="text-sm font-medium text-[#382052]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/projects"
              className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#382052] px-7 py-4 text-sm font-bold text-white transition hover:bg-purple-600"
            >
              Browse Developments
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90"
              alt="Luxury contemporary property interior"
              className="h-[430px] w-full rounded-2xl object-cover shadow-xl sm:h-[540px]"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-[#21152f]/85 p-6 text-white backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
              <div className="flex items-center gap-3">
                <MapPin className="text-purple-300" size={24} />
                <div>
                  <p className="text-xs text-white/60">
                    Explore Our Collection
                  </p>
                  <p className="mt-1 font-bold">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#21152f] px-6 py-20 text-center text-white lg:py-24">

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-600/20 blur-[100px]" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-purple-500/20 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[4px] text-purple-300">
            Start Your Journey
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
            Your Next Property
            <span className="block text-purple-300">
              Starts With SIR.ae
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/65">
            Explore our collection of Dubai properties or get in touch
            with our team to discuss your requirements.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-purple-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-purple-500"
            >
              Explore Properties
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 rounded-md border border-white/25 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#21152f]"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
