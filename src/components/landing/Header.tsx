"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X, MessageCircle, ChevronRight } from "lucide-react";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Busy ERP", href: "/solutions/busy-erp" },
  { label: "Blog", href: "/blog" },
  { label: "Developers", href: "#developers" },
  { label: "Security", href: "#security" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-brand-primary shadow-md shadow-brand-primary/20 transition-transform duration-300 group-hover:scale-105">
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-brand-primary-foreground" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-semibold text-text-primary tracking-tight">
                Whats91
              </span>
              <span className="hidden sm:inline-flex items-center rounded-full bg-brand-primary-light px-2.5 py-0.5 text-[10px] font-medium text-brand-primary border border-brand-primary/10">
                Official BSP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-200 rounded-lg hover:text-text-primary hover:bg-surface whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" className="text-text-secondary hover:text-text-primary text-sm font-medium hover:bg-surface">
              Docs
            </Button>
            <Button className="bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover text-sm font-medium shadow-md shadow-brand-primary/20 hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 shrink-0 hover:bg-surface">
                <Menu className="h-5 w-5 text-text-primary" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[85vw] sm:w-[320px] bg-background/95 backdrop-blur-xl border-l border-border p-0"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/60">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary shadow-md shadow-brand-primary/20">
                    <MessageCircle className="h-4 w-4 text-brand-primary-foreground" />
                  </div>
                  <span className="text-lg font-semibold text-text-primary">Whats91</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-surface">
                    <X className="h-4 w-4 text-text-primary" />
                  </Button>
                </SheetClose>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col p-3">
                {navItems.map((item) => (
                  <SheetClose key={item.label} asChild>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-2.5 px-3 text-base font-medium text-text-secondary transition-all duration-200 hover:text-text-primary hover:bg-surface rounded-lg"
                    >
                      {item.label}
                      <ChevronRight className="h-4 w-4 text-text-muted" />
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              {/* Mobile Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-surface/50">
                <div className="flex flex-col gap-2.5">
                  <Button variant="outline" className="w-full h-10 border-border text-text-primary hover:bg-background font-medium">
                    Documentation
                  </Button>
                  <Button className="w-full h-10 bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover font-medium shadow-md shadow-brand-primary/20">
                    Get Started
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  <span className="text-[11px] text-text-muted">Official Business Solution Provider</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
