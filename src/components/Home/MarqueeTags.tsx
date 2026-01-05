"use client";

import Image from "next/image";
import React from "react";

const images = [
  "/images/veve-badges/artist_proof.png",
  "/images/veve-badges/blind_box.png",
  "/images/veve-badges/common.png",
  "/images/veve-badges/Craft Only.png",
  "/images/veve-badges/listed for sale.png",
  "/images/veve-badges/rare.png",
  "/images/veve-badges/ultra_rare.png",
];

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => {
  return (
    <div className="w-full overflow-hidden">
      <div
        className={`flex items-center gap-10 w-max ${reverse ? "marquee-right" : "marquee-left"
          }`}
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="shrink-0 flex items-center justify-center"
          >
            {/* ✅ FIXED HEIGHT BADGE */}
            <Image
              src={src}
              alt="tag"
              width={200}   // just for next/image requirement
              height={60}   // just for next/image requirement
              className="h-11.5 w-auto object-contain opacity-90 hover:opacity-120 transition"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MarqueeTags = () => {
  return (
    <div className="flex flex-col gap-6 py-8">
      <MarqueeRow />
      <MarqueeRow reverse />
    </div>
  );
};

export default MarqueeTags;
