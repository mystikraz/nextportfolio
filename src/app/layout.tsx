import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Rajan Tandukar - Tech Lead, Principal Engineer & AI Engineering Expert",
    template: "%s | Rajan Tandukar"
  },
  description: "Tech Lead & Principal Engineer with 13+ years expertise in full-stack development, microservices, cloud architecture, AI engineering (RAG, vector databases, LangChain, semantic search), and team leadership. Specialist in ASP.NET Core, Node.js, React, Next.js, AWS, Azure, and LLM integration.",
  keywords: [
    "Tech Lead",
    "Principal Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "Senior Developer",
    "AI Engineer",
    "LLM Integration",
    "LangChain",
    "LangSmith",
    "Agents",
    "Tool Calling",
    "Function Calling",
    "Agentic Workflows",
    "Model Orchestration",
    "RAG",
    "Retrieval Augmented Generation",
    "Vector Database",
    "Semantic Search",
    "Hybrid Search",
    "Embeddings",
    "Prompt Engineering",
    "Large Language Models",
    "OpenAI API",
    "Claude API",
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Jupyter",
    "FastAPI",
    "Flask",
    "Pinecone",
    "Weaviate",
    "Milvus",
    "ASP.NET Core",
    "Node.js",
    "Express.js",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "System Architecture",
    "Microservices Architecture",
    "Cloud Architecture",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "DevOps",
    "CI/CD Pipeline",
    "GitHub Actions",
    "Azure DevOps",
    "Infrastructure as Code",
    "Terraform",
    "Database Design",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "ElasticSearch",
    "API Development",
    "RESTful API",
    "GraphQL",
    "Software Architecture",
    "Clean Architecture",
    "Domain Driven Design",
    "CQRS",
    "Event Sourcing",
    "Team Leadership",
    "Engineering Manager",
    "Mentoring",
    "Code Review",
    "Technical Strategy",
    "Roadmap Planning",
    "Agile",
    "Scrum",
    "Software Engineering",
    "Enterprise Software",
    "SaaS",
    "Multi-tenant Architecture",
    "Security",
    "Performance Optimization",
    "Scalability",
    "High Availability",
    "Distributed Systems"
  ],
  authors: [{ name: "Rajan Tandukar" }],
  creator: "Rajan Tandukar",
  publisher: "Rajan Tandukar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rajantandukar.com'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Rajan Tandukar - Tech Lead, Principal Engineer & AI Engineering Expert",
    description: "Tech Lead & Principal Engineer with 13+ years expertise in full-stack development, microservices, cloud architecture, and AI engineering. Expert in RAG, vector databases, and LLM integration.",
    url: 'https://rajantandukar.com', // Update with your actual domain
    siteName: "Rajan Tandukar Portfolio",
    images: [
      {
        url: '/rajan.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rajan Tandukar - Tech Lead, Principal Engineer & AI Engineering Expert',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rajan Tandukar - Tech Lead & AI Engineering Expert",
    description: "Tech Lead & Principal Engineer with 13+ years in full-stack, microservices, cloud architecture, and AI engineering with RAG and vector databases.",
    images: ['/rajan.jpeg'],
    creator: '@rajantandukar', // Update with your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#39ff14', // Neon green theme
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/avatar-image@2x.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
