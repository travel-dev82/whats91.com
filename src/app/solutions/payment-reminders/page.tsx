"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { Button } from "@/components/ui/button";
import { 
  Bell,
  ChevronRight,
  Settings,
  Zap,
  Shield,
  Clock,
  Users,
  Building2,
  Factory,
  Truck as TruckIcon,
  Store,
  CheckCircle2,
  ArrowRight,
  Layers,
  Filter,
  Calendar,
  ToggleLeft,
  ToggleRight,
  FileText,
  TrendingUp,
  Target,
  ChevronDown,
  ChevronUp,
  Play,
  CreditCard,
  Banknote,
  Timer,
  AlertCircle
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
    mode: "Normal",
    icon: Calendar,
    title: "Normal Mode: Scheduled, Structured Outreach",
    description: "Run your collection strategies in the background without manual effort.",
    features: [
      { title: "Granular Scheduling", desc: "Set daily, weekly, or monthly cadences." },
      { title: "Smart Inclusion/Exclusion", desc: "Filter by outstanding amounts or exclude VIP clients." },
      { title: "Multi-Tier Routing", desc: "Distinct templates for different customer categories." },
    ]
  },
  {
    mode: "Advanced",
    icon: Zap,
    title: "Advanced Mode: Customer-Specific Intelligence",
    description: "Each customer is evaluated against their specific financial terms.",
    features: [
      { title: "Credit Limit Validation", desc: "No reminders until outstanding crosses credit limit." },
      { title: "Invoice Aging Logic", desc: "Reminders trigger only after credit period ends." },
      { title: "Smart Condition Engine", desc: "Multiple rules evaluated per customer." },
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

const industries = [
  { icon: Building2, name: "Distributors & Wholesalers", description: "High-volume invoices & collections" },
  { icon: Factory, name: "Manufacturing", description: "Complex billing & dispatch tracking" },
  { icon: TruckIcon, name: "Logistics & Transport", description: "Bilty tracking & delivery updates" },
  { icon: Store, name: "Retail Chains", description: "Multi-location account management" },
];

const templateExamples = [
  { day: "Day 1", tone: "Polite Reminder", example: "Dear {Name}, your invoice #{BillNo} of ₹{Amount} is now due. Please arrange payment at your earliest convenience." },
  { day: "Day 15", tone: "Follow-up", example: "Dear {Name}, this is a gentle reminder for invoice #{BillNo} (₹{Amount}) now 15 days overdue." },
  { day: "Day 30", tone: "Urgent Notice", example: "Dear {Name}, invoice #{BillNo} (₹{Amount}) is 30 days overdue. Immediate attention required." },
  { day: "Day 45", tone: "Final Notice", example: "Dear {Name}, final notice for invoice #{BillNo}. Please clear ₹{Amount} to avoid service disruption." },
];

const faqs = [
  { 
    q: "Who is this system built for?", 
    a: "The Whats91 Payment Reminder system is engineered specifically for distributors, wholesalers, manufacturers, transport businesses, and multi-company operations utilizing Busy ERP who want to automate their collections process with intelligent, rule-based WhatsApp reminders." 
  },
  { 
    q: "How is this different from bulk WhatsApp messaging?", 
    a: "This is NOT bulk messaging. Our system evaluates each customer against their specific credit limits, invoice aging, and company segmentation before sending any reminder. It's a controlled financial workflow, not a blast tool." 
  },
  { 
    q: "Can I run the system immediately instead of waiting for a schedule?", 
    a: "Yes. You can run reminders on a fully automated schedule (daily, weekly, monthly), or trigger immediate, on-demand executions for specific customer sets through the dashboard." 
  },
  { 
    q: "Is it safe to connect with my Busy ERP data?", 
    a: "Yes. The system operates on secure, role-based access with controlled execution. Full logic validation occurs before any data or message is dispatched. We follow data minimization principles." 
  },
  { 
    q: "What happens if a customer has a ₹1,00,000 credit limit?", 
    a: "The system remains silent until their outstanding amount explicitly crosses ₹1,00,000. No unnecessary friction with customers who are within their agreed terms." 
  },
  { 
    q: "Can I customize message templates?", 
    a: "Yes. Map dynamic placeholders (Customer Name, Amount, Bill No., Due Date) into custom templates. Set different tones for different stages—polite reminders for Day 1, strong notices for Day 45." 
  },
  { 
    q: "How does company-wise data isolation work?", 
    a: "If you manage multiple companies within Busy ERP, Whats91 keeps them strictly separated. Distinct reminder rules, schedules, and message templates for every individual company. Zero data mixing." 
  },
  { 
    q: "Do customers need to opt-in for WhatsApp reminders?", 
    a: "Yes. For proactive outbound messages, customers must opt-in. We ensure all messages comply with WhatsApp Business Platform policies using approved message templates." 
  },
];

const onboardingSteps = [
  { step: 1, title: "Connect WhatsApp Cloud API", description: "Set up your official WhatsApp Business account" },
  { step: 2, title: "Configure Reminder Rules", description: "Define credit limits, aging thresholds, and customer groups" },
  { step: 3, title: "Approve Message Templates", description: "Review and customize tone for each reminder stage" },
  { step: 4, title: "Go Live & Automate", description: "Start intelligent collections on autopilot" },
];

export default function PaymentRemindersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeMode, setActiveMode] = useState<"Normal" | "Advanced">("Advanced");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        
        {/* Hero Section - High Contrast */}
        <section className="relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24 bg-slate-900">
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-brand-accent/10 to-transparent" />

          <div className="relative px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-center">
              
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/20 border border-brand-primary/30 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-accent mb-5">
                  <Bell className="h-3.5 w-3.5" />
                  Intelligent Payment Reminders
                </div>
                
                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
                  India's Most Advanced WhatsApp Payment Reminder System for Busy ERP
                </h1>
                
                {/* Subheadline */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  <span className="text-white font-semibold">Stop chasing payments manually.</span> Control your collections intelligently with rule-based WhatsApp reminders.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold rounded-xl bg-brand-primary text-white hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/30 group"
                  >
                    Schedule a System Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-7 text-base font-semibold rounded-xl border-slate-600 text-white hover:bg-slate-800 hover:text-white"
                  >
                    Request Setup Consultation
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {["Rule-Based Logic", "Credit Limit Validation", "Company-Wise Isolation"].map((badge, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Logic Engine Visual */}
              <div className="relative">
                <div className="rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/20 text-brand-primary">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">Logic Engine</h3>
                      <p className="text-xs text-slate-400">Real-time validation sequence</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {validationSteps.map((step, i) => (
                      <div 
                        key={step.step}
                        className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 border border-slate-700/50"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-xs font-bold">
                          {step.step}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{step.title}</p>
                          <p className="text-xs text-slate-400 truncate">{step.desc}</p>
                        </div>
                        {i < validationSteps.length - 1 && (
                          <ChevronRight className="h-4 w-4 text-slate-500" />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-3 rounded-lg bg-brand-primary/10 border border-brand-primary/20">
                    <p className="text-xs text-center text-brand-accent font-medium">
                      Only mathematically eligible customers receive alerts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Answer Target - Core Value */}
        <section className="py-10 sm:py-12 bg-brand-primary/5 border-y border-brand-primary/10">
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
                  className="group rounded-2xl border border-border/60 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-text-secondary mb-3">{item.description}</p>
                  <p className="text-xs text-text-muted leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Execution Modes - Deep Dive */}
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

            {/* Mode Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-xl bg-surface border border-border/60 p-1">
                {["Normal", "Advanced"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setActiveMode(mode as "Normal" | "Advanced")}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeMode === mode
                        ? "bg-brand-primary text-white shadow-md"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {mode} Mode
                  </button>
                ))}
              </div>
            </div>

            {/* Mode Content */}
            <div className="grid lg:grid-cols-2 gap-8">
              {executionModes.map((mode) => (
                <div 
                  key={mode.mode}
                  className={`rounded-2xl border transition-all duration-300 ${
                    activeMode === mode.mode 
                      ? "border-brand-primary/30 bg-white shadow-xl ring-1 ring-brand-primary/10" 
                      : "border-border/60 bg-white/50 opacity-60"
                  } p-6 sm:p-8`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      activeMode === mode.mode ? "bg-brand-primary text-white" : "bg-surface text-text-muted"
                    }`}>
                      <mode.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          mode.mode === "Advanced" ? "bg-brand-primary/10 text-brand-primary" : "bg-surface text-text-muted"
                        }`}>
                          {mode.mode === "Advanced" ? "Recommended" : "Standard"}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-text-primary">{mode.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-text-secondary mb-5">{mode.description}</p>
                  
                  <div className="space-y-3">
                    {mode.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-text-primary">{feature.title}</p>
                          <p className="text-xs text-text-muted">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Advanced Mode Examples */}
            <div className="mt-10 rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
                <Zap className="h-5 w-5 text-brand-primary" />
                Advanced Mode: Real-World Examples
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-brand-primary/5 border border-brand-primary/10">
                  <p className="text-sm font-semibold text-text-primary mb-2">Example A: Credit Limit Validation</p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    If a client has a <span className="font-medium text-text-primary">₹1,00,000 credit limit</span>, the system remains silent until their outstanding amount explicitly crosses ₹1,00,000. <span className="text-brand-primary font-medium">No unnecessary friction.</span>
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-brand-primary/5 border border-brand-primary/10">
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

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Company-Wise Isolation */}
              <div className="rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Company-Wise Data Isolation</h3>
                </div>
                <p className="text-sm text-text-secondary mb-4">
                  If you manage multiple companies within Busy ERP, Whats91 keeps them strictly separated.
                </p>
                <ul className="space-y-2">
                  {[
                    "Distinct reminder rules per company",
                    "Separate schedules for each business unit",
                    "Unique message templates per entity",
                    "Zero data mixing between companies"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Custom Template Mapping */}
              <div className="rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Custom Template Mapping</h3>
                </div>
                <p className="text-sm text-text-secondary mb-4">
                  Control your tone with dynamic placeholders: <span className="font-mono text-xs bg-surface px-1 rounded">{"{Name}"}</span>, <span className="font-mono text-xs bg-surface px-1 rounded">{"{Amount}"}</span>, <span className="font-mono text-xs bg-surface px-1 rounded">{"{BillNo}"}</span>, <span className="font-mono text-xs bg-surface px-1 rounded">{"{DueDate}"}</span>
                </p>
                <div className="space-y-2">
                  {templateExamples.slice(0, 3).map((template) => (
                    <div key={template.day} className="flex items-center gap-3 p-2 rounded-lg bg-surface/50">
                      <span className="text-xs font-medium text-brand-primary w-16">{template.day}</span>
                      <span className="text-xs text-text-muted">{template.tone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* System Validation Sequence */}
            <div className="mt-8 rounded-2xl border border-border/60 bg-slate-900 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-2">System Validation Sequence</h3>
              <p className="text-sm text-slate-400 mb-6">Every message must pass strict validation before dispatch</p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {validationSteps.map((step, i) => (
                  <div key={step.step} className="relative">
                    <div className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-white text-sm font-bold mb-3">
                        {step.step}
                      </div>
                      <p className="text-sm font-medium text-white mb-1">{step.title}</p>
                      <p className="text-xs text-slate-400">{step.desc}</p>
                    </div>
                    {i < validationSteps.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute top-1/2 -right-2 h-4 w-4 text-brand-primary -translate-y-1/2" />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-center">
                <p className="text-sm text-brand-accent font-medium">
                  Result: Only mathematically eligible customers receive an automated WhatsApp alert
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Built For
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

        {/* Quick Setup */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Quick Setup, Fast Results
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

        {/* AI-Optimized FAQ */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-text-muted">Optimized for AI search and voice queries</p>
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
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 p-7 sm:p-8 md:p-12 lg:p-16 shadow-xl">
              
              {/* Background Decorations */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-brand-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-1/2 -left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-brand-accent/20 rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  Automate Your Busy ERP Collections Today
                </h2>
                <p className="text-base sm:text-lg text-slate-300 mb-8">
                  Stop letting outstanding payments drain your operational time. Let Whats91 upgrade your workflow with intelligent, automated follow-ups.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold bg-brand-primary text-white hover:bg-brand-primary-hover rounded-xl shadow-lg group"
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
