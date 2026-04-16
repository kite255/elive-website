import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: {
    default: "eLive",
    template: "%s | eLive",
  },
  description:
    "Innovative communication and marketing solutions for businesses and events. Bulk SMS, event management, branding, and multimedia solutions.",
  keywords: [
    "Bulk SMS Tanzania",
    "Event Management System",
    "WhatsApp Messaging",
    "Branding Services",
    "Live Streaming Tanzania",
    "eLive",
  ],
  authors: [{ name: "eLive Company Ltd" }],
  creator: "eLive",
  metadataBase: new URL("https://elive.co.tz"),

  openGraph: {
    title: "eLive",
    description:
      "Smart communication, event management, and branding solutions for modern businesses.",
    url: "https://elive.co.tz",
    siteName: "eLive",
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="
          font-sans 
          bg-[var(--color-elive-light)] 
          text-[var(--color-elive-text)] 
          antialiased
        "
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}