import type { Metadata } from "next";
import Providers from "./Components/providers";
import "../globals.css";
import Navigation from "./Navbar";

import Home from "./page";
import expertise from "./Components/Home/expertise";
import { ToastProvider } from "../(admin)/admin/Context/ToastContext";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth Geist.className">
      <Providers>
        <body>
          <Navigation />

          <ToastProvider>
            <div className="mt-20">{children}</div>
          </ToastProvider>
        </body>
      </Providers>
    </html>
  );
}
