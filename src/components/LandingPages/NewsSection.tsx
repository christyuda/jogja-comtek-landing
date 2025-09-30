"use client";

import { useMemo } from "react";
import Link from "next/link";

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  href: string;
  date: string;        // ISO string, e.g., "2025-09-25"
  image?: string;      // optional thumbnail URL
  tag?: string;        // optional label, e.g., "Update", "Press"
};

type Props = {
  items?: NewsItem[];
};

export default function NewsSection({ items }: Props) {
  // Temporary demo data (remove when you pass real items)
  const demoItems = useMemo<NewsItem[]>(
    () => [
      {
        id: "1",
        title: "Registration Opens for Tech Expo 2025",
        summary:
          "Early-bird registration is live. Secure your spot and get exclusive perks.",
        href: "#",
        date: "2025-09-20",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
        tag: "Update",
      },
      {
        id: "2",
        title: "Keynote Speaker Announcement",
        summary:
          "We’ve confirmed our keynote speaker lineup—leaders in AI, cloud, and product design.",
        href: "#",
        date: "2025-09-18",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
        tag: "Announcement",
      },
      {
        id: "3",
        title: "Workshops: Hands-on Tracks Revealed",
        summary:
          "Choose from beginner to advanced tracks—limited seats, first-come first-served.",
        href: "#",
        date: "2025-09-15",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
      },
      
    ],
    []
  );

  const data = items && items.length ? items : demoItems;

  return (
    <section id="news" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium tracking-wide text-blue-600">
              Berita Terbaru
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Terbaru dari Yogyakomtek
            </h2>
            <p className="mt-2 text-gray-600">
                Ikuti perkembangan terbaru seputar acara, pembicara, dan informasi penting lainnya.
            </p>
          </div>

         
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
            >
              {item.image && (
                <div className="aspect-[16/9] overflow-hidden">
                  {/* Using <img> to avoid next/image remote config issues */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <time
                    dateTime={item.date}
                    className="font-medium text-gray-500"
                  >
                    {new Date(item.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </time>
                  {item.tag && (
                    <span className="inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-700">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 line-clamp-2 text-base sm:text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                  {item.summary}
                </p>

                <div className="mt-4">
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                  >
                    Baca Selengkapnya
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="#"
            className="inline-flex w-full justify-center rounded-xl border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}
