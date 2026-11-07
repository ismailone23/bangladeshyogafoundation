import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const PAGES = ["", "/courses", "/gallery", "/contact", "/privacy", "/refund"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: p === "" ? "weekly" : "monthly", priority: p === "" ? 1 : p === "/courses" ? 0.8 : 0.5 }));
}
