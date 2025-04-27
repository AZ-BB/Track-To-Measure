import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Track To Measure - Check Marketing Tags in Seconds",
  description: "Instantly check GTM, GA4, Google Ads & Meta Pixel on any site"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' https: http:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http:; connect-src 'self' https: http:; img-src 'self' https: http: data:; style-src 'self' 'unsafe-inline' https: http:;"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
