import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kajal & Ashish | Wedding Celebration",
  description: "Join us for the wedding celebrations of Kajal Bansal & Ashish Varshney at The Mountain Front Resort",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      style={{
        "--font-playfair": "'Georgia', 'Garamond', serif",
        "--font-inter": "'Segoe UI', 'Helvetica Neue', sans-serif",
      } as React.CSSProperties}
      suppressHydrationWarning
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
