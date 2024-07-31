import { Container } from '@/components/Container';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import CoverSwitch from './CoverSwitch';
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
} // components/Tag.js

function Tag({ children }: { children: React.ReactNode }) {
	return (
		<span className="inline-flex items-center px-2   rounded-full text-xs  bg-gray-300 text-gray-800">
			{children}
		</span>
	);
}

function PostCard({
	post,
	showCover
}: {
	post: PostItem;
	showCover?: boolean;
}) {
	return (
		<Link
			href={`/posts/${post.slug}`}
			className={cn(
				'text-violet-500 relative dark:text-violet-400',
				showCover ? 'hover:drop-shadow-2xl' : ' hover:text-violet-700'
			)}
		>
			{showCover && (
				<AspectRatio
					ratio={16 / 9}
					className="bg-muted absolute left-0 top-0 rounded-md overflow-hidden"
				>
					<Image
						src={post.cover}
						alt={post.title}
						fill
						className=" object-cover "
					/>
				</AspectRatio>
			)}
			<div className="px-4 py-4 rounded-sm  cursor-pointer">
				<h2 className="mb-1 text-xl">
					<span>{post.title}</span>
				</h2>
				<div className="flex mt-2 justify-start  h-4 items-center space-x-4 text-sm">
					<time dateTime={post.date} className=" block text-xs text-gray-600">
						{dayjs(post.date).format('YYYY-MM-DD')}
					</time>
					<Separator orientation="vertical" />
					{post.tags.map((tag) => (
						<Tag key={tag}>{tag}</Tag>
					))}
				</div>
			</div>
		</Link>
	);
}

export default function Posts() {
	// 	{
	// 	searchParams
	// }: {
	// 	searchParams: { s: string };
	// 	}
	// const showCover = searchParams ? Boolean(Number(searchParams?.s)) : false;
	return (
		<Container className="min-h-[50vh] mt-16">
			<header className="max-w-2xl mb-4">
				<div className="flex items-center ">
					<h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
						我的 blog
					</h1>
					<CoverSwitch />
				</div>
				<p className="mt-4 mb-6 text-base text-zinc-600 dark:text-zinc-400">
					记录工作，学习，生活中的所见所闻所想，主要分享领域 <b>前端开发</b>
					，偶尔也会记录 <b>其他内容</b>
				</p>
			</header>
			<div className={cn('grid grid-cols-1 gap-4', false ? 'grid-cols-2' : '')}>
				{allPosts.map((post, idx) => (
					<PostCard showCover={false} key={idx} post={post} />
				))}
			</div>
		</Container>
	);
}
