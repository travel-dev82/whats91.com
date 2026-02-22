import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Rss, Search } from "lucide-react";
import { getAllPosts, getFeaturedPosts, getAllCategories, getAllTags } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { siteConfig } from "@/lib/seo/config";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog - WhatsApp API Insights & Enterprise Communication",
  description: "Expert insights on WhatsApp Cloud API, ERP integration, business automation, and enterprise messaging best practices. Stay updated with Whats91 blog.",
  keywords: [
    "WhatsApp API blog",
    "WhatsApp Cloud API insights",
    "ERP integration articles",
    "business automation tips",
    "enterprise messaging best practices",
    "WhatsApp marketing guide",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Whats91 Blog - WhatsApp API Insights & Enterprise Communication",
    description: "Expert insights on WhatsApp Cloud API, ERP integration, and business automation best practices.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

// JSON-LD for Blog listing
const blogListSchemas = [
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Whats91 Blog",
    description: "Expert insights on WhatsApp Cloud API, ERP integration, and enterprise messaging",
    url: `${siteConfig.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  },
];

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <>
      {/* JSON-LD Structured Data */}
      {blogListSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen flex flex-col bg-background">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-gradient-to-b from-surface/80 to-background">
            <div className="absolute inset-0 gradient-brand-subtle pointer-events-none" />
            <div className="relative px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
              
              {/* Header */}
              <div className="text-center mb-10 sm:mb-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/15 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-4">
                  <Rss className="h-3.5 w-3.5" />
                  Whats91 Blog
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
                  Insights & Resources
                </h1>
                <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                  Expert guides on WhatsApp Cloud API, ERP integration, and transforming enterprise communication with automation.
                </p>
              </div>

              {/* Featured Posts */}
              {featuredPosts.length > 0 && (
                <div className="mb-12 sm:mb-16">
                  <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-5 sm:mb-6 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                    Featured Articles
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {featuredPosts.slice(0, 2).map((post) => (
                      <BlogCard key={post.id} post={post} featured />
                    ))}
                  </div>
                </div>
              )}

              {/* Categories Filter */}
              <div className="mb-8 sm:mb-10">
                <div className="flex flex-wrap gap-2 justify-center">
                  <button className="px-4 py-2 rounded-full bg-brand-primary text-white text-sm font-medium transition-colors">
                    All Posts
                  </button>
                  {categories.slice(0, 5).map((category) => (
                    <button
                      key={category}
                      className="px-4 py-2 rounded-full bg-surface border border-border/60 text-sm font-medium text-text-secondary hover:border-brand-primary/30 hover:text-brand-primary transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* All Posts Grid */}
              <div className="mb-12 sm:mb-16">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-5 sm:mb-6 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  Latest Articles
                </h2>
                <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {allPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>

              {/* Tags Section */}
              <div className="mb-12 sm:mb-16">
                <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  Popular Topics
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-surface border border-border/50 text-xs sm:text-sm text-text-secondary hover:border-brand-primary/30 hover:text-brand-primary cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-brand-primary/5 to-transparent p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
                  Stay Updated
                </h3>
                <p className="text-sm sm:text-base text-text-secondary mb-5 max-w-lg mx-auto">
                  Get the latest WhatsApp API insights and enterprise automation tips delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 h-11 px-4 rounded-xl border border-border/60 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary/30"
                  />
                  <button className="h-11 px-6 rounded-xl bg-brand-primary text-white font-semibold text-sm hover:bg-brand-primary-hover transition-colors flex items-center justify-center gap-2 group">
                    Subscribe
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
