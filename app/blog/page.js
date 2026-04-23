import Image from "next/image";
import Link from "next/link";
import { getAllBlogs } from "../../lib/blogs";

export default function BlogPage() {
  const posts = getAllBlogs();

  return (
    <main className="min-h-screen pt-20">
      <section className="scroll-mt-24 md:scroll-mt-28" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-10">
          <h1
            id="blog-heading"
            className="mb-4 text-center text-3xl font-bold text-white md:text-4xl"
          >
            Latest <span className="gradient-text">blogs</span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Markdown files from the `content` folder rendered as blog cards.
          </p>

          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="glass flex flex-col overflow-hidden rounded-xl transition hover:border-indigo-500/30"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-video w-full overflow-hidden"
                >
                  <Image
                    src="/assets/bg.png"
                    alt={post.title}
                    fill
                    className="object-cover p-7 transition duration-500 hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h2 className="text-xl font-semibold text-white md:text-2xl">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400 md:text-base">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-indigo-300/90 md:text-sm">
                    Markdown source: /content/{post.slug}.md
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-indigo-600 hover:ring-indigo-400/40"
                  >
                    Read blog
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
