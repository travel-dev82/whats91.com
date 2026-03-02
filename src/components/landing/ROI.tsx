"use client";

import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users,
  ArrowUpRight
} from "lucide-react";

const stats = [
  { 
    icon: TrendingUp, 
    value: "98%", 
    label: "Message Open Rate",
    comparison: "vs 42% for email"
  },
  { 
    icon: DollarSign, 
    value: "50%", 
    label: "Lower Acquisition",
    comparison: "via CTWA ads"
  },
  { 
    icon: Clock, 
    value: "95%", 
    label: "Efficiency Gain",
    comparison: "routine tasks"
  },
  { 
    icon: Users, 
    value: "40-50%", 
    label: "Support Reduction",
    comparison: "via chatbot"
  },
];

const roiItems = [
  {
    title: "Abandoned Cart Recovery",
    rate: "45-60%",
    comparison: "vs 10% email",
    description: "Automated nudges 15-30 mins after cart drop.",
  },
  {
    title: "Lead Qualification",
    rate: "3x",
    comparison: "higher conversion",
    description: "Zero-friction in-chat forms collect PII instantly.",
  },
  {
    title: "Invoice Payment Speed",
    rate: "90%+",
    comparison: "open rate",
    description: "Direct PDF invoices with payment links.",
  },
];

export function ROI() {
  return (
    <section className="py-14 sm:py-16 md:py-24 bg-surface/50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-full bg-brand-primary-light border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
            ROI & Business Impact
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Measurable Results for Your Enterprise
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Higher engagement, faster sales cycles, and reduced operational costs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-2 lg:grid-cols-4 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border/60 bg-white p-5 sm:p-6 text-center transition-all duration-300 hover:border-border hover:shadow-lg"
            >
              <div className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">{stat.value}</span>
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-text-primary mb-0.5">{stat.label}</p>
              <p className="text-[10px] sm:text-xs text-text-muted">{stat.comparison}</p>
            </div>
          ))}
        </div>

        {/* ROI Details */}
        <div className="rounded-2xl border border-border/60 bg-white overflow-hidden shadow-sm">
          <div className="px-5 sm:px-6 py-4 bg-surface/50 border-b border-border/60">
            <h3 className="text-base sm:text-lg font-semibold text-text-primary">
              Marketing Strategy Impact
            </h3>
          </div>
          
          {/* Mobile: Cards */}
          <div className="sm:hidden divide-y divide-border/60">
            {roiItems.map((item, index) => (
              <div key={index} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-semibold text-text-primary pr-2">{item.title}</h4>
                  <span className="text-lg font-bold text-brand-primary shrink-0">{item.rate}</span>
                </div>
                <p className="text-xs text-text-secondary mb-1">{item.description}</p>
                <p className="text-[10px] text-text-muted">{item.comparison}</p>
              </div>
            ))}
          </div>
          
          {/* Desktop: Rows */}
          <div className="hidden sm:block divide-y divide-border/40">
            {roiItems.map((item, index) => (
              <div key={index} className="p-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-surface/30 transition-colors group">
                <div className="flex-1">
                  <h4 className="text-base font-semibold text-text-primary mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-2xl font-bold text-brand-primary transition-transform duration-200 group-hover:scale-105">{item.rate}</p>
                  <p className="text-xs text-text-muted">{item.comparison}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Efficiency Formula */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-block rounded-2xl bg-[#0F172A] px-6 sm:px-8 py-5 sm:py-6 shadow-lg">
            <p className="text-[10px] sm:text-xs text-slate-400 mb-2 uppercase tracking-wider">Efficiency Gain Formula</p>
            <p className="text-base sm:text-lg text-white font-mono tracking-wide">
              η = (T<sub className="text-[10px]">manual</sub> - T<sub className="text-[10px]">auto</sub>) / T<sub className="text-[10px]">manual</sub> × 100
            </p>
            <p className="text-[10px] sm:text-xs text-slate-500 mt-2">
              Where T<sub>auto</sub> is under 5 seconds for routine queries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
