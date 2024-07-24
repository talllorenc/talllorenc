'use client'
import {ReactNode} from 'react';
import { ThemeProvider } from 'next-themes';

interface ThemeProviderWrapperProps {
	children: ReactNode;
}

export function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark">
			{children}
		</ThemeProvider>
	);
}