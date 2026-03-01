"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { 
  Shield, 
  Calendar, 
  ChevronRight,
  UserCircle,
  Database,
  Settings,
  Cookie,
  Share2,
  Lock,
  FileCheck,
  ExternalLink,
  AlertCircle,
  Globe,
  RefreshCw,
  FileText
} from "lucide-react";

const sections = [
  {
    number: 1,
    title: "Introduction",
    icon: Shield,
    content: [
      {
        type: "paragraph",
        text: `<strong>Whats91</strong> ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.`
      },
      {
        type: "paragraph",
        text: `Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.`
      }
    ]
  },
  {
    number: 2,
    title: "Information We Collect",
    icon: Database,
    content: [
      {
        type: "paragraph",
        text: `We collect information that you provide directly to us, information we obtain automatically when you visit our site, and information from third-party sources, as described below:`
      },
      {
        type: "subsection",
        title: "2.1 Personal Information",
        text: `We may collect personal information that can identify you such as your name, email address, phone number, company information, and other information you provide when you:`
      },
      {
        type: "list-simple",
        items: [
          "Create an account or register for our services",
          "Fill out forms or submit inquiries",
          "Subscribe to newsletters or marketing communications",
          "Participate in surveys, contests, or promotions",
          "Request customer support"
        ]
      },
      {
        type: "subsection",
        title: "2.2 Automatically Collected Information",
        text: `When you visit our website or use our services, we may automatically collect certain information about your device and usage, including:`
      },
      {
        type: "list-simple",
        items: [
          "IP address and location information",
          "Device information (browser type, operating system, device type)",
          "Usage data (pages visited, time spent, referring websites)",
          "Cookies and similar tracking technologies",
          "Log data and analytics information"
        ]
      }
    ]
  },
  {
    number: 3,
    title: "How We Use Your Information",
    icon: Settings,
    content: [
      {
        type: "paragraph",
        text: `We use the information we collect for various purposes, including:`
      },
      {
        type: "list-simple",
        items: [
          "Providing, maintaining, and improving our services",
          "Processing transactions and managing your account",
          "Responding to your requests and inquiries",
          "Sending administrative information, updates, and marketing communications",
          "Personalizing your experience and delivering relevant content",
          "Analyzing usage patterns and optimizing our website and services",
          "Protecting against unauthorized access and ensuring security",
          "Complying with legal obligations"
        ]
      }
    ]
  },
  {
    number: 4,
    title: "Cookies and Tracking Technologies",
    icon: Cookie,
    content: [
      {
        type: "paragraph",
        text: `We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.`
      },
      {
        type: "paragraph",
        text: `The types of cookies we use include:`
      },
      {
        type: "list",
        items: [
          { title: "Essential Cookies", text: "Necessary for the website to function properly" },
          { title: "Analytical/Performance Cookies", text: "Allow us to recognize and count visitors and analyze website usage" },
          { title: "Functionality Cookies", text: "Enable the website to remember choices you make" },
          { title: "Targeting Cookies", text: "Record your visit, pages visited, and links followed" }
        ]
      },
      {
        type: "paragraph",
        text: `You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.`
      }
    ]
  },
  {
    number: 5,
    title: "Disclosure of Your Information",
    icon: Share2,
    content: [
      {
        type: "paragraph",
        text: `We may share your information in the following situations:`
      },
      {
        type: "list",
        items: [
          { title: "With Service Providers", text: "Third-party vendors and service providers who perform services on our behalf (such as payment processing, data analysis, email delivery, hosting services)" },
          { title: "For Business Transfers", text: "In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business" },
          { title: "For Legal Compliance", text: "If required to do so by law or in response to valid requests by public authorities" },
          { title: "With Your Consent", text: "With your consent or at your direction" },
          { title: "To Protect Rights", text: "To protect and defend our rights, property, and safety, or those of our users or third parties" }
        ]
      }
    ]
  },
  {
    number: 6,
    title: "Data Security",
    icon: Lock,
    content: [
      {
        type: "paragraph",
        text: `We have implemented appropriate technical and organizational security measures to protect your information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.`
      },
      {
        type: "paragraph",
        text: `While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. You are responsible for maintaining the confidentiality of any password and account information.`
      }
    ]
  },
  {
    number: 7,
    title: "Your Data Protection Rights",
    icon: FileCheck,
    content: [
      {
        type: "paragraph",
        text: `Depending on your location, you may have certain rights regarding your personal information, including:`
      },
      {
        type: "list-simple",
        items: [
          "The right to access personal information we hold about you",
          "The right to request correction of inaccurate information",
          "The right to request deletion of your information",
          "The right to restrict or object to processing",
          "The right to data portability",
          "The right to withdraw consent",
          "The right to lodge a complaint with a supervisory authority"
        ]
      },
      {
        type: "paragraph",
        text: `To exercise these rights, please contact us using the information provided at the end of this policy.`
      }
    ]
  },
  {
    number: 8,
    title: "Third-Party Websites",
    icon: ExternalLink,
    content: [
      {
        type: "paragraph",
        text: `Our website may contain links to third-party websites and services. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to read the privacy policy of every website you visit.`
      }
    ]
  },
  {
    number: 9,
    title: "Children's Privacy",
    icon: AlertCircle,
    content: [
      {
        type: "paragraph",
        text: `Our services are not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.`
      }
    ]
  },
  {
    number: 10,
    title: "International Data Transfers",
    icon: Globe,
    content: [
      {
        type: "paragraph",
        text: `Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.`
      },
      {
        type: "paragraph",
        text: `By providing your information, you consent to this transfer, storage, and processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.`
      }
    ]
  },
  {
    number: 11,
    title: "Changes to This Privacy Policy",
    icon: RefreshCw,
    content: [
      {
        type: "paragraph",
        text: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.`
      },
      {
        type: "paragraph",
        text: `You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`
      }
    ]
  },
];

export default function PrivacyPage() {
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
              Legal Document
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
              Privacy Policy
            </h1>
            
            {/* Last Updated */}
            <div className="flex items-center justify-center gap-2 text-sm text-text-muted mb-8">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: June 1, 2024</span>
            </div>

            {/* Quick Nav */}
            <div className="flex flex-wrap justify-center gap-2">
              <a href="#information" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Data Collection
              </a>
              <a href="#cookies" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Cookies
              </a>
              <a href="#security" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Security
              </a>
              <a href="#rights" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Your Rights
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
                    section.number === 2 ? "information" : 
                    section.number === 4 ? "cookies" : 
                    section.number === 6 ? "security" : 
                    section.number === 7 ? "rights" : undefined
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
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary text-white text-xs font-bold">12</span>
                      <span className="text-xs uppercase tracking-wider text-text-muted font-medium">Section 12</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                      Contact Information
                    </h2>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact our support team.
                </p>

                {/* Contact Card Popup */}
                <ContactCard variant="popup" trigger={
                  <button className="inline-flex items-center gap-2 rounded-xl border border-brand-primary/30 bg-white px-5 py-3 text-sm font-medium text-brand-primary hover:bg-brand-primary/5 transition-all duration-200 hover:border-brand-primary/50 hover:shadow-md group">
                    <Shield className="h-4 w-4" />
                    <span>View Contact Details</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                } />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-text-muted text-center sm:text-left">
                By using our services, you acknowledge that you have read and understood this privacy policy.
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
