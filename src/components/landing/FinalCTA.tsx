"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-14 sm:py-16 md:py-24">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent p-7 sm:p-8 md:p-12 lg:p-16 shadow-xl">
          
          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-3xl" />
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm font-medium text-white mb-5 sm:mb-6 border border-white/10">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Start your enterprise journey today
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Ready to transform your enterprise communication?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/90 mb-7 sm:mb-8 max-w-xl mx-auto leading-relaxed">
              Join India&apos;s leading enterprises using Whats91 for WhatsApp Cloud API integration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                size="lg" 
                className="h-11 sm:h-12 px-7 sm:px-8 text-sm sm:text-base font-semibold bg-white text-brand-primary hover:bg-white/95 rounded-xl shadow-lg w-full sm:w-auto group transition-all duration-300 hover:shadow-xl"
              >
                Request Technical Consultation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button 
                size="lg" 
                className="h-11 sm:h-12 px-7 sm:px-8 text-sm sm:text-base font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-xl w-full sm:w-auto transition-all duration-300"
              >
                Contact Sales
              </Button>
            </div>

            {/* Trust Badge */}
            <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-white/70">
              Trusted by <span className="font-semibold text-white/90">500+ enterprises</span> across India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
