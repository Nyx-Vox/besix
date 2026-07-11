export const siteConfig = {
  name: "MyBeSix",
  domain: "mybesix.com",
  description:
    "A free search-request and information-removal platform that provides MyBeSix desktop report packages.",
  supportEmail: "support@mybesix.com",
  downloadPath: "/download/YourReport_PDF.zip",
  downloadName: "YourReport_PDF.zip",
  removalDownloadPath: "/download/YourReport_PDF.zip",
  removalDownloadName: "YourReport_PDF.zip",
  usdt: {
    network: process.env.NEXT_PUBLIC_USDT_NETWORK || "TRON (TRC20)",
    walletAddress: process.env.NEXT_PUBLIC_USDT_WALLET_ADDRESS || "",
  },
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/data-removal", label: "Remove my info" },
  { href: "/support", label: "Support us" },
  { href: "/about", label: "About" },
];
