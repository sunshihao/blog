/* eslint-disable */
const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

async function generate() {
	const feed = new RSS({
		title: '',
		description: '我是William Sun，前端工程师。热衷于探索和体验最新技术',
		site_url: 'https://blog.dhc.ink',
		feed_url: 'https://blog.dhc.ink/feed.xml'
	});

	// 定义要读取的文件夹路径
	const folders = [
		path.join(__dirname, '..', 'data', 'blog'),
		path.join(__dirname, '..', 'posts')
	];

	// 读取所有文件夹中的文件
	const allPosts = await Promise.all(
		folders.map(async (folder) => {
			const files = await fs.readdir(folder);
			return files.map((file) => ({ file, folder }));
		})
	);

	// 扁平化文件列表
	const flattenedPosts = allPosts.flat();
	await Promise.all(
		flattenedPosts.map(async ({ file, folder }) => {
			const content = await fs.readFile(path.join(folder, file));
			const frontmatter = matter(content);

			feed.item({
				title: frontmatter.data.title,
				url: 'https://blog.dhc.ink/posts/' + file.replace(/\.mdx?/, ''),
				date: frontmatter.data.publishedAt,
				description: frontmatter.data.summary
			});
		})
	);

	await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

// generate();
module.exports = generate;
