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
                // Method 1: LCW global
                if (window.LCW && window.LCW.open) {
                  window.LCW.open();
                  return;
                }
                if (window.lcw && window.lcw.open) {
                  window.lcw.open();
                  return;
                }
                
                // Method 2: Find element at bottom-right corner (where widget usually lives)
                var bottomRight = document.elementFromPoint(window.innerWidth - 60, window.innerHeight - 60);
                if (bottomRight && bottomRight.click) {
                  bottomRight.click();
                  return;
                }
                
                // Method 3: Find any element in bottom 100px right 100px of viewport
                var allElements = document.querySelectorAll('*');
                for (var i = 0; i < allElements.length; i++) {
                  var rect = allElements[i].getBoundingClientRect();
                  if (rect.top > window.innerHeight - 100 && rect.left > window.innerWidth - 100) {
                    if (allElements[i].click) {
                      allElements[i].click();
                      return;
                    }
                  }
                }
                
                // Method 4: Just dispatch click on document and hope it reaches widget
                document.addEventListener('click', function handler(e) {
                  var target = e.target;
                  if (target && target.click) {
                    document.removeEventListener('click', handler);
                  }
                });
              };
              
              // Store LCW when it becomes available
              window.addEventListener('message', function(e) {
                try {
                  if (e.data && typeof e.data === 'object') {
                    if (e.data.type === 'init' || e.data.type === 'ready') {
                      window.lcw = e.data.instance || e.data;
                    }
                    if (e.data.open) window.lcw = e.data;
                  }
                } catch(err) {}
              });
              
              // Poll for LCW
              (function() {
                var interval = setInterval(function() {
                  for (var key in window) {
                    if (key.toLowerCase().includes('lcw') && window[key] && window[key].open) {
                      window.lcw = window[key];
                      clearInterval(interval);
                      break;
                    }
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