import { Fira_Mono } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../auth";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
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
    <html lang="en" className={inter.className}>
      <body>
        <NextUIProvider>
          <ThemeProvider enableSystem={true} attribute="class">
            <SessionProvider session={session}>{children}</SessionProvider>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
