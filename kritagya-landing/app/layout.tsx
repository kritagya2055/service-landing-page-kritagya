import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageLoadFade from "./components/PageLoadFade";
import FloatingParticles from "./components/FloatingParticles";
import MetaPixel from "./components/MetaPixel";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kritagya Bhandari — FREE Digital Marketing Consultation",
  description:
    "Book a FREE 1:1 consultation call and get a customized digital marketing action plan tailored to your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground relative overflow-x-hidden">
        <MetaPixel />
        <FloatingParticles />
        <PageLoadFade>{children}</PageLoadFade>
      </body>
    </html>
  );
}
