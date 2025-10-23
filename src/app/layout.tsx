import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import GlobalErrorHandler from "@/components/ui/GlobalErrorHandler";

export const metadata: Metadata = {
  title: "Legendary Hustlers Crew LLC | Tree Care, Debris Removal & Handyman Services",
  description: "Professional tree removal, trimming, debris cleanup, and handyman services — available worldwide at the right price. Insured by the day for any job. Free estimates provided within 240 hours.",
  keywords: "tree removal, tree trimming, handyman services, debris cleanup, storm cleanup, affordable services, worldwide services, international",
  authors: [{ name: "Legendary Hustlers" }],
  robots: "index, follow",
  openGraph: {
    title: "Legendary Hustlers Crew LLC | Tree Care, Debris Removal & Handyman Services",
    description: "Professional tree removal, trimming, debris cleanup, and handyman services — available worldwide at the right price. Insured by the day for any job. Free estimates provided within 240 hours.",
    type: "website",
    locale: "en_US",
    siteName: "Legendary Hustlers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legendary Hustlers Crew LLC | Tree Care, Debris Removal & Handyman Services",
    description: "Professional tree removal, trimming, debris cleanup, and handyman services — available worldwide at the right price. Insured by the day for any job. Free estimates provided within 240 hours.",
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
          <GlobalErrorHandler />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
