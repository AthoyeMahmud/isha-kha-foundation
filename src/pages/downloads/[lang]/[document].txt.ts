import { reading } from '../../../data/reading';
import { pages } from '../../../data/site';

export function getStaticPaths() {
  return reading.filter(entry => entry.frontmatter.slug.startsWith('documents/')).map(entry => ({
    params: { lang: entry.frontmatter.lang, document: entry.frontmatter.slug.split('/')[1] }, props: { entry },
  }));
}
export function GET({ props }: { props: { entry: typeof reading[number] } }) {
  const { entry } = props;
  const { lang, slug } = entry.frontmatter;
  const title = pages.find(page => page.slug === slug)!.title[lang];
  const text = title + '\nIsha Kha Foundation\n\n' + entry.rawContent();
  // Static hosts may omit the charset for .txt; a BOM preserves Bangla decoding.
  return new Response('\uFEFF' + text, { headers: {
    'Content-Type': 'text/plain; charset=utf-8',
    'Content-Disposition': 'attachment; filename="isha-kha-' + slug.split('/')[1] + '-' + lang + '.txt"',
  } });
}
