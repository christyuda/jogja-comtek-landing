import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="bg-white text-gray-800 font-[var(--font-poppins)]">
        <Navbar />
        
 <main className="min-h-screen ">
          {children}
        </main>        <Footer />
      </body>
    </html>
  );
}
