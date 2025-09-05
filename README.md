# Personal Blog with Next.js 15

A modern, SEO-optimized personal blog built with Next.js 15, TypeScript, Tailwind CSS, and MDX. Features advanced SEO optimization, dark/light mode, and excellent performance.

## ✨ Features

### 🚀 Next.js 15 Features

- **App Router** with latest Next.js 15 optimizations
- **Static Site Generation (SSG)** for optimal performance
- **Enhanced Image Optimization** with AVIF/WebP support
- **Improved Core Web Vitals** with Next.js 15 improvements
- **TypeScript** integration with latest features

### 🎨 Design & UX

- **Dark/Light Mode** toggle with system preference detection
- **Responsive Design** mobile-first approach
- **Modern UI** with Tailwind CSS
- **Accessibility** WCAG compliant
- **Smooth Animations** and transitions

### 📝 Content Management

- **MDX Support** for rich content with React components
- **File-based Routing** for blog posts
- **Frontmatter** support with SEO fields
- **Table of Contents** auto-generation
- **Related Posts** based on tags
- **Reading Time** calculation

### 🔍 Advanced SEO

- **Structured Data** (JSON-LD) for articles, person, and website
- **Open Graph** and Twitter Card meta tags
- **XML Sitemap** auto-generation
- **Robots.txt** configuration
- **Canonical URLs** for all pages
- **Breadcrumb Navigation** with structured data
- **Core Web Vitals** optimization

### 📊 Analytics Ready

- **Google Analytics 4** integration
- **Google Search Console** verification
- **Performance Monitoring** setup

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd blog
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your values:

   ```env
   NEXT_PUBLIC_SITE_URL=https://yourblog.com
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   NEXT_PUBLIC_GSC_ID=your-google-search-console-id
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Creating Blog Posts

1. **Create a new MDX file** in the `posts/` directory
2. **Add frontmatter** with required fields:

```yaml
---
title: "Your Post Title"
description: "Compelling meta description under 160 chars"
keywords: ["keyword1", "keyword2", "keyword3"]
publishDate: "2024-01-15"
lastModified: "2024-01-15"
author: "Your Name"
image: "/images/post-cover.jpg"
tags: ["tag1", "tag2"]
excerpt: "Short excerpt for previews"
---
```

3. **Write your content** using Markdown/MDX syntax
4. **Save the file** - it will automatically appear in your blog

### Frontmatter Fields

| Field          | Required | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `title`        | ✅       | Post title                                      |
| `description`  | ✅       | Meta description (max 160 chars)                |
| `keywords`     | ✅       | Array of keywords                               |
| `publishDate`  | ✅       | Publication date (YYYY-MM-DD)                   |
| `lastModified` | ❌       | Last modification date                          |
| `author`       | ✅       | Author name                                     |
| `image`        | ❌       | Featured image path                             |
| `tags`         | ✅       | Array of tags                                   |
| `excerpt`      | ❌       | Custom excerpt (auto-generated if not provided) |

## 🎨 Customization

### Site Configuration

Update `src/lib/seo.ts` to customize:

- Site title and description
- Author information
- Social media links
- Analytics configuration

### Styling

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Components**: Update components in `src/components/`
- **Layout**: Modify layouts in `src/app/`

### SEO Settings

- **Metadata**: Update `src/lib/seo.ts`
- **Structured Data**: Modify schema in SEO utilities
- **Sitemap**: Customize `src/app/sitemap.ts`

## 📊 Performance

This blog is optimized for performance with:

- **Static Site Generation** for fast loading
- **Image Optimization** with Next.js Image component
- **Code Splitting** and lazy loading
- **Font Optimization** with next/font
- **CSS Optimization** with Tailwind CSS
- **Bundle Analysis** with @next/bundle-analyzer

### Core Web Vitals

- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - automatic deployments on push

### Other Platforms

- **Netlify**: Works with static export
- **AWS**: Use with AWS Amplify
- **Docker**: Containerize with provided Dockerfile

## 📈 SEO Features

### Automatic SEO

- ✅ XML Sitemap generation
- ✅ Robots.txt configuration
- ✅ Meta tags for all pages
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Canonical URLs
- ✅ Breadcrumb navigation

### Manual SEO Tasks

- 🔍 Submit sitemap to Google Search Console
- 📊 Set up Google Analytics
- 🔗 Build quality backlinks
- 📝 Create high-quality content
- 🏷️ Use relevant keywords naturally

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Analysis
pnpm analyze      # Analyze bundle size
```

### Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── posts/          # Blog posts pages
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── blog/          # Blog-specific components
│   ├── header.tsx     # Site header
│   └── footer.tsx     # Site footer
├── lib/               # Utility functions
│   ├── mdx.ts         # MDX utilities
│   ├── seo.ts         # SEO utilities
│   └── utils.ts       # General utilities
├── types/             # TypeScript types
└── contexts/          # React contexts
```

## 📚 Resources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [SEO Best Practices](https://developers.google.com/search/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- MDX team for the content solution
- All open source contributors

---

**Happy Blogging! 🎉**
