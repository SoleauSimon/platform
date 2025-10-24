"use client";

import { TooltipProvider } from "@workspace/ui/components/tooltip";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
			enableColorScheme
		>
			<TooltipProvider delayDuration={0} skipDelayDuration={0}>
				{children}
			</TooltipProvider>
		</NextThemesProvider>
	);
}
