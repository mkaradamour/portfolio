// Pre-render the SPA to static HTML after `vite build` so crawlers, ATS tools
// and link-preview bots (LinkedIn, WhatsApp) see real content and meta tags.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE = "https://portfolio-mohanad-karadamour.vercel.app";

const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const { render, locales } = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);

const pages = [
  { url: "/", out: "index.html", lang: "en", ogLocale: "en_US" },
  { url: "/ar/", out: "ar/index.html", lang: "ar", ogLocale: "ar_SA" },
].map((p) => ({ ...p, ...locales[p.lang].meta, dir: locales[p.lang].dir }));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohanad Karadamour",
  jobTitle: "Senior Flutter & Full-Stack Developer",
  url: SITE,
  image: `${SITE}/profile.png`,
  email: "mailto:mohanadkaradamour@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Aleppo", addressCountry: "SY" },
  knowsLanguage: ["ar", "en"],
  knowsAbout: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "React", "C#", ".NET", "Firebase"],
  sameAs: [
    "https://www.linkedin.com/in/mohanad-karadamour-aa550711a/",
    "https://github.com/mkaradamour",
  ],
};

function head(page) {
  const url = `${SITE}${page.url}`;
  const image = `${SITE}/og-image.png`;
  return [
    `<meta name="description" content="${escape(page.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...pages.map((p) => `<link rel="alternate" hreflang="${p.lang}" href="${SITE}${p.url}" />`),
    `<link rel="alternate" hreflang="x-default" href="${SITE}/" />`,
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:site_name" content="Mohanad Karadamour" />`,
    `<meta property="og:locale" content="${page.ogLocale}" />`,
    ...pages
      .filter((p) => p !== page)
      .map((p) => `<meta property="og:locale:alternate" content="${p.ogLocale}" />`),
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escape(page.title)}" />`,
    `<meta property="og:description" content="${escape(page.description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escape(page.title)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(page.title)}" />`,
    `<meta name="twitter:description" content="${escape(page.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
  ].join("\n  ");
}

for (const page of pages) {
  const html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${page.lang}" dir="${page.dir}">`)
    .replace(/<title>.*?<\/title>/s, `<title>${escape(page.title)}</title>`)
    .replace("<!--app-head-->", head(page))
    .replace("<!--app-html-->", render(page.url));
  const outFile = path.join(dist, page.out);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log(`prerendered ${page.url} -> dist/${page.out}`);
}
