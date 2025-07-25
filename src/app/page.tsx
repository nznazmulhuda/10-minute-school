import Trailer from "@/components/home/trailer";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <section className="grid grid-cols-6 gap-4">
        {/* right side */}
        <aside className="col-span-4">
          {/* title */}
          <section></section>

          {/* description */}
          <section></section>

          {/* instructors */}
          <section></section>

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
        <aside className="col-span-2">
          {/* trailer */}
          <Trailer />

          {/* cta */}
          <section></section>

          {/* check lists */}
          <section></section>
        </aside>
      </section>
    </main>
  );
}
