'use client';

import { Switch } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { ThemeSwitcher } from 'theme-toggle-animation';
import { Toaster } from './ui/sonner';
const DURATION = 500;
// 创建 ThemeSwitcher 实例
const themeSwitcher = new ThemeSwitcher({
	customHtmlStyles: true,
	transition: 'circle',
	duration: DURATION
});
export function ThemeToggle() {
	const eventRef = useRef<AnyIfEmpty>(null);
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme }: AnyIfEmpty = useTheme();
	const toggleRef = useRef<AnyIfEmpty>(null);
	useEffect(() => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href =
			theme === 'dark'
				? '/style/prism-gruvbox-light.css'
				: '/style/prism-coldark-dark.css';
		document.head.appendChild(link);

		// 清理函数，在组件卸载或主题变化时移除之前的 CSS
		return () => {
			document.head.removeChild(link);
		};
	}, [theme]);
	useEffect(() => {
		setMounted(true);
		// 同步 ThemeSwitcher 和 next-themes
		themeSwitcher.setTheme(theme === 'dark');
	}, []);
	// useEffect(() => {
	// 	if (!mounted || !toggleRef.current) return;

	// 	const handleClick = (e: AnyIfEmpty) => {
	// 		themeSwitcher.toggleTheme(e);
	// 		setTheme(theme === 'dark' ? 'light' : 'dark');
	// 	};

	// 	toggleRef.current.addEventListener('click', handleClick);

	// 	return () => {
	// 		if (toggleRef.current) {
	// 			toggleRef.current.removeEventListener('click', handleClick);
	// 		}
	// 	};
	// }, [mounted, theme, setTheme]);
	if (!mounted) {
		return null;
	}
	const handleThemeChange = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		themeSwitcher.toggleTheme(eventRef.current);
		setTimeout(() => {
			setTheme(newTheme);
		});
	};
	return (
		<div className="flex items-center space-x-2">
			<Switch
				ref={toggleRef}
				id="theme-toggle"
				onClick={(event) => (eventRef.current = event)}
				checked={theme === 'dark'}
				onCheckedChange={handleThemeChange}
				className="w-16 h-8 px-1"
			>
				{/* <motion.div
					initial={{ x: -20, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 20, opacity: 0 }}
					layout
					transition={spring}
				>
					
				</motion.div> */}
				{theme === 'dark' ? (
					<Moon className="h-5 w-5 ml-[2px] text-violet-400" />
				) : (
					<Sun className="h-5 w-5 text-violet-500" />
				)}
			</Switch>
			<Toaster theme={theme ?? 'light'} richColors />
		</div>
	);
}

// const spring = {
// 	type: 'spring',
// 	stiffness: 900,
// 	damping: 80
// };
