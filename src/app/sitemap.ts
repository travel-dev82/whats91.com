import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/config";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();

  // Get all blog posts dynamically
  const blogPosts = getAllPosts();

  // ============================================
  // STATIC PAGES - Core website pages
  // ============================================
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/compliance`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // ============================================
  // BLOG PAGES
  // ============================================
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    // Dynamic blog post pages
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt).toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  // ============================================
  // SOLUTIONS PAGES
  // ============================================
  const solutionsPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/solutions/busy-erp`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/busy-reports`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/busy-google-sheet`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/busy-api`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/payment-reminders`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/marketing`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/utility`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // ============================================
  // FREE TOOLS PAGES
  // ============================================
  const toolsPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/whatsapp-link-generator`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools/qr-code-generator`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools/case-converter`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tools/sip-calculator`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tools/gst-calculator`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tools/image-compressor`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tools/seo-checker`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tools/whatsapp-api-cost-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/lead-qualification-roi-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // ============================================
  // WHATSAPP RESOURCES
  // ============================================
  const resourcePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/whatsapp-templates`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/whatsapp-coexistence`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // ============================================
  // LEGAL PAGES
  // ============================================
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  // ============================================
  // SEO 2.0 - AI/LLM OPTIMIZED ROUTES
  // ============================================
  const aiOptimizedRoutes: MetadataRoute.Sitemap = [
    // llms.txt standard
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Markdown twins for key pages
    {
      url: `${baseUrl}/api/md/busy-erp`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/api/md/whatsapp-templates`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/api/md/whatsapp-coexistence`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/api/md/tools`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/api/md/pricing`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    // MCP discovery endpoint
    {
      url: `${baseUrl}/api/mcp`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // Markdown twins for blog posts
  const blogMarkdownTwins = blogPosts.map((post) => ({
    url: `${baseUrl}/api/md/blog-${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt).toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.4,
  }));

  // ============================================
  // COMBINE ALL PAGES
  // ============================================
  return [
    ...corePages,
    ...blogPages,
    ...solutionsPages,
    ...toolsPages,
    ...resourcePages,
    ...legalPages,
    ...aiOptimizedRoutes,
    ...blogMarkdownTwins,
  ];
}
