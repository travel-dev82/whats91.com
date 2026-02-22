import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Twitter, 
  Linkedin, 
  Copy,
  Tag,
  User,
  CheckCircle2
} from "lucide-react";
import { getPostBySlug, getRelatedPosts, getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { siteConfig, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords.join(", "),
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: post.seo.canonical || `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: post.seo.ogImage ? [
        {
          url: post.seo.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.title,
      description: post.seo.description,
      images: post.seo.ogImage ? [post.seo.ogImage] : undefined,
    },
    robots: post.seo.noIndex ? { index: false, follow: false } : undefined,
  };
}

// JSON-LD Schema Generator for Blog Post
function generateBlogPostSchema(post: ReturnType<typeof getPostBySlug>) {
  if (!post) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seo.description,
    image: post.seo.ogImage || `${siteConfig.url}/og-image.png`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readingTime}M`,
  };
}

function generateAISummarySchema(post: ReturnType<typeof getPostBySlug>) {
  if (!post || !post.aiOptimized) return null;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: post.title,
    description: post.aiOptimized.summary,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: post.aiOptimized.keyTakeaways.map((takeaway, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: takeaway,
      })),
    },
  };
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Generate schemas
  const schemas = [
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: post.title, url: `/blog/${post.slug}` },
    ]),
    generateBlogPostSchema(post),
    generateAISummarySchema(post),
    post.aiOptimized.faq ? generateFAQSchema(post.aiOptimized.faq) : null,
  ].filter(Boolean);

  return (
    <>
      {/* JSON-LD Structured Data */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen flex flex-col bg-background">
        <main className="flex-1">
          
          {/* Article Header */}
          <section className="relative overflow-hidden py-10 sm:py-12 md:py-16 bg-gradient-to-b from-surface/80 to-background">
            <div className="absolute inset-0 gradient-brand-subtle pointer-events-none" />
            <div className="relative px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
              
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs sm:text-sm text-text-muted mb-6">
                <Link href="/" className="hover:text-brand-primary transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-brand-primary transition-colors">
                  Blog
                </Link>
                <span>/</span>
                <span className="text-text-secondary truncate max-w-[200px]">{post.title}</span>
              </nav>

              {/* Category & Reading Time */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime} min read
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-base sm:text-lg text-text-secondary mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author & Date */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pb-6 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{post.author.name}</p>
                    <p className="text-xs text-text-muted">{post.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-text-muted">
                  <Calendar className="h-4 w-4" />
                  {formattedDate}
                </div>
              </div>

              {/* AI Summary (SEO 2.0) - Visible for AI crawlers */}
              <div className="hidden" aria-hidden="true">
                <div data-ai-summary={post.aiOptimized.summary} />
                <div data-key-takeaways={JSON.stringify(post.aiOptimized.keyTakeaways)} />
                <div data-entities={JSON.stringify(post.aiOptimized.entities)} />
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-8 sm:py-10">
            <div className="px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
              
              {/* Article Body */}
              <article 
                className="prose prose-slate prose-sm sm:prose-base max-w-none
                  prose-headings:text-text-primary prose-headings:font-bold
                  prose-h1:text-2xl prose-h1:mb-4 prose-h1:mt-8
                  prose-h2:text-xl prose-h2:mb-3 prose-h2:mt-6
                  prose-h3:text-lg prose-h3:mb-2 prose-h3:mt-4
                  prose-p:text-text-secondary prose-p:leading-relaxed
                  prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-text-primary
                  prose-code:text-brand-primary prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                  prose-pre:bg-slate-900 prose-pre:text-slate-100
                  prose-blockquote:border-brand-primary prose-blockquote:bg-surface prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-xl prose-blockquote:not-italic
                  prose-li:text-text-secondary
                  prose-table:border-collapse
                  prose-th:bg-surface prose-th:text-text-primary prose-th:font-semibold
                  prose-td:border prose-td:border-border/60
                  prose-img:rounded-xl prose-img:shadow-lg
                "
              >
                <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
              </article>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-border/60">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4 text-text-muted" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-surface border border-border/50 text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-8 p-5 rounded-xl border border-border/60 bg-surface/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary mb-1">Share this article</h3>
                    <p className="text-xs text-text-muted">Help others discover this content</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="h-9 w-9 rounded-lg bg-[#1DA1F2]/10 text-[#1DA1F2] flex items-center justify-center hover:bg-[#1DA1F2]/20 transition-colors">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="h-9 w-9 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center hover:bg-[#0A66C2]/20 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="h-9 w-9 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center hover:bg-brand-primary/20 transition-colors">
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Key Takeaways */}
              {post.aiOptimized.keyTakeaways && (
                <div className="mt-8 p-5 rounded-xl border border-brand-primary/20 bg-brand-primary/5">
                  <h3 className="text-base font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary" />
                    Key Takeaways
                  </h3>
                  <ul className="space-y-2">
                    {post.aiOptimized.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm text-text-secondary">
                        <span className="h-5 w-5 rounded-full bg-brand-primary/20 text-brand-primary text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        {takeaway}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQ Section */}
              {post.aiOptimized.faq && post.aiOptimized.faq.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {post.aiOptimized.faq.map((item, index) => (
                      <div key={index} className="rounded-xl border border-border/60 bg-white p-4">
                        <p className="text-sm font-semibold text-text-primary mb-2">{item.question}</p>
                        <p className="text-sm text-text-secondary">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="py-10 sm:py-12 bg-surface/50">
              <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  Related Articles
                </h2>
                <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="py-10 sm:py-12">
            <div className="px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
              <div className="rounded-2xl bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Ready to transform your business communication?
                </h3>
                <p className="text-sm sm:text-base text-white/90 mb-5 max-w-lg mx-auto">
                  Join hundreds of enterprises using Whats91 for WhatsApp Cloud API integration.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/solutions/busy-erp"
                    className="h-11 px-6 rounded-xl bg-white text-brand-primary font-semibold text-sm hover:bg-white/95 transition-colors inline-flex items-center justify-center"
                  >
                    Explore Solutions
                  </Link>
                  <Link
                    href="/blog"
                    className="h-11 px-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-colors inline-flex items-center justify-center"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Blog
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

// Simple markdown-like content formatter
function formatContent(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Code blocks
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    // Inline code
    .replace(/`(.*?)`/g, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Lists
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Line breaks
    .replace(/\n/g, '<br>')
    // Tables (basic)
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      if (cells.some(c => c.match(/^[\s-]+$/))) {
        return ''; // Skip separator rows
      }
      return `<tr>${cells.map(c => `<td>${c.trim()}</td>`).join('')}</tr>`;
    })
    // Wrap in paragraph
    .replace(/^/, '<p>')
    .replace(/$/, '</p>')
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, '')
    .replace(/<p><br><\/p>/g, '')
    // Wrap tables
    .replace(/(<tr>.*<\/tr>)+/g, '<table class="w-full border-collapse">$&</table>');
}
