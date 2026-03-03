"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  ArrowLeft, 
  MessageCircle, 
  Search,
  FileQuestion
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full text-center">
          
          {/* 404 Illustration */}
          <div className="relative mb-8">
            {/* Background decoration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-brand-primary/5 blur-3xl" />
            </div>
            
            {/* Main illustration */}
            <div className="relative">
              <div className="inline-flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-brand-primary/10 to-brand-accent/5 border border-brand-primary/10 mb-4">
                <FileQuestion className="w-16 h-16 sm:w-20 sm:h-20 text-brand-primary" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center shadow-md animate-bounce">
                <span className="text-lg">?</span>
              </div>
              <div className="absolute -bottom-1 -left-3 w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                <span className="text-xs text-brand-primary">!</span>
              </div>
            </div>
          </div>

          {/* Error Code */}
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-brand-primary/10 border border-brand-primary/15 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary">
              Error 404
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10">
            <Link href="/">
              <Button 
                size="lg" 
                className="h-12 px-6 text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/25 group"
              >
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 px-6 text-base font-semibold rounded-xl border-border/80 hover:bg-surface"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Support
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="pt-8 border-t border-border/60">
            <p className="text-sm text-text-muted mb-4">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link 
                href="/pricing" 
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-text-secondary hover:text-brand-primary hover:bg-brand-primary/5 transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Pricing
              </Link>
              <Link 
                href="/faq" 
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-text-secondary hover:text-brand-primary hover:bg-brand-primary/5 transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                FAQ
              </Link>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-text-secondary hover:text-brand-primary hover:bg-brand-primary/5 transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Blog
              </Link>
              <Link 
                href="/tools" 
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-text-secondary hover:text-brand-primary hover:bg-brand-primary/5 transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Free Tools
              </Link>
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mt-8 p-4 rounded-xl bg-surface/50 border border-border/40">
            <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
              <Search className="h-4 w-4" />
              <span>
                Try using the navigation menu or search to find what you need
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border/40">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-3">
            <Image
              src="/whats91_logo.svg"
              alt="Whats91 Logo"
              width={100}
              height={28}
              className="h-7 w-auto"
            />
          </Link>
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Whats91. All rights reserved. 
            <span className="mx-2">•</span>
            India&apos;s leading WhatsApp Cloud API platform
          </p>
        </div>
      </footer>
    </div>
  );
}
