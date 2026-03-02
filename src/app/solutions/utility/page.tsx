"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight,
  MessageCircle,
  Send,
  Package,
  FileText,
  Shield,
  CheckCircle2,
  ArrowRight,
  Clock,
  Zap,
  Lock,
  BarChart3,
  CreditCard,
  Calendar,
  Truck,
  AlertTriangle,
  Settings,
  Database,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Bot,
  RefreshCw,
  DollarSign,
  Bell,
  MapPin,
  FileCheck,
  Receipt,
  UserCheck,
  Webhook,
  Upload,
  Layers,
  TrendingUp,
  Award
} from "lucide-react";
import { useState } from "react";

// Statistics data
const utilityStats = [
  { value: "98%", label: "Open Rate", sublabel: "instant visibility" },
  { value: "< 30s", label: "Delivery Time", sublabel: "critical alerts" },
  { value: "FREE", label: "In-Window", sublabel: "24h service window" },
  { value: "₹0.12", label: "Avg Cost", sublabel: "India pricing" },
];

// Utility Categories
const utilityCategories = [
  {
    icon: Package,
    title: "Order Management",
    description: "Confirmations, cancellations, modifications",
    examples: ["Order Confirmed", "Order Cancelled", "Order Modified"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description: "Shipping alerts, tracking, delivery updates",
    examples: ["Shipped", "Out for Delivery", "Delivered"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    icon: CreditCard,
    title: "Finance & Payments",
    description: "Payment receipts, billing, refund status",
    examples: ["Payment Received", "Invoice Generated", "Refund Processed"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    icon: Calendar,
    title: "Appointments",
    description: "Reminders and schedule confirmations",
    examples: ["Appointment Confirmed", "Reminder: Tomorrow", "Rescheduled"],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    icon: Shield,
    title: "Account & Security",
    description: "Subscription renewals, activity alerts",
    examples: ["Password Changed", "Renewal Due", "Security Alert"],
    color: "bg-red-500/10 text-red-600"
  },
  {
    icon: Bell,
    title: "System Alerts",
    description: "Service updates, maintenance notices",
    examples: ["Service Restored", "Maintenance Scheduled", "Alert Resolved"],
    color: "bg-yellow-500/10 text-yellow-600"
  },
];

// Portal Features
const portalFeatures = [
  {
    icon: Webhook,
    title: "API Webhook Integration",
    description: "Trigger messages instantly from Shopify, WooCommerce, or custom CRMs with real-time event hooks.",
    features: ["Real-time Triggers", "Multi-platform", "Auto-retry Logic"]
  },
  {
    icon: Upload,
    title: "Bulk CSV/Excel Upload",
    description: "Handle bulk notifications for delayed flights or city-wide service alerts with clear header mapping.",
    features: ["Header Mapping", "Validation", "Preview Mode"]
  },
  {
    icon: Database,
    title: "Personalization Engine",
    description: "Sequential dynamic variables ({{1}}, {{2}}) to insert customer-specific data while keeping templates neutral.",
    features: ["Variable Validation", "Preview Test", "Error Detection"]
  },
  {
    icon: Layers,
    title: "Interactive Utility Buttons",
    description: "Standardize 'Track Order,' 'Confirm Appointment,' or 'Download Invoice' buttons to reduce friction.",
    features: ["Quick Actions", "Deep Links", "Callback Data"]
  },
];

// Reclassification Traps
const reclassificationTraps = [
  { 
    trigger: "Warm Greetings", 
    fails: "\"We're excited to confirm your order!\" is promotional", 
    fix: "Use neutral language: \"Your order #123 is confirmed.\"" 
  },
  { 
    trigger: "Upselling", 
    fails: "Adding \"Check out our new arrivals\" to a receipt", 
    fix: "Keep templates pure. Only include transaction info." 
  },
  { 
    trigger: "Promotional Buttons", 
    fails: "\"Shop More\" or \"Learn More\" buttons", 
    fix: "Use functional buttons like \"Track Order\" or \"View PDF.\"" 
  },
  { 
    trigger: "Vague Content", 
    fails: "\"Hi {{1}}, thank you for choosing us.\" too generic", 
    fix: "Reference specific action: \"We received your payment of {{2}}.\"" 
  },
];

// Review Scenarios
const reviewScenarios = [
  { type: "Machine-Learning Triage", trigger: "Standard transactional templates", duration: "30 min - 24 hours" },
  { type: "Human Review", trigger: "Complex variables, sensitive industries", duration: "Up to 48 hours" },
  { type: "Appeal Process", trigger: "Auto-reclassified as Marketing", duration: "60 days to appeal" },
];

// Pricing Comparison
const pricingComparison = [
  { scenario: "Inside 24h Service Window", utility: "FREE", marketing: "FREE", note: "Customer initiated" },
  { scenario: "Outside Service Window", utility: "₹0.115-0.145", marketing: "₹0.35-0.85", note: "Business initiated" },
  { scenario: "Reclassified as Marketing", utility: "₹0.35+", marketing: "₹0.35+", note: "300-800% cost spike" },
];

// Throughput Data
const throughputData = [
  { tier: "Tier 1-3", mps: "80 MPS", useCase: "Standard transactional volume" },
  { tier: "Tier 4 (Unlimited)", mps: "1,000 MPS", useCase: "Tax deadlines, mass events" },
];

// Button Types
const buttonTypes = [
  { type: "Track Order", icon: MapPin, example: "Opens tracking page or sends status" },
  { type: "View Invoice", icon: FileText, example: "Downloads PDF or opens portal" },
  { type: "Confirm Appointment", icon: Calendar, example: "Sends confirmation callback" },
  { type: "Contact Support", icon: MessageCircle, example: "Opens 24h service window" },
];

// Consent Types
const consentTypes = [
  { type: "Checkout Consent", valid: true, example: "\"I agree to receive order updates via WhatsApp\"" },
  { type: "Account Settings", valid: true, example: "Explicit toggle in user preferences" },
  { type: "Past Orders Only", valid: false, example: "Having customer's number is NOT consent" },
  { type: "Implicit Assumption", valid: false, example: "Assuming consent from previous interaction" },
];

// Developer Example
const developerExample = `curl -X POST "https://graph.facebook.com/v21.0/YOUR_PHONE_ID/messages" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "messaging_product": "whatsapp",
    "to": "919876543210",
    "type": "template",
    "template": {
      "name": "order_confirmation",
      "language": { "code": "en" },
      "components": [
        {
          "type": "body",
          "parameters": [
            { "type": "text", "text": "ORD-12345" },
            { "type": "text", "text": "₹1,499" },
            { "type": "text", "text": "March 15, 2026" }
          ]
        }
      ]
    }
  }'`;

// FAQs
const faqs = [
  { 
    q: "What's the difference between Utility and Marketing messages?", 
    a: "Utility messages are transaction-triggered and non-promotional—order confirmations, shipping alerts, payment receipts. Marketing messages are proactive promotions. Utility messages cost 70-85% less and have higher delivery priority. The key distinction: Utility = factual, expected information. Marketing = persuasive, discovery-driven content." 
  },
  { 
    q: "Why was my Utility template reclassified as Marketing?", 
    a: "Meta's AI scans for 'warm' or 'persuasive' language. Common triggers: enthusiastic greetings ('We're excited!'), upselling phrases ('Check out our new arrivals'), promotional buttons ('Shop More'), or vague content without specific transaction references. Reclassification can increase costs by 300-800%." 
  },
  { 
    q: "How long does Utility template approval take?", 
    a: "Standard transactional templates are typically approved within 30 minutes to 24 hours via machine-learning triage. Templates with complex variables or in sensitive industries (finance, healthcare) can take up to 48 hours for manual human review." 
  },
  { 
    q: "When are Utility messages FREE?", 
    a: "If a customer messages you first, any message (Utility or template) sent within the 24-hour Customer Service Window is FREE. This is why encouraging customer responses—like 'Reply for order status'—can significantly reduce messaging costs." 
  },
  { 
    q: "What is the 'time-sensitive' priority flag?", 
    a: "Through the Marketing Messages Lite API, you can flag Utility messages as 'time-sensitive.' This allows critical alerts to bypass standard marketing queues and deliver immediately, even if the recipient has reached their daily global frequency limit." 
  },
  { 
    q: "Do I need opt-in consent for Utility messages?", 
    a: "Yes. In 2026, Meta mandates traceable opt-in records. 'Consent at Checkout' (explicit checkbox) is compliant. Merely having a customer's number from a past order is NOT sufficient for proactive API messaging." 
  },
  { 
    q: "What happens if my Utility template is rejected?", 
    a: "You have 60 days to request a manual review via Meta Business Manager. Common fixes: remove promotional language, add specific transaction references, use functional buttons only. Delete rejected templates before resubmitting with corrections." 
  },
  { 
    q: "Can I use AI for Utility responses?", 
    a: "Yes, but only 'Business-Context AI' is allowed. General-purpose AI (open-ended LLM bots) is prohibited as of January 15, 2026. AI that answers 'Where is my order?' or 'How do I return this?' is fully compliant if it stays within its functional purpose." 
  },
  { 
    q: "What's the throughput for Utility messages?", 
    a: "Tiers 1-3 offer approximately 80 Messages Per Second (MPS). Tier 4 (Unlimited) accounts can scale to 1,000 MPS—ideal for massive transactional events like tax-deadline reminders or city-wide service alerts." 
  },
  { 
    q: "Does Meta charge for undelivered messages?", 
    a: "No. If a status remains 'Sent' (single gray check) because the recipient's phone is offline, Meta does not charge. You only pay for successfully delivered messages." 
  },
];

// Onboarding Steps
const onboardingSteps = [
  { step: 1, title: "Complete Meta Verification", description: "Move past Tier 0 (250 users) to unlock transactional volume" },
  { step: 2, title: "Create Neutral Templates", description: "Use factual language, specific references, functional buttons" },
  { step: 3, title: "Set Up Webhook Triggers", description: "Connect Shopify, WooCommerce, or custom CRM for automation" },
  { step: 4, title: "Test & Monitor Delivery", description: "Verify 24h service window usage, track delivery rates" },
];

// Best Practices
const bestPractices = [
  { icon: FileText, title: "Keep It Neutral", description: "Cold, factual language prevents reclassification" },
  { icon: RefreshCw, title: "Maximize Free Window", description: "Encourage replies to utilize 24h service window" },
  { icon: Clock, title: "Set Time-Sensitive Flag", description: "Critical alerts bypass marketing queues" },
  { icon: Lock, title: "Maintain Consent Records", description: "Traceable opt-ins required for audits" },
];

export default function WhatsAppUtilityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCode, setShowCode] = useState(false);

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
                  <Award className="h-3.5 w-3.5" />
                  Official Meta Tech Partner
                </div>
                
                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-5">
                  Enterprise WhatsApp Utility Messaging
                </h1>
                
                {/* Subheadline */}
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  The critical nervous system of enterprise-customer relations. Transaction-triggered, non-promotional messaging with 98% open rates and 70-85% lower costs than marketing.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/25 group"
                  >
                    Access Utility Portal
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-7 text-base font-semibold rounded-xl border-border/80 hover:bg-surface"
                  >
                    View API Docs
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {["Per-Message Billing", "Time-Sensitive Priority", "24h Free Window"].map((badge, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs sm:text-sm text-text-muted bg-white/80 px-3 py-1.5 rounded-full border border-border/50">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {utilityStats.map((stat, index) => (
                  <div 
                    key={index}
                    className="group rounded-2xl border border-border/60 bg-white p-5 sm:p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-brand-primary/20"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-text-primary mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-text-muted">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Qualifies as Utility */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <FileCheck className="h-3.5 w-3.5" />
                Core Taxonomy
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                What Qualifies as "Utility" in 2026?
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Utility messages are strictly <strong>transaction-triggered</strong> and <strong>non-promotional</strong>. 
                Understanding these categories prevents costly classification errors.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {utilityCategories.map((category, index) => (
                <div 
                  key={index}
                  className="group rounded-xl border border-border/60 bg-white p-5 transition-all duration-300 hover:shadow-lg hover:border-brand-primary/20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${category.color} transition-transform duration-300 group-hover:scale-110`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-semibold text-text-primary">{category.title}</h4>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">{category.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.examples.map((ex, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-surface text-xs text-text-muted">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portal Features */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Settings className="h-3.5 w-3.5" />
                Portal Capabilities
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Tools for High-Volume Transactional Flows
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {portalFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-brand-primary/20"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary mb-5 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-text-secondary mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.features.map((f, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-brand-primary/5 text-xs font-medium text-brand-primary">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reclassification Trap - Critical Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-red-50/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 border border-red-200 px-4 py-1.5 text-xs sm:text-sm font-medium text-red-700 mb-4">
                <AlertTriangle className="h-3.5 w-5.5" />
                Critical Warning
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                The Utility-to-Marketing Reclassification Trap
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Meta&apos;s AI scans for &quot;warm&quot; or &quot;persuasive&quot; language. If reclassified, costs can increase by 
                <span className="font-bold text-red-600"> 300-800%</span> immediately.
              </p>
            </div>

            <div className="rounded-2xl border border-red-200 bg-white overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-red-50">
                    <th className="text-left p-4 text-xs font-semibold text-red-800 uppercase">Trigger</th>
                    <th className="text-left p-4 text-xs font-semibold text-red-800 uppercase">Why It Fails</th>
                    <th className="text-left p-4 text-xs font-semibold text-red-800 uppercase">Corrected Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {reclassificationTraps.map((row, i) => (
                    <tr key={i} className="border-t border-red-100">
                      <td className="p-4 text-sm font-medium text-red-700">{row.trigger}</td>
                      <td className="p-4 text-sm text-text-secondary">{row.fails}</td>
                      <td className="p-4 text-sm text-green-700 font-medium">{row.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-5 text-center">
              <p className="text-sm text-yellow-800">
                <strong>Pro Tip:</strong> Neutrality is Profit. Cold, factual language is the key to maintaining low Utility pricing tiers.
              </p>
            </div>
          </div>
        </section>

        {/* Review Process */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Meta Review Cycles & Approval Norms
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                2026 approval process for Utility templates is more stringent than Marketing
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {reviewScenarios.map((item, i) => (
                <div 
                  key={i}
                  className="rounded-xl border border-border/60 bg-white p-5 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary mb-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">{item.type}</h4>
                  <p className="text-sm text-text-secondary mb-2">{item.trigger}</p>
                  <div className="text-lg font-bold text-brand-primary">{item.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <DollarSign className="h-3.5 w-3.5" />
                Pricing Logic
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Utility vs Marketing Pricing (India)
              </h2>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface/80">
                    <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Scenario</th>
                    <th className="text-center p-4 text-xs font-semibold text-brand-primary uppercase">Utility</th>
                    <th className="text-center p-4 text-xs font-semibold text-text-muted uppercase">Marketing</th>
                    <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingComparison.map((row, i) => (
                    <tr key={i} className="border-t border-border/60">
                      <td className="p-4 text-sm text-text-primary font-medium">{row.scenario}</td>
                      <td className="p-4 text-sm text-center font-bold text-brand-primary">{row.utility}</td>
                      <td className="p-4 text-sm text-center text-text-muted">{row.marketing}</td>
                      <td className="p-4 text-sm text-text-secondary">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-xl border border-brand-primary/20 bg-brand-primary/5 p-5 text-center">
              <p className="text-sm text-text-secondary">
                <strong className="text-brand-primary">24h Service Window:</strong> If a customer messages you first, 
                any message sent within 24 hours is <strong>FREE</strong>. Encourage customer responses to maximize this window.
              </p>
            </div>
          </div>
        </section>

        {/* Delivery Behavior */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Delivery Behavior & Throughput
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {/* Throughput Table */}
              <div className="rounded-2xl border border-border/60 bg-white overflow-hidden">
                <div className="p-5 bg-surface/50 border-b border-border/60">
                  <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                    <Zap className="h-5 w-5 text-brand-primary" />
                    Messages Per Second
                  </h3>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/40">
                      <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Tier</th>
                      <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">MPS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {throughputData.map((row, i) => (
                      <tr key={i} className="border-b border-border/20 last:border-0">
                        <td className="p-4 text-sm text-text-primary font-medium">{row.tier}</td>
                        <td className="p-4 text-sm text-brand-primary font-bold">{row.mps}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Time-Sensitive Flag */}
              <div className="rounded-2xl border border-brand-primary/20 bg-brand-primary/5 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Time-Sensitive Priority Flag</h3>
                <p className="text-sm text-text-secondary mb-3">
                  Through the Marketing Messages Lite API, flag Utility messages as &quot;time-sensitive&quot; to bypass 
                  marketing queues and deliver immediately—even if the recipient has reached their daily frequency limit.
                </p>
                <p className="text-xs text-text-muted">
                  Ideal for: OTP alternatives, security alerts, critical updates
                </p>
              </div>
            </div>

            {/* Handset Delays */}
            <div className="rounded-xl border border-border/60 bg-white p-5 text-center">
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">Handset Delays:</strong> If status remains &quot;Sent&quot; (single gray check), 
                the recipient&apos;s phone is likely offline. Meta does <strong>not charge</strong> for undelivered messages.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Buttons */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Layers className="h-3.5 w-3.5" />
                Interactive Elements
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Utility Button Standards
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Use functional buttons only. Avoid promotional CTAs like &quot;Shop More&quot; or &quot;Learn More.&quot;
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {buttonTypes.map((btn, index) => (
                <div 
                  key={index}
                  className="group rounded-xl border border-border/60 bg-white p-5 text-center transition-all duration-300 hover:shadow-md hover:border-brand-primary/20"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-3 transition-transform duration-300 group-hover:scale-110">
                    <btn.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">{btn.type}</h4>
                  <p className="text-xs text-text-secondary">{btn.example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consent Requirements */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <UserCheck className="h-3.5 w-3.5" />
                Compliance
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Mandatory Consent Requirements
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                2026 Meta mandates traceable opt-in records for all proactive messaging
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {consentTypes.map((item, i) => (
                <div 
                  key={i}
                  className={`flex items-start gap-4 rounded-xl border p-5 ${item.valid ? 'border-green-200 bg-green-50/50' : 'border-red-200 bg-red-50/50'}`}
                >
                  {item.valid ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-text-primary">{item.type}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded ${item.valid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {item.valid ? 'Valid' : 'Invalid'}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary">{item.example}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Policy Update */}
            <div className="mt-8 rounded-xl border border-yellow-200 bg-yellow-50 p-5">
              <div className="flex items-start gap-3">
                <Bot className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-yellow-800 mb-1">2026 AI Policy Update</h4>
                  <p className="text-sm text-yellow-700">
                    <strong>January 15, 2026:</strong> General-purpose AI (open-ended LLM bots) is prohibited. 
                    Only &quot;Business-Context AI&quot; is allowed—for answering &quot;Where is my order?&quot; or &quot;How do I return this?&quot; 
                    within functional purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Database className="h-3.5 w-3.5" />
                Developer Sandbox
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Sample Utility Template Request
              </h2>
            </div>

            <div className="rounded-xl border border-border/60 bg-[#0F172A] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="text-xs text-slate-400 ml-2 font-mono">utility-template.sh</span>
                </div>
                <button 
                  onClick={() => setShowCode(!showCode)}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  {showCode ? 'Collapse' : 'Expand'}
                </button>
              </div>
              <pre className={`p-4 text-xs sm:text-sm text-slate-300 overflow-x-auto font-mono leading-relaxed ${showCode ? '' : 'max-h-32'}`}>
                {developerExample}
              </pre>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-text-secondary">
                Template name: <code className="px-2 py-0.5 rounded bg-surface text-brand-primary font-mono">order_confirmation</code>
                {" "} with 3 body parameters: Order ID, Amount, Date
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Strategic Best Practices
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {bestPractices.map((item, i) => (
                <div 
                  key={i}
                  className="group rounded-xl border border-border/60 bg-white p-5 text-center transition-all duration-300 hover:shadow-md hover:border-brand-primary/20"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">{item.title}</h4>
                  <p className="text-xs text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Setup Steps */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Quick Start Guide
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
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
            <div className="text-center mb-10">
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
                  Start sending reliable transactional alerts today
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8">
                  Join 500+ enterprises using Whats91 for high-delivery, low-cost utility messaging.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold bg-white text-brand-primary hover:bg-white/95 rounded-xl shadow-lg group"
                  >
                    Access Utility Portal
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <ContactCard 
                    variant="popup" 
                    trigger={
                      <Button 
                        size="lg" 
                        className="h-12 px-7 text-base font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-xl"
                      >
                        Talk to Sales
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
