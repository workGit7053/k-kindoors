import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kkindoors.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KK Indoors | Premium UPVC & Aluminium Windows and Doors",
    template: "%s | KK Indoors",
  },
  description:
    "Explore architectural UPVC and aluminium window profiles, sliding patio systems, acoustic glazing, and custom doors for modern residences.",
  openGraph: {
    title: "KK Indoors | Architectural Windows & Doors",
    description:
      "Precision engineered UPVC and aluminium window profiles, panoramic sliding doors, and acoustic fenestration systems.",
    url: SITE_URL,
    siteName: "KK Indoors",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KK Indoors | Architectural Windows & Doors",
    description:
      "Precision engineered UPVC and aluminium window profiles, panoramic sliding doors, and acoustic fenestration systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#F5F7F8] text-[#1E2328] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
