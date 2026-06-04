# Plan: Portfolio Website Redesign (Job Hunting)

## Approach
Full redesign of 3 pages (Home landing, Blog, Projects) with EN/VI language toggle. Home becomes a server page that passes data to a `"use client"` HomeContent component — keeping SSG + metadata on the server while allowing framer-motion animations and language switching on the client. Language state lives in a LanguageContext with a mount-guard to avoid hydration mismatches.

## Specs
- Home `/` renders as a server component with full metadata, passes data to client HomeContent for animations and i18n
- All text on Home page is bilingual (EN default, VI toggle), switchable without page reload
- Language preference persists to localStorage, but page renders in EN on SSR to avoid hydration mismatch
- `/about` permanently redirects to `/` via next.config.ts (HTTP 301, SEO-correct)
- Blog page shows "Coming soon" when no published posts
- Projects page includes 2 real projects: kana-quiz-popup and portfolio itself
- Framer Motion: Hero uses `animate` (above fold), all other sections use `whileInView` with `viewport={{ once: true }}`
- Phone number NOT committed to source code
- Biome-compatible: named React imports, no unused imports

## Steps

### Config & Setup
- [ ] **`src/config/site.ts`** — Update `author.name` to "Truong Hoang Anh", `brandName` to "Truong Ha", ensure `links.linkedin` is "https://linkedin.com/in/hatruong219". Remove twitter/X link (not relevant for job hunting). Do NOT add phone.
- [ ] **`next.config.ts`** — Add permanent redirect: `{ source: '/about', destination: '/', permanent: true }`. This replaces the about page file approach and gives HTTP 301 for SEO.
- [ ] **`src/config/navigation.ts`** — Remove "About" entry from mainNav. Keep: Home `/`, Blog `/blog`, Projects `/projects`.

### i18n System
- [ ] Create **`src/lib/i18n.ts`** — Nested translations object: `translations = { en: { heroTitle: "...", ... }, vi: { heroTitle: "...", ... } }`. Export `type Lang = 'en' | 'vi'` and `type TranslationKey = keyof typeof translations['en']`. All strings for Home page in both languages (hero, about summary, section headings, skills categories, experience titles, education, contact CTA).
- [ ] Create **`src/contexts/LanguageContext.tsx`** — `"use client"`. State: `lang: Lang` initialized to `'en'`. Mount guard pattern: `mounted` state, set to `true` in `useEffect` which also reads `localStorage.getItem('lang')`. Before mounted, always render with `'en'` to match SSR. Export `useLanguage()` hook returning `{ lang, setLang, t }` where `t = (key: TranslationKey) => translations[lang][key]`.
- [ ] **`src/app/layout.tsx`** — Wrap `{children}` with `<LanguageProvider>`. Note: page-level metadata (title, description) stays in English always — this is correct since primary audience is international clients.

### Home Page Redesign
- [ ] Create **`src/components/home/HomeContent.tsx`** — `"use client"`. Receives `{ posts: Post[], projects: Project[] }` props. Uses `useLanguage()`. Contains all animated sections:
  - **Hero**: `motion.div` with `animate={{ opacity: 1, y: 0 }}` (NOT whileInView — above fold). Name, title, tagline, 3 CTA buttons: GitHub (`hatruong219`), LinkedIn (`hatruong219`), Email (`hatruong219.qb@gmail.com`). No "About Me" button.
  - **About**: `whileInView` fade-in. Professional summary paragraph (EN/VI via `t()`).
  - **Skills**: `whileInView`. 6 categories with colored badges: Programming (Node.js, NestJS, Express.js, TypeScript, Ruby on Rails), Database (PostgreSQL, MySQL, Firebase), API (REST API, GraphQL, Hasura), Cloud & DevOps (AWS, GCP, Cloud Run, Cloud Build, CI/CD), Payment (Stripe, PayPay, Fincode, Senselink), Tools (Git, GitHub, Unit Testing).
  - **Experience**: `whileInView`. Vertical timeline, 3 roles: Backend Team Lead @ Landit (Aug 2024–Present), Backend Team Lead @ Alfalink (Aug 2023–Mar 2025), Backend Developer @ SkillUP LMS (Jun 2022–Aug 2024). Descriptions from Upwork/Fiverr profile copy.
  - **Education**: `whileInView`. VKU card, Bachelor IT 2018–2023, GPA 8.3.
  - **Contact**: `whileInView`. Card with GitHub, LinkedIn, Email links.
- [ ] **`src/app/page.tsx`** — Keep as server component. Remove current hero/posts/projects JSX. Import and render `<HomeContent posts={recentPosts} projects={featuredProjects} />`. Add `export const metadata` for home page SEO.

### Language Toggle in Header
- [ ] **`src/components/layout/Header.tsx`** — Add `LanguageToggle` inline: a small `"use client"` button (or extract to `src/components/layout/LanguageToggle.tsx`) showing "EN | VI" with the active one highlighted. Place next to `ThemeToggle`. Uses `useLanguage()`.

### Footer Update
- [ ] **`src/components/layout/Footer.tsx`** — Update links to use `siteConfig.links` (remove Twitter/X, keep GitHub + LinkedIn). Update copyright text.

### Content Updates
- [ ] **`content/blog/hello-world.mdx`** — Set `published: false`.
- [ ] **`content/blog/getting-started-with-nextjs.mdx`** — Set `published: false`.
- [ ] **`content/projects/personal-portfolio.mdx`** — Update `link` to "https://truongha.com", `github` to "https://github.com/hatruong219". Update description to match real site.
- [ ] Create **`content/projects/kana-quiz-popup.mdx`** — frontmatter: `title`, `description`, `date: 2025-01-01` (estimated), `published: true`, `tags: [japanese, learning, chrome-extension]`, `link: https://study.truongha.com/`, `github: https://github.com/hatruong219/kana-quiz-popup`. Body: brief description of the project.

### Fix generateStaticParams (correctness)
- [ ] **`src/app/blog/[...slug]/page.tsx`** — In `generateStaticParams`, filter to published posts only: `posts.filter(p => p.published).map(...)`.
- [ ] **`src/app/projects/[...slug]/page.tsx`** — Same fix: filter to published projects only.

### About Page
- [ ] **`src/app/about/page.tsx`** — Delete file content (permanent redirect is handled by next.config.ts, this file can be removed or left empty). Since next.config.ts redirect runs before page resolution, the file can simply be deleted.

### Blog Page
- [ ] **`src/app/blog/page.tsx`** — Update empty state message: instead of "No posts published yet.", show a "Coming soon — stay tuned." message with better styling.

---

## Decisions & Risks
- **Server + client split for home page**: Adds one extra component file (`HomeContent.tsx`) but is the only correct approach to keep SSG + metadata + animations coexisting in App Router.
- **Mount guard for i18n**: Users with Vietnamese preference will see a brief flash to English on each hard reload. Acceptable tradeoff vs. hydration errors. Cookie-based approach would fix this but adds complexity not worth it for a portfolio.
- **Page metadata always English**: `generateMetadata` is server-only so cannot react to the client-side language state. For the target audience (international Upwork/Fiverr clients), English metadata is correct.
- **Removing /about page file**: The next.config.ts redirect handles the route. Leaving the file would cause Next.js to use the file first (page takes priority over config redirect for same-origin routes). So the file must be deleted or emptied.
- **Phone number**: Not in source. Can be added as a `<a href="tel:+84705433390">` hardcoded in the Contact section of HomeContent if desired, but should not be in siteConfig committed to git.
- **framer-motion v11 API**: `whileInView` + `viewport={{ once: true }}` is correct API for v11. `useInView` hook is available but `whileInView` prop on `motion.div` is simpler and sufficient here.
- **Biome**: All new client components use named React imports (`import { useState, useContext } from 'react'`), no default `React` import needed with React 19 JSX transform.

---
_Task: Portfolio redesign — home landing page, EN/VI toggle, real projects, framer-motion animations_
_Created: 2026-06-04_
_Critic findings: 12 issues found. Critical fixes: (1) split server page + client HomeContent to preserve metadata/SSG, (2) mount guard in LanguageContext to prevent hydration mismatch, (3) use next.config.ts permanent redirect for /about instead of page-level redirect. Major fixes: (4) filter generateStaticParams to published only, (5) Hero uses animate not whileInView, (6) typed nested i18n structure, (7) noted metadata always-English limitation. Minor fixes: (8) no phone in source, (9) date field in kana-quiz-popup.mdx, (10) named React imports for Biome._
