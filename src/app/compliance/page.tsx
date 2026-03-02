"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { 
  Shield, 
  Calendar, 
  ChevronRight,
  Scale,
  Database,
  Lock,
  UserCheck,
  FileCheck,
  Bell,
  Users,
  Building2,
  AlertTriangle,
  FileText,
  CheckCircle2
} from "lucide-react";

const sections = [
  {
    number: 1,
    title: "Introduction to DPDP Act",
    icon: Scale,
    content: [
      {
        type: "paragraph",
        text: `The <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> is India's comprehensive data protection legislation that governs the processing of personal data. At <strong>Whats91</strong>, we are fully committed to complying with the DPDP Act and protecting the personal data of our users.`
      },
      {
        type: "paragraph",
        text: `This compliance statement outlines how we adhere to the principles and requirements set forth in the DPDP Act, ensuring transparency, accountability, and security in all our data processing activities.`
      }
    ]
  },
  {
    number: 2,
    title: "Our Role and Responsibilities",
    icon: Building2,
    content: [
      {
        type: "paragraph",
        text: `Under the DPDP Act, Whats91 acts as a <strong>Data Fiduciary</strong> for the personal data collected directly from users, and as a <strong>Data Processor</strong> when processing data on behalf of our enterprise clients.`
      },
      {
        type: "list",
        items: [
          { title: "As Data Fiduciary", text: "We determine the purpose and means of processing personal data collected through our website and services" },
          { title: "As Data Processor", text: "We process personal data on behalf of enterprise clients who use our WhatsApp API solutions, following their instructions and our data processing agreements" },
          { title: "Significant Data Fiduciary", text: "We maintain enhanced compliance measures as we process substantial volumes of personal data through our platform" }
        ]
      }
    ]
  },
  {
    number: 3,
    title: "Lawful Basis for Processing",
    icon: FileCheck,
    content: [
      {
        type: "paragraph",
        text: `We process personal data only when we have a lawful basis under the DPDP Act:`
      },
      {
        type: "list",
        items: [
          { title: "Consent", text: "Obtained freely, specifically, informed, and unconditional for specific processing purposes" },
          { title: "Contractual Necessity", text: "Processing necessary for performance of a contract with the data principal" },
          { title: "Legal Obligation", text: "Processing required to comply with applicable laws and regulations" },
          { title: "Legitimate Purpose", text: "Processing for purposes that are reasonably expected by the data principal" }
        ]
      }
    ]
  },
  {
    number: 4,
    title: "Data Principal Rights",
    icon: UserCheck,
    content: [
      {
        type: "paragraph",
        text: `We ensure that all Data Principals (individuals whose data we process) can exercise their rights under the DPDP Act:`
      },
      {
        type: "list-simple",
        items: [
          "Right to access information about their personal data and processing activities",
          "Right to correction and erasure of inaccurate or incomplete personal data",
          "Right to data portability in a machine-readable format",
          "Right to withdraw consent at any time",
          "Right to be informed about processing activities and purposes",
          "Right to lodge complaints with the Data Protection Board of India"
        ]
      },
      {
        type: "paragraph",
        text: `To exercise these rights, Data Principals can contact us through our designated grievance officer at dpo@whats91.com.`
      }
    ]
  },
  {
    number: 5,
    title: "Data Collection and Purpose Limitation",
    icon: Database,
    content: [
      {
        type: "subsection",
        title: "5.1 Types of Data Collected",
        text: `We collect only personal data that is necessary for specified, explicit, and legitimate purposes: contact information, business details, usage data, and communication records.`
      },
      {
        type: "subsection",
        title: "5.2 Purpose Limitation",
        text: `Personal data is processed only for the purposes for which it was collected. We do not process data in a manner incompatible with those purposes without obtaining additional consent.`
      },
      {
        type: "subsection",
        title: "5.3 Data Minimization",
        text: `We collect only the minimum personal data necessary to fulfill the specified purposes. We do not collect or retain excessive data beyond what is required.`
      }
    ]
  },
  {
    number: 6,
    title: "Consent Management",
    icon: CheckCircle2,
    content: [
      {
        type: "paragraph",
        text: `When consent is the basis for processing, we ensure:`
      },
      {
        type: "list-simple",
        items: [
          "Consent is obtained through a clear and affirmative action",
          "Consent requests are presented separately from other matters",
          "Clear and plain language is used to explain the purpose of processing",
          "Data Principals can easily withdraw consent through simple mechanisms",
          "Detailed consent records are maintained for accountability"
        ]
      },
      {
        type: "paragraph",
        text: `Our consent management system allows users to view, modify, and withdraw their consent preferences at any time through their account settings or by contacting us directly.`
      }
    ]
  },
  {
    number: 7,
    title: "Data Security Measures",
    icon: Lock,
    content: [
      {
        type: "paragraph",
        text: `We implement comprehensive security safeguards to protect personal data from unauthorized access, disclosure, alteration, or destruction:`
      },
      {
        type: "list",
        items: [
          { title: "Encryption", text: "All personal data is encrypted in transit (TLS 1.3) and at rest (AES-256)" },
          { title: "Access Controls", text: "Role-based access controls with multi-factor authentication for all systems" },
          { title: "Security Audits", text: "Regular security assessments, penetration testing, and vulnerability scans" },
          { title: "Incident Response", text: "Documented incident response procedures with notification protocols" },
          { title: "Employee Training", text: "Regular data protection and security awareness training for all personnel" }
        ]
      }
    ]
  },
  {
    number: 8,
    title: "Data Breach Notification",
    icon: AlertTriangle,
    content: [
      {
        type: "paragraph",
        text: `In the event of a personal data breach, we have established procedures to:`
      },
      {
        type: "list-simple",
        items: [
          "Assess the severity and scope of the breach within 48 hours",
          "Notify the Data Protection Board of India within 72 hours of becoming aware of a notifiable breach",
          "Inform affected Data Principals without undue delay if the breach is likely to result in adverse effects",
          "Document all breaches and remedial actions taken",
          "Implement measures to prevent similar breaches in the future"
        ]
      }
    ]
  },
  {
    number: 9,
    title: "Data Retention and Deletion",
    icon: FileText,
    content: [
      {
        type: "paragraph",
        text: `Personal data is retained only for as long as necessary for the purposes for which it was collected:`
      },
      {
        type: "list",
        items: [
          { title: "Active Account Data", text: "Retained while the account is active and for a defined period thereafter for legitimate business purposes" },
          { title: "Legal Retention", text: "Data required for legal compliance may be retained for the period mandated by applicable laws" },
          { title: "Deletion Requests", text: "Upon request from a Data Principal or upon account deletion, we securely delete or anonymize personal data within 30 days" }
        ]
      }
    ]
  },
  {
    number: 10,
    title: "Cross-Border Data Transfers",
    icon: Shield,
    content: [
      {
        type: "paragraph",
        text: `The DPDP Act restricts the transfer of personal data outside India. We ensure compliance by:`
      },
      {
        type: "list-simple",
        items: [
          "Maintaining primary data storage within India",
          "Only transferring data to countries not restricted by the Central Government",
          "Implementing standard contractual clauses for any international transfers",
          "Ensuring adequate protection measures are in place for transferred data",
          "Informing Data Principals about international transfers in our privacy notices"
        ]
      }
    ]
  },
  {
    number: 11,
    title: "Grievance Redressal",
    icon: Bell,
    content: [
      {
        type: "paragraph",
        text: `We have appointed a Data Protection Officer (DPO) to handle data protection matters and grievances:`
      },
      {
        type: "list",
        items: [
          { title: "DPO Contact", text: "Data Protection Officer can be reached at dpo@whats91.com" },
          { title: "Response Time", text: "We acknowledge grievances within 48 hours and respond substantively within 30 days" },
          { title: "Escalation", text: "If unsatisfied with our response, Data Principals can approach the Data Protection Board of India" }
        ]
      }
    ]
  },
  {
    number: 12,
    title: "Children's Data",
    icon: Users,
    content: [
      {
        type: "paragraph",
        text: `We do not knowingly process personal data of children below the age of 18 years without verifiable consent from their parent or guardian. Our services are intended for businesses and adults. If we become aware that we have processed a child's data without appropriate consent, we will take immediate steps to delete such data.`
      }
    ]
  },
  {
    number: 13,
    title: "Updates to This Compliance Statement",
    icon: Shield,
    content: [
      {
        type: "paragraph",
        text: `We will update this DPDP Compliance Statement as needed to reflect changes in our practices, technology, legal requirements, and other factors. We will notify users of any material changes through our website or other appropriate means.`
      }
    ]
  },
];

export default function DPDPCompliancePage() {
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
              <Shield className="h-3.5 w-3.5" />
              Compliance Document
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
              DPDP Compliance
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg text-text-secondary mb-4 max-w-2xl mx-auto">
              Digital Personal Data Protection Act, 2023
            </p>
            
            {/* Last Updated */}
            <div className="flex items-center justify-center gap-2 text-sm text-text-muted mb-8">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: January 15, 2025</span>
            </div>

            {/* Quick Nav */}
            <div className="flex flex-wrap justify-center gap-2">
              <a href="#rights" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Your Rights
              </a>
              <a href="#security" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Data Security
              </a>
              <a href="#consent" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Consent
              </a>
              <a href="#grievance" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Grievance
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
            
            {/* Compliance Sections */}
            <div className="space-y-8 sm:space-y-10">
              {sections.map((section) => (
                <div 
                  key={section.number}
                  id={
                    section.number === 4 ? "rights" : 
                    section.number === 6 ? "consent" : 
                    section.number === 7 ? "security" : 
                    section.number === 11 ? "grievance" : undefined
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
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary text-white text-xs font-bold">14</span>
                      <span className="text-xs uppercase tracking-wider text-text-muted font-medium">Section 14</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                      Contact Our DPO
                    </h2>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
                  For any questions about our DPDP compliance or to exercise your data protection rights, please contact our Data Protection Officer.
                </p>

                {/* Contact Card Popup */}
                <ContactCard variant="popup" trigger={
                  <button className="inline-flex items-center gap-2 rounded-xl border border-brand-primary/30 bg-white px-5 py-3 text-sm font-medium text-brand-primary hover:bg-brand-primary/5 transition-all duration-200 hover:border-brand-primary/50 hover:shadow-md group">
                    <Shield className="h-4 w-4" />
                    <span>Contact DPO</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                } />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-text-muted text-center sm:text-left">
                We are committed to protecting your personal data in compliance with the DPDP Act, 2023.
              </p>
              <div className="flex items-center gap-4">
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
