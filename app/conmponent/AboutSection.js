export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 md:scroll-mt-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
        <div className="section-fade">
          <h2
            id="about-heading"
            className="mb-4 text-center text-3xl font-bold text-white md:text-4xl"
          >
            About <span className="gradient-text">me</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-slate-400">
            Self-taught full-stack developer building skills through shipping real
            projects.
          </p>
          <div className="glass rounded-3xl p-6 md:p-10">
            <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
              Hi — I&apos;m{" "}
              <span className="font-semibold text-indigo-300">Praveen Kumar</span>
              , a self-taught full-stack web developer. I don&apos;t have a formal
              CS degree; I&apos;ve grown through hands-on practice, open-source
              workflows, and production-style apps.
            </p>
            <div className="mt-10">
              <h3 className="mb-4 text-lg font-semibold text-emerald-300">
                What I&apos;m looking for
              </h3>
              <p className="mb-4 text-slate-400">
                I&apos;m seeking a web development internship where I can:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  Work on real-world projects with measurable impact
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  Learn from experienced developers and code reviews
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  Level up both frontend craft and backend fundamentals
                </li>
              </ul>
            </div>
            <p className="mt-8 text-slate-300">
              I&apos;m quick to learn, consistent, and serious about growing as a
              developer.
            </p>
            <div className="mt-10 border-t border-white/10 pt-8">
              <h3 className="mb-2 text-lg font-semibold text-slate-200">Mindset</h3>
              <p className="text-slate-400">
                I believe in learning by building, writing maintainable code, and
                improving a little every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
