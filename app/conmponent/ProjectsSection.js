import Image from "next/image";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 md:scroll-mt-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-0">
        <div className="section-fade">
          <h2
            id="projects-heading"
            className="mb-4 text-center text-3xl font-bold text-white md:text-4xl"
          >
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            A mix of full-stack apps, clones, and production deployments—each
            taught me something new.
          </p>
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.id}
                className="glass flex flex-col overflow-hidden rounded-xl transition hover:border-indigo-500/30"
              >
                <a
                  href={p.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video w-full overflow-hidden"
                >
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-fit transition duration-500 hover:scale-[1.03] p-7 rounded-[35]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </a>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-white md:text-2xl">
                    {p.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400 md:text-base">
                    {p.detail}
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-indigo-300/90 md:text-sm">
                    {p.stack}
                  </p>
                  <a
                    href={p.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-indigo-600 hover:ring-indigo-400/40"
                  >
                    Live demo
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
