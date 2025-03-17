import type { SiteConfig } from '@/types/siteConfig';

const url = new URL(
	process.env.NODE_ENV === 'production'
		? 'https://blog.dhc.ink/'
		: 'http://localhost:3000'
);
export const baseSiteConfig: SiteConfig = {
	name: 'blog | 前端 | 开发者',
	description:
		'我是William Sun，前端开发工程师。热衷于探索和体验最新技术，特别是人工智能（AI），并在日常工作中去使用它们，来提升我的工作效率。我的目标是积极参与开源社区，为开源项目贡献自己的力量。',
	url: url.href,
	// 网站预览图
	ogImage: url.origin + '/logo.png',
	metadataBase: '/',
	keywords: ['blog', '前端', '开发者', 'AI', '编程', '学习笔记', '程序员'],
	authors: 'William Sun',
	email: '4sh945@gmail.com',
	authorsCN: 'William Sun',
	authorsUrl: 'https://github.com/sunshihao',
	social: [
		{
			href: 'https://github.com/sunshihao',
			text: 'github',
			icon: 'GitHubIcon'
		},
		{
			href: '4sh945@gmail.com',
			text: '邮箱',
			icon: 'MailIcon'
		}
		// {
		// 	href: '',
		// 	text: '推特（X）',
		// 	icon: 'XIcon'
		// }
	],
	themeColors: [
		{ media: '(prefers-color-scheme: dark)', color: '#000212' },
		{ media: '(prefers-color-scheme: light)', color: '#fafafa' }
	],
	defaultNextTheme: 'dark', // next-theme option: system | dark | light
	icons: {
		icon: '/favicon.ico',
		shortcut: '/logo.png',
		apple: '/logo.png'
	},
	navigationItems: [
		{ href: '/', text: '首页' },
		{ href: '/posts', text: '博客' },
		{ href: '/about', text: '关于我' }
	],
	moreItems: {
		'/more': [
			{
				href: '/icon',
				text: '图标库'
			},
			{
				href: '/admin',
				text: '管理'
			}
		]
	},
	footerItems: [{ href: '/blog', text: '首页' }],
	locale: 'zh-CN',
	siteHostList: ['luckysnail.cn', 'lucky-snail.vercel.app']
};

const siteMetadata: SiteConfig = {
	...baseSiteConfig,
	openGraph: {
		type: 'website',
		locale: baseSiteConfig.locale,
		url: baseSiteConfig.url,
		title: baseSiteConfig.authors + baseSiteConfig.name,
		description: baseSiteConfig.description,
		siteName: baseSiteConfig.name,
		images: [`${baseSiteConfig.url}og.png`]
	},
	twitter: {
		card: 'summary_large_image',
		title: baseSiteConfig.authors + baseSiteConfig.name,
		description: baseSiteConfig.description,
		images: [`${baseSiteConfig.url}og.png`],
		creator: '@haozhan05554957'
	}
};
export default siteMetadata;
