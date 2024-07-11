import { Fira_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../auth";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

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
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <ThemeProvider enableSystem={true} attribute="class">
            <SessionProvider session={session}>
              <Header />
              {children}
            </SessionProvider>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
