import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StyledEngineProvider } from "@mui/material/styles";
import "remixicon/fonts/remixicon.css";

import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameVault",
  description: "Game Catalog Application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/gamevault-logo.png" type="fav n.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black scroll-smooth`}
      >
        <StyledEngineProvider injectFirst>
          <Navbar />
          <div className="min-h-screen mt-16">{children}</div>
          <Footer />
        </StyledEngineProvider>
      </body>
    </html>
  );
}
