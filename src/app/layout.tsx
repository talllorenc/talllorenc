import { Fira_Mono } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../auth";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProviderWrapper } from "@/providers/theme";
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
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextUIProvider>
          <ThemeProviderWrapper>
            <SessionProvider session={session}>{children}</SessionProvider>
          </ThemeProviderWrapper>
        </NextUIProvider>
      </body>
    </html>
  );
}
