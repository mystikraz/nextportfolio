import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

export default function SEO({
  title = "Rajan Tandukar - Full Stack Developer & Tech Lead",
  description = "Senior Full Stack Developer & Tech Lead specializing in scalable backend systems and modern frontend applications. Expert in ASP.NET Core, Node.js, React, Next.js, and cloud technologies.",
  keywords = [
    "Full Stack Developer",
    "Backend Developer",
    "Tech Lead",
    "ASP.NET Core",
    "Node.js",
    "React",
    "Next.js",
    "Angular",
    "Cloud Architecture"
  ],
  ogImage = "/rajan.jpeg",
  ogUrl = "https://rajantandukar.com",
  canonical
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Rajan Tandukar" />
    </Head>
  );
}
