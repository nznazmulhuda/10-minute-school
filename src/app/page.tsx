import CheckList from "@/components/home/checkList";
import CtaButton from "@/components/home/ctaButton";
import Instructor from "@/components/home/instructor";
import Title from "@/components/home/title";
import Trailer from "@/components/home/trailer";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 h-[500vh]">
      <section className="grid grid-cols-6 gap-4">
        {/* right side */}
        <aside className="col-span-4 space-y-6">
          {/* title */}
          <Title />

          {/* description */}
          <section></section>

          {/* instructors */}
          <Instructor />

          {/* how the course is laid out */}
          <section></section>

          {/* what you will learn by doing the course */}
          <section></section>

          {/* course exclusive feature */}
          <section></section>

          {/* course details */}
          <section></section>
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
