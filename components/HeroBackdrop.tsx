"use client";

import { useEffect, useState } from "react";

export default function HeroBackdrop({ image }: { image: string }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return setRevealed(true);
    const id = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#263d50]"
        style={{
          opacity: revealed ? 0.7 : 1,
          transition: "opacity 2000ms cubic-bezier(0.2,0.7,0.2,1)",
        }}
      />
    </>
  );
}