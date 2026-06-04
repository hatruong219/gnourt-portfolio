"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function IconGithub({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden={true}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden={true}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const skillCategories: {
  nameKey: TranslationKey;
  color: string;
  badgeColor: string;
  items: string[];
}[] = [
  {
    nameKey: "skillCatProgramming",
    color: "border-l-blue-500",
    badgeColor: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20",
    items: ["Node.js", "NestJS", "Express.js", "TypeScript", "Ruby on Rails"],
  },
  {
    nameKey: "skillCatDatabase",
    color: "border-l-emerald-500",
    badgeColor:
      "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20",
    items: ["PostgreSQL", "MySQL", "Firebase", "Firestore"],
  },
  {
    nameKey: "skillCatApi",
    color: "border-l-violet-500",
    badgeColor: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20",
    items: ["REST API", "GraphQL", "Hasura"],
  },
  {
    nameKey: "skillCatCloud",
    color: "border-l-orange-500",
    badgeColor: "bg-orange-500/10 text-orange-700 dark:text-orange-300 border border-orange-500/20",
    items: ["AWS", "GCP", "Cloud Run", "Cloud Build", "BigQuery", "CI/CD"],
  },
  {
    nameKey: "skillCatPayment",
    color: "border-l-yellow-500",
    badgeColor: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border border-yellow-500/20",
    items: ["Stripe", "PayPay", "Fincode", "Senselink"],
  },
  {
    nameKey: "skillCatTools",
    color: "border-l-slate-500",
    badgeColor: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-500/20",
    items: ["Git / GitHub", "Unit Testing", "Agile / Scrum"],
  },
];

const experiences: {
  titleKey: TranslationKey;
  companyKey: TranslationKey;
  periodKey: TranslationKey;
  descKey: TranslationKey;
  current: boolean;
}[] = [
  {
    titleKey: "exp1Title",
    companyKey: "exp1Company",
    periodKey: "exp1Period",
    descKey: "exp1Desc",
    current: true,
  },
  {
    titleKey: "exp2Title",
    companyKey: "exp2Company",
    periodKey: "exp2Period",
    descKey: "exp2Desc",
    current: false,
  },
  {
    titleKey: "exp3Title",
    companyKey: "exp3Company",
    periodKey: "exp3Period",
    descKey: "exp3Desc",
    current: false,
  },
];

const sectionAnim = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.5 },
};

export function HomeContent() {
  const { t } = useLanguage();

  return (
    <div className="container px-4 mx-auto max-w-6xl">
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        {/* Background blobs — kept inside bounds so they don't affect layout */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl dark:bg-primary/8 -z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/8 -z-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between"
        >
          {/* Left: text */}
          <div className="space-y-7 flex-1">
            {/* Available badge */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-700 dark:text-green-400 border border-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                {t("heroAvailable")}
              </span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <p className="text-base text-muted-foreground">{t("heroGreeting")}</p>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl leading-[1.05]">
                Truong Hoang Anh
              </h1>
            </div>

            {/* Title */}
            <div>
              <p className="text-2xl font-semibold text-primary sm:text-3xl">{t("heroTitle")}</p>
              <p className="text-base text-muted-foreground mt-1 font-mono tracking-wide">
                {t("heroSubtitle")}
              </p>
            </div>

            {/* Tagline */}
            <p className="max-w-[520px] text-lg text-muted-foreground leading-relaxed">
              {t("heroTagline")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button asChild size="lg" className="shadow-md">
                <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                  <IconGithub className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                  <IconLinkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={siteConfig.links.email}>
                  <Mail className="mr-2 h-4 w-4" />
                  {siteConfig.author.email}
                </Link>
              </Button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              Da Nang, Vietnam
            </div>
          </div>

          {/* Right: avatar */}
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            {/* Gradient glow ring */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/25 via-blue-500/15 to-violet-500/25 blur-xl"
              />
              <div
                aria-hidden
                className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-primary/40 via-blue-400/30 to-violet-500/40"
              />
              <div className="relative h-56 w-56 md:h-[300px] md:w-[300px]">
                <Image
                  src="/2026-06-02_09-09.png"
                  alt="Truong Hoang Anh"
                  fill
                  className="rounded-[22px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <motion.section {...sectionAnim} className="py-16 border-t">
        <h2 className="text-3xl font-bold tracking-tight mb-6">{t("aboutHeading")}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          {t("aboutContent")}
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section {...sectionAnim} className="py-16 border-t">
        <h2 className="text-3xl font-bold tracking-tight mb-8">{t("skillsHeading")}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.nameKey}
              className={`rounded-lg border bg-card p-4 border-l-4 ${cat.color}`}
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                {t(cat.nameKey)}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${cat.badgeColor}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section {...sectionAnim} className="py-16 border-t">
        <h2 className="text-3xl font-bold tracking-tight mb-10">{t("experienceHeading")}</h2>
        <div className="relative">
          <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
          <div className="space-y-10 pl-8">
            {experiences.map((exp) => (
              <div key={exp.titleKey} className="relative">
                <div
                  className={`absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background ring-1 ${exp.current ? "bg-primary ring-primary" : "bg-muted-foreground ring-muted-foreground"}`}
                />
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold">{t(exp.titleKey)}</h3>
                    {exp.current && (
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary border border-primary/20">
                        {t("expPresent")}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-primary">{t(exp.companyKey)}</p>
                  <p className="text-xs text-muted-foreground">{t(exp.periodKey)}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-0.5">
                    {t(exp.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section {...sectionAnim} className="py-16 border-t">
        <h2 className="text-3xl font-bold tracking-tight mb-8">{t("educationHeading")}</h2>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-base">{t("eduDegree")}</h3>
              <p className="text-sm text-muted-foreground">{t("eduSchool")}</p>
              <p className="text-sm text-muted-foreground">
                {t("eduPeriod")} · {t("eduGpa")}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Quick links */}
      <motion.section {...sectionAnim} className="py-8 border-t">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/projects"
            className="group rounded-lg border bg-card p-5 hover:border-primary/50 hover:bg-accent transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{t("heroCta1")}</p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {t("quickLinksProjectsDesc")}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>
          <Link
            href="/blog"
            className="group rounded-lg border bg-card p-5 hover:border-primary/50 hover:bg-accent transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{t("heroCta2")}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{t("quickLinksBlogDesc")}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section {...sectionAnim} className="py-16 border-t">
        <div className="relative rounded-xl overflow-hidden p-8 md:p-12 text-center space-y-5">
          {/* gradient background */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10"
          />
          <div aria-hidden className="absolute inset-0 border rounded-xl border-primary/10" />
          <div className="relative space-y-5">
            <h2 className="text-3xl font-bold tracking-tight">{t("contactHeading")}</h2>
            <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
              {t("contactDesc")}
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {siteConfig.links.upwork && (
                <Button asChild size="lg">
                  <Link href={siteConfig.links.upwork} target="_blank" rel="noreferrer">
                    {t("contactUpwork")}
                  </Link>
                </Button>
              )}
              <Button asChild size="lg" className="shadow-md">
                <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                  <IconGithub className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                  <IconLinkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={siteConfig.links.email}>
                  <Mail className="mr-2 h-4 w-4" />
                  {siteConfig.author.email}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="pb-16" />
    </div>
  );
}
