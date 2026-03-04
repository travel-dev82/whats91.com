import { NextResponse } from "next/server";
import { getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/seo/config";

// Markdown twin generator for LLM consumption
// Part of SEO 2.0 strategy - provides clean, structured content for AI agents

interface MarkdownPage {
  title: string;
  description: string;
  url: string;
  lastModified: string;
  content: string;
  keywords: string[];
  category?: string;
}

function generateMarkdownHeader(page: MarkdownPage): string {
  return `---
title: "${page.title}"
description: "${page.description}"
url: ${page.url}
lastModified: ${page.lastModified}
keywords: [${page.keywords.map(k => `"${k}"`).join(", ")}]
${page.category ? `category: "${page.category}"` : ""}
---

# ${page.title}

> ${page.description}

**Source**: [${page.url}](${page.url})

---

`;
}

function generateStaticPageMarkdown(slug: string): MarkdownPage | null {
  const baseUrl = siteConfig.url;

  const staticPages: Record<string, Partial<MarkdownPage>> = {
    "busy-erp": {
      title: "Busy Accounting WhatsApp Integration",
      description: "Automate Busy Accounting reports & vouchers on WhatsApp. 24/7 ERP chatbot for balance inquiry, bill-by-bill ledger, receipts & bilty status.",
      keywords: ["Busy Accounting", "WhatsApp Integration", "ERP Automation", "Invoice Delivery", "Payment Reminders"],
      content: `
## Overview

Whats91's Busy Accounting WhatsApp integration transforms how businesses communicate with their customers. Automate invoice delivery, enable 24/7 balance inquiries, and reduce support calls by 50%.

## Key Features

### Automated Invoice Delivery
- Instant WhatsApp delivery when invoice is saved in Busy
- PDF attachment with order details
- Payment link integration
- Due date reminders

### 24/7 Balance Inquiry Chatbot
- Customer sends "Hi" or "Balance" on WhatsApp
- Bot responds with outstanding balance, last payment details, due dates
- Reduces support calls by 50%

### Bill-by-Bill Ledger
- Complete transaction history on demand
- PDF statement generation
- Transparent account tracking

### Payment Reminders
- Automated reminders: 7 days, 3 days, on due date, overdue
- Professional, relationship-maintaining messages
- 30-40% improvement in collections

### Bilty & Dispatch Updates
- Real-time transport status
- LR/Bilty number sharing
- Delivery tracking

## Implementation Timeline

| Week | Milestone |
|------|-----------|
| 1 | WhatsApp Business account setup |
| 2 | Busy data mapping & configuration |
| 3 | Chatbot menu customization |
| 4 | Go-live & team training |

## ROI

- Staff time savings: 3+ hours daily
- Collection improvement: 35% faster payments
- Support call reduction: 50%

## Get Started

Contact Whats91 for a personalized demo and implementation plan.
`,
    },
    "whatsapp-templates": {
      title: "WhatsApp Business Message Template Library",
      description: "20+ pre-approved WhatsApp message templates for marketing, utility, and authentication. Industry-specific templates with best practices.",
      keywords: ["WhatsApp Templates", "Message Templates", "Marketing Templates", "Utility Templates", "Authentication"],
      content: `
## Template Categories

### Marketing Templates (8)
Templates for promotional campaigns, product launches, and customer engagement.

Categories:
- Promotional Offers
- Product Launches
- Event Invitations
- Seasonal Campaigns

### Utility Templates (8)
Templates for transactional messages, account updates, and service notifications.

Categories:
- Order Confirmations
- Payment Receipts
- Delivery Updates
- Account Alerts

### Authentication Templates (4)
Templates for OTP delivery and account verification.

Categories:
- OTP Verification
- Account Verification
- Password Reset
- Two-Factor Authentication

## Template Structure

Each template follows Meta's guidelines:
- Clear, concise message body
- Variable placeholders {{1}}, {{2}}, etc.
- Optional headers (text, image, document)
- Optional call-to-action buttons
- No spelling or grammatical errors

## Common Rejection Reasons

1. Vague or unclear content
2. Missing sample values
3. Promotional content in utility category
4. Incorrect variable usage
5. Trademark violations

## Best Practices

1. Keep messages concise and actionable
2. Use variables for personalization
3. Include clear opt-out options
4. Test with sample data before submission
5. Monitor template performance metrics
`,
    },
    "whatsapp-coexistence": {
      title: "WhatsApp Coexistence: Strategic Implementation for Microbusinesses",
      description: "Complete guide to simultaneously using WhatsApp Business App and WhatsApp Cloud API on a single phone number.",
      keywords: ["WhatsApp Coexistence", "Cloud API", "Business App", "Microbusiness", "SMB", "WhatsApp Integration"],
      content: `
## What is WhatsApp Coexistence?

WhatsApp Coexistence allows microbusinesses to use both the WhatsApp Business mobile app and WhatsApp Cloud API simultaneously on a single phone number. This provides the best of both worlds: manual messaging flexibility with enterprise-grade automation.

## Technical Architecture

### Bidirectional Synchronization
- Messages sent from the mobile app appear in your Cloud API webhook
- Messages received via Cloud API appear in the mobile app
- Enabled via \`smb_message_echoes\` webhook field

### Message Flow
1. Customer sends message to business number
2. Message delivered to both mobile app AND Cloud API webhook
3. Business can respond from either interface
4. All messages synchronized across platforms

## Throughput Limits

| Mode | Throughput | Use Case |
|------|------------|----------|
| Coexistence | 5 MPS | Microbusiness, manual + automation |
| Standard Cloud API | 80-100 MPS | Enterprise, full automation |

## Feature Compatibility

### Supported Features
- Template message sending
- Media messages (images, documents)
- Interactive messages (buttons, lists)
- Webhook event notifications
- Business profile management

### Disabled Features
- Click-to-WhatsApp Ads (requires migration)
- Some advanced analytics
- High-volume batch sending

## Prerequisites

1. WhatsApp Business App installed and active
2. Phone number registered in Business App
3. Meta Business Manager account
4. Cloud API app configured
5. Enable \`smb_message_echoes\` in webhook subscription

## Geographic Availability

Currently available in select markets including India. Check Meta's documentation for current availability.

## Industry Blueprints

### Real Estate
- Property listing alerts via automation
- Manual follow-up for hot leads
- Site visit scheduling

### Retail
- Order confirmations via API
- Manual customer support
- Promotional campaigns

### Consultancy
- Appointment scheduling via API
- Manual consultation follow-ups
- Invoice delivery

## Implementation Steps

1. Verify Business App installation
2. Create Cloud API app in Meta Business Manager
3. Configure webhook with \`smb_message_echoes\`
4. Test bidirectional messaging
5. Deploy automation workflows
6. Train team on hybrid approach
`,
    },
    "tools": {
      title: "Free Tools - WhatsApp Business Resources",
      description: "Free online tools for WhatsApp Business users: link generator, QR code creator, cost calculator, and more.",
      keywords: ["WhatsApp Tools", "Free Tools", "QR Code Generator", "Link Generator", "Cost Calculator"],
      content: `
## Available Tools

### WhatsApp Link Generator
Generate wa.me links with pre-filled messages for easy customer communication.

### QR Code Generator
Create QR codes for:
- URLs
- vCards
- WiFi credentials
- Email
- Phone numbers
- Plain text

### WhatsApp API Cost Calculator
Calculate messaging costs by:
- Country (20+ countries supported)
- Message category (Marketing, Utility, Authentication, Service)
- Volume (discount tiers available)

### GST Calculator
Calculate Indian GST with CGST, SGST, and IGST breakdown.

### SIP Calculator
Plan investments with systematic investment plan returns calculator.

### Image Compressor
Client-side image optimization without uploading to servers.

### SEO Score Checker
Analyze webpage SEO performance with actionable recommendations.

### Case Converter
Transform text between different cases: upper, lower, title, sentence.

## Features

- 100% client-side processing (privacy-focused)
- No data stored on servers
- Mobile-responsive design
- Free to use
`,
    },
    "pricing": {
      title: "WhatsApp Business API Pricing - Transparent Costs",
      description: "Transparent pricing for WhatsApp Business API. Per-conversation pricing, volume discounts, and no hidden fees.",
      keywords: ["WhatsApp Pricing", "API Cost", "Business API Pricing", "WhatsApp Charges"],
      content: `
## Pricing Model

WhatsApp Cloud API follows a per-conversation pricing model. A conversation is a 24-hour message session between business and customer.

## Conversation Types

| Type | Description | India Pricing |
|------|-------------|---------------|
| Marketing | Business-initiated promotional | ₹0.90 |
| Utility | Business-initiated transactional | ₹0.34 |
| Authentication | OTP and verification | ₹0.34 |
| Service | User-initiated (support) | ₹0.34 |

*Pricing subject to Meta's updates

## Volume Discounts

- 5% discount: 10,000+ conversations/month
- 10% discount: 50,000+ conversations/month
- 15% discount: 100,000+ conversations/month
- 20% discount: 500,000+ conversations/month

## Whats91 Service Fees

Contact for custom pricing based on:
- Message volume
- Required features
- Integration complexity
- Support level needed

## What's Included

- Official Meta BSP partnership
- Template management
- Webhook setup
- Analytics dashboard
- Technical support
- 99.9% uptime SLA
`,
    },
    "google-sheets-integration": {
      title: "WhatsApp Campaign to Google Sheets Integration",
      description: "Automatically sync WhatsApp campaign responses to Google Sheets. Capture button replies and push data in real-time.",
      keywords: ["Google Sheets", "WhatsApp Integration", "Campaign Responses", "Real-Time Sync", "Automation"],
      content: `
## Overview

Every button click—Interested, Not Interested, Learn More—is automatically captured and pushed to Google Sheets in real-time. No manual exports, no delays.

## How It Works

1. Create campaign with interactive buttons
2. Connect Google Sheet and map columns
3. Launch campaign to audience
4. Platform captures button responses via webhooks
5. Auto-push to configured sheet
6. Use Zapier/Make for further automation

## Button Response Types

- **Interested**: Customer expresses interest (Lead Score: High)
- **Not Interested**: Customer declines (Lead Score: Low)
- **Learn More**: Customer wants info (Lead Score: Medium)
- **Call Me**: Callback request (Priority: High)

## Data Fields Captured

- phone_number
- timestamp
- campaign_id
- template_name
- button_id
- button_text
- message_id
- custom_fields (JSON)

## Use Cases

- **Lead Qualification**: 3x faster lead response time
- **Event RSVPs**: 85% response rate
- **Customer Surveys**: 60% higher completion
- **Order Confirmations**: 90% confirmation rate

## Features

- Real-time sync (1-3 seconds)
- Custom column mapping
- Multi-sheet support
- Webhook backup
- Data validation
`,
    },
    "chatbot-flows": {
      title: "ERP Chatbot Flow Library",
      description: "Pre-built conversational flows for Busy Accounting Software integration. Automate sales, purchases, payments, and more.",
      keywords: ["Chatbot Flows", "ERP Automation", "Busy Accounting", "WhatsApp Chatbot", "Pre-built Flows"],
      content: `
## Flow Library Overview

14+ pre-built chatbot flows for ERP automation across 8 categories.

## Categories

### Sales Invoice
- Invoice creation and delivery
- Payment tracking
- Due date reminders

### Sales Order
- Order processing
- Fulfillment updates
- Status tracking

### Sales Return
- Returns handling
- Credit notes
- Refund processing

### Purchase
- PO automation
- Vendor communication
- Inventory updates

### Payments
- Payment reminders
- Confirmation messages
- Receipt delivery

### Receipts
- Delivery acknowledgment
- Confirmation messages
- Status updates

### Ledgers
- Balance queries
- Statement generation
- Account summaries

### Reports
- Automated delivery
- On-demand reports
- Scheduled summaries

## Flow Structure

Each flow contains:
- Trigger event (webhook/message)
- Processing steps (API calls, conditions)
- Message templates
- Integration endpoints

## Integration Points

- Busy API for data retrieval
- WhatsApp Cloud API for messaging
- PDF Generator for documents
- Scheduler for timed triggers

## Complexity Levels

- **Basic**: Simple query-response flows
- **Intermediate**: Multi-step with conditions
- **Advanced**: Complex branching with integrations
`,
    },
  };

  const page = staticPages[slug];
  if (!page) return null;

  return {
    title: page.title!,
    description: page.description!,
    url: `${baseUrl}/${slug === "busy-erp" ? "solutions/busy-erp" : slug}`,
    lastModified: new Date().toISOString(),
    keywords: page.keywords || [],
    content: page.content || "",
  };
}

// List of available slugs for 404 response
const availableSlugs = [
  "busy-erp",
  "whatsapp-templates",
  "whatsapp-coexistence",
  "tools",
  "pricing",
  "google-sheets-integration",
  "chatbot-flows",
];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  let page: MarkdownPage | null = null;

  // Check if it's a blog post
  if (slug.startsWith("blog-")) {
    const postSlug = slug.replace("blog-", "");
    const post = getPostBySlug(postSlug);

    if (post) {
      page = {
        title: post.title,
        description: post.excerpt,
        url: `${siteConfig.url}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt).toISOString(),
        keywords: post.seo.keywords,
        category: post.category,
        content: post.content || "",
      };
    }
  } else {
    // Try static pages
    page = generateStaticPageMarkdown(slug);
  }

  if (!page) {
    // Return JSON 404 with available pages
    return NextResponse.json(
      { 
        error: "Page not found",
        slug: slug,
        available_pages: availableSlugs,
        hint: "Use one of the available page slugs, or prefix blog posts with 'blog-' (e.g., 'blog-whatsapp-cloud-api-complete-guide-2026')"
      },
      { 
        status: 404,
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
  }

  // Generate markdown content
  const markdown = generateMarkdownHeader(page) + page.content;

  // Return as text/markdown for LLM consumption
  return new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "X-Robots-Tag": "index, follow",
    },
  });
}

// Note: generateStaticParams is not supported in API routes
// This route handles dynamic requests at runtime
