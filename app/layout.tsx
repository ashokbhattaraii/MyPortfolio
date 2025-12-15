import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./Navbar";
import Home from "./page";
import expertise from "./Components/Home/expertise";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyPortfolio",
  description: "By-Ashok Bhattarai",
  icons: {
    icon: "./1731638746008.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navigation />

        <div className="mt-20">{children}</div>
      </body>
    </html>
  );
}
