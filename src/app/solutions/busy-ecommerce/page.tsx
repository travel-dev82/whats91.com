"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  ShoppingCart,
  Users,
  Clock,
  Building2,
  Factory,
  Truck as TruckIcon,
  Store,
  Pill,
  Car,
  Package,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Lock,
  RefreshCw,
  Globe,
  Smartphone,
  BarChart3,
  TrendingUp,
  CreditCard,
  FileText,
  Database,
  ChevronDown,
  ChevronUp,
  Layers,
  Settings,
  UserCheck,
  Scan,
  Wifi,
  Timer,
  Briefcase,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// Core Features
const coreFeatures = [
  {
    icon: RefreshCw,
    title: "10-Minute Sync Engine",
    description: "Real-time inventory synchronization between Busy ERP and your e-commerce storefront every 10 minutes.",
    detail: "Eliminate phantom stock and overselling with automated stock updates."
  },
  {
    icon: ShoppingCart,
    title: "White-Label Storefront",
    description: "Launch your own branded B2B/B2C portal under your domain with complete brand ownership.",
    detail: "Your brand, your customers, your domain - not a marketplace listing."
  },
  {
    icon: Users,
    title: "Salesman Portal",
    description: "Empower field reps with masquerade ordering - place orders on behalf of customers during visits.",
    detail: "Live stock visibility, customer-specific pricing, instant order creation."
  },
  {
    icon: FileText,
    title: "Customer Ledger View",
    description: "Self-service portal where B2B customers view outstanding balances and transaction history 24/7.",
    detail: "Reduce payment collection time by 50% with transparent account visibility."
  },
];

// Industry Benefits
const industryBenefits = [
  {
    icon: Car,
    name: "Auto Parts",
    busyFeature: "Parameterized Stock & Multi-location Tracking",
    ecommerceValue: "Live cataloging of thousands of SKUs with real-time stock status across all warehouses.",
    tags: ["Parameterized Search", "Vehicle Compatibility"]
  },
  {
    icon: Pill,
    name: "Pharmaceuticals",
    busyFeature: "Batch/Expiry Tracking & Drug License Management",
    ecommerceValue: "Prevent ordering expired stock, automated license verification, FIFO/FEFO compliance.",
    tags: ["Batch Tracking", "Compliance"]
  },
  {
    icon: Package,
    name: "FMCG",
    busyFeature: "Wholesale Management & Scheme/Offer Logic",
    ecommerceValue: "Automated tiered pricing, volume discounts, and 'Buy X Get Y' schemes applied automatically.",
    tags: ["Scheme Sync", "Volume Pricing"]
  },
  {
    icon: Store,
    name: "Retail (Garments)",
    busyFeature: "Size/Color/Variant Inventory & Point of Sale",
    ecommerceValue: "Seamless sync of variant-level availability across web and physical stores.",
    tags: ["Variant Sync", "Omni-channel"]
  },
  {
    icon: Factory,
    name: "Chemical",
    busyFeature: "Batch-wise Costing & Excise Duty Calculation",
    ecommerceValue: "Real-time calculation of landed costs for B2B buyers with batch-specific pricing.",
    tags: ["Batch Costing", "Excise"]
  },
  {
    icon: TruckIcon,
    name: "Distribution",
    busyFeature: "Multi-Godown Management",
    ecommerceValue: "Direct customer ordering with warehouse-specific inventory visibility.",
    tags: ["Multi-location", "Stock Allocation"]
  },
];

// Comparison Data
const comparisonData = [
  { feature: "Order Processing Time", traditional: "15-30 mins per order", integrated: "Instant (< 1 min)", improvement: "95% Faster" },
  { feature: "Inventory Accuracy", traditional: "70-80% (Human error)", integrated: "100% (System sync)", improvement: "20-30% More Accurate" },
  { feature: "Salesman Efficiency", traditional: "5 visits/day (Admin heavy)", integrated: "7-8 visits/day (Admin light)", improvement: "40-50% More Productive" },
  { feature: "Payment Collection", traditional: "30-45 days DSO", integrated: "15-20 days DSO", improvement: "50% Faster Cash Flow" },
  { feature: "Manual Data Entry", traditional: "100% manual", integrated: "Automated sync", improvement: "40% Work Reduction" },
];

// User Personas
const userPersonas = [
  {
    icon: Briefcase,
    title: "Field Salesman",
    subtitle: "Order on Behalf",
    features: [
      "Masquerade as customer to place orders",
      "Customer-specific pricing applied automatically",
      "Live stock visibility before committing delivery",
      "Order history for replenishment suggestions",
      "15-25% increase in Average Order Value"
    ]
  },
  {
    icon: UserCheck,
    title: "B2B Customer",
    subtitle: "Self-Service Portal",
    features: [
      "OTP login - no password management",
      "View outstanding balances 24/7",
      "Real-time ledger statements",
      "Order tracking from Placed to Dispatched",
      "75% prefer self-service for reordering"
    ]
  },
  {
    icon: BarChart3,
    title: "Business Owner",
    subtitle: "Operational Efficiency",
    features: [
      "Eliminate manual data entry nightmare",
      "Automated order flow to Busy ERP",
      "Scale without increasing headcount",
      "Better LTV:CAC ratio",
      "Real-time business insights"
    ]
  },
];

// Technical Features
const technicalFeatures = [
  { icon: Database, title: "Inventory Sync", desc: "Real-time stock status across all godowns" },
  { icon: FileText, title: "Product Masters", desc: "Automated creation of items and price updates" },
  { icon: ShoppingCart, title: "Order Conversion", desc: "Web orders pushed as Busy Sales Orders" },
  { icon: CreditCard, title: "Customer Ledger", desc: "Live balance and transaction history sync" },
  { icon: Scan, title: "Barcode Scanning", desc: "Scan products to add to cart instantly" },
  { icon: Wifi, title: "Offline-First", desc: "Capture orders offline, sync when connected" },
];

// White Label Benefits
const whiteLabelBenefits = [
  { title: "Brand Ownership", impact: "Increased Customer Loyalty", reason: "Retention is 30% higher on personalized B2B portals" },
  { title: "Domain Autonomy", impact: "Improved SEO Authority", reason: "Organic traffic belongs to the business, not a marketplace" },
  { title: "Multi-Tenant Scalability", impact: "Lower Operational Costs", reason: "Launch multiple brands from one infrastructure with 90% cost reduction" },
  { title: "UI/UX Customization", impact: "Aligned User Experience", reason: "Tailor the interface to match existing brand guidelines" },
];

// Sync Parameters
const syncParameters = [
  { parameter: "Inventory Levels", functionality: "Real-time stock status across all godowns", consequence: "Elimination of overselling and stockout errors" },
  { parameter: "Product Masters", functionality: "Automated creation of new items and price updates", consequence: "Zero manual data entry for large catalogs" },
  { parameter: "Order Conversion", functionality: "Web orders pushed as Busy Sales Orders", consequence: "Instant fulfillment and reduced processing time" },
  { parameter: "Customer Ledger", functionality: "Live balance and transaction history sync", consequence: "50% faster payment collection via transparency" },
];

// Industries for "Who this is for"
const industries = [
  { icon: Building2, name: "Distributors & Wholesalers", description: "High-volume order management" },
  { icon: Factory, name: "Manufacturing", description: "Complex production & stock tracking" },
  { icon: TruckIcon, name: "Logistics & Transport", description: "Real-time dispatch monitoring" },
  { icon: Store, name: "Retail Chains", description: "Multi-location data consolidation" },
];

// FAQs
const faqs = [
  { q: "How does the 10-minute sync work with Busy ERP?", a: "Our sync engine connects to your Busy database every 10 minutes, pulling inventory updates, price changes, and new products while pushing web orders as Sales Orders. This ensures your e-commerce storefront is always a live reflection of your physical warehouse." },
  { q: "Can I use my own domain for the e-commerce portal?", a: "Absolutely. This is a white-label solution. Your customers access the portal at your domain (e.g., portal.yourcompany.com), reinforcing your brand authority. All organic traffic and SEO benefits belong to you, not a third-party marketplace." },
  { q: "How does the Salesman Portal 'masquerade' functionality work?", a: "Field sales reps can log in and select any customer account to place orders on their behalf. The system automatically applies that customer's specific pricing, tax slabs, credit limits, and scheme eligibility as defined in Busy ERP. It's like having the customer order themselves, but with the rep's guidance." },
  { q: "What happens when stock runs out during a sync interval?", a: "Our 10-minute sync interval is designed to minimize 'phantom stock' scenarios. If a product is ordered online but goes out of stock due to a counter sale, the system flags the order for review within minutes. This is far better than traditional daily sync systems where overselling is common." },
  { q: "Can customers see their Busy ledger and outstanding balance?", a: "Yes. The B2B Customer Portal includes a complete Ledger View showing outstanding balances, bill-wise transactions, and payment history - all pulled directly from Busy ERP. This transparency reduces payment collection time by 50% as customers can self-serve their account information." },
  { q: "Does the system handle Busy-specific features like batch tracking and schemes?", a: "Yes, this is our key differentiator. Generic e-commerce platforms don't understand Busy's batch-wise inventory, parameterized stock, or scheme management. Our solution respects all Busy logic - batch/expiry tracking, compound discounts, multi-unit pricing, and scheme application are all synchronized correctly." },
  { q: "How long does it take to set up the e-commerce integration?", a: "Typical implementation is 7-10 business days from signup to go-live. This includes connecting to your Busy database, configuring product sync, setting up customer logins, branding the storefront, and training your team. No local software installation required - it's fully cloud-based." },
  { q: "Can multiple companies in Busy use separate storefronts?", a: "Yes. Our multi-tenant architecture supports multiple companies with separate branded portals, each with strict data isolation. A single distributor can operate storefronts for different business units while maintaining complete separation of inventory, customers, and financial data." },
];

// Onboarding Steps
const onboardingSteps = [
  { step: 1, title: "Connect Busy ERP", description: "We configure secure API access to your Busy database" },
  { step: 2, title: "Design Your Storefront", description: "Apply your brand, domain, and customize product categories" },
  { step: 3, title: "Configure Sync Rules", description: "Set up inventory mapping, pricing logic, and order flow" },
  { step: 4, title: "Launch & Train", description: "Go live with full team training and ongoing support" },
];

export default function BusyEcommercePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-surface/80 to-background">
          <div className="absolute inset-0 gradient-brand-subtle pointer-events-none" />
          <div className="relative px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-center">

              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/15 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-5">
                  <Globe className="h-3.5 w-3.5" />
                  White-Label E-Commerce for Busy ERP
                </div>

                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-5">
                  Turn Busy ERP into a Branded E-Commerce Engine
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  <span className="font-semibold text-text-primary">10-Minute Sync | Salesman Portal | Customer Self-Service</span>
                </p>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  Launch your own white-label B2B/B2C storefront with real-time Busy ERP integration. 350,000+ businesses trust Busy for accounting - now extend that power to your customers with automated ordering, ledger views, and 24/7 self-service.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
                  <Button
                    size="lg"
                    className="h-12 px-7 text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/25 group"
                  >
                    Book a 15-Minute Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-7 text-base font-semibold rounded-xl border-border/80 hover:bg-surface"
                    asChild
                  >
                    <a href="https://demo.busynotify.in" target="_blank" rel="noopener noreferrer">
                      See Live Demo
                    </a>
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {["10-Minute Sync", "White-Label Branding", "Mobile-First Design"].map((badge, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs sm:text-sm text-text-muted bg-white/80 px-3 py-1.5 rounded-full border border-border/50">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Visual Demo */}
              <div className="relative">
                <div className="rounded-2xl border border-border/60 bg-white p-4 sm:p-6 shadow-xl">
                  {/* Mock E-commerce Dashboard */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-border/60">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                          <ShoppingCart className="h-4 w-4 text-brand-primary" />
                        </div>
                        <span className="font-semibold text-sm text-text-primary">YourBrand Portal</span>
                      </div>
                      <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">Live</Badge>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-surface/50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-brand-primary">1,247</p>
                        <p className="text-xs text-text-muted">Products</p>
                      </div>
                      <div className="bg-surface/50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-green-600">98.5%</p>
                        <p className="text-xs text-text-muted">Stock Sync</p>
                      </div>
                      <div className="bg-surface/50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-blue-600">342</p>
                        <p className="text-xs text-text-muted">Orders Today</p>
                      </div>
                    </div>

                    {/* Sync Status */}
                    <div className="rounded-lg border border-border/60 p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-text-secondary">Sync Status</span>
                        <span className="text-xs text-brand-primary font-medium">Last: 2 mins ago</span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2">
                        <div className="bg-brand-primary h-2 rounded-full w-[95%] animate-pulse"></div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-surface/50 text-xs">
                        <Users className="h-4 w-4 text-brand-primary" />
                        <span className="text-text-secondary">Salesman Mode</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-surface/50 text-xs">
                        <FileText className="h-4 w-4 text-brand-primary" />
                        <span className="text-text-secondary">Ledger View</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-3 sm:bottom-4 sm:-right-4 bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg flex items-center gap-1.5">
                  <Timer className="h-3.5 w-3.5" />
                  10-Min Auto Sync
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Answer Target - Core Value */}
        <section className="py-10 sm:py-12 bg-surface/50 border-y border-border/40">
          <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-4">
                The Strategic Bridge Between Busy ERP and Modern Commerce
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                Busy Accounting Software powers <span className="font-semibold text-text-primary">350,000+ Indian SMEs</span> with robust back-office operations. But there&apos;s a gap between back-end efficiency and modern customer expectations. <span className="font-semibold text-brand-primary">Our white-label e-commerce solution bridges that gap</span> - extending Busy&apos;s power to a branded, mobile-first storefront where customers can order, view ledgers, and self-serve 24/7.
              </p>
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Layers className="h-3.5 w-3.5" />
                Core Platform Features
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Everything You Need to Launch Online
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Built specifically for Busy ERP users - not a generic e-commerce platform retrofitted for integration.
              </p>
            </div>

            <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              {coreFeatures.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-text-secondary mb-2">{item.description}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Personas Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Built for Three Key User Personas
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                A high-converting B2B platform must serve the field salesman, the B2B customer, and the business owner.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {userPersonas.map((persona, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-border"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary mb-5 transition-transform duration-300 group-hover:scale-110">
                    <persona.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">{persona.title}</h3>
                  <p className="text-sm text-brand-primary font-medium mb-4">{persona.subtitle}</p>
                  <ul className="space-y-2.5">
                    {persona.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10-Minute Sync Deep Dive */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <RefreshCw className="h-3.5 w-3.5" />
                The 10-Minute Synchronization Engine
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Why 10-Minute Sync Changes Everything
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Traditional ERP systems suffer from &quot;data silos&quot; with daily or weekly batch processing. Our 10-minute sync ensures your storefront is always a live reflection of your warehouse.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-surface border-b border-border/60">
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Sync Parameter</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Functionality</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-brand-primary">Business Consequence</th>
                  </tr>
                </thead>
                <tbody>
                  {syncParameters.map((row, i) => (
                    <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface/30 transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-medium text-text-primary">{row.parameter}</td>
                      <td className="px-4 sm:px-6 py-4 text-text-secondary">{row.functionality}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className="flex items-center gap-2 text-brand-primary font-medium">
                          <CheckCircle2 className="h-4 w-4 shrink-0" />
                          {row.consequence}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Latency Impact Warning */}
            <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5 max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-1">The Cost of High Latency</p>
                  <p className="text-sm text-red-700">
                    With 1+ hour sync delays, a sales rep could sell 100 units in the field while your web store still shows them available. The next web customer orders and you&apos;ve oversold - leading to refunds, backorders, and damaged trust. 10-minute sync eliminates this nightmare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry-Specific Benefits */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Industry-Specific Integration Benefits
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Busy serves 15+ industries with specialized features. Our e-commerce integration respects those nuances.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {industryBenefits.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-border/60 bg-white p-5 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-semibold text-text-primary">{item.name}</h4>
                  </div>
                  <p className="text-xs text-text-muted mb-2">
                    <span className="font-medium text-text-secondary">Busy Feature:</span> {item.busyFeature}
                  </p>
                  <p className="text-sm text-text-secondary mb-3">{item.ecommerceValue}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Comparison Table */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <TrendingUp className="h-3.5 w-3.5" />
                ROI Analysis
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Transform your software investment from a cost center to a growth engine.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden shadow-lg overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-surface border-b border-border/60">
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">ROI Metric</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-red-600">Manual Process</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-brand-primary">Integrated (Whats91)</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-green-600">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface/30 transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-medium text-text-primary">{row.feature}</td>
                      <td className="px-4 sm:px-6 py-4 text-text-secondary">{row.traditional}</td>
                      <td className="px-4 sm:px-6 py-4 text-brand-primary font-medium">{row.integrated}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                          {row.improvement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ROI Note */}
            <div className="mt-6 text-center">
              <p className="text-sm text-text-muted">
                For a distributor with <span className="font-medium text-text-primary">1,000 monthly orders</span>, automation saves roughly <span className="font-medium text-text-primary">250 hours of admin work</span> - equivalent to two full-time employees.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Settings className="h-3.5 w-3.5" />
                Technical Capabilities
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Built for Indian Distribution Reality
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Field reps, patchy connectivity, mobile-first users - our platform handles it all.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {technicalFeatures.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-xl border border-border/60 bg-white p-4 sm:p-5 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-text-primary">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* White Label Benefits */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Globe className="h-3.5 w-3.5" />
                White-Label Advantage
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Your Brand, Your Domain, Your Customers
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Unlike marketplaces where you&apos;re one of many sellers, a white-label storefront creates a walled garden for your loyal customer base.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-surface border-b border-border/60">
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">White-Label Advantage</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Business Impact</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-brand-primary">Strategic Rationale</th>
                  </tr>
                </thead>
                <tbody>
                  {whiteLabelBenefits.map((row, i) => (
                    <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface/30 transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-medium text-text-primary">{row.title}</td>
                      <td className="px-4 sm:px-6 py-4 text-text-secondary">{row.impact}</td>
                      <td className="px-4 sm:px-6 py-4 text-brand-primary font-medium">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Shield className="h-3.5 w-3.5" />
                Security & Data Integrity
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Busy ERP Remains Your Single Source of Truth
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                The e-commerce layer acts as a viewing window - financial transactions and inventory movements are always governed by Busy&apos;s validation rules.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Lock, title: "Role-Based Access", desc: "Control who sees what data" },
                { icon: Database, title: "Data Integrity", desc: "Busy validation rules respected" },
                { icon: Shield, title: "99.95% Uptime", desc: "Enterprise-grade reliability" },
                { icon: Smartphone, title: "Mobile Secure", desc: "Encrypted mobile access" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-border/60 bg-white p-5 text-center transition-all duration-300 hover:border-border hover:shadow-md"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">{item.title}</h4>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Who This Is For
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-border/60 bg-white p-5 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-semibold text-text-primary mb-1">{item.name}</h4>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Setup & Onboarding */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                From Signup to Live Store in Days, Not Months
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                White-label platforms enable 75% faster launch compared to custom development with 90% reduction in initial costs.
              </p>
            </div>

            <div className="space-y-4">
              {onboardingSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 rounded-xl border border-border/60 bg-white p-5 transition-all duration-300 hover:border-border hover:shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-sm font-bold shadow-md shadow-brand-primary/20">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-text-muted">
                Typical timeline: <span className="font-medium text-text-primary">7-10 business days</span> from signup to live e-commerce portal
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border/60 bg-white overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-sm sm:text-base font-medium text-text-primary">{faq.q}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-brand-primary shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-text-muted shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                      <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent p-7 sm:p-8 md:p-12 lg:p-16 shadow-xl">

              {/* Background Decorations */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-1/2 -left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  Ready to Transform Busy ERP into a Commerce Engine?
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8">
                  Book a 15-minute demo to see how your branded e-commerce portal can launch in days with real-time Busy synchronization.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    size="lg"
                    className="h-12 px-7 text-base font-semibold bg-white text-brand-primary hover:bg-white/95 rounded-xl shadow-lg group"
                  >
                    Book a 15-Minute Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <ContactCard
                    variant="popup"
                    trigger={
                      <Button
                        size="lg"
                        className="h-12 px-7 text-base font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-xl"
                      >
                        Talk to Integration Team
                      </Button>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
