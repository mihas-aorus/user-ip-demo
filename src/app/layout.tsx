import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import IPBanner from "./ip-banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User IP Demo",
  description: "Show IP Address",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <IPBanner />
        {children}
      </body>
    </html>
  );
}
