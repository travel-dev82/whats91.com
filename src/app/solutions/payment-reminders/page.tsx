"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { AnimatedPaymentReminder } from "@/components/landing/AnimatedPaymentReminder";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight,
  Bell,
  Users,
  CreditCard,
  Timer,
  Building2,
  Factory,
  Truck as TruckIcon,
  Store,
  CheckCircle2,
  ArrowRight,
  Clock,
  Zap,
  Shield,
  Lock,
  FileCheck,
  FileText,
  Calendar,
  ChevronDown,
  ChevronUp,
  Layers
} from "lucide-react";
import { useState } from "react";

const logicFilters = [
  { icon: Users, title: "Customer-Specific Logic", description: "Individual rules for individual clients", detail: "Each customer gets evaluated against their unique terms, not a one-size-fits-all blast." },
  { icon: CreditCard, title: "Credit Limits & Periods", description: "Enforce your exact financial agreements", detail: "System validates credit limits before sending any reminder." },
  { icon: Timer, title: "Amount & Date Aging", description: "Target only specific outstanding thresholds", detail: "Filter by minimum amount, days overdue, or custom criteria." },
  { icon: Building2, title: "Company-Wise Segmentation", description: "Keep multi-company data strictly isolated", detail: "Distinct rules, schedules, and templates per company." },
];

const executionModes = [
  {
    title: "Normal Mode",
    subtitle: "Scheduled, Structured Outreach",
    icon: Calendar,
    features: [
      "Granular Scheduling: Set daily, weekly, or monthly cadences",
      "Smart Inclusion/Exclusion: Filter by outstanding amounts or exclude VIP clients",
      "Multi-Tier Routing: Distinct templates for different customer categories",
    ]
  },
  {
    title: "Advanced Mode",
    subtitle: "Customer-Specific Intelligence",
    icon: Zap,
    features: [
      "Credit Limit Validation: No reminders until outstanding crosses credit limit",
      "Invoice Aging Logic: Reminders trigger only after credit period ends",
      "Smart Condition Engine: Multiple rules evaluated per customer",
    ]
  }
];

const validationSteps = [
  { step: 1, title: "Analyze Busy Data", desc: "Real-time sync with accounting data" },
  { step: 2, title: "Evaluate Thresholds", desc: "Outstanding vs configured limits" },
  { step: 3, title: "Validate Credit Terms", desc: "Customer-level periods & limits" },
  { step: 4, title: "Apply Segmentation", desc: "Group-wise inclusion rules" },
  { step: 5, title: "Dispatch Alert", desc: "Only eligible customers receive WhatsApp" },
];

const templateExamples = [
  { day: "Day 1", tone: "Polite Reminder", color: "bg-brand-primary/10 text-brand-primary" },
  { day: "Day 15", tone: "Follow-up", color: "bg-amber-100 text-amber-700" },
  { day: "Day 30", tone: "Urgent Notice", color: "bg-orange-100 text-orange-700" },
  { day: "Day 45", tone: "Final Notice", color: "bg-red-100 text-red-700" },
];

const industries = [
  { icon: Building2, name: "Distributors & Wholesalers", description: "High-volume invoices & collections" },
  { icon: Factory, name: "Manufacturing", description: "Complex billing & dispatch tracking" },
  { icon: TruckIcon, name: "Logistics & Transport", description: "Bilty tracking & delivery updates" },
  { icon: Store, name: "Retail Chains", description: "Multi-location account management" },
];

const faqs = [
  { q: "Who is this system built for?", a: "The Whats91 Payment Reminder system is engineered specifically for distributors, wholesalers, manufacturers, transport businesses, and multi-company operations utilizing Busy ERP who want to automate their collections process with intelligent, rule-based WhatsApp reminders." },
  { q: "How is this different from bulk WhatsApp messaging?", a: "This is NOT bulk messaging. Our system evaluates each customer against their specific credit limits, invoice aging, and company segmentation before sending any reminder. It's a controlled financial workflow, not a blast tool." },
  { q: "Can I run the system immediately instead of waiting for a schedule?", a: "Yes. You can run reminders on a fully automated schedule (daily, weekly, monthly), or trigger immediate, on-demand executions for specific customer sets through the dashboard." },
  { q: "Is it safe to connect with my Busy ERP data?", a: "Yes. The system operates on secure, role-based access with controlled execution. Full logic validation occurs before any data or message is dispatched. We follow data minimization principles." },
  { q: "What happens if a customer has a credit limit?", a: "The system remains silent until their outstanding amount explicitly crosses their credit limit. No unnecessary friction with customers who are within their agreed terms." },
  { q: "Can I customize message templates?", a: "Yes. Map dynamic placeholders (Customer Name, Amount, Bill No., Due Date) into custom templates. Set different tones for different stages—polite reminders for Day 1, strong notices for Day 45." },
  { q: "How does company-wise data isolation work?", a: "If you manage multiple companies within Busy ERP, Whats91 keeps them strictly separated. Distinct reminder rules, schedules, and message templates for every individual company. Zero data mixing." },
  { q: "Do customers need to opt-in for WhatsApp reminders?", a: "Yes. For proactive outbound messages, customers must opt-in. We ensure all messages comply with WhatsApp Business Platform policies using approved message templates." },
];

const onboardingSteps = [
  { step: 1, title: "Connect WhatsApp Cloud API", description: "Set up your official WhatsApp Business account" },
  { step: 2, title: "Configure Reminder Rules", description: "Define credit limits, aging thresholds, and customer groups" },
  { step: 3, title: "Approve Message Templates", description: "Review and customize tone for each reminder stage" },
  { step: 4, title: "Go Live & Automate", description: "Start intelligent collections on autopilot" },
];

export default function PaymentRemindersPage() {
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
                  <Bell className="h-3.5 w-3.5" />
                  Intelligent Payment Reminders
                </div>
                
                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-5">
                  India's Most Advanced WhatsApp Payment Reminder System for Busy ERP
                </h1>
                
                {/* Subheadline */}
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  <span className="font-semibold text-text-primary">Stop chasing payments manually.</span> Control your collections intelligently with rule-based WhatsApp reminders.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/25 group"
                  >
                    Schedule a System Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-7 text-base font-semibold rounded-xl border-border/80 hover:bg-surface"
                  >
                    Request Setup Consultation
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {["Rule-Based Logic", "Credit Limit Validation", "Company-Wise Isolation"].map((badge, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs sm:text-sm text-text-muted bg-white/80 px-3 py-1.5 rounded-full border border-border/50">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Animated Payment Reminder Demo */}
              <AnimatedPaymentReminder />
            </div>
          </div>
        </section>

        {/* AI Answer Target - Core Value */}
        <section className="py-10 sm:py-12 bg-surface/50 border-y border-border/40">
          <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-4">
                What is the Whats91 Payment Reminder System?
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                Whats91 provides an <span className="font-semibold text-text-primary">advanced, filter-driven integration</span> for Busy Accounting Software that automates WhatsApp payment reminders based on customer-specific logic. Unlike standard automation tools, the Whats91 system evaluates <span className="font-semibold text-text-primary">credit limits, invoice aging, and company-wise segmentation</span> before triggering any communication—ensuring completely structured and professional collection strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Why Our System is Different */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Layers className="h-3.5 w-3.5" />
                Logic Engine
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Why Our System is Different: Intelligence Over Automation
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Most reminder tools send the same generic message to your entire ledger. We don't. This is not basic messaging—this is a controlled financial workflow.
              </p>
            </div>

            <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {logicFilters.map((item, index) => (
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

        {/* Execution Modes */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Two Powerful Execution Modes
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Choose between scheduled outreach or customer-specific intelligence based on your business needs
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {executionModes.map((mode, index) => (
                <div 
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-border"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary mb-5 transition-transform duration-300 group-hover:scale-110">
                    <mode.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
                    {mode.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-5">{mode.subtitle}</p>
                  <ul className="space-y-3">
                    {mode.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-text-secondary">
                        <CheckCircle2 className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Real-World Examples */}
            <div className="mt-10 rounded-2xl border border-brand-primary/20 bg-brand-primary/[0.03] p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-brand-primary" />
                Advanced Mode: Real-World Examples
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-border/60">
                  <p className="text-sm font-semibold text-text-primary mb-2">Example A: Credit Limit Validation</p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    If a client has a <span className="font-medium text-text-primary">₹1,00,000 credit limit</span>, the system remains silent until their outstanding amount crosses that limit. <span className="text-brand-primary font-medium">No unnecessary friction.</span>
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-border/60">
                  <p className="text-sm font-semibold text-text-primary mb-2">Example B: Invoice Aging Logic</p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    If a customer has a <span className="font-medium text-text-primary">strict 15-day credit period</span>, zero reminders are sent until the invoice age hits day 16. <span className="text-brand-primary font-medium">Clients hear from you only when terms are breached.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Capabilities */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Complete Control Over Financial Communication
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Company-Wise Isolation */}
              <div className="rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Company-Wise Data Isolation</h3>
                </div>
                <p className="text-sm text-text-secondary mb-4">
                  If you manage multiple companies within Busy ERP, Whats91 keeps them strictly separated.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Distinct reminder rules per company",
                    "Separate schedules for each business unit",
                    "Unique message templates per entity",
                    "Zero data mixing between companies"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-text-secondary">
                      <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Custom Template Mapping */}
              <div className="rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Custom Template Mapping</h3>
                </div>
                <p className="text-sm text-text-secondary mb-4">
                  Control your tone with dynamic placeholders: <span className="font-mono text-xs bg-surface px-1.5 py-0.5 rounded">{"{Name}"}</span>, <span className="font-mono text-xs bg-surface px-1.5 py-0.5 rounded">{"{Amount}"}</span>, <span className="font-mono text-xs bg-surface px-1.5 py-0.5 rounded">{"{BillNo}"}</span>, <span className="font-mono text-xs bg-surface px-1.5 py-0.5 rounded">{"{DueDate}"}</span>
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {templateExamples.map((template) => (
                    <div key={template.day} className="flex items-center gap-2 p-2 rounded-lg bg-surface/50">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${template.color}`}>{template.day}</span>
                      <span className="text-xs text-text-muted">{template.tone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Validation Sequence */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                System Validation Sequence
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Every message must pass strict validation before dispatch
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {validationSteps.map((item, i) => (
                <div key={item.step} className="relative">
                  <div className="rounded-xl border border-border/60 bg-white p-5 h-full text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white text-lg font-bold mb-4 shadow-md shadow-brand-primary/20 mx-auto">
                      {item.step}
                    </div>
                    <h4 className="text-base font-semibold text-text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                  {i < validationSteps.length - 1 && (
                    <ChevronRight className="hidden lg:block absolute top-1/2 -right-2.5 h-5 w-5 text-brand-primary -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-brand-primary/20 bg-brand-primary/[0.03] p-4 max-w-2xl mx-auto">
              <p className="text-sm text-text-secondary text-center">
                <span className="font-medium text-text-primary">Result:</span> Only mathematically eligible customers receive an automated WhatsApp alert
              </p>
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
                { icon: Lock, title: "Role-Based Access", desc: "Control who can send reminders" },
                { icon: FileCheck, title: "Audit Logs", desc: "Track every message dispatched" },
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
              <p className="text-sm text-text-muted">
                Typical timeline: <span className="font-medium text-text-primary">3-5 business days</span> from signup to go-live
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
                  Automate Your Busy ERP Collections Today
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8">
                  Stop letting outstanding payments drain your operational time. Let Whats91 upgrade your workflow with intelligent, automated follow-ups.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold bg-white text-brand-primary hover:bg-white/95 rounded-xl shadow-lg group"
                  >
                    Schedule a Technical Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <ContactCard 
                    variant="popup" 
                    trigger={
                      <Button 
                        size="lg" 
                        className="h-12 px-7 text-base font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-xl"
                      >
                        Request Setup Consultation
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
