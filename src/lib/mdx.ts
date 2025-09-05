import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { BlogPost, BlogPostFrontmatter } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const frontmatter = data as BlogPostFrontmatter;
    const stats = readingTime(content);

    return {
      slug,
      content,
      readingTime: Math.ceil(stats.minutes),
      wordCount: stats.words,
      ...frontmatter,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );

  return posts;
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

export function getRelatedPosts(
  currentPost: BlogPost,
  limit: number = 3
): BlogPost[] {
  const allPosts = getAllPosts();
  const currentTags = currentPost.tags;

  return allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => ({
      post,
      score: post.tags.filter((tag) => currentTags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

export function generateExcerpt(
  content: string,
  maxLength: number = 160
): string {
  const plainText = content
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/[#*`]/g, "") // Remove markdown formatting
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return plainText.substring(0, maxLength).replace(/\s+\S*$/, "") + "...";
}
