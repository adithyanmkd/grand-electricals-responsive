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
  title: "Welcome To Offical Website Of Grand Electrcials Kalladikode",
  description:
    "Find top-quality electrical supplies and services at our electrical shop in Kalladikode, Mannarkkad, Kerala. We offer a wide range of electrical products, wiring accessories, LED lighting, and more.",
  keywords:
    "Electrical shop, grand electricals, Kalladikode, Mannarkkad, Kerala, Electrical supplies, Electrical products, Wiring accessories, Switches, Sockets, Electrical cables, Circuit breakers, LED lighting, Home electricals, Commercial electricals, Electrical services, Electrical tools, Electrical contractors, Power solutions, Electrical installations, Electrical wiring, Electrical panels, Electrical transformers, Electrical repair, Electrical maintenance, Energy saving solutions, Electrical safety, Electrical equipment, Electrical fittings, Electrical parts, Electrical store, Electrical solutions, Residential electrical supplies, Commercial electrical installations, Electrical distribution boards, Electrical testing equipment, Electrical consultants, Electrical components, Electrical spares, Electrical wholesale, Electrical retail, Electrical wiring materials, Electrical automation, Home automation, Electrical accessories, Electrical gadgets, Electrical lighting, Electrical fixtures, Electrical junction boxes, Electrical conduit, Electrical control panels, Electrical meters, Electrical switches, Electrical power cables, Electrical outlets, Electrical breakers, Electrical wiring services, Electrical repair services, Energy efficient lighting, Solar electrical products, Solar panels, Power backup systems, Inverters, UPS systems, Batteries, Electrical motors, Electric fans, Electrical heaters, Electrical water heaters, Electrical pumps, Electrical switches and sockets, Electrical wiring accessories, Electric wire, Electrical distribution systems, Cable management solutions, Lighting fixtures, Electrical surge protection, Electrical regulators, Voltage stabilizers, Power distribution units, Home lighting solutions, Commercial lighting, Industrial electrical supplies, Electrical design services, Emergency lighting, Electrical maintenance services, Electrical consultancy, Electrical safety equipment, Electrical surge protectors, Electrical connectors, Electrical plugs, Electrical adapters, Electric switchboards, Electrical home services, Electrical workshops, Low voltage supplies, Electrical power distribution, Electrical wiring contractors, Electrical automation systems, Kalladikode electrical shop, Mannarkkad electrical store, Kerala electrical shop, Best electrical shop in Mannarkkad, Kerala electrical services, Electrical repair shop, Affordable electrical services, Quality electrical products, Local electrical store, Mannarkkad electricians, Kerala electrical contractors, Electrical distribution boards Mannarkkad, Electrical outlets Mannarkkad, Kerala LED lighting suppliers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icons/faviconIcon.svg" />
      </head>
      <body className={`${poppins.className} bg-[#FAF9F6]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
