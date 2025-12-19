import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "HOUSEN® – Constructora & Inmobiliaria",
    template: "%s | HOUSEN®"
  },
  description: "Construimos espacios que transforman vidas. Proyectos residenciales, comerciales y desarrollo inmobiliario en Chiapas, México.",
  keywords: ["constructora", "inmobiliaria", "Tuxtla Gutiérrez", "Chiapas", "México", "HOUSEN", "construcción", "bienes raíces"],
  authors: [{ name: "HOUSEN®" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "HOUSEN® – Constructora & Inmobiliaria",
    title: "HOUSEN® – Constructora & Inmobiliaria",
    description: "Construimos espacios que transforman vidas. Proyectos residenciales, comerciales y desarrollo inmobiliario.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOUSEN® – Constructora & Inmobiliaria",
    description: "Construimos espacios que transforman vidas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
