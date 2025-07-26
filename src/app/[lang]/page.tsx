import CoursePageContent from "@/components/shared/coursePageContent";
import { getCourseData } from "@/lib/api";

export default async function Home({
  params,
}: {
  params: { lang: "en" | "bn" };
}) {
  const data = await getCourseData(params.lang);

  return <CoursePageContent data={data} />;
}
