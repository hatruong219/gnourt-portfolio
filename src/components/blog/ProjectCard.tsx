import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/velite";
import type { Project } from "@/lib/velite";
import { Calendar, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">
          <Link href={`/${project.slug}`}>{project.title}</Link>
        </CardTitle>
        {project.description && (
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4" />
          <time dateTime={project.date}>{formatDate(project.date)}</time>
        </div>
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex gap-2">
          {project.link && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.link} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
