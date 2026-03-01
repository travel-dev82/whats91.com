"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Mail, MapPin, Phone, Tag } from "lucide-react";
import { BookDemoPopup } from "@/components/landing/BookDemoPopup";

// WhatsApp logo component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

const footerLinks = {
  solutions: [
    { label: "Marketing & Engagement", href: "/solutions/marketing" },
    { label: "Utility Messages", href: "/solutions/utility" },
    { label: "Busy ERP Integration", href: "/solutions/busy-erp", featured: true },
    { label: "Busy API", href: "/solutions/busy-api" },
    { label: "Busy Reports", href: "/solutions/busy-reports" },
    { label: "Payment Reminders", href: "/solutions/payment-reminders" },
    { label: "Google Sheet Sync", href: "/solutions/busy-google-sheet" },
  ],
  pricing: [
    { label: "API Pricing", href: "/pricing" },
    { label: "Marketing Rates", href: "/pricing#marketing" },
    { label: "Utility Rates", href: "/pricing#utility" },
    { label: "Volume Discounts", href: "/pricing#volume" },
  ],
  resources: [
    { label: "WhatsApp Templates", href: "/whatsapp-templates" },
    { label: "Co-Existing Mode", href: "/whatsapp-coexistence" },
    { label: "Free Tools", href: "/tools" },
    { label: "Blog", href: "/blog" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "DPDP Compliance", href: "/compliance" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  const [version, setVersion] = useState<string>("...");

  useEffect(() => {
    fetch("/api/version")
      .then((res) => res.json())
      .then((data) => setVersion(data.version))
      .catch(() => setVersion("?.?.?"));
  }, []);

  return (
    <footer className="border-t border-border/60 bg-surface/30">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto py-10 sm:py-12 md:py-16">
        
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-6">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-brand-primary shadow-md shadow-brand-primary/20 transition-transform duration-300 group-hover:scale-105">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-brand-primary-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-semibold text-text-primary tracking-tight">Whats91</span>
            </Link>
            <p className="text-xs sm:text-sm text-text-secondary mb-6 max-w-xs mx-auto sm:mx-0 leading-relaxed">
              India&apos;s leading WhatsApp Cloud API platform for enterprise communication. Official Business Solution Provider.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs sm:text-sm text-text-secondary group">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-primary transition-transform duration-200 group-hover:scale-110" />
                <a href="mailto:support@whats91.com" className="hover:text-brand-primary transition-colors">
                  support@whats91.com
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs sm:text-sm text-text-secondary group">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-primary" />
                <a href="tel:+919669823388" className="hover:text-brand-primary transition-colors">
                  +91 96698 23388
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs sm:text-sm text-text-secondary group">
                <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 transition-transform duration-200 group-hover:scale-110" />
                <a 
                  href="https://wa.me/919669823388" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-600 transition-colors"
                >
                  +91 96698 23388
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-primary" />
                <span>Ujjain, Madhya Pradesh, India</span>
              </div>
            </div>
            
            {/* Book a Demo Button */}
            <div className="mt-5 flex justify-center sm:justify-start">
              <BookDemoPopup
                triggerVariant="default"
                triggerSize="sm"
                triggerLabel="Book a Demo"
                source="footer"
                triggerClassName="cursor-pointer"
              />
            </div>
          </div>

          {/* Links Grid - 4 columns on desktop */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:col-span-4 lg:grid-cols-4">
            
            {/* Solutions */}
            <div className="text-center sm:text-left">
              <h4 className="text-xs sm:text-sm font-semibold text-text-primary mb-4">Solutions</h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors inline-flex items-center gap-1.5"
                    >
                      {link.label}
                      {link.featured && (
                        <span className="inline-flex items-center rounded bg-brand-primary/10 px-1.5 py-0.5 text-[9px] font-medium text-brand-primary">
                          Popular
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="text-center sm:text-left">
              <h4 className="text-xs sm:text-sm font-semibold text-text-primary mb-4">Pricing</h4>
              <ul className="space-y-2">
                {footerLinks.pricing.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="text-center sm:text-left">
              <h4 className="text-xs sm:text-sm font-semibold text-text-primary mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="text-center sm:text-left">
              <h4 className="text-xs sm:text-sm font-semibold text-text-primary mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 md:mt-14 pt-6 sm:pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-xs sm:text-sm text-text-muted text-center sm:text-left">
              © {new Date().getFullYear()} Whats91. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-text-muted">
              <Tag className="h-3 w-3" />
              <span className="font-mono">v{version}</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
