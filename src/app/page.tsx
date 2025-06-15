// app/page.tsx
"use client";

import AboutSection from "@/components/LandingPages/AboutSection";
import HeroSection from "@/components/LandingPages/HeroSection";
import HomeContent from "@/components/LandingPages/HomeContent";
import { ScheduleSection } from "@/components/LandingPages/ScheduleSection";
import useSmoothScroll from "@/hooks/useSmoothScroll";

export default function HomePage() {
  useSmoothScroll();
  return (
    <>
      <HeroSection />
      <HomeContent />
      <AboutSection />
      <ScheduleSection />
      

      
    </>
  );
}
