"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-5xl">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo/stickerverse-logo-gradient.png"
                  alt="logo"
                  width={200}
                  height={150}
                  unoptimized
                />
                <p className="sr-only">Website Title</p>
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <Link
                aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/privacy-and-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/terms-and-conditions"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
