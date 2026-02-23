"use client";

import Link from "next/link";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  solutions: [
    { label: "Marketing", href: "/solutions/marketing" },
    { label: "Busy ERP", href: "/solutions/busy-erp" },
    { label: "Support", href: "/solutions/support" },
    { label: "Developer APIs", href: "/solutions/developer" },
  ],
  developers: [
    { label: "API Docs", href: "/docs" },
    { label: "Webhooks", href: "/docs/webhooks" },
    { label: "SDKs", href: "/docs/sdks" },
    { label: "Sandbox", href: "/docs/sandbox" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "DPDP", href: "/compliance" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/30">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto py-10 sm:py-12 md:py-16">
        
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-5">
          
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
                <a href="mailto:hello@whats91.com" className="hover:text-brand-primary transition-colors">
                  hello@whats91.com
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-primary" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:col-span-3 lg:grid-cols-3">
            
            {/* Solutions */}
            <div className="text-center sm:text-left">
              <h4 className="text-xs sm:text-sm font-semibold text-text-primary mb-4">Solutions</h4>
              <ul className="space-y-2.5">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers */}
            <div className="text-center sm:text-left">
              <h4 className="text-xs sm:text-sm font-semibold text-text-primary mb-4">Developers</h4>
              <ul className="space-y-2.5">
                {footerLinks.developers.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="hidden sm:block text-center lg:text-left">
              <h4 className="text-xs sm:text-sm font-semibold text-text-primary mb-4">Company</h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
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
          <p className="text-xs sm:text-sm text-text-muted text-center sm:text-left">
            © {new Date().getFullYear()} Whats91. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
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
