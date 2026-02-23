"use client";

import { Button } from "@/components/ui/button";
import { 
  Database, 
  FileText, 
  Bot, 
  ArrowRight,
  Check,
  X
} from "lucide-react";

const capabilities = [
  {
    icon: FileText,
    title: "Invoice Automation",
    description: "When an invoice is saved in Busy, instantly trigger a Utility template with a direct PDF attachment.",
  },
  {
    icon: Database,
    title: "Real-time Ledger Inquiry",
    description: "Users type 'Balance' or 'Statement' to receive real-time outstanding with payment links.",
  },
  {
    icon: Bot,
    title: "ERP Chatbot",
    description: "Proactive communication that reduces call center overhead by 40-50% for routine queries.",
  },
];

const comparisonData = [
  { feature: "Delivery Success", standard: "Variable PC uptime", whats91: "99.9% Meta-hosted" },
  { feature: "Media Handling", standard: "15-day link expiry", whats91: "Direct secure PDF" },
  { feature: "Interactivity", standard: "Broadcast-only", whats91: "Full chatbot support" },
  { feature: "Scalability", standard: "256 contacts max", whats91: "500 msgs/second" },
];

export function BusyERP() {
  return (
    <section id="busy-erp" className="py-14 sm:py-16 md:py-24">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-full bg-brand-primary-light border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
            Busy Accounting Integration
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Transform Busy into a Conversational Interface
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Transform Busy Accounting Software into a two-way conversational interface, enabling real-time transactional flows.
          </p>
        </div>

        {/* Capabilities */}
        <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3 mb-12 sm:mb-16">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border/60 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-border hover:shadow-lg"
            >
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison - Mobile: Cards */}
        <div className="md:hidden space-y-3 mb-10">
          <div className="text-center mb-5">
            <h3 className="text-base sm:text-lg font-semibold text-text-primary">
              Standard vs Whats91 Enterprise
            </h3>
          </div>
          {comparisonData.map((row, index) => (
            <div key={index} className="rounded-2xl border border-border/60 bg-white p-4 transition-all duration-200 hover:border-border">
              <p className="text-xs sm:text-sm font-semibold text-text-primary mb-3 pb-2.5 border-b border-border/60">
                {row.feature}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 h-4 w-4 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <X className="h-2.5 w-2.5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted mb-0.5">Standard</p>
                    <p className="text-xs sm:text-sm text-text-secondary">{row.standard}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 h-4 w-4 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <Check className="h-2.5 w-2.5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted mb-0.5">Whats91</p>
                    <p className="text-xs sm:text-sm text-text-primary font-medium">{row.whats91}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison - Desktop: Table */}
        <div className="hidden md:block rounded-2xl border border-border/60 bg-white overflow-hidden shadow-sm mb-10">
          <div className="px-6 py-4 bg-surface/50 border-b border-border/60">
            <h3 className="text-lg font-semibold text-text-primary">
              Standard Notifications vs. Whats91 Enterprise Cloud API
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/60 bg-surface/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Feature</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary">Standard Notification</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-brand-primary">Whats91 Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-border/40 last:border-b-0 hover:bg-surface/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-text-primary">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                          <X className="h-2.5 w-2.5 text-red-500" />
                        </div>
                        <span>{row.standard}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-primary">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                          <Check className="h-2.5 w-2.5 text-brand-primary" />
                        </div>
                        <span className="font-medium">{row.whats91}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="h-11 sm:h-12 px-7 sm:px-8 text-sm sm:text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/25 transition-all duration-300 group"
          >
            Schedule ERP Integration Demo
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
