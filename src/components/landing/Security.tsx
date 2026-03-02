"use client";

import { 
  Shield, 
  Lock, 
  FileCheck, 
  Server,
  CheckCircle2
} from "lucide-react";

const certifications = [
  { name: "ISO 27001", description: "Info Security" },
  { name: "ISO 27701", description: "Privacy" },
  { name: "SOC 2", description: "Reliability" },
  { name: "GDPR", description: "EU Data" },
  { name: "DPDP", description: "India 2023" },
];

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "256-bit Signal encryption ensures only sender and recipient can read messages.",
  },
  {
    icon: Server,
    title: "Military-Grade Infrastructure",
    description: "Hosted on AWS/Azure with 99.9% uptime SLAs and proactive threat monitoring.",
  },
  {
    icon: FileCheck,
    title: "DPDP Act Compliance",
    description: "Tools for opt-in management, data minimization, and user data deletion.",
  },
];

const complianceFeatures = [
  "Explicit Opt-ins with consent records",
  "Opt-out mechanisms in every thread",
  "Data Portability on request",
  "Purpose limitation practices",
];

export function Security() {
  return (
    <section id="security" className="py-14 sm:py-16 md:py-24">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-full bg-brand-primary-light border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
            Security & Compliance
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Your business data is your most valuable asset. We ensure the highest level of security and compliance.
          </p>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-4 mb-12 sm:mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 rounded-full border border-border/60 bg-white px-4 sm:px-5 py-2.5 sm:py-3 shadow-sm transition-all duration-200 hover:border-border hover:shadow-md"
            >
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-brand-primary" />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-text-primary">{cert.name}</p>
                <p className="text-[10px] sm:text-xs text-text-muted">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Security Features Grid */}
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border/60 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-border hover:shadow-lg"
            >
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* DPDP Compliance Box */}
        <div className="rounded-2xl bg-gradient-to-br from-brand-primary/[0.04] to-brand-accent/[0.02] border border-brand-primary/15 p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 tracking-tight">
                Compliance under India&apos;s DPDP Act 2023
              </h3>
              <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
                The Digital Personal Data Protection Act emphasizes purpose limitation, data minimization, and user rights.
              </p>
              <ul className="space-y-3">
                {complianceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary/10">
                      <CheckCircle2 className="h-3 w-3 text-brand-primary" />
                    </div>
                    <span className="text-sm sm:text-base text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quality Rating Card */}
            <div className="rounded-xl bg-white border border-border/60 p-5 sm:p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-text-primary">Quality Rating Protection</p>
                  <p className="text-xs sm:text-sm text-text-muted">Stay in Meta&apos;s Green Zone</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Our analytics dashboard monitors your sender reputation, ensuring your verified business identity remains protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
