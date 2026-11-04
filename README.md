# Isha Kha Foundation — complete bilingual prototype

A responsive, static Astro website for Isha Kha Foundation, subtitled “Isa Khan alias Isha Kha Foundation”. The 26 October 2026 prototype develops the revised Living heritage composition into a complete English/Bangla site. It uses semantic HTML, custom CSS and no client-side JavaScript.

## Run and verify

```sh
npm ci
npm run build
npm test
npm run preview -- --port 4322
```

The existing preview is at http://127.0.0.1:4322/. For source editing, use `npm run dev`. The generated `dist/` directory is the complete static website; it needs no application server or database.

## Pages

- `/en/` and `/bn/`: the full homepages. `/` also serves the English homepage.
- Foundation: background, purpose, founder/chairperson and a source-backed chronology.
- Heritage: overview, Isa Khan and the Bara-Bhuiyans, places and the river landscape.
- Activities: an index and twelve individual records, with exact post timestamps and original source links.
- Archive: a collection guide and a postage-stamp object record.
- Publications: the book on Isa Khan and his descendants and two photographed books on society/democracy.
- Documents: an overview, founding aims and registration record, with four English/Bangla text downloads.
- Contact, sources/editorial method, website privacy, accessibility and content use/credits.
- `/en/sitemap/`, `/bn/sitemap/` and `/sitemap.xml`.

There are 30 public pages in each language. See [the full sitemap](docs/sitemap.md). A custom bilingual 404 is included. The original six homepage studies remain at their existing routes; their comparison page is now `/concepts/`. They are excluded from the public sitemap.

## Content and editing

`src/data/site.ts` defines page metadata, navigation labels and the shared route inventory. Long-form English/Bangla text lives in `src/content/pages/`, rendered by Astro's built-in Markdown support. The shared institutional layout is `src/layouts/SiteLayout.astro`; the full-site CSS is `src/styles/site.css`, using the existing fonts and palette from `global.css`. Activity dates/source URLs remain in `src/data/foundation.ts`; additional record context is in `src/data/activity-details.ts`.

The source feed was reviewed to its end on 25 October 2026 and 99 posts were inventoried. Twelve distinct records were curated. Post timestamps come from the original posts' public DiscussionForumPosting metadata and are displayed in Asia/Dhaka. Event dates remain separate. Heritage writing uses named Banglapedia articles. Source details and launch review notes are in [the content ledger](docs/content-sources.md).

The document pages and UTF-8 downloads are substantive editorial reading editions of the supplied mission statement/memorandum, not certified certificates or verbatim legal transcriptions. Private scans, signatures, identity records, personal addresses and genealogy sheets are not distributed. The original `source/` folder stays excluded from the static build and Git.

The site does not invent a board roster, government endorsement, delivered welfare services, annual accounts, office address, donation scheme, book edition or ISBN. It uses the available public record rather than filling missing facts with placeholder sections. Contact details and the alias subtitle come from the supplied foundation sign; the proposed typographic mark remains an editorial design choice for owner review before a public launch.

## Delivery and accessibility

Local, subset Noto serif/sans fonts include Bengali. Their SIL Open Font License is in `public/fonts/OFL.txt`. The stamp and four public-channel photographs/covers are locally stored and optimized by Astro; no remote fonts, image hotlinks, embedded players or analytics are used.

Navigation is usable without JavaScript. The site includes a keyboard skip link, visible focus, semantic landmarks, native mobile menu, current-section indication, descriptive image text, readable document text and paired language routes. WCAG 2.2 AA is a target, not an independently certified conformance claim.

The prototype remains local and deliberately noindex. `robots.txt` disallows crawling. Canonical URLs and XML sitemap URLs use `PUBLIC_SITE_URL`, defaulting to the local preview origin. A real deployment needs its actual origin and a deliberate indexing change. No public hosting, domain purchase or deployment is included in this work.

## Verification

`npm test` uses Python's standard library to validate all 69 HTML files, 60 public language routes, language parity, local links, anchors, assets, HTML/XML sitemap coverage, four text downloads, complete activity indexes and source-specific publication timestamps. It also checks that delivered HTML contains no scripts, public prototype pages contain no placeholder copy, and raw private source filenames/formats have not leaked into the build.

Browser checks cover 128 combinations: sixteen representative page types, both languages, and exact CSS widths 320, 390, 768 and 1440. The evidence is `review/final-responsive-check.json`. Keyboard checks cover the mobile menu, source-record navigation, page-preserving language switch and skip link. All sixty public pages and four downloads were requested from the actual preview server; the custom 404 response was verified. Core foreground/background palette pairs meet 4.5:1 contrast. These checks do not replace a full assistive-technology or legal review.
