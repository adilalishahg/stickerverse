import React from "react";
import Home from "@/components/Home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stickerverse - Telegram Sticker Bot",
  description:
    "Discover, purchase, and download unique stickers for Telegram using Stickerverse bot. Enjoy seamless transactions with TON Wallet and Star Payment.",
};

export default function page() {
  return (
    <>
      <Home />
    </>
  );
}
