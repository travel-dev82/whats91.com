"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { Button } from "@/components/ui/button";
import { 
  Phone,
  PhoneIncoming,
  PhoneCall,
  Shield,
  Globe,
  Clock,
  DollarSign,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Zap,
  Building2,
  HeartPulse,
  ShoppingCart,
  Truck,
  Settings,
  Code2,
  AlertTriangle,
  TrendingUp,
  Users,
  Headphones,
  ChevronDown,
  ChevronUp,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { FAQJsonLD, BreadcrumbJsonLD } from "@/components/seo/JsonLD";

// Technical Prerequisites
const technicalPrerequisites = [
  {
    title: "Meta Developer Console Configuration",
    description: "Enable 'Allow voice calls' in your WhatsApp Business Account settings. Configure the calls webhook field to receive event notifications.",
    icon: Settings,
  },
  {
    title: "Webhook & Signaling Setup",
    description: "Configure your webhook to handle incoming call events. Meta sends signaling via the Graph API while your infrastructure handles the media stream.",
    icon: Code2,
  },
  {
    title: "SIP/WebRTC Infrastructure",
    description: "Deploy a SIP or WebRTC client for agents to receive calls. Meta provides signaling endpoints but doesn't manage internal routing.",
    icon: PhoneCall,
  },
  {
    title: "Secure Media Streams",
    description: "Implement SRTP with DTLS/SDES key exchange protocols for encrypted voice media between WhatsApp and your systems.",
    icon: Shield,
  },
];

// Benefits Data
const benefits = [
  {
    icon: PhoneIncoming,
    title: "Free Inbound Calling",
    description: "User-initiated calls cost your business $0.00. No per-minute charges, no international fees—unlimited global reach at zero session cost.",
    highlight: "Save up to ₹10+ lakhs/year vs toll-free numbers",
  },
  {
    icon: Clock,
    title: "24-Hour Service Window",
    description: "Every incoming call opens a 24-hour customer service window. Even missed calls become messaging opportunities with free follow-up.",
    highlight: "Turn missed calls into conversations",
  },
  {
    icon: Shield,
    title: "Verified Branded Identity",
    description: "Display your verified business name and green badge during calls. Build trust instantly—no more 'Potential Spam' labels.",
    highlight: "Increase answer rates by 40%+",
  },
  {
    icon: Globe,
    title: "International Reach at No Cost",
    description: "Customers worldwide can call via WhatsApp without international calling fees. Perfect for global brands and travel businesses.",
    highlight: "Eliminate toll-free international charges",
  },
];

// Signaling Flow Steps
const signalingFlow = [
  { step: 1, action: "User Initiation", description: "User taps the call icon in WhatsApp mobile app" },
  { step: 2, action: "Meta Signaling", description: "Meta receives the call event and triggers webhook" },
  { step: 3, action: "RTC Processing", description: "Meta's RTC infrastructure initializes session & media negotiation" },
  { step: 4, action: "Partner Notification", description: "Your webhook receives the call event payload" },
  { step: 5, action: "Call Routing", description: "Your VoIP system routes the call to the right agent" },
  { step: 6, action: "Agent Connection", description: "Agent answers via WebRTC/SIP, establishing voice link" },
];

// Industry Use Cases
const useCases = [
  {
    industry: "Real Estate",
    icon: Building2,
    useCase: "High-touch sales consultation",
    impact: "Resolve complex questions on floor plans or pricing instantly. Build trust with prospective buyers through personal voice interaction.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    industry: "Healthcare",
    icon: HeartPulse,
    useCase: "Urgent patient coordination",
    impact: "Provide empathy and reassurance during medical escalations. Quick voice consultation for appointment changes or prescription queries.",
    color: "bg-red-500/10 text-red-600",
  },
  {
    industry: "E-commerce",
    icon: ShoppingCart,
    useCase: "High-value order verification",
    impact: "Reduce fraud by confirming sensitive transactions via live voice. Increase checkout confidence for premium purchases.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    industry: "Logistics",
    icon: Truck,
    useCase: "Last-mile delivery support",
    impact: "Customers call drivers for real-time location updates. Resolve access issues and delivery timing instantly.",
    color: "bg-orange-500/10 text-orange-600",
  },
];

// Cost Comparison
const costComparison = [
  { type: "Inbound Call (UIC)", metaCharge: "FREE", benefit: "Unlimited global reach at no session cost" },
  { type: "Customer Service Window", metaCharge: "FREE", benefit: "24 hours of free-form messaging follows the call" },
  { type: "Outbound Call (BIC)", metaCharge: "Per-minute (6s increments)", benefit: "Requires paid template for permission first" },
];

// KPIs
const kpis = [
  { metric: "Total Calls Received", description: "Measure user demand for voice assistance", icon: PhoneIncoming },
  { metric: "Average Call Duration", description: "Indicator of issue complexity and resolution quality", icon: Clock },
  { metric: "Missed Call Rate", description: "Helps adjust agent staffing levels", icon: TrendingUp },
  { metric: "Post-Call Conversion", description: "Link voice sessions to purchases or resolutions", icon: DollarSign },
];

// Common Pitfalls
const pitfalls = [
  {
    issue: "Expired Access Tokens",
    cause: "Using temporary tokens instead of permanent access tokens",
    solution: "Generate permanent access tokens in Meta Business Manager for stable integration",
  },
  {
    issue: "Webhook Verification Failure",
    cause: "Missing /whatsapp path or incorrect webhook URL verification",
    solution: "Verify webhook URL matches Meta's required format and path structure",
  },
  {
    issue: "Concurrent Call Limit Exceeded",
    cause: "Exceeding the 1,000 concurrent call limit",
    solution: "Monitor volume metrics and request limit increase from Meta for high-traffic events",
  },
  {
    issue: "Display Name Rejection",
    cause: "Poorly chosen or inconsistent business display name",
    solution: "Use clear, professional names consistent with your brand and legal entity",
  },
];

// FAQs
const faqs = [
  {
    question: "What is WhatsApp Business Calling and how does it work with Cloud API?",
    answer: "WhatsApp Business Calling allows businesses to receive and make voice calls through the WhatsApp Cloud API. When enabled, customers can tap a call icon within their chat thread to initiate a VoIP call to your business. The call is routed through Meta's infrastructure to your configured webhook, then to your SIP/WebRTC client where agents can answer. This transforms a messaging thread into a high-definition, contextual support channel."
  },
  {
    question: "How much does it cost to receive WhatsApp calls through Cloud API?",
    answer: "User-initiated (inbound) calls are completely FREE for businesses. Meta charges $0.00 for incoming calls, regardless of duration or caller location. This includes international calls—a customer in Brazil calling your UK business pays nothing, and neither do you. The call also opens a 24-hour customer service window, allowing free follow-up messaging."
  },
  {
    question: "What's the difference between inbound and outbound WhatsApp calls?",
    answer: "Inbound calls (User-Initiated Calls) are when customers call your business—they're free, require no pre-authorization, and open a 24-hour messaging window. Outbound calls (Business-Initiated Calls) require a 'Call Permission Request' template, are limited to one request per 24 hours per user, and incur per-minute charges. We recommend focusing on inbound calling first for maximum ROI and compliance simplicity."
  },
  {
    question: "What are the technical requirements to enable WhatsApp calling?",
    answer: "Your business phone number needs at least Tier 1 messaging limits (1,000+ daily conversations). You need: (1) Meta Developer Console access with calling enabled, (2) A configured webhook to receive call events, (3) SIP or WebRTC infrastructure for agents, and (4) SRTP encryption implementation. Note that PSTN routing is not supported—calls must terminate on digital endpoints like softphones."
  },
  {
    question: "Can I route WhatsApp calls to my existing phone system?",
    answer: "WhatsApp Calling is purely VoIP-to-VoIP—you cannot natively route calls to standard mobile or landline numbers. However, you can integrate with modern cloud contact centers (like Twilio, Vonage, or custom WebRTC solutions) that support SIP trunking. The 'agent-side' leg must terminate on a digital system like a softphone or web-based call interface."
  },
  {
    question: "What happens when I miss a WhatsApp call from a customer?",
    answer: "A missed call is not a lost interaction—it's a converted messaging opportunity. Even if unanswered, the call opens a fresh 24-hour customer service window. You can immediately respond via text with an automated message like 'Sorry we missed your call! How can we help?' This follow-up is free (no template required) and often leads to quick resolution."
  },
  {
    question: "How many concurrent calls can WhatsApp Business Calling handle?",
    answer: "The standard limit is 1,000 concurrent calls per business phone number—sufficient for most enterprise deployments. For high-traffic events or larger organizations, you can request a limit increase from Meta. This capacity allows significant scaling without infrastructure concerns."
  },
  {
    question: "Is WhatsApp Business Calling secure for sensitive conversations?",
    answer: "Yes. All WhatsApp voice calls are end-to-end encrypted—only the participants can hear the conversation. Additionally, the verified business identity (green badge) ensures customers know they're speaking with your legitimate business, not an impersonator. This makes it suitable for banking, healthcare, and other sensitive sectors."
  },
  {
    question: "How does the 24-hour customer service window work with calls?",
    answer: "When a user calls your business (whether answered or not), a 24-hour window opens. During this window, you can send unlimited free-form messages to that customer without using templates or paying message fees. This dramatically reduces follow-up costs and enables rapid issue resolution through combined voice + text support."
  },
  {
    question: "When was WhatsApp Business Calling released?",
    answer: "WhatsApp Business Calling via Cloud API was released to General Availability on July 1, 2025. It represents the most significant architectural evolution since the Cloud API's inception, transforming the platform from text-centric messaging to a full-fledged voice communication channel."
  },
];

// Flatten FAQs for JSON-LD
const faqJsonData = faqs.map(faq => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function WhatsAppBusinessCallingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* JSON-LD Structured Data */}
      <FAQJsonLD faqs={faqJsonData} />
      <BreadcrumbJsonLD items={[
        { name: "Home", url: "https://whats91.com" },
        { name: "WhatsApp Business Calling", url: "https://whats91.com/whatsapp-business-calling" },
      ]} />

      <Header />
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-surface/80 to-background">
          <div className="absolute inset-0 gradient-brand-subtle pointer-events-none" />
          <div className="relative px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-center">
              
              {/* Content */}
              <div className="flex flex-col gap-5 sm:gap-6 text-center lg:text-left">
                {/* Badge */}
                <div className="flex justify-center lg:justify-start">
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary-light border border-brand-primary/15 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-brand-primary">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary" />
                    </span>
                    Cloud API Voice Integration
                  </div>
                </div>
                
                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15]">
                  <span className="block">WhatsApp Business Calling:</span>
                  <span className="block mt-1 text-gradient">Seamless Inbound Voice for Cloud API</span>
                </h1>
                
                {/* Description */}
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Enable your business to receive incoming WhatsApp voice calls directly through the Cloud API. 
                  Transform messaging threads into high-definition, contextual support channels—at zero cost.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-brand-primary">FREE</div>
                    <div className="text-xs sm:text-sm text-text-muted">Inbound Calls</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-brand-primary">1,000+</div>
                    <div className="text-xs sm:text-sm text-text-muted">Concurrent Calls</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-brand-primary">24hr</div>
                    <div className="text-xs sm:text-sm text-text-muted">Service Window</div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start pt-2">
                  <Button 
                    size="lg" 
                    className="h-12 px-6 text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/25 group"
                  >
                    Enable Calling Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-6 text-base font-semibold rounded-xl border-border/80 hover:bg-surface"
                  >
                    View Documentation
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  {/* Phone Mockup */}
                  <div className="relative rounded-3xl bg-gradient-to-br from-brand-primary/10 to-brand-accent/5 border border-brand-primary/10 p-6 sm:p-8">
                    {/* Call Animation */}
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 animate-ping rounded-full bg-brand-primary/20" style={{ animationDuration: '2s' }} />
                        <div className="absolute inset-2 animate-ping rounded-full bg-brand-primary/30" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                        <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-brand-primary shadow-lg shadow-brand-primary/30">
                          <PhoneIncoming className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <p className="text-lg sm:text-xl font-semibold text-text-primary">Incoming WhatsApp Call</p>
                        <p className="text-sm text-text-muted">Customer calling from chat thread</p>
                      </div>

                      {/* Call Actions */}
                      <div className="flex gap-6">
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 shadow-md">
                            <Phone className="h-5 w-5 text-white rotate-[135deg]" />
                          </div>
                          <span className="text-xs text-text-muted">Decline</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-md animate-pulse">
                            <Phone className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-xs text-text-muted">Answer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 rounded-xl bg-white border border-border/60 px-3.5 py-2.5 shadow-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-xs font-semibold text-text-primary">Verified Business</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                Key Benefits
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                The Core Benefits of Inbound WhatsApp Voice
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Transform your customer support with voice calls that are contextual, free, and trusted.
              </p>
            </div>

            <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-primary/20"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition-transform duration-300 group-hover:scale-110">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-primary bg-brand-primary/10 px-3 py-1.5 rounded-full w-fit">
                      <Zap className="h-3.5 w-3.5" />
                      {benefit.highlight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Strategic Shift Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Strategic Advantage
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                  The "Incoming-First" Strategy
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                  While receiving calls is native and frictionless, initiating calls requires complex permissions and templates. 
                  Smart businesses focus on <strong className="text-text-primary">User-Initiated Calls (UIC)</strong>—they're free, 
                  require no pre-authorization, and immediately open a 24-hour customer service window.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-green-800">Inbound Calls = FREE</p>
                      <p className="text-xs text-green-600">No per-minute charges, opens 24h messaging window</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Outbound Calls = Complex</p>
                      <p className="text-xs text-yellow-600">Requires Call Permission Request, limited to 1 per 24h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cost Comparison Table */}
              <div className="rounded-2xl border border-border/60 bg-white overflow-hidden">
                <div className="px-6 py-4 bg-surface/80 border-b border-border/60">
                  <h3 className="text-lg font-semibold text-text-primary">Cost Comparison</h3>
                </div>
                <div className="divide-y divide-border/60">
                  {costComparison.map((item, index) => (
                    <div key={index} className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-text-primary">{item.type}</span>
                        <span className={`text-sm font-bold ${item.metaCharge === 'FREE' ? 'text-green-600' : 'text-text-primary'}`}>
                          {item.metaCharge}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted">{item.benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signaling Flow Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Code2 className="h-3.5 w-3.5" />
                Technical Architecture
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                The Signaling Flow for Incoming Calls
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Understand the six-step event sequence when a user initiates a WhatsApp call to your business.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-0 sm:grid-cols-2 lg:grid-cols-3">
              {signalingFlow.map((step, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-border/60 h-full transition-all duration-300 hover:shadow-md hover:border-brand-primary/20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white font-bold shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-1">{step.action}</h4>
                      <p className="text-xs text-text-secondary">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Prerequisites */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Settings className="h-3.5 w-3.5" />
                Implementation Guide
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Technical Prerequisites & Implementation
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Configure your infrastructure to receive WhatsApp voice calls through Cloud API.
              </p>
            </div>

            <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              {technicalPrerequisites.map((prereq, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-white transition-all duration-300 hover:shadow-lg hover:border-brand-primary/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <prereq.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-2">{prereq.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{prereq.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Important Note */}
            <div className="mt-8 rounded-xl border border-brand-primary/20 bg-brand-primary/5 p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Important: No PSTN Support</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    WhatsApp Calling API is purely VoIP-to-VoIP. It cannot natively route calls to standard mobile or landline numbers. 
                    The agent-side leg must terminate on a digital system like a softphone, WebRTC client, or cloud contact center platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Use Cases */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Building2 className="h-3.5 w-3.5" />
                Industry Applications
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Industry-Specific Use Cases
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                See how businesses across industries are transforming customer journeys with WhatsApp voice.
              </p>
            </div>

            <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-primary/20"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${useCase.color} transition-transform duration-300 group-hover:scale-110`}>
                        <useCase.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary">{useCase.industry}</h3>
                        <p className="text-sm text-brand-primary font-medium">{useCase.useCase}</p>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{useCase.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                  Measuring Success: Key Performance Indicators
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                  Monitor these metrics through your integrated dashboard to track ROI and optimize your voice support strategy.
                </p>
                <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                  <p className="text-sm text-green-800">
                    <strong>Early adopters report:</strong> 26% increase in conversions and significant boost in Net Promoter Score (NPS) 
                    by switching from chat to voice for complex issues.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 grid-cols-2">
                {kpis.map((kpi, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl border border-border/60 bg-white transition-all duration-300 hover:shadow-md"
                  >
                    <kpi.icon className="h-6 w-6 text-brand-primary mb-3" />
                    <h4 className="text-sm font-semibold text-text-primary mb-1">{kpi.metric}</h4>
                    <p className="text-xs text-text-muted">{kpi.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 border border-red-200 px-4 py-1.5 text-xs sm:text-sm font-medium text-red-700 mb-4">
                <AlertTriangle className="h-3.5 w-3.5" />
                Troubleshooting
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Common Implementation Pitfalls
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Avoid these common issues when setting up WhatsApp Business Calling.
              </p>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {pitfalls.map((pitfall, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border/60 bg-white p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 shrink-0">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-1">{pitfall.issue}</h4>
                      <p className="text-xs text-text-muted mb-2"><strong>Cause:</strong> {pitfall.cause}</p>
                      <p className="text-xs text-green-700"><strong>Fix:</strong> {pitfall.solution}</p>
                    </div>
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
              <p className="text-sm sm:text-base text-text-secondary">
                Everything you need to know about WhatsApp Business Calling.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border/60 bg-white overflow-hidden"
                >
                  <button
                    className="w-full flex items-start justify-between gap-4 p-5 text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-sm sm:text-base font-medium text-text-primary pr-4">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-text-muted shrink-0 mt-0.5" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent p-7 sm:p-8 md:p-12 shadow-xl">
              
              {/* Background Decorations */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-1/2 -left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 px-4 py-1.5 text-xs sm:text-sm font-medium text-white mb-6">
                  <Phone className="h-3.5 w-3.5" />
                  General Available Since July 2025
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  Ready to Enable Voice Calling?
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8">
                  Transform your WhatsApp messaging into a full-fledged voice support channel. 
                  Free inbound calls, verified identity, and seamless integration.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="h-12 px-7 text-base font-semibold bg-white text-brand-primary hover:bg-white/95 rounded-xl shadow-lg group"
                  >
                    Get Started Free
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
