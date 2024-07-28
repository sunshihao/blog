import { withContentlayer } from 'next-contentlayer';
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'blog-1304565468.cos.ap-shanghai.myqcloud.com',
			'p3-juejin.byteimg.com'
		]
	}
};

export default withContentlayer(nextConfig);
