"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileSpreadsheet,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Zap,
  RefreshCw,
  Database,
  Webhook,
  Settings,
  Layers,
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  ThumbsDown,
  HelpCircle,
  Sparkles,
  Globe,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

// Feature cards data
const features = [
  {
    icon: Zap,
    title: "Real-Time Sync",
    description:
      "Responses are pushed to Google Sheets within seconds of user interaction. No delays, no manual exports.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Webhook,
    title: "Automatic Webhooks",
    description:
      "Our platform handles all webhook configurations. When a user clicks a button, the data flows automatically.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Database,
    title: "Structured Data",
    description:
      "Every response is logged with timestamps, phone numbers, button selections, and custom campaign metadata.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Settings,
    title: "Custom Mapping",
    description:
      "Map response fields to specific Google Sheet columns. Define your own schema for maximum flexibility.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
];

// Button reply examples
const buttonReplyExamples = [
  {
    button: "Interested",
    icon: ThumbsUp,
    color: "bg-green-100 text-green-700 border-green-200",
    description: "Customer expresses interest in your offer",
    dataLogged: ["Phone Number", "Timestamp", "Campaign ID", "Button: Interested", "Lead Score: High"],
  },
  {
    button: "Not Interested",
    icon: ThumbsDown,
    color: "bg-red-100 text-red-700 border-red-200",
    description: "Customer declines the offer",
    dataLogged: ["Phone Number", "Timestamp", "Campaign ID", "Button: Not Interested", "Lead Score: Low"],
  },
  {
    button: "Learn More",
    icon: HelpCircle,
    color: "bg-blue-100 text-blue-700 border-blue-200",
    description: "Customer wants additional information",
    dataLogged: ["Phone Number", "Timestamp", "Campaign ID", "Button: Learn More", "Lead Score: Medium"],
  },
  {
    button: "Call Me",
    icon: MessageCircle,
    color: "bg-purple-100 text-purple-700 border-purple-200",
    description: "Customer requests a callback",
    dataLogged: ["Phone Number", "Timestamp", "Campaign ID", "Button: Call Me", "Priority: High"],
  },
];

// How it works steps
const howItWorks = [
  {
    step: 1,
    title: "Create Campaign",
    description:
      "Design your WhatsApp campaign with interactive buttons (Quick Replies) using our template builder or custom templates.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Configure Google Sheet",
    description:
      "Connect your Google Sheet and map the columns where you want response data to be stored.",
    icon: FileSpreadsheet,
  },
  {
    step: 3,
    title: "Send Campaign",
    description:
      "Launch your campaign to your target audience. Messages are delivered via WhatsApp Cloud API.",
    icon: Globe,
  },
  {
    step: 4,
    title: "Capture Responses",
    description:
      "When users click buttons, our platform captures the response instantly through webhooks.",
    icon: Webhook,
  },
  {
    step: 5,
    title: "Auto-Push to Sheets",
    description:
      "Response data is automatically pushed to your configured Google Sheet in real-time.",
    icon: RefreshCw,
  },
  {
    step: 6,
    title: "Automate Further",
    description:
      "Use Google Sheets' built-in automation or connect to Zapier/Make for advanced workflows.",
    icon: Zap,
  },
];

// Use cases
const useCases = [
  {
    title: "Lead Qualification",
    description:
      "Automatically score and categorize leads based on button responses. High-intent responses trigger immediate follow-up sequences.",
    metrics: "3x faster lead response time",
    icon: TrendingUp,
  },
  {
    title: "Event RSVPs",
    description:
      "Collect event confirmations via WhatsApp and log responses to Sheets for attendance tracking and reminders.",
    metrics: "85% response rate",
    icon: CheckCircle2,
  },
  {
    title: "Customer Surveys",
    description:
      "Run NPS surveys or feedback collection campaigns. All responses auto-populate your analytics spreadsheet.",
    metrics: "60% higher completion",
    icon: Sparkles,
  },
  {
    title: "Order Confirmations",
    description:
      "Let customers confirm orders via WhatsApp buttons. Sync to Sheets for fulfillment team visibility.",
    metrics: "90% confirmation rate",
    icon: Shield,
  },
];

// Data fields captured
const dataFields = [
  { field: "phone_number", description: "Customer's WhatsApp number", format: "+91XXXXXXXXXX" },
  { field: "timestamp", description: "Exact time of response", format: "2024-01-15 14:30:00 IST" },
  { field: "campaign_id", description: "Unique campaign identifier", format: "CAMP-2024-001" },
  { field: "template_name", description: "Template that was sent", format: "offer_jan_2024" },
  { field: "button_id", description: "ID of the clicked button", format: "btn_interested" },
  { field: "button_text", description: "Button label clicked", format: "Interested" },
  { field: "message_id", description: "WhatsApp message ID", format: "wamid.HBgM..." },
  { field: "custom_fields", description: "Any custom metadata", format: "JSON object" },
];

// FAQ data
const faqs = [
  {
    q: "How quickly are responses synced to Google Sheets?",
    a: "Responses are typically synced within 1-3 seconds of the user clicking a button. Our webhook infrastructure ensures near-instant data capture and push to your connected Google Sheet.",
  },
  {
    q: "Do I need to set up webhooks manually?",
    a: "No, Whats91 handles all webhook configurations automatically. You simply connect your Google Sheet once, and all incoming responses are routed automatically. No technical setup required.",
  },
  {
    q: "What types of button responses are captured?",
    a: "We capture all Quick Reply button clicks and Call-to-Action responses. This includes custom button labels you define in your templates, such as 'Interested', 'Not Interested', 'Learn More', 'Call Me', or any custom options.",
  },
  {
    q: "Can I use this with existing Google Sheets?",
    a: "Yes, you can connect to any existing Google Sheet. Just make sure the sheet has the appropriate column headers to receive the data. You can also create new sheets directly from our dashboard.",
  },
  {
    q: "Is there a limit on the number of responses?",
    a: "There's no hard limit on responses. Google Sheets supports up to 10 million cells per spreadsheet. For high-volume campaigns, we recommend creating monthly sheets or using multiple tabs.",
  },
  {
    q: "Can I connect multiple campaigns to one sheet?",
    a: "Yes, you can route multiple campaigns to a single Google Sheet. Each response includes the campaign_id field, allowing you to filter and analyze data by campaign.",
  },
  {
    q: "What happens if Google Sheets is temporarily unavailable?",
    a: "Our system includes retry logic with exponential backoff. If Google Sheets is temporarily unavailable, responses are queued and automatically retried. No data is lost.",
  },
  {
    q: "Can I trigger automations from the synced data?",
    a: "Absolutely! Once data is in Google Sheets, you can use Google Apps Script, Zapier, Make (Integromat), or similar tools to trigger follow-up actions like email sequences, CRM updates, or team notifications.",
  },
];

// Sample spreadsheet data
const sampleSheetData = [
  { phone: "+91 98765 43210", timestamp: "2024-01-15 10:30:15", button: "Interested", campaign: "Jan Offer 2024" },
  { phone: "+91 87654 32109", timestamp: "2024-01-15 10:31:42", button: "Learn More", campaign: "Jan Offer 2024" },
  { phone: "+91 76543 21098", timestamp: "2024-01-15 10:32:08", button: "Not Interested", campaign: "Jan Offer 2024" },
  { phone: "+91 65432 10987", timestamp: "2024-01-15 10:33:55", button: "Call Me", campaign: "Jan Offer 2024" },
  { phone: "+91 54321 09876", timestamp: "2024-01-15 10:35:20", button: "Interested", campaign: "Jan Offer 2024" },
];

export default function GoogleSheetsIntegrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 border border-green-200 px-4 py-1.5 text-xs sm:text-sm font-medium text-green-700 mb-5">
                <FileSpreadsheet className="h-3.5 w-3.5" />
                Google Sheets Integration
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-5">
                WhatsApp Campaign Responses
                <span className="text-brand-primary block mt-2">Auto-Sync to Google Sheets</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 max-w-2xl mx-auto">
                Every button click—<strong className="text-text-primary">Interested, Not Interested, Learn More</strong>—is
                automatically captured and pushed to your Google Sheets in real-time. No manual exports, no delays.
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
                <ContactCard
                  variant="popup"
                  trigger={
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-12 px-7 text-base font-semibold rounded-xl border-border/80 hover:bg-surface"
                    >
                      Talk to Integration Expert
                    </Button>
                  }
                />
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-3">
                {["Real-Time Sync", "No Code Setup", "Unlimited Responses"].map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-xs sm:text-sm text-text-muted bg-white/80 px-3 py-1.5 rounded-full border border-border/50"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 sm:py-16 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-primary/20"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor} mb-4 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Layers className="h-3.5 w-3.5" />
                Integration Flow
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                How Campaign Responses Flow to Google Sheets
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                A simple 6-step process from campaign creation to automated data sync
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {howItWorks.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl border border-border/60 bg-white p-5 transition-all duration-300 hover:shadow-md hover:border-brand-primary/20"
                >
                  <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white shadow-md">
                    {item.step}
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Button Reply Examples */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 border border-purple-200 px-4 py-1.5 text-xs sm:text-sm font-medium text-purple-700 mb-4">
                <MessageCircle className="h-3.5 w-3.5" />
                Button Response Types
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Every Button Click is Captured
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Here&apos;s how different button responses are logged and what data is captured for each interaction
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {buttonReplyExamples.map((example, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border/60 bg-white p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${example.color}`}
                    >
                      <example.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${example.color}`}>
                          {example.button}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary">{example.description}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-surface/50 rounded-xl">
                    <p className="text-xs font-medium text-text-muted uppercase mb-2">Data Logged</p>
                    <div className="flex flex-wrap gap-2">
                      {example.dataLogged.map((data, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {data}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Spreadsheet View */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 border border-green-200 px-4 py-1.5 text-xs sm:text-sm font-medium text-green-700 mb-4">
                <FileSpreadsheet className="h-3.5 w-3.5" />
                Live Preview
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                See How Data Appears in Google Sheets
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Responses are automatically formatted and organized in your connected spreadsheet
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden shadow-lg">
              {/* Spreadsheet Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-green-50 border-b border-green-200">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <FileSpreadsheet className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Campaign_Responses_Jan2024.xlsx</span>
                </div>
              </div>

              {/* Spreadsheet Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-surface/80">
                      <th className="text-left p-3 text-xs font-semibold text-text-muted uppercase border-b border-border/60">
                        Phone Number
                      </th>
                      <th className="text-left p-3 text-xs font-semibold text-text-muted uppercase border-b border-border/60">
                        Timestamp
                      </th>
                      <th className="text-left p-3 text-xs font-semibold text-text-muted uppercase border-b border-border/60">
                        Button Clicked
                      </th>
                      <th className="text-left p-3 text-xs font-semibold text-text-muted uppercase border-b border-border/60">
                        Campaign
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleSheetData.map((row, i) => (
                      <tr key={i} className="border-b border-border/40 hover:bg-surface/30">
                        <td className="p-3 text-sm text-text-primary font-mono">{row.phone}</td>
                        <td className="p-3 text-sm text-text-secondary font-mono">{row.timestamp}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              row.button === "Interested"
                                ? "bg-green-100 text-green-700"
                                : row.button === "Not Interested"
                                  ? "bg-red-100 text-red-700"
                                  : row.button === "Learn More"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-purple-100 text-purple-700"
                            }`}
                          >
                            {row.button}
                          </span>
                        </td>
                        <td className="p-3 text-sm text-text-secondary">{row.campaign}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-surface/50 border-t border-border/60">
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <RefreshCw className="h-3 w-3 text-green-500 animate-spin" />
                  <span>Auto-syncing</span>
                </div>
                <div className="text-xs text-text-muted">5 responses • Last updated: Just now</div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Fields Reference */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary mb-4">
                Complete Data Fields Reference
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Every response includes these fields, fully customizable for your integration needs
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface/80">
                    <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Field Name</th>
                    <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Description</th>
                    <th className="text-left p-4 text-xs font-semibold text-text-muted uppercase">Example Format</th>
                  </tr>
                </thead>
                <tbody>
                  {dataFields.map((field, i) => (
                    <tr key={i} className="border-t border-border/60">
                      <td className="p-4 text-sm font-mono text-brand-primary">{field.field}</td>
                      <td className="p-4 text-sm text-text-secondary">{field.description}</td>
                      <td className="p-4 text-sm text-text-muted font-mono">{field.format}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Popular Use Cases
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                See how businesses use this integration to automate their workflows
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-primary/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <useCase.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-text-primary mb-2">{useCase.title}</h3>
                      <p className="text-sm text-text-secondary mb-3">{useCase.description}</p>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        <TrendingUp className="h-3.5 w-3.5" />
                        {useCase.metrics}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                <div key={index} className="rounded-xl border border-border/60 bg-white overflow-hidden">
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
                  Automate Your Campaign Response Tracking
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8">
                  Start capturing every button click in Google Sheets automatically. No code, no complexity.
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
