import { NextResponse } from "next/server";

/**
 * MCP Server Discovery Endpoint
 * Returns available tools for AI agents
 * Part of SEO 2.0 - Model Context Protocol implementation
 */

export async function GET() {
  const mcpCapabilities = {
    name: "Whats91 MCP Server",
    version: "1.0.0",
    description: "WhatsApp Cloud API Platform - Agent-accessible tools for business messaging",
    protocolVersion: "2024-11-05",
    capabilities: {
      tools: {},
      resources: {},
      prompts: {},
    },
    tools: [
      {
        name: "get_pricing",
        description: "Get WhatsApp Cloud API pricing information by country and message category",
        inputSchema: {
          type: "object",
          properties: {
            country: {
              type: "string",
              description: "Country code (e.g., 'IN' for India, 'US' for United States)",
            },
            category: {
              type: "string",
              enum: ["marketing", "utility", "authentication", "service"],
              description: "Message category for pricing lookup",
            },
          },
        },
      },
      {
        name: "get_template",
        description: "Get a pre-approved WhatsApp message template by category and industry",
        inputSchema: {
          type: "object",
          properties: {
            category: {
              type: "string",
              enum: ["marketing", "utility", "authentication"],
              description: "Template category",
            },
            industry: {
              type: "string",
              description: "Industry type (e.g., 'retail', 'real_estate', 'healthcare')",
            },
          },
        },
      },
      {
        name: "calculate_cost",
        description: "Calculate monthly WhatsApp messaging costs based on volume",
        inputSchema: {
          type: "object",
          properties: {
            country: {
              type: "string",
              description: "Country code",
            },
            monthlyMessages: {
              type: "number",
              description: "Expected monthly message volume",
            },
            category: {
              type: "string",
              enum: ["marketing", "utility", "authentication", "service"],
              description: "Primary message category",
            },
          },
          required: ["country", "monthlyMessages"],
        },
      },
      {
        name: "check_coexistence",
        description: "Check if WhatsApp Coexistence mode is available for a given phone number",
        inputSchema: {
          type: "object",
          properties: {
            countryCode: {
              type: "string",
              description: "Country code for the phone number",
            },
          },
          required: ["countryCode"],
        },
      },
      {
        name: "get_blog_content",
        description: "Retrieve blog articles about WhatsApp API and ERP integration",
        inputSchema: {
          type: "object",
          properties: {
            slug: {
              type: "string",
              description: "Blog post slug (optional, returns all posts if not provided)",
            },
            category: {
              type: "string",
              description: "Filter by category (e.g., 'WhatsApp API', 'ERP Integration')",
            },
          },
        },
      },
    ],
    resources: [
      {
        uri: "whats91://templates",
        name: "WhatsApp Message Templates",
        description: "Pre-approved message templates for marketing, utility, and authentication",
        mimeType: "application/json",
      },
      {
        uri: "whats91://pricing",
        name: "WhatsApp API Pricing",
        description: "Current pricing by country and message category",
        mimeType: "application/json",
      },
      {
        uri: "whats91://coexistence-guide",
        name: "WhatsApp Coexistence Guide",
        description: "Implementation guide for using both Business App and Cloud API",
        mimeType: "text/markdown",
      },
    ],
    links: {
      documentation: "https://whats91.com/llms.txt",
      apiDocs: "https://whats91.com/api/md/tools",
      sitemap: "https://whats91.com/sitemap.xml",
    },
  };

  return NextResponse.json(mcpCapabilities, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
