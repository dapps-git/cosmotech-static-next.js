import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/schema";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmoteches.com"),
  title: {
    default: "Cosmotech Engineering Solutions LLP | Telecom Infrastructure & Engineering",
    template: "%s | Cosmotech Engineering Solutions",
  },
  description:
    "Leading telecom infrastructure and engineering solutions provider. Specializing in tower construction, civil works, electrical solutions, ELV systems, and fiber optic networks across India.",
  keywords: [
    "telecom infrastructure",
    "tower construction",
    "engineering solutions",
    "civil works",
    "electrical solutions",
    "ELV systems",
    "fiber optic",
    "Kerala",
    "India",
    "Cosmotech",
    "Cosmos Group",
    "telecommunication",
    "tower erection",
    "infrastructure maintenance",
  ],
  authors: [{ name: "Cosmotech Engineering Solutions LLP" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cosmoteches.com",
    siteName: "Cosmotech Engineering Solutions LLP",
    title: "Cosmotech Engineering Solutions LLP | Telecom Infrastructure & Engineering",
    description:
      "Building tomorrow's connectivity today. Premier telecom infrastructure and engineering solutions across India.",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Cosmotech Engineering Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmotech Engineering Solutions LLP",
    description:
      "Leading telecom infrastructure and engineering solutions provider in India.",
    images: ["/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cosmoteches.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream overflow-x-hidden pt-[56px] sm:pt-[40px] md:pt-[32px]">
        <TopBar />
        <Navbar />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
