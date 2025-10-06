import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Rajan Tandukar - Full Stack Developer & Tech Lead",
    template: "%s | Rajan Tandukar"
  },
  description: "Senior Full Stack Developer & Tech Lead specializing in scalable backend systems and modern frontend applications. Expert in ASP.NET Core, Node.js, React, Next.js, Angular, and cloud technologies (AWS, Azure). Building robust, high-performance applications.",
  keywords: [
    "Full Stack Developer",
    "Backend Developer",
    "Tech Lead",
    "ASP.NET Core",
    "Node.js",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Cloud Architecture",
    "AWS",
    "Azure",
    "Microservices",
    "API Development",
    "DevOps",
    "CI/CD",
    "Database Design",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes"
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
    title: "Rajan Tandukar - Full Stack Developer & Tech Lead",
    description: "Senior Full Stack Developer & Tech Lead specializing in scalable backend systems and modern frontend applications. Expert in ASP.NET Core, Node.js, React, Next.js, and cloud technologies.",
    url: 'https://rajantandukar.com', // Update with your actual domain
    siteName: "Rajan Tandukar Portfolio",
    images: [
      {
        url: '/rajan.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rajan Tandukar - Full Stack Developer',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rajan Tandukar - Full Stack Developer & Tech Lead",
    description: "Senior Full Stack Developer & Tech Lead specializing in scalable backend systems and modern frontend applications.",
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
  themeColor: '#0ea5e9',
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
