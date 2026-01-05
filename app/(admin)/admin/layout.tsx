import type { Metadata } from "next";

import Home from "./page";

import { Inter, Geist_Mono } from "next/font/google";
import { ActionProvider } from "./Context/ActionContext";

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
      <ActionProvider>
        <body>
          <div className="">{children}</div>
        </body>
      </ActionProvider>
    </html>
  );
}
