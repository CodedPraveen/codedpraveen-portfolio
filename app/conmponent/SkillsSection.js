import Image from "next/image";

const stack = [
  { src: "/assets/HTML5_logo.png", label: "HTML5", invert: true },
  { src: "/assets/CSS3_Logo.png", label: "CSS3", invert: true },
  { src: "/assets/javascript.jpg", label: "JavaScript", invert: false },
  { src: "/assets/react_logo.svg", label: "React", invert: false },
  { src: "/assets/nextjs.svg", label: "Next.js", invert: false },
  { src: "/assets/MongoDB_Logo.svg", label: "MongoDB", invert: false },
];

const skillTags = [
  "Tailwind CSS",
  "JavaScript & React",
  "Next.js",
  "MongoDB",
  "Git & GitHub",
  "Postman",
  "REST APIs",
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 md:scroll-mt-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:pt-0 md:pb-28">
        <div className="section-fade">
          <h2
            id="skills-heading"
            className="mb-4 text-center text-3xl font-bold text-white md:text-4xl"
          >
            Tech <span className="gradient-text">stack</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Tools and languages I use to design, build, and ship full-stack
            experiences.
          </p>
          <div className="glass mb-10 rounded-3xl p-6 md:p-10">
            <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
              {stack.map((item) => (
                <li
                  key={item.label}
                  className="tech-icon flex flex-col items-center gap-3 text-center"
                >
                  <div className="flex h-20 w-full items-center justify-center rounded-2xl bg-slate-900/60 p-3 ring-1 ring-white/5">
                    <Image
                      width={80}
                      height={80}
                      src={item.src}
                      alt={item.label}
                      className={`max-h-14 w-auto object-contain ${item.invert ? "invert" : ""}`}
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-400 md:text-sm">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-center text-lg font-semibold text-slate-200">
              Skills snapshot
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
              {skillTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-100"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
