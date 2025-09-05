import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "@/lib/mdx";
import { generatePostMetadata, generateStructuredData } from "@/lib/seo";
import { formatDate, getReadingTimeText } from "@/lib/utils";
import { Breadcrumbs } from "@/components/blog/breadcrumbs";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { RelatedPosts } from "@/components/blog/related-posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return generatePostMetadata(post);
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);
  const structuredData = generateStructuredData(post);

  const breadcrumbItems = [
    { name: "Blog", url: "/posts" },
    { name: post.title, url: `/posts/${post.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Back Button */}
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishDate}>
                  {formatDate(post.publishDate)}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{getReadingTimeText(post.readingTime)}</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/posts?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Featured Image */}
            {post.image && (
              <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <article className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <MDXRemote source={post.content} components={mdxComponents} />
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <TableOfContents content={post.content} />
            </aside>
          </div>

          {/* Related Posts */}
          <RelatedPosts posts={relatedPosts} currentPostSlug={post.slug} />
        </div>
      </div>
    </>
  );
}
