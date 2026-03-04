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
  Check,
  Code,
  Sparkles,
  Clock,
  Users,
  Target
} from "lucide-react";

// BotMaster Flow JSON Types (based on schema)
interface FlowOutput {
  key: string;
  label: string;
}

interface FlowButton {
  id: string;
  title: string;
}

interface FlowConfig {
  match_mode?: "any" | "keyword";
  keywords?: string[];
  case_sensitive?: boolean;
  body_text?: string;
  header_text?: string;
  footer_text?: string;
  interactive_type?: "none" | "button" | "list";
  buttons?: FlowButton[];
  list_data?: null;
  media_url?: string;
  media_type?: string;
  media_filename?: string;
  rules?: Array<{
    operator: string;
    value: string;
    branch: string;
  }>;
  key?: string;
  value?: string;
  tag?: string;
  timeout_seconds?: number;
  result?: "completed" | "handoff" | "stopped";
}

interface FlowNode {
  id: string;
  type: "trigger.inbound_message" | "message.compose" | "logic.condition" | "action.set_variable" | "action.tag_contact" | "control.wait" | "control.end";
  position: { x: number; y: number };
  data: {
    label: string;
    config: FlowConfig;
    outputs: FlowOutput[];
  };
}

interface FlowEdge {
  id: string;
  source: string;
  target: string;
  sourceHandle: string;
  targetHandle: string;
  condition: { type: string };
  priority: number;
}

interface BotMasterFlow {
  schema_version: string;
  flow_uid: string;
  entry_node_id: string;
  meta: {
    name: string;
    description: string;
  };
  nodes: FlowNode[];
  edges: FlowEdge[];
  variables: Record<string, unknown>;
  settings: {
    max_hops_per_message: number;
    fallback_behavior: string;
    timezone: string;
  };
  ui: {
    viewport: { x: number; y: number; zoom: number };
  };
}

// Flow Library Item - includes metadata for UI
interface FlowLibraryItem {
  id: string;
  name: string;
  category: string;
  description: string;
  useCase: string;
  complexity: "basic" | "intermediate" | "advanced";
  tags: string[];
  flow: BotMasterFlow;
}

// Flow Categories
const flowCategories = [
  {
    id: "welcome",
    name: "Welcome",
    icon: Sparkles,
    description: "Greeting and onboarding flows for new conversations",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    id: "sales",
    name: "Sales",
    icon: ShoppingCart,
    description: "Lead qualification and sales automation flows",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "support",
    name: "Support",
    icon: MessageCircle,
    description: "Customer support and ticket routing flows",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: Package,
    description: "Order management and cart recovery flows",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    id: "payments",
    name: "Payments",
    icon: DollarSign,
    description: "Payment reminders and confirmation flows",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: "bookings",
    name: "Bookings",
    icon: Calendar,
    description: "Appointment scheduling and reminders",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
];

// Helper to generate timestamps for IDs
const generateTimestamp = () => Date.now();

// BotMaster Flow JSON Library - Following the schema exactly
const flowLibrary: FlowLibraryItem[] = [
  // WELCOME FLOWS
  {
    id: "welcome-001",
    name: "Simple Welcome Flow",
    category: "welcome",
    description: "Basic welcome message with quick reply options",
    useCase: "Greet new users and offer main menu options",
    complexity: "basic",
    tags: ["greeting", "onboarding", "menu"],
    flow: {
      schema_version: "1.0.0",
      flow_uid: "welcome-simple-001",
      entry_node_id: "n_1000_1",
      meta: {
        name: "Simple Welcome Flow",
        description: "Basic greeting with menu options"
      },
      nodes: [
        {
          id: "n_1000_1",
          type: "trigger.inbound_message",
          position: { x: 100, y: 50 },
          data: {
            label: "Inbound Message",
            config: {
              match_mode: "keyword",
              keywords: ["hi", "hello", "hey", "start"],
              case_sensitive: false
            },
            outputs: [{ key: "out", label: "Match" }]
          }
        },
        {
          id: "n_1000_2",
          type: "message.compose",
          position: { x: 100, y: 200 },
          data: {
            label: "Welcome Message",
            config: {
              body_text: "Welcome to our WhatsApp service! How can we help you today?",
              header_text: "Hello!",
              footer_text: "Select an option",
              interactive_type: "button",
              buttons: [
                { id: "btn_sales", title: "Sales" },
                { id: "btn_support", title: "Support" },
                { id: "btn_info", title: "Info" }
              ],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [
              { key: "btn_sales", label: "Sales" },
              { key: "btn_support", label: "Support" },
              { key: "btn_info", label: "Info" }
            ]
          }
        },
        {
          id: "n_1000_3",
          type: "message.compose",
          position: { x: 50, y: 400 },
          data: {
            label: "Sales Response",
            config: {
              body_text: "Great! Our sales team is here to help. Please share your requirements and we'll get back to you shortly.",
              header_text: "",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_1000_4",
          type: "message.compose",
          position: { x: 200, y: 400 },
          data: {
            label: "Support Response",
            config: {
              body_text: "We're here to help! Please describe your issue and our support team will assist you.",
              header_text: "",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_1000_5",
          type: "message.compose",
          position: { x: 350, y: 400 },
          data: {
            label: "Info Response",
            config: {
              body_text: "Here's information about our services. Visit our website or ask any specific question!",
              header_text: "",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_1000_6",
          type: "control.end",
          position: { x: 200, y: 600 },
          data: {
            label: "End",
            config: { result: "completed" },
            outputs: []
          }
        }
      ],
      edges: [
        { id: "e_2000_1", source: "n_1000_1", target: "n_1000_2", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_2000_2", source: "n_1000_2", target: "n_1000_3", sourceHandle: "btn_sales", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_2000_3", source: "n_1000_2", target: "n_1000_4", sourceHandle: "btn_support", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_2000_4", source: "n_1000_2", target: "n_1000_5", sourceHandle: "btn_info", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_2000_5", source: "n_1000_3", target: "n_1000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_2000_6", source: "n_1000_4", target: "n_1000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_2000_7", source: "n_1000_5", target: "n_1000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 }
      ],
      variables: {},
      settings: {
        max_hops_per_message: 20,
        fallback_behavior: "legacy_advance_bot",
        timezone: "Asia/Kolkata"
      },
      ui: {
        viewport: { x: 0, y: 0, zoom: 1 }
      }
    }
  },
  {
    id: "welcome-002",
    name: "Business Hours Welcome",
    category: "welcome",
    description: "Welcome message with business hours awareness",
    useCase: "Greet users differently based on business hours",
    complexity: "intermediate",
    tags: ["greeting", "business-hours", "scheduling"],
    flow: {
      schema_version: "1.0.0",
      flow_uid: "welcome-hours-002",
      entry_node_id: "n_2000_1",
      meta: {
        name: "Business Hours Welcome",
        description: "Time-aware greeting flow"
      },
      nodes: [
        {
          id: "n_2000_1",
          type: "trigger.inbound_message",
          position: { x: 100, y: 50 },
          data: {
            label: "Inbound Message",
            config: {
              match_mode: "any",
              keywords: [],
              case_sensitive: false
            },
            outputs: [{ key: "out", label: "Match" }]
          }
        },
        {
          id: "n_2000_2",
          type: "message.compose",
          position: { x: 100, y: 200 },
          data: {
            label: "Welcome Message",
            config: {
              body_text: "Thank you for contacting us! Our team will respond shortly. Meanwhile, how can we assist you?",
              header_text: "Welcome!",
              footer_text: "Choose an option",
              interactive_type: "button",
              buttons: [
                { id: "btn_products", title: "Products" },
                { id: "btn_support", title: "Support" },
                { id: "btn_callback", title: "Call Back" }
              ],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [
              { key: "btn_products", label: "Products" },
              { key: "btn_support", label: "Support" },
              { key: "btn_callback", label: "Call Back" }
            ]
          }
        },
        {
          id: "n_2000_3",
          type: "action.tag_contact",
          position: { x: 100, y: 380 },
          data: {
            label: "Tag as New Contact",
            config: { tag: "new-conversation" },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_2000_4",
          type: "control.end",
          position: { x: 100, y: 520 },
          data: {
            label: "End",
            config: { result: "completed" },
            outputs: []
          }
        }
      ],
      edges: [
        { id: "e_3000_1", source: "n_2000_1", target: "n_2000_2", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_3000_2", source: "n_2000_2", target: "n_2000_3", sourceHandle: "btn_products", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_3000_3", source: "n_2000_2", target: "n_2000_3", sourceHandle: "btn_support", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_3000_4", source: "n_2000_2", target: "n_2000_3", sourceHandle: "btn_callback", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_3000_5", source: "n_2000_3", target: "n_2000_4", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 }
      ],
      variables: {},
      settings: {
        max_hops_per_message: 20,
        fallback_behavior: "legacy_advance_bot",
        timezone: "Asia/Kolkata"
      },
      ui: {
        viewport: { x: 0, y: 0, zoom: 1 }
      }
    }
  },

  // SALES FLOWS
  {
    id: "sales-001",
    name: "Lead Qualification Flow",
    category: "sales",
    description: "Qualify leads with automated questions",
    useCase: "Automatically qualify incoming leads based on budget, timeline, and interest",
    complexity: "intermediate",
    tags: ["lead-gen", "qualification", "crm"],
    flow: {
      schema_version: "1.0.0",
      flow_uid: "sales-qualify-001",
      entry_node_id: "n_3000_1",
      meta: {
        name: "Lead Qualification Flow",
        description: "Automated lead scoring and qualification"
      },
      nodes: [
        {
          id: "n_3000_1",
          type: "trigger.inbound_message",
          position: { x: 100, y: 50 },
          data: {
            label: "Inbound Message",
            config: {
              match_mode: "keyword",
              keywords: ["quote", "pricing", "price", "buy", "purchase"],
              case_sensitive: false
            },
            outputs: [{ key: "out", label: "Match" }]
          }
        },
        {
          id: "n_3000_2",
          type: "message.compose",
          position: { x: 100, y: 200 },
          data: {
            label: "Ask Product Interest",
            config: {
              body_text: "Great! I'd love to help you find the right solution. What are you looking for?",
              header_text: "Product Inquiry",
              footer_text: "Select category",
              interactive_type: "button",
              buttons: [
                { id: "btn_enterprise", title: "Enterprise" },
                { id: "btn_smb", title: "Business" },
                { id: "btn_individual", title: "Individual" }
              ],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [
              { key: "btn_enterprise", label: "Enterprise" },
              { key: "btn_smb", label: "Business" },
              { key: "btn_individual", label: "Individual" }
            ]
          }
        },
        {
          id: "n_3000_3",
          type: "action.set_variable",
          position: { x: 50, y: 400 },
          data: {
            label: "Set Lead Type",
            config: { key: "lead_type", value: "enterprise" },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_3000_4",
          type: "action.set_variable",
          position: { x: 200, y: 400 },
          data: {
            label: "Set Lead Type",
            config: { key: "lead_type", value: "smb" },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_3000_5",
          type: "action.set_variable",
          position: { x: 350, y: 400 },
          data: {
            label: "Set Lead Type",
            config: { key: "lead_type", value: "individual" },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_3000_6",
          type: "action.tag_contact",
          position: { x: 200, y: 550 },
          data: {
            label: "Tag as Lead",
            config: { tag: "qualified-lead" },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_3000_7",
          type: "message.compose",
          position: { x: 200, y: 700 },
          data: {
            label: "Thank You Message",
            config: {
              body_text: "Thank you for your interest! Our sales team will contact you within 24 hours with personalized recommendations.",
              header_text: "",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_3000_8",
          type: "control.end",
          position: { x: 200, y: 850 },
          data: {
            label: "End",
            config: { result: "completed" },
            outputs: []
          }
        }
      ],
      edges: [
        { id: "e_4000_1", source: "n_3000_1", target: "n_3000_2", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_4000_2", source: "n_3000_2", target: "n_3000_3", sourceHandle: "btn_enterprise", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_4000_3", source: "n_3000_2", target: "n_3000_4", sourceHandle: "btn_smb", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_4000_4", source: "n_3000_2", target: "n_3000_5", sourceHandle: "btn_individual", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_4000_5", source: "n_3000_3", target: "n_3000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_4000_6", source: "n_3000_4", target: "n_3000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_4000_7", source: "n_3000_5", target: "n_3000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_4000_8", source: "n_3000_6", target: "n_3000_7", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_4000_9", source: "n_3000_7", target: "n_3000_8", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 }
      ],
      variables: {},
      settings: {
        max_hops_per_message: 20,
        fallback_behavior: "legacy_advance_bot",
        timezone: "Asia/Kolkata"
      },
      ui: {
        viewport: { x: 0, y: 0, zoom: 1 }
      }
    }
  },
  {
    id: "sales-002",
    name: "Demo Request Flow",
    category: "sales",
    description: "Collect demo requests with scheduling",
    useCase: "Capture demo requests and schedule appointments",
    complexity: "basic",
    tags: ["demo", "scheduling", "sales"],
    flow: {
      schema_version: "1.0.0",
      flow_uid: "sales-demo-002",
      entry_node_id: "n_4000_1",
      meta: {
        name: "Demo Request Flow",
        description: "Schedule product demos"
      },
      nodes: [
        {
          id: "n_4000_1",
          type: "trigger.inbound_message",
          position: { x: 100, y: 50 },
          data: {
            label: "Inbound Message",
            config: {
              match_mode: "keyword",
              keywords: ["demo", "trial", "test", "try"],
              case_sensitive: false
            },
            outputs: [{ key: "out", label: "Match" }]
          }
        },
        {
          id: "n_4000_2",
          type: "message.compose",
          position: { x: 100, y: 200 },
          data: {
            label: "Demo Options",
            config: {
              body_text: "Book a personalized demo with our team. Choose your preferred time slot:",
              header_text: "Schedule Demo",
              footer_text: "Select time",
              interactive_type: "button",
              buttons: [
                { id: "btn_morning", title: "Morning 10AM" },
                { id: "btn_afternoon", title: "Afternoon 2PM" },
                { id: "btn_evening", title: "Evening 5PM" }
              ],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [
              { key: "btn_morning", label: "Morning" },
              { key: "btn_afternoon", label: "Afternoon" },
              { key: "btn_evening", label: "Evening" }
            ]
          }
        },
        {
          id: "n_4000_3",
          type: "message.compose",
          position: { x: 100, y: 400 },
          data: {
            label: "Confirmation",
            config: {
              body_text: "Your demo has been scheduled! You'll receive a calendar invite shortly. We'll contact you on the provided number.",
              header_text: "Demo Booked!",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_4000_4",
          type: "action.tag_contact",
          position: { x: 100, y: 580 },
          data: {
            label: "Tag Demo Scheduled",
            config: { tag: "demo-scheduled" },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_4000_5",
          type: "control.end",
          position: { x: 100, y: 720 },
          data: {
            label: "End",
            config: { result: "completed" },
            outputs: []
          }
        }
      ],
      edges: [
        { id: "e_5000_1", source: "n_4000_1", target: "n_4000_2", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_5000_2", source: "n_4000_2", target: "n_4000_3", sourceHandle: "btn_morning", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_5000_3", source: "n_4000_2", target: "n_4000_3", sourceHandle: "btn_afternoon", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_5000_4", source: "n_4000_2", target: "n_4000_3", sourceHandle: "btn_evening", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_5000_5", source: "n_4000_3", target: "n_4000_4", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_5000_6", source: "n_4000_4", target: "n_4000_5", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 }
      ],
      variables: {},
      settings: {
        max_hops_per_message: 20,
        fallback_behavior: "legacy_advance_bot",
        timezone: "Asia/Kolkata"
      },
      ui: {
        viewport: { x: 0, y: 0, zoom: 1 }
      }
    }
  },

  // SUPPORT FLOWS
  {
    id: "support-001",
    name: "Support Triage Flow",
    category: "support",
    description: "Route support requests to appropriate teams",
    useCase: "Categorize and route support tickets automatically",
    complexity: "intermediate",
    tags: ["support", "triage", "routing"],
    flow: {
      schema_version: "1.0.0",
      flow_uid: "support-triage-001",
      entry_node_id: "n_5000_1",
      meta: {
        name: "Support Triage Flow",
        description: "Route support requests to teams"
      },
      nodes: [
        {
          id: "n_5000_1",
          type: "trigger.inbound_message",
          position: { x: 100, y: 50 },
          data: {
            label: "Inbound Message",
            config: {
              match_mode: "keyword",
              keywords: ["help", "support", "issue", "problem"],
              case_sensitive: false
            },
            outputs: [{ key: "out", label: "Match" }]
          }
        },
        {
          id: "n_5000_2",
          type: "message.compose",
          position: { x: 100, y: 200 },
          data: {
            label: "Support Category",
            config: {
              body_text: "We're here to help! Please select the type of issue you're facing:",
              header_text: "Support",
              footer_text: "Select category",
              interactive_type: "button",
              buttons: [
                { id: "btn_technical", title: "Technical" },
                { id: "btn_billing", title: "Billing" },
                { id: "btn_account", title: "Account" }
              ],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [
              { key: "btn_technical", label: "Technical" },
              { key: "btn_billing", label: "Billing" },
              { key: "btn_account", label: "Account" }
            ]
          }
        },
        {
          id: "n_5000_3",
          type: "action.set_variable",
          position: { x: 50, y: 400 },
          data: {
            label: "Set Ticket Type",
            config: { key: "ticket_type", value: "technical" },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_5000_4",
          type: "action.set_variable",
          position: { x: 200, y: 400 },
          data: {
            label: "Set Ticket Type",
            config: { key: "ticket_type", value: "billing" },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_5000_5",
          type: "action.set_variable",
          position: { x: 350, y: 400 },
          data: {
            label: "Set Ticket Type",
            config: { key: "ticket_type", value: "account" },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_5000_6",
          type: "message.compose",
          position: { x: 200, y: 580 },
          data: {
            label: "Acknowledge",
            config: {
              body_text: "Your support ticket has been created. Our team will respond within 2 hours. Ticket ID: #TKT{timestamp}",
              header_text: "",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_5000_7",
          type: "control.end",
          position: { x: 200, y: 750 },
          data: {
            label: "End",
            config: { result: "completed" },
            outputs: []
          }
        }
      ],
      edges: [
        { id: "e_6000_1", source: "n_5000_1", target: "n_5000_2", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_6000_2", source: "n_5000_2", target: "n_5000_3", sourceHandle: "btn_technical", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_6000_3", source: "n_5000_2", target: "n_5000_4", sourceHandle: "btn_billing", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_6000_4", source: "n_5000_2", target: "n_5000_5", sourceHandle: "btn_account", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_6000_5", source: "n_5000_3", target: "n_5000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_6000_6", source: "n_5000_4", target: "n_5000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_6000_7", source: "n_5000_5", target: "n_5000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_6000_8", source: "n_5000_6", target: "n_5000_7", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 }
      ],
      variables: {},
      settings: {
        max_hops_per_message: 20,
        fallback_behavior: "legacy_advance_bot",
        timezone: "Asia/Kolkata"
      },
      ui: {
        viewport: { x: 0, y: 0, zoom: 1 }
      }
    }
  },
  {
    id: "support-002",
    name: "FAQ Bot Flow",
    category: "support",
    description: "Answer common questions automatically",
    useCase: "Handle frequently asked questions without agent intervention",
    complexity: "basic",
    tags: ["faq", "self-service", "automation"],
    flow: {
      schema_version: "1.0.0",
      flow_uid: "support-faq-002",
      entry_node_id: "n_6000_1",
      meta: {
        name: "FAQ Bot Flow",
        description: "Automated FAQ responses"
      },
      nodes: [
        {
          id: "n_6000_1",
          type: "trigger.inbound_message",
          position: { x: 100, y: 50 },
          data: {
            label: "Inbound Message",
            config: {
              match_mode: "keyword",
              keywords: ["faq", "question", "how to", "info"],
              case_sensitive: false
            },
            outputs: [{ key: "out", label: "Match" }]
          }
        },
        {
          id: "n_6000_2",
          type: "message.compose",
          position: { x: 100, y: 200 },
          data: {
            label: "FAQ Categories",
            config: {
              body_text: "Here are our most common topics. Select one to learn more:",
              header_text: "FAQ",
              footer_text: "Select topic",
              interactive_type: "button",
              buttons: [
                { id: "btn_pricing", title: "Pricing" },
                { id: "btn_features", title: "Features" },
                { id: "btn_contact", title: "Contact" }
              ],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [
              { key: "btn_pricing", label: "Pricing" },
              { key: "btn_features", label: "Features" },
              { key: "btn_contact", label: "Contact" }
            ]
          }
        },
        {
          id: "n_6000_3",
          type: "message.compose",
          position: { x: 50, y: 400 },
          data: {
            label: "Pricing Info",
            config: {
              body_text: "Our pricing starts at INR 999/month. Visit whats91.com/pricing for detailed plans. All plans include 24/7 support!",
              header_text: "Pricing",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_6000_4",
          type: "message.compose",
          position: { x: 200, y: 400 },
          data: {
            label: "Features Info",
            config: {
              body_text: "Key features: Flow Builder, WhatsApp API, Team Inbox, Analytics, and more! Visit whats91.com/features for details.",
              header_text: "Features",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_6000_5",
          type: "message.compose",
          position: { x: 350, y: 400 },
          data: {
            label: "Contact Info",
            config: {
              body_text: "Contact us at support@whats91.com or call +91-XXXXXXXXXX. Our team is available Mon-Sat, 9 AM - 6 PM IST.",
              header_text: "Contact",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_6000_6",
          type: "control.end",
          position: { x: 200, y: 580 },
          data: {
            label: "End",
            config: { result: "completed" },
            outputs: []
          }
        }
      ],
      edges: [
        { id: "e_7000_1", source: "n_6000_1", target: "n_6000_2", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_7000_2", source: "n_6000_2", target: "n_6000_3", sourceHandle: "btn_pricing", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_7000_3", source: "n_6000_2", target: "n_6000_4", sourceHandle: "btn_features", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_7000_4", source: "n_6000_2", target: "n_6000_5", sourceHandle: "btn_contact", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_7000_5", source: "n_6000_3", target: "n_6000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_7000_6", source: "n_6000_4", target: "n_6000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_7000_7", source: "n_6000_5", target: "n_6000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 }
      ],
      variables: {},
      settings: {
        max_hops_per_message: 20,
        fallback_behavior: "legacy_advance_bot",
        timezone: "Asia/Kolkata"
      },
      ui: {
        viewport: { x: 0, y: 0, zoom: 1 }
      }
    }
  },

  // E-COMMERCE FLOWS
  {
    id: "ecom-001",
    name: "Order Confirmation Flow",
    category: "ecommerce",
    description: "Send order confirmation with details",
    useCase: "Confirm orders with item summary and delivery timeline",
    complexity: "basic",
    tags: ["orders", "confirmation", "ecommerce"],
    flow: {
      schema_version: "1.0.0",
      flow_uid: "ecom-order-001",
      entry_node_id: "n_7000_1",
      meta: {
        name: "Order Confirmation Flow",
        description: "Send order confirmation"
      },
      nodes: [
        {
          id: "n_7000_1",
          type: "trigger.inbound_message",
          position: { x: 100, y: 50 },
          data: {
            label: "Inbound Message",
            config: {
              match_mode: "keyword",
              keywords: ["order", "track", "my order"],
              case_sensitive: false
            },
            outputs: [{ key: "out", label: "Match" }]
          }
        },
        {
          id: "n_7000_2",
          type: "message.compose",
          position: { x: 100, y: 200 },
          data: {
            label: "Order Options",
            config: {
              body_text: "How can we help with your order?",
              header_text: "Order Support",
              footer_text: "Select option",
              interactive_type: "button",
              buttons: [
                { id: "btn_track", title: "Track Order" },
                { id: "btn_cancel", title: "Cancel" },
                { id: "btn_modify", title: "Modify" }
              ],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [
              { key: "btn_track", label: "Track" },
              { key: "btn_cancel", label: "Cancel" },
              { key: "btn_modify", label: "Modify" }
            ]
          }
        },
        {
          id: "n_7000_3",
          type: "message.compose",
          position: { x: 50, y: 400 },
          data: {
            label: "Track Order",
            config: {
              body_text: "Your order #ORD12345 is out for delivery and will arrive by 5 PM today. Track live: bit.ly/track123",
              header_text: "Order Status",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_7000_4",
          type: "message.compose",
          position: { x: 200, y: 400 },
          data: {
            label: "Cancel Info",
            config: {
              body_text: "To cancel your order, please provide your order number. Cancellation is free within 1 hour of placing the order.",
              header_text: "Cancellation",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_7000_5",
          type: "message.compose",
          position: { x: 350, y: 400 },
          data: {
            label: "Modify Info",
            config: {
              body_text: "To modify your order (address/quantity), please share your order number and the changes needed.",
              header_text: "Modification",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_7000_6",
          type: "control.end",
          position: { x: 200, y: 580 },
          data: {
            label: "End",
            config: { result: "completed" },
            outputs: []
          }
        }
      ],
      edges: [
        { id: "e_8000_1", source: "n_7000_1", target: "n_7000_2", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_8000_2", source: "n_7000_2", target: "n_7000_3", sourceHandle: "btn_track", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_8000_3", source: "n_7000_2", target: "n_7000_4", sourceHandle: "btn_cancel", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_8000_4", source: "n_7000_2", target: "n_7000_5", sourceHandle: "btn_modify", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_8000_5", source: "n_7000_3", target: "n_7000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_8000_6", source: "n_7000_4", target: "n_7000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_8000_7", source: "n_7000_5", target: "n_7000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 }
      ],
      variables: {},
      settings: {
        max_hops_per_message: 20,
        fallback_behavior: "legacy_advance_bot",
        timezone: "Asia/Kolkata"
      },
      ui: {
        viewport: { x: 0, y: 0, zoom: 1 }
      }
    }
  },
  {
    id: "ecom-002",
    name: "COD Verification Flow",
    category: "ecommerce",
    description: "Verify Cash on Delivery orders",
    useCase: "Confirm COD orders to reduce returns and fake orders",
    complexity: "intermediate",
    tags: ["cod", "verification", "ecommerce"],
    flow: {
      schema_version: "1.0.0",
      flow_uid: "ecom-cod-002",
      entry_node_id: "n_8000_1",
      meta: {
        name: "COD Verification Flow",
        description: "Verify COD orders"
      },
      nodes: [
        {
          id: "n_8000_1",
          type: "trigger.inbound_message",
          position: { x: 100, y: 50 },
          data: {
            label: "Inbound Message",
            config: {
              match_mode: "keyword",
              keywords: ["cod", "confirm", "verify"],
              case_sensitive: false
            },
            outputs: [{ key: "out", label: "Match" }]
          }
        },
        {
          id: "n_8000_2",
          type: "message.compose",
          position: { x: 100, y: 200 },
          data: {
            label: "COD Confirmation",
            config: {
              body_text: "You have a Cash on Delivery order of INR 1,499. Please confirm to proceed with shipping.",
              header_text: "Order Confirmation",
              footer_text: "Please respond",
              interactive_type: "button",
              buttons: [
                { id: "btn_confirm", title: "Confirm" },
                { id: "btn_cancel", title: "Cancel" }
              ],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [
              { key: "btn_confirm", label: "Confirm" },
              { key: "btn_cancel", label: "Cancel" }
            ]
          }
        },
        {
          id: "n_8000_3",
          type: "message.compose",
          position: { x: 50, y: 400 },
          data: {
            label: "Confirmed",
            config: {
              body_text: "Thank you for confirming! Your order will be shipped within 24 hours. You'll receive tracking details via SMS.",
              header_text: "Confirmed!",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_8000_4",
          type: "message.compose",
          position: { x: 250, y: 400 },
          data: {
            label: "Cancelled",
            config: {
              body_text: "Your order has been cancelled as requested. To place a new order, visit our website.",
              header_text: "Cancelled",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_8000_5",
          type: "action.tag_contact",
          position: { x: 50, y: 580 },
          data: {
            label: "Tag Confirmed",
            config: { tag: "cod-confirmed" },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_8000_6",
          type: "action.tag_contact",
          position: { x: 250, y: 580 },
          data: {
            label: "Tag Cancelled",
            config: { tag: "cod-cancelled" },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_8000_7",
          type: "control.end",
          position: { x: 150, y: 750 },
          data: {
            label: "End",
            config: { result: "completed" },
            outputs: []
          }
        }
      ],
      edges: [
        { id: "e_9000_1", source: "n_8000_1", target: "n_8000_2", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_9000_2", source: "n_8000_2", target: "n_8000_3", sourceHandle: "btn_confirm", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_9000_3", source: "n_8000_2", target: "n_8000_4", sourceHandle: "btn_cancel", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_9000_4", source: "n_8000_3", target: "n_8000_5", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_9000_5", source: "n_8000_4", target: "n_8000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_9000_6", source: "n_8000_5", target: "n_8000_7", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_9000_7", source: "n_8000_6", target: "n_8000_7", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 }
      ],
      variables: {},
      settings: {
        max_hops_per_message: 20,
        fallback_behavior: "legacy_advance_bot",
        timezone: "Asia/Kolkata"
      },
      ui: {
        viewport: { x: 0, y: 0, zoom: 1 }
      }
    }
  },

  // PAYMENT FLOWS
  {
    id: "pay-001",
    name: "Payment Reminder Flow",
    category: "payments",
    description: "Send payment reminders for overdue invoices",
    useCase: "Automated payment reminders with payment link",
    complexity: "basic",
    tags: ["payments", "reminders", "invoices"],
    flow: {
      schema_version: "1.0.0",
      flow_uid: "pay-reminder-001",
      entry_node_id: "n_9000_1",
      meta: {
        name: "Payment Reminder Flow",
        description: "Send payment reminders"
      },
      nodes: [
        {
          id: "n_9000_1",
          type: "trigger.inbound_message",
          position: { x: 100, y: 50 },
          data: {
            label: "Inbound Message",
            config: {
              match_mode: "keyword",
              keywords: ["pay", "payment", "invoice"],
              case_sensitive: false
            },
            outputs: [{ key: "out", label: "Match" }]
          }
        },
        {
          id: "n_9000_2",
          type: "message.compose",
          position: { x: 100, y: 200 },
          data: {
            label: "Payment Options",
            config: {
              body_text: "You have an outstanding balance of INR 5,000. How would you like to proceed?",
              header_text: "Payment Due",
              footer_text: "Select option",
              interactive_type: "button",
              buttons: [
                { id: "btn_pay_now", title: "Pay Now" },
                { id: "btn_details", title: "View Details" },
                { id: "btn_help", title: "Get Help" }
              ],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [
              { key: "btn_pay_now", label: "Pay Now" },
              { key: "btn_details", label: "Details" },
              { key: "btn_help", label: "Help" }
            ]
          }
        },
        {
          id: "n_9000_3",
          type: "message.compose",
          position: { x: 50, y: 400 },
          data: {
            label: "Payment Link",
            config: {
              body_text: "Click here to pay: https://pay.whats91.com/inv123\nAmount: INR 5,000\nInvoice: INV-2024-001\nDue Date: 15 Jan 2024",
              header_text: "Payment Link",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_9000_4",
          type: "message.compose",
          position: { x: 200, y: 400 },
          data: {
            label: "Invoice Details",
            config: {
              body_text: "Invoice: INV-2024-001\nDate: 01 Jan 2024\nItems: 3\nSubtotal: INR 4,500\nGST: INR 500\nTotal: INR 5,000",
              header_text: "Invoice Details",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_9000_5",
          type: "message.compose",
          position: { x: 350, y: 400 },
          data: {
            label: "Help Response",
            config: {
              body_text: "For payment assistance, contact our support team:\nPhone: +91-XXXXXXXXXX\nEmail: billing@whats91.com\nHours: Mon-Sat, 9 AM - 6 PM",
              header_text: "Need Help?",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_9000_6",
          type: "control.end",
          position: { x: 200, y: 580 },
          data: {
            label: "End",
            config: { result: "completed" },
            outputs: []
          }
        }
      ],
      edges: [
        { id: "e_10000_1", source: "n_9000_1", target: "n_9000_2", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_10000_2", source: "n_9000_2", target: "n_9000_3", sourceHandle: "btn_pay_now", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_10000_3", source: "n_9000_2", target: "n_9000_4", sourceHandle: "btn_details", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_10000_4", source: "n_9000_2", target: "n_9000_5", sourceHandle: "btn_help", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_10000_5", source: "n_9000_3", target: "n_9000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_10000_6", source: "n_9000_4", target: "n_9000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_10000_7", source: "n_9000_5", target: "n_9000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 }
      ],
      variables: {},
      settings: {
        max_hops_per_message: 20,
        fallback_behavior: "legacy_advance_bot",
        timezone: "Asia/Kolkata"
      },
      ui: {
        viewport: { x: 0, y: 0, zoom: 1 }
      }
    }
  },
  {
    id: "pay-002",
    name: "Payment Confirmation Flow",
    category: "payments",
    description: "Confirm successful payments",
    useCase: "Send payment receipt and thank you message",
    complexity: "basic",
    tags: ["payments", "receipt", "confirmation"],
    flow: {
      schema_version: "1.0.0",
      flow_uid: "pay-confirm-002",
      entry_node_id: "n_10000_1",
      meta: {
        name: "Payment Confirmation Flow",
        description: "Confirm payment receipt"
      },
      nodes: [
        {
          id: "n_10000_1",
          type: "trigger.inbound_message",
          position: { x: 100, y: 50 },
          data: {
            label: "Inbound Message",
            config: {
              match_mode: "keyword",
              keywords: ["receipt", "paid", "done"],
              case_sensitive: false
            },
            outputs: [{ key: "out", label: "Match" }]
          }
        },
        {
          id: "n_10000_2",
          type: "message.compose",
          position: { x: 100, y: 200 },
          data: {
            label: "Payment Receipt",
            config: {
              body_text: "Payment Received!\nAmount: INR 5,000\nTransaction ID: TXN123456\nDate: 10 Jan 2024, 3:30 PM\nMethod: UPI\n\nThank you for your payment!",
              header_text: "Payment Confirmed",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_10000_3",
          type: "action.tag_contact",
          position: { x: 100, y: 380 },
          data: {
            label: "Tag as Paid",
            config: { tag: "payment-received" },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_10000_4",
          type: "control.end",
          position: { x: 100, y: 520 },
          data: {
            label: "End",
            config: { result: "completed" },
            outputs: []
          }
        }
      ],
      edges: [
        { id: "e_11000_1", source: "n_10000_1", target: "n_10000_2", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_11000_2", source: "n_10000_2", target: "n_10000_3", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_11000_3", source: "n_10000_3", target: "n_10000_4", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 }
      ],
      variables: {},
      settings: {
        max_hops_per_message: 20,
        fallback_behavior: "legacy_advance_bot",
        timezone: "Asia/Kolkata"
      },
      ui: {
        viewport: { x: 0, y: 0, zoom: 1 }
      }
    }
  },

  // BOOKINGS FLOWS
  {
    id: "book-001",
    name: "Appointment Booking Flow",
    category: "bookings",
    description: "Book appointments with time selection",
    useCase: "Allow customers to schedule appointments via WhatsApp",
    complexity: "intermediate",
    tags: ["appointments", "scheduling", "booking"],
    flow: {
      schema_version: "1.0.0",
      flow_uid: "book-appt-001",
      entry_node_id: "n_11000_1",
      meta: {
        name: "Appointment Booking Flow",
        description: "Schedule appointments"
      },
      nodes: [
        {
          id: "n_11000_1",
          type: "trigger.inbound_message",
          position: { x: 100, y: 50 },
          data: {
            label: "Inbound Message",
            config: {
              match_mode: "keyword",
              keywords: ["book", "appointment", "schedule", "meeting"],
              case_sensitive: false
            },
            outputs: [{ key: "out", label: "Match" }]
          }
        },
        {
          id: "n_11000_2",
          type: "message.compose",
          position: { x: 100, y: 200 },
          data: {
            label: "Select Service",
            config: {
              body_text: "What would you like to book?",
              header_text: "Book Appointment",
              footer_text: "Select service",
              interactive_type: "button",
              buttons: [
                { id: "btn_consult", title: "Consultation" },
                { id: "btn_demo", title: "Demo" },
                { id: "btn_support", title: "Support Call" }
              ],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [
              { key: "btn_consult", label: "Consultation" },
              { key: "btn_demo", label: "Demo" },
              { key: "btn_support", label: "Support" }
            ]
          }
        },
        {
          id: "n_11000_3",
          type: "message.compose",
          position: { x: 100, y: 400 },
          data: {
            label: "Select Time",
            config: {
              body_text: "Select your preferred time slot:",
              header_text: "Choose Time",
              footer_text: "Select slot",
              interactive_type: "button",
              buttons: [
                { id: "btn_morning", title: "10:00 AM" },
                { id: "btn_afternoon", title: "2:00 PM" },
                { id: "btn_evening", title: "5:00 PM" }
              ],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [
              { key: "btn_morning", label: "Morning" },
              { key: "btn_afternoon", label: "Afternoon" },
              { key: "btn_evening", label: "Evening" }
            ]
          }
        },
        {
          id: "n_11000_4",
          type: "message.compose",
          position: { x: 100, y: 580 },
          data: {
            label: "Confirmation",
            config: {
              body_text: "Your appointment has been scheduled! You'll receive a reminder 1 hour before. To reschedule, reply with 'RESCHEDULE'.",
              header_text: "Booked!",
              footer_text: "",
              interactive_type: "none",
              buttons: [],
              list_data: null,
              media_url: "",
              media_type: "",
              media_filename: ""
            },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_11000_5",
          type: "action.tag_contact",
          position: { x: 100, y: 750 },
          data: {
            label: "Tag Booked",
            config: { tag: "appointment-booked" },
            outputs: [{ key: "out", label: "Next" }]
          }
        },
        {
          id: "n_11000_6",
          type: "control.end",
          position: { x: 100, y: 900 },
          data: {
            label: "End",
            config: { result: "completed" },
            outputs: []
          }
        }
      ],
      edges: [
        { id: "e_12000_1", source: "n_11000_1", target: "n_11000_2", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_12000_2", source: "n_11000_2", target: "n_11000_3", sourceHandle: "btn_consult", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_12000_3", source: "n_11000_2", target: "n_11000_3", sourceHandle: "btn_demo", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_12000_4", source: "n_11000_2", target: "n_11000_3", sourceHandle: "btn_support", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_12000_5", source: "n_11000_3", target: "n_11000_4", sourceHandle: "btn_morning", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_12000_6", source: "n_11000_3", target: "n_11000_4", sourceHandle: "btn_afternoon", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_12000_7", source: "n_11000_3", target: "n_11000_4", sourceHandle: "btn_evening", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_12000_8", source: "n_11000_4", target: "n_11000_5", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 },
        { id: "e_12000_9", source: "n_11000_5", target: "n_11000_6", sourceHandle: "out", targetHandle: "in", condition: { type: "always" }, priority: 0 }
      ],
      variables: {},
      settings: {
        max_hops_per_message: 20,
        fallback_behavior: "legacy_advance_bot",
        timezone: "Asia/Kolkata"
      },
      ui: {
        viewport: { x: 0, y: 0, zoom: 1 }
      }
    }
  }
];

// Missing Calendar import
const Calendar = Building2;

// Node type icons and colors
const nodeTypeConfig: Record<string, { icon: React.ElementType; color: string; bgColor: string; label: string }> = {
  "trigger.inbound_message": { icon: Zap, color: "text-yellow-600", bgColor: "bg-yellow-50", label: "Trigger" },
  "message.compose": { icon: MessageCircle, color: "text-green-600", bgColor: "bg-green-50", label: "Message" },
  "logic.condition": { icon: ArrowRight, color: "text-purple-600", bgColor: "bg-purple-50", label: "Condition" },
  "action.set_variable": { icon: Settings, color: "text-blue-600", bgColor: "bg-blue-50", label: "Set Var" },
  "action.tag_contact": { icon: Tag, color: "text-indigo-600", bgColor: "bg-indigo-50", label: "Tag" },
  "control.wait": { icon: Pause, color: "text-orange-600", bgColor: "bg-orange-50", label: "Wait" },
  "control.end": { icon: CheckCircle2, color: "text-emerald-600", bgColor: "bg-emerald-50", label: "End" },
};

// Tag icon component
const Tag = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
    <path d="M7 7h.01" />
  </svg>
);

// Complexity badge colors
const complexityColors: Record<string, string> = {
  basic: "bg-green-100 text-green-700 border-green-200",
  intermediate: "bg-amber-100 text-amber-700 border-amber-200",
  advanced: "bg-red-100 text-red-700 border-red-200",
};

// Flow Library Card Component
function FlowLibraryCard({ 
  item, 
  isExpanded, 
  onToggle 
}: { 
  item: FlowLibraryItem; 
  isExpanded: boolean; 
  onToggle: () => void;
}) {
  const category = flowCategories.find(c => c.id === item.category);
  const [copied, setCopied] = useState(false);

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(item.flow, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Count nodes by type
  const nodeCounts = item.flow.nodes.reduce((acc, node) => {
    const type = node.type;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

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
              {category?.name || item.category}
            </Badge>
          </div>
          <Badge className={complexityColors[item.complexity]}>
            {item.complexity}
          </Badge>
        </div>
        <CardTitle className="text-base font-semibold mt-2">{item.name}</CardTitle>
        <CardDescription className="text-xs">{item.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-text-muted">
            <Code className="h-3 w-3" />
            <span>{item.flow.nodes.length} nodes</span>
          </div>
          <div className="flex items-center gap-1.5 text-text-muted">
            <ArrowRight className="h-3 w-3" />
            <span>{item.flow.edges.length} edges</span>
          </div>
          <div className="flex items-center gap-1.5 text-text-muted">
            <Zap className="h-3 w-3" />
            <span>v{item.flow.schema_version}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {item.tags.slice(0, 3).map((tag, idx) => (
            <Badge key={idx} variant="secondary" className="text-[10px]">
              {tag}
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
                <p className="text-xs text-text-secondary">{item.useCase}</p>
              </div>

              {/* Flow Structure */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-text-primary">Flow Structure</p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(nodeCounts).map(([type, count]) => {
                    const config = nodeTypeConfig[type];
                    if (!config) return null;
                    const IconComponent = config.icon;
                    return (
                      <div 
                        key={type}
                        className={`flex items-center gap-2 p-2 rounded-lg ${config.bgColor} border border-border/30`}
                      >
                        <IconComponent className={`h-3.5 w-3.5 ${config.color}`} />
                        <span className="text-xs font-medium text-text-primary">{config.label}</span>
                        <Badge variant="outline" className="text-[10px] ml-auto">{count}</Badge>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Flow UID */}
              <div className="flex items-center gap-2 text-xs">
                <Code className="h-3 w-3 text-brand-primary" />
                <span className="text-text-muted">UID:</span>
                <code className="font-mono text-text-primary bg-surface px-1.5 py-0.5 rounded text-[10px]">
                  {item.flow.flow_uid}
                </code>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2 border-t border-border/50">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 text-xs"
                  onClick={handleCopyJSON}
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
  const [activeCategory, setActiveCategory] = useState("welcome");
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

  const categoryFlows = flowLibrary.filter(f => f.category === activeCategory);
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
                Flow Builder Library
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
                BotMaster Flow
                <span className="text-brand-primary"> Library</span>
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Pre-built chatbot flow templates ready to import. Each flow follows the BotMaster JSON schema 
                for seamless integration with Whats91 Flow Builder.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4 text-blue-500" />
                  <span>JSON Schema v1.0</span>
                </div>
                <div className="flex items-center gap-2">
                  <Copy className="h-4 w-4 text-purple-500" />
                  <span>Copy & Import</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span>Ready to Use</span>
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
                <p className="text-3xl font-bold text-brand-primary">{flowLibrary.length}+</p>
                <p className="text-sm text-text-secondary">Flow Templates</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-primary">{flowCategories.length}</p>
                <p className="text-sm text-text-secondary">Categories</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-primary">v1.0</p>
                <p className="text-sm text-text-secondary">Schema Version</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-primary">24/7</p>
                <p className="text-sm text-text-secondary">Automation Ready</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            {/* Category Navigation */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-text-primary mb-4">Select Category</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
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
                categoryFlows.map((item) => (
                  <FlowLibraryCard
                    key={item.id}
                    item={item}
                    isExpanded={expandedFlows.has(item.id)}
                    onToggle={() => toggleFlow(item.id)}
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

        {/* How to Use */}
        <section className="py-12 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                How to Use Flow Templates
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Each flow template follows the BotMaster JSON schema and can be imported directly into the Flow Builder.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              {[
                {
                  step: 1,
                  title: "Copy JSON",
                  description: "Click 'Copy JSON' on any flow template to copy the complete flow definition to your clipboard.",
                  icon: Copy,
                },
                {
                  step: 2,
                  title: "Import to Builder",
                  description: "In Flow Builder, use 'Import Flow JSON' to paste and load the flow into your workspace.",
                  icon: Code,
                },
                {
                  step: 3,
                  title: "Customize & Deploy",
                  description: "Modify messages, conditions, and actions to match your business needs, then activate.",
                  icon: Play,
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-primary text-white font-bold text-lg mb-4">
                      {item.step}
                    </div>
                    <item.icon className="h-8 w-8 text-brand-primary mb-3" />
                    <h3 className="text-base font-semibold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schema Info */}
        <section className="py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="h-5 w-5 text-brand-primary" />
                  BotMaster Flow JSON Schema
                </CardTitle>
                <CardDescription>
                  All flows follow the v1.0.0 schema with proper node types and Meta WhatsApp API compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { type: "trigger.inbound_message", label: "Trigger Node", desc: "Entry point for flows" },
                    { type: "message.compose", label: "Message Node", desc: "Send WhatsApp messages" },
                    { type: "logic.condition", label: "Condition Node", desc: "Branch logic" },
                    { type: "action.set_variable", label: "Set Variable", desc: "Store data" },
                    { type: "action.tag_contact", label: "Tag Contact", desc: "Label contacts" },
                    { type: "control.wait", label: "Wait Node", desc: "Pause execution" },
                    { type: "control.end", label: "End Node", desc: "Terminate flow" },
                    { type: "edges", label: "Edge Connections", desc: "Link nodes together" },
                  ].map((item) => (
                    <div key={item.type} className="p-3 bg-surface rounded-lg border border-border/30">
                      <p className="text-xs font-mono text-brand-primary mb-1">{item.type}</p>
                      <p className="text-sm font-medium text-text-primary">{item.label}</p>
                      <p className="text-xs text-text-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-primary/10 to-brand-primary/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Ready to Build Your First Flow?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Start with a template or create your own custom flow from scratch using our visual Flow Builder.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-primary/90">
                <Play className="h-4 w-4 mr-2" />
                Open Flow Builder
              </Button>
              <Button size="lg" variant="outline">
                <BookOpen className="h-4 w-4 mr-2" />
                View Documentation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
