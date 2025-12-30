import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning>
        <div className="flex justify-center items-center h-screen flex-col text-center p-6">
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link
            href="/"
            className="p-2 px-10 bg-blue-500 text-white rounded-xl"
          >
            Return Home
          </Link>
        </div>
      </body>
    </html>
  );
}
