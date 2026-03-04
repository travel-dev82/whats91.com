"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle,
  Bot,
  Workflow,
  Sparkles,
  Key,
  Shield,
  CheckCircle2,
  ArrowRight,
  Zap,
  Brain,
  Database,
  ShoppingCart,
  Calendar,
  HeadphonesIcon,
  FileText,
  Settings,
  Globe,
  Lock,
  Building2,
  TrendingUp,
  Users,
  Clock,
  Layers,
  Code2,
  ChevronDown,
  ChevronUp,
  Play,
  Award,
  RefreshCw,
  Target,
  DollarSign,
  BarChart3,
  MessageSquare,
  Cpu,
  BookOpen
} from "lucide-react";
import { useState } from "react";

// Stats for hero
const flowBuilderStats = [
  { value: "40-60%", label: "Cost Savings", sublabel: "with BYOA model" },
  { value: "90%", label: "Ticket Deflection", sublabel: "routine queries" },
  { value: "25%", label: "Cart Recovery", sublabel: "automated flows" },
  { value: "24/7", label: "Availability", sublabel: "no human needed" },
];

// Core Features
const coreFeatures = [
  {
    icon: Workflow,
    title: "Visual Nodemation Canvas",
    subtitle: "The N8N-Style Experience",
    description: "Bring your business logic to life with a drag-and-drop interface. Connect Triggers, Actions, and Logic nodes to build sophisticated customer journeys in minutes, not months.",
    benefits: [
      "Complete transparency—no black-box code",
      "Multi-path branching & parallel executions",
      "Deep cyclical loops for complex workflows",
      "Visual roadmap of customer experience"
    ]
  },
  {
    icon: Brain,
    title: "Agentic AI & Knowledge Base",
    subtitle: "The RAG Advantage",
    description: "Go beyond simple responses. Train your AI on your PDFs, website data, and manuals. Our RAG-powered engine ensures your bot stays on-script, accurate, and helpful without hallucinating.",
    benefits: [
      "Natural Language Understanding (NLU)",
      "Intent classification & entity extraction",
      "Sentiment analysis for human handoff",
      "Knowledge base from your documents"
    ]
  },
  {
    icon: Key,
    title: "Bring Your Own API (BYOA)",
    subtitle: "Economic Freedom",
    description: "Why pay markups on AI? Connect your own OpenAI, Gemini, or Claude API keys directly. Scale your automation without the subscription fatigue of per-resolution fees.",
    benefits: [
      "40-60% cost reduction on AI operations",
      "Model flexibility—different brains for tasks",
      "Data sovereignty for BFSI compliance",
      "Direct billing with AI providers"
    ]
  }
];

// Comparison Table
const automationComparison = [
  { feature: "Logic Structure", traditional: "Rigid, sequential if/else", flowBuilder: "Graph-based, non-linear nodes" },
  { feature: "Integration Depth", traditional: "Limited native connectors", flowBuilder: "Limitless via HTTP Request" },
  { feature: "User Accessibility", traditional: "Requires developer input", flowBuilder: "Drag-and-drop for all teams" },
  { feature: "AI Capabilities", traditional: "Hard-coded keywords", flowBuilder: "Dynamic NLU & Agentic AI" },
  { feature: "Data Flow", traditional: "Single-stream processing", flowBuilder: "Multi-source merging" },
  { feature: "Cost Model", traditional: "Per-resolution markup", flowBuilder: "BYOA—pay raw token costs" },
];

// Use Cases
const useCases = [
  {
    icon: ShoppingCart,
    title: "E-commerce Growth Engine",
    problem: "High cart abandonment and RTO losses",
    solution: "Automated abandoned cart reminders + COD verification flows that confirm orders before shipping.",
    result: "25% increase in recovered revenue, 50% reduction in fake orders",
    metrics: [
      { label: "Cart Recovery", value: "15-25%" },
      { label: "RTO Reduction", value: "50%" },
    ]
  },
  {
    icon: Target,
    title: "24/7 Sales Concierge",
    problem: "Leads arriving at 2 AM are cold by morning",
    solution: "AI nodes qualify leads in real-time. High-intent leads get instant calendar booking for demos.",
    result: "40%+ higher conversion by engaging at peak interest",
    metrics: [
      { label: "Lead Response", value: "< 30 sec" },
      { label: "Conversion Lift", value: "40%+" },
    ]
  },
  {
    icon: HeadphonesIcon,
    title: "Support Ticket Deflection",
    problem: "80% of time on same 5 questions",
    solution: "Knowledge base-grounded bot handles order tracking, refunds, and troubleshooting end-to-end.",
    result: "Free agents for complex issues, 90% routine ticket reduction",
    metrics: [
      { label: "Deflection Rate", value: "90%" },
      { label: "Agent Time Saved", value: "80%" },
    ]
  }
];

// RAG Components
const ragComponents = [
  { role: "The Library", component: "Sourcing", mechanism: "Ingesting PDFs, URLs, Docs" },
  { role: "The Translator", component: "Embedding", mechanism: "Converting text to vectors" },
  { role: "The Researcher", component: "Retrieval", mechanism: "Finding relevant data chunks" },
  { role: "The Context", component: "Augmentation", mechanism: "Feeding data to AI prompt" },
  { role: "The Spokesperson", component: "Generation", mechanism: "Crafting natural response" },
];

// Node Types
const nodeTypes = [
  { icon: Zap, name: "Trigger Nodes", description: "Webhooks, keywords, CTWA ads, scheduled times" },
  { icon: Layers, name: "Action Nodes", description: "Send messages, generate PDFs, API calls" },
  { icon: Bot, name: "AI Nodes", description: "Intent classification, entity extraction, sentiment" },
  { icon: Code2, name: "HTTP Nodes", description: "Connect to any API—Shopify, Busy, Shiprocket" },
  { icon: Users, name: "Routing Nodes", description: "Human handoff, agent assignment, escalations" },
  { icon: Database, name: "Data Nodes", description: "CRM updates, inventory checks, lookups" },
];

// Industries
const industries = [
  { icon: ShoppingCart, name: "E-commerce & D2C", description: "Cart recovery, COD verify, order tracking" },
  { icon: Building2, name: "Real Estate", description: "Lead qualification, site visit booking" },
  { icon: Bot, name: "Healthcare", description: "Appointment scheduling, triage flows" },
  { icon: BarChart3, name: "Financial Services", description: "Lead capture, document collection" },
];

// Compliance
const complianceItems = [
  { 
    icon: FileText, 
    title: "DLT Registration & TRAI Rules",
    description: "Template approval managed within dashboard. Every Action Node remains compliant with Indian messaging regulations."
  },
  { 
    icon: Shield, 
    title: "DPDP Act 2023 Compliance",
    description: "Consent Flows with Opt-In nodes at journey start. Digital audit trail for every consent record."
  },
  { 
    icon: Globe, 
    title: "Data Localization",
    description: "BYOA model lets enterprises connect AI providers with India data residency or self-hosted models."
  },
];

// FAQs
const faqs = [
  { 
    q: "What is a Visual Flow Builder for WhatsApp?", 
    a: "A Visual Flow Builder is a no-code interface that lets you design customer journeys by connecting nodes on a canvas. Instead of writing code, you drag-and-drop triggers, actions, and logic blocks to create sophisticated automation workflows—similar to tools like N8N or Zapier, but built specifically for WhatsApp Business API." 
  },
  { 
    q: "How does the 'Bring Your Own API' (BYOA) model save costs?", 
    a: "Most SaaS platforms bundle AI access and charge 40-100% markup on token costs. With BYOA, you connect your own OpenAI, Gemini, or Claude API keys directly. You pay raw token prices to the AI provider—for example, GPT-4o-mini costs a fraction of bundled services. This often results in 40-60% operational cost savings." 
  },
  { 
    q: "What is RAG and how does it help my chatbot?", 
    a: "RAG (Retrieval-Augmented Generation) gives your AI a knowledge base it must reference before answering. Instead of hallucinating, the AI first retrieves relevant information from your PDFs, website, or documents, then generates a response grounded in your actual business data. This ensures accurate, on-brand answers." 
  },
  { 
    q: "Can I integrate my existing CRM or ERP with Flow Builder?", 
    a: "Yes. HTTP Request nodes let you connect to virtually any API. We have pre-built templates for Shopify, Busy ERP, Shiprocket, Zoho, and others. For custom integrations, you configure the endpoint, authentication, and data mapping visually." 
  },
  { 
    q: "How does the chatbot know when to escalate to a human?", 
    a: "Sentiment analysis nodes detect frustration or anger in user messages. When triggered, the flow can automatically route the conversation to a human agent, bypassing automated responses. You can also set escalation rules based on keywords, conversation length, or specific customer segments." 
  },
  { 
    q: "Is this compliant with Indian regulations like DLT and DPDP Act?", 
    a: "Yes. The Flow Builder includes Opt-In nodes for consent collection, maintaining a digital audit trail. Template management handles DLT registration requirements. For BFSI enterprises, the BYOA model allows you to maintain data residency in India by connecting to compliant AI providers or self-hosted models." 
  },
  { 
    q: "What's the difference between this and WhatsApp's built-in Flows?", 
    a: "WhatsApp Flows are limited to simple form-based interactions within the app. Our Flow Builder is a full automation engine with AI integration, external API connectivity, CRM sync, and complex branching logic—capable of end-to-end process automation, not just form collection." 
  },
  { 
    q: "How quickly can I build and deploy a workflow?", 
    a: "Simple workflows (like FAQ bots or order tracking) can be built in under an hour. Complex integrations with AI and multiple systems typically take 1-3 days. Our team provides templates for common use cases to accelerate deployment." 
  },
];

export default function FlowBuilderPage() {
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
                  <Workflow className="h-3.5 w-3.5" />
                  No-Code Automation Platform
                </div>
                
                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-5">
                  WhatsApp Flow Builder: Chatbot Automation Made Visual
                </h1>
                
                {/* Subheadline */}
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  The logic of N8N meets the reach of WhatsApp Business API. Automate sales, support, and operations with a drag-and-drop canvas. No code. No limits. Total control.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/25 group"
                  >
                    Start Building Flows
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-7 text-base font-semibold rounded-xl border-border/80 hover:bg-surface"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {["500+ Enterprises", "Official Meta BSP", "99.9% Uptime SLA"].map((badge, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs sm:text-sm text-text-muted bg-white/80 px-3 py-1.5 rounded-full border border-border/50">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {flowBuilderStats.map((stat, index) => (
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

        {/* Comparison Table */}
        <section className="py-12 sm:py-16 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Traditional Chatbots vs. Visual Flow Builder
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                From rigid decision trees to flexible, graph-based automation
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full rounded-xl border border-border/60 bg-white overflow-hidden">
                <thead>
                  <tr className="bg-surface/80">
                    <th className="text-left p-4 text-sm font-semibold text-text-muted">Feature</th>
                    <th className="text-center p-4 text-sm font-semibold text-text-muted">Traditional</th>
                    <th className="text-center p-4 text-sm font-semibold text-brand-primary">Flow Builder</th>
                  </tr>
                </thead>
                <tbody>
                  {automationComparison.map((row, i) => (
                    <tr key={i} className="border-t border-border/60">
                      <td className="p-4 text-sm text-text-secondary font-medium">{row.feature}</td>
                      <td className="p-4 text-sm text-center text-text-muted">{row.traditional}</td>
                      <td className="p-4 text-sm text-center font-medium text-brand-primary">{row.flowBuilder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Layers className="h-3.5 w-3.5" />
                Core Features
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Democratizing Enterprise Intelligence
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Three pillars that serve everyone from CMO to CTO
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {coreFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-brand-primary/20"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary mb-5 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <p className="text-xs text-brand-primary font-medium mb-2">{feature.subtitle}</p>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                  <p className="text-sm text-text-secondary mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Node Types */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Code2 className="h-3.5 w-3.5" />
                Building Blocks
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Node Types for Every Automation Need
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Connect these building blocks visually to create sophisticated workflows
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {nodeTypes.map((node, index) => (
                <div 
                  key={index}
                  className="group flex items-start gap-4 rounded-xl border border-border/60 bg-white p-5 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <node.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-text-primary">{node.name}</h4>
                    <p className="text-sm text-text-secondary">{node.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RAG Deep Dive */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-5">
                  <Brain className="h-3.5 w-3.5" />
                  AI Integration
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-5">
                  How RAG Makes Your AI Business-Smart
                </h2>
                <p className="text-base text-text-secondary leading-relaxed mb-6">
                  Retrieval-Augmented Generation (RAG) gives your AI a knowledge base it must reference before answering. Instead of hallucinating or guessing, the AI retrieves relevant information from your PDFs, website, or documents first.
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  Think of it as giving your AI a <strong className="text-text-primary">rulebook</strong> or <strong className="text-text-primary">research assistant</strong>. Only after finding the factual answer does it generate a response—ensuring accuracy for your specific business context.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20">PDF Upload</Badge>
                  <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20">Website Crawling</Badge>
                  <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20">Notion Sync</Badge>
                  <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20">Custom Docs</Badge>
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-white overflow-hidden">
                <div className="p-5 bg-surface/50 border-b border-border/60">
                  <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-brand-primary" />
                    RAG Components Explained
                  </h3>
                </div>
                <div className="divide-y divide-border/60">
                  {ragComponents.map((item, i) => (
                    <div key={i} className="p-4 flex items-center gap-4">
                      <div className="w-24 shrink-0">
                        <div className="text-xs text-text-muted">{item.role}</div>
                        <div className="text-sm font-semibold text-brand-primary">{item.component}</div>
                      </div>
                      <div className="flex-1 text-sm text-text-secondary">
                        {item.mechanism}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Target className="h-3.5 w-3.5" />
                Proven ROI
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Business Use Cases That Drive Results
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Real-world scenarios with measurable outcomes for Indian enterprises
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:border-brand-primary/20"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary mb-5 transition-transform duration-300 group-hover:scale-110">
                    <useCase.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{useCase.title}</h3>
                  
                  <div className="mb-4">
                    <div className="text-xs text-red-600 font-medium mb-1">The Problem</div>
                    <p className="text-sm text-text-secondary">{useCase.problem}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-xs text-brand-primary font-medium mb-1">The Solution</div>
                    <p className="text-sm text-text-secondary">{useCase.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-xs text-green-600 font-medium mb-1">The Result</div>
                    <p className="text-sm text-text-primary font-medium">{useCase.result}</p>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border/60">
                    {useCase.metrics.map((metric, i) => (
                      <div key={i} className="flex-1 text-center">
                        <div className="text-lg font-bold text-brand-primary">{metric.value}</div>
                        <div className="text-xs text-text-muted">{metric.label}</div>
                      </div>
                    ))}
                  </div>
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
                Industries We Serve
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

        {/* Compliance Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Shield className="h-3.5 w-3.5" />
                Trust & Compliance
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Built for Indian Regulatory Requirements
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Enterprise-grade compliance for BFSI, healthcare, and regulated industries
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {complianceItems.map((item, index) => (
                <div 
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-primary/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agentic AI Example */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Bot className="h-3.5 w-3.5" />
                Agentic AI in Action
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                How AI Resolves Complex Queries
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Example: Customer asks about a missing order
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden">
              <div className="p-4 bg-surface/50 border-b border-border/60">
                <p className="text-sm text-text-secondary italic">
                  "I ordered a blue shirt last Tuesday but I haven&apos;t received it"
                </p>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { step: 1, title: "Intent Classification", desc: "NLP identifies: Intent=Check Order Status, Entities=Blue Shirt, Last Tuesday" },
                  { step: 2, title: "API Lookup", desc: "HTTP Request node queries Shopify API for orders matching phone number" },
                  { step: 3, title: "Logistics Check", desc: "Integration with Shiprocket retrieves real-time tracking data" },
                  { step: 4, title: "Response Generation", desc: "AI formulates: 'Hi! I found your order for Blue Cotton Shirt. It's in transit, arriving by Friday.'" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-sm font-bold shadow-md shadow-brand-primary/20">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-center">
              <p className="text-sm text-yellow-800">
                <Zap className="h-4 w-4 inline mr-2" />
                <strong>Sentiment Detection:</strong> If frustration is detected, the flow automatically escalates to a human agent.
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
                  Ready to Build Your First Workflow?
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8">
                  Stop settling for static bots. Join the automation revolution with Whats91. Start your free trial today and experience enterprise-grade nodemation.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold bg-white text-brand-primary hover:bg-white/95 rounded-xl shadow-lg group"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <ContactCard 
                    variant="popup" 
                    trigger={
                      <Button 
                        size="lg" 
                        className="h-12 px-7 text-base font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-xl"
                      >
                        Schedule Demo
                      </Button>
                    } 
                  />
                </div>

                <p className="mt-6 text-sm text-white/60">
                  Join 350+ Indian businesses that switched to Whats91 this month
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
