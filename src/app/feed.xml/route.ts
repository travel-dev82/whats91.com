import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/seo/config";

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = siteConfig.url;

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Whats91 Blog</title>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Technical articles on WhatsApp API, ERP integration, and business messaging automation from Whats91.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Whats91 RSS Generator</generator>
    <image>
      <url>${baseUrl}/og-image.png</url>
      <title>Whats91 Blog</title>
      <link>${baseUrl}/blog</link>
    </image>
    ${posts
      .slice(0, 20)
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <content:encoded><![CDATA[${post.content.substring(0, 2000)}...]]></content:encoded>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>Whats91 Team</author>
      <category>${post.category}</category>
      ${post.seo.keywords.map((kw) => `<category>${escapeXml(kw)}</category>`).join("")}
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
