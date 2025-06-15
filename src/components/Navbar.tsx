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
    e.preventDefault(); // mencegah default jump
    const el = document.getElementById(targetId);
    if (el) {
      const lenis = getLenisInstance();
      lenis?.scrollTo(el);
      closeDrawer(); // jika drawer sedang terbuka
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

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      className={`relative group text-sm font-semibold ${
        pathname === href ? "text-[#F97316]" : "text-white"
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
            ? "bg-[#0A0A0A]/80 backdrop-blur-md shadow-lg border-b border-[#ffffff1a]"
            : "bg-[#0A0A0A]"
        }`}
      >
        <div
          className={`max-w-8xl mx-auto px-6 ${
            scrolled ? "py-6" : "py-8"
          } flex justify-between items-center`}
        >
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-white">
              Jogja Comtek
            </span>
          </div>

          <div className="hidden md:flex gap-6 items-center">
            {navItem("#", "HOME")}
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="relative group text-sm font-semibold text-white"
            >
              TENTANG
              <span className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#F97316] via-[#EF4444] to-[#3B82F6] w-0 group-hover:w-full transition-all duration-300" />
            </a>
<a
              href="#schedule"
              onClick={(e) => handleSmoothScroll(e, "schedule")}
              className="relative group text-sm font-semibold text-white"
            >
              JADWAL
              <span className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#F97316] via-[#EF4444] to-[#3B82F6] w-0 group-hover:w-full transition-all duration-300" />
            </a>            {navItem("#", "EVENT")}
            {navItem("#", "BLOG")}
            {navItem("#", "CONTACT")}
          </div>

          <div className="flex items-center gap-4 text-white">
            <FiShoppingCart className="hidden md:block text-lg cursor-pointer" />
            <FiSearch className="hidden md:block text-lg cursor-pointer" />
            <button
              className={`md:hidden text-2xl transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
              }`}
              onClick={openDrawer}
            >
              <FiMenu />
            </button>
            <button className="hidden md:inline-block bg-gradient-to-r from-[#F97316] via-[#EF4444] to-[#3B82F6] text-white text-sm font-semibold px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 shadow-md shadow-[#F97316]/50 hover:shadow-lg hover:shadow-[#F97316]/80">
              Buy Ticket →
            </button>
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
          className={`fixed top-0 right-0 h-full w-64 bg-[#0A0A0A] text-white p-6 z-50 ${
            isMobileMenuOpen ? "animate-slideInRight" : "animate-slideOutRight"
          }`}
        >
          <div className="flex justify-end mb-6">
            <button onClick={closeDrawer} className="text-2xl">
              <FiX />
            </button>
          </div>
          <ul className="flex flex-col gap-6 text-sm font-medium">
            <li>
              <Link href="#" onClick={closeDrawer}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={closeDrawer}>
                TENTANG
              </Link>
            </li>
            <li>
              <Link href="#" onClick={closeDrawer}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="#" onClick={closeDrawer}>
                EVENT
              </Link>
            </li>
            <li>
              <Link href="#" onClick={closeDrawer}>
                BLOG
              </Link>
            </li>
            <li>
              <Link href="#" onClick={closeDrawer}>
                CONTACT
              </Link>
            </li>
            <li>
              <button className="mt-4 w-full bg-gradient-to-r from-[#F97316] via-[#EF4444] to-[#3B82F6] text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300">
                Buy Ticket →
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
