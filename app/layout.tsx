import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carterelectricflorida.com"),
  title: {
    default: "Carter Electric | Port Charlotte, North Port & Punta Gorda Electrician",
    template: "%s | Carter Electric",
  },
  description: "Family-owned electrical contractor serving Port Charlotte, North Port & Punta Gorda. Indoor/outdoor lighting, EV chargers, panel upgrades & 24/7 emergency service.",
  keywords: ["electrician", "electrical services", "Port Charlotte", "North Port", "Punta Gorda", "lighting installation", "EV charger", "panel upgrade", "electrical repair", "commercial electrical"],
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
    url: "https://www.carterelectricflorida.com",
    siteName: "Carter Electric",
    title: "Carter Electric | Port Charlotte, North Port & Punta Gorda Electrician",
    description: "Family-owned electrical contractor serving Port Charlotte, North Port & Punta Gorda. Indoor/outdoor lighting, EV chargers, panel upgrades & 24/7 emergency service.",
    images: [
      {
        url: "/images/carter-electric-social.png",
        width: 1200,
        height: 630,
        alt: "Carter Electric - Electrical Services in Port Charlotte, North Port & Punta Gorda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carter Electric | Port Charlotte, North Port & Punta Gorda",
    description: "Family-owned electrical contractor serving Port Charlotte, North Port & Punta Gorda. Licensed & insured.",
    images: ["/images/carter-electric-social.png"],
    creator: "@carterelectric",
  },
  alternates: {
    canonical: "https://www.carterelectricflorida.com",
    languages: {
      en: "https://www.carterelectricflorida.com",
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
    "name": "Carter Electric",
    "description": "Family-owned electrical contractor serving Port Charlotte, North Port & Punta Gorda.",
    "url": "https://www.carterelectricflorida.com",
    "telephone": "+1-941-336-6811",
    "email": "contact@carterelectricflorida.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "FL",
      "addressCountry": "US",
      "addressLocality": "Port Charlotte"
    },
    "areaServed": [
      { "@type": "City", "name": "Port Charlotte" },
      { "@type": "City", "name": "North Port" },
      { "@type": "City", "name": "Punta Gorda" }
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-16:00, 24/7 Emergency",
    "image": "https://www.carterelectricflorida.com/images/carter-electric-social.png",
    "sameAs": [],
    "keywords": "electrician, electrical services, Port Charlotte, North Port, Punta Gorda"
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/logo-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo-icon.png" />
        <link rel="preconnect" href="https://www.carterelectricflorida.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.openGHLChat = function() {
                if (window.leadConnector && window.leadConnector.chatWidget) {
                  window.leadConnector.chatWidget.openWidget();
                } else if (window.lcw && window.lcw.open) {
                  window.lcw.open();
                }
              };
              
              window.addEventListener('message', function(e) {
                try {
                  if (e.data && typeof e.data === 'object') {
                    if (e.data.type === 'init' || e.data.type === 'ready') {
                      window.lcw = e.data.instance || e.data;
                    }
                  }
                } catch(err) {}
              });
              
              (function() {
                var interval = setInterval(function() {
                  for (var key in window) {
                    if (key.toLowerCase().includes('lcw') && window[key] && window[key].open) {
                      window.lcw = window[key];
                      clearInterval(interval);
                      break;
                    }
                  }
                  // Also check for leadConnector
                  if (window.leadConnector && window.leadConnector.chatWidget) {
                    clearInterval(interval);
                  }
                }, 500);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = 'https://widgets.leadconnectorhq.com/loader.js';
                script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
                script.setAttribute('data-widget-id', '69d5434a37d15a5006851e4f');
                script.setAttribute('data-location-id', 'nqFllJqrvntKsbfnRDoW');
                script.async = true;
                script.defer = true;
                document.body.appendChild(script);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}

