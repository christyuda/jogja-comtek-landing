"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function CountdownSection() {
const targetDate = new Date("2025-09-27T10:00:00+07:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
useEffect(() => {
  const interval = setInterval(() => {
    const remaining = getTimeRemaining();
    setTimeLeft(remaining);
    if (
      remaining.days === 0 &&
      remaining.hours === 0 &&
      remaining.minutes === 0 &&
      remaining.seconds === 0
    ) {
      clearInterval(interval);
    }
  }, 1000);
  return () => clearInterval(interval);
}, []);


  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 py-20 overflow-hidden">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-white dark:to-neutral-500 mb-4">
          Menuju Yogyakomtek 2025
        </h1>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 mb-10 max-w-xl mx-auto">
          Hitung mundur menuju event teknologi terbesar di Yogyakarta.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <CountdownItem label="Hari" value={timeLeft.days} />
          <CountdownItem label="Jam" value={timeLeft.hours} />
          <CountdownItem label="Menit" value={timeLeft.minutes} />
          <CountdownItem label="Detik" value={timeLeft.seconds} />
        </div>
      </div>
    </section>
  );
}

function CountdownItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 shadow-md backdrop-blur-md">
      <div className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}