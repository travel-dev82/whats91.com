"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { AnimatedReverseFlow } from "@/components/landing/AnimatedReverseFlow";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight,
  Database,
  Server,
  FileSpreadsheet,
  Building2,
  Factory,
  Truck as TruckIcon,
  Store,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Lock,
  FileCheck,
  FileText,
  Code2,
  ChevronDown,
  ChevronUp,
  Layers,
  RefreshCw,
  AlertTriangle,
  BarChart3,
  Users,
  TrendingUp,
  Settings
} from "lucide-react";
import { useState } from "react";

const features = [
  { icon: Code2, title: "Custom SQL Generation", description: "Build advanced logic to pull ledger data, outstanding reports, or stock movement.", detail: "No rigid, predefined reports—extract exactly what you need." },
  { icon: Settings, title: "Granular Filtering", description: "Filter dynamically by customer, date range, voucher type, or specific business rules.", detail: "Complete control over your data extraction logic." },
  { icon: Shield, title: "Secure & Isolated", description: "Data runs through a dedicated API endpoint with token-based access.", detail: "Your Busy data stays protected with role-based query restrictions." },
];

const comparisonData = [
  { feature: "Data Movement", traditional: "Pushes to Google (Unstable)", whats91: "Sheet pulls from Server (Stable)" },
  { feature: "Google API Limits", traditional: "Fails when quotas are reached", whats91: "Bypasses push limit entirely" },
  { feature: "Data Structure", traditional: "Fixed, predefined columns", whats91: "100% custom SQL queries" },
  { feature: "Uptime & Reliability", traditional: "Breaks on high-frequency syncing", whats91: "99.99% Uptime Infrastructure" },
  { feature: "Multi-Company Logic", traditional: "Data often gets mixed", whats91: "Strict company & financial year isolation" },
];

const useCases = [
  { icon: BarChart3, title: "Live Sales Dashboards", description: "Track revenue and targets in real-time" },
  { icon: FileText, title: "Automated Outstanding Reports", description: "Keep credit and collection teams updated instantly" },
  { icon: Users, title: "Customer Performance Sheets", description: "Evaluate buyer behavior and purchasing trends" },
  { icon: TrendingUp, title: "Custom MIS & Management Reporting", description: "Combine multi-company data into a single executive view" },
];

const industries = [
  { icon: Building2, name: "Distributors & Wholesalers", description: "High-volume data sync needs" },
  { icon: Factory, name: "Manufacturing", description: "Complex production & stock tracking" },
  { icon: TruckIcon, name: "Logistics & Transport", description: "Real-time dispatch monitoring" },
  { icon: Store, name: "Retail Chains", description: "Multi-location data consolidation" },
];

const faqs = [
  { q: "How does this system bypass Google Sheets API limits?", a: "Traditional tools trigger a '429: Too many requests' error because they aggressively push data to Google. Our system operates in reverse. The API server processes the Busy data, and the Google Sheet simply fetches the clean, validated JSON response, eliminating write-quota failures." },
  { q: "Can I connect multiple companies from Busy ERP?", a: "Yes. Each business and company can have a custom data structure, separate API endpoint, and company-wise filtering to ensure strict data isolation. Your multi-company data never gets mixed." },
  { q: "Is this a plug-and-play tool or a custom setup?", a: "This is a fully custom, enterprise-level solution built specifically for your requirements. We configure the custom query logic, generate the API endpoint, and install the Google Sheet Add-on for you. No manual work is required on your end." },
  { q: "What data can I sync from Busy to Google Sheets?", a: "Any data that exists in your Busy ERP—ledgers, outstanding reports, stock movement, sales summaries, customer data, voucher details, and more. Since we use custom SQL queries, you have complete flexibility." },
  { q: "How often does the data refresh in Google Sheets?", a: "The Google Sheet Add-on pulls fresh data on demand or on a schedule you define. Because it's a pull-based system, you control when and how often data updates—without hitting API limits." },
  { q: "Do I need to keep my computer running for this to work?", a: "No. This is a fully cloud-based solution. Our API server processes your Busy data, and your Google Sheet connects to it directly. No local software or always-on computer required." },
  { q: "Is my Busy data secure?", a: "Yes. Data runs through a dedicated API endpoint with token-based access and role-based query restrictions. Your Busy data remains protected, and only authorized requests receive responses." },
  { q: "Can I customize the data structure in Google Sheets?", a: "Absolutely. Since we use custom SQL queries, you define exactly which columns, fields, and data points appear in your sheet. No fixed, predefined report formats." },
];

const onboardingSteps = [
  { step: 1, title: "Analyze Your Data Needs", description: "We identify which Busy data you need in Google Sheets" },
  { step: 2, title: "Build Custom API Endpoint", description: "Create dedicated queries and data structure for your use case" },
  { step: 3, title: "Install Google Sheet Add-on", description: "Deploy the custom Apps Script to your Google Sheet" },
  { step: 4, title: "Go Live & Automate", description: "Start syncing data without API limit errors" },
];

export default function BusyGoogleSheetPage() {
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
                  <Database className="h-3.5 w-3.5" />
                  Busy to Google Sheets API Engine
                </div>
                
                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-5">
                  Turn Busy ERP Data into Live Google Sheets. Zero API Limits.
                </h1>
                
                {/* Subheadline */}
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  <span className="font-semibold text-text-primary">Fully Custom Automation | API-Based Reverse Data Flow | 99.99% Uptime</span>
                </p>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  Stop dealing with broken exports, Google API quotas, and <span className="font-mono text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded">429: Too many requests</span> errors. Whats91 provides a structured, server-driven data engine that seamlessly connects Busy Accounting Software to Google Sheets.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/25 group"
                  >
                    Schedule a Technical Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-7 text-base font-semibold rounded-xl border-border/80 hover:bg-surface"
                  >
                    Request Custom Setup
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {["Bypasses API Limits", "Custom SQL Queries", "99.99% Uptime"].map((badge, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs sm:text-sm text-text-muted bg-white/80 px-3 py-1.5 rounded-full border border-border/50">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Animated Reverse Flow Demo */}
              <AnimatedReverseFlow />
            </div>
          </div>
        </section>

        {/* AI Answer Target - Core Value */}
        <section className="py-10 sm:py-12 bg-surface/50 border-y border-border/40">
          <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-4">
                The Reverse Flow Architecture: Smart & Stable
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                Most basic integrations push data directly from Busy to Google Sheets. The moment you hit Google's write quota (60 requests per minute), the system breaks. <span className="font-semibold text-text-primary">We engineered a completely different approach.</span> Your Busy ERP data is processed securely on our API server. A custom Google Sheet Add-on then <span className="font-semibold text-brand-primary">pulls</span> the structured data on demand—bypassing Google's push limits entirely.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Why Enterprise Users Choose the Whats91 Method
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                See how our reverse API flow compares to traditional push-based integrations
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden shadow-lg">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-surface border-b border-border/60">
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Feature</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-red-600">Traditional Integrations</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-brand-primary">Whats91 Reverse API Flow</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface/30 transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-medium text-text-primary">{row.feature}</td>
                      <td className="px-4 sm:px-6 py-4 text-text-secondary">{row.traditional}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className="flex items-center gap-2 text-brand-primary font-medium">
                          <CheckCircle2 className="h-4 w-4 shrink-0" />
                          {row.whats91}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* API Limit Warning */}
            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-1">Google Sheets API Limit</p>
                  <p className="text-sm text-amber-700">
                    Google's API has a strict <span className="font-mono bg-amber-100 px-1 rounded">60 requests/minute</span> quota. Traditional push-based integrations hit this limit and fail. Our reverse flow architecture bypasses this entirely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Layers className="h-3.5 w-3.5" />
                Data Engine
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Fully Custom Query System
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                You are not restricted to rigid, predefined reports. Extract the exact data you need, structured exactly how you want it.
              </p>
            </div>

            <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-3">
              {features.map((item, index) => (
                <div 
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:border-border"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary mb-5 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-text-secondary mb-2">{item.description}</p>
                  <p className="text-xs text-text-muted leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                What Can You Build With Live Busy Data?
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                With a reliable data flow, businesses can automate their entire reporting workflow without manual Excel exports
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((item, index) => (
                <div 
                  key={index}
                  className="group rounded-xl border border-border/60 bg-white p-5 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-semibold text-text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Shield className="h-3.5 w-3.5" />
                Security & Compliance
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Enterprise-grade data security
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Lock, title: "Token-Based Access", desc: "Secure API authentication" },
                { icon: FileCheck, title: "Role-Based Queries", desc: "Restrict what can be fetched" },
                { icon: Shield, title: "Data Isolation", desc: "Company-wise separation" },
                { icon: Server, title: "Dedicated Endpoints", desc: "Your own API URL" },
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
                Who this is for
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
                We handle everything for you
              </h2>
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
                Typical timeline: <span className="font-medium text-text-primary">5-7 business days</span> from signup to live data
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
                  Connect Busy Software to Google Sheets the Smart Way
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8">
                  Stop exporting manually. Stop worrying about automation failures. Upgrade to a stable, custom-built API data engine today.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold bg-white text-brand-primary hover:bg-white/95 rounded-xl shadow-lg group"
                  >
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <ContactCard 
                    variant="popup" 
                    trigger={
                      <Button 
                        size="lg" 
                        className="h-12 px-7 text-base font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-xl"
                      >
                        Request Custom Setup
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
