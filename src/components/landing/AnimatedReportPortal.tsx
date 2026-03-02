"use client";

import { useState, useEffect } from "react";
import { 
  Monitor,
  Smartphone,
  FileText,
  TrendingUp,
  Users,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Shield,
  Building2,
  Clock,
  Zap
} from "lucide-react";

type ReportType = {
  id: string;
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
};

const reports: ReportType[] = [
  { id: "sales", name: "Today's Sales", value: "₹4,52,000", change: "+12.5%", isPositive: true },
  { id: "outstanding", name: "Total Outstanding", value: "₹28,45,000", change: "-3.2%", isPositive: true },
  { id: "collections", name: "Collections", value: "₹1,85,000", change: "+8.7%", isPositive: true },
  { id: "ledger", name: "Active Ledgers", value: "247", change: "+5", isPositive: true },
];

function WebPortalMockup() {
  const [activeReport, setActiveReport] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [dataValues, setDataValues] = useState(reports);

  useEffect(() => {
    // Cycle through reports
    const reportInterval = setInterval(() => {
      setActiveReport(prev => (prev + 1) % reports.length);
    }, 3000);

    // Simulate data refresh
    const refreshInterval = setInterval(() => {
      setIsRefreshing(true);
      setTimeout(() => {
        setDataValues(prev => prev.map(r => ({
          ...r,
          value: r.id === "sales" ? `₹${(4 + Math.random() * 1).toFixed(0)},${(Math.random() * 99).toFixed(0)},000` : r.value,
        })));
        setIsRefreshing(false);
      }, 500);
    }, 8000);

    return () => {
      clearInterval(reportInterval);
      clearInterval(refreshInterval);
    };
  }, []);

  return (
    <div className="rounded-xl border border-border/60 bg-slate-50 p-3 shadow-lg">
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/40">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 h-5 rounded bg-white border border-border/40 flex items-center px-2">
          <span className="text-[8px] text-slate-400 truncate">portal.whats91.com/busy-reports</span>
        </div>
        <RefreshCw className={`h-3 w-3 text-slate-400 ${isRefreshing ? "animate-spin" : ""}`} />
      </div>

      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-brand-primary flex items-center justify-center">
            <FileText className="h-3 w-3 text-white" />
          </div>
          <span className="text-xs font-semibold text-slate-700">Busy Reports</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-500">
          <Clock className="h-3 w-3" />
          Live
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {dataValues.map((report, index) => (
          <div 
            key={report.id}
            className={`p-2 rounded-lg transition-all duration-300 ${
              activeReport === index 
                ? "bg-brand-primary/10 ring-1 ring-brand-primary/30" 
                : "bg-white border border-border/40"
            }`}
          >
            <p className="text-[9px] text-slate-500 mb-0.5">{report.name}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-bold text-slate-800">{report.value}</span>
              <span className={`text-[8px] ${report.isPositive ? "text-green-600" : "text-red-500"}`}>
                {report.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white rounded-lg border border-border/40 p-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-medium text-slate-600">Sales Trend</span>
          <span className="text-[8px] text-slate-400">Last 7 days</span>
        </div>
        <div className="flex items-end gap-1 h-12">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div 
              key={i} 
              className="flex-1 rounded-t transition-all duration-500"
              style={{ 
                height: `${h}%`,
                backgroundColor: i === 6 ? "#448C74" : "#E2E8F0"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAppMockup() {
  const [activeTab, setActiveTab] = useState(0);
  const [notification, setNotification] = useState(false);

  const tabs = [
    { icon: TrendingUp, label: "Sales" },
    { icon: CreditCard, label: "Outstanding" },
    { icon: Users, label: "Ledger" },
    { icon: FileText, label: "Reports" },
  ];

  useEffect(() => {
    // Cycle tabs
    const tabInterval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % tabs.length);
    }, 2500);

    // Show notification periodically
    const notifInterval = setInterval(() => {
      setNotification(true);
      setTimeout(() => setNotification(false), 2000);
    }, 6000);

    return () => {
      clearInterval(tabInterval);
      clearInterval(notifInterval);
    };
  }, []);

  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="w-[140px] rounded-[24px] border-4 border-slate-800 bg-slate-900 p-1.5 shadow-xl">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-2.5 rounded-full bg-slate-800" />
        
        {/* Screen */}
        <div className="rounded-[16px] bg-white overflow-hidden">
          {/* Status Bar */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-slate-50 border-b border-border/30">
            <span className="text-[8px] text-slate-500">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-1.5 rounded-sm bg-green-500" />
              <div className="w-3 h-1.5 rounded-sm bg-slate-300" />
            </div>
          </div>

          {/* App Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-brand-primary">
            <span className="text-[10px] font-semibold text-white">Busy Reports</span>
            <div className="relative">
              <Shield className="h-3 w-3 text-white/70" />
              {notification && (
                <div className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-2 space-y-2">
            {/* Active Tab Content */}
            <div className="bg-slate-50 rounded-lg p-2">
              <div className="flex items-center gap-1.5 mb-1.5">
                {tabs.map((tab, i) => (
                  <div 
                    key={i}
                    className={`flex-1 flex flex-col items-center py-1 rounded transition-all ${
                      activeTab === i ? "bg-brand-primary/10" : ""
                    }`}
                  >
                    <tab.icon className={`h-3 w-3 ${activeTab === i ? "text-brand-primary" : "text-slate-400"}`} />
                  </div>
                ))}
              </div>
              
              {/* Metric */}
              <div className="text-center py-2">
                <p className="text-[8px] text-slate-500">{tabs[activeTab].label} Summary</p>
                <p className="text-lg font-bold text-slate-800">
                  {activeTab === 0 && "₹4.52L"}
                  {activeTab === 1 && "₹28.45L"}
                  {activeTab === 2 && "247"}
                  {activeTab === 3 && "12"}
                </p>
                <p className="text-[8px] text-green-600">↑ Updated just now</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-brand-primary/5 rounded-lg p-1.5 text-center">
                <Building2 className="h-3 w-3 text-brand-primary mx-auto mb-0.5" />
                <span className="text-[7px] text-slate-600">Companies</span>
              </div>
              <div className="bg-brand-primary/5 rounded-lg p-1.5 text-center">
                <Clock className="h-3 w-3 text-brand-primary mx-auto mb-0.5" />
                <span className="text-[7px] text-slate-600">History</span>
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="flex items-center justify-around py-1.5 border-t border-border/30 bg-white">
            {tabs.map((tab, i) => (
              <div key={i} className="flex flex-col items-center">
                <tab.icon className={`h-3 w-3 ${activeTab === i ? "text-brand-primary" : "text-slate-400"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notification Popup */}
      {notification && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded-lg shadow-lg animate-bounce text-[8px] whitespace-nowrap">
          New sale: ₹45,000
        </div>
      )}
    </div>
  );
}

function ComparisonTable() {
  const rows = [
    { feature: "Accessibility", desktop: "Office PC only", portal: "Anywhere, 24/7 (Web & App)" },
    { feature: "Data Sync", desktop: "Manual checks", portal: "Live synchronization" },
    { feature: "User Access", desktop: "Limited system logins", portal: "Granular, role-based" },
    { feature: "Multi-Company", desktop: "Switch manually", portal: "Unified, isolated dashboards" },
    { feature: "Owner Dependency", desktop: "High (ask accountant)", portal: "Zero (self-serve)" },
  ];

  return (
    <div className="rounded-xl border border-border/60 bg-white overflow-hidden">
      <table className="w-full text-[10px]">
        <thead>
          <tr className="bg-surface">
            <th className="px-2 py-2 text-left font-medium text-text-primary">Feature</th>
            <th className="px-2 py-2 text-left font-medium text-slate-500">Busy Desktop</th>
            <th className="px-2 py-2 text-left font-medium text-brand-primary">Whats91 Portal</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border/40">
              <td className="px-2 py-1.5 text-text-primary font-medium">{row.feature}</td>
              <td className="px-2 py-1.5 text-slate-500">{row.desktop}</td>
              <td className="px-2 py-1.5 text-brand-primary font-medium flex items-center gap-1">
                <CheckCircle2 className="h-2.5 w-2.5 shrink-0" />
                {row.portal}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AnimatedReportPortal() {
  const [showComparison, setShowComparison] = useState(false);
  const [syncPulse, setSyncPulse] = useState(false);

  useEffect(() => {
    // Toggle comparison view
    const comparisonInterval = setInterval(() => {
      setShowComparison(prev => !prev);
    }, 10000);

    // Sync pulse animation
    const syncInterval = setInterval(() => {
      setSyncPulse(true);
      setTimeout(() => setSyncPulse(false), 1000);
    }, 5000);

    return () => {
      clearInterval(comparisonInterval);
      clearInterval(syncInterval);
    };
  }, []);

  return (
    <div className="relative">
      <div className="rounded-2xl bg-surface/60 border border-border/50 p-4 sm:p-5 shadow-lg backdrop-blur-sm max-w-[420px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary shadow-md shadow-brand-primary/20">
              <Monitor className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">Web & Mobile Portal</p>
              <p className="text-[10px] text-text-muted flex items-center gap-1">
                <span className={`h-1.5 w-1.5 rounded-full ${syncPulse ? "bg-green-500 animate-ping" : "bg-green-500"}`} />
                Live sync from Busy
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-green-50 rounded-full">
            <Clock className="h-3 w-3 text-green-600" />
            <span className="text-[10px] font-medium text-green-700">24/7 Access</span>
          </div>
        </div>

        {/* Dual Device Display */}
        <div className="flex items-center gap-3 mb-4">
          {/* Web Portal */}
          <div className="flex-1">
            <WebPortalMockup />
          </div>
          
          {/* Sync Arrow */}
          <div className="flex flex-col items-center gap-1">
            <RefreshCw className={`h-4 w-4 text-brand-primary ${syncPulse ? "animate-spin" : ""}`} />
            <span className="text-[8px] text-slate-400">Sync</span>
          </div>
          
          {/* Mobile App */}
          <MobileAppMockup />
        </div>

        {/* Comparison Table */}
        <div className={`
          transition-all duration-500 overflow-hidden
          ${showComparison ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}
        `}>
          <ComparisonTable />
        </div>

        {/* Info Footer */}
        <div className="mt-4 pt-3 border-t border-border/60">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-text-muted">
              <Zap className="h-3 w-3" />
              <span>Live data, no RDP needed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="h-3 w-3 text-brand-primary" />
              <span className="text-brand-primary font-medium">Secure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute -bottom-3 -right-3 sm:right-0 hidden sm:flex rounded-xl bg-white border border-border/60 px-3 py-2 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-brand-primary/10 flex items-center justify-center">
            <Smartphone className="h-3.5 w-3.5 text-brand-primary" />
          </div>
          <div>
            <p className="text-xs font-semibold text-text-primary">Mobile Ready</p>
            <p className="text-[10px] text-text-muted">iOS & Android</p>
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
