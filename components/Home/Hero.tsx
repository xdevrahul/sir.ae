"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiHome,
  FiTrendingUp,
  FiSearch,
  FiChevronDown,
  FiArrowDown,
  FiArrowUpRight,
} from "react-icons/fi";

const stats = [
  { number: "2,500+", label: "Properties Sold" },
  { number: "1,200+", label: "Happy Clients" },
  { number: "15", label: "Years Experience" },
  { number: "500+", label: "Luxury Properties" },
];

const purposes = ["Buy", "Rent", "Off-Plan"];

const locations = [
  "Dubai Marina",
  "Downtown Dubai",
  "Palm Jumeirah",
  "Business Bay",
  "Dubai Hills Estate",
  "Jumeirah Golf Estates",
  "MBR City",
];

const propertyTypes = ["Apartment", "Villa", "Penthouse", "Townhouse"];

const priceRanges = [
  "Under AED 5M",
  "AED 5M – 10M",
  "AED 10M – 20M",
  "AED 20M+",
];

export default function Hero() {
  const [purpose, setPurpose] = useState("Buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (purpose) params.set("purpose", purpose);
    if (location) params.set("location", location);
    if (propertyType) params.set("type", propertyType);
    if (priceRange) params.set("price", priceRange);

    window.location.href = `/projects?${params.toString()}`;
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#160d20] text-white"
    >
      {/* ── Background image (next/image for performance) ──── */}
      <Image
        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=90"
        alt="Dubai skyline"
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#170d20]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#160d20]/50 via-[#160d20]/20 to-[#160d20]/95" />

      {/* Purple glow accents */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-purple-500/15 blur-[130px]" />

      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-32 text-center sm:px-6 sm:pb-24 sm:pt-36">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-[10px] font-bold uppercase tracking-[4px] text-purple-200 sm:mb-6 sm:text-xs sm:tracking-[5px]"
        >
          Discover the art of luxury living
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl"
        >
          Discover Dubai&apos;s
          <br />
          <span className="font-semibold text-purple-300">
            Luxury Properties
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:mt-6 sm:text-base"
        >
          Experience exceptional living with SIR.ae. Discover premium
          residences, exclusive villas and remarkable developments
          across Dubai.
        </motion.p>

        {/* ── Search Card ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mx-auto mt-9 max-w-5xl rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:mt-10 sm:p-6"
        >
          {/* Purpose Tabs */}
          <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
            {purposes.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPurpose(item)}
                className={`rounded-full px-5 py-2 text-[11px] font-semibold transition sm:px-6 sm:py-2.5 sm:text-xs ${
                  purpose === item
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40"
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Fields: 1 col mobile → 2 col sm → 4 col md */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {/* Location */}
            <div className="flex h-13 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-3.5">
              <FiMapPin size={16} className="shrink-0 text-purple-200" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full cursor-pointer bg-transparent text-xs text-white outline-none"
                aria-label="Select location"
              >
                <option value="" className="text-black">
                  Select Location
                </option>
                {locations.map((loc) => (
                  <option key={loc} value={loc} className="text-black">
                    {loc}
                  </option>
                ))}
              </select>
              <FiChevronDown size={14} className="shrink-0 text-white/70" />
            </div>

            {/* Property Type */}
            <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-3.5">
              <FiHome size={16} className="shrink-0 text-purple-200" />
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full cursor-pointer bg-transparent text-xs text-white outline-none"
                aria-label="Property type"
              >
                <option value="" className="text-black">
                  Property Type
                </option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type} className="text-black">
                    {type}
                  </option>
                ))}
              </select>
              <FiChevronDown size={14} className="shrink-0 text-white/70" />
            </div>

            {/* Price Range */}
            <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-3.5">
              <FiTrendingUp size={16} className="shrink-0 text-purple-200" />
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full cursor-pointer bg-transparent text-xs text-white outline-none"
                aria-label="Price range"
              >
                <option value="" className="text-black">
                  Price Range
                </option>
                {priceRanges.map((range) => (
                  <option key={range} value={range} className="text-black">
                    {range}
                  </option>
                ))}
              </select>
              <FiChevronDown size={14} className="shrink-0 text-white/70" />
            </div>

            {/* Search */}
            <button
              type="button"
              onClick={handleSearch}
              className="group flex items-center justify-center gap-2 rounded-xl bg-purple-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-950/40 transition hover:bg-purple-500"
            >
              <FiSearch size={16} />
              Search
              <FiArrowUpRight
                size={14}
                className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </button>
          </div>
        </motion.div>

        {/* ── Stats ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-y-8 sm:mt-14 sm:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center ${
                i !== stats.length - 1 ? "sm:border-r sm:border-white/15" : ""
              }`}
            >
              <h3 className="text-2xl font-bold sm:text-3xl">{stat.number}</h3>
              <p className="mt-2 text-[10px] uppercase tracking-[2px] text-white/60 sm:text-xs sm:tracking-normal sm:normal-case">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll Indicator ────────────────────────────────── */}
      <motion.a
        href="#featured-projects"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 z-10 hidden h-10 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-purple-200/70 text-purple-100 sm:flex"
        aria-label="Scroll to featured projects"
      >
        <FiArrowDown size={15} />
      </motion.a>
    </section>
  );
}