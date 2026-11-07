import { DESCRIPTION, NAME, pageMeta } from "@/lib/seo";
import Site from "@/components/site";

// absolute title skips the layout template
export const metadata = { ...pageMeta(`${NAME} | Yoga in Bangladesh`, DESCRIPTION, "/"), title: { absolute: `${NAME} | Yoga in Bangladesh` } };

export default function Home() {
  return <Site />;
}
