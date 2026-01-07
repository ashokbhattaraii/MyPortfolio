import type { Metadata } from "next";

import "./globals.css";

import { Inter, Geist_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "MyPortfolio",
  description: "By-Ashok Bhattarai",
  icons: {
    icon: "./1731638746008.jpeg",
  },
};

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700"], // 100 is the "Thin" weight
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth Geist.className">
      <body className={`${poppins.variable}`}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
