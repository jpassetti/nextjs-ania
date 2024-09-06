import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


export const metadata: Metadata = {
  title: "Ania M Johnston Photography",
  description: "Meta description goes here.",
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
