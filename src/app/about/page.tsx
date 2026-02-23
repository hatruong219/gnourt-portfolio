import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.author.name}`,
};

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { category: "Tools", items: ["Git", "VS Code", "Docker", "Vercel"] },
  { category: "Learning", items: ["System Design", "DevOps", "Open Source"] },
];

export default function AboutPage() {
  return (
    <section className="container px-4 mx-auto max-w-4xl py-16 md:py-24">
      <div className="space-y-12">
        {/* Intro */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px]">
            Hi! I&apos;m {siteConfig.author.name}, a passionate developer who loves
            building things for the web. I enjoy creating beautiful, performant,
            and accessible web applications.
          </p>
        </div>

        {/* Story */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">My Story</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              I started my journey in software development with a curiosity for
              how things work on the internet. Over time, that curiosity turned
              into a passion for creating meaningful digital experiences.
            </p>
            <p>
              I believe in writing clean, maintainable code and constantly
              improving my craft. When I&apos;m not coding, you can find me reading
              tech blogs, contributing to open source, or exploring new
              technologies.
            </p>
            <p>
              This website serves as my digital garden where I share my
              thoughts, document my learning process, and showcase the projects
              I&apos;ve worked on.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Skills & Technologies</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-2">
                <h3 className="font-semibold text-lg">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="rounded-lg border bg-card p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="font-medium text-primary hover:underline"
            >
              {siteConfig.author.email}
            </a>
            <span className="text-muted-foreground">|</span>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary hover:underline"
            >
              GitHub
            </a>
            <span className="text-muted-foreground">|</span>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
