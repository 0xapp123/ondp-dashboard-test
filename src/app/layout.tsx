import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ondo — Tokenized Asset Dashboard",
  description: "Manage tokenized real-world assets across chains",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* TODO: Add your navigation / sidebar layout here */}
        {children}
      </body>
    </html>
  );
}
