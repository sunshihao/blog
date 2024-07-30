import { Container } from '@/components/Container';
import { allPosts } from 'contentlayer/generated';
import dayjs from 'dayjs';
import Link from 'next/link';
console.log(allPosts, 'allPosts');

interface PostItem {
	title: string;
	date: string;
	url: string;
	slug: string;
	tags: string[];
	description: string;
	author: string;
	cover: string;
}

function PostCard(post: PostItem) {
	return (
		<div className="mb-8">
			<h2 className="mb-1 text-xl">
				<Link
					href={`/posts/${post.slug}`}
					className="text-violet-500 hover:text-violet-700 dark:text-violet-400"
				>
					{post.title}
				</Link>
			</h2>
			<time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
				{dayjs(post.date).format('DD/MM/YYYY')}
			</time>
		</div>
	);
}

export default function Home() {
	return (
		<Container className="min-h-[50vh] mt-16">
			<header className="max-w-2xl mb-4">
				<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
					我的 blog
				</h1>
				<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
					记录工作，学习，生活中的所见所闻所想，主要分享领域 <b>前端开发</b>
					，偶尔也会记录 <b>其他内容</b>
				</p>
			</header>
			{allPosts.map((post, idx) => (
				<PostCard key={idx} {...post} />
			))}
		</Container>
	);
}
