"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight,
  MessageCircle,
  Send,
  Users,
  FileText,
  Shield,
  CheckCircle2,
  ArrowRight,
  Clock,
  Zap,
  Lock,
  BarChart3,
  Target,
  Layers,
  Globe,
  TrendingUp,
  AlertTriangle,
  Settings,
  Database,
  Play,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Bot,
  Video,
  Building2,
  Award,
  RefreshCw
} from "lucide-react";
import { useState } from "react";

// Statistics data
const marketingStats = [
  { value: "98%", label: "Open Rate", sublabel: "vs 20% email" },
  { value: "80%", label: "Read in 5 min", sublabel: "instant engagement" },
  { value: "45%", label: "Response Rate", sublabel: "vs <1% email" },
  { value: "10-25%", label: "Conversion Rate", sublabel: "industry leading" },
];

// Portal Features
const portalFeatures = [
  {
    icon: Users,
    title: "Bulk Contact Management",
    description: "Upload CSV/Excel with thousands of contacts. Automated country code formatting and duplicate detection ensure clean data.",
    features: ["CSV/XLSX Support", "Auto-formatting", "Duplicate Detection"]
  },
  {
    icon: FileText,
    title: "Template Management",
    description: "WYSIWYG editor for media-rich templates with headers, body text, dynamic variables, and interactive buttons.",
    features: ["Visual Editor", "Media Headers", "Dynamic Variables"]
  },
  {
    icon: Database,
    title: "CRM Integration",
    description: "Connect with existing customer databases to map fields like {{Name}}, {{City}}, {{Last_Purchase}} into placeholders.",
    features: ["Field Mapping", "Real-time Sync", "Multi-platform"]
  },
  {
    icon: Layers,
    title: "Advanced Flow Builder",
    description: "Create automated follow-up sequences for abandoned carts, restock notifications, and triggered campaigns.",
    features: ["Auto Sequences", "Triggers", "A/B Testing"]
  },
];

// Review Types Table
const reviewTypes = [
  { type: "Machine-Learning Triage", trigger: "Standard promotional language", duration: "Seconds to Minutes" },
  { type: "Manual Human Review", trigger: "Sensitive industries, new categories", duration: "Up to 48 Hours" },
];

// Template Statuses
const templateStatuses = [
  { status: "Active - Quality Pending", color: "bg-yellow-500", description: "New template, Meta monitoring initial batch" },
  { status: "Active - High Quality", color: "bg-green-500", description: "Green rating, eligible for tier upgrades" },
  { status: "Active - Medium Quality", color: "bg-orange-500", description: "Yellow warning, reduce sends" },
  { status: "Paused", color: "bg-red-500", description: "Low quality rating, 7-day warning" },
  { status: "Disabled", color: "bg-gray-500", description: "Permanently blocked after repeated violations" },
];

// Rejection Codes
const rejectionCodes = [
  { code: "TAG_CONTENT_MISMATCH", cause: "Marketing content in Utility category", fix: "Change category to Marketing" },
  { code: "INVALID_FORMAT", cause: "Non-sequential placeholders", fix: "Fix placeholder numbering (1,2,3)" },
  { code: "POLICY_VIOLATION", cause: "Restricted categories (alcohol, etc.)", fix: "Review Meta Commerce Policy" },
  { code: "NAME_REUSE", cause: "Reusing rejected template name", fix: "Use unique template name" },
];

// Messaging Tiers
const messagingTiers = [
  { tier: "Tier 0", limit: "250", requirement: "Unverified Portfolio" },
  { tier: "Tier 1", limit: "1,000", requirement: "Verified + Approved Display Name" },
  { tier: "Tier 2", limit: "10,000", requirement: "High Quality + 50% Usage in 7 Days" },
  { tier: "Tier 3", limit: "100,000", requirement: "High Quality + 50% Usage in 7 Days" },
  { tier: "Tier 4", limit: "Unlimited", requirement: "Consistent Enterprise Volume" },
];

// Channel Comparison
const channelComparison = [
  { metric: "Open Rate", whatsapp: "98%", email: "20%", sms: "45%" },
  { metric: "Response Rate", whatsapp: "45-55%", email: "< 1%", sms: "2-5%" },
  { metric: "Click-Through Rate", whatsapp: "45-60%", email: "2-5%", sms: "10-15%" },
  { metric: "Conversion Rate", whatsapp: "10-25%", email: "2-5%", sms: "3-7%" },
];

// KPIs
const kpiMetrics = [
  { name: "Delivery Rate", formula: "(Delivered / Sent) × 100", benchmark: "> 95%" },
  { name: "Read Rate", formula: "(Read / Delivered) × 100", benchmark: "> 80%" },
  { name: "Click-Through Rate", formula: "(Clicks / Read) × 100", benchmark: "> 20%" },
  { name: "Revenue Per Recipient", formula: "Revenue / Recipients", benchmark: "€2-6" },
];

// Future Trends
const futureTrends = [
  { icon: Bot, title: "Business AI Integration", description: "Context-aware AI bots for sales and support conversations" },
  { icon: Video, title: "Video-Driven Marketing", description: "Interactive video headers with product demos and CTAs" },
  { icon: Globe, title: "US Market Expansion", description: "Clearer 10DLC frameworks opening new opportunities" },
];

// FAQs
const faqs = [
  { 
    q: "How long does the Meta template review process take?", 
    a: "Most templates are approved within seconds to minutes via machine-learning triage. However, for sensitive industries or new categories, manual review can take up to 48 hours. We recommend planning campaigns with a 48-hour buffer to account for potential delays." 
  },
  { 
    q: "Why are my WhatsApp marketing messages delayed?", 
    a: "Delays can occur due to several factors: Meta's pacing mechanism for new templates, high block/report rates triggering throttling, global frequency caps (users limited to 2 marketing messages/day), or platform latency during peak periods. Check your quality rating and pacing settings." 
  },
  { 
    q: "What is Error 131049 (Saturation)?", 
    a: "This error indicates the recipient has already received the maximum allowed marketing messages (currently ~2 per day) from all brands combined. This is a global Meta limit beyond your control. Delivery will succeed when the user's daily quota resets." 
  },
  { 
    q: "How do I upgrade my messaging tier?", 
    a: "Tiers upgrade automatically when you: (1) Maintain 'High Quality' (Green) rating, and (2) Use at least 50% of your daily limit for 7 consecutive days. In 2026, Meta checks eligibility every 6 hours, allowing rapid scaling during peaks." 
  },
  { 
    q: "What happens if my template gets rejected?", 
    a: "Meta provides specific rejection codes. Common fixes include: changing the category to Marketing (TAG_CONTENT_MISMATCH), fixing placeholder numbering (INVALID_FORMAT), or reviewing content against Commerce Policy (POLICY_VIOLATION). Delete rejected templates before resubmitting with corrections." 
  },
  { 
    q: "Do I need opt-in consent for marketing messages?", 
    a: "Yes, absolutely. In 2025/2026, Meta mandates consent must be 'clear, voluntary, and traceable.' Assuming consent from previous transactions is not compliant. Use specific opt-in triggers like website checkboxes or keyword subscriptions (e.g., 'Text JOIN to subscribe')." 
  },
  { 
    q: "What is the 'Show the Door' policy?", 
    a: "Every marketing template must include an easy opt-out mechanism—typically a button or clear instruction like 'Reply STOP to unsubscribe.' Failure to honor opt-out requests is the fastest way to trigger a 'Red' quality rating and potential account suspension." 
  },
  { 
    q: "How does the 24-hour service window work?", 
    a: "When a user replies to your marketing message, a 24-hour 'service window' opens. During this window, you can send free-form messages without template approval. This is ideal for moving from broadcast to live agent or chatbot interactions." 
  },
  { 
    q: "What's the difference between Paused and Disabled templates?", 
    a: "'Paused' is a warning state when quality drops to Low—you have 7 days to improve. 'Disabled' is permanent; the template is blocked forever. If quality doesn't improve after the 7-day pause, the template becomes Disabled." 
  },
  { 
    q: "Can I send marketing messages to US numbers?", 
    a: "The US market (+1) has seen temporary pauses on marketing templates due to regulatory pressures. The situation is evolving with clearer 10DLC frameworks. Check with our support team for current US sending capabilities." 
  },
];

// Onboarding Steps
const onboardingSteps = [
  { step: 1, title: "Complete Meta Verification", description: "Business verification is mandatory for scaling beyond 250 users" },
  { step: 2, title: "Upload Clean Contact Lists", description: "CSV/XLSX with proper country codes and consent records" },
  { step: 3, title: "Create Approved Templates", description: "Build templates with opt-out buttons and dynamic variables" },
  { step: 4, title: "Launch & Monitor Quality", description: "Track delivery, read rates, and maintain Green rating" },
];

export default function WhatsAppMarketingPage() {
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
                  <Award className="h-3.5 w-3.5" />
                  Official Meta Tech Partner
                </div>
                
                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-5">
                  Enterprise WhatsApp Marketing at Scale
                </h1>
                
                {/* Subheadline */}
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  The comprehensive 2026 guide to bulk messaging, template approval, compliance, and maximizing ROI through the official WhatsApp Business API.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/25 group"
                  >
                    Access Marketing Portal
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-7 text-base font-semibold rounded-xl border-border/80 hover:bg-surface"
                  >
                    View Documentation
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {["WhatsApp Cloud API v21.0", "Meta Verified BSP", "99.9% Uptime SLA"].map((badge, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs sm:text-sm text-text-muted bg-white/80 px-3 py-1.5 rounded-full border border-border/50">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {marketingStats.map((stat, index) => (
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

        {/* Channel Comparison */}
        <section className="py-12 sm:py-16 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                WhatsApp vs Legacy Channels (2026 Benchmarks)
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full rounded-xl border border-border/60 bg-white overflow-hidden">
                <thead>
                  <tr className="bg-surface/80">
                    <th className="text-left p-4 text-sm font-semibold text-text-primary">Metric</th>
                    <th className="text-center p-4 text-sm font-semibold text-brand-primary">WhatsApp</th>
                    <th className="text-center p-4 text-sm font-semibold text-text-muted">Email</th>
                    <th className="text-center p-4 text-sm font-semibold text-text-muted">SMS</th>
                  </tr>
                </thead>
                <tbody>
                  {channelComparison.map((row, i) => (
                    <tr key={i} className="border-t border-border/60">
                      <td className="p-4 text-sm text-text-secondary font-medium">{row.metric}</td>
                      <td className="p-4 text-sm text-center font-bold text-brand-primary">{row.whatsapp}</td>
                      <td className="p-4 text-sm text-center text-text-muted">{row.email}</td>
                      <td className="p-4 text-sm text-center text-text-muted">{row.sms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                Professional-Grade Marketing Tools
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Everything you need to manage enterprise-scale WhatsApp marketing campaigns
              </p>
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

        {/* Compliance Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-red-50/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 border border-red-200 px-4 py-1.5 text-xs sm:text-sm font-medium text-red-700 mb-4">
                <AlertTriangle className="h-3.5 w-3.5" />
                Mandatory Compliance
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Meta Opt-In Requirements for 2025/2026
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="rounded-2xl border border-red-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Required Consent Standards
                </h3>
                <ul className="space-y-3">
                  {[
                    "Consent must be 'clear, voluntary, and traceable'",
                    "Specific opt-in triggers (checkboxes, keywords)",
                    "Timestamped consent records for Meta audits",
                    "No assumed consent from previous transactions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-red-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  "Show the Door" Policy
                </h3>
                <ul className="space-y-3">
                  {[
                    "Every marketing template needs opt-out button",
                    "Clear instruction: 'Reply STOP to unsubscribe'",
                    "Honor requests within 24 hours",
                    "Fastest way to Red rating = ignoring opt-outs"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-center">
              <p className="text-sm text-red-800">
                <strong>Important:</strong> Assuming consent from previous transactions is no longer compliant. 
                Use specific opt-in triggers like website checkboxes or keyword subscriptions (e.g., "Text JOIN to subscribe").
              </p>
            </div>
          </div>
        </section>

        {/* Meta Review Cycles */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Meta Template Review Process
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Understanding the two-tiered review mechanism to set correct campaign expectations
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {/* Review Types Table */}
              <div className="rounded-2xl border border-border/60 bg-white overflow-hidden">
                <div className="p-5 bg-surface/50 border-b border-border/60">
                  <h3 className="text-lg font-semibold text-text-primary">Review Types & Duration</h3>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/60">
                      <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Type</th>
                      <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviewTypes.map((row, i) => (
                      <tr key={i} className="border-b border-border/40 last:border-0">
                        <td className="p-4 text-sm text-text-primary font-medium">{row.type}</td>
                        <td className="p-4 text-sm text-brand-primary font-medium">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Template Statuses */}
              <div className="rounded-2xl border border-border/60 bg-white overflow-hidden">
                <div className="p-5 bg-surface/50 border-b border-border/60">
                  <h3 className="text-lg font-semibold text-text-primary">Template Quality Statuses</h3>
                </div>
                <div className="p-4 space-y-3">
                  {templateStatuses.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`h-3 w-3 rounded-full ${item.color} mt-1 shrink-0`} />
                      <div>
                        <div className="text-sm font-medium text-text-primary">{item.status}</div>
                        <div className="text-xs text-text-muted">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rejection Codes */}
            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden">
              <div className="p-5 bg-surface/50 border-b border-border/60">
                <h3 className="text-lg font-semibold text-text-primary">Common Rejection Codes & Fixes</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/60">
                      <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Code</th>
                      <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Underlying Cause</th>
                      <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Remediation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rejectionCodes.map((row, i) => (
                      <tr key={i} className="border-b border-border/40 last:border-0">
                        <td className="p-4 text-sm font-mono text-brand-primary font-medium">{row.code}</td>
                        <td className="p-4 text-sm text-text-secondary">{row.cause}</td>
                        <td className="p-4 text-sm text-text-primary font-medium">{row.fix}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Behavior */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Delivery Behavior & Throughput
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border/60 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Messages Per Second</h3>
                <p className="text-3xl font-bold text-brand-primary mb-2">80 MPS</p>
                <p className="text-sm text-text-secondary">Standard API connections. Tier 4 accounts can reach 1,000 MPS.</p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Template Pacing</h3>
                <p className="text-sm text-text-secondary mb-3">
                  New templates are "paced"—delivery slows if block/report rates spike in initial sends.
                </p>
                <p className="text-xs text-text-muted">Algorithmic protection, not a bug.</p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Global Frequency Cap</h3>
                <p className="text-3xl font-bold text-brand-primary mb-2">2/day</p>
                <p className="text-sm text-text-secondary">Users limited to ~2 marketing messages from ALL brands per day. Error 131049 = saturated.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Messaging Tiers */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <TrendingUp className="h-3.5 w-3.5" />
                Scaling Pathways
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Messaging Tier System
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Evaluated at Business Portfolio level with automatic 6-hour upgrade checks
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden mb-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface/80">
                    <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Tier</th>
                    <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Daily Limit</th>
                    <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {messagingTiers.map((row, i) => (
                    <tr key={i} className="border-t border-border/60">
                      <td className="p-4 text-sm text-text-primary font-medium">{row.tier}</td>
                      <td className="p-4 text-sm text-brand-primary font-bold">{row.limit}</td>
                      <td className="p-4 text-sm text-text-secondary">{row.requirement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-brand-primary/20 bg-brand-primary/5 p-5 text-center">
              <p className="text-sm text-text-secondary">
                <RefreshCw className="h-4 w-4 inline mr-2 text-brand-primary" />
                <strong className="text-text-primary">6-Hour Auto-Upgrade:</strong> Hit 50% of daily limit + maintain Green rating = automatic tier bump within 6 hours.
              </p>
            </div>
          </div>
        </section>

        {/* KPI Metrics */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <BarChart3 className="h-3.5 w-3.5" />
                Analytics
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Key Performance Indicators
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {kpiMetrics.map((kpi, index) => (
                <div 
                  key={index}
                  className="group rounded-xl border border-border/60 bg-white p-5 transition-all duration-300 hover:shadow-lg"
                >
                  <h4 className="text-base font-semibold text-text-primary mb-2">{kpi.name}</h4>
                  <p className="text-xs text-text-muted mb-3 font-mono">{kpi.formula}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-secondary">Benchmark</span>
                    <span className="text-sm font-bold text-brand-primary">{kpi.benchmark}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-border/60 bg-white p-5 text-center">
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">Note:</strong> ~15% of reads are unmeasurable due to user privacy settings. 
                A "measurable" 80% read rate often reflects a "real" 95% actual engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Future Trends */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                2026 Trends
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Future of WhatsApp Marketing
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {futureTrends.map((trend, index) => (
                <div 
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-primary/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                    <trend.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{trend.title}</h3>
                  <p className="text-sm text-text-secondary">{trend.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-yellow-200 bg-yellow-50 p-5 text-center">
              <p className="text-sm text-yellow-800">
                <AlertTriangle className="h-4 w-4 inline mr-2" />
                <strong>AI Rules:</strong> "General Purpose" AI bots (ChatGPT clones) are banned. 
                Only "Business-Context" AI bots for sales, support, and recommendations are allowed.
              </p>
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
                  Start scaling your WhatsApp marketing today
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8">
                  Join 500+ enterprises using Whats91 for compliant, high-ROI WhatsApp campaigns.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold bg-white text-brand-primary hover:bg-white/95 rounded-xl shadow-lg group"
                  >
                    Access Marketing Portal
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
