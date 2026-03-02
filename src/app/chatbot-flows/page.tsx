"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  FileText,
  ShoppingCart,
  CreditCard,
  Receipt,
  BookOpen,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Bot,
  Zap,
  CheckCircle2,
  Play,
  Pause,
  Settings,
  Building2,
  BarChart3,
  Package,
  RefreshCw,
  DollarSign,
  Copy,
  Check
} from "lucide-react";

// Flow Step interface
interface FlowStep {
  id: string;
  type: "trigger" | "condition" | "action" | "message" | "api_call" | "wait" | "end";
  label: string;
  description: string;
  config?: Record<string, string | number | boolean>;
  nextSteps?: string[];
}

// Chatbot Flow interface
interface ChatbotFlow {
  id: string;
  name: string;
  category: string;
  description: string;
  useCase: string;
  erpModule: string;
  steps: FlowStep[];
  triggers: string[];
  integrations: string[];
  estimatedTime: string;
  complexity: "basic" | "intermediate" | "advanced";
}

// Flow Categories
const flowCategories = [
  {
    id: "sales-invoice",
    name: "Sales Invoice",
    icon: FileText,
    description: "Automate invoice creation, delivery, and payment tracking",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "sales-order",
    name: "Sales Order",
    icon: ShoppingCart,
    description: "Streamline order processing and fulfillment workflows",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "sales-return",
    name: "Sales Return",
    icon: RefreshCw,
    description: "Handle returns, credit notes, and refund processing",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    id: "purchase",
    name: "Purchase",
    icon: Package,
    description: "Automate purchase orders and vendor communications",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    id: "payments",
    name: "Payments",
    icon: DollarSign,
    description: "Payment reminders, confirmations, and reconciliation",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: "receipts",
    name: "Receipts",
    icon: Receipt,
    description: "Receipt generation, delivery, and acknowledgment",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    id: "ledgers",
    name: "Ledgers",
    icon: BookOpen,
    description: "Party ledger queries and balance sharing",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    id: "reports",
    name: "Reports",
    icon: BarChart3,
    description: "Automated report delivery and on-demand queries",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
];

// Chatbot Flows Data
const chatbotFlows: ChatbotFlow[] = [
  // Sales Invoice Flows
  {
    id: "si-001",
    name: "Invoice Created Notification",
    category: "sales-invoice",
    description: "Send WhatsApp notification when a new invoice is created in Busy",
    useCase: "Instantly notify customers about their invoice with PDF attachment and payment link",
    erpModule: "Sales > Invoice",
    triggers: ["Webhook: Invoice.Created", "API: Manual Trigger"],
    integrations: ["Busy API", "WhatsApp Cloud API", "PDF Generator"],
    estimatedTime: "2-3 seconds",
    complexity: "basic",
    steps: [
      { id: "s1", type: "trigger", label: "Invoice Created Event", description: "Webhook received from Busy when invoice is created", config: { event: "invoice.created" }, nextSteps: ["s2"] },
      { id: "s2", type: "action", label: "Fetch Invoice Details", description: "Retrieve complete invoice data from Busy API", config: { endpoint: "/api/invoice/{id}", method: "GET" }, nextSteps: ["s3"] },
      { id: "s3", type: "action", label: "Generate PDF", description: "Create PDF version of the invoice", config: { template: "invoice_template_v1" }, nextSteps: ["s4"] },
      { id: "s4", type: "message", label: "Send WhatsApp Message", description: "Send invoice notification with PDF attachment", config: { template: "invoice_notification", mediaType: "document" }, nextSteps: ["s5"] },
      { id: "s5", type: "action", label: "Log Communication", description: "Record message delivery in communication log", config: { table: "communication_logs" }, nextSteps: ["s6"] },
      { id: "s6", type: "end", label: "Flow Complete", description: "Process completed successfully", nextSteps: [] },
    ],
  },
  {
    id: "si-002",
    name: "Payment Reminder Flow",
    category: "sales-invoice",
    description: "Automated payment reminders for overdue invoices",
    useCase: "Send staged reminders (3 days, 7 days, 14 days) for unpaid invoices",
    erpModule: "Sales > Outstanding",
    triggers: ["Schedule: Daily 10:00 AM", "Manual Trigger"],
    integrations: ["Busy API", "WhatsApp Cloud API", "Scheduler"],
    estimatedTime: "1-2 seconds per reminder",
    complexity: "intermediate",
    steps: [
      { id: "s1", type: "trigger", label: "Schedule Trigger", description: "Daily cron job checks for overdue invoices", config: { schedule: "0 10 * * *" }, nextSteps: ["s2"] },
      { id: "s2", type: "action", label: "Query Overdue Invoices", description: "Fetch invoices overdue by configured days", config: { query: "overdue_days: 3,7,14" }, nextSteps: ["s3"] },
      { id: "s3", type: "condition", label: "Check Reminder Stage", description: "Determine which reminder stage applies", config: { conditions: ["3_days", "7_days", "14_days"] }, nextSteps: ["s4", "s5", "s6"] },
      { id: "s4", type: "message", label: "Send Gentle Reminder", description: "First reminder - polite payment request", config: { template: "payment_reminder_1" }, nextSteps: ["s7"] },
      { id: "s5", type: "message", label: "Send Follow-up Reminder", description: "Second reminder - urgent payment request", config: { template: "payment_reminder_2" }, nextSteps: ["s7"] },
      { id: "s6", type: "message", label: "Send Final Notice", description: "Final reminder before escalation", config: { template: "payment_reminder_3" }, nextSteps: ["s7"] },
      { id: "s7", type: "action", label: "Update Reminder Log", description: "Record reminder sent in invoice history", config: { table: "invoice_reminders" }, nextSteps: ["s8"] },
      { id: "s8", type: "end", label: "Flow Complete", description: "Reminder cycle completed", nextSteps: [] },
    ],
  },
  {
    id: "si-003",
    name: "Invoice Query Bot",
    category: "sales-invoice",
    description: "Interactive bot for customers to query invoice status",
    useCase: "Customer sends invoice number, bot returns status, amount, and due date",
    erpModule: "Sales > Invoice",
    triggers: ["WhatsApp Message: Invoice Query", "Keyword: INV"],
    integrations: ["Busy API", "WhatsApp Cloud API", "NLP Engine"],
    estimatedTime: "1-2 seconds",
    complexity: "intermediate",
    steps: [
      { id: "s1", type: "trigger", label: "Message Received", description: "Customer sends invoice query via WhatsApp", config: { keywords: ["INV", "Invoice", "Bill"] }, nextSteps: ["s2"] },
      { id: "s2", type: "action", label: "Extract Invoice Number", description: "Parse message to find invoice number", config: { regex: "INV-\\d{6}" }, nextSteps: ["s3"] },
      { id: "s3", type: "api_call", label: "Fetch Invoice Status", description: "Query Busy API for invoice details", config: { endpoint: "/api/invoice/{number}" }, nextSteps: ["s4"] },
      { id: "s4", type: "condition", label: "Invoice Found?", description: "Check if invoice exists in system", config: { onNotFound: "send_error" }, nextSteps: ["s5", "s6"] },
      { id: "s5", type: "message", label: "Send Invoice Details", description: "Return formatted invoice information", config: { template: "invoice_status_response" }, nextSteps: ["s7"] },
      { id: "s6", type: "message", label: "Send Not Found Error", description: "Inform customer invoice not found", config: { template: "invoice_not_found" }, nextSteps: ["s7"] },
      { id: "s7", type: "end", label: "Query Resolved", description: "Customer query handled", nextSteps: [] },
    ],
  },

  // Sales Order Flows
  {
    id: "so-001",
    name: "Order Confirmation Flow",
    category: "sales-order",
    description: "Send order confirmation with details and expected delivery",
    useCase: "Confirm sales orders with item list, totals, and delivery timeline",
    erpModule: "Sales > Order",
    triggers: ["Webhook: Order.Created", "API: Manual Trigger"],
    integrations: ["Busy API", "WhatsApp Cloud API"],
    estimatedTime: "2-3 seconds",
    complexity: "basic",
    steps: [
      { id: "s1", type: "trigger", label: "Order Created Event", description: "Webhook from Busy on order creation", config: { event: "order.created" }, nextSteps: ["s2"] },
      { id: "s2", type: "action", label: "Fetch Order Details", description: "Get complete order information", config: { endpoint: "/api/order/{id}" }, nextSteps: ["s3"] },
      { id: "s3", type: "condition", label: "Stock Available?", description: "Check inventory for all items", config: { check: "inventory_available" }, nextSteps: ["s4", "s5"] },
      { id: "s4", type: "message", label: "Send Confirmation", description: "Order confirmed with delivery date", config: { template: "order_confirmed" }, nextSteps: ["s6"] },
      { id: "s5", type: "message", label: "Send Pending Confirmation", description: "Order received, awaiting stock", config: { template: "order_pending_stock" }, nextSteps: ["s6"] },
      { id: "s6", type: "action", label: "Create Follow-up Task", description: "Schedule delivery follow-up", config: { taskType: "delivery_followup" }, nextSteps: ["s7"] },
      { id: "s7", type: "end", label: "Flow Complete", description: "Order confirmation flow ended", nextSteps: [] },
    ],
  },
  {
    id: "so-002",
    name: "Order Status Query",
    category: "sales-order",
    description: "Bot to check and communicate order status",
    useCase: "Customers query order status by order number or phone number",
    erpModule: "Sales > Order",
    triggers: ["WhatsApp Message: Order Query", "Keyword: ORDER"],
    integrations: ["Busy API", "WhatsApp Cloud API"],
    estimatedTime: "1-2 seconds",
    complexity: "basic",
    steps: [
      { id: "s1", type: "trigger", label: "Status Query Received", description: "Customer asks for order status", config: { keywords: ["ORDER", "Status", "Track"] }, nextSteps: ["s2"] },
      { id: "s2", type: "action", label: "Identify Customer", description: "Match phone number to customer account", config: { matchBy: "phone" }, nextSteps: ["s3"] },
      { id: "s3", type: "api_call", label: "Fetch Orders", description: "Get customer's active orders", config: { endpoint: "/api/orders/by_customer/{id}" }, nextSteps: ["s4"] },
      { id: "s4", type: "message", label: "Send Order List", description: "Display active orders with quick actions", config: { template: "order_list_response" }, nextSteps: ["s5"] },
      { id: "s5", type: "end", label: "Query Complete", description: "Order status provided", nextSteps: [] },
    ],
  },

  // Sales Return Flows
  {
    id: "sr-001",
    name: "Return Request Handler",
    category: "sales-return",
    description: "Process and acknowledge sales return requests",
    useCase: "Customer initiates return, bot guides through process and creates return entry",
    erpModule: "Sales > Return",
    triggers: ["WhatsApp Message: Return Request", "Keyword: RETURN"],
    integrations: ["Busy API", "WhatsApp Cloud API", "Image Processing"],
    estimatedTime: "3-5 seconds",
    complexity: "advanced",
    steps: [
      { id: "s1", type: "trigger", label: "Return Request", description: "Customer initiates return via WhatsApp", config: { keywords: ["Return", "Replace", "Defective"] }, nextSteps: ["s2"] },
      { id: "s2", type: "message", label: "Ask Invoice Number", description: "Request original invoice reference", config: { template: "request_invoice_number" }, nextSteps: ["s3"] },
      { id: "s3", type: "wait", label: "Wait for Response", description: "Wait for customer to provide invoice", config: { timeout: "24h" }, nextSteps: ["s4"] },
      { id: "s4", type: "api_call", label: "Validate Invoice", description: "Verify invoice and check return eligibility", config: { endpoint: "/api/invoice/{id}/return_eligibility" }, nextSteps: ["s5"] },
      { id: "s5", type: "condition", label: "Return Allowed?", description: "Check return policy conditions", config: { daysLimit: 30, condition: "unused" }, nextSteps: ["s6", "s7"] },
      { id: "s6", type: "message", label: "Request Item Details", description: "Ask which items and reason for return", config: { template: "return_item_selection" }, nextSteps: ["s8"] },
      { id: "s7", type: "message", label: "Reject Return", description: "Explain return policy violation", config: { template: "return_rejected" }, nextSteps: ["s10"] },
      { id: "s8", type: "action", label: "Create Return Entry", description: "Generate sales return in Busy", config: { autoApprove: false }, nextSteps: ["s9"] },
      { id: "s9", type: "message", label: "Send Return Acknowledgment", description: "Confirm return registered with reference", config: { template: "return_acknowledged" }, nextSteps: ["s10"] },
      { id: "s10", type: "end", label: "Flow Complete", description: "Return process initiated or rejected", nextSteps: [] },
    ],
  },

  // Purchase Flows
  {
    id: "pu-001",
    name: "Purchase Order Confirmation",
    category: "purchase",
    description: "Notify vendors about purchase orders",
    useCase: "Send PO details to vendors with item list and delivery requirements",
    erpModule: "Purchase > Order",
    triggers: ["Webhook: PO.Created", "Manual Trigger"],
    integrations: ["Busy API", "WhatsApp Cloud API", "Vendor Portal"],
    estimatedTime: "2-3 seconds",
    complexity: "basic",
    steps: [
      { id: "s1", type: "trigger", label: "PO Created", description: "Purchase order generated in Busy", config: { event: "purchase_order.created" }, nextSteps: ["s2"] },
      { id: "s2", type: "action", label: "Fetch Vendor Details", description: "Get vendor contact and preferences", config: { endpoint: "/api/vendor/{id}" }, nextSteps: ["s3"] },
      { id: "s3", type: "condition", label: "Vendor WhatsApp?", description: "Check if vendor uses WhatsApp", config: { field: "preferred_channel" }, nextSteps: ["s4", "s5"] },
      { id: "s4", type: "message", label: "Send PO via WhatsApp", description: "Send PO notification with PDF", config: { template: "po_notification_vendor" }, nextSteps: ["s6"] },
      { id: "s5", type: "action", label: "Send via Email", description: "Fallback to email notification", config: { channel: "email" }, nextSteps: ["s6"] },
      { id: "s6", type: "action", label: "Log Communication", description: "Record PO sent to vendor", config: { table: "po_communications" }, nextSteps: ["s7"] },
      { id: "s7", type: "end", label: "Flow Complete", description: "PO notification sent", nextSteps: [] },
    ],
  },

  // Payment Flows
  {
    id: "pay-001",
    name: "Payment Received Confirmation",
    category: "payments",
    description: "Confirm payment receipt to customers",
    useCase: "Auto-send payment confirmation when payment is recorded in Busy",
    erpModule: "Account > Receipt",
    triggers: ["Webhook: Payment.Received", "API Trigger"],
    integrations: ["Busy API", "WhatsApp Cloud API", "Payment Gateway"],
    estimatedTime: "1-2 seconds",
    complexity: "basic",
    steps: [
      { id: "s1", type: "trigger", label: "Payment Recorded", description: "Payment entry created in Busy", config: { event: "payment.received" }, nextSteps: ["s2"] },
      { id: "s2", type: "action", label: "Fetch Payment Details", description: "Get payment and invoice linkage", config: { endpoint: "/api/payment/{id}" }, nextSteps: ["s3"] },
      { id: "s3", type: "action", label: "Update Invoice Status", description: "Mark invoices as paid/partially paid", config: { action: "update_invoice_status" }, nextSteps: ["s4"] },
      { id: "s4", type: "message", label: "Send Confirmation", description: "Send payment receipt to customer", config: { template: "payment_received_confirmation" }, nextSteps: ["s5"] },
      { id: "s5", type: "end", label: "Flow Complete", description: "Payment confirmation sent", nextSteps: [] },
    ],
  },
  {
    id: "pay-002",
    name: "Outstanding Balance Query",
    category: "payments",
    description: "Bot for customers to check their outstanding balance",
    useCase: "Customers query their total outstanding and aging breakdown",
    erpModule: "Account > Outstanding",
    triggers: ["WhatsApp Message: Balance Query", "Keywords: BALANCE, OUTSTANDING, DUE"],
    integrations: ["Busy API", "WhatsApp Cloud API"],
    estimatedTime: "1-2 seconds",
    complexity: "basic",
    steps: [
      { id: "s1", type: "trigger", label: "Balance Query", description: "Customer asks for outstanding balance", config: { keywords: ["Balance", "Outstanding", "Due", "Bill"] }, nextSteps: ["s2"] },
      { id: "s2", type: "action", label: "Identify Account", description: "Match phone to customer ledger", config: { matchBy: "phone" }, nextSteps: ["s3"] },
      { id: "s3", type: "api_call", label: "Fetch Outstanding", description: "Get bill-by-bill outstanding", config: { endpoint: "/api/outstanding/{account_id}" }, nextSteps: ["s4"] },
      { id: "s4", type: "message", label: "Send Outstanding Details", description: "Formatted balance with aging", config: { template: "outstanding_balance_response" }, nextSteps: ["s5"] },
      { id: "s5", type: "end", label: "Query Complete", description: "Balance information provided", nextSteps: [] },
    ],
  },

  // Receipt Flows
  {
    id: "rec-001",
    name: "Receipt Delivery Flow",
    category: "receipts",
    description: "Auto-deliver receipts via WhatsApp",
    useCase: "Send receipt copy when payment receipt is generated",
    erpModule: "Account > Receipt",
    triggers: ["Webhook: Receipt.Generated"],
    integrations: ["Busy API", "WhatsApp Cloud API", "PDF Generator"],
    estimatedTime: "2-3 seconds",
    complexity: "basic",
    steps: [
      { id: "s1", type: "trigger", label: "Receipt Generated", description: "Receipt entry created in Busy", config: { event: "receipt.generated" }, nextSteps: ["s2"] },
      { id: "s2", type: "action", label: "Generate Receipt PDF", description: "Create formatted receipt document", config: { template: "receipt_template" }, nextSteps: ["s3"] },
      { id: "s3", type: "message", label: "Send Receipt", description: "Deliver receipt via WhatsApp", config: { template: "receipt_delivery", mediaType: "document" }, nextSteps: ["s4"] },
      { id: "s4", type: "end", label: "Flow Complete", description: "Receipt delivered", nextSteps: [] },
    ],
  },

  // Ledger Flows
  {
    id: "led-001",
    name: "Ledger Statement Request",
    category: "ledgers",
    description: "Provide party ledger statements on demand",
    useCase: "Customers request their account statement for a date range",
    erpModule: "Account > Ledger",
    triggers: ["WhatsApp Message: Ledger Request", "Keywords: LEDGER, STATEMENT, ACCOUNT"],
    integrations: ["Busy API", "WhatsApp Cloud API", "PDF Generator"],
    estimatedTime: "3-5 seconds",
    complexity: "intermediate",
    steps: [
      { id: "s1", type: "trigger", label: "Statement Request", description: "Customer requests ledger statement", config: { keywords: ["Ledger", "Statement", "Account", "History"] }, nextSteps: ["s2"] },
      { id: "s2", type: "action", label: "Identify Account", description: "Match to ledger account", config: { matchBy: "phone" }, nextSteps: ["s3"] },
      { id: "s3", type: "message", label: "Ask Date Range", description: "Request statement period", config: { template: "request_date_range" }, nextSteps: ["s4"] },
      { id: "s4", type: "wait", label: "Wait for Input", description: "Wait for date range response", config: { timeout: "1h" }, nextSteps: ["s5"] },
      { id: "s5", type: "api_call", label: "Fetch Ledger", description: "Get ledger entries for period", config: { endpoint: "/api/ledger/{account_id}" }, nextSteps: ["s6"] },
      { id: "s6", type: "action", label: "Generate Statement PDF", description: "Create formatted statement", config: { template: "ledger_statement" }, nextSteps: ["s7"] },
      { id: "s7", type: "message", label: "Send Statement", description: "Deliver statement document", config: { template: "ledger_statement_delivery" }, nextSteps: ["s8"] },
      { id: "s8", type: "end", label: "Flow Complete", description: "Statement delivered", nextSteps: [] },
    ],
  },

  // Report Flows
  {
    id: "rep-001",
    name: "Daily Sales Report",
    category: "reports",
    description: "Automated daily sales summary delivery",
    useCase: "Send daily sales summary to management at configured time",
    erpModule: "Reports > Sales",
    triggers: ["Schedule: Daily 8:00 PM"],
    integrations: ["Busy API", "WhatsApp Cloud API", "Report Generator"],
    estimatedTime: "5-10 seconds",
    complexity: "intermediate",
    steps: [
      { id: "s1", type: "trigger", label: "Scheduled Trigger", description: "Daily cron triggers at 8 PM", config: { schedule: "0 20 * * *" }, nextSteps: ["s2"] },
      { id: "s2", type: "api_call", label: "Fetch Sales Data", description: "Get today's sales summary", config: { endpoint: "/api/reports/sales/daily" }, nextSteps: ["s3"] },
      { id: "s3", type: "action", label: "Generate Report", description: "Compile sales summary report", config: { format: "summary_card" }, nextSteps: ["s4"] },
      { id: "s4", type: "action", label: "Get Recipients", description: "Fetch management recipients list", config: { table: "report_recipients" }, nextSteps: ["s5"] },
      { id: "s5", type: "message", label: "Send to Management", description: "Deliver report to each recipient", config: { template: "daily_sales_report" }, nextSteps: ["s6"] },
      { id: "s6", type: "end", label: "Flow Complete", description: "Daily report sent", nextSteps: [] },
    ],
  },
  {
    id: "rep-002",
    name: "On-Demand Report Bot",
    category: "reports",
    description: "Interactive bot for report requests",
    useCase: "Management can request specific reports via WhatsApp commands",
    erpModule: "Reports > All",
    triggers: ["WhatsApp Message: Report Request", "Keywords: REPORT"],
    integrations: ["Busy API", "WhatsApp Cloud API"],
    estimatedTime: "5-15 seconds",
    complexity: "advanced",
    steps: [
      { id: "s1", type: "trigger", label: "Report Request", description: "User requests a report", config: { keywords: ["Report", "Summary", "Analysis"] }, nextSteps: ["s2"] },
      { id: "s2", type: "condition", label: "Authorized User?", description: "Check if user has report access", config: { role: "management" }, nextSteps: ["s3", "s8"] },
      { id: "s3", type: "message", label: "Show Report Menu", description: "Display available report options", config: { template: "report_menu" }, nextSteps: ["s4"] },
      { id: "s4", type: "wait", label: "Wait for Selection", description: "Wait for report choice", config: { timeout: "5m" }, nextSteps: ["s5"] },
      { id: "s5", type: "api_call", label: "Generate Report", description: "Fetch and format requested report", config: { endpoint: "/api/reports/generate" }, nextSteps: ["s6"] },
      { id: "s6", type: "message", label: "Deliver Report", description: "Send report via WhatsApp", config: { template: "report_delivery" }, nextSteps: ["s7"] },
      { id: "s7", type: "end", label: "Flow Complete", description: "Report delivered", nextSteps: [] },
      { id: "s8", type: "message", label: "Access Denied", description: "Inform user of insufficient permissions", config: { template: "access_denied" }, nextSteps: ["s9"] },
      { id: "s9", type: "end", label: "Flow End", description: "Unauthorized access blocked", nextSteps: [] },
    ],
  },
];

// Step type icons and colors
const stepTypeConfig: Record<string, { icon: React.ElementType; color: string; bgColor: string }> = {
  trigger: { icon: Zap, color: "text-yellow-600", bgColor: "bg-yellow-50" },
  condition: { icon: ArrowRight, color: "text-purple-600", bgColor: "bg-purple-50" },
  action: { icon: Settings, color: "text-blue-600", bgColor: "bg-blue-50" },
  message: { icon: MessageCircle, color: "text-green-600", bgColor: "bg-green-50" },
  api_call: { icon: Building2, color: "text-indigo-600", bgColor: "bg-indigo-50" },
  wait: { icon: Pause, color: "text-orange-600", bgColor: "bg-orange-50" },
  end: { icon: CheckCircle2, color: "text-emerald-600", bgColor: "bg-emerald-50" },
};

// Complexity badge colors
const complexityColors: Record<string, string> = {
  basic: "bg-green-100 text-green-700 border-green-200",
  intermediate: "bg-amber-100 text-amber-700 border-amber-200",
  advanced: "bg-red-100 text-red-700 border-red-200",
};

// Flow Card Component
function FlowCard({ flow, isExpanded, onToggle }: { flow: ChatbotFlow; isExpanded: boolean; onToggle: () => void }) {
  const category = flowCategories.find(c => c.id === flow.category);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(flow, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {category && (
              <div className={`p-1.5 rounded-lg ${category.bgColor}`}>
                <category.icon className={`h-4 w-4 ${category.color}`} />
              </div>
            )}
            <Badge variant="outline" className="text-[10px]">
              {category?.name || flow.category}
            </Badge>
          </div>
          <Badge className={complexityColors[flow.complexity]}>
            {flow.complexity}
          </Badge>
        </div>
        <CardTitle className="text-base font-semibold mt-2">{flow.name}</CardTitle>
        <CardDescription className="text-xs">{flow.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-text-muted">
            <Play className="h-3 w-3" />
            <span>{flow.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-1.5 text-text-muted">
            <Settings className="h-3 w-3" />
            <span>{flow.steps.length} steps</span>
          </div>
        </div>

        {/* Triggers */}
        <div className="flex flex-wrap gap-1">
          {flow.triggers.slice(0, 2).map((trigger, idx) => (
            <Badge key={idx} variant="secondary" className="text-[10px]">
              {trigger}
            </Badge>
          ))}
        </div>

        {/* Expand/Collapse */}
        <Collapsible open={isExpanded} onOpenChange={onToggle}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full text-xs">
              {isExpanded ? (
                <>
                  <ChevronDown className="h-3 w-3 mr-1" />
                  Hide Flow Details
                </>
              ) : (
                <>
                  <ChevronRight className="h-3 w-3 mr-1" />
                  View Flow Details
                </>
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-4 space-y-4">
              {/* Use Case */}
              <div className="p-3 bg-surface rounded-lg">
                <p className="text-xs font-medium text-text-primary mb-1">Use Case</p>
                <p className="text-xs text-text-secondary">{flow.useCase}</p>
              </div>

              {/* ERP Module */}
              <div className="flex items-center gap-2 text-xs">
                <Building2 className="h-3 w-3 text-brand-primary" />
                <span className="text-text-muted">Module:</span>
                <span className="font-medium text-text-primary">{flow.erpModule}</span>
              </div>

              {/* Flow Steps */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-text-primary">Flow Steps</p>
                <div className="space-y-1">
                  {flow.steps.map((step, idx) => {
                    const config = stepTypeConfig[step.type];
                    const IconComponent = config.icon;
                    return (
                      <div 
                        key={step.id}
                        className={`flex items-center gap-2 p-2 rounded-lg ${config.bgColor} border border-border/30`}
                      >
                        <div className="flex items-center gap-2 flex-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-white text-[10px] font-bold text-text-muted border border-border/50">
                            {idx + 1}
                          </div>
                          <IconComponent className={`h-3.5 w-3.5 ${config.color}`} />
                          <div className="flex-1">
                            <p className="text-xs font-medium text-text-primary">{step.label}</p>
                            <p className="text-[10px] text-text-muted">{step.description}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-[9px] capitalize">
                          {step.type.replace("_", " ")}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Integrations */}
              <div>
                <p className="text-xs font-medium text-text-primary mb-2">Integrations</p>
                <div className="flex flex-wrap gap-1">
                  {flow.integrations.map((integration, idx) => (
                    <Badge key={idx} variant="outline" className="text-[10px]">
                      {integration}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2 border-t border-border/50">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 text-xs"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 mr-1" />
                      Copy JSON
                    </>
                  )}
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 text-xs bg-brand-primary text-white"
                >
                  <Play className="h-3 w-3 mr-1" />
                  Use Flow
                </Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}

export default function ChatbotFlowLibraryPage() {
  const [activeCategory, setActiveCategory] = useState("sales-invoice");
  const [expandedFlows, setExpandedFlows] = useState<Set<string>>(new Set());

  const toggleFlow = (flowId: string) => {
    setExpandedFlows(prev => {
      const next = new Set(prev);
      if (next.has(flowId)) {
        next.delete(flowId);
      } else {
        next.add(flowId);
      }
      return next;
    });
  };

  const categoryFlows = chatbotFlows.filter(f => f.category === activeCategory);
  const activeCategoryData = flowCategories.find(c => c.id === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-surface to-background py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto relative">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm font-medium">
                <Bot className="h-3.5 w-3.5 mr-1.5 text-brand-primary" />
                Chatbot Flow Library
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
                ERP Chatbot Flow
                <span className="text-brand-primary"> Library</span>
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Pre-built conversational flows for Busy Accounting Software integration. 
                Automate sales, purchases, payments, and more with WhatsApp chatbots.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-blue-500" />
                  <span>Sales Invoice</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4 text-purple-500" />
                  <span>Sales Order</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-500" />
                  <span>Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-rose-500" />
                  <span>Reports</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-8 border-b border-border/40">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-primary">{chatbotFlows.length}+</p>
                <p className="text-sm text-text-secondary">Flows</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-primary">{flowCategories.length}</p>
                <p className="text-sm text-text-secondary">Categories</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-primary">100%</p>
                <p className="text-sm text-text-secondary">Busy Compatible</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-primary">24/7</p>
                <p className="text-sm text-text-secondary">Automation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            {/* Category Navigation */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-text-primary mb-4">Select ERP Category</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                {flowCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-300 ${
                      activeCategory === category.id
                        ? "border-brand-primary bg-brand-primary/5 shadow-md"
                        : "border-border/60 hover:border-border hover:bg-surface/50"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <category.icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <span className={`text-xs font-medium text-center ${
                      activeCategory === category.id ? "text-brand-primary" : "text-text-secondary"
                    }`}>
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Category Description */}
            {activeCategoryData && (
              <div className="mb-6 p-4 rounded-xl bg-surface/50 border border-border/40">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${activeCategoryData.bgColor}`}>
                    <activeCategoryData.icon className={`h-5 w-5 ${activeCategoryData.color}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary">{activeCategoryData.name} Flows</h3>
                    <p className="text-sm text-text-secondary">{activeCategoryData.description}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Flow Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryFlows.length > 0 ? (
                categoryFlows.map((flow) => (
                  <FlowCard
                    key={flow.id}
                    flow={flow}
                    isExpanded={expandedFlows.has(flow.id)}
                    onToggle={() => toggleFlow(flow.id)}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <Bot className="h-12 w-12 text-text-muted mx-auto mb-4" />
                  <p className="text-text-secondary">No flows available for this category yet.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                How Chatbot Flows Work
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Each flow is a pre-designed conversation path that automates business processes
                between your ERP system and WhatsApp.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              {[
                {
                  step: 1,
                  title: "Trigger Event",
                  description: "Flow starts when a specific event occurs in Busy or a customer sends a message",
                  icon: Zap,
                },
                {
                  step: 2,
                  title: "Process & Route",
                  description: "Flow executes steps, checks conditions, and calls API endpoints as needed",
                  icon: Settings,
                },
                {
                  step: 3,
                  title: "Deliver Response",
                  description: "Customer receives appropriate WhatsApp message with data or action confirmation",
                  icon: MessageCircle,
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-border/60 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white font-bold text-lg shadow-md">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">{item.title}</h3>
                      <p className="text-sm text-text-secondary mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flow Components Reference */}
        <section className="py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
                Flow Step Types
              </h2>

              <div className="grid gap-3">
                {Object.entries(stepTypeConfig).map(([type, config]) => {
                  const IconComponent = config.icon;
                  return (
                    <div 
                      key={type}
                      className={`flex items-center gap-4 p-4 rounded-xl ${config.bgColor} border border-border/40`}
                    >
                      <div className="p-2 rounded-lg bg-white shadow-sm">
                        <IconComponent className={`h-5 w-5 ${config.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-text-primary capitalize">{type.replace("_", " ")}</p>
                        <p className="text-sm text-text-secondary">
                          {type === "trigger" && "Starts the flow when event occurs"}
                          {type === "condition" && "Branches flow based on conditions"}
                          {type === "action" && "Performs a system operation"}
                          {type === "message" && "Sends a WhatsApp message"}
                          {type === "api_call" && "Calls external API endpoint"}
                          {type === "wait" && "Pauses for user input or time"}
                          {type === "end" && "Terminates the flow"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-primary to-brand-primary-hover">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need Custom Chatbot Flows?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our team can design and implement custom chatbot flows tailored to your 
              specific ERP workflows and business requirements.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-white text-brand-primary hover:bg-white/90">
              <Link href="/contact">
                Request Custom Flow
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
