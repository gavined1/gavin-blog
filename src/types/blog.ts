export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  publishDate: string;
  lastModified?: string;
  author: string;
  image?: string;
  tags: string[];
  excerpt?: string;
  content: string;
  readingTime: number;
  wordCount: number;
}

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  keywords: string[];
  publishDate: string;
  lastModified?: string;
  author: string;
  image?: string;
  tags: string[];
  excerpt?: string;
}

export interface Author {
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
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  language: string;
  author: Author;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    youtube?: string;
    instagram?: string;
  };
  analytics?: {
    googleAnalyticsId?: string;
    googleSearchConsoleId?: string;
    hotjarId?: string;
  };
  images: {
    logo: string;
    favicon: string;
    ogImage: string;
    avatar: string;
    appleTouchIcon: string;
    icon192: string;
    icon512: string;
  };
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
  content: {
    postsPerPage: number;
    excerptLength: number;
    readingTimeWpm: number;
    enableComments: boolean;
    enableNewsletter: boolean;
    enableRelatedPosts: boolean;
    enableTableOfContents: boolean;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    fontFamily: {
      sans: string;
      mono: string;
    };
  };
  contact: {
    email: string;
    phone?: string;
    address?: string;
    formAction?: string;
  };
  newsletter: {
    enabled: boolean;
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
    actionUrl?: string;
  };
}
