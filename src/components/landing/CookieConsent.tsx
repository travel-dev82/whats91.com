"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cookie, X, Settings, Check } from "lucide-react";

const COOKIE_CONSENT_KEY = "whats91_cookie_consent";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent is already stored
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!storedConsent) {
      // Small delay for smoother animation
      const timer = setTimeout(() => setShowBanner(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  // Don't render if banner should not show
  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-[60] animate-in slide-in-from-bottom duration-500"
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
      >
        {/* Desktop Version - Footer area */}
        <div className="hidden md:block">
          <div className="bg-surface/95 backdrop-blur-xl border-t border-border/60 shadow-2xl">
            <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto py-4">
              <div className="flex items-center justify-between gap-6">
                {/* Left: Icon and Text */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10">
                    <Cookie className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 id="cookie-banner-title" className="text-sm font-semibold text-text-primary mb-1">
                      Cookie Preferences
                    </h3>
                    <p id="cookie-banner-description" className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      We use cookies to enhance your experience, analyze site traffic, and deliver personalized content. 
                      By clicking "Accept All", you consent to our use of cookies.{" "}
                      <Link href="/cookies" className="text-brand-primary hover:underline">
                        Learn more
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Right: Action Buttons */}
                <div className="flex items-center gap-3 shrink-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRejectNonEssential}
                    className="text-text-secondary hover:text-text-primary text-sm"
                  >
                    Reject Non-Essential
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleAcceptAll}
                    className="bg-brand-primary text-white hover:bg-brand-primary-hover text-sm font-medium shadow-md shadow-brand-primary/20"
                  >
                    Accept All
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClose}
                    className="h-8 w-8 text-text-muted hover:text-text-primary shrink-0"
                    aria-label="Close cookie banner"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version - Full-width popup */}
        <div className="md:hidden">
          <div className="bg-background/98 backdrop-blur-xl border-t border-border/60 shadow-2xl safe-area-inset-bottom">
            <div className="p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary/10">
                    <Cookie className="h-4 w-4 text-brand-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary">
                    Cookie Preferences
                  </h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="h-8 w-8 text-text-muted hover:text-text-primary"
                  aria-label="Close cookie banner"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Description */}
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                We use cookies to enhance your experience and analyze site traffic. 
                By clicking "Accept All", you consent to our use of cookies.{" "}
                <Link href="/cookies" className="text-brand-primary hover:underline">
                  Cookie Policy
                </Link>
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <Button
                  onClick={handleAcceptAll}
                  className="w-full h-10 bg-brand-primary text-white hover:bg-brand-primary-hover font-medium shadow-md shadow-brand-primary/20"
                >
                  <Check className="mr-2 h-4 w-4" />
                  Accept All Cookies
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={handleRejectNonEssential}
                    className="flex-1 h-9 text-sm border-border text-text-secondary hover:text-text-primary"
                  >
                    Reject Non-Essential
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="h-9 px-3 border-border text-text-secondary hover:text-text-primary"
                  >
                    <Link href="/cookies">
                      <Settings className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
