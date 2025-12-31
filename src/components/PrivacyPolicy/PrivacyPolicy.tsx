"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white/20 shadow-md container rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Privacy Policy</h2>
      <p>Effective Date: 31 December 2025</p>
      <p className="mt-4">
        Stickerverse (“we”, “our”, “us”) respects your privacy. This Privacy
        Policy explains how we collect, use, and protect your information when
        you use our Telegram bot.
      </p>

      <h3 className="text-xl font-semibold mt-6">1. Information We Collect</h3>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>Payment Information via TON Wallet or Star Payment.</li>
        <li>Telegram username and user ID.</li>
        <li>Device information.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">
        2. How We Use Your Information
      </h3>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>Process purchases and deliver stickers.</li>
        <li>Improve our services and resolve issues.</li>
        <li>Communicate important updates.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">3. Sharing of Information</h3>
      <p className="mt-2 text-gray-700">
        We do not sell or rent your personal information. Necessary information
        may be shared with payment processors.
      </p>

      <h3 className="text-xl font-semibold mt-6">4. Security</h3>
      <p className="mt-2 text-gray-700">
        We implement reasonable measures to protect your data, but no system is
        100% secure.
      </p>

      <h3 className="text-xl font-semibold mt-6">
        5. Changes to Privacy Policy
      </h3>
      <p className="mt-2 text-gray-700">
        We may update this policy occasionally. Updates will be posted here with
        a revised effective date.
      </p>

      <h3 className="text-xl font-semibold mt-6">6. Contact Us</h3>
      <p className="mt-2 text-gray-700">Email: support@stickerverse.com</p>
    </div>
  );
}
