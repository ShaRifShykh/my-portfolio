import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { Analytics } from "@vercel/analytics/react";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShaRif Shaikh",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interFont.variable} antialiased`}>
        <Providers>
          <ThemeToggleButton />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
