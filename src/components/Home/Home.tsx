"use client";

import React, { FC } from "react";
import JoinButton from "../common/buttons/JoinButton";
import TelegramIcon from "../common/buttons/TelegramIcon";
import MarqueeTags from "./MarqueeTags";

const Home: FC = () => {
  return (
    <>
      <h1 className="text-[105px] rubik font-bold bg-linear-to-r from-pink-400 via-teal-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]">
        Welcome to Stickerverse
      </h1>

      <p className="text-[24px] rubik opacity-90 text-center max-w-lg">
        Get access to the exclusive partner club with early alpha, guaranteed
        whitelists, and the biggest upcoming sticker IP drops: all in one place.
        Join Club
      </p>

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
      />

      <div className="relative z-10 pl-20 pr-20">
        <MarqueeTags />
      </div>
    </>
  );
};

export default Home;
