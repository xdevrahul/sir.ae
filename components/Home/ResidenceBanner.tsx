"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";

export default function ResidenceBanner() {
  return (
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-[#1b1028]">

      {/* Background Image (next/image for performance) */}
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90"
        alt="Luxury residence interior"
        fill
        priority={false}
        sizes="100vw"
        className="scale-105 object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#170d20]/45" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#170d20]/80 via-[#170d20]/35 to-[#170d20]/60" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#170d20]/60 via-transparent to-transparent" />

      {/* Purple glow accents */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-purple-500/15 blur-[120px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center"
      >

        {/* Brand Label — SIR Properties */}
        <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[4px] text-purple-100 backdrop-blur-md">
          <LuSparkles size={14} className="text-purple-300" />
          SIR Properties
        </p>

        {/* Heading */}
        <h2 className="text-3xl font-light leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
          Find a place that
          <br />
          <span className="font-semibold italic text-purple-200">
            feels like your own.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/75 sm:mt-7 sm:text-base sm:leading-8">
          Discover a home that reflects your lifestyle, your
          aspirations and your idea of exceptional living.
        </p>

        {/* CTA Button */}
        <Link
          href="/projects"
          className="group mt-9 inline-flex items-center gap-3 rounded-full bg-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-purple-950/30 transition duration-300 hover:-translate-y-1 hover:bg-purple-500 sm:gap-4 sm:px-8 sm:py-4"
        >
          Explore Residences
          <FiArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

      </motion.div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

    </section>
  );
}