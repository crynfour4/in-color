import type { Metadata } from "next";
import { Cantarell } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const cantarell = Cantarell({
  weight: ["400", "700"],
  variable: "--font-cantarell",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InColor",
  description: "Włosy twoich warzeń w Gdańsku",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cantarell.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}