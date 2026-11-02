import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { serif, sans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIR Properties | Luxury Real Estate Dubai",
  description:
    "Discover exclusive luxury properties and premium developments in Dubai with SIR Properties.",
  openGraph: {
    title: "SIR Properties | Luxury Real Estate Dubai",
    description:
      "Exclusive residential developments across Dubai's finest locations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}