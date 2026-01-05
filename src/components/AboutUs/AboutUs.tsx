"use client";

import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-white/20 shadow-md container rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">About Us</h2>

      <p className="text-center text-sm text-gray-200">
        Welcome to Stickerverse 🚀
      </p>

      <p className="mt-4 text-gray-100">
        Stickerverse is a digital sticker platform designed for collectors and
        creators. We provide a fun and interactive experience through our
        Telegram bot, allowing users to explore, purchase, collect, and enjoy
        unique sticker packs.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-white">1. Our Mission</h3>
      <p className="mt-2 text-gray-100">
        Our mission is to make digital collectibles more exciting, accessible,
        and engaging by offering premium sticker experiences for everyone.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-white">2. What We Offer</h3>
      <ul className="list-disc list-inside mt-2 text-gray-100">
        <li>Exclusive sticker packs and digital collectibles.</li>
        <li>Secure payments through TON Wallet and Telegram Stars.</li>
        <li>Fast delivery directly to your Telegram account.</li>
        <li>Special badges and rarity-based sticker collections.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 text-white">
        3. Why Stickerverse?
      </h3>
      <p className="mt-2 text-gray-100">
        Stickerverse is built for community and creativity. We aim to provide a
        smooth, safe, and enjoyable experience where collectors can grow their
        collections and creators can showcase their digital art.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-white">4. Community</h3>
      <p className="mt-2 text-gray-100">
        We believe in building a strong community around digital collectibles.
        Join us and be part of the Stickerverse journey!
      </p>

      <h3 className="text-xl font-semibold mt-6 text-white">5. Contact Us</h3>
      <p className="mt-2 text-gray-100">Email: support@stickerverse.com</p>
    </div>
  );
}
