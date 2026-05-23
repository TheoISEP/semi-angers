import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://semi-angers.fr");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Semi-marathon d'Angers 2027 | Semi-marathon et 10 km",
    template: "%s | Semi-marathon d'Angers",
  },
  description:
    "Le Semi-marathon d'Angers arrive en 2027 : semi-marathon 21,1 km et 10 km dans la ville d'Angers. Inscrivez-vous pour etre informe et profiter de -10%.",
  keywords: [
    "semi marathon angers",
    "semi-marathon angers",
    "course a pied angers",
    "semi marathon pays de la loire",
    "10 km angers",
    "running angers",
    "course angers",
  ],
  alternates: {
    canonical: "/",
  },
  applicationName: "Semi-marathon d'Angers",
  category: "sports",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/images/logo.png", sizes: "any" },
    ],
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Semi-marathon d'Angers 2027",
    description:
      "Semi-marathon 21,1 km et course 10 km dans la ville d'Angers en 2027. Inscriptions et offre de lancement -10%.",
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Semi-marathon d'Angers",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 1200,
        alt: "Logo Semi-marathon d'Angers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Semi-marathon d'Angers 2027",
    description:
      "Semi-marathon et 10 km à Angers. Recevez les infos d'inscription en priorite.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
