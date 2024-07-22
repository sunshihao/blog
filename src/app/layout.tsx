import Footer from '@/components/Footer';
import { GlobalBg } from '@/components/GlobalBg';
import { Header } from '@/components/Header';
import siteMetadata from '@/config/site';
import { constructSiteUrl } from '@/lib';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL(siteMetadata.url),
	title: {
		template: '%s | ' + siteMetadata.authors,
		default: siteMetadata.authorsCN
	},
	description: siteMetadata.description,
	keywords: siteMetadata.keywords.join(','),
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

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang={siteMetadata.locale} suppressHydrationWarning>
			<body className={inter.className}>
				<GlobalBg />
				<div className="relative text-zinc-800 dark:text-zinc-200">
					<Header />
					<main>{children}</main>
					<Suspense>
						<Footer />
					</Suspense>
				</div>
			</body>
		</html>
	);
}
