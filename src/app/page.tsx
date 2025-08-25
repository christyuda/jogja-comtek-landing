// app/page.tsx
"use client";

import AboutSection from "@/components/LandingPages/AboutSection";
const CountdownSection = dynamic(
  () => import("@/components/LandingPages/CountdownSection"),
  { ssr: false } // ⬅️ kunci perbaikan
);
import HeroSection from "@/components/LandingPages/HeroSection";
import HomeContent from "@/components/LandingPages/HomeContent";
import LocationSection from "@/components/LandingPages/LocationSection";
import QRCodeSection from "@/components/LandingPages/QRCodeSection";
import { ScheduleSection } from "@/components/LandingPages/ScheduleSection";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import dynamic from "next/dynamic";

export default function HomePage() {
  useSmoothScroll();
  return (
    <>
      <HeroSection />
      <HomeContent />
      <AboutSection />
      <ScheduleSection />
      <CountdownSection />
      <QRCodeSection />
      <LocationSection />
    </>
  );
}
