# Blog Page Development Guide for Whats91

This guide provides complete instructions for adding new blog pages to the Whats91 website. Each blog post is treated as an individual page with its own folder structure, and post data is stored in separate data files for optimal performance.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Project Structure](#project-structure)
3. [Adding a New Blog Post](#adding-a-new-blog-post)
4. [Blog Post Template](#blog-post-template)
5. [Content Formatting Rules](#content-formatting-rules)
6. [SEO Requirements](#seo-requirements)
7. [Registering Your Post](#registering-your-post)

---

## Architecture Overview

**Key Principle:** Each blog post has three parts:
1. **Data File** (`/src/lib/blog/posts/[slug].ts`) - Contains all post data and content
2. **Page File** (`/src/app/blog/[slug]/page.tsx`) - Server component for rendering
3. **Registry Entry** (`/src/lib/blog/index.ts`) - Imports data for listing/search

```
src/
├── app/blog/
│   ├── page.tsx                          # Blog listing page
│   ├── your-post-slug/                   # Individual post folder
│   │   └── page.tsx                      # Minimal page (imports data)
│   └── another-post-slug/
│       └── page.tsx
│
└── lib/blog/
    ├── index.ts                          # Post registry & helper functions
    ├── types.ts                          # Type definitions
    ├── metadata.ts                       # Server-side metadata generation
    ├── BlogPostLayout.tsx                # Shared layout component
    └── posts/                            # Post data files
        ├── whatsapp-cloud-api-complete-guide-2026.ts
        ├── busy-accounting-whatsapp-integration-benefits.ts
        └── whatsapp-web-6-hour-logout-rule-india-2026.ts
```

### Why This Architecture?

- **Scalability:** Thousands of posts won't bloat a single file
- **Maintainability:** Each post is self-contained in its own data file
- **SEO:** Individual pages get proper metadata (server components)
- **Performance:** Only loaded posts consume memory
- **Development:** Easy to find and edit specific posts
- **No Client Component Issues:** Data files don't have component code, avoiding Next.js metadata export restrictions

---

## Project Structure

### Blog-Related Files

```
src/
├── app/
│   └── blog/
│       ├── page.tsx                  # Blog listing page (search, filters, grid)
│       ├── layout.tsx                # Blog layout with JSON-LD schemas
│       │
│       └── [individual-post-slug]/   # Each post has its own folder
│           └── page.tsx              # Minimal page (imports from data file)
│
├── components/
│   └── blog/
│       ├── BlogCard.tsx              # Card component for blog listing
│       ├── ShareButtons.tsx          # Client component for sharing
│       └── AvatarImage.tsx           # Client component for avatar images
│
└── lib/
    └── blog/
        ├── index.ts                  # Post registry & helper functions
        ├── types.ts                  # Type definitions
        ├── metadata.ts               # Server-side metadata generation
        ├── BlogPostLayout.tsx        # Server component for post layout
        └── posts/                    # Individual post data files
            ├── post-slug-1.ts
            ├── post-slug-2.ts
            └── ...
```

### Key Imports

```typescript
// Types
import { BlogPostData, BlogCategory, BlogTag, defaultAuthor } from "@/lib/blog/types";

// Helper functions (from registry)
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";

// Metadata generation (server-side only)
import { generateBlogPostMetadata } from "@/lib/blog/metadata";

// Layout component
import { BlogPostLayout } from "@/lib/blog/BlogPostLayout";
```

---

## Adding a New Blog Post

### Step 1: Create Post Data File

Create a new data file in `/src/lib/blog/posts/`:

```bash
touch src/lib/blog/posts/your-post-slug-here.ts
```

**Naming Convention:**
- Use kebab-case (lowercase letters, hyphens for spaces)
- Make it URL-friendly and SEO-optimized
- Example: `whatsapp-cloud-api-complete-guide-2026.ts`

### Step 2: Create Post Folder & Page

Create a folder in `/src/app/blog/` with the same slug:

```bash
mkdir src/app/blog/your-post-slug-here
touch src/app/blog/your-post-slug-here/page.tsx
```

### Step 3: Add Content to Data File

Copy the data template (see below) into your data file.

### Step 4: Create Minimal Page Component

Copy the page template (see below) into your `page.tsx` file.

### Step 5: Register the Post

Add your post to the registry in `/src/lib/blog/index.ts`:

```typescript
// Import your new post data
import { postData as yourNewPost } from "@/lib/blog/posts/your-post-slug-here";

// Add to allPosts array
const allPosts: BlogPostData[] = [
  whatsappCloudAPIGuide,
  busyAccountingIntegration,
  whatsappWebLogoutRule,
  yourNewPost, // Add here
];
```

---

## Blog Post Template

### Data File Template (`/src/lib/blog/posts/your-slug.ts`)

```typescript
import { BlogPostData, defaultAuthor } from "@/lib/blog/types";

export const postData: BlogPostData = {
  id: "4", // Increment from last post
  slug: "your-post-slug-here",
  title: "Your Post Title Here",
  excerpt: "A compelling 1-2 sentence summary that appears in blog cards and search results.",
  author: defaultAuthor,
  category: "WhatsApp API", // Choose from: WhatsApp API, ERP Integration, Business Automation, Industry Insights, Product Updates, Tutorials, Case Studies
  tags: ["Tag1", "Tag2", "Tag3"], // Use predefined tags from types.ts
  publishedAt: "2026-03-01", // YYYY-MM-DD format
  readingTime: 8, // Estimated reading time in minutes
  isFeatured: false, // Set to true for featured posts
  seo: {
    title: "Your SEO Title | Whats91",
    description: "Meta description for search engines. Keep it 150-160 characters. Include primary keyword naturally.",
    keywords: [
      "primary keyword",
      "secondary keyword",
      "long-tail keyword here",
    ],
  },
  aiOptimized: {
    summary: "A concise one-sentence summary for AI crawlers and voice search.",
    keyTakeaways: [
      "First key point readers will learn",
      "Second important insight",
      "Third actionable takeaway",
    ],
    entities: [
      "WhatsApp Cloud API",
      "Meta",
      "Whats91",
      // Add other named entities mentioned
    ],
    faq: [
      {
        question: "Common question readers ask?",
        answer: "Clear, concise answer that appears in search results.",
      },
      {
        question: "Another frequently asked question?",
        answer: "Another helpful answer with relevant keywords.",
      },
    ],
  },
  content: `
# Your Post Title Here

Opening paragraph that hooks the reader and introduces the topic...

## Section 1

Content for section 1...

### Subsection

More detailed content...

## Section 2

| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |

\`\`\`javascript
// Code example
console.log("Hello World");
\`\`\`

## Conclusion

Wrap up your post with key takeaways and a call to action.

---

*Need help? [Contact Whats91](/contact) for expert guidance.*
  `.trim(),
};
```

### Page File Template (`/src/app/blog/your-slug/page.tsx`)

```typescript
import { Metadata } from "next";
import { BlogPostLayout } from "@/lib/blog/BlogPostLayout";
import { generateBlogPostMetadata } from "@/lib/blog/metadata";
import { postData } from "@/lib/blog/posts/your-post-slug-here";

export const metadata: Metadata = generateBlogPostMetadata(postData);

export default function YourPostName() {
  return <BlogPostLayout post={postData} />;
}
```

**Important Notes:**
- The page file must be a **Server Component** (no "use client" directive)
- `metadata` can only be exported from Server Components
- All client-side interactivity is handled by separate client components

---

## Content Formatting Rules

### Markdown Support

```markdown
# Heading 1 (Main title - use once)
## Heading 2 (Section headers)
### Heading 3 (Subsection headers)

**Bold text**
*Italic text*

[Link text](https://example.com)
[Internal link](/solutions/busy-erp)

- Bullet list item
- Another item

1. Numbered list
2. Second item

`inline code`

\`\`\`javascript
// Code block
const x = 1;
\`\`\`

> Blockquote text here

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
```

### Tables

Tables are automatically styled:

```markdown
| Feature | Basic | Pro |
|---------|-------|-----|
| Messages | 100/day | Unlimited |
| Support | Email | Priority |
```

### Links

Internal links use relative paths:
```markdown
[Busy ERP Integration](/solutions/busy-erp)
[Contact Us](/contact)
```

External links use full URLs:
```markdown
[Meta Documentation](https://developers.facebook.com/docs/whatsapp)
```

---

## SEO Requirements

### Title Format

```
[Primary Keyword] | [Secondary Info] | Whats91
```

Example:
```
WhatsApp Cloud API Complete Guide 2026 | Setup & Best Practices | Whats91
```

### Description Rules

- **Length:** 150-160 characters
- **Include primary keyword** naturally
- **Call-to-action** or value proposition
- **Compelling** for click-through

### Keywords

- Include 5-10 relevant keywords
- Mix short-tail and long-tail keywords
- Include brand keywords ("Whats91", "WhatsApp Cloud API")
- Include location keywords if relevant ("India", "Indian enterprises")

### AI Optimization (SEO 2.0)

The `aiOptimized` field is crucial for modern SEO:

1. **summary:** 1-2 sentences that AI crawlers extract
2. **keyTakeaways:** 3-5 bullet points summarizing the article
3. **entities:** Named entities mentioned in the article
4. **faq:** FAQ schema for rich snippets in search results

---

## Registering Your Post

After creating your post, you MUST register it in `/src/lib/blog/index.ts`:

### Step 1: Import from Data File

```typescript
import { postData as yourNewPost } from "@/lib/blog/posts/your-post-slug-here";
```

### Step 2: Add to Array

```typescript
const allPosts: BlogPostData[] = [
  whatsappCloudAPIGuide,
  busyAccountingIntegration,
  whatsappWebLogoutRule,
  yourNewPost, // Add here
];
```

This ensures your post appears in:
- Blog listing page
- Search results
- Category filters
- Tag filters
- Related posts

---

## Checklist for New Posts

- [ ] Created data file in `/src/lib/blog/posts/[slug].ts`
- [ ] Created folder in `/src/app/blog/[slug]/`
- [ ] Created minimal `page.tsx` that imports data
- [ ] Unique `id` (increment from last post)
- [ ] Descriptive `slug` (matches folder name)
- [ ] Compelling `title`
- [ ] Concise `excerpt` (shown in cards)
- [ ] Correct `category` from predefined list
- [ ] Relevant `tags` from predefined list
- [ ] ISO date format for `publishedAt`
- [ ] Accurate `readingTime` estimate
- [ ] Complete `seo` object with title, description, keywords
- [ ] Complete `aiOptimized` object with summary, keyTakeaways, entities
- [ ] Well-formatted `content` in markdown
- [ ] Optional FAQ for rich snippets
- [ ] Post registered in `/src/lib/blog/index.ts`

---

## Testing Your Post

1. **Navigate to** `/blog` to see your post in the listing
2. **Click on** your post to view the individual page
3. **Check:**
   - Title displays correctly
   - Category badge has correct color
   - Tags are visible
   - Reading time is accurate
   - Content renders properly
   - Tables are styled
   - Code blocks are highlighted
   - Links work correctly
   - Share buttons work
   - Author card displays

---

## Available Categories

| Category | Color | Description |
|----------|-------|-------------|
| WhatsApp API | Green | API documentation, guides |
| ERP Integration | Blue | ERP connectivity, workflows |
| Business Automation | Purple | Automation strategies |
| Industry Insights | Orange | Market analysis, trends |
| Product Updates | Pink | New features, releases |
| Tutorials | Cyan | How-to guides, tutorials |
| Case Studies | Amber | Customer success stories |

## Available Tags

Use these predefined tags for consistency:

- WhatsApp Cloud API
- WhatsApp Web
- Busy Accounting
- Chatbot
- Automation
- Marketing
- CRM
- Enterprise
- India
- Tutorial
- Best Practices
- Security
- Compliance

---

## Example: Complete Post Files

See existing posts for reference:

**Data Files:**
- `/src/lib/blog/posts/whatsapp-cloud-api-complete-guide-2026.ts`
- `/src/lib/blog/posts/busy-accounting-whatsapp-integration-benefits.ts`
- `/src/lib/blog/posts/whatsapp-web-6-hour-logout-rule-india-2026.ts`

**Page Files:**
- `/src/app/blog/whatsapp-cloud-api-complete-guide-2026/page.tsx`
- `/src/app/blog/busy-accounting-whatsapp-integration-benefits/page.tsx`
- `/src/app/blog/whatsapp-web-6-hour-logout-rule-india-2026/page.tsx`
