import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "./globals.css"
import { Footer } from "./components/navbar/Footer";

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Website de practica",
  description: "Practica spa nextjs13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-ar">
      <body
        className={`${urbanist.className}`}>{children}
        <Footer />
      </body>
    </html>
  );
}
