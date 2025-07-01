export default function Footer() {
  return (
    <footer className="bg-[#3B82F6] dark:bg-[#1e3a8a] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Kiri: Info copyright */}
        <div className="text-center md:text-left text-sm md:text-base font-medium tracking-wide">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Yogyakomtek</span>. All rights reserved.
        </div>

        {/* Kanan: Social Media */}
        <div className="flex gap-6 text-sm">
          <a
            href="#"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-orange-300 transition-colors duration-200"
          >
            Facebook
          </a>
          <a
            href="#"
            className="hover:text-red-300 transition-colors duration-200"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}
