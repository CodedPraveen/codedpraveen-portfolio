import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer";

const baseUrl = process.env.BLOG_BASE_URL || "http://localhost:3000";
const contentDir = path.join(process.cwd(), "content");
const outDir = path.join(process.cwd(), "blog-screenshots");

function getSlugs() {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

async function captureAllBlogPages() {
  const slugs = getSlugs();

  if (!slugs.length) {
    console.log("No markdown files found in /content");
    return;
  }

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 2400 });

  for (const slug of slugs) {
    const url = `${baseUrl}/blog/${slug}`;
    const output = path.join(outDir, `blog-${slug}.png`);
    console.log(`Capturing ${url}`);
    await page.goto(url, { waitUntil: "networkidle0" });
    await page.screenshot({ path: output, fullPage: true });
    console.log(`Saved ${output}`);
  }

  await browser.close();
}

captureAllBlogPages().catch((error) => {
  console.error("Screenshot generation failed:", error);
  process.exit(1);
});
