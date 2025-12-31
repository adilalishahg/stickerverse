"use client";

import React from "react";

export default function TermsConditions() {
  return (
    <div className="bg-white/20 shadow-md container rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Terms & Conditions</h2>
      <p>Effective Date: 31 December 2025</p>
      <p className="mt-4">
        Welcome to Stickerverse. By using our bot, you agree to the following
        terms:
      </p>

      <h3 className="text-xl font-semibold mt-6">1. Use of Bot</h3>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>Use Stickerverse to browse and purchase stickers.</li>
        <li>Must be at least 13 years old.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">2. Purchases</h3>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>Stickers sold via TON Wallet or Star Payment.</li>
        <li>All purchases are final and non-refundable.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">3. License</h3>
      <p className="mt-2 text-gray-700">
        Purchased stickers are for personal use only and cannot be redistributed
        or sold.
      </p>

      <h3 className="text-xl font-semibold mt-6">4. Limitation of Liability</h3>
      <p className="mt-2 text-gray-700">
        Stickerverse is not responsible for any loss or damage resulting from
        the use of the bot. No guarantee of uninterrupted access.
      </p>

      <h3 className="text-xl font-semibold mt-6">5. Changes to Terms</h3>
      <p className="mt-2 text-gray-700">
        We may update terms occasionally. Continued use implies acceptance of
        updated terms.
      </p>

      <h3 className="text-xl font-semibold mt-6">6. Contact Us</h3>
      <p className="mt-2 text-gray-700">Email: support@stickerverse.com</p>
    </div>
  );
}
