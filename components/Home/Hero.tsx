
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Home,
  TrendingUp,
  Search,
  ChevronDown,
  ArrowDown,
} from "lucide-react";

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
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      <div className="absolute inset-0 bg-[#170d20]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#160d20]/50 via-[#160d20]/20 to-[#160d20]/90" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-[10px] font-bold uppercase tracking-[5px] text-purple-200 sm:text-xs"
        >
          Discover the art of luxury living
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-light leading-tight tracking-tight sm:text-6xl lg:text-7xl"
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
          className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base"
        >
          Experience exceptional living with Green Emerald.
          Discover premium residences, exclusive villas and
          remarkable developments across Dubai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mx-auto mt-10 max-w-5xl rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:p-6"
        >
          <div className="mb-5 flex flex-wrap gap-2">
            {["Buy", "Rent", "Off-Plan"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPurpose(item)}
                className={`rounded-full px-6 py-2.5 text-xs font-semibold transition ${
                  purpose === item
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30"
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            <div className="flex h-14 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3">
              <MapPin size={17} className="shrink-0 text-purple-200" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-xs text-white outline-none"
              >
                <option value="" className="text-black">Select Location</option>
                <option value="Dubai Marina" className="text-black">Dubai Marina</option>
                <option value="Downtown Dubai" className="text-black">Downtown Dubai</option>
                <option value="Palm Jumeirah" className="text-black">Palm Jumeirah</option>
                <option value="Business Bay" className="text-black">Business Bay</option>
                <option value="Dubai Hills Estate" className="text-black">Dubai Hills Estate</option>
              </select>
              <ChevronDown size={14} className="shrink-0 text-white/70" />
            </div>

            <div className="flex h-14 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3">
              <Home size={17} className="shrink-0 text-purple-200" />
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-transparent text-xs text-white outline-none"
              >
                <option value="" className="text-black">Property Type</option>
                <option value="Apartment" className="text-black">Apartment</option>
                <option value="Villa" className="text-black">Villa</option>
                <option value="Penthouse" className="text-black">Penthouse</option>
                <option value="Townhouse" className="text-black">Townhouse</option>
              </select>
              <ChevronDown size={14} className="shrink-0 text-white/70" />
            </div>

            <div className="flex h-14 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3">
              <TrendingUp size={17} className="shrink-0 text-purple-200" />
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full bg-transparent text-xs text-white outline-none"
              >
                <option value="" className="text-black">Price Range</option>
                <option value="Under AED 1M" className="text-black">Under AED 1M</option>
                <option value="AED 1M - 3M" className="text-black">AED 1M - 3M</option>
                <option value="AED 3M - 5M" className="text-black">AED 3M - 5M</option>
                <option value="AED 5M+" className="text-black">AED 5M+</option>
              </select>
              <ChevronDown size={14} className="shrink-0 text-white/70" />
            </div>

            <button
              type="button"
              onClick={handleSearch}
              className="flex h-14 items-center justify-center gap-2 rounded-xl bg-purple-600 text-sm font-bold text-white shadow-lg shadow-purple-950/30 transition hover:bg-purple-500"
            >
              <Search size={17} />
              Search Properties
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-y-8 sm:grid-cols-4"
        >
          {[
            { number: "2,500+", label: "Properties Sold" },
            { number: "1,200+", label: "Happy Clients" },
            { number: "15", label: "Years Experience" },
            { number: "500+", label: "Luxury Properties" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center border-white/20 sm:border-r sm:last:border-none"
            >
              <h3 className="text-3xl font-bold">{stat.number}</h3>
              <p className="mt-2 text-xs text-white/65">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#featured-projects"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 z-10 flex h-10 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-purple-200/70 text-purple-100"
        aria-label="Scroll to featured projects"
      >
        <ArrowDown size={15} />
      </motion.a>
    </section>
  );
}
