import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { CookieConsent } from "@/components/landing/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whats91 - WhatsApp Cloud API Platform | Meta Partner",
  description: "Enterprise WhatsApp Cloud API platform for businesses. Full integration with Busy Accounting, CRMs, and ERP systems. Official Meta Business Solution Provider.",
  keywords: ["WhatsApp Business API", "WhatsApp Cloud API", "Busy Accounting", "WhatsApp Integration", "Enterprise Messaging", "Meta Partner", "India", "Chatbot", "Webhook", "CRM Integration"],
  authors: [{ name: "Whats91 Team" }],
  icons: {
    icon: "/logo.svg",
  },
  alternates: {
    canonical: "https://whats91.com",
  },
  openGraph: {
    title: "Whats91 - WhatsApp Cloud API Platform",
    description: "Enterprise WhatsApp Cloud API platform for businesses. Full integration with Busy Accounting and Custom CRMs.",
    url: "https://whats91.com",
    siteName: "Whats91",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whats91 - WhatsApp Cloud API Platform",
    description: "Enterprise WhatsApp Cloud API platform for businesses. Official Meta Partner.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <CookieConsent />
      </body>
    </html>
  );
}
