"use client";

import { 
  Megaphone, 
  Database, 
  Headphones, 
  Code2,
  ArrowRight,
  Star
} from "lucide-react";

const solutions = [
  {
    icon: Megaphone,
    title: "Marketing & Engagement",
    description: "98% open rates, broadcast scheduling for millions of users, and Click-to-WhatsApp ads that lower acquisition costs by 50%.",
    features: ["Broadcast", "CTWA Ads", "Cart Recovery"],
    gradient: "from-blue-500/10 to-blue-500/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    borderHover: "hover:border-blue-200",
  },
  {
    icon: Database,
    title: "Busy Accounting & ERP",
    description: "Automate invoices, payment reminders, and real-time ledger inquiries directly from WhatsApp.",
    features: ["Invoices", "Reminders", "Ledger Bot"],
    gradient: "from-brand-primary/10 to-brand-accent/5",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    featured: true,
    borderHover: "hover:border-brand-primary/30",
  },
  {
    icon: Headphones,
    title: "Support & Operations",
    description: "24/7 AI-powered chatbots that handle routine FAQs and escalate complex cases without losing context.",
    features: ["AI Chatbots", "Multi-Agent", "Smart Routing"],
    gradient: "from-purple-500/10 to-purple-500/5",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
    borderHover: "hover:border-purple-200",
  },
  {
    icon: Code2,
    title: "Developer Sandbox",
    description: "Handle incoming payloads, webhook security, and Graph API documentation for custom CRM builds.",
    features: ["Webhooks", "Payload Docs", "SDKs"],
    gradient: "from-orange-500/10 to-orange-500/5",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
    borderHover: "hover:border-orange-200",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-14 sm:py-16 md:py-24 bg-surface/50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-full bg-brand-primary-light border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
            WhatsApp Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Everything your enterprise needs
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
            From marketing automation to deep ERP integration, we provide comprehensive WhatsApp Business solutions.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border p-5 sm:p-6 transition-all duration-400 ease-out bg-white ${solution.borderHover} ${
                solution.featured 
                  ? "border-brand-primary/20 bg-gradient-to-br from-brand-primary/[0.03] to-transparent" 
                  : "border-border/70 hover:shadow-lg"
              }`}
            >
              {/* Featured Badge */}
              {solution.featured && (
                <div className="absolute -top-2.5 right-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-3 py-1 text-[10px] sm:text-xs font-semibold text-white shadow-md shadow-brand-primary/20">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="flex flex-col gap-4">
                {/* Icon */}
                <div className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl ${solution.iconBg} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                  <solution.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${solution.iconColor}`} />
                </div>
                
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary tracking-tight">
                  {solution.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {solution.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1">
                  {solution.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-[11px] sm:text-xs font-medium text-text-muted border border-border/50 transition-colors duration-200 group-hover:border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Learn More */}
                <button className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold mt-1 transition-all duration-200 group-hover:gap-2.5 ${solution.iconColor}`}>
                  Learn more 
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
