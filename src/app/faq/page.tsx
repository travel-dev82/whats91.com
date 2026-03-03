"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  CreditCard,
  Code2,
  Building2,
  Shield,
  HelpCircle,
  Zap,
  ArrowRight,
  Phone,
  Mail,
  Sparkles
} from "lucide-react";
import { useState, useMemo } from "react";
import { FAQJsonLD, BreadcrumbJsonLD } from "@/components/seo/JsonLD";

// FAQ Categories
const categories = [
  { id: "getting-started", label: "Getting Started", icon: Zap },
  { id: "pricing", label: "Pricing & Billing", icon: CreditCard },
  { id: "technical", label: "Technical & API", icon: Code2 },
  { id: "busy-erp", label: "Busy ERP Integration", icon: Building2 },
  { id: "compliance", label: "Compliance & Security", icon: Shield },
  { id: "support", label: "Support & Troubleshooting", icon: HelpCircle },
];

// Comprehensive FAQ Data
const faqData = {
  "getting-started": [
    {
      question: "What is WhatsApp Cloud API and how is it different from WhatsApp Business App?",
      answer: "WhatsApp Cloud API is Meta's official enterprise-grade API that allows businesses to send and receive messages at scale. Unlike the free WhatsApp Business App (limited to 1 device, manual messaging), the Cloud API offers: unlimited messaging capacity, multi-agent access, automation capabilities, webhook integrations, CRM/ERP connectivity, and 99.9% uptime SLA. Whats91 provides a zero-markup gateway to this API with added features like Busy ERP integration and AI chatbots."
    },
    {
      question: "How do I get started with Whats91 WhatsApp API?",
      answer: "Getting started is simple: 1) Sign up on whats91.com with your business details, 2) Verify your business with Meta (we guide you through the process), 3) Set up your WhatsApp Business Account (WABA), 4) Create your first message templates, 5) Integrate via our API or use our no-code dashboard. The entire onboarding takes 24-48 hours. Contact our sales team for a personalized demo."
    },
    {
      question: "What are the requirements to use WhatsApp Business API in India?",
      answer: "To use WhatsApp Business API in India, you need: a valid business with GST registration (optional but recommended for ITC), a verified Meta Business Manager account, a phone number not currently on WhatsApp (or willing to deactivate), accepted business category (no gambling, alcohol, etc.), and compliance with WhatsApp's Commerce Policy. We handle the Meta verification process for you."
    },
    {
      question: "How long does it take to get WhatsApp Business API access?",
      answer: "With Whats91, most businesses get API access within 24-48 hours. The process includes: account creation (instant), business verification (12-24 hours), number registration (2-4 hours), and template approval (varies by category - utility templates are often instant, marketing takes 24-48 hours). Enterprise clients with existing Meta verification can be live in under 4 hours."
    },
    {
      question: "Can I keep my existing WhatsApp number for Business API?",
      answer: "Yes, but with conditions. Your existing WhatsApp number can be migrated to Business API, but you must first: 1) Export your chat history (API doesn't retain personal chats), 2) Deactivate the number from WhatsApp/WhatsApp Business app, 3) Wait 24-48 hours before registration. We recommend using a new dedicated business number for seamless transition."
    },
    {
      question: "What's the difference between WhatsApp Cloud API and On-Premise API?",
      answer: "WhatsApp Cloud API is Meta's hosted solution - no server infrastructure required, automatic updates, built-in scalability, and no maintenance overhead. On-Premise API requires your own servers, dedicated hosting, and technical maintenance. Whats91 exclusively uses Cloud API, giving you enterprise-grade reliability without infrastructure costs. Cloud API also receives new features first."
    },
    {
      question: "Do I need technical knowledge to use Whats91?",
      answer: "Not necessarily. Whats91 offers two modes: 1) No-Code Dashboard - manage contacts, send broadcasts, view analytics through our intuitive interface, 2) API Integration - for developers building custom solutions. Our Busy ERP integration requires zero coding - we handle everything. For custom CRM integrations, basic API knowledge helps, but our team provides comprehensive documentation and support."
    },
  ],
  "pricing": [
    {
      question: "What are the WhatsApp API pricing rates in India for 2026?",
      answer: "Official Meta rates for India (2026): Marketing messages - ₹0.8631 per delivered message, Utility messages - ₹0.1150 per delivered message, Authentication (OTP) - ₹0.1150 per delivered message, Service messages - FREE within 24-hour customer window. Whats91 charges zero markup on these rates - you pay exactly what Meta charges."
    },
    {
      question: "Are there any setup fees or monthly charges?",
      answer: "No setup fees, no monthly platform charges, no hidden costs. You only pay for successfully delivered messages at official Meta rates. This is our zero-markup guarantee. Compare this to competitors like Wati (15-20% markup) or Gupshup (8-10% markup). At 1 million monthly messages, this saves you ₹9-17 lakhs annually."
    },
    {
      question: "How does volume discount pricing work?",
      answer: "Utility and Authentication messages have automatic volume tiers: 0-25M messages at ₹0.1150 (base), 25M-50M at ₹0.1081 (6% off), 50M-100M at ₹0.1012 (12% off), up to 30% off at 300M+ messages. Marketing has a flat rate regardless of volume. Tier upgrades happen automatically - no negotiation needed."
    },
    {
      question: "When are WhatsApp messages completely free?",
      answer: "Three scenarios for free messaging: 1) 24-Hour Customer Service Window - any reply within 24 hours of customer message is free, 2) 72-Hour CTWA Window - all message types (including marketing) are free after a Click-to-WhatsApp ad click, 3) Utility templates within an active service window are free (April 2025 update)."
    },
    {
      question: "How is billing handled? Is there GST?",
      answer: "Meta bills in INR directly to Indian businesses. 18% GST applies and is fully claimable as Input Tax Credit (ITC) for GST-registered businesses. Invoices show every message as a line item with delivery status. No USD conversion fees, no foreign transaction charges. This local billing setup saves 12-20% compared to earlier USD billing."
    },
    {
      question: "What happens if my message is not delivered?",
      answer: "You don't pay. WhatsApp API uses per-delivered billing - only successfully delivered messages are charged. Undelivered messages due to invalid numbers, user opt-outs, or network issues cost nothing. Our dashboard shows detailed delivery analytics with reason codes for failed attempts."
    },
    {
      question: "How do I add money to my WhatsApp API account?",
      answer: "Meta uses a prepaid credit system. You can add funds directly through Meta Business Manager using credit card, debit card, or UPI. For Indian businesses, we recommend maintaining a balance equivalent to 2-4 weeks of messaging volume. Our dashboard shows real-time balance and projected usage alerts."
    },
    {
      question: "Can I get a refund for unused credits?",
      answer: "Meta's policy doesn't allow refunds for purchased credits. However, credits don't expire and can be used indefinitely. We recommend starting with smaller amounts and scaling based on actual usage. For enterprise clients, we offer custom billing arrangements with monthly invoicing."
    },
    {
      question: "Why are some providers charging more than official Meta rates?",
      answer: "Many Business Solution Providers (BSPs) add markups of 10-25% on top of Meta's base rates. For example, Wati charges ~₹1.03 for marketing (vs ₹0.8631 official). At 100M monthly messages, a 15% markup costs ₹12.9 lakhs extra per month. Whats91's zero-markup model passes official rates directly to you."
    },
  ],
  "technical": [
    {
      question: "How do WhatsApp Webhooks work?",
      answer: "Webhooks are HTTP callbacks that notify your server of events in real-time. When a customer messages you, WhatsApp sends a POST request to your webhook URL with the message payload. Our platform handles webhook setup automatically - you just specify your endpoint URL. For developers, we provide webhook security validation using X-Hub-Signature-256 headers."
    },
    {
      question: "What message templates are supported?",
      answer: "WhatsApp supports four template categories: 1) Utility - order confirmations, shipping updates, account alerts, 2) Marketing - promotional offers, newsletters, product launches, 3) Authentication - OTP delivery, verification codes, 4) Service - customer support responses. Each category has different pricing and approval requirements."
    },
    {
      question: "How do I create and approve message templates?",
      answer: "Templates are created through Meta Business Manager or our dashboard. Each template needs: a name, category, language code, and content body with optional variables. Meta reviews templates within 24-48 hours. Utility templates are often auto-approved. Marketing templates require more scrutiny. We provide pre-approved template libraries for common use cases."
    },
    {
      question: "What's the message rate limit (throughput)?",
      answer: "Throughput depends on your messaging tier: Tier 1 (verified) - 1,000 unique users per 24 hours, Tier 2 - 10,000 users, Tier 3 - 100,000 users, Tier 4 - unlimited. Within these limits, you can send multiple messages per user. Our platform supports burst throughput of 500+ messages per second for time-sensitive campaigns."
    },
    {
      question: "Can I send images, videos, and documents via WhatsApp API?",
      answer: "Yes, WhatsApp Cloud API supports rich media: Images (JPEG, PNG up to 5MB), Videos (MP4, 3GP up to 16MB), Documents (PDF, DOC, XLS up to 100MB), Audio (MP3, AAC, OGG up to 16MB), and Stickers. Media messages use template pricing. Our dashboard includes a media library for easy asset management."
    },
    {
      question: "How do I handle incoming customer messages?",
      answer: "Incoming messages are delivered via webhooks to your configured endpoint. You can: 1) Build a custom chat interface, 2) Use our multi-agent inbox dashboard, 3) Route to AI chatbots for auto-response, 4) Integrate with existing CRM/ticketing systems. Replies within 24 hours of customer message are free (Service window)."
    },
    {
      question: "What's Error 131049 (Frequency Cap Saturation)?",
      answer: "Meta limits users to approximately 2 marketing messages per day across ALL businesses. Error 131049 occurs when attempting to send a marketing message to a user who has already received their daily quota. Solution: Segment audiences strategically, time broadcasts appropriately, and focus on quality over quantity."
    },
    {
      question: "How do I integrate WhatsApp API with my CRM or custom application?",
      answer: "We provide REST APIs with comprehensive documentation: POST /messages for sending, Webhooks for receiving, GET /templates for template management, and Analytics APIs for reporting. SDKs available for Node.js, Python, PHP, and Java. For no-code integration, we offer Zapier connectors and Google Sheets sync."
    },
    {
      question: "What is the 24-hour messaging window?",
      answer: "When a customer messages you first, a 24-hour window opens. During this window, you can send unlimited free-form messages (no template required) to that customer at no cost. This is called the Customer Service Window (CSW). It resets each time the customer sends a new message."
    },
  ],
  "busy-erp": [
    {
      question: "What is Busy Accounting WhatsApp Integration?",
      answer: "Our Busy ERP WhatsApp integration automates business communication directly from your Busy Accounting software. Features include: automatic invoice delivery, payment reminders with ledger details, outstanding balance alerts, order confirmations, and real-time account inquiry via WhatsApp. No coding required - we handle the complete setup."
    },
    {
      question: "How does automatic invoice delivery work?",
      answer: "When you generate an invoice in Busy, our integration automatically: 1) Creates a PDF invoice, 2) Sends it via WhatsApp to the customer's registered number, 3) Logs the delivery in Busy, 4) Updates the customer's communication history. Invoices can be sent immediately or scheduled for business hours."
    },
    {
      question: "Can customers check their balance via WhatsApp?",
      answer: "Yes! Customers can message your business WhatsApp number with keywords like 'Balance', 'Outstanding', or 'Statement'. Our AI chatbot queries Busy in real-time and responds with: current outstanding, due date, recent transactions, and payment link. This reduces manual inquiry calls by 70-80%."
    },
    {
      question: "How do payment reminders work with Busy ERP?",
      answer: "Our integration sends automated payment reminders based on Busy ledger data. Configure: reminder timing (7 days before due, on due date, overdue), escalation rules, personalized messages with outstanding details, and payment links (integrated with Razorpay/PayU). Reminders are logged back to Busy for audit trail."
    },
    {
      question: "Does this work with Busy Single User and Multi-User editions?",
      answer: "Yes, our integration works with all Busy editions: Busy Basic (Single User), Busy Standard (Multi-User), Busy Enterprise, and Busy Cloud. The integration connects via Busy API (Enterprise/Cloud) or database connection (Standard). Setup requirements vary slightly by edition."
    },
    {
      question: "How long does Busy ERP integration take?",
      answer: "Standard integration takes 2-3 business days: Day 1 - WhatsApp Business setup and verification, Day 2 - Busy database connection and template creation, Day 3 - Testing and go-live. For complex setups with custom workflows, allow 5-7 days. We provide complete training and documentation."
    },
    {
      question: "Can I customize the message templates for Busy integration?",
      answer: "Absolutely. All message templates are customizable. Define: invoice message format, payment reminder text, balance inquiry response, and promotional broadcasts. Use variables like {customer_name}, {invoice_number}, {amount}, {due_date}. Our design team can help create branded templates."
    },
    {
      question: "What happens if a customer doesn't have WhatsApp?",
      answer: "Our system tracks delivery status. If WhatsApp delivery fails (no WhatsApp, invalid number, blocked), we can fallback to SMS or email based on your configuration. The Busy integration logs all attempts and final delivery status for each communication."
    },
    {
      question: "Can I send promotional offers to my Busy customer database?",
      answer: "Yes, use your Busy customer database for marketing campaigns. Import customers by group, outstanding amount, last transaction date, or custom filters. Ensure compliance: customers must opt-in for marketing messages, include opt-out instructions, and respect WhatsApp's frequency caps."
    },
  ],
  "compliance": [
    {
      question: "Is WhatsApp Business API compliant with India's DPDP Act 2023?",
      answer: "Yes, our platform is designed for DPDP (Digital Personal Data Protection) compliance. Key measures: data minimization (we collect only necessary data), purpose limitation (data used only for stated purposes), consent management (explicit opt-in for marketing), data localization (Indian servers), and breach notification protocols. We provide DPDP compliance documentation for audits."
    },
    {
      question: "How is customer data protected on your platform?",
      answer: "Security measures include: 256-bit AES encryption for data at rest, TLS 1.3 for data in transit, SOC 2 Type II compliant infrastructure, regular penetration testing, role-based access control, audit logs for all actions, and data retention policies aligned with regulatory requirements. We never share or sell customer data."
    },
    {
      question: "Do I need customer consent to send WhatsApp messages?",
      answer: "For marketing/promotional messages: Yes, explicit opt-in consent is required. For utility messages (order updates, transactional): Implied consent from business relationship is acceptable, but include opt-out option. For service messages (customer-initiated): No prior consent needed as they messaged you first. Our platform includes consent tracking features."
    },
    {
      question: "How do I handle customer opt-outs?",
      answer: "Customers can opt-out by: typing keywords (STOP, UNSUBSCRIBE), clicking opt-out links in messages, or requesting via support. Our platform automatically: adds them to a suppression list, prevents future marketing messages, and logs the opt-out with timestamp. Utility and service messages may still be sent for ongoing business relationships."
    },
    {
      question: "What data does WhatsApp/Meta collect?",
      answer: "Meta collects: message content (for template compliance and quality), phone numbers (sender/recipient), message metadata (timestamps, delivery status), and device information. Business data (customer names, order details) is NOT shared with Meta. Your business data stays on our servers. Review Meta's privacy policy for complete details."
    },
    {
      question: "Is my business data shared with third parties?",
      answer: "No. Your business data (customer database, invoice details, transaction history) is never shared, sold, or monetized. Data is used solely for: delivering your messages, providing analytics, and improving platform reliability. We sign NDAs for enterprise clients and comply with data processing agreements."
    },
    {
      question: "How long is message data retained?",
      answer: "Message content is retained for 30 days by WhatsApp. Our platform retains: delivery logs for 90 days, analytics data for 12 months, and contact metadata indefinitely (unless deleted). Custom retention policies available for enterprise clients with regulatory requirements."
    },
    {
      question: "Can I use WhatsApp API for political campaigns?",
      answer: "WhatsApp prohibits use for political campaigns in India. Restricted content includes: political messaging, election-related content, and government campaigning. Business categories related to political organizations are typically rejected during Meta verification. Focus on commercial business communication."
    },
  ],
  "support": [
    {
      question: "What support options are available?",
      answer: "We offer tiered support: Free tier - Email support (24-48 hour response), documentation, and community forum. Pro tier - Priority email (12-hour response), chat support, and onboarding assistance. Enterprise tier - Dedicated account manager, phone support, custom SLAs, and 2-hour response guarantee. All tiers include access to our knowledge base."
    },
    {
      question: "How do I contact customer support?",
      answer: "Multiple channels available: WhatsApp us at +91 96698 23388 (fastest for quick queries), Email support@whats91.com, Call +91 96698 23388 (Mon-Sat, 10AM-7PM IST), or use the in-dashboard chat widget. Enterprise clients have a dedicated support channel with their account manager."
    },
    {
      question: "My messages are being marked as 'Undelivered'. What should I do?",
      answer: "Common causes: 1) Invalid phone number - verify format (with country code), 2) User not on WhatsApp - check if number has WhatsApp, 3) User blocked your business - review opt-out list, 4) Template quality issues - check Meta quality rating, 5) Rate limit exceeded - verify messaging tier. Our dashboard shows specific error codes for each failed message."
    },
    {
      question: "My WhatsApp Business number is showing low quality rating. How to fix?",
      answer: "Quality ratings depend on user feedback (blocks, reports). To improve: ensure consent before marketing messages, segment audiences better, reduce message frequency, improve content relevance, and honor opt-outs quickly. Quality typically recovers in 7-30 days of good sending behavior. Contact support for a quality audit."
    },
    {
      question: "Templates are being rejected. What's wrong?",
      answer: "Common rejection reasons: 1) Marketing content in utility template, 2) Missing opt-out for promotional content, 3) Suspicious links or phone numbers, 4) Generic/spammy language, 5) Prohibited content categories. Review WhatsApp's template guidelines. Our template review tool pre-checks submissions against Meta policies."
    },
    {
      question: "How do I upgrade my messaging tier?",
      answer: "Tiers upgrade automatically when you: maintain Green quality rating, send to 50%+ of your current daily limit consistently, and have no policy violations. Meta checks every 6 hours (2026 update). To accelerate: maintain high engagement rates, minimize blocks/reports, and ensure template compliance. Contact us for manual tier upgrade requests."
    },
    {
      question: "My webhook is not receiving messages. How to debug?",
      answer: "Check: 1) Webhook URL is publicly accessible (not localhost), 2) HTTPS with valid SSL certificate, 3) Server returns 200 OK within 20 seconds, 4) Webhook is subscribed to correct events in Meta dashboard, 5) Verify token matches. Our developer tools include webhook testing and debug logs. Contact support for detailed troubleshooting."
    },
    {
      question: "How long does template approval take?",
      answer: "Template approval times vary by category: Utility templates - often instant to 2 hours, Authentication templates - 2-6 hours, Marketing templates - 24-48 hours, Service templates - not required (free-form in 24h window). Rejected templates show specific reasons. Resubmission after correction typically takes half the original time."
    },
  ],
};

// Flatten FAQs for JSON-LD
const allFaqs = Object.values(faqData).flat().map(faq => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on search
  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqData[activeCategory as keyof typeof faqData];
    
    const query = searchQuery.toLowerCase();
    return Object.values(faqData).flat().filter(
      faq => faq.question.toLowerCase().includes(query) || 
              faq.answer.toLowerCase().includes(query)
    );
  }, [searchQuery, activeCategory]);

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setOpenFaq(null);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* JSON-LD Structured Data */}
      <FAQJsonLD faqs={allFaqs.slice(0, 20)} />
      <BreadcrumbJsonLD items={[
        { name: "Home", url: "https://whats91.com" },
        { name: "FAQ", url: "https://whats91.com/faq" },
      ]} />

      <Header />
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-surface/80 to-background">
          <div className="absolute inset-0 gradient-brand-subtle pointer-events-none" />
          <div className="relative px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/15 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-5">
                <HelpCircle className="h-3.5 w-3.5" />
                Help Center
              </div>
              
              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-5">
                Frequently Asked Questions
              </h1>
              
              {/* Subheadline */}
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8">
                Find answers to common questions about WhatsApp Business API, pricing, integrations, and more. 
                Can&apos;t find what you&apos;re looking for? <a href="/contact" className="text-brand-primary hover:underline">Contact our support team</a>.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                <Input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 pl-12 pr-4 text-base rounded-xl border-border/60 bg-white shadow-sm focus:border-brand-primary focus:ring-brand-primary/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid gap-8 lg:grid-cols-4">
              
              {/* Sidebar - Categories */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-2">
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4 hidden lg:block">
                    Categories
                  </h3>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeCategory === category.id
                          ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                          : "bg-white border border-border/60 text-text-secondary hover:border-brand-primary/30 hover:text-text-primary"
                      } ${searchQuery ? "opacity-50 pointer-events-none" : ""}`}
                      disabled={!!searchQuery}
                    >
                      <category.icon className="h-4 w-4 shrink-0" />
                      <span className="text-sm font-medium">{category.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* FAQ List */}
              <div className="lg:col-span-3">
                {/* Category Header */}
                {!searchQuery && (
                  <div className="flex items-center gap-3 mb-6">
                    {(() => {
                      const cat = categories.find(c => c.id === activeCategory);
                      if (!cat) return null;
                      const Icon = cat.icon;
                      return (
                        <>
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h2 className="text-xl font-semibold text-text-primary">{cat.label}</h2>
                            <p className="text-sm text-text-muted">
                              {faqData[activeCategory as keyof typeof faqData].length} questions
                            </p>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                )}

                {/* Search Results Header */}
                {searchQuery && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-text-primary mb-1">
                      Search Results
                    </h2>
                    <p className="text-sm text-text-muted">
                      Found {filteredFaqs.length} question{filteredFaqs.length !== 1 ? 's' : ''} matching &quot;{searchQuery}&quot;
                    </p>
                  </div>
                )}

                {/* FAQ Accordion */}
                <div className="space-y-3">
                  {filteredFaqs.map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-border/60 bg-white overflow-hidden transition-all duration-200 hover:border-border"
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

                {/* No Results */}
                {filteredFaqs.length === 0 && searchQuery && (
                  <div className="text-center py-12">
                    <HelpCircle className="h-12 w-12 text-text-muted mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      No results found
                    </h3>
                    <p className="text-sm text-text-muted mb-6">
                      Try different keywords or browse by category
                    </p>
                    <Button
                      onClick={() => setSearchQuery("")}
                      variant="outline"
                      className="rounded-xl"
                    >
                      Clear Search
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                Need More Help?
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                Our Support Team is Here for You
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Can&apos;t find the answer you&apos;re looking for? Our team is just a message away.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
              {/* WhatsApp Support */}
              <a 
                href="https://wa.me/919669823388"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-2xl border border-border/60 bg-white transition-all duration-300 hover:shadow-lg hover:border-green-200"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-600 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-1">WhatsApp Us</h3>
                <p className="text-sm text-text-secondary text-center">Fastest response for quick queries</p>
                <p className="text-xs text-green-600 mt-2">+91 96698 23388</p>
              </a>

              {/* Email Support */}
              <a 
                href="mailto:support@whats91.com"
                className="group flex flex-col items-center p-6 rounded-2xl border border-border/60 bg-white transition-all duration-300 hover:shadow-lg hover:border-brand-primary/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-1">Email Support</h3>
                <p className="text-sm text-text-secondary text-center">Detailed queries & documentation</p>
                <p className="text-xs text-brand-primary mt-2">support@whats91.com</p>
              </a>

              {/* Phone Support */}
              <a 
                href="tel:+919669823388"
                className="group flex flex-col items-center p-6 rounded-2xl border border-border/60 bg-white transition-all duration-300 hover:shadow-lg hover:border-purple-200"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-1">Call Us</h3>
                <p className="text-sm text-text-secondary text-center">Mon-Sat, 10AM-7PM IST</p>
                <p className="text-xs text-purple-600 mt-2">+91 96698 23388</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent p-7 sm:p-8 md:p-12 shadow-xl">
              
              {/* Background Decorations */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-1/2 -left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  Ready to Transform Your Communication?
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8">
                  Get started with India&apos;s leading WhatsApp Cloud API platform. Zero markup, full transparency.
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
