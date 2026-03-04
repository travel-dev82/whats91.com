"use client";

import { useState } from "react";
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
  Package,
  DollarSign,
  Copy,
  Check,
  Code,
  Sparkles,
  ShoppingCart,
  Calendar,
  Tag as TagIcon,
  BookOpen,
} from "lucide-react";
import {
  flowCategories,
  flowRegistry,
  getFlowsByCategory,
  getCategoryById,
  type FlowMetadata,
} from "@/lib/flows/registry";

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  ShoppingCart,
  MessageCircle,
  Package,
  DollarSign,
  Calendar,
};

// Node type icons and colors
const nodeTypeConfig: Record<string, { icon: React.ElementType; color: string; bgColor: string; label: string }> = {
  "trigger.inbound_message": { icon: Zap, color: "text-yellow-600", bgColor: "bg-yellow-50", label: "Trigger" },
  "message.compose": { icon: MessageCircle, color: "text-green-600", bgColor: "bg-green-50", label: "Message" },
  "logic.condition": { icon: ArrowRight, color: "text-purple-600", bgColor: "bg-purple-50", label: "Condition" },
  "action.set_variable": { icon: Settings, color: "text-blue-600", bgColor: "bg-blue-50", label: "Set Var" },
  "action.tag_contact": { icon: TagIcon, color: "text-indigo-600", bgColor: "bg-indigo-50", label: "Tag" },
  "control.wait": { icon: Pause, color: "text-orange-600", bgColor: "bg-orange-50", label: "Wait" },
  "control.end": { icon: CheckCircle2, color: "text-emerald-600", bgColor: "bg-emerald-50", label: "End" },
};

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
  onToggle,
}: {
  item: FlowMetadata;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const category = getCategoryById(item.category);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyJSON = async () => {
    setLoading(true);
    try {
      // Fetch the flow JSON from API
      const response = await fetch(`/api/flows/${item.id}`);
      if (!response.ok) throw new Error("Failed to fetch flow");
      
      const flowData = await response.json();
      await navigator.clipboard.writeText(JSON.stringify(flowData, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error copying flow:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {category && (
              <div className={`p-1.5 rounded-lg ${category.bgColor}`}>
                {(() => {
                  const IconComponent = iconMap[category.icon] || Bot;
                  return <IconComponent className={`h-4 w-4 ${category.color}`} />;
                })()}
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
                  Hide Details
                </>
              ) : (
                <>
                  <ChevronRight className="h-3 w-3 mr-1" />
                  View Details
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

              {/* Flow ID */}
              <div className="flex items-center gap-2 text-xs">
                <Code className="h-3 w-3 text-brand-primary" />
                <span className="text-text-muted">ID:</span>
                <code className="font-mono text-text-primary bg-surface px-1.5 py-0.5 rounded text-[10px]">
                  {item.id}
                </code>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2 border-t border-border/50">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 text-xs"
                  onClick={handleCopyJSON}
                  disabled={loading}
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      Copied!
                    </>
                  ) : loading ? (
                    <>
                      <span className="h-3 w-3 mr-1 animate-spin">⏳</span>
                      Loading...
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
    setExpandedFlows((prev) => {
      const next = new Set(prev);
      if (next.has(flowId)) {
        next.delete(flowId);
      } else {
        next.add(flowId);
      }
      return next;
    });
  };

  const categoryFlows = getFlowsByCategory(activeCategory);
  const activeCategoryData = getCategoryById(activeCategory);

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
                <p className="text-3xl font-bold text-brand-primary">{flowRegistry.length}+</p>
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
                {flowCategories.map((category) => {
                  const IconComponent = iconMap[category.icon] || Bot;
                  return (
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
                        <IconComponent className={`h-5 w-5 ${category.color}`} />
                      </div>
                      <span
                        className={`text-xs font-medium text-center ${
                          activeCategory === category.id ? "text-brand-primary" : "text-text-secondary"
                        }`}
                      >
                        {category.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category Description */}
            {activeCategoryData && (
              <div className="mb-6 p-4 rounded-xl bg-surface/50 border border-border/40">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${activeCategoryData.bgColor}`}>
                    {(() => {
                      const IconComponent = iconMap[activeCategoryData.icon] || Bot;
                      return <IconComponent className={`h-5 w-5 ${activeCategoryData.color}`} />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary">
                      {activeCategoryData.name} Flows
                    </h3>
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
                Each flow template follows the BotMaster JSON schema and can be imported directly into the
                Flow Builder.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              {[
                {
                  step: 1,
                  title: "Copy JSON",
                  description:
                    "Click 'Copy JSON' on any flow template to copy the complete flow definition to your clipboard.",
                  icon: Copy,
                },
                {
                  step: 2,
                  title: "Import to Builder",
                  description:
                    "In Flow Builder, use 'Import Flow JSON' to paste and load the flow into your workspace.",
                  icon: Code,
                },
                {
                  step: 3,
                  title: "Customize & Deploy",
                  description:
                    "Modify messages, conditions, and actions to match your business needs, then activate.",
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
                  ].map((item) => {
                    const config = nodeTypeConfig[item.type];
                    return (
                      <div key={item.type} className="p-3 bg-surface rounded-lg border border-border/30">
                        <p className="text-xs font-mono text-brand-primary mb-1">{item.type}</p>
                        <p className="text-sm font-medium text-text-primary">{item.label}</p>
                        <p className="text-xs text-text-muted">{item.desc}</p>
                      </div>
                    );
                  })}
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
              Start with a template or create your own custom flow from scratch using our visual Flow
              Builder.
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
