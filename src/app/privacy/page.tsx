import { pageMeta } from "@/lib/seo";
import PolicyPage from "@/components/policy-page";

export const metadata = pageMeta("Privacy policy", "How the Bangladesh Yoga Foundation handles the details you share with us.", "/privacy");

export default function Page() {
  return <PolicyPage k="privacy" />;
}
