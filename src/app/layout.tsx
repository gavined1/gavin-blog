import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { generateSiteMetadata } from "@/lib/seo";
import { Analytics } from "@/components/analytics";
import { Header } from "@/components/header-simple";
import { Footer } from "@/components/footer-simple";
import { siteConfig } from "@/config/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = generateSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link
          rel="icon"
          href="/favicon.png?v=2"
          type="image/png"
          sizes="32x32"
        />
        <link rel="icon" href="/icon.svg?v=2" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href={siteConfig.images.appleTouchIcon} />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content={siteConfig.manifest.themeColor} />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
