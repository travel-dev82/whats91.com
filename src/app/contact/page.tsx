"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Building2,
  Headphones,
  Code2,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    description: "Mon-Fri, 9am-6pm IST",
    details: [
      { label: "Sales", value: "+91 96698 23388", href: "tel:+919669823388" },
      { label: "Support", value: "+91 93028 19026", href: "tel:+919302819026" },
      { label: "Technical", value: "+91 70007 82082", href: "tel:+917000782082" },
    ],
  },
  {
    icon: Mail,
    title: "Email",
    description: "We'll respond within 24 hours",
    details: [
      { label: "General", value: "hello@whats91.com", href: "mailto:hello@whats91.com" },
      { label: "Support", value: "support@whats91.com", href: "mailto:support@whats91.com" },
    ],
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Visit our headquarters",
    details: [
      { label: "", value: "131, C21 Mall", href: null },
      { label: "", value: "Ujjain, Madhya Pradesh", href: null },
      { label: "", value: "India, 456010", href: null },
    ],
  },
];

const departments = [
  {
    icon: Building2,
    title: "Sales",
    description: "Get a custom quote for your enterprise needs",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Technical help and account assistance",
  },
  {
    icon: Code2,
    title: "Developers",
    description: "API integration and webhook support",
  },
];

const subjectOptions = [
  "General Inquiry",
  "Sales & Pricing",
  "Technical Support",
  "API Integration",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        (event.target as HTMLFormElement).reset();
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
          <div className="absolute inset-0 gradient-brand-subtle pointer-events-none" />
          
          <div className="relative px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary-light border border-brand-primary/15 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-brand-primary mb-5 sm:mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary" />
                </span>
                We&apos;d love to hear from you
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4 sm:mb-5">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
                Have a question about our WhatsApp Cloud API platform? Need help with integration? 
                Our team is ready to assist you.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-8 lg:grid-cols-5 items-start">
              
              {/* Contact Form */}
              <div className="lg:col-span-3 order-2 lg:order-1">
                <Card className="border-border/60 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-brand-primary" />
                      Send us a message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {isSuccess ? (
                      <div className="text-center py-8 sm:py-10">
                        <div className="flex justify-center mb-4">
                          <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
                            <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-brand-primary" />
                          </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-text-secondary mb-6 text-sm sm:text-base">
                          Thank you for reaching out. Our team will get back to you shortly.
                        </p>
                        <Button
                          onClick={() => setIsSuccess(false)}
                          variant="outline"
                          className="border-border hover:bg-surface"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium text-text-primary">
                              Full Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              required
                              className="h-11 border-border focus:border-brand-primary focus:ring-brand-primary/20"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-text-primary">
                              Email Address <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@company.com"
                              required
                              className="h-11 border-border focus:border-brand-primary focus:ring-brand-primary/20"
                            />
                          </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium text-text-primary">
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+91 98765 43210"
                              className="h-11 border-border focus:border-brand-primary focus:ring-brand-primary/20"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-sm font-medium text-text-primary">
                              Company Name
                            </Label>
                            <Input
                              id="company"
                              name="company"
                              placeholder="Acme Inc."
                              className="h-11 border-border focus:border-brand-primary focus:ring-brand-primary/20"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-sm font-medium text-text-primary">
                            Subject <span className="text-destructive">*</span>
                          </Label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            className="flex h-11 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-text-primary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors"
                          >
                            <option value="">Select a subject</option>
                            {subjectOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm font-medium text-text-primary">
                            Message <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us how we can help you..."
                            required
                            rows={5}
                            className="border-border focus:border-brand-primary focus:ring-brand-primary/20 resize-none"
                          />
                        </div>

                        {error && (
                          <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                            <p className="text-sm text-destructive">{error}</p>
                          </div>
                        )}

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-11 sm:h-12 bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover font-semibold rounded-xl shadow-lg shadow-brand-primary/25 transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 order-1 lg:order-2 space-y-4 sm:space-y-5">
                {contactInfo.map((item) => (
                  <Card key={item.title} className="border-border/60 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-brand-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-text-muted mb-3">{item.description}</p>
                          <div className="space-y-1.5">
                            {item.details.map((detail, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                {detail.label && (
                                  <span className="text-text-muted shrink-0">{detail.label}:</span>
                                )}
                                {detail.href ? (
                                  <a
                                    href={detail.href}
                                    className="text-text-secondary hover:text-brand-primary transition-colors"
                                  >
                                    {detail.value}
                                  </a>
                                ) : (
                                  <span className="text-text-secondary">{detail.value}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Business Hours Card */}
                <Card className="border-border/60 shadow-md bg-surface/50">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-5 w-5 text-brand-primary" />
                      <h3 className="font-semibold text-text-primary">Business Hours</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-muted">Monday - Friday</span>
                        <span className="text-text-secondary font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted">Saturday</span>
                        <span className="text-text-secondary font-medium">10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted">Sunday</span>
                        <span className="text-text-muted">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-12 sm:py-16 bg-surface/30 border-t border-border/60">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
                How can we help?
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                Choose the right department to get faster assistance for your needs.
              </p>
            </div>

            <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => (
                <Card
                  key={dept.title}
                  className="border-border/60 shadow-md hover:shadow-lg hover:border-brand-primary/20 transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="h-12 w-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/15 transition-colors">
                      <dept.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">{dept.title}</h3>
                    <p className="text-sm text-text-secondary">{dept.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent p-7 sm:p-8 md:p-12 shadow-xl">
              {/* Background Decorations */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-1/2 -left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  Ready to get started?
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-6">
                  Join 500+ enterprises using Whats91 for their WhatsApp Cloud API needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    size="lg"
                    className="h-11 sm:h-12 px-6 sm:px-8 font-semibold bg-white text-brand-primary hover:bg-white/95 rounded-xl shadow-lg"
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-11 sm:h-12 px-6 sm:px-8 font-semibold bg-transparent border-white/30 text-white hover:bg-white/10 rounded-xl"
                  >
                    View Documentation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
