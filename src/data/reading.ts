import type { MarkdownInstance } from 'astro';
import type { Lang } from './concepts';

export const reading = Object.values(import.meta.glob<MarkdownInstance<{ lang: Lang; slug: string }>>('../content/pages/**/*.md', { eager: true }));
