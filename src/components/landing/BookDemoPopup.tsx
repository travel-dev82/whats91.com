"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CalendarDays,
  Send,
  CheckCircle2,
  Loader2,
  X,
  MessageCircle,
} from "lucide-react";

interface BookDemoPopupProps {
  triggerClassName?: string;
  triggerVariant?: "default" | "outline" | "ghost";
  triggerSize?: "default" | "sm" | "lg";
  triggerLabel?: string;
  showIcon?: boolean;
  source?: string;
}

export function BookDemoPopup({
  triggerClassName = "",
  triggerVariant = "default",
  triggerSize = "default",
  triggerLabel = "Book a Demo",
  showIcon = true,
  source = "popup",
}: BookDemoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
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
      source,
    };

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        (event.target as HTMLFormElement).reset();
        // Auto close after 3 seconds
        setTimeout(() => {
          setIsOpen(false);
          setIsSuccess(false);
        }, 3000);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset state when closing
      setTimeout(() => {
        setIsSuccess(false);
        setError(null);
      }, 200);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant={triggerVariant}
          size={triggerSize}
          className={`bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover font-semibold shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/25 transition-all duration-300 ${triggerClassName}`}
        >
          {showIcon && <CalendarDays className="mr-2 h-4 w-4" />}
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background border-border/60 shadow-2xl">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl font-semibold flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
              <MessageCircle className="h-4 w-4 text-brand-primary" />
            </div>
            Book a Demo
          </DialogTitle>
          <DialogDescription className="text-text-secondary">
            Schedule a personalized demo with our team. We&apos;ll show you how Whats91 can transform your business communication.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="flex justify-center mb-4">
              <div className="h-14 w-14 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-7 w-7 text-brand-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Demo Request Submitted!
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              Thank you for your interest. Our team will contact you shortly to schedule your demo.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
              <Loader2 className="h-3 w-3 animate-spin" />
              Closing in a moment...
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="demo-name" className="text-sm font-medium text-text-primary">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="demo-name"
                name="name"
                placeholder="John Doe"
                required
                disabled={isSubmitting}
                className="h-11 border-border focus:border-brand-primary focus:ring-brand-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo-email" className="text-sm font-medium text-text-primary">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="demo-email"
                name="email"
                type="email"
                placeholder="john@company.com"
                required
                disabled={isSubmitting}
                className="h-11 border-border focus:border-brand-primary focus:ring-brand-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo-phone" className="text-sm font-medium text-text-primary">
                Mobile Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="demo-phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                required
                disabled={isSubmitting}
                className="h-11 border-border focus:border-brand-primary focus:ring-brand-primary/20"
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
                className="flex-1 h-11 border-border hover:bg-surface"
              >
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 h-11 bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover font-semibold shadow-lg shadow-brand-primary/25 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Request
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-text-muted text-center pt-2">
              By submitting, you agree to our{" "}
              <a href="/privacy" className="text-brand-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
