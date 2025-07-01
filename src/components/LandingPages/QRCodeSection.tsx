"use client";
import Image from "next/image";

export default function QRCodeSection() {
  return (
    <section id="joinus" className="w-full py-20 bg-gradient-to-b from-[#f5f5f5] to-[#eaeaea] dark:from-[#1a1a1a] dark:to-[#121212] px-4 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-14 border border-gray-200 dark:border-white/20">
        
        {/* Left: QR Code */}
        <div className="text-center space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
            Scan QR Code
          </h3>
          <div className="flex justify-center">
            <Image
              src="/assets/images/qr-code.png"
              alt="Yogyakomtek QR Code"
              width={250}
              height={250}
              className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Atau akses langsung ke:{" "}
            <a
              href="https://jogjacomtek.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              jogjacomtek.id
            </a>
          </p>
        </div>

        {/* Right: Text */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            🎫 Ayo Hadir di Yogyakomtek 2025!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            Cukup scan QR yang tersedia dan kamu akan diarahkan ke website resmi acara. 
            Temukan informasi jadwal, lokasi, dan aktivitas seru lainnya hanya dengan satu langkah.
          </p>
        </div>
      </div>
    </section>
  );
}
