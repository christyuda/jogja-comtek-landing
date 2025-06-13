import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-800 font-sans">
        <Navbar />
        <main className="min-h-screen px-4 md:px-12 lg:px-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
