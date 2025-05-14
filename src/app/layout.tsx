import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Font configurations
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WAKEYSHA | Electronic Music Artist",
  description: "Official website for WAKEYSHA – Experience atmospheric soundscapes and hypnotic beats. View music, upcoming events, gallery, and contact information.",
  keywords: "electronic music, music artist, Wakeysha, music producer, DJ, beats, ambient music",
  openGraph: {
    title: "WAKEYSHA | Electronic Music Artist",
    description: "Experience the atmospheric soundscapes and hypnotic beats of electronic music artist WAKEYSHA.",
    url: "https://wakeysha.com",
    siteName: "WAKEYSHA",
    images: [
      {
        url: "/images/wakeysha-og.jpg",
        width: 1200,
        height: 630,
        alt: "WAKEYSHA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WAKEYSHA | Electronic Music Artist",
    description: "Experience the atmospheric soundscapes and hypnotic beats of electronic music artist WAKEYSHA.",
    images: ["/images/wakeysha-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-body bg-background text-text min-h-screen selection:bg-secondary selection:text-white">
        {/* Background elements */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Ambient background gradients */}
          <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-accent/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-primary/5 to-transparent"></div>
          
          {/* Animated noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-noise"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
