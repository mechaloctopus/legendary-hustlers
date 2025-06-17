import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legendary Hustlers | Modern Business Solutions",
  description: "Clean, modern, and responsive business website with excellent service offerings and professional team.",
  keywords: "business, services, professional, modern, responsive",
  authors: [{ name: "Legendary Hustlers" }],
  robots: "index, follow",
  openGraph: {
    title: "Legendary Hustlers | Modern Business Solutions",
    description: "Clean, modern, and responsive business website with excellent service offerings and professional team.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legendary Hustlers | Modern Business Solutions",
    description: "Clean, modern, and responsive business website with excellent service offerings and professional team.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
