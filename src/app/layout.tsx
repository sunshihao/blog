import siteMetadata from '@/config/site';
import { constructSiteUrl } from '@/lib';
import { sansFont } from '@/lib/font';
import { Viewport, type Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL(siteMetadata.url),
	title: {
		template: '%s | ' + siteMetadata.authors,
		default: siteMetadata.authorsCN
	},
	description: siteMetadata.description,
	keywords: '%s,' + siteMetadata.keywords.join(','),
	manifest: '/site.webmanifest',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	openGraph: siteMetadata.openGraph,
	twitter: siteMetadata.twitter,
	alternates: {
		canonical: constructSiteUrl('/'),
		types: {
			'application/rss+xml': [{ url: 'rss', title: 'RSS 订阅' }]
		}
	}
};
export const viewport: Viewport = {
	themeColor: siteMetadata.themeColors
};
export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// <ViewTransitions>
		<html
			className={`${sansFont.variable} m-0 h-full p-0 font-sans antialiased`}
			lang={siteMetadata.locale}
			suppressHydrationWarning
		>
			<body className={inter.className}>
				{/* @ts-ignore */}
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
		// </ViewTransitions>
	);
}

export const dynamic = 'error';
