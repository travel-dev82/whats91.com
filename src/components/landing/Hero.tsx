"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";

const highlights = [
  { icon: Zap, text: "500 msgs/sec throughput" },
  { icon: Shield, text: "256-bit encryption" },
  { icon: CheckCircle2, text: "Meta Verified BSP" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 gradient-brand-subtle pointer-events-none" />
      
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-center">
          
          {/* Content */}
          <div className="flex flex-col gap-5 sm:gap-6 text-center lg:text-left order-1 lg:order-1">
            
            {/* Version Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary-light border border-brand-primary/15 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-brand-primary transition-all duration-300 hover:border-brand-primary/25">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary" />
                </span>
                WhatsApp Cloud API v21.0 Ready
              </div>
            </div>
            
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-text-primary leading-[1.15] lg:leading-[1.1]">
              <span className="block">Enterprise Conversations.</span>
              <span className="block mt-1 text-gradient">Engineered for the Cloud.</span>
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0">
              Scale your communication with the most advanced WhatsApp Cloud API platform in India. Full integration with Busy Accounting and Custom CRMs.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary bg-surface/80 px-3.5 py-2 rounded-full border border-border/50 transition-all duration-200 hover:border-border hover:bg-surface"
                >
                  <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-primary" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start pt-2">
              <Button 
                size="lg" 
                className="h-11 sm:h-12 px-6 sm:px-7 text-sm sm:text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/30 transition-all duration-300 w-full sm:w-auto group"
              >
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-11 sm:h-12 px-6 sm:px-7 text-sm sm:text-base font-semibold rounded-xl border-border/80 hover:bg-surface hover:border-border w-full sm:w-auto transition-all duration-200"
              >
                View Documentation
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="order-2 lg:order-2 w-full">
            <div className="relative rounded-2xl bg-surface/60 border border-border/50 p-3 sm:p-4 shadow-lg backdrop-blur-sm">
              
              {/* Code Snippet */}
              <div className="hidden sm:block rounded-xl bg-[#0F172A] overflow-hidden shadow-md mb-4 border border-slate-700/50">
                <div className="flex items-center gap-2 px-3 py-2.5 bg-slate-800/80 border-b border-slate-700/50">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-400 ml-2 font-mono">webhook-payload.json</span>
                </div>
                <pre className="p-4 text-[11px] sm:text-xs text-slate-300 overflow-x-auto font-mono leading-relaxed">
{`{
  "entry": [{
    "changes": [{
      "value": {
        "messaging_product": "whatsapp",
        "messages": [{
          "from": "91XXXXXXXXXX",
          "type": "text",
          "text": {"body": "Balance"}
        }]
      }
    }]
  }]
}`}
                </pre>
              </div>

              {/* Chat Preview */}
              <div className="rounded-xl bg-background border border-border/60 overflow-hidden shadow-sm">
                <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-border/60 bg-gradient-to-r from-brand-primary/[0.07] to-transparent">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-brand-primary shadow-md shadow-brand-primary/20 shrink-0">
                    <span className="text-xs sm:text-sm font-semibold text-white">W91</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-text-primary truncate">Whats91 Enterprise</p>
                    <p className="text-[10px] sm:text-xs text-brand-primary font-medium">✓ Verified Business</p>
                  </div>
                </div>
                <div className="p-3.5 sm:p-4 space-y-2.5 sm:space-y-3 bg-surface/30">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="rounded-2xl rounded-br-md bg-brand-primary px-4 py-2 text-xs sm:text-sm text-white max-w-[180px] sm:max-w-[200px] shadow-md shadow-brand-primary/15">
                      Balance
                    </div>
                  </div>
                  {/* Bot response */}
                  <div className="flex justify-start">
                    <div className="rounded-2xl rounded-bl-md bg-white border border-border/60 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-text-primary max-w-[220px] sm:max-w-[240px] shadow-sm">
                      <p className="font-semibold mb-1.5 text-xs sm:text-sm">Your Account Summary</p>
                      <p className="text-text-secondary text-[11px] sm:text-xs leading-relaxed">Outstanding: <span className="font-medium text-text-primary">₹45,000</span></p>
                      <p className="text-text-secondary text-[11px] sm:text-xs leading-relaxed">Due Date: <span className="font-medium text-text-primary">15 Jan 2026</span></p>
                      <div className="mt-2.5 pt-2 border-t border-border/60">
                        <button className="text-brand-primary text-[11px] sm:text-xs font-semibold hover:underline">Pay Now →</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="hidden lg:flex absolute -top-2 -right-2 rounded-xl bg-white border border-border/60 px-3.5 py-2.5 shadow-lg">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-primary">99.9% Uptime</p>
                  <p className="text-[10px] text-text-muted">SLA Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
