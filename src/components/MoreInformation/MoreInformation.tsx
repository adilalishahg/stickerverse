"use client";

import React from "react";

export default function MoreInformation() {
  return (
    <div className="bg-white/20 shadow-md container rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">More Information</h2>

      <p className="text-center text-sm text-gray-200">
        Everything you need to know about Stickerverse
      </p>

      <p className="mt-4 text-gray-100">
        Stickerverse is a digital sticker marketplace and collection experience
        powered through Telegram. Here you can explore exclusive sticker packs,
        rarity-based tags, and seamless payment options.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-white">
        1. How Stickerverse Works
      </h3>
      <ul className="list-disc list-inside mt-2 text-gray-100">
        <li>Browse sticker packs inside our Telegram bot.</li>
        <li>Purchase using TON Wallet or Telegram Stars.</li>
        <li>Receive your stickers instantly on Telegram.</li>
        <li>Collect rare tags such as Common, Rare, Ultra Rare, etc.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 text-white">
        2. Payments & Transactions
      </h3>
      <p className="mt-2 text-gray-100">
        Stickerverse supports secure payments through TON Wallet and Telegram
        Stars. All transactions are processed securely and verified before
        delivery.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-white">
        3. Sticker Rarity & Badges
      </h3>
      <p className="mt-2 text-gray-100">
        Every sticker pack can include different rarity levels and badges like:
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-100">
        <li>Common</li>
        <li>Rare</li>
        <li>Ultra Rare</li>
        <li>Artist Proof</li>
        <li>Blind Box</li>
        <li>Craft Only</li>
        <li>Listed for Sale</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 text-white">
        4. Support & Help
      </h3>
      <p className="mt-2 text-gray-100">
        If you face any issues with payments, sticker delivery, or bot usage,
        feel free to contact us.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-white">
        5. Contact Us
      </h3>
      <p className="mt-2 text-gray-100">
        Email: <span className="underline">support@stickerverse.com</span>
      </p>
    </div>
  );
}
