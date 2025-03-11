import { PeekabooLink } from '@/components/links/PeekabooLink';
import siteMetadata from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from './Container';

const navigationItems = siteMetadata.navigationItems;
function NavLink({
	href,
	children
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className="transition hover:text-violet-500 dark:hover:text-violet-400"
		>
			{children}
		</Link>
	);
}

function Links() {
	return (
		<nav className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
			{navigationItems.map(({ href, text }) => (
				<NavLink key={href} href={href}>
					{text}
				</NavLink>
			))}
		</nav>
	);
}

export function Footer() {
	return (
		<footer className="mt-32">
			<Container.Outer>
				<div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
					<Container.Inner>
						{/* <div className="mx-auto mb-8 max-w-md">
							<Newsletter subCount={`${subs?.subCount ?? '0'}`} />
						</div> */}
						<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
							<p className="text-sm text-zinc-500/80 dark:text-zinc-400/80">
								&copy; {new Date().getFullYear()} {siteMetadata.authorsCN}
								&nbsp;网站已开源：
								<PeekabooLink href="https://github.com/coderPerseus/blog">
									{siteMetadata.authorsCN}
								</PeekabooLink>
							</p>
							<Links />
						</div>
					</Container.Inner>
					<Container.Inner className="mt-6">
						<div className="flex flex-col items-center justify-start gap-2 sm:flex-row">
							欢迎 👏🏻 你的访问
						</div>
					</Container.Inner>
					<div className="flex justify-center p-6 flex-col sm:flex-row">
						<Link
							target="_blank"
							href="https://beian.miit.gov.cn/"
							className="text-blue-600 flex justify-center items-center"
						>
							<Image
								unoptimized
								src={'/police.png'}
								width={18}
								height={18}
								alt="备案"
								className="mr-1 "
							/>
							辽公网安备21021202000334号
						</Link>
						<Link
							target="_blank"
							href="https://beian.miit.gov.cn/"
							className="text-blue-600 pl-6 flex justify-center items-center"
						>
							辽ICP备2021012379号-1
						</Link>
					</div>
				</div>
			</Container.Outer>
		</footer>
	);
}
