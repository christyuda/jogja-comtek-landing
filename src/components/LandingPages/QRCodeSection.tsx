"use client";
import Image from "next/image";
import { useState } from "react";

export default function QRCodeSection() {
  const SITE_URL = "https://www.apkomjogja.org/tiket/";
  const [copied, setCopied] = useState(false);

  const openSite = () => {
    window.open(SITE_URL, "_blank", "noopener,noreferrer");
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(SITE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback kalau clipboard tidak tersedia
      window.prompt("Salin URL secara manual:", SITE_URL);
    }
  };

  return (
    <section
      id="joinus"
      className="w-full py-20 bg-gradient-to-b from-[#f5f5f5] to-[#eaeaea] dark:from-[#1a1a1a] dark:to-[#121212] px-4 flex justify-center"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-14 border border-gray-200 dark:border-white/20">
        {/* Left: QR Code */}
        <div className="text-center space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
            Scan QR Code
          </h3>

          {/* Jadikan QR bisa diklik (button) */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={openSite}
              aria-label="Buka situs jogjacomtek.id"
              className="rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
            >
              <Image
                src="/assets/barcode/jogja-barcode.png"
                alt="Yogyakomtek QR Code"
                width={250}
                height={250}
                className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </button>
          </div>

          {/* CTA di bawah QR */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={openSite}
              className="w-full sm:w-auto h-11 px-6 rounded-full font-semibold text-white shadow-lg shadow-black/20 bg-gradient-to-r from-[#F97316] to-[#EF4444] transition will-change-transform hover:scale-[1.02] active:scale-[.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] focus-visible:ring-offset-2"
            >
              Beli Tiket →
            </button>
            <button
              type="button"
              onClick={copyUrl}
              className="w-full sm:w-auto h-11 px-6 rounded-full font-semibold border border-blue-500/60 text-blue-700 hover:bg-blue-500/10 dark:border-blue-400/60 dark:text-blue-300 dark:hover:bg-blue-400/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {copied ? "Tersalin!" : "Salin URL"}
            </button>
          </div>

          {/* Info kecil */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Atau akses langsung:{" "}
            <span className="font-medium text-blue-700 dark:text-blue-300">
              {SITE_URL.replace(/^https?:\/\//, "")}
            </span>
          </p>
        </div>

        {/* Right: Text */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            🎫 Ayo Hadir di Yogyakomtek 2025!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
          Cukup scan QR yang tersedia dan kamu akan diarahkan ke website pembelian tiket acara
          </p>
        </div>
      </div>
    </section>
  );
}
