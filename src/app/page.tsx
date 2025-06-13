'use client';

import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { FiMapPin, FiClock } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="bg-[#0A0A0A] text-white py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">
        
        {/* LEFT: Text */}
        <div className="space-y-6">
          <p className="uppercase text-sm text-gray-400 tracking-widest">MUSIC FESTIVAL</p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            DISCOVER A WORLD
            <br />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500 tracking-tight">
              OF INNOVATION
            </span>
          </h1>

          <p className="text-gray-400 leading-relaxed max-w-md">
            Jogja Comtek 2025 hadir sebagai pameran teknologi dan inovasi terbesar —
            penuh promo, hiburan, dan solusi masa depan!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-300">
            <p className="flex items-center gap-2"><FiMapPin /> Jogja Expo Center, Yogyakarta</p>
            <p className="flex items-center gap-2"><FiClock /> 10 AM - 10 PM, 20 April 2025</p>
          </div>

          <button className="group mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-red-500 to-blue-500 hover:scale-105 transition-transform duration-300 shadow-md">
            Purchase Ticket <FaArrowRight className="group-hover:translate-x-1 transition" />
          </button>
        </div>

        {/* RIGHT: Gambar + Curve */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1555617980-df25c7c55bc3?auto=format&fit=crop&w=1600&q=80"
            alt="Hero"
            fill
            className="object-cover rounded-2xl border border-[#3B82F6]/30 shadow-2xl"
          />

          {/* Curve SVG */}
          <svg className="absolute -top-10 -right-10" width="200" height="200" viewBox="0 0 200 200" fill="none">
            <path
              d="M0,100 C60,0 140,200 200,100"
              stroke="#9333EA"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Star */}
          <div className="absolute top-5 right-5 w-6 h-6 rounded-full bg-white rotate-45 shadow-xl"></div>
        </div>
      </div>

      {/* Soft glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] opacity-30 z-0 pointer-events-none" />
    </section>
  );
}
