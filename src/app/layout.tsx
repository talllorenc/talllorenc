"use client";

import { Fira_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";

const inter = Fira_Mono({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <Header />
            {children}
      </body>
    </html>
  );
}
