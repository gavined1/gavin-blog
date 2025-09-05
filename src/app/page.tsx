import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";
import { generateStructuredData } from "@/lib/seo";

export default function Home() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);

  const structuredData = generateStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A modern personal blog built with Next.js 15, TypeScript, and MDX
            with advanced SEO optimization. Sharing insights about web
            development, technology, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/posts"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
            >
              Read Latest Posts
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground border border-border rounded-md hover:bg-accent transition-colors"
            >
              Learn More About Me
            </Link>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Featured Post
            </h2>
            <PostCard post={featuredPost} featured priority />
          </section>
        )}

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">
                Recent Posts
              </h2>
              <Link
                href="/posts"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                View all posts →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Get notified when I publish new posts about web development and
              technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
