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

const SITE_URL = "https://alamin-sahed-portfolio.vercel.app";
const SITE_TITLE = "Md. Al-Amin Sahed | Senior Software Engineer";
const SITE_DESCRIPTION =
  "Senior software engineer and frontend specialist (React.js, Next.js, TypeScript). Portfolio of experience, projects, and writing by Md. Al-Amin Sahed.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    images: [
      {
        url: "/images/logo.png",
        width: 200,
        height: 200,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/logo.png"],
  },
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
