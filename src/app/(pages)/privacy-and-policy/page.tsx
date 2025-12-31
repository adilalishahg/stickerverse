import React from "react";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Stickerverse",
  description: "Read the privacy policy for Stickerverse.",
};

export default function page() {
  return <PrivacyPolicy />;
}
