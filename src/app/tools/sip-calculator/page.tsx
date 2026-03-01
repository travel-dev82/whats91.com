"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calculator,
  ArrowRight,
  TrendingUp,
  PiggyBank,
  Target,
  DollarSign,
  Calendar,
  BarChart3,
  Sparkles
} from "lucide-react";

export default function SIPCalculatorPage() {
  // SIP Calculator State
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  // Target Calculator State
  const [targetAmount, setTargetAmount] = useState(1000000);
  const [targetReturn, setTargetReturn] = useState(12);
  const [targetTime, setTargetTime] = useState(10);

  // Calculate SIP Results
  const sipResults = useMemo(() => {
    const monthlyRate = expectedReturn / 12 / 100;
    const totalMonths = timePeriod * 12;
    
    // Future Value of SIP formula: P × ({[1 + i]^n – 1} / i) × (1 + i)
    const futureValue = monthlyInvestment * 
      (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * 
      (1 + monthlyRate));
    
    const totalInvestment = monthlyInvestment * totalMonths;
    const totalReturns = futureValue - totalInvestment;

    return {
      futureValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      totalReturns: Math.round(totalReturns),
    };
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  // Calculate Target SIP
  const targetResults = useMemo(() => {
    const monthlyRate = targetReturn / 12 / 100;
    const totalMonths = targetTime * 12;
    
    // Reverse SIP formula: P = FV / (({[1 + i]^n – 1} / i) × (1 + i))
    const factor = ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
    const requiredMonthly = targetAmount / factor;
    
    const totalInvestment = requiredMonthly * totalMonths;
    const totalReturns = targetAmount - totalInvestment;

    return {
      requiredMonthly: Math.round(requiredMonthly),
      totalInvestment: Math.round(totalInvestment),
      totalReturns: Math.round(totalReturns),
    };
  }, [targetAmount, targetReturn, targetTime]);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Format for slider display
  const formatSliderValue = (value: number, type: "currency" | "percent" | "years") => {
    switch (type) {
      case "currency":
        return formatCurrency(value);
      case "percent":
        return `${value}%`;
      case "years":
        return `${value} Years`;
    }
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
                <span className="text-text-primary font-medium">SIP Calculator</span>
              </nav>

              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm font-medium">
                  <Calculator className="h-3.5 w-3.5 mr-1.5 text-brand-primary" />
                  Free Tool
                </Badge>
                <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
                  SIP Calculator
                </h1>
                <p className="text-lg text-text-secondary">
                  Calculate your Systematic Investment Plan returns. Project wealth accumulation 
                  with compound interest over time and plan your financial goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Section */}
        <section className="py-8 sm:py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <Tabs defaultValue="sip" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="sip" className="flex items-center gap-2">
                  <PiggyBank className="h-4 w-4" />
                  SIP Calculator
                </TabsTrigger>
                <TabsTrigger value="target" className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Target Calculator
                </TabsTrigger>
              </TabsList>

              {/* SIP Calculator Tab */}
              <TabsContent value="sip">
                <div className="grid gap-8 lg:grid-cols-3">
                  {/* Input Section */}
                  <div className="lg:col-span-2">
                    <Card className="border-border/60">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Calculator className="h-5 w-5 text-brand-primary" />
                          Calculate SIP Returns
                        </CardTitle>
                        <CardDescription>
                          Enter your monthly investment amount, expected return rate, and time period
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-8">
                        {/* Monthly Investment */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium">Monthly Investment</Label>
                            <Badge variant="secondary">{formatSliderValue(monthlyInvestment, "currency")}</Badge>
                          </div>
                          <Slider
                            value={[monthlyInvestment]}
                            onValueChange={([value]) => setMonthlyInvestment(value)}
                            min={500}
                            max={100000}
                            step={500}
                          />
                          <Input
                            type="number"
                            value={monthlyInvestment}
                            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                            className="max-w-[200px]"
                          />
                        </div>

                        {/* Expected Return */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium">Expected Return Rate (p.a.)</Label>
                            <Badge variant="secondary">{formatSliderValue(expectedReturn, "percent")}</Badge>
                          </div>
                          <Slider
                            value={[expectedReturn]}
                            onValueChange={([value]) => setExpectedReturn(value)}
                            min={1}
                            max={30}
                            step={0.5}
                          />
                          <Input
                            type="number"
                            value={expectedReturn}
                            onChange={(e) => setExpectedReturn(Number(e.target.value))}
                            className="max-w-[200px]"
                          />
                        </div>

                        {/* Time Period */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium">Time Period</Label>
                            <Badge variant="secondary">{formatSliderValue(timePeriod, "years")}</Badge>
                          </div>
                          <Slider
                            value={[timePeriod]}
                            onValueChange={([value]) => setTimePeriod(value)}
                            min={1}
                            max={40}
                            step={1}
                          />
                          <Input
                            type="number"
                            value={timePeriod}
                            onChange={(e) => setTimePeriod(Number(e.target.value))}
                            className="max-w-[200px]"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Results Section */}
                  <div className="space-y-6">
                    <Card className="border-brand-primary/20 bg-gradient-to-br from-brand-primary/5 to-background">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Investment Results</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                          <p className="text-sm text-green-600 dark:text-green-400">Future Value</p>
                          <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                            {formatCurrency(sipResults.futureValue)}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center py-2 border-b border-border/60">
                            <span className="text-sm text-text-secondary flex items-center gap-2">
                              <DollarSign className="h-4 w-4" />
                              Total Investment
                            </span>
                            <span className="font-medium">{formatCurrency(sipResults.totalInvestment)}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-border/60">
                            <span className="text-sm text-text-secondary flex items-center gap-2">
                              <TrendingUp className="h-4 w-4" />
                              Total Returns
                            </span>
                            <span className="font-medium text-green-600">{formatCurrency(sipResults.totalReturns)}</span>
                          </div>
                        </div>

                        {/* Visual Breakdown */}
                        <div className="mt-4">
                          <div className="flex justify-between text-xs text-text-secondary mb-2">
                            <span>Investment</span>
                            <span>Returns</span>
                          </div>
                          <div className="h-4 rounded-full overflow-hidden bg-surface flex">
                            <div 
                              className="bg-brand-primary h-full"
                              style={{ 
                                width: `${(sipResults.totalInvestment / sipResults.futureValue) * 100}%` 
                              }}
                            />
                            <div 
                              className="bg-green-500 h-full"
                              style={{ 
                                width: `${(sipResults.totalReturns / sipResults.futureValue) * 100}%` 
                              }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* CTA */}
                    <Card className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 border-brand-primary/20">
                      <CardContent className="pt-6 text-center">
                        <p className="text-sm text-text-secondary mb-3">
                          Start your investment journey today
                        </p>
                        <Button asChild className="bg-brand-primary hover:bg-brand-primary-hover">
                          <Link href="/contact">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Target Calculator Tab */}
              <TabsContent value="target">
                <div className="grid gap-8 lg:grid-cols-3">
                  {/* Input Section */}
                  <div className="lg:col-span-2">
                    <Card className="border-border/60">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-brand-primary" />
                          Calculate Required Monthly Investment
                        </CardTitle>
                        <CardDescription>
                          Enter your target amount to calculate how much you need to invest monthly
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-8">
                        {/* Target Amount */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium">Target Amount</Label>
                            <Badge variant="secondary">{formatSliderValue(targetAmount, "currency")}</Badge>
                          </div>
                          <Slider
                            value={[targetAmount]}
                            onValueChange={([value]) => setTargetAmount(value)}
                            min={100000}
                            max={100000000}
                            step={100000}
                          />
                          <Input
                            type="number"
                            value={targetAmount}
                            onChange={(e) => setTargetAmount(Number(e.target.value))}
                            className="max-w-[200px]"
                          />
                        </div>

                        {/* Expected Return */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium">Expected Return Rate (p.a.)</Label>
                            <Badge variant="secondary">{formatSliderValue(targetReturn, "percent")}</Badge>
                          </div>
                          <Slider
                            value={[targetReturn]}
                            onValueChange={([value]) => setTargetReturn(value)}
                            min={1}
                            max={30}
                            step={0.5}
                          />
                          <Input
                            type="number"
                            value={targetReturn}
                            onChange={(e) => setTargetReturn(Number(e.target.value))}
                            className="max-w-[200px]"
                          />
                        </div>

                        {/* Time Period */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium">Time Period</Label>
                            <Badge variant="secondary">{formatSliderValue(targetTime, "years")}</Badge>
                          </div>
                          <Slider
                            value={[targetTime]}
                            onValueChange={([value]) => setTargetTime(value)}
                            min={1}
                            max={40}
                            step={1}
                          />
                          <Input
                            type="number"
                            value={targetTime}
                            onChange={(e) => setTargetTime(Number(e.target.value))}
                            className="max-w-[200px]"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Results Section */}
                  <div className="space-y-6">
                    <Card className="border-brand-primary/20 bg-gradient-to-br from-brand-primary/5 to-background">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Required Investment</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
                          <p className="text-sm text-brand-primary">Monthly SIP Required</p>
                          <p className="text-2xl font-bold text-brand-primary">
                            {formatCurrency(targetResults.requiredMonthly)}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center py-2 border-b border-border/60">
                            <span className="text-sm text-text-secondary flex items-center gap-2">
                              <Target className="h-4 w-4" />
                              Target Amount
                            </span>
                            <span className="font-medium">{formatCurrency(targetAmount)}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-border/60">
                            <span className="text-sm text-text-secondary flex items-center gap-2">
                              <DollarSign className="h-4 w-4" />
                              Total Investment
                            </span>
                            <span className="font-medium">{formatCurrency(targetResults.totalInvestment)}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-border/60">
                            <span className="text-sm text-text-secondary flex items-center gap-2">
                              <TrendingUp className="h-4 w-4" />
                              Wealth Gained
                            </span>
                            <span className="font-medium text-green-600">{formatCurrency(targetResults.totalReturns)}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* CTA */}
                    <Card className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 border-brand-primary/20">
                      <CardContent className="pt-6 text-center">
                        <p className="text-sm text-text-secondary mb-3">
                          Need investment advice?
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
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <PiggyBank className="h-8 w-8 text-brand-primary mb-2" />
                  <CardTitle className="text-lg">What is SIP?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    A Systematic Investment Plan (SIP) is an investment strategy where you invest a fixed 
                    amount regularly in mutual funds, helping you build wealth over time through compounding.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-brand-primary mb-2" />
                  <CardTitle className="text-lg">Power of Compounding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    SIP leverages the power of compound interest, where your returns generate additional 
                    returns, accelerating your wealth growth over longer periods.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-brand-primary mb-2" />
                  <CardTitle className="text-lg">Rupee Cost Averaging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    Regular investments through SIP help average out market volatility, buying more units 
                    when prices are low and fewer when prices are high.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
