import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';

export const metadata: Metadata = {
  title: "Clothing Store",
  description: "Best clothing store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}