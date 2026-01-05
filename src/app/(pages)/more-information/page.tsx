import React from "react";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import { Metadata } from "next";
import MoreInformation from "@/components/MoreInformation/MoreInformation";

export const metadata: Metadata = {
  title: "Privacy Policy - Stickerverse",
  description: "Read the privacy policy for Stickerverse.",
};

export default function page() {
  return <MoreInformation />;
}
