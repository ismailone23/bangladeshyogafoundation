import { pageMeta } from "@/lib/seo";
import Page from "@/components/contact-page";

export const metadata = pageMeta("Join Yoga Classes in Bangladesh", "Ask about a yoga course or session, or join a class with the Bangladesh Yoga Foundation.", "/contact");

export default function ContactRoute() {
  return <Page />;
}
