// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Import the Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Health Transformation Review",
  description: "Policy. Economics. Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {/* Persistent Header */}
          <Header />

          {/* Main Content Area */}
          <main className="flex-grow container mx-auto p-4 md:px-8">
            {children}
          </main>

          {/* Persistent Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
