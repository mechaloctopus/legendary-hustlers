import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

export const metadata: Metadata = {
  title: "Legendary Hustlers | Licensed Tree Care & Handyman Services",
  description: "Professional tree removal, trimming, debris cleanup, and handyman services in Utah. Licensed and insured with free estimates within 24 hours.",
  keywords: "tree removal, tree trimming, handyman services, debris cleanup, Utah tree care, licensed tree service, storm cleanup",
  authors: [{ name: "Legendary Hustlers" }],
  robots: "index, follow",
  openGraph: {
    title: "Legendary Hustlers | Licensed Tree Care & Handyman Services",
    description: "Professional tree removal, trimming, debris cleanup, and handyman services in Utah. Licensed and insured with free estimates within 24 hours.",
    type: "website",
    locale: "en_US",
    siteName: "Legendary Hustlers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legendary Hustlers | Licensed Tree Care & Handyman Services",
    description: "Professional tree removal, trimming, debris cleanup, and handyman services in Utah. Licensed and insured with free estimates within 24 hours.",
  },
  alternates: {
    canonical: "https://legendaryhustlers.com",
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
      <body className="antialiased">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
