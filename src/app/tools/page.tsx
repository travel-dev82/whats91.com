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
  Type,
  Calculator,
  Receipt,
  Image,
  Search,
  ArrowRight,
  Sparkles,
  Users,
  Zap,
  DollarSign,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Online Tools | WhatsApp, QR Code, Calculators & More | Whats91",
  description: "Free online utility tools for businesses and developers. WhatsApp Link Generator, QR Code Creator, Case Converter, SIP Calculator, GST Calculator, Image Compressor, and SEO Checker. No signup required.",
  keywords: ["free online tools", "WhatsApp link generator", "QR code generator", "case converter", "SIP calculator", "GST calculator", "image compressor", "SEO checker", "free utility tools"],
  openGraph: {
    title: "Free Online Tools | Whats91",
    description: "Free online utility tools for businesses and developers. No signup required.",
    url: "https://whats91.com/tools",
    siteName: "Whats91",
    type: "website",
  },
};

const tools = [
  {
    title: "Lead Qualification ROI Calculator",
    description: "Compare AI vs human vs self-built lead qualification costs. Calculate monthly savings, ROI, and cost per qualified lead instantly.",
    href: "/tools/lead-qualification-roi-calculator",
    icon: TrendingUp,
    category: "Business Tools",
    featured: true,
    searchVolume: "High",
  },
  {
    title: "WhatsApp API Cost Calculator",
    description: "Calculate your WhatsApp Business API costs accurately. Estimate spending by message type, volume, and country with official Meta pricing.",
    href: "/tools/whatsapp-api-cost-calculator",
    icon: DollarSign,
    category: "WhatsApp Tools",
    featured: true,
    searchVolume: "High",
  },
  {
    title: "WhatsApp Link Generator",
    description: "Create clickable WhatsApp links (wa.me) with pre-filled messages. Perfect for business cards, email signatures, and marketing campaigns.",
    href: "/tools/whatsapp-link-generator",
    icon: MessageCircle,
    category: "WhatsApp Tools",
    featured: true,
    searchVolume: "High",
  },
  {
    title: "QR Code Generator",
    description: "Generate high-resolution QR codes for URLs, text, WhatsApp, and more. Download as PNG or SVG without watermarks.",
    href: "/tools/qr-code-generator",
    icon: QrCode,
    category: "Communication",
    featured: true,
    searchVolume: "High",
  },
  {
    title: "Case Converter",
    description: "Convert text between UPPERCASE, lowercase, Title Case, and Sentence case instantly. Perfect for writers and developers.",
    href: "/tools/case-converter",
    icon: Type,
    category: "Text Tools",
    featured: false,
    searchVolume: "Medium",
  },
  {
    title: "SIP Calculator",
    description: "Calculate your Systematic Investment Plan returns. Project wealth accumulation with compound interest over time.",
    href: "/tools/sip-calculator",
    icon: Calculator,
    category: "Finance",
    featured: true,
    searchVolume: "High",
  },
  {
    title: "GST Calculator",
    description: "Calculate GST for goods and services. Supports CGST, SGST, IGST with inclusive and exclusive pricing modes.",
    href: "/tools/gst-calculator",
    icon: Receipt,
    category: "Finance",
    featured: false,
    searchVolume: "High",
  },
  {
    title: "Image Compressor",
    description: "Compress images instantly in your browser. Reduce file sizes while maintaining quality for faster website loading.",
    href: "/tools/image-compressor",
    icon: Image,
    category: "Media Tools",
    featured: false,
    searchVolume: "High",
  },
  {
    title: "SEO Score Checker",
    description: "Analyze your website's SEO health. Get instant recommendations for improving search engine rankings.",
    href: "/tools/seo-checker",
    icon: Search,
    category: "SEO Tools",
    featured: true,
    searchVolume: "High",
  },
];

const categories = [
  { name: "Business Tools", count: 1 },
  { name: "WhatsApp Tools", count: 2 },
  { name: "Communication", count: 1 },
  { name: "Finance", count: 2 },
  { name: "Text Tools", count: 1 },
  { name: "Media Tools", count: 1 },
  { name: "SEO Tools", count: 1 },
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
                Free Online Tools for
                <span className="text-brand-primary"> Business Growth</span>
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Powerful utility tools to streamline your workflow. No signup required, no limits, no watermarks.
                Just instant results.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-brand-primary" />
                  <span>Instant Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-brand-primary" />
                  <span>Used by 10,000+ users</span>
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
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-sm font-medium text-text-secondary mr-2">Filter by:</span>
              <Badge variant="outline" className="bg-brand-primary/10 text-brand-primary border-brand-primary/20">
                All Tools
              </Badge>
              {categories.map((cat) => (
                <Badge key={cat.name} variant="outline" className="cursor-pointer hover:bg-surface">
                  {cat.name} ({cat.count})
                </Badge>
              ))}
            </div>

            {/* Tools Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[10px] text-text-muted">
                            {tool.category}
                          </Badge>
                          <Badge variant="outline" className="text-[10px] text-green-600 border-green-200">
                            {tool.searchVolume} Volume
                          </Badge>
                        </div>
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
                Why Our Tools Are Free?
              </h2>
              <p className="text-text-secondary">
                We believe in providing value first. Our free tools help businesses and developers solve everyday problems
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
                    Your data never leaves your browser. We don't store or track any information.
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
                Need More Advanced Features?
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Explore our WhatsApp Cloud API platform for enterprise-grade messaging, automation, and CRM integrations.
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
