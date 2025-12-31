"use client";

import Link from "next/link";

const GlobalNotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col text-center p-6">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="p-2 px-10 bg-blue-500 text-white rounded-xl">
        Return Home
      </Link>
    </div>
  );
};

export default GlobalNotFound;
