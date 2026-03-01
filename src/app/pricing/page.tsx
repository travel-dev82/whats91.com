"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ChevronRight,
  MessageCircle,
  Shield,
  CheckCircle2,
  ArrowRight,
  Calculator,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Clock,
  Zap,
  Users,
  Globe,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Award,
  Building2,
  Receipt,
  Percent,
  Timer,
  Target,
  Layers,
  RefreshCw
} from "lucide-react";
import { useState } from "react";

// Official Meta Rates (India 2026)
const officialRates = [
  { category: "Marketing", rate: "₹0.8631", description: "Promotional broadcasts, offers", color: "bg-purple-500/10 text-purple-600 border-purple-200" },
  { category: "Utility", rate: "₹0.1150", description: "Order updates, shipping alerts", color: "bg-blue-500/10 text-blue-600 border-blue-200" },
  { category: "Authentication", rate: "₹0.1150", description: "OTPs, security codes (domestic)", color: "bg-green-500/10 text-green-600 border-green-200" },
  { category: "Service", rate: "FREE", description: "Customer support replies", color: "bg-brand-primary/10 text-brand-primary border-brand-primary/20" },
];

// Provider Comparison
const providerComparison = [
  { provider: "Meta Official (India)", marketing: "₹0.8631", markup: "₹0.00", total: "₹0.8631", recommended: true },
  { provider: "whats91.com", marketing: "₹0.8631", markup: "₹0.00", total: "₹0.8631", recommended: true },
  { provider: "Wati", marketing: "₹0.8631", markup: "~₹0.17+", total: "₹1.03+", recommended: false },
  { provider: "Gupshup", marketing: "₹0.8631", markup: "₹0.08", total: "₹0.94+", recommended: false },
  { provider: "AiSensy", marketing: "₹0.8631", markup: "₹0.02-0.15", total: "₹0.88-1.09", recommended: false },
];

// Utility Volume Tiers
const utilityTiers = [
  { volume: "0 – 25 Million", rate: "₹0.1150", discount: "Base Rate" },
  { volume: "25M – 50 Million", rate: "₹0.1081", discount: "6% off" },
  { volume: "50M – 100 Million", rate: "₹0.1012", discount: "12% off" },
  { volume: "100M – 200 Million", rate: "₹0.0943", discount: "18% off" },
  { volume: "200M – 300 Million", rate: "₹0.0874", discount: "24% off" },
  { volume: "Above 300 Million", rate: "₹0.0805", discount: "30% off" },
];

// Authentication Volume Tiers
const authTiers = [
  { volume: "0 – 750,000", rate: "₹0.1150", discount: "Base Rate" },
  { volume: "750k – 15 Million", rate: "₹0.1081", discount: "6% off" },
  { volume: "15M – 20 Million", rate: "₹0.1012", discount: "12% off" },
  { volume: "20M – 50 Million", rate: "₹0.0943", discount: "18% off" },
  { volume: "50M – 100 Million", rate: "₹0.0874", discount: "24% off" },
  { volume: "Above 100 Million", rate: "₹0.0805", discount: "30% off" },
];

// Messaging Tiers
const messagingTiers = [
  { tier: "Tier 0", limit: "250", requirement: "Unverified Business", icon: Shield },
  { tier: "Tier 1", limit: "1,000", requirement: "Verified Business", icon: CheckCircle2 },
  { tier: "Tier 2", limit: "10,000", requirement: "Sustained High Quality", icon: TrendingUp },
  { tier: "Tier 3", limit: "100,000", requirement: "Established Brand", icon: Building2 },
  { tier: "Tier 4", limit: "Unlimited", requirement: "Enterprise / High Reliability", icon: Globe },
];

// Free Windows
const freeWindows = [
  { 
    title: "24-Hour Customer Service Window",
    duration: "24 hours",
    trigger: "Customer messages you first",
    benefit: "All service messages FREE",
    icon: Clock,
    color: "bg-blue-500/10 text-blue-600"
  },
  { 
    title: "72-Hour CTWA Ad Window",
    duration: "72 hours",
    trigger: "Click-to-WhatsApp Ad click",
    benefit: "ALL message types FREE",
    icon: Target,
    color: "bg-green-500/10 text-green-600"
  },
  { 
    title: "Utility in Service Window",
    duration: "Within 24h CSW",
    trigger: "Customer initiates conversation",
    benefit: "Utility templates FREE",
    icon: Receipt,
    color: "bg-purple-500/10 text-purple-600"
  },
];

// Cost Traps
const costTraps = [
  { trap: "Utility → Marketing Reclassification", impact: "650% cost increase", fix: "Keep utility templates purely transactional" },
  { trap: "International Authentication", impact: "20x cost (₹2.30 vs ₹0.115)", fix: "Verify destination country code" },
  { trap: "Platform Markups (Wati, etc.)", impact: "15-20% extra per message", fix: "Use zero-markup provider like whats91.com" },
  { trap: "Frequency Cap Saturation", impact: "Undelivered = wasted budget", fix: "Time broadcasts strategically" },
];

// FAQs
const faqs = [
  { 
    q: "How is WhatsApp API billed in 2026?", 
    a: "In 2026, WhatsApp Business API uses per-message billing. You pay only for successfully delivered templates. Marketing messages cost ₹0.8631, Utility ₹0.1150, and Authentication ₹0.1150 (domestic). Service messages within the 24-hour customer window are completely FREE." 
  },
  { 
    q: "What's the difference between Marketing and Utility pricing?", 
    a: "Marketing messages (₹0.8631) are promotional broadcasts like offers and newsletters. Utility messages (₹0.1150) are transaction-triggered alerts like order confirmations and shipping updates. Utility costs 7.5x less than Marketing—keeping templates purely functional prevents costly reclassification." 
  },
  { 
    q: "Are there volume discounts available?", 
    a: "Yes! Utility and Authentication messages have automatic volume tiers. Starting at 25M utility messages/month, rates drop to ₹0.1081 (6% off). At 300M+ messages, you pay only ₹0.0805 (30% off). Marketing has a flat rate regardless of volume." 
  },
  { 
    q: "When are WhatsApp messages completely FREE?", 
    a: "Three scenarios: (1) Any reply within 24 hours of customer message—completely free. (2) Any message type within 72 hours of Click-to-WhatsApp ad click—completely free. (3) Utility templates sent within an active 24-hour service window—free as of April 2025." 
  },
  { 
    q: "Why are some providers charging more than Meta rates?", 
    a: "Many BSPs (Business Solution Providers) add markups of 15-20% on top of Meta's base rates. Wati charges ~₹1.03 for Marketing (vs ₹0.8631 official). whats91.com offers zero markup—you pay exactly the Meta rate, saving ₹9-17 Crores annually for high-volume senders." 
  },
  { 
    q: "What is the 18% GST on WhatsApp API in India?", 
    a: "WhatsApp API services in India attract 18% GST. With local INR billing from Meta, this GST is fully claimable as Input Tax Credit (ITC) for GST-registered businesses. Previously, USD billing made GST compliance complex." 
  },
  { 
    q: "How do messaging tier limits work?", 
    a: "Tier limits determine how many unique users you can message per 24 hours. Tier 0 (unverified) allows 250, Tier 1 (verified) allows 1,000, up to Tier 4 (unlimited). In 2026, Meta checks for upgrades every 6 hours, allowing rapid scaling during peaks." 
  },
  { 
    q: "What is Error 131049 (Saturation)?", 
    a: "Meta limits users to ~2 marketing messages per day across ALL brands. If a user already received 2 marketing messages, your broadcast fails with Error 131049. This global frequency cap encourages strategic timing and high-quality content." 
  },
  { 
    q: "Can I get FREE marketing messages?", 
    a: "Yes! Within the 72-hour Click-to-WhatsApp ad window, ALL message types including Marketing are FREE. This makes CTWA ads highly efficient—the ad spend effectively 'pre-pays' for 72 hours of unlimited messaging." 
  },
  { 
    q: "How often does Meta update pricing?", 
    a: "Meta reviews pricing quarterly as of 2026. The January 2026 update increased Marketing rates by 10% in India due to high volume. Local INR billing protects against currency volatility that previously added 12-20% hidden costs." 
  },
];

// Savings Calculator State
interface CalculatorState {
  marketing: number;
  utility: number;
  auth: number;
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [calculator, setCalculator] = useState<CalculatorState>({
    marketing: 100000,
    utility: 500000,
    auth: 100000,
  });
  const [activeTab, setActiveTab] = useState<'rates' | 'utility' | 'auth'>('rates');

  // Calculate costs
  const calculateCost = (volume: number, baseRate: number, tiers: typeof utilityTiers) => {
    let remaining = volume;
    let totalCost = 0;
    const tierBoundaries = [25000000, 50000000, 100000000, 200000000, 300000000];
    const tierRates = [0.1150, 0.1081, 0.1012, 0.0943, 0.0874, 0.0805];
    
    for (let i = 0; i < tierBoundaries.length && remaining > 0; i++) {
      const prevBoundary = i === 0 ? 0 : tierBoundaries[i - 1];
      const tierVolume = Math.min(remaining, tierBoundaries[i] - prevBoundary);
      totalCost += tierVolume * tierRates[i];
      remaining -= tierVolume;
    }
    
    if (remaining > 0) {
      totalCost += remaining * tierRates[5];
    }
    
    return totalCost;
  };

  const marketingCost = calculator.marketing * 0.8631;
  const utilityCost = calculateCost(calculator.utility, 0.1150, utilityTiers);
  const authCost = calculateCost(calculator.auth, 0.1150, authTiers);
  const totalCost = marketingCost + utilityCost + authCost;
  
  // Compare with 15% markup
  const markedUpCost = totalCost * 1.15;
  const savings = markedUpCost - totalCost;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-surface/80 to-background">
          <div className="absolute inset-0 gradient-brand-subtle pointer-events-none" />
          <div className="relative px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/15 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-5">
                <Award className="h-3.5 w-3.5" />
                Official Meta WhatsApp Business API Pricing
              </div>
              
              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-5">
                WhatsApp API Pricing India 2026
              </h1>
              
              {/* Subheadline */}
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 max-w-2xl mx-auto">
                Pay the exact Meta rates—<strong className="text-text-primary">₹0.8631 for Marketing</strong> and 
                <strong className="text-text-primary"> ₹0.1150 for Utility</strong>—without a single paisa of middleman markup.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="h-12 px-7 text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/25 group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-12 px-7 text-base font-semibold rounded-xl border-border/80 hover:bg-surface"
                >
                  Talk to Sales
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-3">
                {["Zero Markup Guarantee", "Local INR Billing", "18% GST ITC Eligible"].map((badge, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs sm:text-sm text-text-muted bg-white/80 px-3 py-1.5 rounded-full border border-border/50">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Official Rate Card */}
        <section className="py-12 sm:py-16 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Receipt className="h-3.5 w-3.5" />
                2026 Rate Card
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Official Meta Rates (India)
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Effective January 1, 2026 • Per Delivered Message • INR Billing
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {officialRates.map((item, index) => (
                <div 
                  key={index}
                  className={`rounded-2xl border p-6 text-center transition-all duration-300 hover:shadow-lg ${item.color}`}
                >
                  <div className="text-3xl sm:text-4xl font-bold mb-2">{item.rate}</div>
                  <div className="text-base font-semibold text-text-primary mb-1">{item.category}</div>
                  <div className="text-xs text-text-secondary">{item.description}</div>
                </div>
              ))}
            </div>

            {/* 10% Marketing Increase Note */}
            <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-5 text-center">
              <p className="text-sm text-yellow-800">
                <AlertTriangle className="h-4 w-4 inline mr-2" />
                <strong>2026 Update:</strong> Marketing rates increased 10% (from ₹0.78 to ₹0.8631) due to high promotional volume in India. 
                Focus on quality templates and audience segmentation for better ROI.
              </p>
            </div>
          </div>
        </section>

        {/* Provider Comparison */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Provider Price Comparison
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Hidden markups can cost you ₹9-17 Crores annually at scale
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface/80">
                    <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Provider</th>
                    <th className="text-center p-4 text-xs font-semibold text-text-muted uppercase">Base Rate</th>
                    <th className="text-center p-4 text-xs font-semibold text-text-muted uppercase">Markup</th>
                    <th className="text-center p-4 text-xs font-semibold text-text-muted uppercase">You Pay</th>
                  </tr>
                </thead>
                <tbody>
                  {providerComparison.map((row, i) => (
                    <tr 
                      key={i} 
                      className={`border-t border-border/60 ${row.recommended ? 'bg-brand-primary/5' : ''}`}
                    >
                      <td className="p-4 text-sm text-text-primary font-medium">
                        <div className="flex items-center gap-2">
                          {row.provider}
                          {row.recommended && (
                            <span className="px-2 py-0.5 rounded-full bg-brand-primary/10 text-xs text-brand-primary font-medium">
                              Zero Markup
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-4 text-sm text-center text-text-secondary">{row.marketing}</td>
                      <td className={`p-4 text-sm text-center font-medium ${row.markup === "₹0.00" ? 'text-green-600' : 'text-red-600'}`}>
                        {row.markup}
                      </td>
                      <td className="p-4 text-sm text-center font-bold text-text-primary">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-xl border border-brand-primary/20 bg-brand-primary/5 p-5 text-center">
              <p className="text-sm text-text-secondary">
                <strong className="text-brand-primary">Savings Example:</strong> At 100M messages/month, avoiding a 15% markup saves 
                <strong className="text-brand-primary"> ₹12.9 Lakhs/month</strong> = <strong className="text-brand-primary">₹1.55 Crores/year</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Volume Tiers */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <TrendingUp className="h-3.5 w-3.5" />
                Volume Discounts
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Scale More, Pay Less
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Automatic tier discounts for Utility and Authentication messages. Marketing has flat pricing.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-2 mb-8">
              <button
                onClick={() => setActiveTab('utility')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'utility' ? 'bg-brand-primary text-white' : 'bg-white border border-border/60 text-text-secondary hover:bg-surface'}`}
              >
                Utility Tiers
              </button>
              <button
                onClick={() => setActiveTab('auth')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'auth' ? 'bg-brand-primary text-white' : 'bg-white border border-border/60 text-text-secondary hover:bg-surface'}`}
              >
                Authentication Tiers
              </button>
            </div>

            {/* Tier Tables */}
            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface/80">
                    <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Monthly Volume</th>
                    <th className="text-center p-4 text-xs font-semibold text-text-muted uppercase">Rate per Message</th>
                    <th className="text-center p-4 text-xs font-semibold text-text-muted uppercase">Discount</th>
                  </tr>
                </thead>
                <tbody>
                  {(activeTab === 'utility' ? utilityTiers : authTiers).map((row, i) => (
                    <tr key={i} className="border-t border-border/60">
                      <td className="p-4 text-sm text-text-primary font-medium">{row.volume}</td>
                      <td className="p-4 text-sm text-center font-bold text-brand-primary">{row.rate}</td>
                      <td className="p-4 text-sm text-center">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${row.discount === 'Base Rate' ? 'bg-surface text-text-muted' : 'bg-green-100 text-green-700'}`}>
                          {row.discount}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-center text-xs text-text-muted">
              Marginal pricing: First 25M messages at base rate, subsequent messages at discounted tier rate
            </p>
          </div>
        </section>

        {/* Free Messaging Windows */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 border border-green-200 px-4 py-1.5 text-xs sm:text-sm font-medium text-green-700 mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                Free Messaging
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                How to Get FREE Messages
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {freeWindows.map((item, index) => (
                <div 
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-primary/20"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Timer className="h-4 w-4 text-text-muted" />
                      <span className="text-text-secondary">Duration: <strong className="text-text-primary">{item.duration}</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Zap className="h-4 w-4 text-text-muted" />
                      <span className="text-text-secondary">Trigger: <strong className="text-text-primary">{item.trigger}</strong></span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                    <p className="text-sm font-medium text-green-700">{item.benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTWA Hack */}
            <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6">
              <div className="flex items-start gap-4">
                <Target className="h-6 w-6 text-green-600 shrink-0" />
                <div>
                  <h4 className="text-base font-semibold text-green-800 mb-2">The 72-Hour CTWA Hack</h4>
                  <p className="text-sm text-green-700 mb-3">
                    Run a Click-to-WhatsApp ad on Facebook/Instagram. When users click and message you, the 72-hour window opens. 
                    During this window, <strong>ALL message types including Marketing are FREE</strong>. This effectively makes your 
                    ad spend "pre-pay" for 72 hours of unlimited messaging.
                  </p>
                  <p className="text-xs text-green-600">
                    Pro tip: This is the only way to send FREE marketing messages in 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Calculator */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[800px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Calculator className="h-3.5 w-3.5" />
                Cost Calculator
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Estimate Your Monthly Cost
              </h2>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
              <div className="space-y-6">
                {/* Marketing Input */}
                <div>
                  <label className="flex items-center justify-between text-sm font-medium text-text-primary mb-2">
                    <span>Marketing Messages / Month</span>
                    <span className="text-text-muted">@ ₹0.8631 each</span>
                  </label>
                  <Input
                    type="number"
                    value={calculator.marketing}
                    onChange={(e) => setCalculator({...calculator, marketing: parseInt(e.target.value) || 0})}
                    className="h-11"
                  />
                </div>

                {/* Utility Input */}
                <div>
                  <label className="flex items-center justify-between text-sm font-medium text-text-primary mb-2">
                    <span>Utility Messages / Month</span>
                    <span className="text-text-muted">Volume tiers apply</span>
                  </label>
                  <Input
                    type="number"
                    value={calculator.utility}
                    onChange={(e) => setCalculator({...calculator, utility: parseInt(e.target.value) || 0})}
                    className="h-11"
                  />
                </div>

                {/* Auth Input */}
                <div>
                  <label className="flex items-center justify-between text-sm font-medium text-text-primary mb-2">
                    <span>Authentication Messages / Month</span>
                    <span className="text-text-muted">Volume tiers apply</span>
                  </label>
                  <Input
                    type="number"
                    value={calculator.auth}
                    onChange={(e) => setCalculator({...calculator, auth: parseInt(e.target.value) || 0})}
                    className="h-11"
                  />
                </div>

                {/* Results */}
                <div className="border-t border-border/60 pt-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Marketing Cost:</span>
                    <span className="font-medium text-text-primary">₹{marketingCost.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Utility Cost (with tiers):</span>
                    <span className="font-medium text-text-primary">₹{utilityCost.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Authentication Cost:</span>
                    <span className="font-medium text-text-primary">₹{authCost.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t border-border/60 pt-4">
                    <span className="text-text-primary">Total Monthly Cost:</span>
                    <span className="text-brand-primary">₹{totalCost.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                  </div>
                </div>

                {/* Savings Comparison */}
                <div className="rounded-xl bg-green-50 border border-green-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-800">You save vs 15% markup:</p>
                      <p className="text-xs text-green-600">Based on Wati/AiSensy typical rates</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-700">₹{savings.toLocaleString('en-IN', {maximumFractionDigits: 0})}</p>
                      <p className="text-xs text-green-600">per month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Messaging Tiers */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Layers className="h-3.5 w-3.5" />
                Scaling Limits
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Messaging Tier System
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Daily unique user limits. Meta checks for upgrades every <strong>6 hours</strong> in 2026.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {messagingTiers.map((item, index) => (
                <div 
                  key={index}
                  className="group rounded-xl border border-border/60 bg-white p-5 text-center transition-all duration-300 hover:shadow-md hover:border-brand-primary/20"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary mb-3 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="text-lg font-bold text-text-primary mb-1">{item.tier}</div>
                  <div className="text-2xl font-bold text-brand-primary mb-2">{item.limit}</div>
                  <div className="text-xs text-text-secondary">{item.requirement}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-brand-primary/20 bg-brand-primary/5 p-5 text-center">
              <p className="text-sm text-text-secondary">
                <RefreshCw className="h-4 w-4 inline mr-2 text-brand-primary" />
                <strong className="text-text-primary">6-Hour Upgrade Check:</strong> Hit 50% of daily limit + maintain Green quality rating = automatic tier bump within 6 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Traps */}
        <section className="py-12 sm:py-16 md:py-20 bg-red-50/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 border border-red-200 px-4 py-1.5 text-xs sm:text-sm font-medium text-red-700 mb-4">
                <AlertTriangle className="h-3.5 w-3.5" />
                Hidden Costs
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Avoid These Cost Traps
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {costTraps.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-red-200 bg-white p-5"
                >
                  <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-1">{item.trap}</h4>
                    <p className="text-sm text-red-600 font-medium mb-2">{item.impact}</p>
                    <p className="text-xs text-text-secondary"><strong>Fix:</strong> {item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GST Information */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[800px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Local INR Billing & GST
              </h2>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary shrink-0">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-text-primary mb-1">No Currency Volatility</h4>
                    <p className="text-sm text-text-secondary">Direct INR billing from Meta India eliminates 12-20% hidden costs from USD conversion and bank fees.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary shrink-0">
                    <Percent className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-text-primary mb-1">18% GST Fully Claimable</h4>
                    <p className="text-sm text-text-secondary">Invoices from Meta India entity allow GST-registered businesses to claim full Input Tax Credit (ITC).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary shrink-0">
                    <Receipt className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-text-primary mb-1">Transparent Invoicing</h4>
                    <p className="text-sm text-text-secondary">Every message is a line item. Track campaign costs precisely with delivery-based charging.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
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
                  Start with zero markup today
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8">
                  Pay exact Meta rates. No hidden fees. Full transparency.
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
