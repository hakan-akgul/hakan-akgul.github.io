import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const documents = await getCollection('docs');

  return rss({
    title: 'show me the code',
    description: 'web development, configurations, tools..',
    site: context.site,

    items: documents.map((document) => ({
      title: document.data.title,
      pubDate: document.data.lastUpdated || new Date('1989-03-07'),
      description: document.data.description,
      customData: document.data.customData,
      content: document.body,
      author: 'hakan akgül',
      link: `https://hakan-akgul.github.io/${document.slug}`,
    })),
  });
}
