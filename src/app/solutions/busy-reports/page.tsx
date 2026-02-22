"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { AnimatedReportPortal } from "@/components/landing/AnimatedReportPortal";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight,
  Monitor,
  Smartphone,
  FileText,
  TrendingUp,
  Users,
  CreditCard,
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
  Clock,
  ChevronDown,
  ChevronUp,
  Layers,
  RefreshCw,
  BarChart3,
  Package,
  Receipt,
  Settings,
  Globe
} from "lucide-react";
import { useState } from "react";

const reportCategories = [
  {
    icon: FileText,
    title: "Live Ledger Reports",
    description: "Real-time party-wise tracking",
    items: ["Party-wise ledger tracking", "Detailed transaction views", "Opening & closing balances", "Debit/Credit breakdown with date filtering"]
  },
  {
    icon: CreditCard,
    title: "Bill-by-Bill Outstanding",
    description: "Complete receivables & payables",
    items: ["Outstanding bills (Receivables & Payables)", "Invoice-wise aging and due dates", "Pending amount tracking", "Overdue status monitoring"]
  },
  {
    icon: TrendingUp,
    title: "Sales & Purchase Analytics",
    description: "Performance insights",
    items: ["Sales summary & customer performance", "Product-wise & item reports", "Vendor-wise purchase data", "Bill-level purchase details"]
  },
  {
    icon: BarChart3,
    title: "Custom & MIS Reporting",
    description: "Tailored for your business",
    items: ["Stock and inventory movement", "Tax, Payment, and Receipt reports", "Custom MIS reports", "Engineered for your business logic"]
  },
];

const comparisonData = [
  { feature: "Accessibility", desktop: "Office PC only", portal: "Anywhere, 24/7 (Web & App)" },
  { feature: "Data Synchronization", desktop: "Manual checks", portal: "Live synchronization" },
  { feature: "User Access Control", desktop: "Limited system logins", portal: "Granular, role-based restrictions" },
  { feature: "Multi-Company View", desktop: "Switch companies manually", portal: "Unified, isolated dashboards" },
  { feature: "Owner Dependency", desktop: "High (asking accountant for exports)", portal: "Zero (instant self-serve access)" },
];

const securityFeatures = [
  { icon: Users, title: "Strict Role-Based Access", desc: "Control which user, branch head, or account manager can see specific reports" },
  { icon: Building2, title: "Multi-Company Separation", desc: "Clean, company-wise separation with zero data mixing" },
  { icon: Lock, title: "Secure Authentication", desc: "Token-based API access ensures your data stays protected" },
  { icon: Shield, title: "Encrypted Connections", desc: "All data transmission secured with industry-standard encryption" },
];

const industries = [
  { icon: Building2, name: "Distributors & Wholesalers", description: "Monitor sales & collections remotely" },
  { icon: Factory, name: "Manufacturing", description: "Track production & stock levels" },
  { icon: TruckIcon, name: "Logistics & Transport", description: "Real-time dispatch & billing status" },
  { icon: Store, name: "Retail Chains", description: "Multi-location performance tracking" },
];

const faqs = [
  { q: "Do I need a Remote Desktop connection (RDP) to use this?", a: "No. This system completely eliminates the need for RDP or AnyDesk. You simply log in to your secure Whats91 web portal or mobile app from any browser or device. Your Busy data is accessible from anywhere, anytime." },
  { q: "Can I restrict my sales team to only see their specific customer ledgers?", a: "Yes. Our role-based access control allows you to restrict report visibility by user, company, and date range. A sales manager will only see the data you authorize them to see. You have complete control over data visibility." },
  { q: "How does the live synchronization work?", a: "Our secure system connects directly to your Busy Software database, applies your selected date and company filters, and updates the web and mobile dashboards automatically without requiring manual Excel exports. Data stays fresh without any manual intervention." },
  { q: "Can I access reports from my mobile phone?", a: "Yes. The Whats91 portal is fully responsive and works on any browser. Additionally, we offer a dedicated mobile app for iOS and Android, giving you instant access to your Busy reports on the go." },
  { q: "What reports are available in the portal?", a: "All critical Busy reports including ledgers, outstanding bills, sales summaries, purchase data, stock reports, tax reports, and custom MIS reports. If it's in Busy, we can display it in your dashboard." },
  { q: "Is my financial data secure?", a: "Yes. We use token-based authentication, encrypted connections, and strict role-based access control. Your data is isolated by company, and only authorized users can access specific reports. We follow industry-standard security practices." },
  { q: "Can I view multiple companies in one dashboard?", a: "Yes. If you manage multiple companies within Busy, the dashboard provides unified access with strict company-wise separation. You can switch between companies instantly without data mixing." },
  { q: "How quickly is data updated?", a: "Data synchronization happens in real-time. When a transaction is entered in Busy, it reflects in your web portal and mobile app within moments. No manual refresh or export required." },
];

const onboardingSteps = [
  { step: 1, title: "Connect Your Busy Software", description: "We configure the secure connection to your Busy database" },
  { step: 2, title: "Set Up User Access", description: "Define which users see which reports and companies" },
  { step: 3, title: "Customize Your Dashboard", description: "Select the reports and metrics you want to track" },
  { step: 4, title: "Access Anywhere, Anytime", description: "Login from web or mobile and start monitoring" },
];

export default function BusyReportsPage() {
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
                  Web & Mobile Access
                </div>
                
                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-5">
                  View All Busy Reports on Web & Mobile — 24/7
                </h1>
                
                {/* Subheadline */}
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  <span className="font-semibold text-text-primary">Access your Busy Accounting Software data anytime, anywhere.</span> No remote desktop required.
                </p>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  Untether your financial data from the office desktop. The Whats91 Busy Report Add-on securely syncs your core accounting reports to a structured web portal and mobile app, giving owners, managers, and authorized staff instant, real-time access.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/25 group"
                  >
                    Activate Busy Reports Add-on
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-7 text-base font-semibold rounded-xl border-border/80 hover:bg-surface"
                  >
                    Request Live Demo
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {["No RDP Required", "24/7 Access", "Role-Based Control"].map((badge, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs sm:text-sm text-text-muted bg-white/80 px-3 py-1.5 rounded-full border border-border/50">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Animated Portal Demo */}
              <AnimatedReportPortal />
            </div>
          </div>
        </section>

        {/* AI Answer Target - Core Value */}
        <section className="py-10 sm:py-12 bg-surface/50 border-y border-border/40">
          <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-4">
                What is the Whats91 Busy Report Add-on?
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                The Whats91 Busy Report Add-on is a <span className="font-semibold text-text-primary">secure infrastructure tool</span> that connects local Busy Accounting Software to a <span className="font-semibold text-text-primary">cloud-based Web Portal</span> and <span className="font-semibold text-text-primary">Mobile App</span>. It extracts live financial data—including ledgers, outstanding bills, and sales summaries—and displays them in interactive dashboards. This <span className="font-semibold text-brand-primary">eliminates the need for manual data exports</span> or sitting at an office computer to monitor business performance.
              </p>
            </div>
          </div>
        </section>

        {/* Reports Bento Grid */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Layers className="h-3.5 w-3.5" />
                Available Reports
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Complete Financial Visibility, 24/7
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Monitor every critical metric through your browser or phone
              </p>
            </div>

            <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              {reportCategories.map((category, index) => (
                <div 
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-text-primary mb-1">{category.title}</h4>
                      <p className="text-sm text-text-muted mb-3">{category.description}</p>
                      <ul className="space-y-1.5">
                        {category.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                            <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                The Whats91 Advantage
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                See how our web & mobile portal compares to standard Busy desktop access
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden shadow-lg">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-surface border-b border-border/60">
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Feature</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-slate-500">Standard Busy Desktop</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-brand-primary">Whats91 Web & Mobile Portal</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface/30 transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-medium text-text-primary">{row.feature}</td>
                      <td className="px-4 sm:px-6 py-4 text-text-secondary">{row.desktop}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className="flex items-center gap-2 text-brand-primary font-medium">
                          <CheckCircle2 className="h-4 w-4 shrink-0" />
                          {row.portal}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Security & Infrastructure */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Shield className="h-3.5 w-3.5" />
                Security & Infrastructure
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Secure Infrastructure & Role-Based Control
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Financial data requires enterprise-grade protection. Your Busy data is isolated, encrypted, and controlled.
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

        {/* Industries */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
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
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Get started in minutes
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
                Typical setup: <span className="font-medium text-text-primary">1-2 business days</span> • No software installation on your phone
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
        <section className="py-14 sm:py-16 md:py-20">
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
                  Access Your Busy Reports Anytime, Anywhere
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8">
                  Stop waiting for manual exports. Start making faster, data-driven decisions with instant access to your accounting dashboards.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold bg-white text-brand-primary hover:bg-white/95 rounded-xl shadow-lg group"
                  >
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <ContactCard 
                    variant="popup" 
                    trigger={
                      <Button 
                        size="lg" 
                        className="h-12 px-7 text-base font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-xl"
                      >
                        Activate Busy Reports Add-on
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
