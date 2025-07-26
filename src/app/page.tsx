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

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 h-[500vh]">
      <section className="grid grid-cols-6 gap-4">
        {/* right side */}
        <aside className="col-span-4 space-y-6">
          {/* title and description*/}
          <Title />

          {/* instructors */}
          <Instructor />

          {/* how the course is laid out */}
          <CourseLeadOut />

          {/* guideline */}
          <GuideLine />

          {/* what you will learn by doing the course */}
          <Pointer />

          {/* course exclusive feature */}
          <ExclusiveFeature />

          {/* course details */}
          <About />
        </aside>

        {/* left side */}
        <aside className="col-span-2 h-[200vh]">
          <div className="sticky top-22 space-y-6">
            {/* trailer */}
            <Trailer />

            {/* cta */}
            <CtaButton />

            {/* check lists */}
            <CheckList />
          </div>
        </aside>
      </section>
    </main>
  );
}
