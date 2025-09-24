"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { getLenisInstance } from "@/hooks/useSmoothScroll";

/** === Config === */
type NavItem = { key: string; label: string; targetId: string };
const NAV_ITEMS: NavItem[] = [
  { key: "home",     label: "BERANDA",    targetId: "home" },
  { key: "about",    label: "TENTANG",    targetId: "about" },
  { key: "schedule", label: "JADWAL",     targetId: "schedule" },
  { key: "location", label: "LOKASI",     targetId: "location" },
  { key: "joinus",   label: "BELI TIKET", targetId: "joinus" },
  { key: "competitions",   label: "KOMPETISI", targetId: "competitions" },

];

const SCROLL_DURATION_MS = 1300; // match duration in lenis
const EXTRA_BUFFER_MS = 150;     // small buffer so observer re-aktif setelah animasi berakhir

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // blokir perubahan active saat animasi scrolling supaya gak “patah-patah”
  const [suppressActive, setSuppressActive] = useState(false);
  const suppressTimerRef = useRef<number | null>(null);

  const textColor = isNightMode ? "text-white" : "text-black";
  const hoverBarColor =
    "bg-gradient-to-r from-[#F97316] via-[#EF4444] to-[#3B82F6]";

  /** --- Scroll / ESC listeners --- */
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

  /** --- Smooth scroll to section --- */
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;

    // hitung tinggi navbar untuk offset akurat
    const navEl = document.querySelector("nav");
    const navH = (navEl?.getBoundingClientRect().height ?? 96) + 8; // +8px padding

    // optimism: langsung highlight target
    setActiveSection(targetId);

    // suppress perubahan active selama animasi
    setSuppressActive(true);
    if (suppressTimerRef.current) window.clearTimeout(suppressTimerRef.current);
    suppressTimerRef.current = window.setTimeout(() => {
      setSuppressActive(false);
    }, SCROLL_DURATION_MS + EXTRA_BUFFER_MS);

    const lenis = getLenisInstance();
    if (lenis) {
      lenis.scrollTo(el, {
        offset: -navH,
        duration: SCROLL_DURATION_MS / 1000, // lenis pakai detik
        easing: (t: number) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
      });
    } else {
      // fallback native
      const top =
        el.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: "smooth" });
    }

    closeDrawer();
  };

  /** --- Drawer controls --- */
  const openDrawer = () => {
    setIsDrawerVisible(true);
    setIsMobileMenuOpen(true);
  };
  const closeDrawer = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => setIsDrawerVisible(false), 300);
  };

  /** --- Night mode follows system preference --- */
  useEffect(() => {
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)");
    setIsNightMode(matchDark.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsNightMode(e.matches);
    matchDark.addEventListener("change", handleChange);
    return () => matchDark.removeEventListener("change", handleChange);
  }, []);

  /** --- Observe sections to update active link --- */
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.targetId);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (suppressActive) return; // jangan ubah active saat animasi berlangsung

        // pilih yang paling “centered” / paling besar rasio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        } else if (window.scrollY < 80) {
          setActiveSection("home");
        }
      },
      {
        root: null,
        // Fokus ke area tengah viewport agar gak “nyangkut” di section sebelumnya
        // Top & bottom dipotong 45% viewport height: section aktif saat berada dekat tengah.
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.25, 0.5, 0.75],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [suppressActive]);

  /** --- Shared classes --- */
  const navLinkClass = (isActive: boolean) =>
    `relative group text-sm font-semibold ${
      isActive ? "text-[#F97316]" : textColor
    }`;

  /** --- Desktop link --- */
  const DesktopLink = ({ item }: { item: NavItem }) => (
    <a
      href={`#${item.targetId}`}
      onClick={(e) => handleSmoothScroll(e, item.targetId)}
      className={navLinkClass(activeSection === item.targetId)}
    >
      {item.label}
      <span
        className={`absolute left-0 bottom-0 h-[2px] ${hoverBarColor} transition-all duration-300 ${
          activeSection === item.targetId ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );

  /** --- Drawer link --- */
  const DrawerLink = ({ item }: { item: NavItem }) => (
    <a
      href={`#${item.targetId}`}
      onClick={(e) => handleSmoothScroll(e, item.targetId)}
      className={`${textColor} font-semibold ${
        activeSection === item.targetId ? "text-[#F97316]" : ""
      }`}
    >
      {item.label}
    </a>
  );

  /** --- Dynamic nav background/style --- */
  const navStyle = useMemo(
    () => ({
      backgroundImage: `url('/assets/menubar/${
        isNightMode ? "Menu-Bar-Night-New.png" : "Menu-Bar-Day-New.png"
      }')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: isNightMode ? "#0A0A0A" : "#fff",
      color: isNightMode ? "#fff" : "#000",
    }),
    [isNightMode]
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
        style={navStyle}
      >
        <div className="max-w-8xl mx-auto px-6 h-24 flex justify-between items-center">
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

          {/* Desktop nav */}
          <div className="hidden md:flex gap-6 items-center">
            {NAV_ITEMS.map((item) => (
              <DesktopLink key={item.key} item={item} />
            ))}
          </div>

          {/* Mobile trigger */}
          <div className={`flex items-center gap-4 ${textColor}`}>
  <button
    className={`md:hidden text-2xl transition-transform duration-300
      ${isMobileMenuOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"}
      relative inline-flex h-10 w-10 items-center justify-center rounded-full
      ${isNightMode
        ? "bg-white/15 text-white ring-1 ring-white/20"
        : "bg-black/5 text-black ring-1 ring-black/10"}
      backdrop-blur-[2px] hover:opacity-90`}
    onClick={openDrawer}
    aria-label="Open menu"
  >
    <FiMenu className="h-6 w-6" />
  </button>
</div>
        </div>
      </nav>

      {/* Overlay */}
      {isDrawerVisible && (
        <div
          onClick={closeDrawer}
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm ${
            isMobileMenuOpen ? "animate-fadeIn" : "animate-fadeOut"
          }`}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs bg-white dark:bg-[#121212] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-24 border-b border-gray-200 dark:border-gray-700">
          <img
            src="/assets/logo/new-fix-logo-yoygakomtek.png"
            alt="yogyakomtek"
            className="h-16 w-auto"
            width={200}
            height={200}

          />
          <button
            className="text-2xl text-gray-800 dark:text-gray-200"
            onClick={closeDrawer}
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>
        <div className="flex flex-col px-6 py-8 gap-6">
          {NAV_ITEMS.map((item) => (
            <DrawerLink key={item.key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
