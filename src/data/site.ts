import type { Lang } from './concepts';
import { activities } from './foundation';

export type Localized = { en: string; bn: string };
export const languages: Lang[] = ['en', 'bn'];
export const siteOrigin = (import.meta.env.PUBLIC_SITE_URL || process.env.RENDER_EXTERNAL_URL || 'http://127.0.0.1:4322').replace(/\/$/, '');
export const pathFor = (lang: Lang, slug = '') => '/' + lang + '/' + (slug ? slug + '/' : '');
export const pages = [
  { slug: '', group: 'home', title: { en: 'Home', bn: 'হোমপেজ' }, description: { en: 'Isha Kha Foundation: Bengal’s heritage, Isa Khan’s legacy, publications and cultural activities.', bn: 'ঈশা খাঁ ফাউন্ডেশন: বাংলার ঐতিহ্য, ঈশা খাঁর উত্তরাধিকার, প্রকাশনা ও সাংস্কৃতিক কার্যক্রম।' } },
  { slug: 'foundation', group: 'foundation', title: { en: 'The foundation', bn: 'ফাউন্ডেশন' }, description: { en: 'The foundation’s background, founding aims, leadership and public record since 2005.', bn: '২০০৫ সাল থেকে ফাউন্ডেশনের পরিচয়, প্রতিষ্ঠার লক্ষ্য, নেতৃত্ব ও প্রকাশ্য কার্যক্রম।' } },
  { slug: 'heritage', group: 'heritage', title: { en: 'Bengal’s heritage', bn: 'বাংলার ঐতিহ্য' }, description: { en: 'Read about Isa Khan, the Bara-Bhuiyans and the river landscape of Bhati.', bn: 'ঈশা খাঁ, বারো ভুঁইয়া ও ভাটির নদীময় ভূপ্রকৃতি সম্পর্কে পড়ুন।' } },
  { slug: 'heritage/isa-khan', group: 'heritage', title: { en: 'Isa Khan and the Bara-Bhuiyans', bn: 'ঈশা খাঁ ও বারো ভুঁইয়া' }, description: { en: 'A short historical introduction with named sources and a chronology.', bn: 'নামযুক্ত তথ্যসূত্র ও কালপঞ্জিসহ সংক্ষিপ্ত ঐতিহাসিক পরিচয়।' } },
  { slug: 'heritage/places', group: 'heritage', title: { en: 'Places and the river landscape', bn: 'ঐতিহাসিক স্থান ও নদীময় ভূপ্রকৃতি' }, description: { en: 'Sonargaon, Jangalbari and the landscape of Bhati in historical context.', bn: 'ইতিহাসের প্রেক্ষাপটে সোনারগাঁও, জঙ্গলবাড়ী ও ভাটির ভূপ্রকৃতি।' } },
  { slug: 'activities', group: 'activities', title: { en: 'Activities and records', bn: 'কার্যক্রম ও স্মরণীয় আয়োজন' }, description: { en: 'Heritage visits, historical discussions, publications and earlier programmes documented by the foundation.', bn: 'ফাউন্ডেশনের প্রকাশ্য সূত্রে ঐতিহ্য পরিদর্শন, ইতিহাসবিষয়ক আলোচনা, প্রকাশনা ও পুরোনো আয়োজন।' } },
  { slug: 'archive', group: 'archive', title: { en: 'The archive', bn: 'সংগ্রহশালা' }, description: { en: 'Explore a postage stamp, photographs, publication covers and institutional reading editions.', bn: 'ডাকটিকিট, আলোকচিত্র, বইয়ের প্রচ্ছদ ও প্রাতিষ্ঠানিক নথির পাঠসংস্করণ দেখুন।' } },
  { slug: 'archive/isa-khan-stamp', group: 'archive', title: { en: 'Isa Khan on a postage stamp', bn: 'ডাকটিকিটে ঈশা খাঁ' }, description: { en: 'A photographed Bangladesh postage stamp from the foundation’s supplied collection.', bn: 'ফাউন্ডেশনের সরবরাহকৃত সংগ্রহে থাকা বাংলাদেশের ডাকটিকিটের আলোকচিত্র।' } },
  { slug: 'publications', group: 'archive', title: { en: 'Publications', bn: 'প্রকাশনা' }, description: { en: 'Books on Isa Khan and his descendants, society and democracy, documented by the foundation.', bn: 'ঈশা খাঁ ও তাঁর বংশধর, সমাজ ও গণতন্ত্রবিষয়ক গ্রন্থের পরিচয়।' } },
  { slug: 'documents', group: 'documents', title: { en: 'Institutional documents', bn: 'প্রাতিষ্ঠানিক নথি' }, description: { en: 'Read the founding aims and registration record in accessible editorial summaries.', bn: 'পাঠযোগ্য সম্পাদকীয় সারসংক্ষেপে প্রতিষ্ঠার লক্ষ্য ও নিবন্ধনের তথ্য পড়ুন।' } },
  { slug: 'documents/founding-aims', group: 'documents', title: { en: 'Founding aims', bn: 'প্রতিষ্ঠার লক্ষ্য' }, description: { en: 'Heritage, research, education, social welfare and culture in the supplied memorandum.', bn: 'সরবরাহকৃত সংঘস্মারকে ঐতিহ্য, গবেষণা, শিক্ষা, সমাজকল্যাণ ও সংস্কৃতিবিষয়ক লক্ষ্য।' } },
  { slug: 'documents/registration', group: 'documents', title: { en: 'Registration record', bn: 'নিবন্ধনের তথ্য' }, description: { en: 'The foundation’s recorded name, registration date and reference.', bn: 'ফাউন্ডেশনের নথিভুক্ত নাম, নিবন্ধনের তারিখ ও নম্বর।' } },
  { slug: 'contact', group: 'contact', title: { en: 'Contact the foundation', bn: 'যোগাযোগ' }, description: { en: 'Contact Isha Kha Foundation about its work, heritage material, publications or source corrections.', bn: 'কার্যক্রম, ঐতিহ্যবিষয়ক উপকরণ, প্রকাশনা বা তথ্য সংশোধনের জন্য যোগাযোগ করুন।' } },
  { slug: 'sources', group: 'information', title: { en: 'Sources and editorial method', bn: 'তথ্যসূত্র ও সম্পাদনা পদ্ধতি' }, description: { en: 'How historical references, public posts, dates, photographs and supplied documents are used.', bn: 'ঐতিহাসিক তথ্যসূত্র, প্রকাশ্য পোস্ট, তারিখ, আলোকচিত্র ও সরবরাহকৃত নথির ব্যবহার সম্পর্কে জানুন।' } },
  { slug: 'privacy', group: 'information', title: { en: 'Website privacy', bn: 'ওয়েবসাইটের গোপনীয়তা' }, description: { en: 'Information about browsing this website, external links and contacting the foundation.', bn: 'এই ওয়েবসাইট ব্যবহার, বাইরের লিংক ও যোগাযোগসংক্রান্ত তথ্য।' } },
  { slug: 'accessibility', group: 'information', title: { en: 'Accessibility', bn: 'প্রবেশগম্যতা' }, description: { en: 'Reading, keyboard navigation, language choices and ways to report an access difficulty.', bn: 'পড়া, কিবোর্ডে ব্যবহার, ভাষা নির্বাচন ও ব্যবহারে অসুবিধা জানানোর উপায়।' } },
  { slug: 'content-use', group: 'information', title: { en: 'Content use and credits', bn: 'উপকরণের ব্যবহার ও স্বীকৃতি' }, description: { en: 'Source credits and guidance for enquiries about reproducing photographs, documents and text.', bn: 'উপকরণের উৎস এবং আলোকচিত্র, নথি ও লেখা পুনর্ব্যবহারবিষয়ক যোগাযোগের তথ্য।' } },
  { slug: 'sitemap', group: 'information', title: { en: 'Sitemap', bn: 'সাইটম্যাপ' }, description: { en: 'Every page of the foundation website, grouped by subject.', bn: 'বিষয় অনুযায়ী সাজানো ফাউন্ডেশনের ওয়েবসাইটের সব পৃষ্ঠা।' } },
] as const;
export const publicSlugs = [...pages.map(page => page.slug), ...activities.map(entry => 'activities/' + entry.id)];
export const groupNames: Record<string, Localized> = {
  home: { en: 'Home', bn: 'হোমপেজ' }, foundation: { en: 'Foundation', bn: 'ফাউন্ডেশন' },
  heritage: { en: 'Heritage', bn: 'ঐতিহ্য' }, activities: { en: 'Activities', bn: 'কার্যক্রম' },
  archive: { en: 'Archive', bn: 'সংগ্রহশালা' }, documents: { en: 'Documents', bn: 'নথিপত্র' },
  contact: { en: 'Contact', bn: 'যোগাযোগ' }, information: { en: 'Website information', bn: 'ওয়েবসাইটের তথ্য' },
};
export const navigation = pages.filter(page => ['foundation', 'heritage', 'activities', 'archive', 'documents', 'contact'].includes(page.slug)).map(page => ({ ...page, title: groupNames[page.group] }));
export const formatPosted = (value: string, lang: Lang, withTime = false) => new Intl.DateTimeFormat(lang === 'bn' ? 'bn-BD' : 'en-GB', {
  dateStyle: 'long', ...(withTime ? { timeStyle: 'short' as const, hourCycle: 'h23' as const } : {}), timeZone: 'Asia/Dhaka',
}).format(new Date(value));
