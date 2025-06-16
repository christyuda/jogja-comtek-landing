/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    // Jangan build gagal hanya karena error eslint
    ignoreDuringBuilds: true,
  },
  // Aktifkan strict mode React (optional tapi bagus untuk dev)
  reactStrictMode: true,
};

module.exports = nextConfig;
