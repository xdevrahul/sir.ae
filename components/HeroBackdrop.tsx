"use client";

import { useEffect, useState } from "react";

type Props = {
  image: string;
};

export default function HeroBackdrop({ image }: Props) {
  const [revealed, setRevealed] = useState(false);

  // Load hote hi andhera parda dheere se uthta hai, photo saamne aati hai.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setRevealed(true);
      return;
    }
    const id = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      {/* PHOTO: fixed attachment taaki SIR ke letters ke andar ki photo isi se match kare */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* VEIL: photo ko dim karta hai. Letters iske upar hain, isliye wahi photo full brightness mein dikhti hai */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-ink-deep"
        style={{
          opacity: revealed ? 0.72 : 1,
          transition: "opacity 2400ms cubic-bezier(0.2, 0.7, 0.2, 1)",
        }}
      />
    </>
  );
}