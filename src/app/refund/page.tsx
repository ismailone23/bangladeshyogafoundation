import { pageMeta } from "@/lib/seo";
import PolicyPage from "@/components/policy-page";

export const metadata = pageMeta("Refund policy", "Refunds for Bangladesh Yoga Foundation courses and sessions.", "/refund");

export default function Page() {
  return <PolicyPage k="refund" />;
}
