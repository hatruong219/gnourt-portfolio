/**
 * Utility to access Velite-generated content with type safety.
 * Velite outputs content to .velite/ directory during build.
 */

import type { Post, Project } from "@/content";

// Re-export types
export type { Post, Project };

/**
 * Sort posts by date (newest first)
 */
export function sortPostsByDate(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get only published posts, sorted by date
 */
export function getPublishedPosts(posts: Post[]): Post[] {
  return sortPostsByDate(posts.filter((post) => post.published));
}

/**
 * Get only published projects, sorted by date
 */
export function getPublishedProjects(projects: Project[]): Project[] {
  return [...projects]
    .filter((project) => project.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Format a date string for display
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
