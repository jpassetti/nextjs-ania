import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


export const metadata: Metadata = {
  title: "Blinded Flight",
  description: "Explore the impact of building collisions on bird populations in the U.S., with an estimated 365 to 988 million birds killed annually based on 23 studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><Header />{children}</body>
    </html>
  );
}
