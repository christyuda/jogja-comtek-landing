"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiShoppingCart, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { getLenisInstance } from "@/hooks/useSmoothScroll";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const lenis = getLenisInstance();
      lenis?.scrollTo(el, {
        offset: -10, // sedikit offset agar tidak menempel
        duration: 1.3, // durasi lebih lama = lebih halus
        easing: (t) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2, // easeInOutCubic
      });
      closeDrawer?.();
    }
  };

  const openDrawer = () => {
    setIsDrawerVisible(true);
    setIsMobileMenuOpen(true);
  };

  const closeDrawer = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => setIsDrawerVisible(false), 300);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // threshold mobile
    };

    checkMobile(); // run once on mount
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)");

    setIsNightMode(matchDark.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsNightMode(e.matches);
    };

    matchDark.addEventListener("change", handleChange);

    return () => {
      matchDark.removeEventListener("change", handleChange);
    };
  }, []);
  const textColor = isNightMode ? "text-white" : "text-black";
  const hoverBarColor =
    "bg-gradient-to-r from-[#F97316] via-[#EF4444] to-[#3B82F6]";
  // useEffect(() => {
  //   const currentHour = new Date().getHours();
  //   setIsNightMode(currentHour >= 18 || currentHour < 6);
  // }, []);

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      className={`relative group text-sm font-semibold ${
        pathname === href
          ? "text-[#F97316]"
          : isNightMode
          ? "text-white"
          : "text-black"
      }`}
    >
      {label}
      <span
        className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#F97316] via-[#EF4444] to-[#3B82F6] transition-all duration-300 ${
          pathname === href ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          scrolled
            ? isNightMode
              ? "bg-[#0A0A0A]/80 backdrop-blur-md shadow-lg border-b border-[#ffffff1a]"
              : "bg-white/90 shadow-md border-b border-gray-200"
            : isNightMode
            ? "bg-[#0A0A0A]"
            : "bg-white"
        }`}
        style={{
          backgroundImage: `url('/assets/menubar/${
            isNightMode ? "Menu-Bar-Night-New.png" : "Menu-Bar-Day-New.png"
          }')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",

          // backgroundPositionY: scrolled ? "center" : "center",

          backgroundColor: isNightMode ? "#0A0A0A" : "#fff", // fallback
          color: isNightMode ? "#fff" : "#000", // fallback text color
        }}
      >
        <div
          className={`max-w-8xl mx-auto px-6 h-24 flex justify-between items-center`} // h-24 = 96px
        >
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-white">
              <Link href="/">
                <img
                  src="/assets/logo/new-fix-logo-yoygakomtek.png"
                  alt="yogyakomtek"
                  className="h-20 w-auto"
                  width={250}
                  height={250}
                />
              </Link>
            </span>
          </div>

          <div className="hidden md:flex gap-6 items-center">
            {navItem("#", "HOME")}
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className={`relative group text-sm font-semibold ${textColor}`}
            >
              ABOUT
              <span
                className={`absolute left-0 bottom-0 h-[2px] ${hoverBarColor} w-0 group-hover:w-full transition-all duration-300`}
              />
            </a>
            <a
              href="#schedule"
              onClick={(e) => handleSmoothScroll(e, "schedule")}
              className={`relative group text-sm font-semibold ${textColor}`}
            >
              SCHEDULE
              <span
                className={`absolute left-0 bottom-0 h-[2px] ${hoverBarColor} w-0 group-hover:w-full transition-all duration-300`}
              />
            </a>
            <a
              href="#location"
              onClick={(e) => handleSmoothScroll(e, "location")}
              className={`relative group text-sm font-semibold ${textColor}`}
            >
              LOCATION
              <span
                className={`absolute left-0 bottom-0 h-[2px] ${hoverBarColor} w-0 group-hover:w-full transition-all duration-300`}
              />
            </a>
            <a
              href="#joinus"
              onClick={(e) => handleSmoothScroll(e, "joinus")}
              className={`relative group text-sm font-semibold ${textColor}`}
            >
              JOIN US
              <span
                className={`absolute left-0 bottom-0 h-[2px] ${hoverBarColor} w-0 group-hover:w-full transition-all duration-300`}
              />
            </a>
          </div>

          <div className="flex items-center gap-4 text-white">
            <button
              className={`md:hidden text-2xl transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
              }`}
              onClick={openDrawer}
            >
              <FiMenu />
            </button>
            <a
              href="https://www.apkomjogja.org/tiket"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block bg-gradient-to-r from-[#F97316] via-[#EF4444] to-[#3B82F6] text-white text-sm font-semibold px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 shadow-md shadow-[#F97316]/50 hover:shadow-lg hover:shadow-[#F97316]/80"
            >
              Pesan Tiket →
            </a>
          </div>
        </div>
      </nav>

      {isDrawerVisible && (
        <div
          onClick={closeDrawer}
          className={`fixed inset-0 z-40 bg-black backdrop-blur-sm ${
            isMobileMenuOpen ? "animate-fadeIn" : "animate-fadeOut"
          }`}
        />
      )}

      {isDrawerVisible && (
        <div
          className={`fixed top-0 right-0 h-full w-64 p-6 z-50 ${
            isMobileMenuOpen ? "animate-slideInRight" : "animate-slideOutRight"
          }`}
          style={{
            backgroundColor: isNightMode ? "#0A0A0A" : "#ffffff",
            transition: "background-color 0.3s ease",
          }}
        >
          <div className="flex justify-end mb-6">
            <button onClick={closeDrawer} className={`text-2xl ${textColor}`}>
              <FiX />
            </button>
          </div>
          <ul className="flex flex-col gap-6 text-sm font-medium">
            <li>
              <Link
                href="#"
                onClick={closeDrawer}
                className={`${textColor} font-semibold`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={closeDrawer}
                className={`${textColor} font-semibold`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="#schedule"
                onClick={closeDrawer}
                className={`${textColor} font-semibold`}
              >
                SCHEDULE
              </Link>
            </li>
            <li>
              <Link
                href="#location"
                onClick={closeDrawer}
                className={`${textColor} font-semibold`}
              >
                LOCATION
              </Link>
            </li>
            <li>
              <Link
                href="#joinus"
                onClick={closeDrawer}
                className={`${textColor} font-semibold`}
              >
                JOIN US
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
