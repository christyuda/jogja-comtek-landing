// app/page.tsx
"use client";

import HeroSection from "@/components/LandingPages/HeroSection";
import HomeContent from "@/components/LandingPages/HomeContent";
import useSmoothScroll from "@/hooks/useSmoothScroll";

export default function HomePage() {
  useSmoothScroll();
  return (
    <>
      <HeroSection />
      <HomeContent />
    </>
  );
}
