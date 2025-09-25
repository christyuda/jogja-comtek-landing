"use client";

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

const IMG = (f: string) => `/assets/competition/${f}`;

const COMPETITIONS: CompetitionItem[] = [
  {
    title: "Coswalk Competition",
    imageUrl: IMG("Coswalk Pegastore.jpg"),
    href: "https://www.instagram.com/p/DOEJTfHkhX8/?img_index=1",
    tag: "Kompetisi",
    useIframe: false,
  },
  {
    title: "Lomba Menggambar Tingkat SD",
    imageUrl: IMG("gambar-anak_01.png"),
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfT_hyucRsmfn8d5XcJbos2Qeb8S-OSGzv_3vJM1R_mnRmfqw/viewform",
    tag: "Kompetisi",
    useIframe: false,
  },
  {
    title: "Talkshow: Racking Up Riches Via Freelancing In Video Game Development",
    imageUrl: IMG("GameLAN.jpeg"),
    href: "https://www.instagram.com/p/DO-SsiVidS6/",
    tag: "Seminar",
    useIframe: false,
  },
  {
    title: "Pegafest Band Competition",
    imageUrl: IMG("Lomba Band Pegastore.jpg"),
    href: "https://www.instagram.com/p/DOSJJ9aj7D2/",
    tag: "Kompetisi",
    useIframe: false,
  },
  {
    title: "Lomba Foto & Video",
    imageUrl: IMG("Lomba Foto & Video.png"),
    href: "https://www.instagram.com/p/DOvGtNfCaEU/?img_index=1",
    tag: "Kompetisi",
    useIframe: false,
  },
  {
    title: "Speed Drawing Contest",
    imageUrl: IMG("Lomba Speed Drawing.png"),
    href: "https://docs.google.com/forms/d/e/1FAIpQLSenu6fS8h_e8kP-oKFcVAYehpATJk1J04GCd1o895XQdQLOFw/viewform",
    tag: "Kompetisi",
    useIframe: false,
  },
  {
    title: "Street Fighter Tournament",
    imageUrl: IMG("Lomba Street Fighter ELS.jpg"),
    href: "https://www.instagram.com/p/DOVDBSKkg08/",
    tag: "Kompetisi",
    useIframe: false,
  },
  {
    title: "Kompetisi Robot Soccer",
    imageUrl: IMG("Robot Soccer.png"),
    href: "https://docs.google.com/forms/d/e/1FAIpQLScaRYl0345u8mHUyVkvrM-leZFxIu_nVOFme2AVgb32pvkO-A/viewform",
    tag: "Kompetisi",
    useIframe: false,
  },
  {
    title: "Seminar Komik Bareng Dosen ISI Yogyakarta",
    imageUrl: IMG("Seminar 1 (1).png"),
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdlJBi50JwcPswSh_L5nVqUjLyGXsYxyew9jNuTHl5a6QN63w/viewform",
    tag: "Seminar",
    useIframe: false,
  },
  {
    title: "Membuat Film Animasi Kelas Dunia Dengan Post Production",
    imageUrl: IMG("Seminar Animasi AMIKOM-min (1).jpg"),
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeNur2lEWCQ3uUdvYFMDU3ajCWSuQmcKBoAMgVUX3oIXksiew/viewform",
    tag: "Seminar",
    useIframe: false,
  },
  {
    title: "Hulon Yogyakomtek: Poteinsi IP(Intellectual Property) Karakter Komik",
    imageUrl: IMG("Seminar Komik Huion (1).png"),
    href: "https://bit.ly/seminarhuion",
    tag: "Seminar",
    useIframe: false,
  },
  {
    title: "Hulon Yogyakomtek: Dari Imaginasi ke Industri dengan Concept Art untuk Games/ VFX",
    imageUrl: IMG("Seminar Komik Huion_Mas Is (1).png"),
    href: "https://bit.ly/seminarhuion",
    tag: "Seminar",
    useIframe: false,
  },
  {
    title: "Seminar Komik: Jadi Komikus Itu Harus Serius",
    imageUrl: IMG("Seminar Komik Huion_Mas Yogi (1).png"),
    href: "https://bit.ly/seminarhuion",
    tag: "Seminar",
    useIframe: false,
  },
  {
    title: "Game Changer",
    imageUrl: IMG("Seminar NVIDIA (1).png"),
    href: "https://event.kimcommunication.com/eb14e19c",
    tag: "Seminar",
    useIframe: false,
  },
  {
    title: "Coswalk Competition",
    imageUrl: IMG("Seminar Robot Cerdas Untuk Semua (1).png"),
    href: "https://bit.ly/DaftarSeminarRobotik",
    tag: "Seminar",
    useIframe: false,
  },
  {
    title: "Showcase KPOP Dance",
    imageUrl: IMG("Showcase KPOP Dance ELS.jpg"),
    href: "https://www.instagram.com/p/DOP41D8ETnm/?img_index=1",
    tag: "Seminar",
    useIframe: false,
  },
  {
    title: "Workshop Kurasi 1 On 1",
    imageUrl: IMG("Workshop Kurasi 1 on 1 (1).png"),
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeJdgNouVkpQAeImWTa2eHzu-DjSi8uyvq7CfxU9OJO_35JhA/viewform",
    tag: "Seminar",
    useIframe: false,
  },
  {
    title: "National Vice Coding Competition",
    imageUrl: IMG("National Vibe Coding.png"),
    href: "nationalvibecoding.com",
    tag: "Lomba",
    useIframe: false,
  },
];

export default COMPETITIONS;


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
