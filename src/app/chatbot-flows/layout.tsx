import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chatbot Flow Library | ERP WhatsApp Automation | Whats91",
  description: "Pre-built chatbot flows for Busy Accounting Software integration. Automate sales invoices, orders, payments, ledgers, and reports with WhatsApp chatbots. 14+ ready-to-use flows.",
  keywords: [
    "chatbot flows",
    "WhatsApp automation",
    "Busy ERP integration",
    "ERP chatbot",
    "WhatsApp bot for accounting",
    "invoice automation",
    "payment reminder chatbot",
    "ledger query bot",
    "Busy Accounting WhatsApp",
    "ERP WhatsApp integration",
    "sales order automation",
    "customer service chatbot",
    "accounts receivable automation",
  ],
  openGraph: {
    title: "Chatbot Flow Library | ERP WhatsApp Automation | Whats91",
    description: "Pre-built chatbot flows for Busy Accounting Software integration. Automate sales invoices, orders, payments, ledgers, and reports with WhatsApp chatbots.",
    url: "https://whats91.com/chatbot-flows",
    siteName: "Whats91",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatbot Flow Library | ERP WhatsApp Automation | Whats91",
    description: "Pre-built chatbot flows for Busy Accounting Software integration. Automate sales invoices, orders, payments, ledgers, and reports.",
  },
  alternates: {
    canonical: "/chatbot-flows",
  },
};

export default function ChatbotFlowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
