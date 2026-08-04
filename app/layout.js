import "./globals.css";

import { Playfair_Display, Manrope } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://www.interiodesignstudio.com"),

  title: {
    default: "Interio Design Studio | Luxury Interior Design in Mumbai",
    template: "%s | Interio Design Studio",
  },

  description:
    "Premium interior design studio specializing in modern homes, apartments, and villas. Beautiful interiors, transparent process, and free consultation.",

  keywords: [
    "Interior Design",
    "Luxury Interior",
    "Modern Home",
    "Apartment Interior",
    "Villa Interior",
    "Mumbai Interior Designer",
  ],

  authors: [{ name: "Interio Design Studio" }],

  openGraph: {
    title: "Interio Design Studio",
    description:
      "Luxury interior design for modern homes and apartments.",
    url: "https://www.interiodesignstudio.com",
    siteName: "Interio Design Studio",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}