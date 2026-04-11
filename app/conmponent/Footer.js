export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/5 bg-slate-950/40 md:scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:pt-10 md:pb-4">
        <div className="glass rounded-2xl p-6 text-center md:p-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Let&apos;s <span className="gradient-text">connect</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-400">
            Open to internships and collaboration. Reach out on social or check out
            my code on GitHub.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/CodedPraveen"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/praveenkumar-web-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-indigo-400/50"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row pt-4">
          <a className="flex items-center font-medium text-white" href="#home">
            CodedPraveen
          </a>
          <p className="text-center text-sm text-slate-500 sm:text-left">
            © {new Date().getFullYear()} CodedPraveen —
            <a
              href="https://x.com/CodedPraveen"
              className="ml-1 text-slate-400 underline-offset-2 hover:text-indigo-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Praveen-kumar
            </a>
          </p>
          <span className="inline-flex gap-2">
            <a
              href="https://github.com/CodedPraveen"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </a>
            <a
              href="https://x.com/CodedPraveen"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.803-7.584-6.63 7.584H.48l8.6-9.834L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.293 19.694h2.039L6.486 3.048H4.298l13.31 17.799Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/CodedPraveen/"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-rose-400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/CodedPraveen/"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-sky-400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
