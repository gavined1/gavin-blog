import { getAllPosts, getAllTags } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";
import { generateStructuredData } from "@/lib/seo";
import Link from "next/link";
import { Tag } from "lucide-react";

export const metadata = {
  title: "Blog Posts",
  description:
    "Explore all blog posts about web development, technology, and more.",
};

export default function PostsPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  const structuredData = generateStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog Posts
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover insights, tutorials, and thoughts about web development,
              technology, and more.
            </p>
          </div>

          {/* Tags Filter */}
          {tags.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Tag className="h-5 w-5" />
                Filter by Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/posts"
                  className="px-3 py-1 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                >
                  All Posts
                </Link>
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/posts?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <PostCard key={post.slug} post={post} priority={index === 0} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                No posts found
              </h2>
              <p className="text-muted-foreground">
                Check back later for new content!
              </p>
            </div>
          )}

          {/* Pagination could be added here for future enhancement */}
        </div>
      </div>
    </>
  );
}
