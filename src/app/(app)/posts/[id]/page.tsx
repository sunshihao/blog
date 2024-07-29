import { UTurnLeftIcon } from '@/assets';
import { Container } from '@/components/Container';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Toc from '../Toc';

const variantStyles = {
	primary:
		'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-200 dark:text-black dark:hover:bg-zinc-300 dark:active:bg-zinc-300/70',
	secondary:
		'group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'
};
interface TypeParams {
	id: string;
}
// 预渲染动态路由时生成所有可能的参数组合。
export async function generateStaticParams() {
	return allPosts.map((post) => ({
		id: post.slug
	}));
}
export const generateMetadata = ({ params }: { params: TypeParams }) => {
	const post = allPosts.find((post) => post.slug === params.id);
	if (!post) throw new Error(`Post not found for id: ${params.id}`);
	return { title: post.title, description: post.description };
};

const Page = ({ params }: { params: TypeParams }) => {
	const post = allPosts.find((post) => post.slug === params.id);
	if (!post) notFound();
	const MDXContent = useMDXComponent(post.body.code);
	// console.log(post.headings, 'post');

	return (
		<Container className="mt-16 lg:mt-32">
			<div className="w-full md:flex md:justify-between xl:relative">
				<aside className="hidden w-[160px] shrink-0 lg:block">
					<div className="sticky top-2 pt-20">
						<Toc />
					</div>
				</aside>
				<div className="max-w-2xl md:flex-1 md:shrink-0">
					<Link
						href="/blog"
						className={cn(
							'group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0',
							variantStyles.secondary
						)}
						aria-label="返回博客页面"
					>
						<UTurnLeftIcon className="h-8 w-8 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
					</Link>

					<article data-postid={post._id} className="rich-text-viewer prose">
						<div className="mb-8 text-center">
							<h1 className="text-3xl font-bold">{post.title}</h1>
							<div className="flex justify-center  h-5 items-center space-x-4 text-sm">
								<time
									dateTime={post.date}
									className="mb-1 text-xs text-gray-600"
								>
									{dayjs(post.date).format('YYYY-MM-DD')}
								</time>
								<Separator orientation="vertical" />
								<span className="mb-1 text-xs text-gray-600">
									{post.readingTime?.text}
								</span>
							</div>
						</div>

						<div className="js-toc-content">
							<MDXContent />
						</div>
					</article>
				</div>
			</div>
		</Container>
	);
};

export default Page;
