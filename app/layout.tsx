import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";
import Footer from "./components/navbar/Footer";
import { Header } from "./components/navbar/Header";

const inter = Inter({ subsets: ["latin"] });
const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Polarsystem",
  description: "Generated by create next app",
  icons:{
    icon:['/img/logo.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='scroll-smooth' style={{scrollBehavior:'smooth'}} lang="en">
      <body className={onest.className}>
            {children}
        </body>
    </html>
  );
}