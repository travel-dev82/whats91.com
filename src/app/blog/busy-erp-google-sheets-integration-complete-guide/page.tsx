"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Calendar,
  Tag,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock4,
  Building2,
  ChevronRight,
  Copy,
  Check,
  Database,
  FileSpreadsheet,
  BarChart3,
  TrendingUp,
  RefreshCw,
  Shield,
  Lock,
  Zap,
  Users,
  FileText,
  CreditCard,
  Globe,
  Settings,
  Send,
  MessageCircle,
  Bot,
  Layers,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { getRelatedPosts, categoryColors } from "@/lib/blog/registry";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

function ShareSection({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async (platform?: string) => {
    const url = window.location.href;
    if (platform === "copy") {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, "_blank");
    } else if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" size="sm" onClick={() => handleShare("twitter")} className="h-8 px-3 text-xs">Twitter</Button>
      <Button variant="outline" size="sm" onClick={() => handleShare("linkedin")} className="h-8 px-3 text-xs">LinkedIn</Button>
      <Button variant="outline" size="sm" onClick={() => handleShare("copy")} className="h-8 px-3 text-xs gap-1.5">
        {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}

function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const relatedPosts = getRelatedPosts(currentSlug, 2);
  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 bg-surface/50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-5 w-5 text-brand-primary" />
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Continue Reading</h2>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-6">
          {relatedPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <Card className="h-full border-border/60 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Badge className={`${categoryColors[post.category] || "bg-gray-100 text-gray-700"} border text-xs mb-4`}>
                      {post.category}
                    </Badge>
                    <h3 className="font-semibold text-text-primary text-lg mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-text-muted">
                      <span>{post.readingTime} min read</span>
                      <span className="flex items-center gap-1 text-brand-primary font-medium group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// Data Modules Table
const dataModules = [
  { module: "Financial Accounting", components: "Ledgers, Trial Balance, P&L, Balance Sheet", value: "Real-time liquidity tracking and multi-year trend analysis" },
  { module: "Inventory Management", components: "Stock status, Batch-wise details, Multiple Godowns", value: "Automated reorder alerts and stock aging visualization" },
  { module: "Sales & Purchase", components: "Quotations, Orders, Challans, Invoices", value: "Sales funnel tracking and vendor performance scoring" },
  { module: "Outstanding Analysis", components: "Bill-by-bill tracking, Ageing reports", value: "Automated collection workflows and credit risk assessment" },
  { module: "GST Compliance", components: "GSTR-1, GSTR-3B, Reconciliation data", value: "Seamless statutory auditing and tax liability forecasting" },
  { module: "Operations/Payroll", components: "Employee attendance, Salary structures, PF/ESI", value: "Workforce productivity analysis and budget vs. actual labor costs" },
];

// Dashboard Types
const dashboardTypes = [
  { type: "CFO Dashboard", metrics: "MRR, CLTV, CAC, Burn Rate, Profit Margins", decision: "Capital allocation and investment prioritization" },
  { type: "Revenue Dashboard", metrics: "Sales by region, Product performance, Seasonal trends", decision: "Sales team quota setting and inventory procurement" },
  { type: "Cash Flow Tracker", metrics: "Inbound vs. Outbound, Runway indicator, Daily balances", decision: "Short-term financing needs and expense control" },
  { type: "Inventory Dashboard", metrics: "Stock turnover ratio, Dead stock analysis, Reorder points", decision: "Warehouse space optimization and reduction in carrying costs" },
];

// Integration Patterns
const integrationPatterns = [
  { pattern: "Busy to Salesforce", mechanism: "Apps Script or Data Connector for Salesforce", useCase: "Syncing customer purchase history for better lead scoring" },
  { pattern: "Busy to Zoho CRM", mechanism: "Zoho Flow or Webhook-based triggers", useCase: "Automating ticket creation when a payment is overdue" },
  { pattern: "Busy to BigQuery", mechanism: "Data Connector for BigQuery", useCase: "Large-scale historical analysis and data warehousing" },
  { pattern: "Busy to SAP", mechanism: "OAuth authentication and Drive web service", useCase: "Consolidating MSME branch data into a corporate SAP instance" },
];

// WhatsApp Automation Features
const whatsappFeatures = [
  { feature: "Ledger Bot", action: "Sends 'Statement' via WhatsApp", response: "Returns a PDF of the last 30 days' ledger", benefit: "50% reduction in support inquiries" },
  { feature: "Balance Inquiry", action: "Sends 'Outstanding'", response: "Returns current balance and a payment link", benefit: "Improved cash flow and faster payments" },
  { feature: "Order Status", action: "Clicks 'Track Order' button", response: "Returns real-time status from Busy Challan", benefit: "60% decrease in 'Where is my order?' calls" },
  { feature: "Feedback Loop", action: "Clicks NPS button in WhatsApp", response: "Logs response directly into Google Sheets", benefit: "Real-time customer satisfaction tracking" },
];

// Security Layers
const securityLayers = [
  { layer: "Encryption", mechanism: "256-bit SSL/TLS for data in transit", protection: "Prevents interception of financial payloads" },
  { layer: "Authentication", mechanism: "OAuth 2.0 and SHA256 Signature Validation", protection: "Ensures only verified systems can access data" },
  { layer: "Compliance", mechanism: "GDPR and DPDP (Digital Personal Data Protection) Act", protection: "Protects customer privacy and ensures legal adherence" },
  { layer: "Audit Trails", mechanism: "Google Sheets Version History and User Activity Logs", protection: "Tracks who changed what data and when" },
];

export default function BusyERPGoogleSheetsIntegrationGuide() {
  const postSlug = "busy-erp-google-sheets-integration-complete-guide";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-surface/80 to-background">
          <div className="absolute inset-0 gradient-brand-subtle pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <FadeIn>
              <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
                <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4 text-text-muted" />
                <Link href="/blog" className="hover:text-brand-primary transition-colors">Blog</Link>
                <ChevronRight className="h-4 w-4 text-text-muted" />
                <span className="text-text-primary font-medium truncate max-w-[200px]">Busy ERP Google Sheets</span>
              </nav>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 border text-sm px-3 py-1">ERP Integration</Badge>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-text-primary mb-5 leading-tight">
                Busy ERP to Google Sheets Integration: Complete Guide for Enterprise Data Liberation
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg text-text-secondary mb-6 leading-relaxed max-w-3xl">
                Discover how syncing Busy Accounting Software data to Google Sheets transforms static record-keeping into a dynamic automation engine. Learn advanced reporting, CRM integration, and WhatsApp workflow automation.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="h-4 w-4 text-text-muted" />
                {["Busy ERP", "Google Sheets", "Integration", "Automation", "WhatsApp"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                    <Badge variant="outline" className="hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:text-brand-primary transition-all cursor-pointer text-xs">
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Key Info Cards */}
        <section className="py-6 sm:py-8">
          <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <FadeIn>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-white p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Published</p>
                    <p className="text-sm font-medium text-text-primary">Mar 15, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-white p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                    <Clock4 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Reading time</p>
                    <p className="text-sm font-medium text-text-primary">22 minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-white p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Category</p>
                    <p className="text-sm font-medium text-text-primary">ERP Integration</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="pb-8">
          <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <FadeIn>
              <div className="rounded-2xl border border-border/60 bg-surface/50 p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-brand-primary" />
                  What you&apos;ll learn
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Core data modules in Busy ERP available for Google Sheets synchronization",
                    "Build advanced business intelligence dashboards from live ERP data",
                    "Export and transform ERP data for CRM systems (Salesforce, Zoho, SAP)",
                    "Automate document generation (PDFs, custom invoices) from spreadsheet data",
                    "Power WhatsApp chatbots with real-time Busy ERP information",
                    "Security, governance, and scalability best practices",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-text-secondary">
                      <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Content Sections */}
        <section className="pb-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <FadeIn>
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary pb-3 border-b border-border/50">
                  From Data Silos to Data Liquidity
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  The contemporary business landscape necessitates a departure from the &quot;data silo&quot; model, where financial information is confined within a single software interface, toward a model of &quot;data liquidity,&quot; where information flows seamlessly across operational boundaries. <strong className="text-text-primary">Busy Accounting Software</strong> has long served as a robust repository for the transactional lifeblood of Indian enterprises—spanning Goods and Services Tax (GST) management, complex inventory across multiple locations, and intricate multi-branch financial accounting.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  However, the true competitive advantage for modern firms lies not in the storage of this data, but in its liberation. By synchronizing Busy ERP data into Google Sheets, organizations transform a static record-keeping system into a <strong className="text-text-primary">dynamic automation engine</strong>. This comprehensive guide explores the multifaceted utility of this integration, focusing on advanced reporting, cross-platform interoperability, and the automation of customer-facing workflows.
                </p>

                <div className="rounded-xl bg-brand-primary/5 border border-brand-primary/20 p-5">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-text-primary mb-1">Key Insight</p>
                      <p className="text-sm text-text-secondary">
                        Google Sheets integration with Busy ERP is not just about exporting data—it&apos;s about creating a &quot;Management Information System (MIS) democratization&quot; where department heads can collaborate on live data without needing direct access to the accounting software&apos;s administrative menu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Data Modules Section */}
            <FadeIn>
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary pb-3 border-b border-border/50">
                  Understanding the Data Streams of Busy ERP
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  To effectively leverage synchronized data, one must first identify the specific modules within Busy Accounting Software that provide the highest utility when exposed to the extensibility of Google Sheets. Busy is an integrated business management solution designed for micro, small, and medium enterprises (MSMEs), covering the entire spectrum of financial and payroll needs.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  The versatility of this data is rooted in its granular nature. For instance, Busy tracks inventory based on multiple parameters such as size, color, manufacturing date, and batch. When this granularity is reflected in a spreadsheet, it enables a level of analysis that exceeds the capabilities of standard MIS reports.
                </p>

                <div className="rounded-2xl border border-border/60 bg-white overflow-hidden overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface border-b border-border/60">
                        <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Data Module</th>
                        <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Core Components</th>
                        <th className="px-4 sm:px-6 py-4 text-left font-semibold text-brand-primary">Operational Value in Google Sheets</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataModules.map((row, i) => (
                        <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface/30 transition-colors">
                          <td className="px-4 sm:px-6 py-4 font-medium text-text-primary">{row.module}</td>
                          <td className="px-4 sm:px-6 py-4 text-text-secondary">{row.components}</td>
                          <td className="px-4 sm:px-6 py-4">
                            <span className="flex items-center gap-2 text-brand-primary">
                              <CheckCircle2 className="h-4 w-4 shrink-0" />
                              {row.value}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>

            {/* Advanced Business Intelligence */}
            <FadeIn>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                    Advanced Business Intelligence Dashboards
                  </h2>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Once Busy ERP data is synchronized, the primary use case is the creation of interactive, high-fidelity dashboards. Unlike the static reports generated within the ERP, Google Sheets dashboards are capable of incorporating external data points, such as marketing spend from Google Ads or website traffic from Google Analytics, to provide a holistic view of the business.
                </p>

                {/* Dynamic Financial Modeling */}
                <div className="rounded-2xl border border-border/60 bg-white p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-4">Dynamic Financial Modeling and Forecasting</h3>
                  <p className="text-text-secondary mb-4">
                    Advanced reporting in Google Sheets allows for predictive and prescriptive analytics that go beyond descriptive summaries of past performance. By applying statistical formulas to historical sales data pulled from Busy, organizations can forecast future trends with a higher degree of accuracy.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2 mb-4">
                    <div className="rounded-xl bg-surface/50 p-4">
                      <h4 className="font-semibold text-text-primary mb-2">Linear Regression Models</h4>
                      <p className="text-sm text-text-secondary">Predict upcoming inventory shortages based on seasonal demand fluctuations</p>
                    </div>
                    <div className="rounded-xl bg-surface/50 p-4">
                      <h4 className="font-semibold text-text-primary mb-2">Real-Time Financial Ratios</h4>
                      <p className="text-sm text-text-secondary">Current ratio, debt-to-equity ratio calculated on-the-fly for liquidity monitoring</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-green-50 border border-green-100 p-4">
                    <p className="text-sm text-green-700">
                      <strong className="text-green-800">Multi-Currency Support:</strong> Particularly valuable for businesses managing export/import operations where exchange rate fluctuations must be monitored alongside domestic accounting figures.
                    </p>
                  </div>
                </div>

                {/* Dashboard Types Table */}
                <div className="rounded-2xl border border-border/60 bg-white overflow-hidden overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface border-b border-border/60">
                        <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Dashboard Type</th>
                        <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Key Metrics Tracked</th>
                        <th className="px-4 sm:px-6 py-4 text-left font-semibold text-brand-primary">Strategic Decision Support</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dashboardTypes.map((row, i) => (
                        <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface/30 transition-colors">
                          <td className="px-4 sm:px-6 py-4 font-medium text-text-primary">{row.type}</td>
                          <td className="px-4 sm:px-6 py-4 text-text-secondary">{row.metrics}</td>
                          <td className="px-4 sm:px-6 py-4 text-brand-primary font-medium">{row.decision}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Automated Aging Analysis */}
                <div className="rounded-2xl border border-border/60 bg-white p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-4">Automated Aging Analysis for Cash Flow Optimization</h3>
                  <p className="text-text-secondary mb-4">
                    Accounts Receivable (AR) management is perhaps the most critical application of synchronized Busy ERP data. While Busy provides outstanding reports with aging, moving this data to a spreadsheet allows for the creation of a <strong className="text-text-primary">&quot;Live AR Aging Dashboard&quot;</strong>.
                  </p>
                  <div className="rounded-xl bg-surface/50 p-4 mb-4">
                    <p className="text-sm text-text-secondary mb-2">
                      <strong>The mathematical logic for Days Overdue calculation:</strong>
                    </p>
                    <code className="text-sm bg-white px-3 py-2 rounded-lg border border-border/60 block">
                      Days_Overdue = CURRENT_DATE() - Due_Date
                    </code>
                    <p className="text-xs text-text-muted mt-2">
                      Where CURRENT_DATE() is a dynamic function and Due_Date is extracted from the Busy sales voucher
                    </p>
                  </div>
                  <p className="text-text-secondary">
                    By categorizing results into &quot;buckets&quot; (e.g., 0–30, 31–60, 61–90, and 91+ days), firms can visualize their risk profile and prioritize collections based on a combination of balance size and overdue duration.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Data Interoperability */}
            <FadeIn>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                    Data Interoperability: The Spreadsheet as Integration Hub
                  </h2>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Google Sheets acts as a powerful &quot;staging area&quot; for data that needs to move between Busy and larger, cloud-native ERPs or CRMs like Salesforce, Zoho, or SAP. The manual export-import process—often involving CSV files—is prone to version drift and manual entry errors. By using the spreadsheet as a transformation layer, businesses can ensure data integrity across their entire technology stack.
                </p>

                {/* CRM Migration */}
                <div className="rounded-2xl border border-border/60 bg-white p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-4">Migration to Cloud CRMs (Salesforce and Zoho)</h3>
                  <p className="text-text-secondary mb-4">
                    Integrating Busy ERP data with CRM systems allows the sales team to see actual financial transactions alongside their lead and opportunity data. For instance, when an invoice is recorded in Busy, its details can be synced to a Google Sheet, which then triggers an update to the corresponding &quot;Account&quot; in Salesforce or Zoho CRM.
                  </p>
                  <p className="text-text-secondary mb-4">
                    The technical mechanism often involves using Google Apps Script to fetch data from the spreadsheet and push it to the CRM&apos;s endpoint via REST API. This methodology allows for field mapping, where Busy&apos;s specific fields—such as Broker Commission or Scheme Management details—can be mapped to custom fields in Salesforce.
                  </p>

                  <div className="rounded-2xl border border-border/60 overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-surface border-b border-border/60">
                          <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Integration Pattern</th>
                          <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Mechanism</th>
                          <th className="px-4 sm:px-6 py-4 text-left font-semibold text-brand-primary">Use Case</th>
                        </tr>
                      </thead>
                      <tbody>
                        {integrationPatterns.map((row, i) => (
                          <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface/30 transition-colors">
                            <td className="px-4 sm:px-6 py-4 font-medium text-text-primary">{row.pattern}</td>
                            <td className="px-4 sm:px-6 py-4 text-text-secondary">{row.mechanism}</td>
                            <td className="px-4 sm:px-6 py-4 text-brand-primary font-medium">{row.useCase}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Document Automation */}
                <div className="rounded-2xl border border-border/60 bg-white p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-4">Document Automation: Generating PDFs and Custom Invoices</h3>
                  <p className="text-text-secondary mb-4">
                    While Busy has a fully user-configurable invoicing system, certain business requirements demand documents that incorporate data not found in the ERP—such as custom marketing messages, QR codes for specific loyalty programs, or highly stylized layouts for international clients.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3 mb-4">
                    <div className="rounded-xl bg-surface/50 p-4 text-center">
                      <FileText className="h-8 w-8 text-brand-primary mx-auto mb-2" />
                      <p className="text-sm font-medium text-text-primary">Google Docs Templates</p>
                    </div>
                    <div className="rounded-xl bg-surface/50 p-4 text-center">
                      <Code2 className="h-8 w-8 text-brand-primary mx-auto mb-2" />
                      <p className="text-sm font-medium text-text-primary">Apps Script Automation</p>
                    </div>
                    <div className="rounded-xl bg-surface/50 p-4 text-center">
                      <Globe className="h-8 w-8 text-brand-primary mx-auto mb-2" />
                      <p className="text-sm font-medium text-text-primary">WhatsApp Delivery</p>
                    </div>
                  </div>
                  <p className="text-text-secondary">
                    Using Google Apps Script, the spreadsheet can iterate through a list of new transactions from Busy, source the associated customer email, fill a Google Doc template to generate a PDF, and automatically save it to an organized Google Drive folder or send via WhatsApp to the client.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* WhatsApp Automation */}
            <FadeIn>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                    The Conversational Interface: Automating Customer Engagement via WhatsApp
                  </h2>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  The integration of Busy ERP data with WhatsApp, facilitated by platforms like Whats91 and the Google Sheets backend, represents the vanguard of &quot;Conversational Commerce.&quot; By transforming static financial records into interactive messages, businesses can reduce operational costs and improve customer satisfaction.
                </p>

                {/* Real-Time Transactional Workflows */}
                <div className="rounded-2xl border border-border/60 bg-white p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-4">Real-Time Transactional Workflows</h3>
                  <p className="text-text-secondary mb-4">
                    When a transaction is recorded in Busy, the real-time sync to Google Sheets triggers a webhook that communicates with the WhatsApp Cloud API. This allows for instant delivery of utility templates:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3 mb-4">
                    <div className="rounded-xl bg-green-50 border border-green-100 p-4">
                      <Send className="h-5 w-5 text-green-600 mb-2" />
                      <p className="text-sm font-semibold text-green-800">Order Confirmation</p>
                      <p className="text-xs text-green-700">Sent within 2–3 seconds of Sales Order being saved</p>
                    </div>
                    <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                      <FileText className="h-5 w-5 text-blue-600 mb-2" />
                      <p className="text-sm font-semibold text-blue-800">Invoice Delivery</p>
                      <p className="text-xs text-blue-700">Secure PDF attachment sent directly to WhatsApp</p>
                    </div>
                    <div className="rounded-xl bg-purple-50 border border-purple-100 p-4">
                      <CreditCard className="h-5 w-5 text-purple-600 mb-2" />
                      <p className="text-sm font-semibold text-purple-800">Payment Receipts</p>
                      <p className="text-xs text-purple-700">Instant confirmation of payment arrival</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-brand-primary/5 border border-brand-primary/20 p-4">
                    <p className="text-sm font-semibold text-text-primary mb-1">Efficiency Gain Formula</p>
                    <code className="text-sm text-text-secondary">
                      Efficiency_Gain = (Manual_Hours - Automated_Hours) / Manual_Hours × 100
                    </code>
                    <p className="text-xs text-text-muted mt-2">
                      Where Manual_Hours represents the 10–15 hours per week typically spent on manual follow-ups. Businesses see efficiency gains of over 90% in routine communication processes.
                    </p>
                  </div>
                </div>

                {/* Interactive ERP Chatbots */}
                <div className="rounded-2xl border border-border/60 bg-white p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Bot className="h-6 w-6 text-brand-primary" />
                    <h3 className="text-xl font-bold text-text-primary">Interactive ERP Chatbots</h3>
                  </div>
                  <p className="text-text-secondary mb-4">
                    Beyond one-way notifications, the Google Sheets integration enables a two-way conversational interface. Customers can send keywords like &apos;Balance&apos;, &apos;Statement&apos;, or &apos;Invoice Status&apos; to a WhatsApp number. The system queries the synchronized Google Sheet and returns the specific data point in real-time.
                  </p>

                  <div className="rounded-2xl border border-border/60 overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-surface border-b border-border/60">
                          <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Automated Feature</th>
                          <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Customer Action</th>
                          <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">System Response</th>
                          <th className="px-4 sm:px-6 py-4 text-left font-semibold text-brand-primary">Operational Benefit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {whatsappFeatures.map((row, i) => (
                          <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface/30 transition-colors">
                            <td className="px-4 sm:px-6 py-4 font-medium text-text-primary">{row.feature}</td>
                            <td className="px-4 sm:px-6 py-4 text-text-secondary">{row.action}</td>
                            <td className="px-4 sm:px-6 py-4 text-text-secondary">{row.response}</td>
                            <td className="px-4 sm:px-6 py-4 text-brand-primary font-medium">{row.benefit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* CTA for WhatsApp Integration */}
                <div className="rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 border border-brand-primary/20 p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Ready to automate your Busy ERP workflows?</h4>
                      <p className="text-sm text-text-secondary">Learn how Whats91 can help you build WhatsApp automation from your Google Sheets data.</p>
                    </div>
                    <Button asChild className="bg-brand-primary text-white hover:bg-brand-primary-hover shrink-0">
                      <Link href="/solutions/busy-google-sheet">
                        Explore Integration Solution
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Security Section */}
            <FadeIn>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                    Security, Governance, and Scalability
                  </h2>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Moving sensitive financial data from a localized Busy installation to the cloud via Google Sheets requires a robust security framework. Businesses must balance the need for accessibility with the requirement for strict data governance.
                </p>

                {/* Access Control */}
                <div className="rounded-2xl border border-border/60 bg-white p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-4">Access Control and Data Integrity</h3>
                  <p className="text-text-secondary mb-4">
                    Google Sheets allows for granular sharing permissions, ensuring that only authorized personnel can view or edit financial dashboards. Furthermore, when syncing data to external CRMs like Salesforce, it is a best practice to use &quot;governed access&quot; where data is filtered and validated before it leaves the spreadsheet environment.
                  </p>

                  <div className="rounded-2xl border border-border/60 overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-surface border-b border-border/60">
                          <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Security Layer</th>
                          <th className="px-4 sm:px-6 py-4 text-left font-semibold text-text-primary">Mechanism</th>
                          <th className="px-4 sm:px-6 py-4 text-left font-semibold text-brand-primary">Protection Provided</th>
                        </tr>
                      </thead>
                      <tbody>
                        {securityLayers.map((row, i) => (
                          <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface/30 transition-colors">
                            <td className="px-4 sm:px-6 py-4 font-medium text-text-primary">{row.layer}</td>
                            <td className="px-4 sm:px-6 py-4 text-text-secondary">{row.mechanism}</td>
                            <td className="px-4 sm:px-6 py-4 text-brand-primary font-medium">{row.protection}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Scalability */}
                <div className="rounded-2xl border border-border/60 bg-white p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-4">Scaling the Integration</h3>
                  <p className="text-text-secondary mb-4">
                    As a business grows, its integration needs will evolve. What starts as a simple &quot;Busy to Sheets&quot; sync for reporting might expand into a complex ecosystem where Sheets acts as a hub for multiple data sources. The modular nature of Google Sheets—where new tabs, scripts, and connectors can be added without rebuilding the entire system—makes it an ideal platform for scalable growth.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-surface/50 p-4">
                      <Users className="h-5 w-5 text-brand-primary mb-2" />
                      <p className="text-sm font-semibold text-text-primary mb-1">AI-Powered Scaling</p>
                      <p className="text-xs text-text-secondary">Scale from 3 to 300 employees without proportional increase in administrative overhead using AI agents for repetitive data collection tasks</p>
                    </div>
                    <div className="rounded-xl bg-surface/50 p-4">
                      <Database className="h-5 w-5 text-brand-primary mb-2" />
                      <p className="text-sm font-semibold text-text-primary mb-1">Single Source of Truth</p>
                      <p className="text-xs text-text-secondary">AI agents can scan emails, CRM updates, and ERP logs to populate the spreadsheet, ensuring management always has accurate data</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Practical Implementation */}
            <FadeIn>
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary pb-3 border-b border-border/50">
                  Practical Implementation Guide
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  For businesses looking to implement Busy ERP to Google Sheets integration, here are the practical steps and considerations based on real-world implementations:
                </p>

                {/* Step-by-Step */}
                <div className="space-y-4">
                  {[
                    { step: 1, title: "Identify High-Value Data Streams", description: "Start with accounts receivable aging and inventory stock status—these provide immediate ROI through automated collections and reorder alerts." },
                    { step: 2, title: "Choose Your Sync Method", description: "Options include Google Apps Script with Busy API, third-party connectors, or custom middleware solutions like the Whats91 reverse API flow architecture." },
                    { step: 3, title: "Design Your Dashboard Structure", description: "Create separate tabs for different departments—sales dashboards for the sales team, AR aging for finance, inventory for procurement." },
                    { step: 4, title: "Implement Access Controls", description: "Use Google Sheets sharing permissions to restrict access. Consider using IMPORTRANGE to create separate viewing sheets for different user groups." },
                    { step: 5, title: "Build Automation Triggers", description: "Set up Apps Script triggers for automated PDF generation, WhatsApp notifications, or CRM sync operations." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 rounded-xl border border-border/60 bg-white p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-sm font-bold shadow-md shadow-brand-primary/20">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                        <p className="text-sm text-text-secondary">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Common Challenges */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                  <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Common Challenges and Solutions
                  </h3>
                  <div className="space-y-3">
                    {[
                      { challenge: "Google API Rate Limits", solution: "Use reverse API flow architecture where Sheets pulls data instead of push-based sync" },
                      { challenge: "Data Format Inconsistencies", solution: "Implement data transformation layer in Apps Script to standardize formats" },
                      { challenge: "Multi-Company Data Mixing", solution: "Use strict company and financial year isolation in query logic" },
                      { challenge: "Real-Time Sync Delays", solution: "Configure scheduled triggers at optimal intervals (10-15 minutes for most use cases)" },
                    ].map((item, i) => (
                      <div key={i} className="rounded-lg bg-white p-3 border border-amber-100">
                        <p className="text-sm font-medium text-amber-800 mb-1">{item.challenge}</p>
                        <p className="text-sm text-amber-700">{item.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Key Takeaways */}
            <FadeIn>
              <div className="rounded-2xl bg-gradient-to-br from-brand-primary to-brand-primary/80 p-6 sm:p-8 text-white">
                <h2 className="text-xl sm:text-2xl font-bold mb-6">Key Takeaways</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Data liberation transforms Busy from a record-keeping system to an automation engine",
                    "Google Sheets dashboards enable cross-functional collaboration without ERP training",
                    "CRM integration via Sheets creates a unified view for sales and finance teams",
                    "WhatsApp automation powered by ERP data reduces support calls by 50-60%",
                    "Security and governance are achievable through proper access controls and audit trails",
                    "Start with AR aging and inventory—highest immediate ROI for most businesses",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-white/80 shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* Share & Author Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <section className="py-10 sm:py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <FadeIn>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 p-6 rounded-2xl bg-surface/50 border border-border/50">
                <div>
                  <h3 className="font-semibold text-text-primary text-lg mb-1">Found this helpful?</h3>
                  <p className="text-sm text-text-muted">Share it with your network</p>
                </div>
                <ShareSection title="Busy ERP to Google Sheets Integration: Complete Guide for Enterprise Data Liberation" />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="border-border/60 bg-white overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <img
                      src="https://ui-avatars.com/api/?name=Devendar+Singh+Gohil&background=448C74&color=fff&size=128"
                      alt="Devendar Singh Gohil"
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-text-muted mb-1">Written by</p>
                      <h4 className="font-semibold text-text-primary text-lg">Devendar Singh Gohil</h4>
                      <p className="text-sm text-brand-primary mb-3">Developer</p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        Lead Developer at Whats91 specializing in WhatsApp Cloud API integration, enterprise software development, and ERP solutions including Busy Accounting integrations and Google Sheets automation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>

        <RelatedPosts currentSlug={postSlug} />
      </main>

      <Footer />
    </div>
  );
}
