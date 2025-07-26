import About from "@/components/home/about";
import CheckList from "@/components/home/checkList";
import CourseLeadOut from "@/components/home/courseLaidOut";
import CtaButton from "@/components/home/ctaButton";
import ExclusiveFeature from "@/components/home/exclusiveFeature";
import GuideLine from "@/components/home/guideLine";
import Instructor from "@/components/home/instructor";
import Pointer from "@/components/home/pointers";
import Title from "@/components/home/title";
import Trailer from "@/components/home/trailer";
import HeadSeo from "@/components/shared/headSeo";
import { Data } from "@/types/course";

export default async function CoursePageContent({ data }: { data: Data }) {
  return (
    <>
      <HeadSeo
        title={data.seo.title}
        description={data.seo.description}
        keywords={data.seo.keywords}
        defaultMeta={data.seo.defaultMeta}
        schema={data.seo.schema}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <section className="grid grid-cols-6 gap-4">
          {/* right side */}
          <aside className="col-span-4 space-y-6">
            {/* title and description*/}
            <Title data={data} />

            {/* instructors */}
            <Instructor data={data} />

            {/* how the course is laid out */}
            <CourseLeadOut data={data} />

            {/* guideline */}
            <GuideLine data={data} />

            {/* what you will learn by doing the course */}
            <Pointer data={data} />

            {/* course exclusive feature */}
            <ExclusiveFeature data={data} />

            {/* course details */}
            <About data={data} />
          </aside>

          {/* left side */}
          <aside className="col-span-2">
            <div className="sticky top-22 space-y-6">
              {/* trailer */}
              <Trailer data={data} />

              {/* cta */}
              <CtaButton data={data} />

              {/* check lists */}
              <CheckList data={data} />
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
