import fs from "node:fs";
import path from "node:path";

const contentDir = path.join(process.cwd(), "content");

function getMarkdownFiles() {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  return fs.readdirSync(contentDir).filter((file) => file.endsWith(".md"));
}

function getTitleFromMarkdown(markdown, slug) {
  const heading = markdown
    .split("\n")
    .find((line) => line.trim().startsWith("# "))
    ?.replace(/^#\s+/, "")
    .trim();

  if (heading) {
    return heading;
  }

  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getExcerptFromMarkdown(markdown) {
  const cleaned = markdown
    .replace(/^#.*$/gm, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/[*_>`-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return cleaned.slice(0, 170) + (cleaned.length > 170 ? "..." : "");
}

export function getAllBlogs() {
  return getMarkdownFiles().map((file) => {
    const slug = file.replace(/\.md$/, "");
    const fullPath = path.join(contentDir, file);
    const content = fs.readFileSync(fullPath, "utf8");

    return {
      slug,
      content,
      title: getTitleFromMarkdown(content, slug),
      excerpt: getExcerptFromMarkdown(content),
    };
  });
}

export function getBlogBySlug(slug) {
  const fullPath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const content = fs.readFileSync(fullPath, "utf8");

  return {
    slug,
    content,
    title: getTitleFromMarkdown(content, slug),
    excerpt: getExcerptFromMarkdown(content),
  };
}

export function getAllBlogSlugs() {
  return getMarkdownFiles().map((file) => file.replace(/\.md$/, ""));
}
