"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-5xl">
        <div className="px-4">
          {/* Center logo */}
          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="flex items-center transition-all duration-300 hover:scale-105"
            >
              <Image
                src="/images/logo/stickerverse-logo-gradient.png"
                alt="Stickerverse Logo"
                width={200}
                height={150}
                unoptimized
                className="animate-fadeIn"
              />
              <p className="sr-only">Stickerverse</p>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
