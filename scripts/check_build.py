#!/usr/bin/env python3
"""Check the bilingual static prototype and retained concept studies."""

import re
from collections import Counter
from datetime import datetime
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
CONCEPTS = ("living-heritage", "public-record", "shared-future")
SECTIONS = {"main", "foundation", "heritage", "activities", "archive", "documents", "contact", "publications"}


class Document(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.tags = Counter()
        self.ids = []
        self.activity_ids = []
        self.posted_times = []
        self.urls = []
        self.lang = None
        self.alternates = {}
        self.canonical = None
        self.social_image = None
        self.feed(text)
        self.close()

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        self.tags[tag] += 1
        if tag == "html":
            self.lang = attrs.get("lang")
        if tag == "link" and attrs.get("rel") == "alternate":
            self.alternates[attrs.get("hreflang")] = attrs.get("href")
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonical = attrs.get("href")
        if tag == "meta" and attrs.get("property") == "og:image":
            self.social_image = attrs.get("content")
        if "id" in attrs:
            self.ids.append(attrs["id"])
        if "data-activity" in attrs:
            self.activity_ids.append(attrs["data-activity"])
        if tag == "time" and "data-posted-at" in attrs:
            self.posted_times.append(attrs)
        if tag == "img":
            assert attrs.get("alt") is not None, "Image is missing alt text"
            assert attrs.get("src"), "Image is missing its source"
        for key in ("href", "src", "poster"):
            if key in attrs:
                assert attrs[key], f"Empty {key} on {tag}"
                self.urls.append(attrs[key])
        if "srcset" in attrs:
            self.urls.extend(item.strip().split()[0] for item in attrs["srcset"].split(","))

    handle_startendtag = handle_starttag


def local_target(url, origin):
    parts = urlsplit(url)
    if parts.scheme or parts.netloc:
        return None
    path = unquote(parts.path)
    target = (DIST / path.lstrip("/") if path.startswith("/") else origin.parent / path).resolve()
    if not path:
        target = origin
    assert target.is_relative_to(DIST), f"URL escapes the build: {url} in {origin}"
    if target.is_dir():
        target /= "index.html"
    assert target.is_file(), f"Broken local URL: {url} in {origin.relative_to(DIST)}"
    return target, unquote(parts.fragment)


def check_build():
    assert DIST.is_dir(), "dist is missing; run npm run build first"
    expected_concepts = {
        DIST / lang / concept / "index.html"
        for lang in ("en", "bn") for concept in CONCEPTS
    }
    activity_data = (ROOT / "src/data/foundation.ts").read_text(encoding="utf-8")
    activity_ids = set(re.findall(r"\bid: '([^']+)'", activity_data))
    source_posts = set(re.findall(r"\bsource: '(https://www.youtube.com/post/[^']+)'", activity_data))
    assert len(activity_ids) == 12, "Expected twelve curated activity records"
    published_times = set(re.findall(r"\bpublishedAt: '([^']+)'", activity_data))
    activity_records = {record_id: (posted, source) for record_id, posted, source in re.findall(r"id: '([^']+)'[\s\S]*?publishedAt: '([^']+)'[\s\S]*?source: '([^']+)'", activity_data)}
    assert len(published_times) == 12, "Each activity needs a verified post publication timestamp"
    assert all(datetime.fromisoformat(value).utcoffset() is not None for value in published_times), "Post timestamps need timezone offsets"
    site_data = (ROOT / "src/data/site.ts").read_text(encoding="utf-8")
    public_slugs = set(re.findall(r"\bslug: '([^']*)'", site_data)) | {"activities/" + value for value in activity_ids}
    assert len(public_slugs) == 30, "Expected eighteen subject pages and twelve activity records per language"
    expected_public = {DIST / lang / slug / "index.html" for lang in ("en", "bn") for slug in public_slugs}
    expected = expected_public | expected_concepts | {DIST / "index.html", DIST / "concepts/index.html", DIST / "404.html"}
    pages = set(DIST.rglob("*.html"))
    assert pages == expected, f"Unexpected HTML routes: missing={expected - pages}, extra={pages - expected}"
    documents = {}
    for path in sorted(pages):
        try:
            doc = Document(path.read_text(encoding="utf-8"))
            expected_lang = "bn" if path.relative_to(DIST).parts[0] == "bn" else "en"
            assert doc.lang == expected_lang, f"Expected lang={expected_lang}, got {doc.lang}"
            assert doc.tags["h1"] == 1, "Each page needs exactly one h1"
            assert doc.tags["main"] == 1, "Each page needs exactly one semantic main"
            assert not doc.tags["script"], "Delivered HTML must not contain script tags"
            assert len(doc.ids) == len(set(doc.ids)), "Duplicate document IDs"
            required = SECTIONS if path in expected_concepts else {"main"}
            assert required <= set(doc.ids), f"Missing required sections: {required - set(doc.ids)}"
            if path in expected_concepts:
                assert len(doc.activity_ids) == len(activity_ids), "Activity records missing or duplicated"
                assert set(doc.activity_ids) == activity_ids, "Curated activities differ between concepts or languages"
                assert len(doc.posted_times) == 12, "Missing or duplicate displayed post timestamps"
                assert {t["data-posted-at"] for t in doc.posted_times} == activity_ids, "Publication timestamps must identify their activities"
                assert {t.get("datetime") for t in doc.posted_times} == published_times, "Displayed timestamps differ from verified source values"
                assert source_posts <= set(doc.urls), "Activity or heritage source links are missing"
            if path in expected_public or path == DIST / "index.html":
                text = path.read_text(encoding="utf-8")
                assert not re.search(r"\b(lorem ipsum|coming soon|to be added|pending review|not yet confirmed|placeholder)\b", text, re.I), "Unfinished placeholder copy in public prototype"
                assert not doc.tags["iframe"] and not doc.tags["form"], "Privacy description must match delivered features"
                assert doc.canonical and urlsplit(doc.canonical).scheme in {"http", "https"}, "Missing absolute canonical URL"
                assert doc.social_image and urlsplit(doc.social_image).scheme in {"http", "https"}, "Missing social preview image"
                local_target(urlsplit(doc.social_image).path, path)
                canonical_path = urlsplit(doc.canonical).path
                for lang in ("en", "bn"):
                    assert lang in doc.alternates, "Missing language counterpart"
                    expected_path = "/" + lang + canonical_path[3:]
                    assert urlsplit(doc.alternates[lang]).path == expected_path, "Language switch metadata loses the current page"
                if path.parent.parent.name == "activities" and path.parent.name in activity_ids:
                    assert len(doc.activity_ids) == 1 and doc.activity_ids[0] == path.parent.name, "Detail page has the wrong activity"
                    expected_time, expected_source = activity_records[path.parent.name]
                    assert len(doc.posted_times) == 1 and doc.posted_times[0].get("datetime") == expected_time, "Wrong exact publication timestamp"
                    assert expected_source in doc.urls, "Activity detail links to the wrong source"
                if path == DIST / expected_lang / "activities/index.html":
                    assert set(doc.activity_ids) == activity_ids and len(doc.activity_ids) == 12, "Activity index is incomplete"
            documents[path] = doc
        except AssertionError as error:
            raise AssertionError(f"{path.relative_to(DIST)}: {error}") from error
    links = 0
    for path, doc in documents.items():
        for url in doc.urls:
            result = local_target(url, path)
            if result is None:
                continue
            target, fragment = result
            links += 1
            if fragment:
                assert target in documents, f"Hash target is not an HTML page: {url}"
                assert fragment in documents[target].ids, f"Missing hash target: {url} in {path.relative_to(DIST)}"
    for path in DIST.rglob("*.css"):
        for match in re.finditer(r"url\(\s*([\"']?)(.*?)\1\s*\)", path.read_text(encoding="utf-8")):
            local_target(match[2], path)
    ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9", "x": "http://www.w3.org/1999/xhtml"}
    sitemap = ET.fromstring((DIST / "sitemap.xml").read_text(encoding="utf-8"))
    sitemap_paths = set()
    for item in sitemap.findall("s:url", ns):
        location = item.findtext("s:loc", namespaces=ns)
        assert location and urlsplit(location).scheme in {"http", "https"}, "Sitemap URL must be absolute"
        sitemap_paths.add(urlsplit(location).path)
        local_target(urlsplit(location).path, DIST / "index.html")
        assert {alternate.get("hreflang") for alternate in item.findall("x:link", ns)} == {"en", "bn"}, "Sitemap lacks language alternatives"
    expected_sitemap = {"/" + lang + "/" + (slug + "/" if slug else "") for lang in ("en", "bn") for slug in public_slugs}
    assert sitemap_paths == expected_sitemap, "Sitemap omits public pages or includes archived concepts"
    for lang in ("en", "bn"):
        site_map = documents[DIST / lang / "sitemap/index.html"]
        assert {urlsplit(url).path for url in site_map.urls} >= {path for path in expected_sitemap if path.startswith("/" + lang + "/")}, "HTML sitemap is incomplete"
        for name in ("founding-aims", "registration"):
            content = (DIST / "downloads" / lang / (name + ".txt")).read_text(encoding="utf-8")
            assert "Isha Kha Foundation" in content and len(content) > 600, "Document reading download is empty"
    assert "Disallow: /" in (DIST / "robots.txt").read_text(), "Local prototype should stay out of search indexes"
    originals = {
        path.name.casefold().encode("utf-8")
        for path in (ROOT / "source").rglob("*") if path.is_file()
    }
    for path in DIST.rglob("*"):
        if not path.is_file():
            continue
        assert path.suffix.casefold() not in {".jpg", ".jpeg", ".pdf"}, f"Raw source-format asset in build: {path}"
        content = path.name.casefold().encode("utf-8") + path.read_bytes().lower()
        assert not any(name in content for name in originals), f"Private source filename appears in {path.relative_to(DIST)}"
    print(f"PASS: {len(pages)} static HTML pages, 60 public language routes, {links} local URLs, 4 text downloads, HTML/XML sitemaps, language parity, 12 activity records, exact timestamps, no scripts or public placeholders, and source privacy.")


if __name__ == "__main__":
    check_build()
