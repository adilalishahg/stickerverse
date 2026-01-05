"use client";

import React, { FC } from "react";
import JoinButton from "../common/buttons/JoinButton";
import TelegramIcon from "../common/buttons/TelegramIcon";
import MarqueeTags from "./MarqueeTags";
import { StickerCard } from "../Stickers/StickerCard";
import { dummyStickers } from "@/data/dummyStickers";

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center text-center">

      {/* ✅ Animated Heading */}

      <h1 className="text-[105px] rubik font-bold bg-linear-to-r from-pink-400 via-teal-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.5)] animate-fadeUp">
        Welcome to Stickerverse
      </h1>

      {/* ✅ Updated Message */}
      <p className="text-[24px] rubik opacity-90 text-center max-w-2xl mt-4 text-white animate-fadeUp delay-300">
        Join our exclusive partner club for early alpha access, guaranteed
        whitelists, and the biggest upcoming sticker IP drops — all in one place.
      </p>

      {/* ✅ Button */}
      <JoinButton
        props={{
          btnLabel: (
            <div className="flex items-center gap-2">
              <span>Join Club</span>
              <TelegramIcon size={22} className="text-white" />
            </div>
          ),
          className:
            "rounded-full mt-8 cursor-pointer py-5! px-12   hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-400/40 animate-fadeUp delay-400",
        }}
      />
      {/* ✅ Marquee */}
      <div className="relative z-10 w-full max-w-6xl mt-10 px-6">
        <MarqueeTags />
      </div>
      <div className="mt-16 w-full max-w-6xl px-6">
        <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-8 flex flex-col gap-6">
          <h3 className="text-2xl font-bold mb-4 text-center">Latest Stickers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dummyStickers.map((sticker) => (
              <StickerCard
                key={sticker._id}
                sticker={sticker}
                variant="medium"
                isCardDetailsShow={true}
              />
            ))}
          </div>
        </div>
      </div>
      {/* 
      <JoinButton
        props={{
          btnLabel: (
            <div className="flex items-center gap-2">
              <span>Join Club</span>
              <TelegramIcon size={22} className="text-white" />
            </div>
          ),
          className:
            "rounded-full mt-5 cursor-pointer py-5! px-10 hover:bg-blue-400",
        }}
      /> */}

    </div>
  );
};

export default Home;
