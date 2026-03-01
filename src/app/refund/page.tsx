"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { 
  RotateCcw, 
  Calendar, 
  ChevronRight,
  CreditCard,
  XCircle,
  Clock,
  AlertTriangle,
  FileCheck,
  CheckCircle2,
  MessageCircle,
  Shield
} from "lucide-react";

const sections = [
  {
    number: 1,
    title: "Introduction",
    icon: RotateCcw,
    content: [
      {
        type: "paragraph",
        text: `This Refund Policy outlines the terms and conditions regarding refunds for services provided by <strong>Whats91</strong> ("we", "our", "us"). By purchasing our services, you acknowledge that you have read, understood, and agree to this Refund Policy.`
      },
      {
        type: "paragraph",
        text: `Please read this policy carefully before making any purchase. If you do not agree with any part of this policy, please do not proceed with your purchase.`
      }
    ]
  },
  {
    number: 2,
    title: "No Refund Policy",
    icon: XCircle,
    content: [
      {
        type: "paragraph",
        text: `Due to the nature of our digital services and subscription-based offerings, <strong>all sales are final and non-refundable</strong>. Once a subscription is activated or a service is rendered, no refunds will be provided.`
      },
      {
        type: "list-simple",
        items: [
          "Digital services cannot be returned once delivered",
          "Subscription services provide immediate access to premium features",
          "API credits and messaging quotas are consumed upon use",
          "Technical support and integration services are time-based"
        ]
      }
    ]
  },
  {
    number: 3,
    title: "Subscription Services",
    icon: Clock,
    content: [
      {
        type: "subsection",
        title: "3.1 Subscription Billing",
        text: `Our subscription services are billed in advance on a monthly, quarterly, or annual basis. The billing cycle begins on the date of subscription activation.`
      },
      {
        type: "subsection",
        title: "3.2 Subscription Cancellation",
        text: `You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing period. You will continue to have access to the service until the end of the paid period.`
      },
      {
        type: "subsection",
        title: "3.3 No Prorated Refunds",
        text: `We do not provide prorated refunds for unused portions of your subscription. If you cancel mid-cycle, you will retain access until the end of your billing period, but no refund will be issued for the remaining time.`
      }
    ]
  },
  {
    number: 4,
    title: "API and Messaging Services",
    icon: CreditCard,
    content: [
      {
        type: "subsection",
        title: "4.1 API Credits",
        text: `API credits and messaging quotas purchased through our platform are non-refundable. Once credits are added to your account, they cannot be exchanged for cash or refunded.`
      },
      {
        type: "subsection",
        title: "4.2 Usage-Based Billing",
        text: `For usage-based services, you are responsible for all charges incurred during the billing period. No refunds are provided for charges resulting from your usage of the service.`
      },
      {
        type: "subsection",
        title: "4.3 WhatsApp Cloud API",
        text: `Message charges incurred through WhatsApp Cloud API are passed through directly from Meta. These charges are non-refundable once messages are sent, regardless of delivery status.`
      }
    ]
  },
  {
    number: 5,
    title: "Project-Based Services",
    icon: FileCheck,
    content: [
      {
        type: "subsection",
        title: "5.1 Deposits",
        text: `Any deposits paid to commence work on project-based services are non-refundable. The deposit secures your project slot and covers initial planning and setup work.`
      },
      {
        type: "subsection",
        title: "5.2 Milestone Payments",
        text: `For projects with milestone-based billing, each milestone payment is non-refundable once the milestone deliverables have been approved by you.`
      },
      {
        type: "subsection",
        title: "5.3 Project Cancellation",
        text: `If you cancel a project before completion, you remain liable for all work completed up to the cancellation date. No refunds will be provided for completed work or time invested.`
      }
    ]
  },
  {
    number: 6,
    title: "Exceptions",
    icon: CheckCircle2,
    content: [
      {
        type: "paragraph",
        text: `While our general policy is no refunds, we may consider exceptions in the following circumstances:`
      },
      {
        type: "list",
        items: [
          { title: "Duplicate Charges", text: "If you were charged twice for the same service due to a system error" },
          { title: "Service Not Delivered", text: "If we fail to deliver a service that was paid for (excluding issues beyond our control)" },
          { title: "Technical Errors", text: "If a technical error on our end resulted in an incorrect charge" }
        ]
      },
      {
        type: "paragraph",
        text: `These exceptions are evaluated on a case-by-case basis. To request an exception review, please contact our support team within 7 days of the charge.`
      }
    ]
  },
  {
    number: 7,
    title: "Chargebacks and Disputes",
    icon: AlertTriangle,
    content: [
      {
        type: "paragraph",
        text: `If you initiate a chargeback or payment dispute with your bank or credit card provider, the following will apply:`
      },
      {
        type: "list-simple",
        items: [
          "Your account may be immediately suspended pending resolution",
          "We reserve the right to contest the chargeback with evidence of service delivery",
          "You will be responsible for any chargeback fees imposed by payment processors",
          "Future services may require advance payment or alternative payment methods"
        ]
      },
      {
        type: "paragraph",
        text: `We encourage you to contact our support team directly to resolve any billing concerns before initiating a chargeback.`
      }
    ]
  },
  {
    number: 8,
    title: "Service Guarantees",
    icon: Shield,
    content: [
      {
        type: "paragraph",
        text: `While we do not offer refunds, we stand behind the quality of our services:`
      },
      {
        type: "list",
        items: [
          { title: "Technical Support", text: "We provide technical support to help you resolve any issues with our services" },
          { title: "Service Level Agreements", text: "For enterprise clients, SLAs may include service credits for downtime" },
          { title: "Quality Assurance", text: "We work to ensure all deliverables meet agreed specifications" }
        ]
      }
    ]
  },
  {
    number: 9,
    title: "Policy Changes",
    icon: RotateCcw,
    content: [
      {
        type: "paragraph",
        text: `We reserve the right to modify this Refund Policy at any time. Changes will be effective upon posting to this page. The "Last Updated" date will be revised accordingly.`
      },
      {
        type: "paragraph",
        text: `Continued use of our services after any changes constitutes acceptance of the modified policy. We recommend reviewing this policy periodically.`
      }
    ]
  },
];

export default function RefundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-gradient-to-b from-surface/80 to-background">
          <div className="absolute inset-0 gradient-brand-subtle pointer-events-none" />
          <div className="relative px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/15 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-5">
              <RotateCcw className="h-3.5 w-3.5" />
              Legal Document
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
              Refund Policy
            </h1>
            
            {/* Last Updated */}
            <div className="flex items-center justify-center gap-2 text-sm text-text-muted mb-8">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: March 1, 2026</span>
            </div>

            {/* Quick Nav */}
            <div className="flex flex-wrap justify-center gap-2">
              <a href="#no-refund" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                No Refund Policy
              </a>
              <a href="#subscription" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Subscriptions
              </a>
              <a href="#exceptions" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Exceptions
              </a>
              <a href="#contact" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 sm:py-14 md:py-16">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
            
            {/* Terms Sections */}
            <div className="space-y-8 sm:space-y-10">
              {sections.map((section) => (
                <div 
                  key={section.number}
                  id={
                    section.number === 2 ? "no-refund" : 
                    section.number === 3 ? "subscription" : 
                    section.number === 6 ? "exceptions" : undefined
                  }
                  className="scroll-mt-20"
                >
                  {/* Section Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white text-sm font-bold shadow-md shadow-brand-primary/20">
                      {section.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <section.icon className="h-4 w-4 text-brand-primary" />
                        <span className="text-[10px] uppercase tracking-wider text-text-muted font-medium">Section {section.number}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="pl-0 sm:pl-15 space-y-4">
                    {section.content.map((item, idx) => {
                      if (item.type === "paragraph") {
                        return (
                          <p 
                            key={idx}
                            className="text-sm sm:text-base text-text-secondary leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          />
                        );
                      }
                      if (item.type === "subsection") {
                        return (
                          <div key={idx} className="rounded-xl border border-border/50 bg-surface/30 p-4">
                            <h4 className="text-sm font-semibold text-text-primary mb-2">{item.title}</h4>
                            <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
                          </div>
                        );
                      }
                      if (item.type === "list-simple") {
                        return (
                          <div key={idx} className="rounded-xl border border-border/50 bg-surface/30 p-4">
                            <ul className="space-y-2">
                              {item.items?.map((listItem, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                                  <ChevronRight className="h-4 w-4 text-brand-primary mt-0.5 shrink-0" />
                                  <span>{listItem}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      }
                      if (item.type === "list") {
                        return (
                          <div key={idx} className="rounded-xl border border-border/50 bg-surface/30 p-4">
                            <ul className="space-y-3">
                              {item.items?.map((listItem: { title: string; text: string }, i: number) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm">
                                  <ChevronRight className="h-4 w-4 text-brand-primary mt-0.5 shrink-0" />
                                  <div>
                                    <span className="font-medium text-text-primary">{listItem.title}:</span>{" "}
                                    <span className="text-text-secondary">{listItem.text}</span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div id="contact" className="scroll-mt-20 mt-12 sm:mt-16">
              <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-brand-primary/[0.03] to-brand-accent/[0.01] p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary text-white text-xs font-bold">10</span>
                      <span className="text-xs uppercase tracking-wider text-text-muted font-medium">Section 10</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                      Contact Information
                    </h2>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
                  If you have any questions about this Refund Policy or need assistance, please contact our support team.
                </p>

                {/* Contact Card Popup */}
                <ContactCard variant="popup" trigger={
                  <button className="inline-flex items-center gap-2 rounded-xl border border-brand-primary/30 bg-white px-5 py-3 text-sm font-medium text-brand-primary hover:bg-brand-primary/5 transition-all duration-200 hover:border-brand-primary/50 hover:shadow-md group">
                    <MessageCircle className="h-4 w-4" />
                    <span>View Contact Details</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                } />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-text-muted text-center sm:text-left">
                By purchasing our services, you acknowledge that you have read and understood this refund policy.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="/terms" 
                  className="text-sm font-medium text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Terms & Conditions
                </a>
                <span className="text-border">|</span>
                <a 
                  href="/privacy" 
                  className="text-sm font-medium text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-border">|</span>
                <a 
                  href="/" 
                  className="text-sm font-medium text-brand-primary hover:underline flex items-center gap-1"
                >
                  ← Back to Home
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
