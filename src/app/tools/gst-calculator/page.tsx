"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Receipt,
  ArrowRight,
  Calculator,
  Percent,
  DollarSign,
  Building,
  MapPin,
  Info
} from "lucide-react";

// GST Rates in India
const gstRates = [
  { value: "0.1", label: "0.1% - Precious stones" },
  { value: "0.25", label: "0.25% - Rough precious stones" },
  { value: "1", label: "1% - Gold, silver" },
  { value: "1.5", label: "1.5% - Jewellery" },
  { value: "3", label: "3% - Gold ornaments" },
  { value: "5", label: "5% - Essential items" },
  { value: "6", label: "6% - Services (CGST+SGST)" },
  { value: "7.5", label: "7.5% - Services (CGST+SGST)" },
  { value: "12", label: "12% - Standard rate" },
  { value: "18", label: "18% - Standard rate" },
  { value: "28", label: "28% - Luxury items" },
];

type GSTType = "exclusive" | "inclusive";
type TransactionType = "intra" | "inter";

export default function GSTCalculatorPage() {
  const [amount, setAmount] = useState<string>("10000");
  const [gstRate, setGstRate] = useState<string>("18");
  const [gstType, setGstType] = useState<GSTType>("exclusive");
  const [transactionType, setTransactionType] = useState<TransactionType>("intra");

  // Calculate GST
  const results = useMemo(() => {
    const baseAmount = parseFloat(amount) || 0;
    const rate = parseFloat(gstRate) || 0;
    
    let originalAmount: number;
    let gstAmount: number;
    let totalAmount: number;
    let cgst: number;
    let sgst: number;
    let igst: number;

    if (gstType === "exclusive") {
      // Amount is before GST
      originalAmount = baseAmount;
      gstAmount = (originalAmount * rate) / 100;
      totalAmount = originalAmount + gstAmount;
    } else {
      // Amount includes GST
      totalAmount = baseAmount;
      originalAmount = (totalAmount * 100) / (100 + rate);
      gstAmount = totalAmount - originalAmount;
    }

    // Split GST based on transaction type
    if (transactionType === "intra") {
      cgst = gstAmount / 2;
      sgst = gstAmount / 2;
      igst = 0;
    } else {
      cgst = 0;
      sgst = 0;
      igst = gstAmount;
    }

    return {
      originalAmount: Math.round(originalAmount * 100) / 100,
      gstAmount: Math.round(gstAmount * 100) / 100,
      totalAmount: Math.round(totalAmount * 100) / 100,
      cgst: Math.round(cgst * 100) / 100,
      sgst: Math.round(sgst * 100) / 100,
      igst: Math.round(igst * 100) / 100,
      rate,
    };
  }, [amount, gstRate, gstType, transactionType]);

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(value);
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
                <span className="text-text-primary font-medium">GST Calculator</span>
              </nav>

              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm font-medium">
                  <Receipt className="h-3.5 w-3.5 mr-1.5 text-brand-primary" />
                  Free Tool
                </Badge>
                <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
                  GST Calculator
                </h1>
                <p className="text-lg text-text-secondary">
                  Calculate GST for goods and services in India. Supports CGST, SGST, IGST with 
                  inclusive and exclusive pricing modes for accurate invoicing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Section */}
        <section className="py-8 sm:py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Input Section */}
              <div className="lg:col-span-2">
                <Card className="border-border/60">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-brand-primary" />
                      Calculate GST
                    </CardTitle>
                    <CardDescription>
                      Enter amount and select GST rate to calculate taxes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Amount Input */}
                    <div className="space-y-2">
                      <Label htmlFor="amount" className="text-sm font-medium">
                        Amount (₹)
                      </Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
                        <Input
                          id="amount"
                          type="number"
                          placeholder="Enter amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="pl-10 text-lg"
                        />
                      </div>
                    </div>

                    {/* GST Rate Selection */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">GST Rate</Label>
                      <Select value={gstRate} onValueChange={setGstRate}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select GST rate" />
                        </SelectTrigger>
                        <SelectContent>
                          {gstRates.map((rate) => (
                            <SelectItem key={rate.value} value={rate.value}>
                              {rate.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* GST Type */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">GST Calculation Type</Label>
                      <RadioGroup
                        value={gstType}
                        onValueChange={(value) => setGstType(value as GSTType)}
                        className="grid grid-cols-2 gap-4"
                      >
                        <div>
                          <RadioGroupItem
                            value="exclusive"
                            id="exclusive"
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="exclusive"
                            className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-transparent p-4 hover:bg-surface cursor-pointer peer-data-[state=checked]:border-brand-primary peer-data-[state=checked]:bg-brand-primary/5"
                          >
                            <Receipt className="mb-2 h-5 w-5" />
                            <span className="font-medium">Add GST</span>
                            <span className="text-xs text-text-muted">Amount + GST</span>
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem
                            value="inclusive"
                            id="inclusive"
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="inclusive"
                            className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-transparent p-4 hover:bg-surface cursor-pointer peer-data-[state=checked]:border-brand-primary peer-data-[state=checked]:bg-brand-primary/5"
                          >
                            <Percent className="mb-2 h-5 w-5" />
                            <span className="font-medium">Include GST</span>
                            <span className="text-xs text-text-muted">Amount includes GST</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Transaction Type */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Transaction Type</Label>
                      <Tabs
                        value={transactionType}
                        onValueChange={(value) => setTransactionType(value as TransactionType)}
                      >
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="intra" className="flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            Intra-state
                          </TabsTrigger>
                          <TabsTrigger value="inter" className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            Inter-state
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="intra" className="mt-2">
                          <p className="text-sm text-text-muted">
                            CGST + SGST applicable for transactions within the same state
                          </p>
                        </TabsContent>
                        <TabsContent value="inter" className="mt-2">
                          <p className="text-sm text-text-muted">
                            IGST applicable for transactions between different states
                          </p>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                <Card className="border-brand-primary/20 bg-gradient-to-br from-brand-primary/5 to-background">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">GST Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Total Amount */}
                    <div className="p-4 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
                      <p className="text-sm text-brand-primary">
                        {gstType === "exclusive" ? "Total Amount (with GST)" : "Total Amount"}
                      </p>
                      <p className="text-2xl font-bold text-brand-primary">
                        {formatCurrency(results.totalAmount)}
                      </p>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-border/60">
                        <span className="text-sm text-text-secondary flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          {gstType === "exclusive" ? "Original Amount" : "Taxable Value"}
                        </span>
                        <span className="font-medium">{formatCurrency(results.originalAmount)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border/60">
                        <span className="text-sm text-text-secondary flex items-center gap-2">
                          <Receipt className="h-4 w-4" />
                          GST ({results.rate}%)
                        </span>
                        <span className="font-medium text-brand-primary">
                          {formatCurrency(results.gstAmount)}
                        </span>
                      </div>

                      {transactionType === "intra" ? (
                        <>
                          <div className="flex justify-between items-center py-1 pl-4">
                            <span className="text-sm text-text-muted">CGST ({results.rate / 2}%)</span>
                            <span className="text-sm">{formatCurrency(results.cgst)}</span>
                          </div>
                          <div className="flex justify-between items-center py-1 pl-4">
                            <span className="text-sm text-text-muted">SGST ({results.rate / 2}%)</span>
                            <span className="text-sm">{formatCurrency(results.sgst)}</span>
                          </div>
                        </>
                      ) : (
                        <div className="flex justify-between items-center py-1 pl-4">
                          <span className="text-sm text-text-muted">IGST ({results.rate}%)</span>
                          <span className="text-sm">{formatCurrency(results.igst)}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Info Card */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Info className="h-4 w-4 text-brand-primary" />
                      GST Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-text-secondary space-y-2">
                    <p><strong>CGST:</strong> Central GST (goes to central government)</p>
                    <p><strong>SGST:</strong> State GST (goes to state government)</p>
                    <p><strong>IGST:</strong> Integrated GST (for inter-state transactions)</p>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 border-brand-primary/20">
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm text-text-secondary mb-3">
                      Need GST-compliant invoicing?
                    </p>
                    <Button asChild className="bg-brand-primary hover:bg-brand-primary-hover">
                      <Link href="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* GST Rates Reference */}
        <section className="py-12 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <h2 className="text-xl font-bold text-text-primary mb-6 text-center">
              Common GST Rates in India
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { rate: "5%", items: "Essential items, edible oils, tea, coffee" },
                { rate: "12%", items: "Computers, processed food, mobile phones" },
                { rate: "18%", items: "Most goods and services, electronics" },
                { rate: "28%", items: "Luxury items, automobiles, tobacco" },
              ].map((item) => (
                <Card key={item.rate}>
                  <CardContent className="pt-6">
                    <Badge variant="secondary" className="mb-2">{item.rate} GST</Badge>
                    <p className="text-sm text-text-secondary">{item.items}</p>
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
