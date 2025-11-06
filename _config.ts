import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import jsx from "lume/plugins/jsx.ts";
import robots from "lume/plugins/robots.ts";
import redirects from "lume/plugins/redirects.ts";
import google_fonts from "lume/plugins/google_fonts.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import base_path from "lume/plugins/base_path.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";
import feed from "lume/plugins/feed.ts";
import sitemap from "lume/plugins/sitemap.ts";
import seo from "lume/plugins/seo.ts";
import Site from "lume/core/site.ts";
import pageFind from "lume/plugins/pagefind.ts";

import lang_css from "highlight.js/lib/languages/css";
import lang_javascript from "highlight.js/lib/languages/javascript";
import lang_typescript from "highlight.js/lib/languages/typescript";
import lang_sql from "highlight.js/lib/languages/sql";
import lang_python from "highlight.js/lib/languages/python";

const site: Site = lume({
  src: "./src",
  dest: "./output",
  watcher: {
    "ignore": [
      "/.git",
    ],
  },
});

site.use(code_highlight({
  languages: {
    css: lang_css,
    cts: lang_typescript,
    javascript: lang_javascript,
    js: lang_javascript,
    mts: lang_typescript,
    sql: lang_sql,
    ts: lang_typescript,
    tsx: lang_typescript,
    typescript: lang_typescript,
    python: lang_python,
    py: lang_python,
  },
  theme: [{
    name: "atom-one-dark",
    cssFile: "/styles.css",
    placeholder: "/* dark */",
  }, {
    name: "atom-one-light",
    cssFile: "/styles.css",
    placeholder: "/* light */",
  }],
}));

site.use(date());
site.use(jsx());

site.use(pageFind({
  ui: {
    resetStyles: false,
  },
}));

site.ignore("README.md");

site.use(robots());
site.use(redirects());
site.use(google_fonts({
  fonts:
    "https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap",
}));
site.use(tailwindcss());

site.add("styles.css");
site.add("public/pfp.jpg", "pfp.jpg");
site.add("public/img", "img/");

site.use(base_path());
site.use(slugify_urls({
  extensions: "*",
  replace: {
    "Á": "A",
    "É": "E",
    "Í": "I",
    "Ó": "O",
    "Ú": "U",
    "á": "a",
    "é": "e",
    "í": "i",
    "ó": "o",
    "ú": "u",
  },
}));
site.use(feed());
site.use(sitemap());
site.use(seo());

export default site;
