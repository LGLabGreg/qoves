import type { Metadata } from "next";
import { barlow } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qoves",
  description: "Experts in facial beauty making",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
