"use client";

import { useState, useEffect } from "react";
import { 
  Database,
  Server,
  Code2,
  FileJson,
  FileText,
  FileCode,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Shield,
  Building2,
  Zap,
  Globe,
  Lock
} from "lucide-react";

type EndpointType = {
  method: string;
  path: string;
  description: string;
};

const endpoints: EndpointType[] = [
  { method: "GET", path: "/api/v1/ledger", description: "Fetch ledger data" },
  { method: "GET", path: "/api/v1/outstanding", description: "Outstanding bills" },
  { method: "GET", path: "/api/v1/sales", description: "Sales summary" },
  { method: "GET", path: "/api/v1/inventory", description: "Stock levels" },
];

const outputFormats = [
  { id: "json", icon: FileJson, label: "JSON", color: "text-amber-600", bgColor: "bg-amber-50" },
  { id: "html", icon: FileCode, label: "HTML", color: "text-blue-600", bgColor: "bg-blue-50" },
  { id: "pdf", icon: FileText, label: "PDF", color: "text-red-600", bgColor: "bg-red-50" },
];

function CodeBlock() {
  const [activeEndpoint, setActiveEndpoint] = useState(0);
  const [response, setResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sampleResponse = `{
  "success": true,
  "data": {
    "party": "Sharma Distributors",
    "outstanding": 125000,
    "aging": {
      "0-30": 45000,
      "31-60": 32000,
      "61-90": 28000,
      "90+": 20000
    },
    "last_payment": "2026-01-15"
  }
}`;

  useEffect(() => {
    // Cycle endpoints
    const endpointInterval = setInterval(() => {
      setActiveEndpoint(prev => (prev + 1) % endpoints.length);
    }, 4000);

    // Type response
    const typeResponse = () => {
      setIsTyping(true);
      setResponse("");
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < sampleResponse.length) {
          setResponse(prev => prev + sampleResponse[i]);
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 10);

      return typeInterval;
    };

    const typeInterval = typeResponse();
    const typeTimer = setInterval(typeResponse, 10000);

    return () => {
      clearInterval(endpointInterval);
      clearInterval(typeTimer);
    };
  }, []);

  return (
    <div className="rounded-xl border border-border/60 bg-white overflow-hidden shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-surface border-b border-border/40">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-[10px] text-text-muted font-mono">api.whats91.com</span>
      </div>

      {/* Endpoint Selector */}
      <div className="px-3 py-2 border-b border-border/40 bg-surface/50">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 text-[10px] font-bold text-green-600 bg-green-100 rounded">GET</span>
          <span className="text-xs font-mono text-text-primary">{endpoints[activeEndpoint].path}</span>
        </div>
        <p className="text-[10px] text-text-muted mt-1">{endpoints[activeEndpoint].description}</p>
      </div>

      {/* Response */}
      <div className="p-3 font-mono text-[10px] leading-relaxed bg-slate-50">
        <pre className="text-text-secondary whitespace-pre-wrap">
          {response}
          {isTyping && <span className="animate-pulse text-brand-primary">▋</span>}
        </pre>
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  const [activeFlow, setActiveFlow] = useState(0);
  const [dataPulse, setDataPulse] = useState(false);

  useEffect(() => {
    // Cycle through flows
    const flowInterval = setInterval(() => {
      setActiveFlow(prev => (prev + 1) % 4);
    }, 2000);

    // Data pulse animation
    const pulseInterval = setInterval(() => {
      setDataPulse(true);
      setTimeout(() => setDataPulse(false), 500);
    }, 1500);

    return () => {
      clearInterval(flowInterval);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <div className="rounded-xl border border-border/60 bg-white p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-text-primary">Data Flow Architecture</span>
        <div className="flex items-center gap-1 text-[10px] text-green-600">
          <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
          Live
        </div>
      </div>

      {/* Architecture Flow */}
      <div className="space-y-3">
        {/* Source */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
            activeFlow === 0 ? "bg-brand-primary/10 ring-1 ring-brand-primary/30" : "bg-surface"
          }`}>
            <Database className="h-4 w-4 text-brand-primary" />
            <div>
              <p className="text-xs font-medium text-text-primary">Busy ERP</p>
              <p className="text-[9px] text-text-muted">On-premise data</p>
            </div>
          </div>
          <ArrowRight className={`h-4 w-4 transition-all ${activeFlow >= 1 && dataPulse ? "text-brand-primary" : "text-border"}`} />
        </div>

        {/* API Server */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
            activeFlow === 1 ? "bg-brand-primary/10 ring-1 ring-brand-primary/30" : "bg-surface"
          }`}>
            <Server className="h-4 w-4 text-brand-primary" />
            <div>
              <p className="text-xs font-medium text-text-primary">API Server</p>
              <p className="text-[9px] text-text-muted">Secure gateway</p>
            </div>
          </div>
          <ArrowRight className={`h-4 w-4 transition-all ${activeFlow >= 2 && dataPulse ? "text-brand-primary" : "text-border"}`} />
        </div>

        {/* Output Formats */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
            activeFlow >= 2 ? "bg-brand-primary/10 ring-1 ring-brand-primary/30" : "bg-surface"
          }`}>
            <Code2 className="h-4 w-4 text-brand-primary" />
            <div>
              <p className="text-xs font-medium text-text-primary">Transform</p>
              <p className="text-[9px] text-text-muted">Format output</p>
            </div>
          </div>
          <ArrowRight className={`h-4 w-4 transition-all ${activeFlow >= 3 && dataPulse ? "text-brand-primary" : "text-border"}`} />
        </div>

        {/* Formats */}
        <div className="flex items-center gap-2 mt-2">
          {outputFormats.map((format, i) => (
            <div 
              key={format.id}
              className={`flex-1 flex items-center gap-1.5 p-2 rounded-lg transition-all ${
                activeFlow === 3 && i === (activeFlow % 3) ? "ring-1 ring-border" : ""
              } ${format.bgColor}`}
            >
              <format.icon className={`h-3.5 w-3.5 ${format.color}`} />
              <div>
                <p className="text-[10px] font-medium text-text-primary">{format.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SecurityBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-surface border border-border/40">
      <Icon className="h-3.5 w-3.5 text-brand-primary" />
      <span className="text-[10px] text-text-secondary">{label}</span>
    </div>
  );
}

export function AnimatedAPIArchitecture() {
  const [requestCount, setRequestCount] = useState(0);
  const [uptime, setUptime] = useState("99.99");

  useEffect(() => {
    // Simulate requests
    const requestInterval = setInterval(() => {
      setRequestCount(prev => prev + Math.floor(Math.random() * 10) + 1);
    }, 2000);

    return () => clearInterval(requestInterval);
  }, []);

  return (
    <div className="relative">
      <div className="rounded-2xl bg-surface/60 border border-border/50 p-4 sm:p-5 shadow-lg backdrop-blur-sm max-w-[420px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary shadow-md shadow-brand-primary/20">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">REST API Engine</p>
              <p className="text-[10px] text-text-muted flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                {uptime}% Uptime • {requestCount.toLocaleString()} requests today
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-brand-primary/10 rounded-full">
            <Lock className="h-3 w-3 text-brand-primary" />
            <span className="text-[10px] font-medium text-brand-primary">Token Auth</span>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-4">
          <ArchitectureDiagram />
        </div>

        {/* Code Block */}
        <div className="mb-4">
          <CodeBlock />
        </div>

        {/* Security Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <SecurityBadge icon={Shield} label="HTTPS" />
          <SecurityBadge icon={Lock} label="Bearer Token" />
          <SecurityBadge icon={Building2} label="Multi-Company" />
          <SecurityBadge icon={Globe} label="Rate Limited" />
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-border/60">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-text-muted">
              <Zap className="h-3 w-3" />
              <span>Sub-100ms response time</span>
            </div>
            <div className="flex items-center gap-1.5 text-brand-primary">
              <RefreshCw className="h-3 w-3" />
              <span className="font-medium">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute -bottom-3 -right-3 sm:right-0 hidden sm:flex rounded-xl bg-white border border-border/60 px-3 py-2 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-amber-50 flex items-center justify-center">
            <FileJson className="h-3.5 w-3.5 text-amber-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-text-primary">JSON • HTML • PDF</p>
            <p className="text-[10px] text-text-muted">Multi-format output</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
