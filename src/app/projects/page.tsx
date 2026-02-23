import type { Metadata } from "next";
import { projects } from "@/content";
import { getPublishedProjects } from "@/lib/velite";
import { ProjectCard } from "@/components/blog/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Check out the projects I've been working on.",
};

export default function ProjectsPage() {
  const publishedProjects = getPublishedProjects(projects);

  return (
    <section className="container px-4 mx-auto max-w-4xl py-16 md:py-24">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground">
            A collection of projects I&apos;ve built and contributed to.
          </p>
        </div>

        {publishedProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {publishedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No projects published yet.</p>
        )}
      </div>
    </section>
  );
}
