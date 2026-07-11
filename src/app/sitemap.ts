import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/how-it-works", "/support", "/about", "/contact", "/permitted-use", "/privacy", "/terms", "/report-abuse", "/data-removal"];

  return paths.map((path) => ({
    url: `https://mybesix.com${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
