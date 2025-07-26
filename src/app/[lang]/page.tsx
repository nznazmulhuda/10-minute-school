import CoursePageContent from "@/components/shared/coursePageContent";
import { getCourseData } from "@/lib/api";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bn" }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (lang !== "en" && lang !== "bn") notFound();

  const data = await getCourseData(lang);

  return <CoursePageContent data={data} />;
}
