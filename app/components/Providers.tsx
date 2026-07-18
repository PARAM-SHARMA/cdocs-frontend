"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/queryClient";
import { ThemeProvider } from "next-themes";

export default function Providers({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
			>
				{children}
			</ThemeProvider>
		</QueryClientProvider>
	);
}
