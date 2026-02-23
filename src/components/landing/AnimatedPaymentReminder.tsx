"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { 
  CheckCircle2,
  XCircle,
  Clock,
  CreditCard,
  Users,
  Bell,
  ArrowRight,
  Zap,
  AlertCircle,
  Building2
} from "lucide-react";

type StepType = {
  id: number;
  title: string;
  description: string;
  status: "pending" | "running" | "success" | "skipped";
  icon: React.ElementType;
};

type CustomerType = {
  name: string;
  outstanding: number;
  creditLimit: number;
  daysOverdue: number;
  willReceive: boolean;
  reason: string;
};

const customers: CustomerType[] = [
  { name: "Sharma Distributors", outstanding: 85000, creditLimit: 100000, daysOverdue: 5, willReceive: false, reason: "Within credit limit" },
  { name: "Gupta Trading Co.", outstanding: 125000, creditLimit: 100000, daysOverdue: 18, willReceive: true, reason: "Exceeds credit limit" },
  { name: "Patel Enterprises", outstanding: 45000, creditLimit: 50000, daysOverdue: 8, willReceive: false, reason: "Within credit limit" },
  { name: "Mehta & Sons", outstanding: 78000, creditLimit: 75000, daysOverdue: 25, willReceive: true, reason: "Overdue > 15 days" },
];

const formatCurrency = (amount: number) => `₹${(amount / 1000).toFixed(0)}K`;

function CustomerCard({ customer, isActive, isProcessed }: { customer: CustomerType; isActive: boolean; isProcessed: boolean }) {
  const utilizationPercent = Math.min((customer.outstanding / customer.creditLimit) * 100, 150);
  const isOverLimit = customer.outstanding > customer.creditLimit;
  
  return (
    <div className={`
      rounded-xl border p-3 transition-all duration-500
      ${isActive ? "border-brand-primary bg-brand-primary/5 ring-2 ring-brand-primary/20 scale-[1.02]" : ""}
      ${isProcessed && customer.willReceive ? "border-green-300 bg-green-50" : ""}
      ${isProcessed && !customer.willReceive ? "border-slate-200 bg-slate-50 opacity-60" : ""}
      ${!isActive && !isProcessed ? "border-border/60 bg-white" : ""}
    `}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${isProcessed && customer.willReceive ? "bg-green-100" : "bg-brand-primary/10"}`}>
            {isProcessed ? (
              customer.willReceive ? (
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              ) : (
                <XCircle className="h-4 w-4 text-slate-400" />
              )
            ) : (
              <Users className="h-4 w-4 text-brand-primary" />
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-text-primary">{customer.name}</p>
            <p className="text-xs text-text-muted">{customer.daysOverdue} days overdue</p>
          </div>
        </div>
        {isActive && (
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-xs text-brand-primary font-medium">Evaluating...</span>
          </div>
        )}
      </div>
      
      {/* Progress bar */}
      <div className="mb-2">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-text-muted">Outstanding</span>
          <span className={`font-medium ${isOverLimit ? "text-red-600" : "text-text-primary"}`}>
            {formatCurrency(customer.outstanding)} / {formatCurrency(customer.creditLimit)}
          </span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ${isOverLimit ? "bg-red-400" : "bg-brand-primary"}`}
            style={{ width: `${Math.min(utilizationPercent, 100)}%` }}
          />
        </div>
      </div>
      
      {/* Result */}
      {isProcessed && (
        <div className={`flex items-center gap-1.5 text-xs ${customer.willReceive ? "text-green-600" : "text-slate-500"}`}>
          {customer.willReceive ? (
            <>
              <Bell className="h-3.5 w-3.5" />
              <span className="font-medium">Reminder sent</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>{customer.reason}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function ValidationSteps({ currentStep }: { currentStep: number }) {
  const steps = [
    { id: 1, label: "Sync Busy Data", icon: Building2 },
    { id: 2, label: "Check Thresholds", icon: CreditCard },
    { id: 3, label: "Validate Terms", icon: Clock },
    { id: 4, label: "Apply Filters", icon: Zap },
    { id: 5, label: "Dispatch Alerts", icon: Bell },
  ];
  
  return (
    <div className="flex items-center justify-between mb-4">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={`
              h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300
              ${currentStep > step.id ? "bg-green-500 text-white" : ""}
              ${currentStep === step.id ? "bg-brand-primary text-white ring-4 ring-brand-primary/20" : ""}
              ${currentStep < step.id ? "bg-slate-100 text-slate-400" : ""}
            `}>
              {currentStep > step.id ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <step.icon className="h-4 w-4" />
              )}
            </div>
            <span className={`text-[10px] mt-1 hidden sm:block ${currentStep >= step.id ? "text-text-primary font-medium" : "text-text-muted"}`}>
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight className={`h-4 w-4 mx-1 ${currentStep > step.id ? "text-green-500" : "text-slate-200"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function StatsPanel({ processedCount, sentCount, skippedCount }: { processedCount: number; sentCount: number; skippedCount: number }) {
  return (
    <div className="grid grid-cols-3 gap-2 mb-4">
      <div className="rounded-lg bg-surface/50 p-2 text-center">
        <p className="text-lg font-bold text-text-primary">{processedCount}</p>
        <p className="text-[10px] text-text-muted">Processed</p>
      </div>
      <div className="rounded-lg bg-green-50 p-2 text-center">
        <p className="text-lg font-bold text-green-600">{sentCount}</p>
        <p className="text-[10px] text-green-600">Reminders Sent</p>
      </div>
      <div className="rounded-lg bg-slate-50 p-2 text-center">
        <p className="text-lg font-bold text-slate-500">{skippedCount}</p>
        <p className="text-[10px] text-slate-500">Skipped</p>
      </div>
    </div>
  );
}

export function AnimatedPaymentReminder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentCustomerIndex, setCurrentCustomerIndex] = useState(-1);
  const [processedCustomers, setProcessedCustomers] = useState<Set<number>>(new Set());
  const [isRunning, setIsRunning] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);
  
  const isDemoRunning = useRef(false);
  const demoTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const runDemo = useCallback(async () => {
    if (isDemoRunning.current) return;
    isDemoRunning.current = true;
    
    // Reset state
    setCurrentStep(0);
    setCurrentCustomerIndex(-1);
    setProcessedCustomers(new Set());
    setIsRunning(true);
    
    // Step 1-4: Validation steps
    for (let step = 1; step <= 4; step++) {
      setCurrentStep(step);
      await new Promise(r => setTimeout(r, 600));
    }
    
    // Step 5: Process customers
    setCurrentStep(5);
    
    for (let i = 0; i < customers.length; i++) {
      setCurrentCustomerIndex(i);
      await new Promise(r => setTimeout(r, 1200));
      setProcessedCustomers(prev => new Set([...prev, i]));
    }
    
    setCurrentCustomerIndex(-1);
    setIsRunning(false);
    setCycleCount(prev => prev + 1);
    
    isDemoRunning.current = false;
    
    // Restart after delay
    demoTimeoutRef.current = setTimeout(() => {
      runDemo();
    }, 4000);
  }, []);

  useEffect(() => {
    // Start demo after short delay
    const startTimeout = setTimeout(() => {
      runDemo();
    }, 1500);

    return () => {
      clearTimeout(startTimeout);
      if (demoTimeoutRef.current) {
        clearTimeout(demoTimeoutRef.current);
      }
      isDemoRunning.current = false;
    };
  }, [runDemo]);

  const sentCount = customers.filter((c, i) => processedCustomers.has(i) && c.willReceive).length;
  const skippedCount = customers.filter((c, i) => processedCustomers.has(i) && !c.willReceive).length;

  return (
    <div className="relative">
      <div className="rounded-2xl bg-surface/60 border border-border/50 p-4 sm:p-5 shadow-lg backdrop-blur-sm max-w-[400px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary shadow-md shadow-brand-primary/20">
              <Bell className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">Payment Reminder Engine</p>
              <p className="text-[10px] text-text-muted flex items-center gap-1">
                {isRunning ? (
                  <>
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
                    Processing...
                  </>
                ) : (
                  <>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Ready
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-brand-primary/10 rounded-full">
            <Zap className="h-3 w-3 text-brand-primary" />
            <span className="text-[10px] font-medium text-brand-primary">Advanced Mode</span>
          </div>
        </div>

        {/* Validation Steps */}
        <ValidationSteps currentStep={currentStep} />

        {/* Stats */}
        <StatsPanel 
          processedCount={processedCustomers.size} 
          sentCount={sentCount} 
          skippedCount={skippedCount} 
        />

        {/* Customer Cards */}
        <div className="space-y-2 max-h-[260px] overflow-y-auto">
          {customers.map((customer, index) => (
            <CustomerCard 
              key={index}
              customer={customer}
              isActive={currentCustomerIndex === index}
              isProcessed={processedCustomers.has(index)}
            />
          ))}
        </div>

        {/* Info Footer */}
        <div className="mt-4 pt-3 border-t border-border/60">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-text-muted">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>Only 2 of 4 customers received reminders</span>
            </div>
            <span className="text-brand-primary font-medium">
              Cycle #{cycleCount + 1}
            </span>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute -bottom-3 -right-3 sm:right-0 hidden sm:flex rounded-xl bg-white border border-border/60 px-3 py-2 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-brand-primary/10 flex items-center justify-center">
            <Zap className="h-3.5 w-3.5 text-brand-primary" />
          </div>
          <div>
            <p className="text-xs font-semibold text-text-primary">Smart Logic</p>
            <p className="text-[10px] text-text-muted">Rule-based filtering</p>
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
