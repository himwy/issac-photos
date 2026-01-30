import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Isaac Chau",
  description: "extraordinary ordinary",
  openGraph: {
    title: "Isaac Chau",
    description: "extraordinary ordinary",
    type: "website",
    locale: "en_US",
    siteName: "Isaac Chau",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Chau",
    description: "extraordinary ordinary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
