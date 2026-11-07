
"use client";

import { useEffect, useState } from "react";
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
  { number: "15+", label: "Years Experience" },
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

const typingWords = [
  "Luxury Properties",
  "Exclusive Villas",
  "Dream Residences",
  "Premium Living",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  const [purpose, setPurpose] = useState("Buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentWord = typingWords[wordIndex];

    let delay = isDeleting ? 45 : 85;

    if (!isDeleting && typedText === currentWord) {
      delay = 1700;
    }

    if (isDeleting && typedText === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % typingWords.length);
      } else if (isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length - 1));
      } else {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#100918] text-white"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=90"
          alt="Dubai luxury skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-[#100918]/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#100918]/50 via-[#100918]/35 to-[#100918]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#100918]/50 via-transparent to-[#100918]/30" />

      {/* Animated glow effects */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -25, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-purple-600/30 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-fuchsia-600/25 blur-[150px]"
      />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-32 text-center sm:px-6 sm:pb-28 sm:pt-36"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} className="mb-6 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-purple-200/25 bg-white/[0.08] px-5 py-2.5 shadow-lg shadow-purple-950/20 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-purple-300 shadow-[0_0_12px_#c084fc]" />
            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-purple-100 sm:text-[11px] sm:tracking-[4px]">
              Discover the art of luxury living
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="mx-auto max-w-5xl text-4xl font-light leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl xl:text-[82px]"
        >
          Discover Dubai&apos;s
          <br />

          <span className="mt-2 inline-flex min-h-[1.2em] items-center justify-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-fuchsia-300 to-purple-400">
            {typedText}
            <span className="ml-1 inline-block h-[0.85em] w-[2px] animate-pulse bg-purple-300" />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8"
        >
          Experience exceptional living with SIR.ae. Discover premium
          residences, exclusive villas and remarkable developments
          across Dubai.
        </motion.p>

        {/* Search Card */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-10 max-w-5xl rounded-3xl border border-white/20 bg-white/[0.09] p-4 text-left shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:mt-12 sm:p-6"
        >
          {/* Purpose Tabs */}
          <div className="mb-5 flex flex-wrap gap-2">
            {purposes.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPurpose(item)}
                className={`relative overflow-hidden rounded-full px-6 py-2.5 text-[11px] font-semibold transition-all duration-300 sm:text-xs ${
                  purpose === item
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-950/40"
                    : "border border-white/10 bg-white/[0.06] text-white/70 hover:border-purple-300/40 hover:bg-white/15 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {/* Location */}
            <div className="group flex min-h-[56px] items-center gap-3 rounded-xl border border-white/15 bg-black/20 px-4 transition-all duration-300 hover:border-purple-300/50 focus-within:border-purple-300/70 focus-within:bg-black/30">
              <FiMapPin className="shrink-0 text-lg text-purple-300 transition-transform duration-300 group-hover:scale-110" />

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full cursor-pointer appearance-none bg-transparent text-xs text-white outline-none [&>option]:bg-[#1b1025] [&>option]:text-white"
                aria-label="Select location"
              >
                <option value="">Select Location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>

              <FiChevronDown className="shrink-0 text-white/50" />
            </div>

            {/* Property Type */}
            <div className="group flex min-h-[56px] items-center gap-3 rounded-xl border border-white/15 bg-black/20 px-4 transition-all duration-300 hover:border-purple-300/50 focus-within:border-purple-300/70 focus-within:bg-black/30">
              <FiHome className="shrink-0 text-lg text-purple-300 transition-transform duration-300 group-hover:scale-110" />

              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full cursor-pointer appearance-none bg-transparent text-xs text-white outline-none [&>option]:bg-[#1b1025] [&>option]:text-white"
                aria-label="Property type"
              >
                <option value="">Property Type</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <FiChevronDown className="shrink-0 text-white/50" />
            </div>

            {/* Price Range */}
            <div className="group flex min-h-[56px] items-center gap-3 rounded-xl border border-white/15 bg-black/20 px-4 transition-all duration-300 hover:border-purple-300/50 focus-within:border-purple-300/70 focus-within:bg-black/30">
              <FiTrendingUp className="shrink-0 text-lg text-purple-300 transition-transform duration-300 group-hover:scale-110" />

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full cursor-pointer appearance-none bg-transparent text-xs text-white outline-none [&>option]:bg-[#1b1025] [&>option]:text-white"
                aria-label="Price range"
              >
                <option value="">Price Range</option>
                {priceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>

              <FiChevronDown className="shrink-0 text-white/50" />
            </div>

            {/* Search Button */}
            <motion.button
              type="button"
              onClick={handleSearch}
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.97 }}
              className="group flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 text-sm font-bold text-white shadow-lg shadow-purple-950/40 transition-all duration-300 hover:from-purple-500 hover:to-fuchsia-500 hover:shadow-purple-600/30"
            >
              <FiSearch size={17} />
              Search Properties
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-y-9 sm:mt-16 sm:grid-cols-4 sm:gap-y-0"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className={`flex flex-col items-center ${
                index !== stats.length - 1
                  ? "sm:border-r sm:border-white/15"
                  : ""
              }`}
            >
              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {stat.number}
              </h3>

              <p className="mt-2 text-[9px] font-medium uppercase tracking-[2px] text-white/55 sm:text-[10px] sm:tracking-[2.5px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#featured-projects"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 z-10 hidden h-11 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-purple-200/50 bg-white/[0.05] text-purple-100 backdrop-blur-md transition-colors hover:border-purple-300 hover:bg-purple-500/20 sm:flex"
        aria-label="Scroll to featured projects"
      >
        <FiArrowDown size={15} />
      </motion.a>
    </section>
  );
}
