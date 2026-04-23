import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogSlugs, getBlogBySlug } from "../../../lib/blogs";
import MarkdownRenderer from "./MarkdownRenderer";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b1220] pb-16 pt-20">
      <div className="mx-auto w-full max-w-[700px] px-4 md:px-6">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-xl border border-white/10 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-indigo-400/50 hover:text-white"
          >
            Back to Blog
          </Link>
        </div>

        <article className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
          <MarkdownRenderer content={post.content} />
        </article>
      </div>
    </main>
  );
}