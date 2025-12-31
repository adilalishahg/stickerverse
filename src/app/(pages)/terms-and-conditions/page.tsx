import React from "react";
import TermsConditions from "@/components/TermsConditions/TermsConditions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Stickerverse",
  description: "Read the terms and conditions for using Stickerverse.",
};

export default function page() {
  return <TermsConditions />;
}
