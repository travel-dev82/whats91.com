"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Menu,
  X,
  MessageCircle,
  ChevronRight,
  Megaphone,
  Settings,
  Database,
  BarChart3,
  CreditCard,
  Sheet as SheetIcon,
  Zap,
  Wrench
} from "lucide-react";
import { cn } from "@/lib/utils";

// Solution menu items for dropdown
const solutions = [
  {
    title: "Marketing & Engagement",
    href: "/solutions/marketing",
    description: "Broadcast campaigns, CTWA ads, and cart recovery with 98% open rates.",
    icon: Megaphone,
  },
  {
    title: "Utility Messages",
    href: "/solutions/utility",
    description: "Transactional alerts, OTPs, and order updates with compliant templates.",
    icon: Zap,
  },
  {
    title: "Busy ERP Integration",
    href: "/solutions/busy-erp",
    description: "Automate invoices, payment reminders, and ledger inquiries from WhatsApp.",
    icon: Database,
    featured: true,
  },
  {
    title: "Busy API",
    href: "/solutions/busy-api",
    description: "Direct API integration for Busy accounting software.",
    icon: Settings,
  },
  {
    title: "Busy Reports",
    href: "/solutions/busy-reports",
    description: "Automated report delivery via WhatsApp from Busy ERP.",
    icon: BarChart3,
  },
  {
    title: "Payment Reminders",
    href: "/solutions/payment-reminders",
    description: "Automated payment collection reminders and follow-ups.",
    icon: CreditCard,
  },
  {
    title: "Google Sheet Sync",
    href: "/solutions/busy-google-sheet",
    description: "Sync data between WhatsApp, Busy, and Google Sheets.",
    icon: SheetIcon,
  },
];

// Primary navigation items (minimal header)
const primaryNavItems = [
  { label: "Free Tools", href: "/tools" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
                Meta Partner
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Solutions Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-200 rounded-lg hover:text-text-primary hover:bg-surface bg-transparent data-[state=open]:bg-surface data-[state=open]:text-text-primary">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {solutions.map((solution) => (
                        <ListItem
                          key={solution.href}
                          title={solution.title}
                          href={solution.href}
                          featured={solution.featured}
                        >
                          <div className="flex items-start gap-3">
                            <solution.icon className="h-5 w-5 mt-0.5 text-brand-primary shrink-0" />
                            <span className="text-xs text-text-secondary leading-relaxed">
                              {solution.description}
                            </span>
                          </div>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Primary Nav Items */}
            {primaryNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg whitespace-nowrap",
                  pathname === item.href
                    ? "text-text-primary bg-surface"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" asChild className="text-text-secondary hover:text-text-primary text-sm font-medium hover:bg-surface">
              <Link href="/whatsapp-templates">Templates</Link>
            </Button>
            <Button asChild className="bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover text-sm font-medium shadow-md shadow-brand-primary/20 hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300">
              <Link href="/contact">Get Started</Link>
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
              <nav className="flex flex-col p-3 overflow-y-auto max-h-[calc(100vh-180px)]">
                {/* Solutions Section */}
                <div className="mb-2">
                  <span className="px-3 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Solutions
                  </span>
                </div>
                {solutions.map((solution) => (
                  <SheetClose key={solution.href} asChild>
                    <Link
                      href={solution.href}
                      className="flex items-center gap-3 py-2.5 px-3 text-sm font-medium text-text-secondary transition-all duration-200 hover:text-text-primary hover:bg-surface rounded-lg"
                    >
                      <solution.icon className="h-4 w-4 text-brand-primary" />
                      {solution.title}
                      <ChevronRight className="h-4 w-4 text-text-muted ml-auto" />
                    </Link>
                  </SheetClose>
                ))}

                {/* Divider */}
                <div className="my-3 border-t border-border/60" />

                {/* Primary Nav Items */}
                {primaryNavItems.map((item) => (
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
                  <Button variant="outline" asChild className="w-full h-10 border-border text-text-primary hover:bg-background font-medium">
                    <Link href="/whatsapp-templates">WhatsApp Templates</Link>
                  </Button>
                  <Button asChild className="w-full h-10 bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover font-medium shadow-md shadow-brand-primary/20">
                    <Link href="/contact">Get Started</Link>
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

// Dropdown list item component
const ListItem = ({
  className,
  title,
  children,
  href,
  featured,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
  featured?: boolean;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200",
            "hover:bg-surface hover:text-text-primary focus:bg-surface focus:text-text-primary",
            featured && "bg-brand-primary/5 border border-brand-primary/20 hover:bg-brand-primary/10",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold leading-none text-text-primary">{title}</span>
            {featured && (
              <span className="inline-flex items-center rounded-full bg-brand-primary px-2 py-0.5 text-[10px] font-medium text-white">
                Popular
              </span>
            )}
          </div>
          <div className="mt-1">{children}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
