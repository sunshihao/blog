import { withContentlayer } from 'next-contentlayer';
// import generate from './scripts/generate-rss.js';
/** @type {import('next').NextConfig} */
const nextConfig = {
	// 静态导出
	output: 'export',
	// basePath: '/blog',
	distDir: 'docs',
	// assetPrefix: 'https://blog-omega-five-74.vercel.app', // cdn 设置
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['blog-1304565468.cos.ap-shanghai.myqcloud.com', 'github.com']
	},
	webpack: (config) => {
		// if (isServer) {
		// 	require('./scripts/generate-sitemap'); // eslint-disable-line
		// 	require('./scripts/generate-rss'); // eslint-disable-line
		// }
		// generate(); // rss
		return config;
	}
};

export default withContentlayer(nextConfig);
