"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  ArrowRight,
  Globe,
  Check,
  X,
  AlertTriangle,
  Zap,
  FileText,
  Image,
  Code,
  Smartphone,
  ExternalLink,
  Loader2,
  Shield,
  Link2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  FileText,
  Image,
  Code,
  Smartphone,
  Globe,
  Shield,
  Link2,
  Zap,
};

interface SEOCheck {
  id: string;
  name: string;
  description: string;
  status: "pass" | "warning" | "fail";
  score: number;
  details: string;
  icon: string;
}

interface SEOResult {
  url: string;
  overallScore: number;
  checks: SEOCheck[];
  recommendations: string[];
  loadTime: string;
}

export default function SEOCheckerPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SEOResult | null>(null);
  const { toast } = useToast();

  // Check SEO
  const checkSEO = useCallback(async () => {
    if (!url) {
      toast({
        title: "URL Required",
        description: "Please enter a website URL to analyze",
        variant: "destructive",
      });
      return;
    }

    // Ensure URL has protocol
    let checkUrl = url;
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      checkUrl = "https://" + url;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch("/api/seo-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: checkUrl }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze website");
      }

      const data = await response.json();
      setResult(data);
    } catch {
      toast({
        title: "Analysis Failed",
        description: "Could not analyze the website. Please check the URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [url, toast]);

  // Get score color
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  // Get status icon
  const getStatusIcon = (status: SEOCheck["status"]) => {
    switch (status) {
      case "pass":
        return <Check className="h-4 w-4 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "fail":
        return <X className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  // Get icon component
  const getIconComponent = (iconName: string) => {
    return iconMap[iconName] || Globe;
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
                <span className="text-text-primary font-medium">SEO Score Checker</span>
              </nav>

              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm font-medium">
                  <Search className="h-3.5 w-3.5 mr-1.5 text-brand-primary" />
                  Free Tool
                </Badge>
                <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
                  SEO Score Checker
                </h1>
                <p className="text-lg text-text-secondary">
                  Analyze your website&apos;s SEO health. Get instant recommendations for improving 
                  search engine rankings and technical performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Section */}
        <section className="py-8 sm:py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="max-w-3xl mx-auto">
              {/* URL Input */}
              <Card className="border-border/60 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-brand-primary" />
                    Analyze Your Website
                  </CardTitle>
                  <CardDescription>
                    Enter your website URL to get a comprehensive SEO analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
                      <Input
                        type="url"
                        placeholder="example.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && checkSEO()}
                        className="pl-10"
                      />
                    </div>
                    <Button
                      onClick={checkSEO}
                      disabled={isLoading}
                      className="bg-brand-primary hover:bg-brand-primary-hover"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Search className="mr-2 h-4 w-4" />
                          Analyze
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              {result && (
                <div className="space-y-6">
                  {/* Overall Score */}
                  <Card className="border-brand-primary/20 bg-gradient-to-br from-brand-primary/5 to-background">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-text-secondary">Overall SEO Score</p>
                          <p className={`text-4xl font-bold ${getScoreColor(result.overallScore)}`}>
                            {result.overallScore}/100
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-text-muted">Analyzed URL</p>
                          <a
                            href={result.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-brand-primary hover:underline flex items-center gap-1"
                          >
                            {result.url}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                          <p className="text-xs text-text-muted mt-1">
                            Load time: {result.loadTime}
                          </p>
                        </div>
                      </div>
                      <Progress value={result.overallScore} className="h-3" />
                    </CardContent>
                  </Card>

                  {/* Detailed Checks */}
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-4">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="pass">Passed</TabsTrigger>
                      <TabsTrigger value="warning">Warnings</TabsTrigger>
                      <TabsTrigger value="fail">Failed</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="space-y-3">
                      {result.checks.map((check) => {
                        const IconComponent = getIconComponent(check.icon);
                        return (
                          <Card key={check.id}>
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-3">
                                <div className={`p-2 rounded-lg ${
                                  check.status === "pass" ? "bg-green-100" :
                                  check.status === "warning" ? "bg-yellow-100" : "bg-red-100"
                                }`}>
                                  <IconComponent className={`h-4 w-4 ${
                                    check.status === "pass" ? "text-green-600" :
                                    check.status === "warning" ? "text-yellow-600" : "text-red-600"
                                  }`} />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <h3 className="font-medium text-text-primary flex items-center gap-2">
                                      {check.name}
                                      {getStatusIcon(check.status)}
                                    </h3>
                                    <Badge variant={
                                      check.status === "pass" ? "default" :
                                      check.status === "warning" ? "secondary" : "destructive"
                                    }>
                                      {check.score}%
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-text-secondary mt-1">{check.description}</p>
                                  <p className="text-sm text-text-muted mt-1">{check.details}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </TabsContent>

                    <TabsContent value="pass" className="space-y-3">
                      {result.checks.filter(c => c.status === "pass").map((check) => (
                        <Card key={check.id}>
                          <CardContent className="pt-4">
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-500" />
                              <span className="font-medium">{check.name}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>

                    <TabsContent value="warning" className="space-y-3">
                      {result.checks.filter(c => c.status === "warning").map((check) => (
                        <Card key={check.id}>
                          <CardContent className="pt-4">
                            <div className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              <span className="font-medium">{check.name}</span>
                            </div>
                            <p className="text-sm text-text-secondary mt-1">{check.details}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>

                    <TabsContent value="fail" className="space-y-3">
                      {result.checks.filter(c => c.status === "fail").map((check) => (
                        <Card key={check.id} className="border-red-200">
                          <CardContent className="pt-4">
                            <div className="flex items-center gap-2 text-red-600">
                              <X className="h-4 w-4" />
                              <span className="font-medium">{check.name}</span>
                            </div>
                            <p className="text-sm text-text-secondary mt-1">{check.details}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>
                  </Tabs>

                  {/* Recommendations */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Zap className="h-4 w-4 text-brand-primary" />
                        Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {result.recommendations.map((rec, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                            <ArrowRight className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <Card className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 border-brand-primary/20">
                    <CardContent className="pt-6 text-center">
                      <p className="text-lg font-medium text-text-primary mb-2">
                        Need Help Improving Your SEO?
                      </p>
                      <p className="text-sm text-text-secondary mb-4">
                        Our team can help optimize your website for better search rankings
                      </p>
                      <Button asChild className="bg-brand-primary hover:bg-brand-primary-hover">
                        <Link href="/contact">
                          Get Expert Help
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <h2 className="text-xl font-bold text-text-primary mb-6 text-center">
              What We Check
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: FileText, title: "Meta Tags", desc: "Title, description, keywords" },
                { icon: Image, title: "Images", desc: "Alt text, size optimization" },
                { icon: Code, title: "Technical", desc: "HTML structure, schema" },
                { icon: Smartphone, title: "Mobile", desc: "Responsive design check" },
              ].map((item) => (
                <Card key={item.title}>
                  <CardContent className="pt-6 text-center">
                    <item.icon className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
