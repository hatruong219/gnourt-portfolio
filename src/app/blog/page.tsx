import { PostCard } from "@/components/blog/PostCard";
import { posts } from "@/content";
import { getPublishedPosts } from "@/lib/velite";
import { PenLine } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, tutorials, and insights about backend engineering and cloud development.",
};

export default function BlogPage() {
  const publishedPosts = getPublishedPosts(posts);

  return (
    <section className="container px-4 mx-auto max-w-6xl py-16 md:py-24">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts, tutorials, and insights about backend engineering and cloud development.
          </p>
        </div>

        {publishedPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {publishedPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
              <PenLine className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="font-medium">Coming soon</p>
              <p className="text-sm text-muted-foreground">Writing in progress — stay tuned.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
