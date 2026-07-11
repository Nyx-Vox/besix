import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://mybesix.com"),
  title: {
    default: "MyBeSix | Free People Search Tool",
    template: "%s | MyBeSix",
  },
  description:
    "Prepare a free search request and download the official MyBeSix Windows search tool.",
  applicationName: "MyBeSix",
  openGraph: {
    type: "website",
    siteName: "MyBeSix",
    title: "MyBeSix | Free People Search Tool",
    description:
      "Prepare a search request and download the official MyBeSix Windows search package.",
  },
  twitter: {
    card: "summary",
    title: "MyBeSix | Free People Search Tool",
    description:
      "Prepare a search request and download the official MyBeSix Windows search package.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
