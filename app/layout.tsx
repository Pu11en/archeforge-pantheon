import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Pantheon | ArcheForge",
  description: "A network of distinct AI personas. Every voice has a function. Every function has a purpose.",
  keywords: ["AI", "personas", "ArcheForge", "intelligence", "network"],
  openGraph: {
    title: "The Pantheon | ArcheForge",
    description: "A network of distinct AI personas. Every voice has a function.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pantheon | ArcheForge",
    description: "A network of distinct AI personas. Every voice has a function.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
