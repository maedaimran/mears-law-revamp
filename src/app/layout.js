import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieNotice from "./components/CookieNotice";
import Script from "next/script";
import { Suspense } from "react";
import GAListener from "./GAListener";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://mearslaw.ca"),
  title: {
    default:
      "Mears Law | Canadian Law Firm | AI, Corporate, Real Estate & Immigration Law",
    template: "%s | Mears Law",
  },
  description:
    "Full-service Canadian law firm specializing in AI Regulation, Corporate Law, Real Estate Law, Immigration Law, Privacy Law, and Litigation. Offices in Toronto, Canada and Kingston, Jamaica. Book a free consultation.",
  keywords: [
    "Canadian law firm",
    "AI law",
    "artificial intelligence regulation",
    "corporate law",
    "real estate law",
    "immigration law",
    "privacy law",
    "litigation",
    "Toronto lawyer",
    "Jamaica lawyer",
    "legal services",
    "business law",
    "commercial law",
  ],
  authors: [{ name: "Mears Law" }],
  creator: "Mears Law",
  publisher: "Mears Law",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://mearslaw.ca",
    siteName: "Mears Law",
    title:
      "Mears Law | Canadian Law Firm | AI, Corporate, Real Estate & Immigration Law",
    description:
      "Full-service Canadian law firm specializing in AI Regulation, Corporate Law, Real Estate Law, Immigration Law, Privacy Law, and Litigation. Offices in Toronto, Canada and Kingston, Jamaica.",
    images: [
      {
        url: "/images/mears-logo.png",
        width: 1200,
        height: 630,
        alt: "Mears Law Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mears Law | Canadian Law Firm",
    description:
      "Full-service Canadian law firm specializing in AI Regulation, Corporate Law, Real Estate Law, Immigration Law, Privacy Law, and Litigation.",
    images: ["/images/mears-logo.png"],
    creator: "@mearslaw",
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
  verification: {
    // google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://mearslaw.ca",
  },
};

// Structured Data for Law Firm
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Mears Law",
  description:
    "Full-service Canadian law firm specializing in AI Regulation, Corporate Law, Real Estate Law, Immigration Law, Privacy Law, and Litigation.",
  url: "https://mearslaw.ca",
  logo: "https://mearslaw.ca/images/mears-logo.png",
  image: "https://mearslaw.ca/images/mears-logo.png",
  telephone: ["+1-437-888-2974", "+1-876-299-7746"],
  email: "info@mearslaw.ca",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Kingston",
      addressRegion: "JM",
      addressCountry: "JM",
    },
  ],
  areaServed: ["CA", "JM", "International"],
  serviceType: [
    "Artificial Intelligence Law",
    "Corporate Law",
    "Real Estate Law",
    "Immigration Law",
    "Privacy Law",
    "Notary Services",
    "Litigation",
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
      timeZone: "America/Toronto",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/mearslawprofessionalcorporation/",
    "https://www.instagram.com/mearslawjamaica/",
    "https://www.tiktok.com/@mearslaw",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y12C9LM2EK"
        />
        <Script id="ga-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config','G-Y12C9LM2EK', { send_page_view: false });
          `}
        </Script>
      </head>
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <Suspense fallback={null}>
          <GAListener />
        </Suspense>
        {children}
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
