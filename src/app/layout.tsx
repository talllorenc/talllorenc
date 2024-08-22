import { Fira_Mono } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProviderWrapper } from "@/providers/theme";
import QueryClientContextProvider from "@/providers/QueryClientContextProvider";
import "./globals.css";

const inter = Fira_Mono({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextUIProvider>
          <ThemeProviderWrapper>
            <QueryClientContextProvider>{children}</QueryClientContextProvider>
          </ThemeProviderWrapper>
        </NextUIProvider>
      </body>
    </html>
  );
}
