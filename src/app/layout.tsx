import BaiDuAnalytics from '@/components/BaiDuAnalytics';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import siteMetadata from '@/config/site';
import { constructSiteUrl } from '@/lib';
import Script from 'next/script';

// import { getLocale } from 'next-intl/server';

// import { sansFont } from '@/lib/font';
import { Viewport, type Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
// import { Inter } from 'next/font/google';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL(siteMetadata.url),
	title: {
		template: '%s | ' + siteMetadata.authors,
		default: siteMetadata.authorsCN
	},
	description: siteMetadata.description,
	keywords: '%s,' + siteMetadata.keywords.join(','),
	manifest: '/site.webmanifest',
	openGraph: siteMetadata.openGraph,
	twitter: siteMetadata.twitter,
	alternates: {
		canonical: constructSiteUrl('/'),
		types: {
			'application/rss+xml': [{ url: 'rss', title: 'RSS 订阅' }]
		}
	},
	other: {
		'baidu-site-verification': 'codeva-7AmpPWgzQY',
		'google-site-verification': 'TTbfOvWmLj0icfk0BQNUZB3crwReji82Q_vRdnZFFAc'
	}
};
export const viewport: Viewport = {
	themeColor: siteMetadata.themeColors
};
export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	// const locale = await getLocale();
	// const messages = await getMessages();

	// const locale = await getLocale();
	// const messages = await getMessages();

	return (
		// <ViewTransitions>
		<html
			className={` m-0 h-full p-0 font-sans antialiased`}
			lang={siteMetadata.locale}
			suppressHydrationWarning
		>
			<Script src="https://code.jquery.com/jquery-3.7.1.js" />
			<body>
				<GoogleAnalytics />
				<BaiDuAnalytics />
				{/* @ts-ignore */}
				{/* <NextIntlClientProvider messages={messages}> */}
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
				{/* </NextIntlClientProvider> */}
			</body>
		</html>
		// </ViewTransitions>
	);
}

export const dynamic = 'error';
