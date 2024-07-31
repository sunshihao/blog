'use client';
import { ThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { memo, type FC } from 'react';

const ThemeProviders: FC<ThemeProviderProps> = ({ children, ...props }) => {
	return (
		// @ts-ignore
		<ThemeProvider
			{...props}
			attribute="class"
			defaultTheme="light"
			enableSystem
		>
			{children}
		</ThemeProvider>
	);
};

export default memo(ThemeProviders);
