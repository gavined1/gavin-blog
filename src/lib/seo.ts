import { Metadata } from "next";
import { BlogPost } from "@/types/blog";
import { siteConfig } from "@/config/site-config";

export function generateSiteMetadata(): Metadata {
  return {
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    keywords: ["blog", "nextjs", "typescript", "seo", "web development"],
    authors: [
      { name: siteConfig.author.name, url: siteConfig.author.social.website },
    ],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.title,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      creator: "@yourusername",
      images: ["/images/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: siteConfig.analytics?.googleSearchConsoleId,
    },
  };
}

export function generatePostMetadata(post: BlogPost): Metadata {
  const postUrl = `${siteConfig.url}/posts/${post.slug}`;
  const postImage = post.image
    ? `${siteConfig.url}${post.image}`
    : `${siteConfig.url}/images/og-image.jpg`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author, url: siteConfig.author.social.website }],
    creator: post.author,
    publisher: siteConfig.author.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: postUrl,
      title: post.title,
      description: post.description,
      siteName: siteConfig.title,
      publishedTime: post.publishDate,
      modifiedTime: post.lastModified || post.publishDate,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: postImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@yourusername",
      images: [postImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStructuredData(post?: BlogPost) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      description: siteConfig.author.bio,
      image: `${siteConfig.url}${siteConfig.author.avatar}`,
      url: siteConfig.author.social.website,
      sameAs: Object.values(siteConfig.author.social).filter(Boolean),
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.title,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
  };

  if (post) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      image: post.image
        ? `${siteConfig.url}${post.image}`
        : `${siteConfig.url}/images/og-image.jpg`,
      datePublished: post.publishDate,
      dateModified: post.lastModified || post.publishDate,
      author: {
        "@type": "Person",
        name: post.author,
        url: siteConfig.author.social.website,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.title,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/logo.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/posts/${post.slug}`,
      },
      wordCount: post.wordCount,
      timeRequired: `PT${post.readingTime}M`,
      keywords: post.tags.join(", "),
      articleSection: "Technology",
      inLanguage: "en-US",
    };
  }

  return baseStructuredData;
}

export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export { siteConfig };
