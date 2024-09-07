import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "./components/main/Navbar";

export const metadata: Metadata = {
  title: "Grand Electricals",
  description: "Electrical Shop Kalladikode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#FAF9F6]`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
