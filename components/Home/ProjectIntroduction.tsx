
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ProjectIntroduction() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-100/70 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <p className="mb-7 inline-flex items-center gap-2 rounded-full bg-purple-50 px-5 py-2 text-[10px] font-bold uppercase tracking-[3px] text-purple-700">
          <Sparkles size={14} />
          The Green Emerald Collection
        </p>

        <h2 className="text-4xl font-light leading-[1.2] tracking-tight text-[#241735] sm:text-5xl lg:text-[62px]">
          A different perspective
          <br className="hidden sm:block" />
          on{" "}
          <span className="font-semibold text-purple-700">
            exceptional living.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
          Discover a carefully selected collection of exclusive
          residential developments across Dubai. Explore distinctive
          architecture, remarkable destinations and residences
          designed around exceptional lifestyles.
        </p>

        <Link
          href="/projects"
          className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#382052] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-900/10 transition hover:-translate-y-1 hover:bg-purple-700"
        >
          Discover Our Collection
          <ArrowUpRight
            size={17}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </motion.div>
    </section>
  );
}
