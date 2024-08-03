/* eslint-disable */
const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

async function generate() {
	const feed = new RSS({
		title: 'Lucky Snail',
		site_url: 'https://luckysnail.cn',
		feed_url: 'https://luckysnail.cn/feed.xml'
	});

	// const posts = await fs.readdir(path.join(__dirname, '..', 'data', 'blog'));

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
	console.log(flattenedPosts, 'flattenedPosts');
	await Promise.all(
		flattenedPosts.map(async (name) => {
			const content = await fs.readFile(
				path.join(__dirname, '..', 'data', 'blog', name)
			);
			const frontmatter = matter(content);

			feed.item({
				title: frontmatter.data.title,
				url: 'https://luckysnail.cn/posts/' + name.replace(/\.mdx?/, ''),
				date: frontmatter.data.publishedAt,
				description: frontmatter.data.summary
			});
		})
	);

	await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
