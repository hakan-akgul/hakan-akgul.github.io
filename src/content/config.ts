import { rssSchema } from '@astrojs/rss';
import { defineCollection } from 'astro:content';


export const collections = {
	docs: defineCollection({ schema: rssSchema }),
};
