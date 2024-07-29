import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `**/*.mdx`,
	contentType: 'mdx',

	fields: {
		title: { type: 'string', required: true },
		description: { type: 'string', required: true },
		tags: { type: 'list', of: { type: 'string' }, required: true },
		slug: { type: 'string', required: true },
		author: { type: 'string', required: true },
		cover: { type: 'string', required: true },
		date: { type: 'date', required: true }
		// summary: {
		// 	type: 'string',
		// 	required: true
		// },
		// publishedAt: {
		// 	type: 'string',
		// 	required: true
		// }
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `/posts/${post._raw.flattenedPath}`
		},
		// slug: {
		// 	type: 'string',
		// 	resolve: (doc) => doc._raw.flattenedPath
		// },
		readingTime: {
			type: 'nested',
			resolve: (doc) => readingTime(doc.body.code)
		}
		// headings: {
		// 	type: 'json',
		// 	resolve: async (doc) => {
		// 		const processed = await unified()
		// 			.use(remarkRehype)
		// 			.use(rehypeParse, { fragment: true })
		// 			.use(rehypeReact, {
		// 				createElement: React.createElement,
		// 				Fragment: React.Fragment
		// 			})
		// 			.process(doc.body.raw);

		// 		// 提取标题信息
		// 		const headings = processed.result.props.children.filter(
		// 			(child: any) => child && child.props && child.props.id
		// 		);
		// 		return headings;
		// 	}
		// }
	}
}));

export default makeSource({
	contentDirPath: 'posts',
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			// [
			// 	rehypePrettyCode,
			// 	{
			// 		// 代码主题类型 https://unpkg.com/browse/shiki@0.14.2/themes/
			// 		theme: 'one-dark-pro',
			// 		// To apply a custom background instead of inheriting the background from the theme
			// 		keepBackground: false
			// 	}
			// ],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						// 锚点类名
						className: ['anchor']
					}
				}
			],
			[rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }]
		]
	}
});
