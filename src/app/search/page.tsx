import type { Metadata } from "next";
import { SearchExperience } from "@/components/search-experience";

export const metadata: Metadata = {
  title: "Preparing Search Package | MyBeSix",
  description: "Track the preparation of your MyBeSix search package and download the official desktop tool.",
  robots: { index: false, follow: false },
};

export default function SearchPage() {
  return <SearchExperience />;
}
