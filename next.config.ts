import type { NextConfig } from "next";

const downloadHeaders = [
  { key: "Content-Type", value: "application/zip" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Cache-Control", value: "public, max-age=300, must-revalidate" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/download/YourReport_PDF.zip",
        headers: [
          ...downloadHeaders,
          {
            key: "Content-Disposition",
            value: 'attachment; filename="YourReport_PDF.zip"',
          },
        ],
      },
      {
        source: "/download/YourReport_PDF.zip",
        headers: [
          ...downloadHeaders,
          {
            key: "Content-Disposition",
            value: 'attachment; filename="YourReport_PDF.zip"',
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
