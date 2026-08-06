import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsapp";

export const metadata = {
  metadataBase: new URL("https://www.interiodesignstudio.com"),
  title: {
    default: "Interio Design Studio | Luxury Interior Design in Mumbai",
    template: "%s | Interio Design Studio",
  },
  description:
    "Interio Design Studio creates warm, high-craft interiors for homes across Mumbai — from 1BHK apartments to full villas. Book a free consultation and see your space reimagined.",
  keywords: [
    "interior design Mumbai",
    "luxury interior designers",
    "home interior design studio",
    "apartment interior design",
    "villa interior design",
  ],
  authors: [{ name: "Interio Design Studio" }],
  openGraph: {
    title: "Interio Design Studio | Luxury Interior Design in Mumbai",
    description:
      "Warm, high-craft interiors for homes across Mumbai. Book a free consultation with Interio Design Studio.",
    url: "https://www.interiodesignstudio.com",
    siteName: "Interio Design Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "A warm, minimal living room designed by Interio Design Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interio Design Studio | Luxury Interior Design in Mumbai",
    description:
      "Warm, high-craft interiors for homes across Mumbai. Book a free consultation.",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
