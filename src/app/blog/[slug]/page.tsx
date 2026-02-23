import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Tag,
  User,
  ChevronRight,
  Sparkles,
  Code2,
  Zap,
  Layers
} from "lucide-react";
import { getPostBySlug, getRelatedPosts, getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { siteConfig, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo/config";

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
    return { title: "Post Not Found" };
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
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.title,
      description: post.seo.description,
    },
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
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
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

  const schemas = [
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: post.title, url: `/blog/${post.slug}` },
    ]),
    generateBlogPostSchema(post),
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
          
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-surface to-background">
            <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-10 sm:py-12">
              
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs sm:text-sm text-text-muted mb-6">
                <Link href="/" className="hover:text-brand-primary transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link href="/blog" className="hover:text-brand-primary transition-colors">
                  Blog
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-text-secondary truncate max-w-[200px]">{post.title}</span>
              </nav>

              {/* Category & Meta Row */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary border border-brand-primary/20">
                  <Layers className="h-3 w-3" />
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime} min read
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-5 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg sm:text-xl text-text-secondary mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author & Date Row */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-4 border-y border-border/60">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{post.author.name}</p>
                    <p className="text-xs text-text-muted">{post.author.role}</p>
                  </div>
                </div>
                <div className="h-6 w-px bg-border/60 hidden sm:block" />
                <div className="flex items-center gap-1.5 text-sm text-text-muted">
                  <Calendar className="h-4 w-4" />
                  {formattedDate}
                </div>
              </div>

              {/* Key Takeaways */}
              {post.aiOptimized.keyTakeaways && (
                <div className="mt-6 rounded-xl border border-brand-primary/20 bg-brand-primary/5 p-5">
                  <h3 className="text-base font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-brand-primary" />
                    Key Takeaways
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {post.aiOptimized.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-xs font-medium mt-0.5">
                          {index + 1}
                        </span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* Article Content - Full Width */}
          <section className="py-8 sm:py-10">
            <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
              
              {/* Article Body */}
              <article 
                className="prose prose-slate prose-sm sm:prose-base max-w-none
                  prose-headings:text-text-primary prose-headings:font-bold prose-headings:scroll-mt-24
                  prose-h1:text-2xl prose-h1:mb-4 prose-h1:mt-10 prose-h1:pb-3 prose-h1:border-b prose-h1:border-border/40
                  prose-h2:text-xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border/20
                  prose-h3:text-lg prose-h3:mb-3 prose-h3:mt-6
                  prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-text-primary prose-strong:font-semibold
                  prose-code:text-brand-primary prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:overflow-x-auto prose-pre:my-6
                  prose-blockquote:border-brand-primary prose-blockquote:bg-surface prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-xl prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:my-6
                  prose-li:text-text-secondary prose-li:my-1
                  prose-ol:my-4 prose-ul:my-4
                  prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto
                "
              >
                <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
              </article>

              {/* Tags - At Bottom */}
              <div className="mt-10 pt-6 border-t border-border/60">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4 text-text-muted" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-surface border border-border/50 text-xs text-text-secondary hover:text-brand-primary cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              {post.aiOptimized.faq && post.aiOptimized.faq.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-brand-primary" />
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {post.aiOptimized.faq.map((item, index) => (
                      <details 
                        key={index} 
                        className="group rounded-xl border border-border/60 bg-white overflow-hidden open:border-brand-primary/30"
                      >
                        <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                          <span className="text-sm font-semibold text-text-primary pr-4">{item.question}</span>
                          <ChevronRight className="h-4 w-4 text-text-muted shrink-0 transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="px-4 pb-4">
                          <p className="text-sm text-text-secondary leading-relaxed">{item.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="py-10 sm:py-12 bg-surface/50">
              <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-text-primary flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-primary" />
                    Related Articles
                  </h2>
                  <Link
                    href="/blog"
                    className="text-sm font-medium text-brand-primary hover:underline flex items-center gap-1"
                  >
                    View all
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </div>
                <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Final CTA */}
          <section className="py-10 sm:py-12">
            <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent p-8 sm:p-10 text-center">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl" />
                </div>
                <div className="relative z-10 max-w-xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs text-white mb-4">
                    <Code2 className="h-3 w-3" />
                    Ready to build?
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Transform your enterprise communication
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 mb-6">
                    Join hundreds of enterprises using Whats91 for WhatsApp Cloud API integration.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="/solutions/busy-erp"
                      className="h-12 px-6 rounded-xl bg-white text-brand-primary font-semibold text-sm hover:bg-white/95 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <Zap className="h-4 w-4" />
                      Explore Solutions
                    </Link>
                    <Link
                      href="/blog"
                      className="h-12 px-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to Blog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

// Content formatter with improved table handling
function formatContent(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold and italic
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Code blocks
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Lists
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    // Tables - convert to styled HTML tables
    .replace(/\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)+)/g, (match, headerRow, bodyRows) => {
      const headers = headerRow.split('|').filter((h: string) => h.trim()).map((h: string) => h.trim());
      const rows = bodyRows.trim().split('\n').map((row: string) => 
        row.split('|').filter((c: string) => c.trim()).map((c: string) => c.trim())
      );
      
      let tableHtml = '<div class="my-6 overflow-x-auto"><table class="w-full border-collapse rounded-lg overflow-hidden border border-border/60"><thead><tr class="bg-brand-primary/10">';
      headers.forEach((header: string) => {
        tableHtml += `<th class="px-4 py-3 text-left text-sm font-semibold text-text-primary border-b border-border/60">${header}</th>`;
      });
      tableHtml += '</tr></thead><tbody>';
      
      rows.forEach((row: string[], rowIndex: number) => {
        tableHtml += `<tr class="${rowIndex % 2 === 0 ? 'bg-white' : 'bg-surface/50'}">`;
        row.forEach((cell: string) => {
          tableHtml += `<td class="px-4 py-3 text-sm text-text-secondary border-b border-border/40">${cell}</td>`;
        });
        tableHtml += '</tr>';
      });
      
      tableHtml += '</tbody></table></div>';
      return tableHtml;
    })
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>')
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, '')
    .replace(/<p><br><\/p>/g, '')
    // Wrap lists
    .replace(/(<li>.*?<\/li>)+/g, '<ul>$&</ul>');
}
