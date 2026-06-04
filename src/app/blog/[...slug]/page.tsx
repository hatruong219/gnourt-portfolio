import { MdxContent } from "@/components/blog/MdxContent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { posts } from "@/content";
import { formatDate } from "@/lib/velite";
import { ArrowLeft, Calendar } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string[] }>;
}

async function getPostFromParams(slug: string[]) {
  const slugStr = slug.join("/");
  return posts.find((post) => post.slugAsParams === slugStr);
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostFromParams(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return posts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slugAsParams.split("/"),
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostFromParams(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container px-4 mx-auto max-w-3xl py-16 md:py-24">
      <Button variant="ghost" className="mb-8" asChild>
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        {post.description && <p className="text-xl text-muted-foreground">{post.description}</p>}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <hr className="mb-8" />

      <MdxContent code={post.body} />
    </article>
  );
}
