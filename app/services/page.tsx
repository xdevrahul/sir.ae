
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  KeyRound,
  TrendingUp,
  Handshake,
  Search,
  FileText,
  Headset,
  MapPin,
  CheckCircle2,
  Home,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Home,
    number: "01",
    title: "Property Buying",
    description:
      "Discover apartments, villas and premium residences across Dubai. Explore property options based on your lifestyle, location and budget.",
    features: [
      "Property discovery",
      "Location-based options",
      "Project information",
    ],
  },
  {
    icon: KeyRound,
    number: "02",
    title: "Property Selling",
    description:
      "Present your property to potential buyers with clear property information and professional assistance throughout your selling journey.",
    features: [
      "Property presentation",
      "Buyer enquiries",
      "Selling assistance",
    ],
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Investment Opportunities",
    description:
      "Explore Dubai real estate developments and compare available opportunities to make informed property investment decisions.",
    features: [
      "Off-plan developments",
      "Project comparisons",
      "Market opportunity exploration",
    ],
  },
  {
    icon: Building2,
    number: "04",
    title: "Off-Plan Properties",
    description:
      "Explore upcoming and under-construction developments from leading property developers across Dubai.",
    features: [
      "New developments",
      "Payment plan information",
      "Expected handover details",
    ],
  },
  {
    icon: Handshake,
    number: "05",
    title: "Property Consultation",
    description:
      "Discuss your property requirements with our team and get assistance in exploring suitable property options.",
    features: [
      "Requirement discussion",
      "Property shortlisting",
      "Personal assistance",
    ],
  },
  {
    icon: Headset,
    number: "06",
    title: "Client Assistance",
    description:
      "Get help with property enquiries, project details and the information you need while exploring your next property.",
    features: [
      "Project enquiries",
      "Property information",
      "Ongoing assistance",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Requirements",
    description:
      "Tell us about your preferred property type, location, budget and expectations.",
  },
  {
    number: "02",
    title: "Explore Properties",
    description:
      "Browse relevant developments and review available property information.",
  },
  {
    number: "03",
    title: "Connect With Our Team",
    description:
      "Discuss your shortlisted properties and get answers to your questions.",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "Take the next step in your property journey with the information you need.",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#faf8fd] text-[#21152f]">

      {/* Hero Section */}
      <section className="relative mt-6 flex min-h-[430px] items-center justify-center overflow-hidden bg-[#21152f] px-6 py-24 text-center text-white md:min-h-[470px]">

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
            What We Offer · SIR.ae
          </p>

          <h1 className="text-4xl font-light leading-tight sm:text-6xl lg:text-7xl">
            Real Estate Services
            <span className="mt-2 block font-semibold text-purple-200">
              Designed Around You
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/80 sm:text-base">
            From discovering your ideal home to exploring property
            opportunities, we help make your Dubai real estate journey easier.
          </p>

          <Link
            href="#our-services"
            className="mt-9 inline-flex items-center gap-3 rounded-md bg-purple-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-purple-500"
          >
            Explore Our Services
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600">
            Your Property Partner
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
            Everything You Need To
            <span className="text-purple-600"> Explore Real Estate</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-gray-500 sm:text-base">
            Every property journey is different. At SIR.ae, we focus on
            understanding your requirements and helping you explore relevant
            residential developments and real estate opportunities across
            Dubai.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section
        id="our-services"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-20 lg:px-12 lg:pb-28"
      >
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600">
              Our Expertise
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Services We Provide
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500">
              Explore our range of property services designed to support
              different real estate requirements.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-purple-700 transition hover:gap-4"
          >
            Talk To Our Team
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative overflow-hidden rounded-2xl border border-purple-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/5 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-purple-50 text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white">
                  <service.icon size={27} />
                </div>

                <span className="text-sm font-bold tracking-widest text-purple-200">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-[#21152f]">
                {service.title}
              </h3>

              <p className="mt-4 min-h-[105px] text-sm leading-7 text-gray-500">
                {service.description}
              </p>

              <div className="mt-6 space-y-3 border-t border-purple-100 pt-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-purple-500"
                    />
                    <span className="text-xs font-medium text-gray-600">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-purple-700 transition group-hover:gap-4"
              >
                Enquire Now
                <ArrowUpRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#21152f] px-6 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-purple-300">
              How It Works
            </p>

            <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
              Your Journey With SIR.ae
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60">
              A simple approach to help you explore properties and take
              informed next steps.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="mb-6 flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-purple-400/40 bg-purple-500/15 text-sm font-bold text-purple-200">
                    {step.number}
                  </span>

                  {index !== steps.length - 1 && (
                    <div className="hidden h-px flex-1 bg-white/15 lg:block" />
                  )}
                </div>

                <h3 className="text-lg font-bold">{step.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SIR */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-12 lg:py-24">

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90"
            alt="Luxury property interior"
            className="h-[420px] w-full object-cover sm:h-[520px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#21152f]/50 to-transparent" />

          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-xl border border-white/20 bg-[#21152f]/85 p-5 text-white backdrop-blur-md">
            <MapPin size={24} className="text-purple-300" />
            <div>
              <p className="text-xs text-white/60">Our Focus</p>
              <p className="mt-1 font-bold">Dubai Real Estate</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600">
            Why SIR.ae
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
            A More Personal
            <span className="text-purple-600"> Property Experience</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-gray-500">
            We understand that property decisions require careful
            consideration. Our goal is to give you a convenient place to
            discover developments, understand property details and connect
            with our team.
          </p>

          <div className="mt-8 space-y-5">
            {[
              {
                icon: Search,
                title: "Explore With Clarity",
                text: "Find project information and property options in one place.",
              },
              {
                icon: FileText,
                title: "Useful Project Details",
                text: "Review available project details, prices and handover information.",
              },
              {
                icon: Headset,
                title: "Personal Assistance",
                text: "Connect with our team for your property-related enquiries.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-purple-50 text-purple-600">
                  <item.icon size={22} />
                </div>

                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#21152f] px-6 py-20 text-center text-white lg:py-24">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-600/20 blur-[100px]" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-purple-500/20 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[4px] text-purple-300">
            Let's Get Started
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
            Looking For Your
            <span className="block text-purple-300">
              Next Property In Dubai?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/65">
            Tell us what you are looking for. Explore our property collection
            or connect with our team to discuss your requirements.
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
              Contact Our Team
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
