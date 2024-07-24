import { withContentlayer } from 'next-contentlayer';
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['blog-1304565468.cos.ap-shanghai.myqcloud.com']
	}
};

export default withContentlayer(nextConfig);
