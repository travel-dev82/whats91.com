/**
 * Blog Post Registry - Lightweight metadata for blog listing
 * 
 * This file contains ONLY metadata for the blog listing page.
 * All actual content lives in each post's page.tsx file.
 * 
 * When adding a new blog post:
 * 1. Create /src/app/blog/your-post-slug/page.tsx with full content
 * 2. Add metadata entry to this registry
 */

export interface BlogPostMeta {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  isFeatured: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// All posts metadata - lightweight for listing page
export const blogPosts: BlogPostMeta[] = [
  {
    id: "4",
    slug: "whatsapp-web-6-hour-logout-unofficial-api-migration-guide",
    title: "WhatsApp Web 6-Hour Logout: Impact on Unofficial APIs & Complete Migration Guide",
    excerpt: "How the new 6-hour logout rule affects unofficial WhatsApp APIs, and a complete guide to migrating to the official WhatsApp Cloud API with co-existing or brand name options.",
    category: "WhatsApp API",
    tags: ["WhatsApp API", "Cloud API", "Unofficial API", "Migration", "6-Hour Rule", "Official API"],
    publishedAt: "2026-02-28",
    readingTime: 12,
    isFeatured: true,
    seo: {
      title: "WhatsApp Web 6-Hour Logout: Unofficial API Impact & Official Migration Guide",
      description: "Learn how the 6-hour logout rule affects unofficial WhatsApp APIs and discover two official Cloud API migration options: Co-Existing Mode and Brand Name Mode.",
      keywords: ["WhatsApp unofficial API", "WhatsApp Cloud API migration", "6-hour logout rule impact", "official WhatsApp API"],
    },
  },
  {
    id: "3",
    slug: "whatsapp-web-6-hour-logout-rule-india-2026",
    title: "WhatsApp Web 6-Hour Logout Rule in India: Complete Guide for Businesses",
    excerpt: "India's new DoT directive mandates automatic logout for WhatsApp Web and desktop sessions every 6 hours. Here's what your business needs to know and how to adapt.",
    category: "Industry Insights",
    tags: ["WhatsApp Web", "Compliance", "Security", "India", "Best Practices"],
    publishedAt: "2026-02-26",
    readingTime: 10,
    isFeatured: true,
    seo: {
      title: "WhatsApp Web 6-Hour Logout Rule India 2026 | DoT Directive Explained",
      description: "Complete guide to India's new 6-hour WhatsApp Web logout rule. Learn about SIM-binding, compliance deadlines, impact on businesses, and workflow adaptation strategies.",
      keywords: ["WhatsApp Web logout rule India", "DoT 6-hour logout", "WhatsApp SIM binding India"],
    },
  },
  {
    id: "1",
    slug: "whatsapp-cloud-api-complete-guide-2026",
    title: "WhatsApp Cloud API: Complete Guide for Enterprises in 2026",
    excerpt: "Everything you need to know about implementing WhatsApp Cloud API for your business. From setup to scaling, learn how to leverage the official Meta platform for enterprise communication.",
    category: "WhatsApp API",
    tags: ["WhatsApp Cloud API", "Enterprise", "Best Practices", "India"],
    publishedAt: "2026-01-15",
    readingTime: 12,
    isFeatured: true,
    seo: {
      title: "WhatsApp Cloud API Complete Guide 2026 | Setup, Features & Best Practices",
      description: "Comprehensive guide to WhatsApp Cloud API for enterprises. Learn setup, features, pricing, and best practices for implementing official WhatsApp Business Platform in 2026.",
      keywords: ["WhatsApp Cloud API guide", "WhatsApp Business API setup", "WhatsApp API pricing 2026"],
    },
  },
  {
    id: "2",
    slug: "busy-accounting-whatsapp-integration-benefits",
    title: "5 Ways WhatsApp Integration Transforms Busy Accounting Workflows",
    excerpt: "Discover how integrating WhatsApp with Busy Accounting Software automates invoice delivery, payment reminders, and customer inquiries. Real examples from Indian businesses.",
    category: "ERP Integration",
    tags: ["Busy Accounting", "ERP Integration", "Automation", "Chatbot"],
    publishedAt: "2026-01-10",
    readingTime: 8,
    isFeatured: false,
    seo: {
      title: "Busy Accounting WhatsApp Integration: 5 Transformation Benefits | Whats91",
      description: "Learn how WhatsApp integration with Busy Accounting automates invoices, payment reminders, and customer inquiries. Real examples and ROI breakdown for Indian businesses.",
      keywords: ["Busy Accounting WhatsApp integration", "Busy ERP WhatsApp", "invoice automation WhatsApp"],
    },
  },
];

// Helper functions
export function getAllPosts(): BlogPostMeta[] {
  return blogPosts
    .filter((post) => !post.isDraft)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPostMeta[] {
  return blogPosts.filter((post) => post.isFeatured);
}

export function getRelatedPosts(currentSlug: string, limit: number = 2): BlogPostMeta[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;
      const matchingTags = post.tags.filter((tag) => currentPost.tags.includes(tag));
      score += matchingTags.length * 2;
      if (post.category === currentPost.category) score += 1;
      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

export function getAllCategories(): string[] {
  const categories = new Set(blogPosts.map((post) => post.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags);
}

// Category colors for badges
export const categoryColors: Record<string, string> = {
  "WhatsApp API": "bg-green-100 text-green-700 border-green-200",
  "ERP Integration": "bg-blue-100 text-blue-700 border-blue-200",
  "Business Automation": "bg-purple-100 text-purple-700 border-purple-200",
  "Industry Insights": "bg-orange-100 text-orange-700 border-orange-200",
  "Product Updates": "bg-pink-100 text-pink-700 border-pink-200",
  "Tutorials": "bg-cyan-100 text-cyan-700 border-cyan-200",
  "Case Studies": "bg-amber-100 text-amber-700 border-amber-200",
};
