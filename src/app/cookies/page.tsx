"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactCard } from "@/components/landing/ContactCard";
import { 
  Cookie, 
  Calendar, 
  ChevronRight,
  Settings,
  Database,
  BarChart3,
  Target,
  Shield,
  Clock,
  ToggleLeft,
  HelpCircle,
  ExternalLink,
  RefreshCw
} from "lucide-react";

const cookieTypes = [
  {
    category: "Essential Cookies",
    icon: Shield,
    description: "These cookies are necessary for the website to function properly and cannot be switched off. They are usually set in response to actions you take, such as setting your privacy preferences, logging in, or filling out forms.",
    required: true,
    cookies: [
      { name: "session_id", purpose: "Maintains your session state across page requests", duration: "Session" },
      { name: "csrf_token", purpose: "Prevents cross-site request forgery attacks", duration: "Session" },
      { name: "consent_status", purpose: "Remembers your cookie consent preferences", duration: "1 year" },
    ]
  },
  {
    category: "Functional Cookies",
    icon: Settings,
    description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings. If you do not allow these cookies, some or all of these services may not function properly.",
    required: false,
    cookies: [
      { name: "language_pref", purpose: "Remembers your language preference", duration: "1 year" },
      { name: "theme_mode", purpose: "Stores your dark/light mode preference", duration: "1 year" },
      { name: "sidebar_state", purpose: "Remembers if sidebar is expanded or collapsed", duration: "30 days" },
    ]
  },
  {
    category: "Analytics Cookies",
    icon: BarChart3,
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.",
    required: false,
    cookies: [
      { name: "_ga", purpose: "Google Analytics - distinguishes unique users", duration: "2 years" },
      { name: "_ga_*", purpose: "Google Analytics - maintains session state", duration: "2 years" },
      { name: "_utm*", purpose: "Tracks campaign performance and traffic sources", duration: "6 months" },
    ]
  },
  {
    category: "Marketing Cookies",
    icon: Target,
    description: "These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user. They may be set by our advertising partners.",
    required: false,
    cookies: [
      { name: "_fbp", purpose: "Facebook Pixel - tracks conversions for Facebook ads", duration: "3 months" },
      { name: "li_fat_id", purpose: "LinkedIn - tracks ad conversions", duration: "30 days" },
      { name: "ads_prefs", purpose: "Stores your advertising preferences", duration: "1 year" },
    ]
  },
];

const sections = [
  {
    number: 1,
    title: "What Are Cookies",
    icon: Cookie,
    content: [
      {
        type: "paragraph",
        text: `<strong>Cookies</strong> are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how visitors use their site.`
      },
      {
        type: "paragraph",
        text: `Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device for a set period or until you delete them. Session cookies are deleted when you close your web browser.`
      }
    ]
  },
  {
    number: 2,
    title: "How We Use Cookies",
    icon: Database,
    content: [
      {
        type: "paragraph",
        text: `At <strong>Whats91</strong>, we use cookies and similar tracking technologies for the following purposes:`
      },
      {
        type: "list",
        items: [
          { title: "Essential Operations", text: "To enable core functionality such as page navigation, secure access, and form submissions" },
          { title: "User Experience", text: "To remember your preferences and provide personalized content" },
          { title: "Analytics", text: "To understand how visitors use our website and improve our services" },
          { title: "Marketing", text: "To deliver relevant advertisements and measure campaign effectiveness" },
          { title: "Security", text: "To protect against fraudulent activity and ensure website security" }
        ]
      }
    ]
  },
  {
    number: 3,
    title: "Types of Cookies We Use",
    icon: Settings,
    content: [
      {
        type: "paragraph",
        text: `We use the following categories of cookies on our website:`
      }
    ]
  },
  {
    number: 4,
    title: "Third-Party Cookies",
    icon: ExternalLink,
    content: [
      {
        type: "paragraph",
        text: `Some cookies on our website are set by third-party services. We use the following third-party services that may set cookies:`
      },
      {
        type: "list",
        items: [
          { title: "Google Analytics", text: "For website analytics and performance monitoring" },
          { title: "Google Tag Manager", text: "For managing tracking codes and pixels" },
          { title: "Facebook/Meta", text: "For conversion tracking and advertising" },
          { title: "LinkedIn", text: "For B2B advertising and conversion tracking" },
          { title: "Hotjar", text: "For user behavior analysis and heatmaps" }
        ]
      },
      {
        type: "paragraph",
        text: `These third parties may use cookies to collect information about your online activities over time and across different websites. We do not control these cookies. We recommend reviewing the privacy policies of these third parties for more information.`
      }
    ]
  },
  {
    number: 5,
    title: "Cookie Duration",
    icon: Clock,
    content: [
      {
        type: "paragraph",
        text: `The duration for which cookies are stored on your device varies:`
      },
      {
        type: "list",
        items: [
          { title: "Session Cookies", text: "Deleted when you close your browser" },
          { title: "Persistent Cookies", text: "Remain on your device for a set period (days, months, or years) or until manually deleted" },
          { title: "Security Cookies", text: "Typically shorter duration, refreshed upon each visit" }
        ]
      }
    ]
  },
  {
    number: 6,
    title: "Managing Your Cookie Preferences",
    icon: ToggleLeft,
    content: [
      {
        type: "paragraph",
        text: `You have the right to decide whether to accept or reject cookies. Here are the ways you can manage your cookie preferences:`
      },
      {
        type: "subsection",
        title: "6.1 Cookie Consent Banner",
        text: `When you first visit our website, you will see a cookie consent banner allowing you to accept all cookies, reject non-essential cookies, or customize your preferences. You can access these settings at any time by clicking the "Cookie Settings" link in our footer.`
      },
      {
        type: "subsection",
        title: "6.2 Browser Settings",
        text: `Most browsers allow you to manage cookie settings. You can set your browser to refuse cookies or delete certain cookies. Here's how to manage cookies in popular browsers:`
      },
      {
        type: "list-simple",
        items: [
          "Chrome: Settings > Privacy and Security > Cookies",
          "Firefox: Settings > Privacy & Security > Cookies",
          "Safari: Preferences > Privacy > Manage Website Data",
          "Edge: Settings > Cookies and Site Permissions"
        ]
      },
      {
        type: "subsection",
        title: "6.3 Opt-Out Tools",
        text: `You can opt out of specific tracking by using tools like the Network Advertising Initiative (NAI) opt-out page or the Digital Advertising Alliance (DAA) Consumer Choice page.`
      }
    ]
  },
  {
    number: 7,
    title: "Impact of Disabling Cookies",
    icon: HelpCircle,
    content: [
      {
        type: "paragraph",
        text: `While you can disable most cookies, please note that:`
      },
      {
        type: "list-simple",
        items: [
          "Essential cookies cannot be disabled as they are necessary for the website to function",
          "Disabling functional cookies may affect your user experience",
          "Disabling analytics cookies will not affect website functionality but will limit our ability to improve our services",
          "Disabling marketing cookies will reduce personalized advertising but not affect core website features"
        ]
      }
    ]
  },
  {
    number: 8,
    title: "Similar Technologies",
    icon: Settings,
    content: [
      {
        type: "paragraph",
        text: `In addition to cookies, we may use similar tracking technologies:`
      },
      {
        type: "list",
        items: [
          { title: "Local Storage", text: "Stores data locally on your device for faster loading and offline functionality" },
          { title: "Session Storage", text: "Similar to local storage but cleared when your browser session ends" },
          { title: "Web Beacons", text: "Small transparent images used to track user behavior and email opens" },
          { title: "Pixel Tags", text: "Used in emails and web pages to track engagement and conversions" }
        ]
      }
    ]
  },
  {
    number: 9,
    title: "Updates to This Policy",
    icon: RefreshCw,
    content: [
      {
        type: "paragraph",
        text: `We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We will notify you of any material changes by posting the updated policy on this page and updating the "Last Updated" date.`
      },
      {
        type: "paragraph",
        text: `We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.`
      }
    ]
  },
];

export default function CookiePolicyPage() {
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
              <Cookie className="h-3.5 w-3.5" />
              Policy Document
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
              Cookie Policy
            </h1>
            
            {/* Last Updated */}
            <div className="flex items-center justify-center gap-2 text-sm text-text-muted mb-8">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: January 15, 2025</span>
            </div>

            {/* Quick Nav */}
            <div className="flex flex-wrap justify-center gap-2">
              <a href="#types" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Cookie Types
              </a>
              <a href="#manage" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Manage Cookies
              </a>
              <a href="#third-party" className="text-xs sm:text-sm text-text-secondary hover:text-brand-primary transition-colors px-3 py-1.5 rounded-full bg-white border border-border/50 hover:border-brand-primary/30">
                Third Parties
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
            
            {/* Policy Sections */}
            <div className="space-y-8 sm:space-y-10">
              {sections.map((section) => (
                <div 
                  key={section.number}
                  id={
                    section.number === 3 ? "types" : 
                    section.number === 4 ? "third-party" : 
                    section.number === 6 ? "manage" : undefined
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

                  {/* Cookie Types Table (for section 3) */}
                  {section.number === 3 && (
                    <div className="pl-0 sm:pl-15 mt-6 space-y-6">
                      {cookieTypes.map((type) => (
                        <div key={type.category} className="rounded-xl border border-border/60 overflow-hidden">
                          {/* Category Header */}
                          <div className="flex items-center justify-between p-4 bg-surface/50 border-b border-border/50">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary/10">
                                <type.icon className="h-4 w-4 text-brand-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-text-primary">{type.category}</h4>
                                {type.required && (
                                  <span className="text-[10px] text-brand-primary font-medium">Always Required</span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {/* Description */}
                          <div className="p-4 border-b border-border/40 bg-white">
                            <p className="text-sm text-text-secondary">{type.description}</p>
                          </div>
                          
                          {/* Cookies List */}
                          <div className="divide-y divide-border/40">
                            {type.cookies.map((cookie, idx) => (
                              <div key={idx} className="p-4 hover:bg-surface/20 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                  <code className="text-xs sm:text-sm bg-surface px-2 py-1 rounded text-brand-primary font-mono">
                                    {cookie.name}
                                  </code>
                                  <span className="text-xs text-text-muted bg-surface/50 px-2 py-1 rounded">
                                    {cookie.duration}
                                  </span>
                                </div>
                                <p className="text-sm text-text-secondary">{cookie.purpose}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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
                      Contact Us
                    </h2>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact our team.
                </p>

                {/* Contact Card Popup */}
                <ContactCard variant="popup" trigger={
                  <button className="inline-flex items-center gap-2 rounded-xl border border-brand-primary/30 bg-white px-5 py-3 text-sm font-medium text-brand-primary hover:bg-brand-primary/5 transition-all duration-200 hover:border-brand-primary/50 hover:shadow-md group">
                    <Cookie className="h-4 w-4" />
                    <span>Contact Support</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                } />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-text-muted text-center sm:text-left">
                By continuing to use our website, you consent to the use of cookies as described in this policy.
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
