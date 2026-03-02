"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Smartphone,
  Cloud,
  RefreshCw,
  MessageCircle,
  Video,
  Phone,
  Users,
  Zap,
  TrendingUp,
  Shield,
  Check,
  X,
  ArrowRight,
  Building,
  Home,
  ShoppingCart,
  Heart,
  Briefcase,
  Globe,
  Settings,
  Clock,
  AlertTriangle,
  Sparkles,
  DollarSign,
  Target,
  Search
} from "lucide-react";

export default function WhatsAppCoexistencePage() {
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
                <RefreshCw className="h-3.5 w-3.5 mr-1.5 text-brand-primary" />
                Official Meta Feature
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
                WhatsApp Coexistence:
                <span className="text-brand-primary"> The Complete Guide</span>
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Run WhatsApp Business App and Cloud API simultaneously on a single phone number. 
                The hybrid architecture for microbusiness scaling without sacrificing human connection.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-green-500" />
                  <span>Mobile App</span>
                </div>
                <span className="text-text-muted">+</span>
                <div className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-blue-500" />
                  <span>Cloud API</span>
                </div>
                <span className="text-text-muted">=</span>
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-brand-primary" />
                  <span className="font-medium text-brand-primary">Coexistence</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-12 border-b border-border/40">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 text-center">
                The Architectural Dilemma
              </h2>
              <p className="text-text-secondary text-center mb-8">
                Before Coexistence, businesses faced a impossible choice between scalability and personalization.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                      <Smartphone className="h-5 w-5" />
                      WhatsApp Business App Only
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Intuitive mobile interface",
                        "Voice & video calls supported",
                        "Status updates & catalogs",
                        "NO multi-agent support",
                        "NO automation or chatbots",
                        "NO CRM integration",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          {i < 3 ? (
                            <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          ) : (
                            <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                          )}
                          <span className={i >= 3 ? "text-red-600 dark:text-red-400 font-medium" : ""}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                      <Cloud className="h-5 w-5" />
                      Cloud API Only
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Enterprise scalability",
                        "Multi-agent team inboxes",
                        "CRM & automation support",
                        "NO voice or video calls",
                        "NO mobile app access",
                        "Lost chat history on migration",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          {i < 3 ? (
                            <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          ) : (
                            <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                          )}
                          <span className={i >= 3 ? "text-orange-600 dark:text-orange-400 font-medium" : ""}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What is Coexistence */}
        <section className="py-12 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <Badge className="bg-green-500 mb-4">Solution</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                  WhatsApp Coexistence Framework
                </h2>
                <p className="text-text-secondary">
                  An official Meta architecture that allows simultaneous operation of WhatsApp Business App 
                  and Cloud API on a <strong>single phone number</strong>.
                </p>
              </div>
              
              <Card className="border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-900">
                <CardContent className="pt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-text-primary flex items-center gap-2">
                        <Smartphone className="h-5 w-5 text-green-500" />
                        Mobile App Capabilities
                      </h3>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Voice & video calls</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Voice notes & media</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Status updates</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> On-the-go responses</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-text-primary flex items-center gap-2">
                        <Cloud className="h-5 w-5 text-blue-500" />
                        API Capabilities
                      </h3>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Automated chatbots</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> CRM integration</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Broadcast campaigns</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Multi-agent routing</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Mechanics */}
        <section className="py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
                Technical Architecture
              </h2>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <RefreshCw className="h-5 w-5 text-brand-primary" />
                      Bidirectional Sync
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-text-secondary">
                    <p className="mb-3">
                      Messages sent via Cloud API are instantly mirrored to the mobile app. 
                      Manual responses from the app are captured via <code className="text-brand-primary">smb_message_echoes</code> webhooks.
                    </p>
                    <p>
                      This ensures your CRM always has a complete record of all interactions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Zap className="h-5 w-5 text-brand-primary" />
                      Throughput Limits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-text-secondary">
                    <p className="mb-3">
                      <strong className="text-text-primary">Standard API:</strong> 80-100 messages/second
                    </p>
                    <p>
                      <strong className="text-text-primary">Coexistence:</strong> 5 messages/second (throttled for sync stability)
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Throughput Comparison */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Throughput Comparison</CardTitle>
                  <CardDescription>Messages per second capacity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Standard Cloud API</span>
                        <span className="font-medium">80-100 MPS</span>
                      </div>
                      <div className="h-3 bg-surface rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: "100%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Coexistence Mode</span>
                        <span className="font-medium">5 MPS</span>
                      </div>
                      <div className="h-3 bg-surface rounded-full overflow-hidden">
                        <div className="h-full bg-brand-primary rounded-full" style={{ width: "6%" }} />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-text-muted mt-4">
                    * Throttling ensures stable sync between cloud infrastructure and mobile device
                  </p>
                </CardContent>
              </Card>

              {/* Data Migration */}
              <Card>
                <CardHeader>
                  <CardTitle>Data Migration Limits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 bg-surface rounded-lg">
                      <p className="text-sm font-medium text-text-primary mb-1">Chat History</p>
                      <p className="text-2xl font-bold text-brand-primary">6 months</p>
                      <p className="text-xs text-text-muted">of text conversations imported</p>
                    </div>
                    <div className="p-4 bg-surface rounded-lg">
                      <p className="text-sm font-medium text-text-primary mb-1">Media Files</p>
                      <p className="text-2xl font-bold text-brand-primary">14 days</p>
                      <p className="text-xs text-text-muted">older media excluded from sync</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Compatibility Matrix */}
        <section className="py-12 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 text-center">
                Feature Compatibility Matrix
              </h2>
              <p className="text-text-secondary text-center mb-8">
                How WhatsApp features behave under Coexistence mode
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-background">
                      <th className="text-left py-3 px-4 font-medium">Feature</th>
                      <th className="text-center py-3 px-4 font-medium">Mobile App</th>
                      <th className="text-center py-3 px-4 font-medium">Cloud API</th>
                      <th className="text-left py-3 px-4 font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    {[
                      { feature: "1:1 Text & Media", app: "full", api: "full", note: "Bidirectional sync" },
                      { feature: "Voice & Video Calls", app: "full", api: "none", note: "App exclusive" },
                      { feature: "Status Updates", app: "full", api: "none", note: "App exclusive" },
                      { feature: "Group Chats", app: "full", api: "none", note: "Not synced to API" },
                      { feature: "Disappearing Messages", app: "disabled", api: "none", note: "Disabled for compliance" },
                      { feature: "View Once Media", app: "disabled", api: "none", note: "Disabled for compliance" },
                      { feature: "Live Location", app: "disabled", api: "none", note: "Disabled for compliance" },
                      { feature: "Edit/Revoke Messages", app: "disabled", api: "none", note: "Disabled for sync" },
                      { feature: "Broadcast Lists", app: "readonly", api: "templates", note: "API templates only" },
                      { feature: "WhatsApp Pay", app: "disabled", api: "full", note: "Use API integrations" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-border/40 hover:bg-background/50">
                        <td className="py-3 px-4 font-medium text-text-primary">{row.feature}</td>
                        <td className="py-3 px-4 text-center">
                          {row.app === "full" && <Badge className="bg-green-500">Supported</Badge>}
                          {row.app === "readonly" && <Badge variant="outline">Read-only</Badge>}
                          {row.app === "disabled" && <Badge variant="destructive">Disabled</Badge>}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {row.api === "full" && <Badge className="bg-green-500">Supported</Badge>}
                          {row.api === "templates" && <Badge className="bg-blue-500">Templates</Badge>}
                          {row.api === "none" && <Badge variant="outline">Not Available</Badge>}
                        </td>
                        <td className="py-3 px-4 text-xs">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
                Coexistence vs Standard API
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-surface">
                      <th className="text-left py-3 px-4 font-medium">Aspect</th>
                      <th className="text-center py-3 px-4 font-medium">Standard Cloud API</th>
                      <th className="text-center py-3 px-4 font-medium">Coexistence</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-border/40">
                      <td className="py-3 px-4 font-medium text-text-primary">Primary Interface</td>
                      <td className="py-3 px-4 text-center">Desktop CRM only</td>
                      <td className="py-3 px-4 text-center">Mobile App + CRM</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="py-3 px-4 font-medium text-text-primary">Throughput</td>
                      <td className="py-3 px-4 text-center">80-100 MPS</td>
                      <td className="py-3 px-4 text-center">5 MPS</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="py-3 px-4 font-medium text-text-primary">Voice/Video</td>
                      <td className="py-3 px-4 text-center"><X className="h-4 w-4 text-red-500 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="py-3 px-4 font-medium text-text-primary">Manual Messages</td>
                      <td className="py-3 px-4 text-center">All paid</td>
                      <td className="py-3 px-4 text-center">Free via app</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="py-3 px-4 font-medium text-text-primary">Best For</td>
                      <td className="py-3 px-4 text-center">Enterprises, 100% automation</td>
                      <td className="py-3 px-4 text-center">SMBs, hybrid workflows</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
              Strategic Benefits for Microbusinesses
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="p-3 rounded-full bg-brand-primary/10 w-fit mb-3">
                    <Users className="h-6 w-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg">Hybrid Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    Automate lead qualification with chatbots, then seamlessly handoff to human agents 
                    for voice calls and personalized follow-ups.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-3 rounded-full bg-brand-primary/10 w-fit mb-3">
                    <DollarSign className="h-6 w-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg">Cost Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    Pay only for API template messages. All manual responses from the mobile app 
                    remain completely free of charge.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-3 rounded-full bg-brand-primary/10 w-fit mb-3">
                    <Target className="h-6 w-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg">Lower CAC</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    Click-to-WhatsApp ads get 72-hour free messaging window. Capture leads instantly 
                    with API, close with mobile follow-ups.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industry Blueprints */}
        <section className="py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
              Industry Use Cases
            </h2>

            <Tabs defaultValue="realestate" className="w-full">
              <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="realestate" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Real Estate
                </TabsTrigger>
                <TabsTrigger value="retail" className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Retail
                </TabsTrigger>
                <TabsTrigger value="consulting" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Consulting
                </TabsTrigger>
              </TabsList>

              <TabsContent value="realestate">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                          <Zap className="h-5 w-5 text-blue-500" />
                          Automated Layer (API)
                        </h3>
                        <ul className="space-y-2 text-sm text-text-secondary">
                          <li>• Capture leads from Facebook/Instagram ads</li>
                          <li>• Send property brochures automatically</li>
                          <li>• Collect budget & location preferences</li>
                          <li>• Schedule site visits in CRM calendar</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                          <Phone className="h-5 w-5 text-green-500" />
                          Human Layer (Mobile)
                        </h3>
                        <ul className="space-y-2 text-sm text-text-secondary">
                          <li>• Personalized voice notes for inquiries</li>
                          <li>• Video calls for overseas buyers</li>
                          <li>• Share live property walkthroughs</li>
                          <li>• Negotiate deals with voice calls</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="retail">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                          <Zap className="h-5 w-5 text-blue-500" />
                          Automated Layer (API)
                        </h3>
                        <ul className="space-y-2 text-sm text-text-secondary">
                          <li>• Order confirmations & shipping updates</li>
                          <li>• Abandoned cart recovery (45-60% recovery)</li>
                          <li>• Payment reminders & receipts</li>
                          <li>• Inventory alerts integration</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                          <Phone className="h-5 w-5 text-green-500" />
                          Human Layer (Mobile)
                        </h3>
                        <ul className="space-y-2 text-sm text-text-secondary">
                          <li>• Handle damaged product complaints</li>
                          <li>• Send product photos on request</li>
                          <li>• Process refunds & exchanges</li>
                          <li>• Build customer relationships</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="consulting">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                          <Zap className="h-5 w-5 text-blue-500" />
                          Automated Layer (API)
                        </h3>
                        <ul className="space-y-2 text-sm text-text-secondary">
                          <li>• Send intake forms & documents</li>
                          <li>• Appointment scheduling</li>
                          <li>• Payment link delivery</li>
                          <li>• Reminder sequences</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                          <Phone className="h-5 w-5 text-green-500" />
                          Human Layer (Mobile)
                        </h3>
                        <ul className="space-y-2 text-sm text-text-secondary">
                          <li>• Detailed legal/medical advice</li>
                          <li>• Complex tax consultations</li>
                          <li>• Secure document discussion</li>
                          <li>• Post-consultation follow-ups</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Implementation Requirements */}
        <section className="py-12 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
                Implementation Requirements
              </h2>

              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-text-primary">App Version 2.24.17+</h3>
                        <p className="text-sm text-text-secondary">WhatsApp Business App must be updated to latest version with camera for QR handshake</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-text-primary">7-Day Warm-up Period</h3>
                        <p className="text-sm text-text-secondary">Phone number must have active usage history for 7+ days before integration</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-text-primary">Meta Business Verification</h3>
                        <p className="text-sm text-text-secondary">Business portfolio must be verified with matching display name</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-text-primary">14-Day Connection Maintenance</h3>
                        <p className="text-sm text-text-secondary">Primary phone must be opened at least once every 14 days to maintain connection</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Availability */}
        <section className="py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
                Regional Availability
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                      <Check className="h-5 w-5" />
                      Supported Regions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["India", "United States", "Brazil", "Indonesia", "Mexico", "UAE", "Saudi Arabia"].map((country) => (
                        <Badge key={country} variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                      <X className="h-5 w-5" />
                      Unsupported Regions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["EU/EEA", "UK", "Australia", "Japan", "Russia", "South Korea", "Turkey"].map((country) => (
                        <Badge key={country} variant="secondary" className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Benefits */}
        <section className="py-12 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 text-center">
                SEO & Local Discovery Benefits
              </h2>
              <p className="text-text-secondary text-center mb-8">
                Coexistence creates a zero-friction conversion pathway that search algorithms favor
              </p>

              <div className="grid gap-4 sm:grid-cols-3 mb-8">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <p className="text-3xl font-bold text-brand-primary">46%</p>
                    <p className="text-sm text-text-secondary">of searches have local intent</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <p className="text-3xl font-bold text-brand-primary">76%</p>
                    <p className="text-sm text-text-secondary">visit within 24 hours</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <p className="text-3xl font-bold text-brand-primary">70%</p>
                    <p className="text-sm text-text-secondary">searches are 3+ words</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-text-primary mb-3">How It Works</h3>
                  <ol className="space-y-3 text-sm text-text-secondary">
                    <li className="flex gap-3">
                      <span className="flex items-center justify-center h-6 w-6 rounded-full bg-brand-primary text-white text-xs font-medium shrink-0">1</span>
                      <span>Customer searches locally and clicks WhatsApp CTA on Google Business Profile</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex items-center justify-center h-6 w-6 rounded-full bg-brand-primary text-white text-xs font-medium shrink-0">2</span>
                      <span>API bot responds instantly, satisfying immediate engagement metrics</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex items-center justify-center h-6 w-6 rounded-full bg-brand-primary text-white text-xs font-medium shrink-0">3</span>
                      <span>Business owner receives context on mobile and can answer specific local queries</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex items-center justify-center h-6 w-6 rounded-full bg-brand-primary text-white text-xs font-medium shrink-0">4</span>
                      <span>Low bounce rates + high conversions signal quality to search algorithms</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "Can I use Coexistence with an existing API number?",
                    a: "No, you cannot directly migrate from standalone API to Coexistence. You must delete the number from Meta WhatsApp Manager, reinstall the Business App, complete a 7-day warm-up, then initiate Coexistence onboarding.",
                  },
                  {
                    q: "Why is MM Lite API incompatible with Coexistence?",
                    a: "MM Lite is optimized for high-speed bulk marketing by stripping away synchronization overhead. Coexistence requires heavy bidirectional sync for webhook events, making the two architectures fundamentally incompatible on the same number.",
                  },
                  {
                    q: "Can I get the Official Business Account (Green Tick) with Coexistence?",
                    a: "Currently, the Green Tick is not natively supported for Coexistence accounts. You can use Partner-Led Business Verification or Meta Verified for Business program as alternatives.",
                  },
                  {
                    q: "What happens if I don't open my phone for 14 days?",
                    a: "The Coexistence connection expires automatically. API workflows, chatbots, and CRM routing will halt until you manually re-authenticate via the mobile app.",
                  },
                  {
                    q: "Are messages sent from the mobile app free?",
                    a: "Yes! All manual messages sent directly from the WhatsApp Business App remain free, even when connected to the API. Only API template messages are charged.",
                  },
                  {
                    q: "Why are disappearing messages and View Once disabled?",
                    a: "These features are disabled because the API requires persistent, auditable communication records for CRM logging and compliance. Ephemeral content would break the webhook synchronization.",
                  },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-text-secondary">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-primary to-brand-primary-hover">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Implement Coexistence?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our team can help you set up the hybrid architecture that preserves human connection 
              while enabling enterprise automation.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-white text-brand-primary hover:bg-white/90">
              <Link href="/contact">
                Get Started
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
