"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { AnimatedChatbot } from "@/components/landing/AnimatedChatbot";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  ChevronRight,
  MessageCircle,
  Send,
  Bot,
  FileText,
  Receipt,
  Truck,
  Download,
  Users,
  Shield,
  Building2,
  Factory,
  Truck as TruckIcon,
  Store,
  CheckCircle2,
  ArrowRight,
  Clock,
  Zap,
  Lock,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Play
} from "lucide-react";
import { useState } from "react";

const chatbotMenu = [
  { icon: FileText, label: "Check Balance", description: "Instant outstanding balance", source: "Ledger data", format: "Text message" },
  { icon: FileText, label: "Bill-by-Bill Ledger", description: "Complete transaction history", source: "Account ledger", format: "Text + PDF" },
  { icon: Receipt, label: "Last Receipt", description: "Most recent payment receipt", source: "Receipt voucher", format: "PDF attachment" },
  { icon: Truck, label: "Bilty Status", description: "Transport document details", source: "Bilty records", format: "Text message" },
  { icon: Download, label: "Download Statement", description: "Period-wise statement", source: "Statement report", format: "PDF attachment" },
  { icon: Users, label: "Talk to Team", description: "Connect with accounts", source: "Human routing", format: "Chat transfer" },
];

const automationScenarios = [
  { title: "Auto-send Invoice/Receipt", description: "After every entry in Busy", icon: Receipt },
  { title: "Outstanding Reminders", description: "Daily or weekly schedules", icon: Clock },
  { title: "Ledger on Request", description: "Customer self-service 24/7", icon: FileText },
  { title: "Delivery/Bilty Updates", description: "Transport status alerts", icon: Truck },
  { title: "Overdue Notifications", description: "Internal team alerts", icon: Zap },
  { title: "Payment Confirmations", description: "Auto-send receipts", icon: CheckCircle2 },
];

const reportsSupported = [
  { category: "Reports", items: ["Outstanding / Balance Summary", "Bill-by-Bill Ledger", "Sales Summary", "Stock / Dispatch Reports"] },
  { category: "Vouchers", items: ["Sales Invoice", "Receipt", "Payment Voucher", "Credit/Debit Notes", "Bilty / Transport Docs"] },
];

const industries = [
  { icon: Building2, name: "Distributors & Wholesalers", description: "High-volume invoices & collections" },
  { icon: Factory, name: "Manufacturing", description: "Complex billing & dispatch tracking" },
  { icon: TruckIcon, name: "Logistics & Transport", description: "Bilty tracking & delivery updates" },
  { icon: Store, name: "Retail Chains", description: "Multi-location account management" },
];

const faqs = [
  { q: "Is this official WhatsApp Cloud API or WhatsApp Web automation?", a: "We use the official WhatsApp Business Platform (Cloud API) hosted by Meta. This ensures reliability, compliance, and access to the latest features like interactive messages and flows." },
  { q: "Can customers request ledger/balance anytime?", a: "Yes, 24/7. Customers simply send 'Hi' or any message to your WhatsApp Business number, and the chatbot presents action buttons for balance, ledger, receipts, and more." },
  { q: "Do you support bill-by-bill ledger?", a: "Absolutely. Customers can view their complete transaction history with each bill broken down—date, reference, debit, credit, and running balance—instantly on WhatsApp." },
  { q: "Can we send last receipt automatically after payment?", a: "Yes. When a receipt is entered in Busy, Whats91 can automatically send the receipt PDF to the customer's WhatsApp within seconds—no manual action needed." },
  { q: "Can you show bilty details only for relevant accounts?", a: "Yes. We configure the chatbot to show bilty/transport options only for accounts where bilty data exists, keeping the experience clean and relevant." },
  { q: "Can we add buttons and custom flows?", a: "Yes. WhatsApp Cloud API supports interactive messages with buttons. We can customize menu items, button labels, and flows based on your specific business needs." },
  { q: "How do templates work for outbound notifications?", a: "For proactive messages (reminders, invoices), we use approved WhatsApp message templates. Customers must opt-in, and we ensure all outbound messages comply with Meta's policies." },
  { q: "What data do you store?", a: "We follow data minimization principles. We store only essential mapping data and recent transaction references needed for quick responses. Full accounting data remains in your Busy installation." },
  { q: "Can we route chats to a human accounts team?", a: "Yes. The 'Talk to Team' button routes complex queries to your designated team members via the WhatsApp Business API inbox or your existing CRM." },
];

const onboardingSteps = [
  { step: 1, title: "Connect WhatsApp Cloud API", description: "We help you set up your official WhatsApp Business account" },
  { step: 2, title: "Map Your Busy Data", description: "Configure which reports, vouchers, and data points to sync" },
  { step: 3, title: "Approve Chatbot Menu", description: "Review and customize the customer-facing menu options" },
  { step: 4, title: "Go Live", description: "Start automating and let customers self-serve instantly" },
];

export default function BusyERPIntegrationPage() {
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
                  <MessageCircle className="h-3.5 w-3.5" />
                  Busy Accounting Integration
                </div>
                
                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-5">
                  Turn Busy data into instant WhatsApp responses
                </h1>
                
                {/* Subheadline */}
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  Automate report & voucher delivery from Busy and offer a 24/7 ERP chatbot for balance, bill-by-bill ledger, receipts, and bilty status.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/25 group"
                  >
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-7 text-base font-semibold rounded-xl border-border/80 hover:bg-surface"
                  >
                    Request Integration
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {["Official WhatsApp Cloud API", "Secure, Permission-based", "Quick Onboarding"].map((badge, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs sm:text-sm text-text-muted bg-white/80 px-3 py-1.5 rounded-full border border-border/50">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Animated Chatbot Demo */}
              <AnimatedChatbot />
            </div>
          </div>
        </section>

        {/* What You Get - Two Pillars */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                What you get with Whats91 + Busy
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Two powerful capabilities that transform how you interact with customers
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Pillar 1 */}
              <div className="group rounded-2xl border border-border/60 bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-border">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary mb-5 transition-transform duration-300 group-hover:scale-110">
                  <Send className="h-7 w-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">
                  Automated Busy Outputs on WhatsApp
                </h3>
                <ul className="space-y-3 mb-5">
                  {[
                    "Auto-send invoices, receipts & reports",
                    "Faster collections with instant delivery",
                    "PDF attachments for all documents",
                    "Reduce manual follow-ups by 80%"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-text-secondary">
                      <CheckCircle2 className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-text-muted italic">
                  WhatsApp has 98% open rates vs 42% for email—your customers will see every message.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="group rounded-2xl border border-border/60 bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-border">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary mb-5 transition-transform duration-300 group-hover:scale-110">
                  <Bot className="h-7 w-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">
                  24/7 ERP Chatbot with Buttons
                </h3>
                <ul className="space-y-3 mb-5">
                  {[
                    "Customer sends 'Hi' → gets action menu",
                    "Self-serve balance, ledger, receipts",
                    "Works 24/7, no human needed",
                    "Reduce support calls by 50%"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-text-secondary">
                      <CheckCircle2 className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-text-muted italic">
                  WhatsApp interactive messages & flows enable guided, button-based experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chatbot Menu - Use Cases */}
        <section id="use-cases" className="py-12 sm:py-16 md:py-20 scroll-mt-16">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <MessageCircle className="h-3.5 w-3.5" />
                Chatbot Menu
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Every action your customers can take
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                A simple 'Hi' triggers this menu. Customers tap a button and get instant answers.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {chatbotMenu.map((item, index) => (
                <div 
                  key={index}
                  className="group rounded-xl border border-border/60 bg-white p-5 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-semibold text-text-primary">{item.label}</h4>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 rounded-md bg-surface text-text-muted">
                      Source: {item.source}
                    </span>
                    <span className="px-2 py-1 rounded-md bg-brand-primary/5 text-brand-primary font-medium">
                      {item.format}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                How the integration works
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                A simple 4-step process from Busy data to WhatsApp response
              </p>
            </div>

            {/* Steps */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10">
              {[
                { step: 1, title: "Busy Generates Data", desc: "Reports, vouchers, ledgers, bilty created in Busy" },
                { step: 2, title: "Whats91 Picks It Up", desc: "Scheduled sync or real-time trigger" },
                { step: 3, title: "WhatsApp Sends Message", desc: "PDF + interactive buttons via Cloud API" },
                { step: 4, title: "Customer Gets Answers", desc: "Instant response, 24/7 self-service" },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="rounded-xl border border-border/60 bg-white p-5 h-full">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white text-sm font-bold mb-4 shadow-md shadow-brand-primary/20">
                      {item.step}
                    </div>
                    <h4 className="text-base font-semibold text-text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <ChevronRight className="hidden lg:block absolute top-1/2 -right-3 h-5 w-5 text-brand-primary -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>

            {/* Technical Note */}
            <div className="rounded-xl border border-brand-primary/20 bg-brand-primary/[0.03] p-4 max-w-2xl mx-auto">
              <p className="text-sm text-text-secondary text-center">
                <span className="font-medium text-text-primary">Technical Note:</span> We use WhatsApp Business Platform capabilities like interactive messages and flows for guided customer actions.
              </p>
            </div>
          </div>
        </section>

        {/* Automation Scenarios */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Common automations customers ask for
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {automationScenarios.map((item, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-4 rounded-xl border border-border/60 bg-white p-4 sm:p-5 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-text-primary">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Differentiator Note */}
            <div className="rounded-xl border border-border/60 bg-surface/50 p-5 sm:p-6 max-w-3xl mx-auto">
              <p className="text-sm sm:text-base text-text-secondary text-center">
                <span className="font-semibold text-text-primary">Important:</span> BUSY's built-in WhatsApp sending is manual—users must click to send each message. Whats91 adds <span className="text-brand-primary font-medium">true automation</span> with Cloud API + 24/7 chatbot capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Reports & Vouchers Supported */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Reports & Vouchers Supported
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {reportsSupported.map((category, index) => (
                <div 
                  key={index}
                  className="rounded-2xl border border-border/60 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-brand-primary" />
                    {category.category}
                  </h3>
                  <ul className="space-y-2.5">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm sm:text-base text-text-secondary">
                        <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Shield className="h-3.5 w-3.5" />
                Security & Compliance
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Built for accounting-grade security
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Lock, title: "Role-Based Access", desc: "Control who can request what data" },
                { icon: FileCheck, title: "Audit Logs", desc: "Track every request and response" },
                { icon: Shield, title: "Data Minimization", desc: "Send only what's required" },
                { icon: FileText, title: "Template Compliance", desc: "Opt-in required for outbound" },
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
                Quick setup, fast results
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
              <p className="text-sm text-text-muted mb-4">
                Typical timeline: <span className="font-medium text-text-primary">3-5 business days</span> from signup to go-live
              </p>
              <p className="text-xs text-text-muted">
                Requirements: Busy software access, data export capability, WhatsApp Business number
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
                  See Busy + WhatsApp automation in action
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8">
                  Get a personalized demo of how Whats91 can automate your Busy workflows.
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
