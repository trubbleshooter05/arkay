import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arkay Packaging Network & Conferencing Upgrade",
  description:
    "Internal IT dashboard for Arkay Packaging network bandwidth and video conferencing modernization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
