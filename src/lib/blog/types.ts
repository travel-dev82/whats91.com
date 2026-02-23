// Blog Types for Whats91

export type BlogAuthor = {
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
};

export type BlogCategory = 
  | "WhatsApp API"
  | "ERP Integration"
  | "Business Automation"
  | "Industry Insights"
  | "Product Updates"
  | "Tutorials"
  | "Case Studies";

export type BlogTag = 
  | "WhatsApp Cloud API"
  | "Busy Accounting"
  | "Chatbot"
  | "Automation"
  | "Marketing"
  | "CRM"
  | "Enterprise"
  | "India"
  | "Tutorial"
  | "Best Practices"
  | "Security"
  | "Compliance";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: BlogAuthor;
  category: BlogCategory;
  tags: BlogTag[];
  featuredImage?: string;
  featuredImageAlt?: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number; // in minutes
  
  // SEO Metadata
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
    canonical?: string;
    noIndex?: boolean;
  };
  
  // AI/LLM Optimization (SEO 2.0)
  aiOptimized: {
    summary: string; // Short summary for AI crawlers
    keyTakeaways: string[]; // Key points for AI extraction
    entities: string[]; // Named entities (products, companies, etc.)
    faq?: {
      question: string;
      answer: string;
    }[];
  };
  
  // Content flags
  isFeatured?: boolean;
  isDraft?: boolean;
  relatedPosts?: string[]; // Array of slugs
};

export type BlogListResponse = {
  posts: BlogPost[];
  total: number;
  page: number;
  perPage: number;
  hasMore: boolean;
};
