import "../globals.css";
import { Poppins } from "next/font/google";
import { ToastProvider } from "../(admin)/admin/Context/ToastContext";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <ToastProvider>
        <body>{children}</body>
      </ToastProvider>
    </html>
  );
}
