import { pageMeta } from "@/lib/seo";
import Page from "@/components/courses-page";

export const metadata = pageMeta("Yoga Courses in Bangladesh", "Beginner and all-level yoga courses in Bangladesh: Yoga Foundations, Daily Practice, and Breath and Stillness.", "/courses");

export default function CoursesRoute() {
  return <Page />;
}
