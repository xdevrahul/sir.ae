"use client";

import { useEffect, useState } from "react";

export default function DubaiTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Dubai",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="flex items-baseline gap-3 text-sm text-white/80">
      Dubai right now
      <span className="font-serif text-3xl font-light tabular-nums text-white md:text-4xl">
        {time ?? "--:--"}
      </span>
    </p>
  );
}