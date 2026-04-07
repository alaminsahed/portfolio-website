import "./globals.css";
import "animate.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "../providers/themeProviders";
import { ToasterProvider } from "../providers/toasterProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Md. Al-Amin Sahed | Senior Software Engineer",
  description:
    "Senior software engineer and frontend specialist (React.js, Next.js, TypeScript). Portfolio of experience, projects, and writing by Md. Al-Amin Sahed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.variable} font-sans tracking-normal antialiased`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <ToasterProvider />
          {children}
        </Providers>
      </body>
    </html>
  );
}
