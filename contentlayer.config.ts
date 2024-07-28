import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrismPlus from 'rehype-prism-plus';
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
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `/posts/${post._raw.flattenedPath}`
		}
	}
}));

export default makeSource({
	contentDirPath: 'posts',
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			[rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }]
		]
	}
});
