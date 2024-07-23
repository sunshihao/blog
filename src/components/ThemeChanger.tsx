'use client';

// import { Button } from '@/components/ui/button';
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuTrigger
// } from '@/components/ui/dropdown-menu';
// import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
// import { useTheme } from 'next-themes';

// export function ThemeChanger() {
// 	const { setTheme } = useTheme();

// 	return (
// 		<DropdownMenu>
// 			<DropdownMenuTrigger asChild>
// 				<Button variant="outline" size="icon">
// 					<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
// 					<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
// 					<span className="sr-only">切换主题</span>
// 				</Button>
// 			</DropdownMenuTrigger>
// 			<DropdownMenuContent align="end">
// 				<DropdownMenuItem onClick={() => setTheme('light')}>
// 					明亮
// 				</DropdownMenuItem>
// 				<DropdownMenuItem onClick={() => setTheme('dark')}>
// 					暗黑
// 				</DropdownMenuItem>
// 				<DropdownMenuItem onClick={() => setTheme('system')}>
// 					系统
// 				</DropdownMenuItem>
// 			</DropdownMenuContent>
// 		</DropdownMenu>
// 	);
// }
import { Switch } from '@/components/ui/switch';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeChanger() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div className="flex items-center space-x-2">
			<Sun className="h-4 w-4" />
			<Switch
				checked={theme === 'dark'}
				onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				<motion.div
					className="w-6 h-6 bg-white rounded-full shadow-lg"
					layout
					transition={spring}
				>
					{theme === 'dark' ? (
						<Moon className="h-4 w-4 text-yellow-500" />
					) : (
						<Sun className="h-4 w-4 text-yellow-500" />
					)}
				</motion.div>
			</Switch>
			<Moon className="h-4 w-4" />
		</div>
	);
}

const spring = {
	type: 'spring',
	stiffness: 700,
	damping: 30
};
