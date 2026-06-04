import { MdxContent } from "@/components/blog/MdxContent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/content";
import { formatDate } from "@/lib/velite";
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string[] }>;
}

async function getProjectFromParams(slug: string[]) {
  const slugStr = slug.join("/");
  return projects.find((project) => project.slugAsParams === slugStr);
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectFromParams(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return projects
    .filter((project) => project.published)
    .map((project) => ({
      slug: project.slugAsParams.split("/"),
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectFromParams(slug);

  if (!project || !project.published) {
    notFound();
  }

  return (
    <article className="container px-4 mx-auto max-w-3xl py-16 md:py-24">
      <Button variant="ghost" className="mb-8" asChild>
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>

      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        {project.description && (
          <p className="text-xl text-muted-foreground">{project.description}</p>
        )}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={project.date}>{formatDate(project.date)}</time>
          </div>
        </div>
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex gap-3">
          {project.link && (
            <Button variant="outline" asChild>
              <Link href={project.link} target="_blank" rel="noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.github && (
            <Button variant="outline" asChild>
              <Link href={project.github} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Link>
            </Button>
          )}
        </div>
      </div>

      <hr className="mb-8" />

      <MdxContent code={project.body} />
    </article>
  );
}
