import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ---------- Fonts (CSS variables ke through globally available) ---------- */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

/* ---------- SEO Metadata ---------- */
export const metadata: Metadata = {
  title: {
    default: "SIR.ae — Premium Real Estate",
    template: "%s | SIR.ae",
  },
  description:
    "SIR.ae — Curated luxury residences and investment properties in Dubai.",
  metadataBase: new URL("https://sir.ae"),
  openGraph: {
    title: "SIR.ae — Premium Real Estate",
    description:
      "Curated luxury residences and investment properties in Dubai.",
    url: "https://sir.ae",
    siteName: "SIR.ae",
    locale: "en_AE",
    type: "website",
  },
};

/* ---------- Root Layout ---------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#faf8fc] text-[#241a30] antialiased">
        <Navbar />
        {/* flex-1 taaki footer hamesha bottom par rahe */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}