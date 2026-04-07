import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Carter Electric of Southwest Florida | Licensed Electrician Services",
  description: "Family-owned electrical contractor serving Sarasota, Naples & all of Southwest Florida. Indoor/outdoor lighting, EV chargers, panel upgrades & 24/7 emergency service.",
  keywords: "electrician, electrical services, Southwest Florida, Sarasota, Naples, lighting installation, EV charger, panel upgrade",
  openGraph: {
    title: "Carter Electric of Southwest Florida",
    description: "Licensed & insured electrical contractor serving Southwest Florida",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}