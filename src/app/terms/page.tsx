"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { 
  FileText, 
  Calendar, 
  ChevronRight,
  Shield,
  CreditCard,
  Lock,
  Scale,
  Ban,
  AlertTriangle,
  FileCheck,
  MapPin,
  MessageCircle
} from "lucide-react";

const sections = [
  {
    number: 1,
    title: "Introduction",
    icon: FileText,
    content: [
      {
        type: "paragraph",
        text: `Welcome to <strong>Whats91</strong> ("Company", "we", "our", "us"). These Terms and Conditions ("Terms") govern your use of our website located at <strong>whats91.com</strong> and our services provided therein.`
      },
      {
        type: "paragraph", 
        text: `By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.`
      }
    ]
  },
  {
    number: 2,
    title: "Services Description",
    icon: MessageCircle,
    content: [
      {
        type: "paragraph",
        text: `Whats91 provides technology solutions including but not limited to WhatsApp Cloud API integration, website development, app development, and Busy Software solutions. The specific services provided will be agreed upon in a separate Statement of Work or Service Agreement.`
      }
    ]
  },
  {
    number: 3,
    title: "Payment Terms",
    icon: CreditCard,
    content: [
      {
        type: "subsection",
        title: "3.1 Service Fees",
        text: `All fees for our services will be specified in a written proposal, Statement of Work, or Service Agreement. Unless otherwise specified, all prices are quoted in Indian Rupees (INR).`
      },
      {
        type: "subsection",
        title: "3.2 Payment Methods",
        text: `We accept payments through various payment gateways including but not limited to bank transfers, credit cards, debit cards, UPI, and other electronic payment methods.`
      },
      {
        type: "list",
        title: "3.3 Payment Schedule",
        items: [
          "For project-based services, a non-refundable deposit of 50% of the total project fee is required before commencement of work.",
          "The remaining balance will be due upon project completion or as per the payment milestones outlined in the agreement.",
          "For subscription-based services, payments are due in advance according to the billing cycle selected (monthly, quarterly, or annual)."
        ]
      },
      {
        type: "subsection",
        title: "3.4 Late Payments",
        text: `Payments not received by the due date will incur a late fee of 2% per month on the outstanding balance. We reserve the right to suspend services until payment is received.`
      },
      {
        type: "subsection",
        title: "3.5 Taxes",
        text: `All fees are exclusive of applicable taxes (including GST), which will be charged additionally as per prevailing rates.`
      }
    ]
  },
  {
    number: 4,
    title: "Payment Gateway Terms",
    icon: Lock,
    content: [
      {
        type: "subsection",
        title: "4.1 Payment Processing",
        text: `We use third-party payment processors to facilitate secure payments. By making a payment, you agree to the terms and conditions of these payment processors.`
      },
      {
        type: "subsection",
        title: "4.2 Data Security",
        text: `All payment transactions are encrypted using industry-standard SSL technology. We do not store complete credit card information on our servers.`
      },
      {
        type: "subsection",
        title: "4.3 Verification",
        text: `For security purposes, we may require additional verification for certain transactions, including but not limited to verification of identity, address, or payment details.`
      },
      {
        type: "subsection",
        title: "4.4 Refunds",
        text: `Refunds, if applicable, will be processed through the original payment method. Refund policies for specific services are outlined in the respective service agreements.`
      },
      {
        type: "subsection",
        title: "4.5 Chargebacks",
        text: `In the event of a disputed charge or chargeback initiated by you, we reserve the right to suspend services until the matter is resolved. You agree to reimburse us for any chargeback fees imposed on us by payment processors.`
      }
    ]
  },
  {
    number: 5,
    title: "Intellectual Property",
    icon: Shield,
    content: [
      {
        type: "subsection",
        title: "5.1 Client Content",
        text: `You retain all ownership rights to content provided by you for use in our services.`
      },
      {
        type: "subsection",
        title: "5.2 Our Content",
        text: `Unless explicitly transferred in writing, we retain ownership of all intellectual property created during the provision of services, including but not limited to code, designs, and workflows. Upon full payment, clients receive a non-exclusive license to use the deliverables for their intended purpose.`
      },
      {
        type: "subsection",
        title: "5.3 Third-Party Components",
        text: `Some services may incorporate third-party components subject to their own licenses. Rights to such components are subject to the terms of those licenses.`
      }
    ]
  },
  {
    number: 6,
    title: "Privacy and Data Protection",
    icon: FileCheck,
    content: [
      {
        type: "subsection",
        title: "6.1 Data Collection",
        text: `We collect and process personal data in accordance with our Privacy Policy and applicable laws.`
      },
      {
        type: "subsection",
        title: "6.2 Client Data",
        text: `For services requiring access to client data, we will handle such data in accordance with applicable data protection laws and any specific data processing agreements.`
      },
      {
        type: "subsection",
        title: "6.3 Compliance",
        text: `Both parties agree to comply with applicable data protection regulations, including but not limited to the Information Technology Act, 2000 and its amendments.`
      }
    ]
  },
  {
    number: 7,
    title: "Limitation of Liability",
    icon: AlertTriangle,
    content: [
      {
        type: "subsection",
        title: "7.1 Service Availability",
        text: `While we strive to provide uninterrupted services, we do not guarantee that our services will be available at all times. We are not liable for any downtime, service interruptions, or delays.`
      },
      {
        type: "subsection",
        title: "7.2 Indirect Damages",
        text: `In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.`
      },
      {
        type: "subsection",
        title: "7.3 Liability Cap",
        text: `Our total liability for any claims arising under these Terms shall not exceed the amount paid by you for the specific service giving rise to such claim in the preceding six (6) months.`
      }
    ]
  },
  {
    number: 8,
    title: "Termination",
    icon: Ban,
    content: [
      {
        type: "subsection",
        title: "8.1 Termination by Either Party",
        text: `Either party may terminate the service agreement with written notice as specified in the service contract.`
      },
      {
        type: "subsection",
        title: "8.2 Termination for Cause",
        text: `We reserve the right to terminate services immediately if you breach these Terms, fail to pay fees when due, or engage in any illegal or harmful activities.`
      },
      {
        type: "subsection",
        title: "8.3 Effect of Termination",
        text: `Upon termination, you remain liable for any outstanding payments. Provisions that by their nature should survive termination shall survive, including payment obligations, intellectual property provisions, and limitations of liability.`
      }
    ]
  },
  {
    number: 9,
    title: "Dispute Resolution",
    icon: Scale,
    content: [
      {
        type: "subsection",
        title: "9.1 Informal Resolution",
        text: `Parties agree to attempt to resolve any disputes informally by contacting each other directly.`
      },
      {
        type: "subsection",
        title: "9.2 Mediation",
        text: `If informal resolution is unsuccessful, parties agree to seek mediation before pursuing legal remedies.`
      },
      {
        type: "subsection",
        title: "9.3 Jurisdiction",
        text: `Any legal proceedings shall be brought in the courts of Ujjain, Madhya Pradesh, India, and you consent to the jurisdiction of such courts.`
      }
    ]
  },
  {
    number: 10,
    title: "General Provisions",
    icon: FileText,
    content: [
      {
        type: "subsection",
        title: "10.1 Amendments",
        text: `We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Continued use of our services after such changes constitutes acceptance of the modified Terms.`
      },
      {
        type: "subsection",
        title: "10.2 Force Majeure",
        text: `Neither party shall be liable for delays or failures in performance resulting from causes beyond their reasonable control, including acts of God, natural disasters, pandemic, war, terrorism, riots, fire, or governmental actions.`
      },
      {
        type: "subsection",
        title: "10.3 Assignment",
        text: `You may not assign your rights or obligations under these Terms without our prior written consent. We may assign our rights to any person or entity without your consent.`
      },
      {
        type: "subsection",
        title: "10.4 Severability",
        text: `If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.`
      },
      {
        type: "subsection",
        title: "10.5 Entire Agreement",
        text: `These Terms, together with any service agreements or statements of work, constitute the entire agreement between you and us regarding our services.`
      }
    ]
  },
];

export default function TermsPage() {
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
              <FileText className="h-3.5 w-3.5" />
              Legal Document
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
              Terms and Conditions
            </h1>
            
            {/* Last Updated */}
            <div className="flex items-center justify-center gap-2 text-sm text-text-muted mb-8">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: June 1, 2024</span>
            </div>

            {/* Quick Nav */}
            <div className="flex flex-wrap justify-center gap-2">
              <a href="#payment" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Payment Terms
              </a>
              <a href="#intellectual" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                IP Rights
              </a>
              <a href="#liability" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Liability
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
                    section.number === 3 ? "payment" : 
                    section.number === 5 ? "intellectual" : 
                    section.number === 7 ? "liability" : undefined
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
                      if (item.type === "list") {
                        return (
                          <div key={idx} className="rounded-xl border border-border/50 bg-surface/30 p-4">
                            <h4 className="text-sm font-semibold text-text-primary mb-3">{item.title}</h4>
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
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary text-white text-xs font-bold">11</span>
                      <span className="text-xs uppercase tracking-wider text-text-muted font-medium">Section 11</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                      Contact Information
                    </h2>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
                  If you have any questions about these Terms, please reach out to our support team.
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
                By using our services, you acknowledge that you have read and understood these terms.
              </p>
              <a 
                href="/" 
                className="text-sm font-medium text-brand-primary hover:underline flex items-center gap-1"
              >
                ← Back to Home
              </a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
