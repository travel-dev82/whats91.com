"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { AnimatedAPIArchitecture } from "@/components/landing/AnimatedAPIArchitecture";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight,
  Database,
  Server,
  Code2,
  FileJson,
  FileText,
  FileCode,
  Building2,
  Factory,
  Truck as TruckIcon,
  Store,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Lock,
  Clock,
  ChevronDown,
  ChevronUp,
  Layers,
  Globe,
  Cpu,
  Settings,
  ArrowLeft
} from "lucide-react";
import { useState } from "react";

const comparisonData = [
  { feature: "Setup Time", standard: "Instant deployment", custom: "Built to your specifications" },
  { feature: "Data Scope", standard: "Ledgers, Sales, Outstanding, Inventory", custom: "100% custom SQL logic" },
  { feature: "Output Structure", standard: "Fixed JSON schema", custom: "Developer-defined JSON schema" },
  { feature: "Filtering", standard: "Standard date & party filters", custom: "Advanced multi-company & voucher logic" },
  { feature: "Best For", standard: "Fast integrations & dashboards", custom: "Complex workflows & proprietary systems" },
];

const outputFormats = [
  {
    icon: FileJson,
    title: "JSON Ledger API",
    description: "Structured raw data payload for deep system integration and custom UI rendering.",
    features: ["Invoice dates & aging details", "Debit/credit breakups", "Bill-by-bill data", "Customer-wise grouping"],
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: FileCode,
    title: "HTML Ledger API",
    description: "Beautifully formatted, responsive HTML ledger. Inject directly into portals with zero front-end coding.",
    features: ["Responsive design", "Print-ready styling", "Zero CSS needed", "Instant integration"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: FileText,
    title: "PDF Ledger API",
    description: "Ready-to-share, printable PDF generated on the fly. Perfect for email workflows and WhatsApp sharing.",
    features: ["Professional formatting", "Auto-generated", "Email attachments", "WhatsApp ready"],
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
];

const integrationTargets = [
  { icon: Building2, title: "CRM Integration", description: "Salesforce, HubSpot, Zoho CRM" },
  { icon: Globe, title: "E-commerce Portals", description: "B2B ordering platforms" },
  { icon: Cpu, title: "BI Tools", description: "PowerBI, Tableau dashboards" },
  { icon: Layers, title: "Custom Mobile Apps", description: "iOS & Android applications" },
];

const securityFeatures = [
  { icon: Lock, title: "Token-Based Authentication", desc: "Strict API key and bearer token validation" },
  { icon: Building2, title: "Company Isolation", desc: "Enforce company-wise data boundaries" },
  { icon: Shield, title: "IP Whitelisting", desc: "Restrict access to trusted networks" },
  { icon: Clock, title: "99.99% Uptime", desc: "Stable response times, 24/7 availability" },
];

const faqs = [
  { q: "Does the server running Busy software need to be online 24/7?", a: "Our architecture utilizes a secure synchronization agent that ensures your required API data remains accessible 24/7 via our cloud infrastructure, drastically reducing the dependency on your local server's continuous uptime. Your data stays available even when your office is closed." },
  { q: "Can I filter the API to only show data for a specific financial year or branch?", a: "Yes. Both our Standard and Custom APIs support deep filtering parameters, including date ranges, financial years, specific company codes, branch selection, and individual voucher types. You have complete control over what data is returned." },
  { q: "Is there a limit to the number of API calls we can make?", a: "We offer scalable rate limits designed for enterprise usage. During the technical scoping call, we evaluate your query volume and configure the endpoint infrastructure to support your specific load without throttling. No unexpected limits or surprises." },
  { q: "What format does the API return data in?", a: "Our API supports multiple output formats. Standard endpoints return JSON. Our Ledger API can return JSON for raw data, HTML for instant web display, and PDF for printable documents—giving developers maximum flexibility." },
  { q: "How secure is the API connection?", a: "We use industry-standard HTTPS encryption, bearer token authentication, and support IP whitelisting. Each request is validated against your API credentials, and data is isolated by company. Your financial data never travels unencrypted." },
  { q: "Can I connect multiple Busy companies to the API?", a: "Yes. The API supports multi-company configurations with strict isolation. Each company's data is kept separate, and you can filter requests to specific companies or fetch consolidated reports across companies you authorize." },
  { q: "What data can I access through the API?", a: "Standard endpoints cover ledgers, outstanding bills, sales summaries, purchase data, inventory levels, and receipts. Custom APIs can access any data in your Busy database using SQL queries tailored to your needs." },
  { q: "How quickly can we integrate?", a: "Standard API endpoints are available immediately after configuration. Most integrations take 1-2 weeks depending on complexity. Custom APIs require a scoping call to define requirements, typically deployed within 2-4 weeks." },
];

const onboardingSteps = [
  { step: 1, title: "Technical Scoping Call", description: "Define your data requirements and integration goals" },
  { step: 2, title: "API Configuration", description: "Set up endpoints, authentication, and data mappings" },
  { step: 3, title: "Development Access", description: "Receive API keys, documentation, and sandbox access" },
  { step: 4, title: "Go Live", description: "Deploy to production with monitoring and support" },
];

export default function BusyAPIPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        
        {/* Hero Section - Dark Theme */}
        <section className="relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24 bg-slate-950">
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-brand-accent/5 to-transparent" />

          <div className="relative px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-center">
              
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/20 border border-brand-primary/30 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-5">
                  <Code2 className="h-3.5 w-3.5" />
                  Developer API
                </div>
                
                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
                  Secure, Real-Time API Access for Busy Accounting Software
                </h1>
                
                {/* Subheadline */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  <span className="text-white font-semibold">Standard Endpoints | Custom SQL Queries | 24/7 Data Availability</span>
                </p>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  Unlock the full power of your financial data. The Whats91 API engine transforms on-premise Busy Accounting Software into a cloud-ready data source. Integrate your ledger, inventory, and outstanding data directly into your CRM, custom mobile apps, e-commerce platforms, or enterprise dashboards.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold rounded-xl bg-brand-primary text-white hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/30 group"
                  >
                    Request API Documentation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-7 text-base font-semibold rounded-xl border-slate-600 text-white hover:bg-slate-800 hover:text-white"
                  >
                    Schedule Technical Scoping
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {["REST API", "JSON • HTML • PDF", "99.99% Uptime"].map((badge, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Animated API Architecture */}
              <AnimatedAPIArchitecture />
            </div>
          </div>
        </section>

        {/* AI Answer Target - Core Value */}
        <section className="py-10 sm:py-12 bg-surface/50 border-y border-border/40">
          <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-4">
                What is the Whats91 Busy API Engine?
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                The Whats91 API infrastructure bridges the gap between <span className="font-semibold text-text-primary">legacy desktop accounting</span> and <span className="font-semibold text-text-primary">modern cloud applications</span>. It provides secure, token-authenticated <span className="font-semibold text-brand-primary">REST API endpoints</span> that fetch real-time data from Busy Accounting Software. Whether you need standard JSON responses for software integration or ready-to-print HTML/PDF ledgers, our server-driven architecture ensures <span className="font-semibold text-text-primary">24/7 data availability</span> without relying on accountant intervention.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Total Control Over Your Data Retrieval
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                We don't force you into rigid data structures. Choose the API tier that fits your development needs.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden shadow-lg">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-surface border-b border-border/60">
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Capability</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-brand-primary">Standard API</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-slate-600">Custom API</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface/30 transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-medium text-text-primary">{row.feature}</td>
                      <td className="px-4 sm:px-6 py-4 text-brand-primary font-medium">{row.standard}</td>
                      <td className="px-4 sm:px-6 py-4 text-text-secondary">{row.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Multi-Format Ledger API */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <FileJson className="h-3.5 w-3.5" />
                Ledger API
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Multi-Format Ledger API: JSON, HTML & PDF
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Rendering complex financial ledgers from raw data is a massive development headache. We solved it. Our dedicated Ledger API delivers bill-by-bill outstanding data in three distinct formats, instantly.
              </p>
            </div>

            <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3">
              {outputFormats.map((format, index) => (
                <div 
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:border-border"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${format.bgColor} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <format.icon className={`h-7 w-7 ${format.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">{format.title}</h4>
                  <p className="text-sm text-text-secondary mb-4">{format.description}</p>
                  <ul className="space-y-2">
                    {format.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                        <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Infrastructure */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Shield className="h-3.5 w-3.5" />
                Security
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Secure, Controlled, and Always Online
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Your financial database is your most critical asset. Our API architecture ensures absolute protection and high availability.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {securityFeatures.map((item, i) => (
                <div 
                  key={i}
                  className="group rounded-xl border border-border/60 bg-white p-5 transition-all duration-300 hover:border-border hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">{item.title}</h4>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Possibilities */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Where Can You Flow Your Busy Data?
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                With a reliable API connection, your development team can build limitless automated workflows
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {integrationTargets.map((item, index) => (
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

            {/* Integration Note */}
            <div className="mt-10 rounded-xl border border-brand-primary/20 bg-brand-primary/[0.03] p-5 max-w-2xl mx-auto">
              <p className="text-sm text-text-secondary text-center">
                <span className="font-medium text-text-primary">Developer Note:</span> We provide comprehensive API documentation, SDK examples, and dedicated technical support during integration. Your team won't be left guessing.
              </p>
            </div>
          </div>
        </section>

        {/* Setup & Onboarding */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Get API access in 4 steps
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
                Standard API: <span className="font-medium text-text-primary">Instant access</span> • Custom API: <span className="font-medium text-text-primary">2-4 weeks</span>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
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
        <section className="py-14 sm:py-16 md:py-20 bg-slate-950">
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
                  Connect Your Busy Software to the Modern Web
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8">
                  Stop relying on manual exports and fragile workarounds. Give your development team the clean, secure, and reliable API endpoints they need.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold bg-white text-brand-primary hover:bg-white/95 rounded-xl shadow-lg group"
                  >
                    Request API Documentation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <ContactCard 
                    variant="popup" 
                    trigger={
                      <Button 
                        size="lg" 
                        className="h-12 px-7 text-base font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-xl"
                      >
                        Schedule Technical Scoping
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
