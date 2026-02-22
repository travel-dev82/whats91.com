"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { BlogPost } from "@/lib/blog/types";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    "WhatsApp API": "bg-green-100 text-green-700",
    "ERP Integration": "bg-blue-100 text-blue-700",
    "Business Automation": "bg-purple-100 text-purple-700",
    "Industry Insights": "bg-orange-100 text-orange-700",
    "Product Updates": "bg-pink-100 text-pink-700",
    "Tutorials": "bg-cyan-100 text-cyan-700",
    "Case Studies": "bg-amber-100 text-amber-700",
  };

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  if (featured) {
    return (
      <article className="group relative rounded-2xl border border-border/60 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-border">
        <Link href={`/blog/${post.slug}`} className="block">
          {/* Featured Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-white shadow-md">
              Featured
            </span>
          </div>

          {/* Featured Image Placeholder */}
          <div className="h-48 sm:h-56 bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-surface flex items-center justify-center">
            <div className="text-center px-6">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${categoryColors[post.category] || "bg-slate-100 text-slate-700"}`}>
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
              {post.title}
            </h2>
            <p className="text-sm sm:text-base text-text-secondary mb-4 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime} min read
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-text-muted bg-surface px-2 py-1 rounded-md"
                >
                  <Tag className="h-2.5 w-2.5" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Read More */}
            <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-primary group-hover:gap-2.5 transition-all">
              Read article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group relative rounded-xl border border-border/60 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-brand-primary/30">
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Category Badge */}
        <div className="p-4 pb-0">
          <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-medium ${categoryColors[post.category] || "bg-slate-100 text-slate-700"}`}>
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary mb-3 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-3 text-[10px] sm:text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readingTime} min
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
