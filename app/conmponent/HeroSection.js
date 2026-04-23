import Image from "next/image";
import TypeJS from "./TypeJS";

const roleStrings = ["Web Developer.", "Web Programmer.", "MERN Stack Developer."];
const readyStrings = ["Internship.", "Learning.", "Working with a team."];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 md:scroll-mt-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl px-4 pt-2 pb-16 md:px-6 md:pb-14 md:pt-8">
        <div className="glass section-fade rounded-3xl px-5 py-10 md:px-10 md:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                Hi, my name is
              </p>
              <h1
                id="hero-heading"
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
              >
                <span className="gradient-text">Praveen</span>
                <span className="text-slate-100"> Kumar</span>
              </h1>
              <p className="text-xl font-semibold text-slate-200 md:text-2xl">
                I am a{" "}
                <TypeJS strings={roleStrings} className="text-indigo-300" />
              </p>
              <p className="text-lg text-slate-400 md:text-xl">
                I build responsive, accessible interfaces with React and the
                MERN stack—focused on clean code and real-world projects.
              </p>
              <div className="flex min-h-[3.5rem] items-center text-lg font-medium text-slate-200 md:text-xl">
                <span className="mr-2 shrink-0 text-emerald-400/90">Ready for</span>
                <TypeJS strings={readyStrings} className="text-emerald-400" />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://github.com/CodedPraveen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-900/50 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-indigo-400/60 hover:bg-slate-800/80"
                >
                  Visit GitHub
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl border border-transparent px-6 py-3 text-center text-sm font-semibold text-indigo-200 underline-offset-4 hover:text-white hover:underline"
                >
                  View projects
                </a>
              </div>
            </div>
            <div className="relative mx-auto flex w-full max-w-sm justify-center lg:mx-0 lg:max-w-md hidden sm:block">
              <div
                className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-500/30 via-transparent to-emerald-500/20 blur-2xl"
                aria-hidden
              />
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-2xl sm:max-w-[320px]">
                <Image
                  src="/assets/bg.png"
                  alt="Praveen — developer portrait"
                  width={400}
                  height={400}
                  className="h-[440] w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
