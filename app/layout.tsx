// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Assumes Tailwind CSS setup here
import Header from "@/components/Header";

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
          {/* Persistent Header Component */}
          <Header />

          {/* Main Content Area */}
          <main className="flex-grow container mx-auto p-4 md:px-8">
            {children}
          </main>

          {/* Optional Footer Placeholder */}
          {/* <footer className="bg-gray-800 text-white p-4 text-center">...</footer> */}
        </div>
      </body>
    </html>
  );
}
