"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Bot,
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
  MessageCircle,
  Clock,
  Users,
  Building2,
  Factory,
  Truck as TruckIcon,
  Store,
  Pill,
  Car,
  Package,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  Target,
  Brain,
  Send,
  AlertTriangle,
  Timer,
  Briefcase,
  IndianRupee,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// Core Features
const coreFeatures = [
  {
    icon: Bot,
    title: "Autonomous AI Agent",
    description: "Goal-oriented AI that understands customer intent and negotiates payment terms autonomously using NLP.",
    detail: "Not a basic chatbot—recovers payments 24/7 without human intervention."
  },
  {
    icon: RefreshCw,
    title: "10-Minute Sync Engine",
    description: "Real-time synchronization with Busy ERP ensures the AI always has the latest invoice and ledger data.",
    detail: "Invoice saved in Busy → Customer receives it on WhatsApp within seconds."
  },
  {
    icon: MessageCircle,
    title: "WhatsApp-Native Recovery",
    description: "98% message open rate via WhatsApp Business API with native UPI payment integration.",
    detail: "One-click payment directly in chat—no app switching, no drop-off."
  },
  {
    icon: Brain,
    title: "Intelligent Negotiation",
    description: "AI-powered negotiation for long-overdue accounts within pre-approved parameters set by the business.",
    detail: "Offers settlement plans, installment options, and dynamic discounting."
  },
];

// The Four Pillars
const fourPillars = [
  { icon: Database, title: "Perception Module", desc: "Monitors Busy ERP for invoices, payment deadlines, and customer queries" },
  { icon: Brain, title: "Reasoning Engine", desc: "Analyzes intent, predicts optimal actions, and decides negotiation strategies" },
  { icon: Send, title: "Actuator Layer", desc: "Executes WhatsApp messages, generates PDFs, triggers UPI payment links" },
  { icon: TrendingUp, title: "Learning Loop", desc: "Refines behavior based on response rates and industry-specific patterns" },
];

// Comparison Data
const comparisonData = [
  { feature: "Logic Structure", traditional: "Fixed conversation paths", aiAgent: "Dynamic responses" },
  { feature: "Failure Tolerance", traditional: "Breaks on variation", aiAgent: "Handles natural language" },
  { feature: "User Interface", traditional: '"Press 1 for Statement"', aiAgent: '"Just tell me what you need"' },
  { feature: "Negotiation", traditional: "None (Binary choices)", aiAgent: "AI-powered negotiation" },
  { feature: "Context Memory", traditional: "None", aiAgent: "Multi-day conversation context" },
];

// Payment Recovery Phases
const recoveryPhases = [
  {
    phase: 1,
    title: "Preventive Reminder",
    timing: "3 Days Before Due",
    narrative: "Hi [Name], this is your assistant from [Company]. I noticed invoice [Number] is due in three days. Would you like me to send a secure payment link now?",
    goal: "Prevent technical delinquency"
  },
  {
    phase: 2,
    title: "Due Date Nudge",
    timing: "Day Zero",
    narrative: "Good morning! Today is the due date for [Invoice]. To make it easy, you can click below to pay natively on WhatsApp via UPI.",
    goal: "Remove all payment barriers"
  },
  {
    phase: 3,
    title: "Consultative Follow-up",
    timing: "3-15 Days Past Due",
    narrative: "Hi [Name], we noticed the balance is still open. Did something come up? I can offer a split payment plan if that helps your cash flow.",
    goal: "Problem-solving approach"
  },
  {
    phase: 4,
    title: "Dynamic Negotiation",
    timing: "30+ Days Past Due",
    narrative: "To regularize your account, I'm authorized to waive the late interest if paid by tomorrow. Alternatively, we can split this into 3 monthly installments.",
    goal: "Settlement within approved parameters"
  },
];

// Industry Applications
const industryApplications = [
  {
    icon: Pill,
    name: "Pharmaceuticals",
    busyFeature: "Batch/Expiry Tracking",
    aiAgentValue: "Prioritizes recovery for near-expiry batches; verifies drug licenses before payment links",
    tags: ["FEFO Compliance", "License Check"]
  },
  {
    icon: Package,
    name: "FMCG",
    busyFeature: "Scheme/Offer Logic",
    aiAgentValue: "Applies volume discounts and schemes to ledger during recovery conversations",
    tags: ["Scheme Sync", "Volume Pricing"]
  },
  {
    icon: Car,
    name: "Auto Parts",
    busyFeature: "Multi-Godown Management",
    aiAgentValue: "Checks warehouse stock during recovery; offers to ship parts upon settlement",
    tags: ["Stock Check", "Cross-sell"]
  },
  {
    icon: Store,
    name: "Garments & Retail",
    busyFeature: "Variant Inventory",
    aiAgentValue: "Personalizes upsell suggestions based on size/color preferences during recovery",
    tags: ["Variant Sync", "Upsell"]
  },
  {
    icon: Factory,
    name: "Chemical",
    busyFeature: "Batch-wise Costing",
    aiAgentValue: "Calculates landed costs and batch-specific pricing for B2B negotiations",
    tags: ["Batch Costing", "Excise"]
  },
  {
    icon: TruckIcon,
    name: "Distribution",
    busyFeature: "Multi-Location Tracking",
    aiAgentValue: "Real-time stock visibility across warehouses during payment conversations",
    tags: ["Multi-location", "Stock Allocation"]
  },
];

// ROI Metrics
const roiMetrics = [
  { metric: "Message Open Rate", manual: "20-42% (Email/SMS)", aiAgent: "98% (WhatsApp)", improvement: "2.3x Higher" },
  { metric: "Payment Speed (DSO)", manual: "30-45 Days", aiAgent: "15-20 Days", improvement: "50% Faster" },
  { metric: "Recovery Rate", manual: "70-80%", aiAgent: "99.9%", improvement: "20-30% Higher" },
  { metric: "Payment Conversion", manual: "10% (Email)", aiAgent: "45-60% (WhatsApp)", improvement: "5x Better" },
  { metric: "Support Overhead", manual: "100% Manual", aiAgent: "40-50% Reduced", improvement: "Half the Work" },
];

// SME Savings Analysis
const smeSavings = [
  { component: "Labor Time (Follow-ups & Reporting)", manual: "₹18,75,000", automated: "₹14,06,250" },
  { component: "Duplicate Invoice Losses", manual: "₹1,44,000", automated: "₹1,46,448" },
  { component: "Inflated/Unverified Claims", manual: "₹6,00,000", automated: "₹6,00,000" },
  { component: "Missed GST ITC", manual: "₹2,16,000", automated: "₹2,16,000" },
];

// Security Features
const securityFeatures = [
  { icon: Lock, title: "SHA256 Validation", desc: "Every payload secured against man-in-the-middle attacks" },
  { icon: Shield, title: "256-bit Encryption", desc: "End-to-end Signal encryption for financial data" },
  { icon: Database, title: "ISO 27001 & SOC 2", desc: "Enterprise-grade security compliance" },
  { icon: Globe, title: "99.9% Uptime SLA", desc: "Cloud-based infrastructure ensures 24/7 operation" },
];

// Compliance Features
const complianceFeatures = [
  { feature: "Explicit Opt-ins", description: "Consent for WhatsApp communication collected with timestamp" },
  { feature: "Opt-out Mechanisms", description: "Clear unsubscribe option in every message" },
  { feature: "Purpose Limitation", description: "Data used only for billing and recovery as agreed" },
  { feature: "Data Portability", description: "Customers can request data via conversational interface" },
];

// API Modules
const apiModules = [
  { module: "Customer Info", capability: "Fetch contact details, GSTIN, credit limits", impact: "Personalizes outreach, prevents over-extension" },
  { module: "Ledger Info", capability: "Real-time transaction history and balances", impact: "24/7 self-service balance inquiries" },
  { module: "Bill Details", capability: "Itemized invoice data and PDFs", impact: "Answers 'What was this for?' without human help" },
  { module: "Payment Status", capability: "Monitor reconciliation of incoming funds", impact: "Stops reminders upon payment, preserves relationships" },
];

// FAQs
const faqs = [
  { q: "How is this different from a basic WhatsApp notification bot?", a: "Traditional bots follow fixed 'if-this-then-that' rules and break when customers respond with variations. Our AI Agent uses Natural Language Processing (NLP) to understand intent, maintain context across multiple days, negotiate payment terms, and execute multi-step actions autonomously. It's a goal-oriented digital employee, not a script." },
  { q: "What happens when a customer disputes an invoice during recovery?", a: "The AI Agent uses sentiment analysis to recognize a 'Dispute' versus a 'Refusal to Pay.' It can automatically query Busy inventory to check for replacement orders, or escalate to customer support with full chat history. Complex disputes are seamlessly transferred to human agents with zero context loss." },
  { q: "Can the AI Agent offer discounts or settlement terms?", a: "Yes. The business owner pre-configures approved negotiation parameters in Busy (e.g., 'waive up to 5% interest for payments within 24 hours' or 'offer 3-month installments for accounts 30+ days overdue'). The AI Agent operates within these boundaries, dynamically negotiating based on the customer's response and payment history." },
  { q: "How does the 10-minute sync work with Busy ERP?", a: "Our sync engine connects to your Busy database (local or cloud) every 10 minutes, pulling invoice updates, payment records, and ledger changes. This ensures the AI Agent always has current data. When an invoice is saved in Busy, the customer receives it on WhatsApp within seconds." },
  { q: "What payment methods can customers use via WhatsApp?", a: "Customers can pay via native UPI directly in the WhatsApp chat window. We configure your UPI VPA ID in Meta Business Manager, enabling one-click payments without leaving the chat. This eliminates the 40-50% drop-off caused by app switching and beneficiary adding." },
  { q: "Is this compliant with the DPDP Act 2023?", a: "Absolutely. The platform enforces all four DPDP pillars: explicit opt-ins with timestamps, clear opt-out mechanisms, purpose limitation (billing/recovery only), and data portability. Every recovery message includes an unsubscribe option, protecting your business's WhatsApp quality rating." },
  { q: "What's the typical ROI for an Indian SME?", a: "For a mid-sized SME with ₹10 Crore turnover and 300 monthly invoices, manual recovery costs approximately ₹80,000/month (staff time, errors, DSO interest). With the AI Agent, net savings are ₹55,000/month or ₹6.6 Lakhs annually—conservative estimate excluding the 10-15% conversion increase on long-overdue debts. Median ROI is 150% in the first year." },
  { q: "Can multiple companies in Busy use the AI Agent?", a: "Yes. The platform supports multi-company configurations with strict data isolation. Each company can have customized recovery workflows, negotiation parameters, and branding. A single dashboard provides the business owner visibility across all entities." },
];

// Industries for "Who this is for"
const industries = [
  { icon: Building2, name: "Distributors & Wholesalers", description: "High-volume receivables management" },
  { icon: Factory, name: "Manufacturing", description: "Complex invoice and credit tracking" },
  { icon: TruckIcon, name: "Logistics & Transport", description: "Bilty and payment coordination" },
  { icon: Store, name: "Retail Chains", description: "Multi-location AR management" },
];

export default function BusyAIAgentPage() {
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
                  <Bot className="h-3.5 w-3.5" />
                  AI-Powered Payment Recovery for Busy ERP
                </div>

                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-5">
                  Turn Busy ERP into an Autonomous Recovery Engine
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  <span className="font-semibold text-text-primary">98% Open Rate | 50% Faster Payments | AI Negotiation</span>
                </p>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  The first AI Agent for Busy Accounting Software that autonomously recovers payments via WhatsApp. Goal-oriented NLP, native UPI payments, and 10-minute ERP sync transform your receivables from a manual burden into a 24/7 revenue engine.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
                  <Button
                    size="lg"
                    className="h-12 px-7 text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/25 group"
                    asChild
                  >
                    <Link href="/contact">
                      Book a Demo
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-7 text-base font-semibold rounded-xl border-border/80 hover:bg-surface"
                  >
                    See ROI Calculator
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {["98% Open Rate", "50% DSO Reduction", "DPDP Compliant"].map((badge, i) => (
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
                  {/* Mock Recovery Dashboard */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-border/60">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-brand-primary" />
                        </div>
                        <span className="font-semibold text-sm text-text-primary">AI Recovery Agent</span>
                      </div>
                      <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">Active</Badge>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-surface/50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-brand-primary">₹4.2L</p>
                        <p className="text-xs text-text-muted">Recovered Today</p>
                      </div>
                      <div className="bg-surface/50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-green-600">89%</p>
                        <p className="text-xs text-text-muted">Success Rate</p>
                      </div>
                      <div className="bg-surface/50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-blue-600">127</p>
                        <p className="text-xs text-text-muted">Active Chats</p>
                      </div>
                    </div>

                    {/* Live Chat Preview */}
                    <div className="rounded-lg border border-border/60 p-3 space-y-2">
                      <p className="text-xs font-medium text-text-secondary mb-2">Live Conversation</p>
                      <div className="space-y-2">
                        <div className="bg-gray-100 rounded-lg p-2 text-xs text-text-secondary max-w-[80%]">
                          What&apos;s my outstanding balance?
                        </div>
                        <div className="bg-brand-primary/10 rounded-lg p-2 text-xs text-text-primary max-w-[80%] ml-auto">
                          Your current outstanding is ₹77,000. Would you like a payment link?
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-green-50 text-xs">
                        <IndianRupee className="h-4 w-4 text-green-600" />
                        <span className="text-green-700">UPI Payment Received</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-surface/50 text-xs">
                        <MessageCircle className="h-4 w-4 text-brand-primary" />
                        <span className="text-text-secondary">AI Negotiating...</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-3 sm:bottom-4 sm:-right-4 bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg flex items-center gap-1.5">
                  <Brain className="h-3.5 w-3.5" />
                  AI-Powered Negotiation
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
                The Strategic Bridge Between Busy ERP and Autonomous Cash Collection
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                For over three decades, <span className="font-semibold text-text-primary">Busy Accounting Software</span> has powered 350,000+ Indian SMEs with robust back-office operations. But the &quot;last mile&quot;—actually collecting the cash—has remained a manual bottleneck. <span className="font-semibold text-brand-primary">Our AI Agent transforms Busy from a passive database into a proactive recovery engine</span> that engages customers on WhatsApp, understands their intent, negotiates terms, and collects payments autonomously.
              </p>
            </div>
          </div>
        </section>

        {/* The Crisis of Manual Recovery */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 border border-red-200 px-4 py-1.5 text-xs sm:text-sm font-medium text-red-700 mb-4">
                <AlertTriangle className="h-3.5 w-3.5" />
                The Cost of Manual Recovery
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                The Economic Crisis of Manual Debt Collection
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Manual recovery processes are approximately 70% more expensive than automated alternatives. For a 50-employee firm, staff waste 120 hours annually on payment follow-ups.
              </p>
            </div>

            {/* ROI Table */}
            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden shadow-lg overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-surface border-b border-border/60">
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">ROI Component</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-red-600">Annual Manual Cost</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-green-600">Annual Automated Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {smeSavings.map((row, i) => (
                    <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface/30 transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-medium text-text-primary">{row.component}</td>
                      <td className="px-4 sm:px-6 py-4 text-red-600">{row.manual}</td>
                      <td className="px-4 sm:px-6 py-4 text-green-600 font-medium">{row.automated}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-brand-primary/5">
                    <td className="px-4 sm:px-6 py-4 font-bold text-text-primary">Total Annual Impact</td>
                    <td className="px-4 sm:px-6 py-4 font-bold text-red-600">₹28,35,000</td>
                    <td className="px-4 sm:px-6 py-4 font-bold text-green-600">₹23,68,698 Saved</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Cash Flow Fog Warning */}
            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-1">The Cash Flow Fog</p>
                  <p className="text-sm text-amber-700">
                    71% of small businesses lack a clear understanding of their expenses and projected inflows. Without real-time visibility and automated recovery, this leads to missed opportunities and unexpected liquidity crises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Layers className="h-3.5 w-3.5" />
                Core Platform Features
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Beyond Basic Chatbots: Agentic AI for Recovery
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                The AI Agent is given an objective—recover the payment—and uses NLP to understand intent, maintain context, and execute multi-step actions autonomously.
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

        {/* Four Pillars Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Settings className="h-3.5 w-3.5" />
                AI Agent Architecture
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                The Four Pillars of Agentic AI
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Built on four technical modules that ensure it functions as a digital employee, not a simple script.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {fourPillars.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-border/60 bg-white p-5 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
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
                Traditional Automation vs. Agentic AI
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                See how our AI Agent compares to traditional triggered systems and basic notification bots
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden shadow-lg overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-surface border-b border-border/60">
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Feature</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-red-600">Traditional Automation</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-brand-primary">Agentic AI (Whats91)</th>
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
                          {row.aiAgent}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Multi-Stage Recovery Workflows */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <MessageCircle className="h-3.5 w-3.5" />
                Conversational Recovery Lifecycle
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Multi-Stage Conversational Workflows
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                The agent follows lifecycle-specific logic that adapts to the age of the debt, maintaining a professional and brand-consistent tone.
              </p>
            </div>

            <div className="space-y-4">
              {recoveryPhases.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-primary/30"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex items-center gap-4 lg:w-48 shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary text-white font-bold text-lg">
                        {item.phase}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-text-primary">{item.title}</h4>
                        <p className="text-xs text-brand-primary">{item.timing}</p>
                      </div>
                    </div>
                    <div className="flex-1 bg-surface/50 rounded-xl p-4">
                      <p className="text-sm text-text-secondary italic mb-2">&quot;{item.narrative}&quot;</p>
                      <p className="text-xs text-text-muted"><strong>Goal:</strong> {item.goal}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Industry-Specific AI Applications
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                The AI Agent adapts to the nuances of various Indian industry verticals by leveraging Busy&apos;s specialized features.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {industryApplications.map((item, index) => (
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
                  <p className="text-sm text-text-secondary mb-3">{item.aiAgentValue}</p>
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

        {/* ROI Metrics */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <TrendingUp className="h-3.5 w-3.5" />
                Performance Metrics
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Organizations employing intelligent automation report a median ROI of 150% within the first year.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden shadow-lg overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-surface border-b border-border/60">
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Success Metric</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-red-600">Manual Recovery</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-brand-primary">AI Agent Recovery</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-green-600">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {roiMetrics.map((row, i) => (
                    <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface/30 transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-medium text-text-primary">{row.metric}</td>
                      <td className="px-4 sm:px-6 py-4 text-text-secondary">{row.manual}</td>
                      <td className="px-4 sm:px-6 py-4 text-brand-primary font-medium">{row.aiAgent}</td>
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
                For a mid-sized SME with <span className="font-medium text-text-primary">₹10 Crore turnover</span> and <span className="font-medium text-text-primary">300 monthly invoices</span>, net savings are estimated at <span className="font-medium text-text-primary">₹55,000/month</span> or <span className="font-medium text-text-primary">₹6.6 Lakhs annually</span>.
              </p>
            </div>
          </div>
        </section>

        {/* API Integration Modules */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Database className="h-3.5 w-3.5" />
                Deep ERP Connectivity
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                API Modules for Busy Integration
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                The Busy API allows the AI Agent to programmatically access and fetch critical data points.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-surface border-b border-border/60">
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">API Module</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Capability</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-brand-primary">Business Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {apiModules.map((row, i) => (
                    <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface/30 transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-medium text-text-primary">{row.module}</td>
                      <td className="px-4 sm:px-6 py-4 text-text-secondary">{row.capability}</td>
                      <td className="px-4 sm:px-6 py-4 text-brand-primary font-medium">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                Enterprise-Grade Protection
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Built with &quot;Privacy by Design&quot; approach, fully compliant with the Digital Personal Data Protection (DPDP) Act of 2023.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {securityFeatures.map((item, i) => (
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

            {/* DPDP Compliance */}
            <div className="mt-10 rounded-2xl border border-border/60 bg-white p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Lock className="h-5 w-5 text-brand-primary" />
                DPDP Act Compliance
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {complianceFeatures.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">{item.feature}</p>
                      <p className="text-xs text-text-secondary">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
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
                  Transform Your Receivables into Revenue
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8">
                  The AI Agent for Busy Accounting Software turns manual payment recovery into an autonomous, 24/7 competitive advantage. Book a demo to see it in action.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    size="lg"
                    className="h-12 px-7 text-base font-semibold bg-white text-brand-primary hover:bg-white/95 rounded-xl shadow-lg group"
                    asChild
                  >
                    <Link href="/contact">
                      Book a Demo
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                  <ContactCard
                    variant="popup"
                    trigger={
                      <Button
                        size="lg"
                        className="h-12 px-7 text-base font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-xl"
                      >
                        Calculate Your ROI
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
