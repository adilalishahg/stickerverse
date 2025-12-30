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
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div
        className={`flex gap-10 w-max ${
          reverse ? "marquee-right" : "marquee-left"
        }`}
      >
        {/* Duplicate for seamless loop */}
        {[...images, ...images].map((src, index) => (
          <div key={index} className="shrink-0">
            <Image
              src={src}
              alt="tag"
              width={120}
              height={60}
              className="opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MarqueeTags = () => {
  return (
    <div className="flex flex-col gap-6 py-10">
      {/* Row 1 → Left */}
      <MarqueeRow />

      {/* Row 2 → Right */}
      <MarqueeRow reverse />
    </div>
  );
};

export default MarqueeTags;
