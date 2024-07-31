import { constructSiteUrl } from '@/lib';
import { allPosts } from 'contentlayer/generated';
import { type MetadataRoute } from 'next';

export default async function sitemap() {
	const staticMap = [
		{
			url: constructSiteUrl('/').href,
			lastModified: new Date()
		},
		{
			url: constructSiteUrl('/posts').href,
			lastModified: new Date()
		},
		{
			url: constructSiteUrl('/projects').href,
			lastModified: new Date()
		},
		{
			url: constructSiteUrl('/about').href,
			lastModified: new Date()
		}
	] satisfies MetadataRoute.Sitemap;

	const slugs = allPosts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	const dynamicMap = slugs.map((slug) => ({
		url: constructSiteUrl(`/posts/${slug}`).href,
		lastModified: new Date()
	})) satisfies MetadataRoute.Sitemap;

	return [...staticMap, ...dynamicMap];
}

export const runtime = 'edge';
export const revalidate = 60;
