import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

const siteUrl = "https://elive.co.tz";
const siteName = "eLive";
const siteDescription =
  "Professional communication, event management, branding, printing, and multimedia solutions for businesses, organizations, and events.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "eLive | Communication, Events & Branding Solutions",
    template: "%s | eLive",
  },
  description: siteDescription,
  keywords: [
    "eLive Tanzania",
    "Bulk SMS Tanzania",
    "Event Attendee Management",
    "Digital Invitation Cards",
    "QR Ticketing",
    "Branding Services Tanzania",
    "Printing Services Tanzania",
    "Live Streaming Tanzania",
    "Creative Design Tanzania",
  ],
  applicationName: siteName,
  authors: [{ name: "eLive Company Ltd" }],
  creator: "eLive Company Ltd",
  publisher: "eLive Company Ltd",
  category: "Business Services",

  openGraph: {
    title: "eLive | Communication, Events & Branding Solutions",
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo-elive.png",
        width: 1200,
        height: 630,
        alt: "eLive Company Ltd",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "eLive | Communication, Events & Branding Solutions",
    description: siteDescription,
    images: ["/logo-elive.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo-elive.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#25468c",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "eLive Company Ltd",
  url: siteUrl,
  logo: `${siteUrl}/logo-elive.png`,
  description: siteDescription,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ikungwi Street, Kinondoni B, Kawawa Road",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+255777792017",
      contactType: "customer service",
      areaServed: "TZ",
      availableLanguage: ["English", "Swahili"],
    },
  ],
  sameAs: [
    "https://elive.co.tz",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-elive-light)] font-sans text-[var(--color-elive-text)] antialiased">
        <Header />

        <main id="main-content">{children}</main>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}