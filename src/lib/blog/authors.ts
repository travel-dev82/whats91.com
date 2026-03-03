/**
 * Author Registry - Author profiles for blog posts
 * 
 * This file contains author metadata for SEO and blog attribution.
 * Each author has a dedicated page at /authors/[slug]
 */

export interface Author {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  shortBio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  expertise: string[];
  location?: string;
  joinedAt: string;
}

// Author profiles
export const authors: Author[] = [
  {
    id: "1",
    slug: "whats91-team",
    name: "Whats91 Team",
    role: "Content Team",
    bio: "The Whats91 Team is a group of WhatsApp API experts, developers, and business strategists dedicated to helping enterprises leverage the power of WhatsApp Cloud API. With years of experience in business messaging and enterprise integration, we provide authoritative insights on WhatsApp Business solutions, compliance, and best practices for the Indian market.",
    shortBio: "WhatsApp API experts providing insights on Cloud API, compliance, and enterprise messaging solutions.",
    avatar: "/authors/whats91-team.png",
    social: {
      twitter: "https://twitter.com/whats91",
      linkedin: "https://www.linkedin.com/company/whats91",
    },
    expertise: [
      "WhatsApp Cloud API",
      "Business Messaging",
      "ERP Integration",
      "Compliance & Security",
      "Enterprise Communication",
    ],
    location: "Ujjain, Madhya Pradesh, India",
    joinedAt: "2024-01-01",
  },
  {
    id: "2",
    slug: "tech-team",
    name: "Technical Team",
    role: "Engineering & API Integration",
    bio: "The Technical Team at Whats91 specializes in WhatsApp Cloud API implementation, webhook development, and enterprise integrations. Our engineers have built scalable messaging infrastructure serving millions of messages daily, with deep expertise in Busy ERP integration, CRM connectivity, and custom chatbot development.",
    shortBio: "Engineering experts specializing in WhatsApp Cloud API implementation and enterprise integrations.",
    avatar: "/authors/tech-team.png",
    social: {
      github: "https://github.com/whats91",
      linkedin: "https://www.linkedin.com/company/whats91",
    },
    expertise: [
      "API Development",
      "Webhook Integration",
      "Busy ERP Integration",
      "Chatbot Development",
      "System Architecture",
    ],
    location: "Ujjain, Madhya Pradesh, India",
    joinedAt: "2024-01-01",
  },
  {
    id: "3",
    slug: "raj-sharma",
    name: "Raj Sharma",
    role: "Senior Technical Writer",
    bio: "Raj Sharma is a Senior Technical Writer at Whats91 with over 8 years of experience in business messaging and communication technology. He specializes in translating complex API concepts into actionable guides for businesses. Raj holds expertise in WhatsApp Business API policies, compliance frameworks, and enterprise communication strategies.",
    shortBio: "Senior Technical Writer specializing in WhatsApp API documentation and enterprise communication guides.",
    avatar: "/authors/raj-sharma.png",
    social: {
      twitter: "https://twitter.com/rajsharma",
      linkedin: "https://www.linkedin.com/in/rajsharma",
    },
    expertise: [
      "Technical Documentation",
      "WhatsApp API Policies",
      "Compliance Frameworks",
      "Enterprise Communication",
    ],
    location: "Mumbai, Maharashtra, India",
    joinedAt: "2024-06-15",
  },
];

// Helper functions
export function getAllAuthors(): Author[] {
  return authors.sort((a, b) => a.name.localeCompare(b.name));
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug);
}

export function getAuthorById(id: string): Author | undefined {
  return authors.find((author) => author.id === id);
}

// Default author for posts without explicit author
export const defaultAuthor = authors[0];
