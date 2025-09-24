"use client";
import React from "react";

const ACCENT = "#F4B74A";

type CompetitionItem = {
  title: string;
  imageUrl: string;       // boleh link drive/CDN/file biasa
  href: string;           // link form/landing
  tag?: "Kompetisi" | "Seminar" | string;
  useIframe?: boolean;    // true = render <iframe> Drive preview
};

const driveIdFrom = (url: string) => {
  const m = url.match(/\/d\/([^/]+)\//);
  return m ? m[1] : null;
};
const driveImgSrc = (url: string) => {
  const id = driveIdFrom(url);
  return id ? `https://drive.google.com/uc?id=${id}` : url;
};
const drivePreviewSrc = (url: string) => {
  const id = driveIdFrom(url);
  return id ? `https://drive.google.com/file/d/${id}/preview` : url;
};

const COMPETITIONS: CompetitionItem[] = [
  {
    title: "Coswalk Competition",
    imageUrl:
      "https://drive.google.com/file/d/1ENLn7brOHSQvYTxrcawZmqfIYBHHGyzB/view",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfT_hyucRsmfn8d5XcJbos2Qeb8S-OSGzv_3vJM1R_mnRmfqw/viewform",
    tag: "Kompetisi",
    useIframe: true, 
  },
];

function Media({ item }: { item: CompetitionItem }) {
  if (item.useIframe) {
    return (
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <iframe
          src={drivePreviewSrc(item.imageUrl)}
          className="absolute inset-0 w-full h-full" 
          allow="autoplay"
          loading="lazy"
          title={item.title}
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden">
      <img
        src={driveImgSrc(item.imageUrl)}
        alt={item.title}
        className="w-full h-full object-cover" 
        loading="lazy"
      />
    </div>
  );
}

export function CompetitionSection() {
  return (
    <section id="competitions" className="py-0" style={{ backgroundColor: ACCENT }}>
      {/* Header blok */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid place-items-center text-center h-56 md:h-72">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
              Kompetisi & Seminar
            </h2>
            <p className="text-white/90">Daftar dan ikuti keseruannya!</p>
          </div>
        </div>
      </div>

      {/* Grid kartu */}
      <div className="max-w-6xl mx-auto px-6 pb-24 md:pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPETITIONS.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <Media item={item} />

                {item.tag && (
                  <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold bg-white/90 text-gray-900 border border-black/5">
                    {item.tag}
                  </span>
                )}

                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  <h3 className="text-white font-semibold text-lg drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800">
                  Daftar sekarang
                </span>
                <svg
                  className="w-4 h-4 text-gray-600 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
