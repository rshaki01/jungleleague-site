import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jungle League",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">      

      <body className=" min-h-screen text-white bg-gradient-to-br from-black via-zinc-900 to-black">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>

    </html>


  );
}
