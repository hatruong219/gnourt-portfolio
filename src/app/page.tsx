import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts, projects } from "@/content";
import { getPublishedPosts, getPublishedProjects } from "@/lib/velite";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/blog/PostCard";
import { ProjectCard } from "@/components/blog/ProjectCard";

export default function Home() {
  const recentPosts = getPublishedPosts(posts).slice(0, 3);
  const featuredProjects = getPublishedProjects(projects).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="container px-4 mx-auto max-w-4xl py-24 md:py-32">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-primary">{siteConfig.author.brandName}</span>
          </h1>
          <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
            A developer passionate about building things for the web. I write
            about web development, share my projects, and document my learning
            journey.
          </p>
          <div className="flex gap-4 mt-4">
            <Button asChild>
              <Link href="/blog">
                Read Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="container px-4 mx-auto max-w-4xl py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
            <Button variant="ghost" asChild>
              <Link href="/blog">
                View all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="container px-4 mx-auto max-w-4xl py-12 pb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <Button variant="ghost" asChild>
              <Link href="/projects">
                View all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
