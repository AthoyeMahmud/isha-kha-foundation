# Public channel content ledger

Reviewed on **25 October 2026 (Asia/Dhaka)**. Source: [ISA KHAN FOUNDATION TV posts](https://www.youtube.com/@Isakhanfoundation/posts).

The rendered public feed was scrolled to its end: **99 posts** were present. Their captions, source links, displayed relative upload labels and observable image URLs are saved in `source/youtube/posts-2026-10-25.json`. Tavily advanced extraction supplied the initial ten-post snapshot; the browser exposed the remaining posts. These research files stay outside the static build. Image-only posts require visual inspection; their publication timestamps do not establish an event date.

## Curated activity records

| Record | Event date used | Primary post | Editorial treatment |
| --- | --- | --- | --- |
| Kishoreganj programme discussions | 12 October 2026 | [Source](https://www.youtube.com/post/UgkxK1BOYSSLrXQeH5U8zqXs5JcZgDwch6uB) | Date is legible as `১২.১০.২০২৬` in the photograph, rather than the caption. Preserved inspection copy: `source/youtube/media/kishoreganj-eb74cf5f0521aa60.webp`. No government endorsement or partnership is inferred. |
| Jangalbari heritage visit | Not confirmed | [Source](https://www.youtube.com/post/UgkxYbyCdXhOB3LOJZgqOx210SaOFbGqR3io) | The caption identifies the place and visit. Its relative upload label is not an event date. |
| Bangladesh Itihas Parishad programme, University of Dhaka | 27 June 2026 | [Source](https://www.youtube.com/post/Ugkxy9IBeGzPaLTPEj6NRdgsKSZ_k1aPNmjp) | Chairperson is described as an invited guest. The memorial lecture's title includes 2025, but the caption explicitly dates the programme to 27 June 2026. A direct Tavily fetch failed; caption was read in the rendered channel feed. |
| Isa Khan commemoration and discussion | 11 June 2026 | [Source](https://www.youtube.com/post/Ugkx-1spMU9x3ydmxNjeKMYVdxWD9DP21iWk) | Chairperson is a special guest; the channel names the Department of Archaeology and Ministry of Cultural Affairs as organisers. This is participation, not a foundation-organised government programme. |
| Distribution of 2026 calendars | Not confirmed | [Source](https://www.youtube.com/post/UgkxpilC_fBKoXAqqRnYUp2lhKWAjDOMc5zE) | The calendar year does not establish the date of its distribution. |
| International Human Rights Day | Not confirmed | [Source](https://www.youtube.com/post/Ugkx3x5MnMXIvrLk0XWZy0Q4N3ntD-IMzbeU) | Describe the observance only. No service-delivery or impact claims. |
| Book presentation | Not confirmed | [Source](https://www.youtube.com/post/UgkxTz-fUY6upsYhnkcgkmqC9n-ij8vaIw6a) | A book about Isa Khan and his descendants, described as a foundation publication. |
| Book and calendar presentation, University of Dhaka | Not confirmed | [Source](https://www.youtube.com/post/UgkxUhgSh8imL_La4yicPPOHmnjuESP2Up1t) | Caption reports presentation to the vice-chancellor. No sponsorship or institutional partnership is implied. |
| Heritage rally at Muktangan | 8 September 2005 | [Source](https://www.youtube.com/post/UgkxPZEabZBtutzmkb3GIhz0pbgMeeHHlkt2) | Caption explicitly states the rally date. The supplied Sangram clipping is dated 9 September 2005, a publication date. The claim that the rally alone saved Sonargaon/Panam City is omitted. |
| Delegation at Bangabhaban | 2007 | [Source](https://www.youtube.com/post/Ugkx05lpgbgeaTPXhytREdOeo_ZtUV65DPNx) | A historical meeting with then-president Iajuddin Ahmed, as recorded by the channel. No quotation or endorsement is reproduced. |
| Discussion and prayer gathering at Baktarpur | 17 September 2009 | [Source](https://www.youtube.com/post/Ugkx7U09nUkdtONXg_akumLzL7ttqM9X1GeD) | Exact event date is stated in the retrospective caption. |
| Foundation anniversary, Supreme Court Bar auditorium | 2012 | [Source](https://www.youtube.com/post/UgkxYUX4AwgqVquiA0n3yp8Pd5XEju5NcCfy) | Only the stated year is used. No exact day is inferred. |

## Exact post publication timestamps

A follow-up check on 25 October 2026 found exact `datePublished` values in each original post’s public `schema.org/DiscussionForumPosting` JSON-LD. The first extraction had captured only the visible relative labels; that was incomplete. All twelve curated post timestamps are now preserved in `src/data/foundation.ts` and `source/youtube/post-timestamps-2026-10-25.json`, with their original UTC offsets and precision. They are displayed in **Asia/Dhaka (UTC+06:00)**, separately from event dates. “Event date: Not yet confirmed” describes the current state of event-date verification; it does not assert that the post or every gallery image lacks a date.

| Original post | Publication time in Dhaka |
| --- | --- |
| [Source post](https://www.youtube.com/post/UgkxK1BOYSSLrXQeH5U8zqXs5JcZgDwch6uB) | 13 October 2026, 22:51:47 (UTC+06:00) |
| [Source post](https://www.youtube.com/post/UgkxYbyCdXhOB3LOJZgqOx210SaOFbGqR3io) | 13 October 2026, 23:20:13 (UTC+06:00) |
| [Source post](https://www.youtube.com/post/Ugkxy9IBeGzPaLTPEj6NRdgsKSZ_k1aPNmjp) | 02 July 2026, 21:09:42 (UTC+06:00) |
| [Source post](https://www.youtube.com/post/Ugkx-1spMU9x3ydmxNjeKMYVdxWD9DP21iWk) | 02 July 2026, 23:20:48 (UTC+06:00) |
| [Source post](https://www.youtube.com/post/UgkxpilC_fBKoXAqqRnYUp2lhKWAjDOMc5zE) | 23 April 2026, 21:42:23 (UTC+06:00) |
| [Source post](https://www.youtube.com/post/Ugkx3x5MnMXIvrLk0XWZy0Q4N3ntD-IMzbeU) | 20 April 2026, 13:02:19 (UTC+06:00) |
| [Source post](https://www.youtube.com/post/UgkxTz-fUY6upsYhnkcgkmqC9n-ij8vaIw6a) | 25 September 2026, 19:31:51 (UTC+06:00) |
| [Source post](https://www.youtube.com/post/UgkxUhgSh8imL_La4yicPPOHmnjuESP2Up1t) | 20 April 2026, 23:33:01 (UTC+06:00) |
| [Source post](https://www.youtube.com/post/UgkxPZEabZBtutzmkb3GIhz0pbgMeeHHlkt2) | 16 May 2026, 17:02:58 (UTC+06:00) |
| [Source post](https://www.youtube.com/post/Ugkx05lpgbgeaTPXhytREdOeo_ZtUV65DPNx) | 29 April 2026, 23:08:27 (UTC+06:00) |
| [Source post](https://www.youtube.com/post/Ugkx7U09nUkdtONXg_akumLzL7ttqM9X1GeD) | 16 May 2026, 18:30:35 (UTC+06:00) |
| [Source post](https://www.youtube.com/post/UgkxYUX4AwgqVquiA0n3yp8Pd5XEju5NcCfy) | 29 April 2026, 23:48:28 (UTC+06:00) |

For example, the Jangalbari post was published on 13 October 2026 at 23:20:13 in Dhaka, while its event date has not yet been confirmed from the reviewed material. The post describing the 8 September 2005 rally was published on 16 May 2026 at 17:02:58 in Dhaka. Neither publication timestamp establishes when an undated event took place.

## Profile, publications and heritage

- Foundation registration on **24 May 2005**: [channel caption](https://www.youtube.com/post/UgkxPZEabZBtutzmkb3GIhz0pbgMeeHHlkt2), consistent with the supplied registration material.
- Founder and chairperson: [profile caption](https://www.youtube.com/post/Ugkx91aHMM9mZmUleuVvKeVnxBQ0kQVII_ZM). English spelling is normalised as **Nasima Sultana (Ratna)**; Bangla book covers use **নাসিমা সুলতানা (রত্না)**. Posts also use **নাছিমা**. Final preferred spelling remains an owner editorial check.
- Book about Isa Khan and his descendants: [publication caption](https://www.youtube.com/post/UgkxBJOzLsUM5szNoL4DQzI7A3Vx0WLu1JxH). No uncertain author, publication year, ISBN or edition is invented.
- Books on society and democracy: [cover photographs](https://www.youtube.com/post/UgkxAXMFfA3SGy6eO6maNAleCjixETzmuV-e). The purple cover's readable title is **সমাজের অবক্ষয়ের কারণ ও প্রতিকার**. The green cover is described by subject pending a complete catalogue transcription.
- [Banglapedia references](https://www.youtube.com/post/Ugkx577cIqgf9v1C9r-sRwydfyc-cEg6L6Bw), [Musa Khan Mosque photographs](https://www.youtube.com/post/UgkxPF90EKcfAm4KPO3TU5Wu5mf673KnPa9l) and [Jangalbari Mosque photographs](https://www.youtube.com/post/UgkxiKUrVwDTQWqkxXB9koV-GTFSGhGiYa25) are linked as channel materials. Their historical assertions are not independently adopted.

## Locally preserved public image assets

All four selected files were exported through the browser's observed-page asset bundler, inspected, and copied without creative alteration. Astro resizes/compresses them at build time. No live YouTube player, feed script, remote image hotlink or tracker is needed on the site.

| Local asset under `src/assets/activities/` | Source and use |
| --- | --- |
| `jangalbari-visit.webp` | Second photograph in the [Jangalbari visit post](https://www.youtube.com/post/UgkxYbyCdXhOB3LOJZgqOx210SaOFbGqR3io); clean architectural setting with the chairperson. |
| `history-discussion.webp` | Second photograph in the [11 June commemoration post](https://www.youtube.com/post/Ugkx-1spMU9x3ydmxNjeKMYVdxWD9DP21iWk); programme participants holding books. |
| `social-decline-publication.webp` | First image in the [publication post](https://www.youtube.com/post/UgkxAXMFfA3SGy6eO6maNAleCjixETzmuV-e); existing overlaid channel caption is preserved. |
| `democracy-publication.webp` | Second image in the same publication post. The cover is already cropped by YouTube; a higher-quality original would improve a final catalogue. |

## Boundaries

Genealogies and ancestry claims, living relatives' residential details, private family occasions, unverified award titles, unsupported claims of government policy influence, and duplicate posts are not promoted into factual homepage achievements. Historical source captions can be kept for later research without accepting every claim. The private supplied scans remain unpublished. Exact event dates, post dates and image captions remain separate.

The 25 October content update enriched the three homepage studies. On 26 October the owner requested a thorough final prototype, authorizing the revised Living heritage composition to be extended into the full bilingual structure.

## Complete prototype, 26 October 2026

The public prototype contains eighteen subject/information pages and twelve activity detail pages in each language. The earlier studies remain separate. No public deployment was made.

The mission statement's first page was visually read to verify S-4732 (853)/05. The supplied Bangla memorandum pages 2–6 were read for institutional character, scope and founding aims. Its objectives cover heritage, research, education, welfare, health, environment, cultural exchange and public awareness. The website publishes clearly identified editorial reading editions in HTML and UTF-8 text. It does not reproduce original scans, signatures or private residential data.

The two publication covers were inspected again. The purple title and author credit are readable. The green cover's upper edge is cropped in the source image; the site describes it by its visible subject, democracy, rather than inventing complete catalogue data. The Kishoreganj source photograph was checked again for the visible 12 October 2026 date. Its ancestry overlay is not reused as a new website claim or image.

Historical introductions use these Banglapedia references, fetched with the native Exa tool on 26 October 2026:

- [Isa Khan](https://en.banglapedia.org/index.php?title=Isa_Khan), ABM Shamsuddin Ahmed.
- [Bara-Bhuiyans, The](https://en.banglapedia.org/index.php/Bara-Bhuiyans,_The), Abdul Karim.
- [Bhati Region](https://en.banglapedia.org/index.php/Bhati_Region), Gazi Md. Mizanur Rahman.
- [Jangalbari Fort](https://en.banglapedia.org/index.php/Jangalbari_Fort), Shahnaj Husne Jahan.
- [Sonargaon](https://en.banglapedia.org/index.php/Sonargaon).

The text avoids identifying every building in modern Sonargaon as an Isa Khan structure, treating the Jangalbari fort tradition as archaeological proof, or merging modern commemoration dates with a historical birth/death date. The references' differing contexts are retained.

Owner review before a public launch: current email/telephone, preferred personal-name spelling, typographic mark, image reproduction arrangements and any formal statutory/public-document obligations. These are kept as launch notes rather than scattered empty sections in the prototype. No leadership roster, annual accounts, donations process, address or service-delivery achievement is fabricated.
