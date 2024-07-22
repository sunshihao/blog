import Footer from '@/components/Footer';
import { GlobalBg } from '@/components/GlobalBg';
import { Header } from '@/components/Header';
import siteMetadata from '@/config/site';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: siteMetadata.title,
	description: siteMetadata.description
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
