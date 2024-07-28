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
			<h1 className="mb-8 text-center text-2xl font-black">我的 blog</h1>
			{allPosts.map((post, idx) => (
				<PostCard key={idx} {...post} />
			))}
		</Container>
	);
}
