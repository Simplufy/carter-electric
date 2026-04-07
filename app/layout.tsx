import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carterelectricfl.com"),
  title: {
    default: "Carter Electric of Southwest Florida | Licensed Electrician Services",
    template: "%s | Carter Electric",
  },
  description: "Family-owned electrical contractor serving Sarasota, Naples & all of Southwest Florida. Indoor/outdoor lighting, EV chargers, panel upgrades & 24/7 emergency service.",
  keywords: ["electrician", "electrical services", "Southwest Florida", "Sarasota", "Naples", "lighting installation", "EV charger", "panel upgrade", "electrical repair", "commercial electrical"],
  authors: [{ name: "Carter Electric" }],
  creator: "Carter Electric",
  publisher: "Carter Electric",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carterelectricfl.com",
    siteName: "Carter Electric of Southwest Florida",
    title: "Carter Electric of Southwest Florida | Licensed Electrician Services",
    description: "Family-owned electrical contractor serving Sarasota, Naples & all of Southwest Florida. Indoor/outdoor lighting, EV chargers, panel upgrades & 24/7 emergency service.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carter Electric - Electrical Services in Southwest Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carter Electric of Southwest Florida",
    description: "Family-owned electrical contractor serving Sarasota to Naples. Licensed & insured.",
    images: ["/images/og-image.jpg"],
    creator: "@carterelectric",
  },
  alternates: {
    canonical: "https://carterelectricfl.com",
    languages: {
      en: "https://carterelectricfl.com",
    },
  },
  category: "business",
  classification: "Electrical Contractor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Carter Electric of Southwest Florida",
    "description": "Family-owned electrical contractor serving Sarasota, Naples & all of Southwest Florida.",
    "url": "https://carterelectricfl.com",
    "telephone": "+1-941-336-6811",
    "email": "contact@carterelectricflorida.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "FL",
      "addressCountry": "US",
      "addressLocality": "Southwest Florida"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "27.0",
        "longitude": "-82.0"
      },
      "geoRadius": "100 km"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-16:00, 24/7 Emergency",
    "image": "https://carterelectricfl.com/images/og-image.jpg",
    "sameAs": [],
    "keywords": "electrician, electrical services, Southwest Florida, Sarasota, Naples"
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://carterelectricfl.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.openGHLChat = function() {
                var lc = document.querySelector('.live-contact_widget, iframe[src*="leadconnector"]');
                if (lc && lc.contentWindow) {
                  lc.contentWindow.postMessage({ type: 'open' }, '*');
                }
                if (window.lcw && window.lcw.open) {
                  window.lcw.open();
                }
                var event = new CustomEvent('lcw:ready', {});
                window.dispatchEvent(event);
              };
              window.addEventListener('message', function(e) {
                if (e.data && e.data.type === 'init') {
                  window.lcw = e.data.instance;
                }
              });
            `,
          }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {children}
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69d5434a37d15a5006851e4f"
          async
          defer
        />
      </body>
    </html>
  );
}