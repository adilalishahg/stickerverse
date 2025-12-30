import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "vevestickerverse.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.vevestickerverse.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "veve-assets.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.vevestickerverse.com",
        port: "",
        pathname: "/**",
      }
    ],
    unoptimized: false,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_API_PUBLIC_URL: process.env.NEXT_PUBLIC_API_PUBLIC_URL,
  },

  async headers() {
    return [
      {
        // Apply Telegram-embedding permissions to all pages
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL",
          },
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://web.telegram.org https://telegram.org https://*.telegram.org https://*.t.me https://*.ton.org;",
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://api.vevestickerverse.com/api/v1/:path*',
      },
    ];
  },

};

export default nextConfig;
