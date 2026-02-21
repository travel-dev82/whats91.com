import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whats91 - Enterprise WhatsApp Cloud API Platform | Official BSP",
  description: "India's leading WhatsApp Cloud API platform for medium to large enterprises. Full integration with Busy Accounting, custom CRMs, and ERP systems. Official Meta Business Solution Provider.",
  keywords: ["WhatsApp Business API", "WhatsApp Cloud API", "Busy Accounting", "WhatsApp Integration", "Enterprise Messaging", "Official BSP", "India", "Chatbot", "Webhook", "CRM Integration"],
  authors: [{ name: "Whats91 Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Whats91 - Enterprise WhatsApp Cloud API Platform",
    description: "Scale your communication with the most advanced WhatsApp Cloud API platform in India. Full integration with Busy Accounting and Custom CRMs.",
    url: "https://whats91.com",
    siteName: "Whats91",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whats91 - Enterprise WhatsApp Cloud API Platform",
    description: "Scale your communication with the most advanced WhatsApp Cloud API platform in India.",
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
      </body>
    </html>
  );
}
