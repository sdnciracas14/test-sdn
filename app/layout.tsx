import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/common/components/providers";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "SD Negeri Ciracas 14",
  description:
    "Website resmi SDN Ciacas 14. Temukan informasi lengkap seputar sekolah, guru, kegiatan, pengumuman, dan artikel pendidikan.",
  keywords: [
    "SDN Ciacas 14",
    "SD Negeri Ciacas 14",
    "Sekolah Dasar Negeri Ciacas 14",
    "Pendidikan Dasar",
    "Pendidikan Sekolah Dasar",
    "Pendidikan Sekolah Dasar Negeri",
    "Pendidikan Sekolah Dasar Negeri Ciacas 14",
    "sdciracas14",
    "sdn ciracas 14",
    "sdnciracas14.sch.id",
    "Sekolah Ciracas",
    "Sekolah Dasar Negeri Ciracas",
  ],
  metadataBase: new URL("https://sdnciracas14.sch.id"),
  openGraph: {
    title: "SD Negeri Ciracas 14",
    description:
      "Website resmi SDN Ciacas 14. Temukan informasi lengkap seputar sekolah, guru, kegiatan, pengumuman, dan artikel pendidikan.",
    url: "https://sdnciracas14.sch.id",
    siteName: "SD Negeri Ciracas 14",
    images: [
      {
        url: "https://res.cloudinary.com/dkfnmnao2/image/upload/v1744373841/Gambar_WhatsApp_2025-04-10_pukul_19.15.07_786a139d-removebg-preview_oamhmn.png",
        width: 1200,
        alt: "SD Negeri Ciracas 14",
      },
    ],
    locale: "id-ID",
    type: "website",
  },
  alternates: {
    canonical: "https://sdnciracas14.sch.id",
  },
  icons: {
    icon: "https://res.cloudinary.com/dkfnmnao2/image/upload/v1744373841/Gambar_WhatsApp_2025-04-10_pukul_19.15.07_786a139d-removebg-preview_oamhmn.png",
    apple:
      "https://res.cloudinary.com/dkfnmnao2/image/upload/v1744373841/Gambar_WhatsApp_2025-04-10_pukul_19.15.07_786a139d-removebg-preview_oamhmn.png",
    shortcut:
      "https://res.cloudinary.com/dkfnmnao2/image/upload/v1744373841/Gambar_WhatsApp_2025-04-10_pukul_19.15.07_786a139d-removebg-preview_oamhmn.png",
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
