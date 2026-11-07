import { pageMeta } from "@/lib/seo";
import Page from "@/components/gallery-page";

export const metadata = pageMeta("Yoga Gallery", "Photos from open-air yoga sessions, courses and community practice with the Bangladesh Yoga Foundation.", "/gallery");

export default function GalleryRoute() {
  return <Page />;
}
