import Navbar from "@/components/Navbar";
import "./globals.css";
import { Gabarito } from "next/font/google";
Navbar;

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "NGAWIBU",
  description: "Cari anime yang pas untukmu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
