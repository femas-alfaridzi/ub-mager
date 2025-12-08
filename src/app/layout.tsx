import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UB MAGER - Jasa Freelance untuk Mahasiswa",
  description: "Segala jasa jadi satu tempat, mulai dari antar jemput (anjem), jastip, joki tugas sampai hal yang absurd dan random semua ada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
