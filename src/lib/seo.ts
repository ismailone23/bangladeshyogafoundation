import type { Metadata } from "next";

// The live domain. Override with NEXT_PUBLIC_SITE_URL only for a preview or staging deploy.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bangladeshyogafoundation.org").replace(/\/$/, "");
export const NAME = "Bangladesh Yoga Foundation";
export const DESCRIPTION = "Bangladesh Yoga Foundation teaches yoga in Dhaka and across Bangladesh: open-air sessions, beginner courses and live online classes for health, peace and harmony.";
const IMAGE = "/img/hero.jpg";

/** Per-page metadata: title (the layout adds the site name), description, canonical URL and share cards. */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: NAME, type: "website", locale: "en_BD", images: [{ url: IMAGE, width: 2000, height: 1125, alt: NAME }] },
    twitter: { card: "summary_large_image", title, description, images: [IMAGE] },
  };
}
