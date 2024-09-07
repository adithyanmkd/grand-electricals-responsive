import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
      <body className={`${poppins.className} bg-[#FAF9F6]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
