"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Type,
  ArrowRight,
  Copy,
  Check,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  CaseSensitive,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type CaseType = "upper" | "lower" | "title" | "sentence" | "toggle" | "capitalize";

interface CaseOption {
  type: CaseType;
  label: string;
  description: string;
  icon: React.ElementType;
}

const caseOptions: CaseOption[] = [
  { type: "upper", label: "UPPERCASE", description: "Convert all letters to uppercase", icon: ArrowUpRight },
  { type: "lower", label: "lowercase", description: "Convert all letters to lowercase", icon: ArrowDownRight },
  { type: "title", label: "Title Case", description: "Capitalize first letter of each word", icon: CaseSensitive },
  { type: "sentence", label: "Sentence case", description: "Capitalize first letter of sentences", icon: Type },
  { type: "capitalize", label: "Capitalize Words", description: "Capitalize first letter of each word", icon: Sparkles },
  { type: "toggle", label: "tOGGLE cASE", description: "Swap uppercase and lowercase", icon: RefreshCw },
];

export default function CaseConverterPage() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [activeCase, setActiveCase] = useState<CaseType | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  // Convert text based on case type
  const convertCase = useCallback((caseType: CaseType) => {
    if (!inputText.trim()) {
      toast({
        title: "No Text",
        description: "Please enter some text to convert",
        variant: "destructive",
      });
      return;
    }

    let converted = "";
    switch (caseType) {
      case "upper":
        converted = inputText.toUpperCase();
        break;
      case "lower":
        converted = inputText.toLowerCase();
        break;
      case "title":
        converted = inputText.replace(/\w\S*/g, (txt) => 
          txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        );
        break;
      case "sentence":
        converted = inputText
          .toLowerCase()
          .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        break;
      case "capitalize":
        converted = inputText.replace(/\b\w/g, (c) => c.toUpperCase());
        break;
      case "toggle":
        converted = inputText
          .split("")
          .map((char) => 
            char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
          )
          .join("");
        break;
    }
    
    setOutputText(converted);
    setActiveCase(caseType);
  }, [inputText, toast]);

  // Copy to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Text copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Failed to copy",
        description: "Please copy the text manually",
        variant: "destructive",
      });
    }
  };

  // Clear all
  const clearAll = () => {
    setInputText("");
    setOutputText("");
    setActiveCase(null);
  };

  // Character and word count
  const stats = {
    characters: inputText.length,
    words: inputText.trim() ? inputText.trim().split(/\s+/).length : 0,
    lines: inputText ? inputText.split("\n").length : 0,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-surface to-background py-12 sm:py-16">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="max-w-3xl mx-auto">
              <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
                <Link href="/tools" className="hover:text-brand-primary">Free Tools</Link>
                <ArrowRight className="h-3.5 w-3.5" />
                <span className="text-text-primary font-medium">Case Converter</span>
              </nav>

              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm font-medium">
                  <Type className="h-3.5 w-3.5 mr-1.5 text-brand-primary" />
                  Free Tool
                </Badge>
                <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
                  Case Converter
                </h1>
                <p className="text-lg text-text-secondary">
                  Convert text between UPPERCASE, lowercase, Title Case, Sentence case, and more instantly.
                  Perfect for writers, developers, and content creators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Section */}
        <section className="py-8 sm:py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid gap-8 lg:grid-cols-4">
              {/* Main Tool */}
              <div className="lg:col-span-3 space-y-6">
                <Card className="border-border/60">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Type className="h-5 w-5 text-brand-primary" />
                      Enter Your Text
                    </CardTitle>
                    <CardDescription>
                      Paste or type your text below, then choose a conversion option
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Input Textarea */}
                    <div className="relative">
                      <Textarea
                        placeholder="Enter or paste your text here..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        rows={6}
                        className="resize-none"
                      />
                      <div className="absolute bottom-2 right-2 flex gap-2 text-xs text-text-muted">
                        <span>{stats.characters} chars</span>
                        <span>•</span>
                        <span>{stats.words} words</span>
                        <span>•</span>
                        <span>{stats.lines} lines</span>
                      </div>
                    </div>

                    {/* Case Conversion Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                      {caseOptions.map((option) => (
                        <Button
                          key={option.type}
                          variant={activeCase === option.type ? "default" : "outline"}
                          onClick={() => convertCase(option.type)}
                          className={`h-auto py-3 flex flex-col items-center gap-1 ${
                            activeCase === option.type ? "bg-brand-primary hover:bg-brand-primary-hover" : ""
                          }`}
                        >
                          <option.icon className="h-4 w-4" />
                          <span className="text-xs">{option.label}</span>
                        </Button>
                      ))}
                    </div>

                    {/* Output Textarea */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-text-secondary">Output</Label>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" onClick={clearAll}>
                            <RefreshCw className="mr-1 h-3.5 w-3.5" />
                            Clear
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={copyToClipboard}
                            disabled={!outputText}
                          >
                            {copied ? (
                              <Check className="mr-1 h-3.5 w-3.5 text-green-500" />
                            ) : (
                              <Copy className="mr-1 h-3.5 w-3.5" />
                            )}
                            Copy
                          </Button>
                        </div>
                      </div>
                      <Textarea
                        value={outputText}
                        readOnly
                        placeholder="Converted text will appear here..."
                        rows={6}
                        className="resize-none bg-surface/50"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Conversion Types</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {caseOptions.map((option) => (
                      <div key={option.type} className="text-sm">
                        <p className="font-medium text-text-primary">{option.label}</p>
                        <p className="text-text-muted text-xs">{option.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Stats */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Text Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Characters</span>
                      <Badge variant="secondary">{stats.characters}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Words</span>
                      <Badge variant="secondary">{stats.words}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Lines</span>
                      <Badge variant="secondary">{stats.lines}</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 border-brand-primary/20">
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm text-text-secondary mb-3">
                      Need bulk text processing?
                    </p>
                    <Button asChild className="bg-brand-primary hover:bg-brand-primary-hover">
                      <Link href="/contact">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Import Label component
import { Label } from "@/components/ui/label";
