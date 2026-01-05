"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface FallbackImageProps extends ImageProps {
    fallback?: string;
}

const FallbackImage: React.FC<FallbackImageProps> = ({
    src,
    alt,
    fallback = "/images/stickers/sticker1.png",
    ...props
}) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...props}
            src={imgSrc || fallback}
            alt={alt}
            onError={() => setImgSrc(fallback)}
        />
    );
};

export default FallbackImage;
