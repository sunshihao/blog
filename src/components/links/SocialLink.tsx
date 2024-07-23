'use client';

import { type IconProps } from '@/assets';
import * as iconList from '@/assets/index';
import Douyin from '@/assets/media/douyin.webp';
import Qq from '@/assets/media/qq.webp';
import Wx from '@/assets/media/wx.webp';
import WxPublic from '@/assets/media/wxPublic.webp';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
	Tooltip,
	TooltipContent,
	TooltipPortal,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip';
import { makeBlurDataURL } from '@/lib/images';
import { AnimatePresence, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link, { type LinkProps } from 'next/link';
import React from 'react';
import siteMetadata from '~/src/config/site';

type IconName = keyof typeof iconList;

const IconComponents: Record<
	IconName,
	React.ComponentType<IconProps>
> = iconList;

type Platform =
	| 'github'
	| 'twitter'
	| 'youtube'
	| 'telegram'
	| 'bilibili'
	| 'mail'
	| 'rss'
	| '微信'
	| '微信公众号';

const picMap: Record<string, StaticImageData> = {
	wx: Wx,
	wxPublic: WxPublic,
	douyin: Douyin,
	qq: Qq
};
const PictureDialog = ({
	platform,
	href,
	children
}: {
	platform?: Platform | string;
	href: string;
	children: React.ReactNode;
}) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<div className="relative  w-34 h-auto">
					<Image
						src={picMap[href] as StaticImageData}
						alt={platform ?? siteMetadata.authorsCN}
						className="≈"
						placeholder="blur"
						blurDataURL={makeBlurDataURL(16, 16)}
						style={{
							width: '100%',
							height: 'auto'
						}}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export function SocialLink({
	platform,
	href,
	isPicture,
	icon,
	...props
}: {
	platform?: Platform | string;
	icon: string;
	isPicture?: boolean;
} & LinkProps &
	React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	const Icon = IconComponents[icon as IconName];

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					{isPicture ? (
						<PictureDialog platform={platform} href={href}>
							{icon && (
								<Icon className="text-2xl text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200" />
							)}
						</PictureDialog>
					) : (
						<Link
							href={href}
							target="_blank"
							prefetch={false}
							aria-label={platform}
							{...props}
						>
							{icon && (
								<Icon className="text-2xl text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200" />
							)}
						</Link>
					)}
				</TooltipTrigger>
				<AnimatePresence>
					<TooltipPortal>
						<TooltipContent>
							<motion.div
								initial={{ opacity: 0, scale: 0.96 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
							>
								{platform}
							</motion.div>
						</TooltipContent>
					</TooltipPortal>
				</AnimatePresence>
			</Tooltip>
		</TooltipProvider>
	);
}
