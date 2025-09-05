import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Tag } from "lucide-react";
import { BlogPost } from "@/types/blog";
import { formatDate, getReadingTimeText } from "@/lib/utils";

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
  priority?: boolean;
}

export function PostCard({
  post,
  featured = false,
  priority = false,
}: PostCardProps) {
  return (
    <article className={`group relative ${featured ? "md:col-span-2" : ""}`}>
      <Link
        href={`/posts/${post.slug}`}
        className="block h-full rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
      >
        {post.image && (
          <div
            className={`relative overflow-hidden rounded-t-lg ${
              featured ? "h-64" : "h-48"
            }`}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority={priority}
              className="object-cover transition-transform group-hover:scale-105"
              sizes={
                featured
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 100vw, 33vw"
              }
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.publishDate}>
                {formatDate(post.publishDate)}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{getReadingTimeText(post.readingTime)}</span>
            </div>
          </div>

          <h2
            className={`font-semibold text-foreground group-hover:text-primary transition-colors mb-2 ${
              featured ? "text-2xl" : "text-xl"
            }`}
          >
            {post.title}
          </h2>

          <p className="text-muted-foreground mb-4 line-clamp-3">
            {post.excerpt || post.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
