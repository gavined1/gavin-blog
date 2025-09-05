/**
 * 🎯 CENTRALIZED SITE CONFIGURATION
 *
 * Edit everything about your blog in this single file!
 * This includes: site info, author details, social links, images, colors, and more.
 */

export interface SiteConfig {
  // Basic Site Information
  title: string;
  description: string;
  url: string;
  language: string;

  // Author Information
  author: {
    name: string;
    bio: string;
    avatar: string;
    location?: string;
    social: {
      twitter?: string;
      github?: string;
      linkedin?: string;
      website?: string;
      email?: string;
      youtube?: string;
      instagram?: string;
    };
  };

  // Social Media Links (for footer, etc.)
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    youtube?: string;
    instagram?: string;
  };

  // Analytics & SEO
  analytics: {
    googleAnalyticsId?: string;
    googleSearchConsoleId?: string;
    hotjarId?: string;
  };

  // Images & Assets
  images: {
    logo: string;
    favicon: string;
    ogImage: string;
    avatar: string;
    appleTouchIcon: string;
    icon192: string;
    icon512: string;
  };

  // PWA Manifest Settings
  manifest: {
    name: string;
    shortName: string;
    description: string;
    startUrl: string;
    display: "fullscreen" | "standalone" | "minimal-ui" | "browser";
    backgroundColor: string;
    themeColor: string;
    orientation: "portrait" | "landscape" | "any";
  };

  // Navigation
  navigation: {
    main: Array<{
      name: string;
      href: string;
      description?: string;
    }>;
    footer: {
      quickLinks: Array<{
        name: string;
        href: string;
      }>;
      legal: Array<{
        name: string;
        href: string;
      }>;
    };
  };

  // Content Settings
  content: {
    postsPerPage: number;
    excerptLength: number;
    readingTimeWpm: number;
    enableComments: boolean;
    enableNewsletter: boolean;
    enableRelatedPosts: boolean;
    enableTableOfContents: boolean;
  };

  // Theme & Design
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    fontFamily: {
      sans: string;
      mono: string;
    };
  };

  // Contact Information
  contact: {
    email: string;
    phone?: string;
    address?: string;
    formAction?: string;
  };

  // Newsletter Settings
  newsletter: {
    enabled: boolean;
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
    actionUrl?: string;
  };
}

// 🎯 EDIT EVERYTHING HERE - This is your one-stop configuration!
export const siteConfig: SiteConfig = {
  // 📝 BASIC SITE INFORMATION
  title: "Hello",
  description:
    "A modern personal blog built with Next.js 15, TypeScript, and MDX with advanced SEO optimization. Share your thoughts, tutorials, and insights about web development.",
  url: "https://yourblog.com", // Change this to your actual domain
  language: "en-US",

  // 👤 AUTHOR INFORMATION
  author: {
    name: "Gavin Ed",
    bio: "Full-stack developer passionate about modern web technologies, SEO optimization, and creating amazing user experiences. I love sharing knowledge through writing and building innovative solutions.",
    avatar: "/images/avatar.jpg",
    location: "San Francisco, CA", // Optional
    social: {
      twitter: "https://twitter.com/yourusername",
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      website: "https://yourwebsite.com",
      email: "hello@yourblog.com",
      youtube: "https://youtube.com/@yourusername", // Optional
      instagram: "https://instagram.com/yourusername", // Optional
    },
  },

  // 🔗 SOCIAL MEDIA LINKS (for footer, sharing, etc.)
  social: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    youtube: "https://youtube.com/@yourusername", // Optional
    instagram: "https://instagram.com/yourusername", // Optional
  },

  // 📊 ANALYTICS & SEO
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID, // Set in .env.local
    googleSearchConsoleId: process.env.NEXT_PUBLIC_GSC_ID, // Set in .env.local
    hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID, // Optional
  },

  // 🖼️ IMAGES & ASSETS
  images: {
    logo: "/images/logo.png", // Your site logo
    favicon: "/favicon.ico",
    ogImage: "/images/og-image.jpg", // Default social sharing image (1200x630px)
    avatar: "/images/avatar.jpg", // Your profile picture
    appleTouchIcon: "/apple-touch-icon.png",
    icon192: "/icon-192.png", // PWA icon 192x192
    icon512: "/icon-512.png", // PWA icon 512x512
  },

  // 📱 PWA MANIFEST SETTINGS
  manifest: {
    name: "Gavin's Blog",
    shortName: "Gavin",
    description: "A modern personal blog with amazing content",
    startUrl: "/",
    display: "standalone",
    backgroundColor: "#ffffff",
    themeColor: "#000000",
    orientation: "portrait",
  },

  // 🧭 NAVIGATION
  navigation: {
    main: [
      { name: "Home", href: "/", description: "Welcome to my blog" },
      { name: "Blog", href: "/posts", description: "Read my latest posts" },
      { name: "About", href: "/about", description: "Learn more about me" },
      { name: "Contact", href: "/contact", description: "Get in touch" },
    ],
    footer: {
      quickLinks: [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/posts" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
      legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  },

  // 📄 CONTENT SETTINGS
  content: {
    postsPerPage: 6,
    excerptLength: 160,
    readingTimeWpm: 200, // Words per minute for reading time calculation
    enableComments: true,
    enableNewsletter: true,
    enableRelatedPosts: true,
    enableTableOfContents: true,
  },

  // 🎨 THEME & DESIGN
  theme: {
    primaryColor: "#000000",
    secondaryColor: "#6b7280",
    accentColor: "#3b82f6",
    fontFamily: {
      sans: "Inter, system-ui, sans-serif",
      mono: "JetBrains Mono, monospace",
    },
  },

  // 📧 CONTACT INFORMATION
  contact: {
    email: "hello@yourblog.com",
    phone: "+1 (555) 123-4567", // Optional
    address: "123 Main St, San Francisco, CA 94105", // Optional
    formAction: "https://formspree.io/f/your-form-id", // Optional - for contact form
  },

  // 📬 NEWSLETTER SETTINGS
  newsletter: {
    enabled: true,
    title: "Stay Updated",
    description:
      "Get the latest posts and updates delivered straight to your inbox.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
    actionUrl: "https://your-newsletter-service.com/subscribe", // Optional
  },
};

// 🎯 QUICK ACCESS HELPERS
export const getImageUrl = (imagePath: string) => {
  return imagePath.startsWith("http")
    ? imagePath
    : `${siteConfig.url}${imagePath}`;
};

export const getSocialUrl = (platform: keyof SiteConfig["social"]) => {
  return siteConfig.social[platform] || "#";
};

export const getAuthorSocialUrl = (
  platform: keyof SiteConfig["author"]["social"]
) => {
  return siteConfig.author.social[platform] || "#";
};
