import type { Metadata } from "next";
import { posts } from "@/content";
import { getPublishedPosts } from "@/lib/velite";
import { PostCard } from "@/components/blog/PostCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my latest articles about web development and technology.",
};

export default function BlogPage() {
  const publishedPosts = getPublishedPosts(posts);

  return (
    <section className="container px-4 mx-auto max-w-4xl py-16 md:py-24">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts, tutorials, and insights about web development.
          </p>
        </div>

        {publishedPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {publishedPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No posts published yet.</p>
        )}
      </div>
    </section>
  );
}
