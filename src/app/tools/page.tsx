import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  QrCode,
  ArrowRight,
  Sparkles,
  Users,
  Zap,
  DollarSign,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free WhatsApp Business Tools | Link Generator, Cost Calculator | Whats91",
  description: "Free tools for WhatsApp Business users. Generate wa.me links, calculate API costs, estimate lead qualification ROI, and create QR codes. No signup required.",
  keywords: ["WhatsApp link generator", "WhatsApp API cost calculator", "lead qualification ROI", "QR code generator", "WhatsApp business tools", "free WhatsApp tools"],
  openGraph: {
    title: "Free WhatsApp Business Tools | Whats91",
    description: "Free tools for WhatsApp Business users. Generate links, calculate costs, and more. No signup required.",
    url: "https://whats91.com/tools",
    siteName: "Whats91",
    type: "website",
  },
};

const tools = [
  {
    title: "WhatsApp API Cost Calculator",
    description: "Calculate your WhatsApp Business API costs accurately. Estimate spending by message type, volume, and country with official Meta pricing.",
    href: "/tools/whatsapp-api-cost-calculator",
    icon: DollarSign,
    category: "WhatsApp API",
    featured: true,
  },
  {
    title: "Lead Qualification ROI Calculator",
    description: "Compare AI-powered WhatsApp automation vs human agents vs self-built solutions. Calculate monthly savings, ROI, and cost per qualified lead.",
    href: "/tools/lead-qualification-roi-calculator",
    icon: TrendingUp,
    category: "Business ROI",
    featured: true,
  },
  {
    title: "WhatsApp Link Generator",
    description: "Create clickable WhatsApp links (wa.me) with pre-filled messages. Perfect for business cards, email signatures, websites, and marketing campaigns.",
    href: "/tools/whatsapp-link-generator",
    icon: MessageCircle,
    category: "WhatsApp Tools",
    featured: true,
  },
  {
    title: "QR Code Generator",
    description: "Generate high-resolution QR codes for WhatsApp links, URLs, vCards, and more. Download as PNG or SVG without watermarks.",
    href: "/tools/qr-code-generator",
    icon: QrCode,
    category: "Marketing",
    featured: true,
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-surface to-background py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto relative">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm font-medium">
                <Sparkles className="h-3.5 w-3.5 mr-1.5 text-brand-primary" />
                100% Free Tools
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
                WhatsApp Business Tools
                <span className="text-brand-primary"> for Growth</span>
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Free tools to maximize your WhatsApp API ROI. Calculate costs, generate links, and estimate automation savings—no signup required.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-brand-primary" />
                  <span>Instant Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-brand-primary" />
                  <span>Used by 10,000+ businesses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-primary" />
                  <span>No Registration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
                Tools for WhatsApp Business
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                Everything you need to plan, launch, and optimize your WhatsApp API strategy.
              </p>
            </div>

            {/* Tools Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="group">
                  <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/5 hover:-translate-y-1 ${
                    tool.featured ? 'ring-1 ring-brand-primary/20 bg-gradient-to-br from-background to-brand-primary/5' : ''
                  }`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className={`p-2.5 rounded-lg ${tool.featured ? 'bg-brand-primary/10' : 'bg-surface'}`}>
                          <tool.icon className={`h-5 w-5 ${tool.featured ? 'text-brand-primary' : 'text-text-secondary'}`} />
                        </div>
                        {tool.featured && (
                          <Badge variant="default" className="bg-brand-primary text-white text-[10px]">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg font-semibold text-text-primary mt-3 group-hover:text-brand-primary transition-colors">
                        {tool.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-text-secondary line-clamp-2">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-[10px] text-text-muted">
                          {tool.category}
                        </Badge>
                        <ArrowRight className="h-4 w-4 text-text-muted group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Free Tools Section */}
        <section className="py-12 sm:py-16 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Why These Tools Are Free?
              </h2>
              <p className="text-text-secondary">
                We believe in providing value first. These tools help businesses plan their WhatsApp API strategy 
                without any cost or commitment.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto p-3 rounded-full bg-brand-primary/10 w-fit mb-3">
                    <Zap className="h-6 w-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg">Instant Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    All tools process data instantly in your browser. No waiting, no server delays.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto p-3 rounded-full bg-brand-primary/10 w-fit mb-3">
                    <Sparkles className="h-6 w-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg">Privacy First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    Your data never leaves your browser. We don&apos;t store or track any information.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto p-3 rounded-full bg-brand-primary/10 w-fit mb-3">
                    <Users className="h-6 w-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg">No Limits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    Use our tools as many times as you need. No daily limits, no watermarks, no signup walls.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="bg-gradient-to-r from-brand-primary to-brand-primary-hover rounded-2xl p-8 sm:p-12 text-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Launch WhatsApp API?
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Get started with official Meta WhatsApp Cloud API. Zero markup on message pricing, full automation support, and ERP integrations.
              </p>
              <Button size="lg" variant="secondary" asChild className="bg-white text-brand-primary hover:bg-white/90">
                <Link href="/contact">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
