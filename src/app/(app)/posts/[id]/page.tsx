import { Container } from '@/components/Container';
import { allPosts } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
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

	return (
		<Container className="mt-16">
			<article className="rich-text-viewer prose ">
				<div className="mb-8 text-center">
					<time dateTime={post.date} className="mb-1 text-xs text-gray-600">
						{dayjs(post.date).format('DD/MM/YYYY')}
					</time>
					<h1 className="text-3xl font-bold">{post.title}</h1>
				</div>
				<MDXContent />
			</article>
		</Container>
	);
};

export default Page;
