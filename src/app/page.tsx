import CoursePageContent from "@/components/shared/coursePageContent";
import { getCourseData } from "@/lib/api";

export default async function Home() {
  const data = await getCourseData("en");

  return <CoursePageContent data={data} />;
}
