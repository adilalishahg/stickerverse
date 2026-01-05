"use client";

import React from "react";
import { IsCardDetailsShow, Sticker, StickerVariant } from "@/types/types";
import Image from "next/image";
import FallbackImage from "../common/FallbackImage";

interface StickerCardProps {
  sticker: Sticker;
  variant?: StickerVariant;
  isCardDetailsShow?: IsCardDetailsShow;
  handleDetailsById?: (id: string) => void;
  potion_top?: boolean;
}

export const StickerCard: React.FC<StickerCardProps> = ({
  sticker,
  variant = "large",
  isCardDetailsShow = true,
  potion_top = false,
  handleDetailsById,
}) => {
  const isLarge = variant === "large";
  const isMedium = variant === "medium";
  const isSmall = variant === "small";

  return (

    <div
      className={`relative shrink-0 mr-4 cursor-pointer 
  transition-all duration-300 ease-out
  hover:scale-[1.03] hover:-translate-y-2 
  hover:shadow-2xl hover:shadow-blue-500/30
  rounded-2xl overflow-hidden

  /* ✅ Background Glass Effect */
  bg-white/10 backdrop-blur-xl 
  border border-white/20 
  shadow-lg shadow-black/10

  /* ✅ Hover Border Highlight */
  hover:border-white/40`}
      onClick={() => {
        if (handleDetailsById && sticker._id) {
          handleDetailsById(sticker._id);
        }
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent pointer-events-none" />

      <div
        className={`mx-auto ${isLarge
          ? "w-full h-full"
          : isMedium
            ? ""
            : isSmall
              ? "w-auto h-[220px] sm:w-[217px] sm:h-[217px]"
              : ""
          }`}
      >
        {!isLarge && sticker.isHot && (
          <div
            className={`absolute top-4 left-4 px-3 py-1 flex gap-1 items-center text-sm font-semibold text-app-white rounded-full`}
            style={{
              background:
                "linear-gradient(270deg, #9D41FF 0%, #F26CB2 49.71%, #FFC037 100%)",
              zoom: "82%",
            }}
          >
            <Image
              src="/images/icons/heart.svg"
              alt="Hot"
              width={16}
              height={16}
              unoptimized={true}
            />
            <span className="rubik">Hot</span>
          </div>
        )}
        {/* Image with FALLBACK */}
        <FallbackImage
          src={sticker.imageSrc}
          alt={sticker.title}
          width={isLarge ? 344 : 180}
          height={isLarge ? 344 : 180}
          className="w-full h-auto object-contain bg-transparent dark:bg-[#1a1a1ab0]"
          style={{ minHeight: isLarge ? "344px" : "180px" }}
          fallback="/images/stickers/sticker1.png"
          unoptimized={true}
        />
      </div>

      {isCardDetailsShow && (
        <div className={`p-4 pt-0  ${potion_top && "absolute top-1"}`}>
          <h3
            className={`rubik font-bold truncate  dark:text-white ${isLarge ? "text-lg" : "text-base"
              } mb-1`}
          >
            {sticker.title}
          </h3>
          {isLarge && sticker.description && (
            <p className="text-sm  dark:text-white truncate mb-3 line-clamp-2 rubik">
              {sticker.description}
            </p>
          )}
          <div className="flex justify-between items-center">
            <p
              className={`text-sm text-sold-out ${isLarge
                ? "text-[#FF524C]  font-semibold"
                : "text-gray-300 dark:text-white"
                }  rubik`}
            >
              Sold out {sticker.sold}/{sticker.total}
            </p>
            {isLarge ? (
              <button className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-blue-500 transition-colors rubik">
                Trade on market
              </button>
            ) : (
              <span
                className={`text-xl font-bold text-gray-200 dark:text-white ${potion_top && "hidden"
                  }`}
              >
                ↗
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
