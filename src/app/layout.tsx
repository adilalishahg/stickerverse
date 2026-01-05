import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stickerverse",
  description: "Stickerverse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="relative min-h-screen overflow-hidden pt-8">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-top z-20"
            style={{ backgroundImage: "url('/images/top-bg-order.png')" }}
          />

          {/* Overlay (optional) */}
          <div className="absolute inset-0 bg-[#0085ff] z-10" />

          {/* Content */}
          <div className="relative z-20 flex justify-center items-center min-h-screen mt-16">
            <div className="flex flex-col items-center gap-4 text-white">
              <Image
                src="/images/logo/stickerverse-logo-full-white.png"
                alt="logo"
                width={350}
                height={150}
                unoptimized
              />

              {children}
            </div>
          </div>
          <div className="relative z-20">
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
