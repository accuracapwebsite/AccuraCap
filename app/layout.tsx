import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export const metadata: Metadata = {
  title: "AccuraCap - Intelligent Investing. Effortless Results.",
  description: "Boutique fund manager built on proprietary models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 flex flex-col min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-[14px] focus:font-medium focus:no-underline"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 pt-[84px] md:pt-[92px] lg:pt-[100px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
