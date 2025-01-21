import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
 title: "Blinded Flight | By Ania Johnston",
 description:
  "Explore the impact of building collisions on bird populations in the U.S., with an estimated 365 to 988 million birds killed annually based on 23 studies.",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <head>
    <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />

    {/* Social Sharing Meta Tags */}
    {/* Open Graph */}
    <meta property="og:title" content="Blinded Flight | By Ania Johnston" />
    <meta
     property="og:description"
     content="Explore the impact of building collisions on bird populations in the U.S., with an estimated 365 to 988 million birds killed annually based on 23 studies."
    />
    <meta property="og:image" content="/og-image.jpg" />
    <meta property="og:url" content="https://www.blindedflight.com" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Blinded Flight | By Ania Johnston" />
    <meta
     name="twitter:description"
     content="Explore the impact of building collisions on bird populations in the U.S., with an estimated 365 to 988 million birds killed annually based on 23 studies."
    />
    <meta name="twitter:image" content="/og-image.jpg" />
    <meta name="twitter:creator" content="@YourTwitterHandle" />

    {/* General Metadata */}
    <meta name="author" content="Ania Johnston" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
     name="keywords"
     content="bird conservation, environmental awareness, building collisions, bird population decline"
    />
    <meta name="theme-color" content="#ffffff" />

    {/* Canonical Link */}
    <link rel="canonical" href="https://www.blindedflight.com" />
   </head>
   <body>
    <Header />
    {children}
   </body>
  </html>
 );
}
