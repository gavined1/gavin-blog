# 🎯 Centralized Configuration Guide

## 📁 One File to Rule Them All

**Edit everything about your blog in one place: `src/config/site-config.ts`**

This file contains all your site settings, content, images, social links, and more. No more hunting through multiple files!

## 🚀 Quick Start

1. **Open** `src/config/site-config.ts`
2. **Edit** the values you want to change
3. **Save** the file
4. **Done!** Your changes will appear everywhere on your site

## 📋 What You Can Edit

### 🏠 Basic Site Information

```typescript
title: "Your Amazing Blog",                    // Your blog name
description: "A modern personal blog...",      // Site description
url: "https://yourblog.com",                   // Your domain
language: "en-US",                             // Site language
```

### 👤 Author Information

```typescript
author: {
  name: "Your Name",                           // Your name
  bio: "Full-stack developer...",              // Your bio
  avatar: "/images/avatar.jpg",                // Your profile picture
  location: "San Francisco, CA",               // Your location (optional)
  social: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    website: "https://yourwebsite.com",
    email: "hello@yourblog.com",
    youtube: "https://youtube.com/@yourusername",    // Optional
    instagram: "https://instagram.com/yourusername", // Optional
  },
},
```

### 🔗 Social Media Links

```typescript
social: {
  twitter: "https://twitter.com/yourusername",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  youtube: "https://youtube.com/@yourusername",      // Optional
  instagram: "https://instagram.com/yourusername",   // Optional
},
```

### 🖼️ Images & Assets

```typescript
images: {
  logo: "/images/logo.png",                    // Your site logo
  favicon: "/favicon.ico",                     // Favicon
  ogImage: "/images/og-image.jpg",             // Default social sharing image (1200x630px)
  avatar: "/images/avatar.jpg",                // Your profile picture
  appleTouchIcon: "/apple-touch-icon.png",     // Apple touch icon
  icon192: "/icon-192.png",                    // PWA icon 192x192
  icon512: "/icon-512.png",                    // PWA icon 512x512
},
```

### 📱 PWA Manifest Settings

```typescript
manifest: {
  name: "Your Amazing Blog",                   // App name
  shortName: "YourBlog",                       // Short app name
  description: "A modern personal blog...",    // App description
  startUrl: "/",                               // Start URL
  display: "standalone",                       // Display mode
  backgroundColor: "#ffffff",                  // Background color
  themeColor: "#000000",                       // Theme color
  orientation: "portrait",                     // Orientation
},
```

### 🧭 Navigation

```typescript
navigation: {
  main: [                                      // Main navigation menu
    { name: "Home", href: "/", description: "Welcome to my blog" },
    { name: "Blog", href: "/posts", description: "Read my latest posts" },
    { name: "About", href: "/about", description: "Learn more about me" },
    { name: "Contact", href: "/contact", description: "Get in touch" },
  ],
  footer: {
    quickLinks: [                              // Footer quick links
      { name: "Home", href: "/" },
      { name: "Blog", href: "/posts" },
      // ... more links
    ],
    legal: [                                   // Legal links
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      // ... more legal links
    ],
  },
},
```

### 📄 Content Settings

```typescript
content: {
  postsPerPage: 6,                             // Posts per page
  excerptLength: 160,                          // Excerpt length
  readingTimeWpm: 200,                         // Reading speed (words per minute)
  enableComments: true,                        // Enable comments
  enableNewsletter: true,                      // Enable newsletter
  enableRelatedPosts: true,                    // Enable related posts
  enableTableOfContents: true,                 // Enable table of contents
},
```

### 🎨 Theme & Design

```typescript
theme: {
  primaryColor: "#000000",                     // Primary color
  secondaryColor: "#6b7280",                   // Secondary color
  accentColor: "#3b82f6",                     // Accent color
  fontFamily: {
    sans: "Inter, system-ui, sans-serif",      // Sans-serif font
    mono: "JetBrains Mono, monospace",         // Monospace font
  },
},
```

### 📧 Contact Information

```typescript
contact: {
  email: "hello@yourblog.com",                 // Contact email
  phone: "+1 (555) 123-4567",                 // Phone number (optional)
  address: "123 Main St, San Francisco, CA 94105", // Address (optional)
  formAction: "https://formspree.io/f/your-form-id", // Contact form action (optional)
},
```

### 📬 Newsletter Settings

```typescript
newsletter: {
  enabled: true,                               // Enable newsletter
  title: "Stay Updated",                       // Newsletter title
  description: "Get the latest posts...",      // Newsletter description
  placeholder: "Enter your email address",     // Input placeholder
  buttonText: "Subscribe",                     // Button text
  actionUrl: "https://your-newsletter-service.com/subscribe", // Action URL (optional)
},
```

## 🖼️ Image Setup

### Required Images

Create these images and place them in the `public/` directory:

1. **`/images/avatar.jpg`** - Your profile picture (recommended: 400x400px)
2. **`/images/og-image.jpg`** - Default social sharing image (1200x630px)
3. **`/images/logo.png`** - Your site logo (recommended: 200x200px)
4. **`/favicon.ico`** - Favicon (16x16px or 32x32px)
5. **`/apple-touch-icon.png`** - Apple touch icon (180x180px)
6. **`/icon-192.png`** - PWA icon (192x192px)
7. **`/icon-512.png`** - PWA icon (512x512px)

### Blog Post Images

For each blog post, add a cover image in the `public/images/` directory and reference it in the post's frontmatter:

```yaml
---
title: "My Amazing Post"
image: "/images/my-post-cover.jpg"
---
```

## 🔧 Environment Variables

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SITE_URL=https://yourblog.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_GSC_ID=your-google-search-console-id
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id
```

## 📝 Blog Posts

### Creating New Posts

1. Create a new `.mdx` file in the `posts/` directory
2. Add frontmatter at the top:

```yaml
---
title: "Your Post Title"
description: "A compelling description of your post"
keywords: ["keyword1", "keyword2", "keyword3"]
publishDate: "2024-01-01"
lastModified: "2024-01-01"
author: "Your Name"
image: "/images/your-post-cover.jpg"
tags: ["tag1", "tag2", "tag3"]
excerpt: "A short summary of your post"
---
```

3. Write your content in Markdown/MDX below the frontmatter

### Post Frontmatter Fields

- **`title`** - Post title (required)
- **`description`** - Meta description (required)
- **`keywords`** - SEO keywords (array)
- **`publishDate`** - Publication date (YYYY-MM-DD)
- **`lastModified`** - Last modified date (YYYY-MM-DD)
- **`author`** - Author name (required)
- **`image`** - Cover image path (optional)
- **`tags`** - Post tags (array)
- **`excerpt`** - Post excerpt (optional, auto-generated if not provided)

## 🎯 Pro Tips

1. **Keep it organized**: Use descriptive names for your images and files
2. **Optimize images**: Use WebP or AVIF format when possible
3. **Test your changes**: Run `pnpm dev` to see your changes in real-time
4. **SEO matters**: Fill in all the SEO fields for better search rankings
5. **Social sharing**: Make sure your og-image looks good on social media
6. **Mobile first**: Test your site on mobile devices

## 🚨 Important Notes

- **Don't delete** the `siteConfig` object structure
- **Keep the types** - they help with autocomplete and error checking
- **Image paths** should start with `/` (e.g., `/images/avatar.jpg`)
- **URLs** should include the full protocol (e.g., `https://yourblog.com`)
- **Social links** are optional - set to `undefined` or remove the property if not needed

## 🆘 Need Help?

If you need to add new fields or modify the structure:

1. Update the `SiteConfig` interface in `src/config/site-config.ts`
2. Update the `siteConfig` object with your new fields
3. Use the new fields in your components

That's it! Your blog is now fully customizable from one central location. 🎉
