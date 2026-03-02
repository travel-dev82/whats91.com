"use client";

import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Webhook, 
  Shield, 
  ArrowRight,
  Terminal
} from "lucide-react";

const technicalFeatures = [
  {
    icon: Webhook,
    title: "Graph API v21.0 Support",
    description: "Full compatibility with Business Calling and WhatsApp Flows.",
  },
  {
    icon: Shield,
    title: "Signature Validation",
    description: "SHA256 security for every payload transit.",
  },
  {
    icon: Code2,
    title: "Developer Documentation",
    description: "Endpoints, rate-limiting rules, and media management.",
  },
];

const payloadTypes = [
  { type: "Text", description: "Simple text inquiries" },
  { type: "Interactive", description: "Buttons & lists" },
  { type: "Location", description: "GPS coordinates" },
  { type: "Media", description: "Images & documents" },
];

export function Developers() {
  return (
    <section id="developers" className="py-14 sm:py-16 md:py-24 bg-surface/50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center rounded-full bg-brand-primary-light border border-brand-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
              Developer-First
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Technical Excellence: Webhooks & Payloads
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-7">
              Integrating a custom CRM requires robust payload management. We provide a high-availability webhook environment that captures every user interaction.
            </p>

            {/* Technical Features */}
            <div className="space-y-4 mb-7">
              {technicalFeatures.map((feature, index) => (
                <div key={index} className="flex gap-3.5 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-text-primary mb-0.5">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="h-11 sm:h-12 px-7 sm:px-8 text-sm sm:text-base font-semibold rounded-xl bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/20 hover:shadow-xl transition-all duration-300 w-full sm:w-auto group"
            >
              View API Documentation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Right - Code Example */}
          <div className="order-1 lg:order-2">
            
            {/* Code Block */}
            <div className="rounded-2xl bg-[#0F172A] overflow-hidden shadow-xl border border-slate-700/50">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/70 border-b border-slate-700/50">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <Terminal className="h-3.5 w-3.5 text-slate-400" />
                  <span className="text-[11px] sm:text-xs text-slate-400 font-mono">webhook.js</span>
                </div>
              </div>
              
              {/* Code */}
              <pre className="p-4 sm:p-5 text-[11px] sm:text-xs md:text-sm text-slate-300 overflow-x-auto font-mono leading-relaxed">
{`// Handle incoming WhatsApp payload
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-hub-signature-256'];
  
  // Validate SHA256 signature
  if (!validateSignature(signature, req.body)) {
    return res.status(401).send('Invalid');
  }

  const { entry } = req.body;
  const message = entry[0].changes[0].value.messages[0];
  
  // Route by message type
  switch (message.type) {
    case 'text':
      handleTextInquiry(message.text.body);
      break;
    case 'interactive':
      handleButtonResponse(message.interactive);
      break;
    case 'location':
      findNearestService(message.location);
      break;
  }
  
  res.status(200).send('OK');
});`}
              </pre>
            </div>

            {/* Payload Types */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
              {payloadTypes.map((payload, index) => (
                <div 
                  key={index}
                  className="rounded-xl border border-border/60 bg-white p-3 sm:p-3.5 transition-all duration-200 hover:border-border hover:shadow-md"
                >
                  <p className="text-xs sm:text-sm font-semibold text-text-primary">{payload.type}</p>
                  <p className="text-[10px] sm:text-xs text-text-muted mt-0.5">{payload.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
