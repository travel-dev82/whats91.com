import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Get in Touch - Whats91",
  description: "Contact us for sales, support, or technical assistance.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20 max-w-[1200px]">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">GET IN TOUCH</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Have a question or need help with your project? We&apos;re here to assist you. Reach out to us using any of the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone Section */}
          <Card className="border-border/60 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-2 items-center">
              <div className="bg-brand-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-brand-primary">
                <Phone className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl font-semibold">Phone</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-2 justify-center">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri, 9am-6pm</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6 pt-4">
              <div className="space-y-1">
                <p className="font-semibold text-foreground">Sales:</p>
                <a href="tel:+919669823388" className="block text-muted-foreground hover:text-brand-primary transition-colors">
                  +91 96698 23388
                </a>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-foreground">Support:</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919302819026" className="text-muted-foreground hover:text-brand-primary transition-colors">
                    +91 93028 19026
                  </a>
                  <a href="tel:+918305835928" className="text-muted-foreground hover:text-brand-primary transition-colors">
                    +91 83058 35928
                  </a>
                  <a href="tel:+917828830072" className="text-muted-foreground hover:text-brand-primary transition-colors">
                    +91 78288 30072
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-foreground">Technical Support:</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:+917000782082" className="text-muted-foreground hover:text-brand-primary transition-colors">
                    +91 70007 82082
                  </a>
                  <a href="tel:+919425008429" className="text-muted-foreground hover:text-brand-primary transition-colors">
                    +91 94250 08429
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Section */}
          <Card className="border-border/60 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-2 items-center">
              <div className="bg-brand-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-brand-primary">
                <Mail className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl font-semibold">Email</CardTitle>
              <CardDescription className="mt-2 justify-center">
                We&apos;ll respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4 pt-6">
              <div className="flex flex-col gap-3">
                <a href="mailto:wilfordtechnology@gmail.com" className="text-foreground hover:text-brand-primary transition-colors font-medium break-all">
                  wilfordtechnology@gmail.com
                </a>
                <a href="mailto:support@whats91.com" className="text-foreground hover:text-brand-primary transition-colors font-medium">
                  support@whats91.com
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Office Section */}
          <Card className="border-border/60 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-2 items-center">
              <div className="bg-brand-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-brand-primary">
                <MapPin className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl font-semibold">Office</CardTitle>
              <CardDescription className="mt-2 justify-center">
                Visit our office
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4 pt-6">
              <div className="text-foreground font-medium leading-relaxed">
                <p>131, C21 Mall</p>
                <p>Ujjain, Madhya Pradesh</p>
                <p>India, 456010</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
