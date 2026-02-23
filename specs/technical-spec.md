# Đặc tả Kỹ thuật - Personal Website với Next.js

## Tech Stack Được Chọn

### Core Framework
- **Next.js 15+** (App Router) - React framework với SSR/SSG
- **TypeScript** - Type safety
- **React 19** - UI library

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Content Management (Context Engineering)
- **Contentlayer** - Content SDK cho Next.js, transform MDX → type-safe data
- **MDX** - Markdown + JSX components
- **rehype/remark plugins** - Markdown processing

### Developer Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files

### Deployment & Analytics
- **Vercel** - Hosting platform
- **Vercel Analytics** - Web analytics
- **Vercel Speed Insights** - Performance monitoring

---

## Context Engineering Approach

### 1. Tại sao Context Engineering quan trọng?

Context Engineering là cách tổ chức code và content để:
- ✅ AI/LLM có thể hiểu và làm việc hiệu quả
- ✅ Code dễ maintain và scale
- ✅ Documentation tự động và rõ ràng
- ✅ Collaboration tốt hơn

### 2. Nguyên tắc Context Engineering cho dự án này

#### 2.1 Structured Content
```
content/
├── blog/
│   ├── post-1.mdx
│   ├── post-2.mdx
│   └── _schema.ts          # Schema definition
├── projects/
│   ├── project-1.mdx
│   └── _schema.ts
└── pages/
    ├── about.mdx
    └── _schema.ts
```

#### 2.2 Type-Safe Content với Contentlayer
```typescript
// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    published: { type: 'boolean', default: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('blog/', ''),
    },
    readingTime: {
      type: 'number',
      resolve: (doc) => {
        const wordsPerMinute = 200
        const words = doc.body.raw.split(/\s+/g).length
        return Math.ceil(words / wordsPerMinute)
      },
    },
  },
}))
```

#### 2.3 Component Documentation
```typescript
/**
 * BlogCard Component
 * 
 * @context Displays a blog post preview card with title, description, date, and tags
 * @usage Used in blog listing page to show multiple posts
 * @props
 *   - post: Post object from Contentlayer
 *   - featured: boolean - if true, shows larger card
 * @example
 *   <BlogCard post={post} featured={false} />
 */
export function BlogCard({ post, featured = false }: BlogCardProps) {
  // implementation
}
```

#### 2.4 Clear File Structure
```
src/
├── app/                    # Next.js App Router
│   ├── (main)/            # Main layout group
│   │   ├── page.tsx       # Home page
│   │   ├── about/
│   │   ├── blog/
│   │   ├── projects/
│   │   └── contact/
│   ├── layout.tsx         # Root layout
│   └── globals.css
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── blog/             # Blog-specific components
│   ├── layout/           # Layout components (Header, Footer)
│   └── shared/           # Shared components
├── lib/                  # Utility functions
│   ├── utils.ts
│   ├── fonts.ts
│   └── mdx.ts
├── config/               # Configuration files
│   ├── site.ts          # Site metadata
│   └── navigation.ts    # Navigation structure
└── types/               # TypeScript types
    └── index.ts
```

---

## Công cụ Đề xuất

### 1. **v0.dev by Vercel** (Thay thế Speckit)
- 🎨 Generate UI components bằng AI
- ✅ Tích hợp shadcn/ui
- ✅ Export code trực tiếp
- 🔗 https://v0.dev

**Cách dùng:**
```bash
# Describe UI bạn muốn, v0 sẽ generate code
# Example: "Create a blog card with image, title, description, and tags"
```

### 2. **Cursor AI** (IDE bạn đang dùng)
- ✅ Context-aware code completion
- ✅ Chat với codebase
- ✅ Multi-file editing

### 3. **Contentlayer** (Content SDK)
```bash
npm install contentlayer next-contentlayer
```

**Tại sao dùng Contentlayer?**
- ✅ Type-safe content
- ✅ Auto-generate types từ MDX
- ✅ Fast rebuild
- ✅ Tích hợp tốt với Next.js

### 4. **shadcn/ui** (Component Library)
```bash
npx shadcn-ui@latest init
```

**Ưu điểm:**
- ✅ Copy-paste components (không phải npm package)
- ✅ Fully customizable
- ✅ Built với Radix UI + Tailwind
- ✅ Accessible by default

### 5. **Biome** (Thay thế ESLint + Prettier)
```bash
npm install --save-dev @biomejs/biome
```

**Tại sao dùng Biome?**
- ⚡ Nhanh hơn 25x so với ESLint
- 🔧 Format + Lint trong 1 tool
- ✅ Zero config
- ✅ Viết bằng Rust

### 6. **Fumadocs** (Documentation Framework)
```bash
npm install fumadocs-ui fumadocs-core
```

**Nếu bạn muốn:**
- 📚 Documentation site đẹp
- 🔍 Built-in search
- 📱 Mobile-friendly

### 7. **Velite** (Alternative cho Contentlayer)
```bash
npm install velite
```

**So sánh:**
| Feature | Contentlayer | Velite |
|---------|-------------|--------|
| Speed | Fast | Faster |
| Type Safety | ✅ | ✅ |
| Schema Validation | Basic | Zod-based |
| Bundle Size | Larger | Smaller |
| Maintenance | Archived | Active |

**⚠️ Lưu ý:** Contentlayer đã archived, nên **Velite** là lựa chọn tốt hơn!

### 8. **Shiki** (Syntax Highlighting)
```bash
npm install shiki
```

**Cho blog code snippets:**
- ✅ Beautiful syntax highlighting
- ✅ Multiple themes
- ✅ Support nhiều languages

### 9. **next-themes** (Dark Mode)
```bash
npm install next-themes
```

### 10. **React Hook Form** (Forms)
```bash
npm install react-hook-form @hookform/resolvers zod
```

**Cho contact form:**
- ✅ Performance tốt
- ✅ Validation với Zod
- ✅ Type-safe

---

## Cấu trúc Dự án Đề xuất

```
gnourt-portfolio/
├── .vscode/
│   └── settings.json          # VS Code settings
├── content/                   # Content files
│   ├── blog/
│   │   ├── hello-world.mdx
│   │   └── nextjs-tips.mdx
│   ├── projects/
│   │   └── personal-site.mdx
│   └── pages/
│       └── about.mdx
├── public/                    # Static files
│   ├── images/
│   ├── og-image.png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── (main)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   ├── projects/
│   │   │   └── contact/
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/               # shadcn components
│   │   ├── blog/
│   │   │   ├── blog-card.tsx
│   │   │   ├── blog-list.tsx
│   │   │   └── mdx-components.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── nav.tsx
│   │   └── shared/
│   │       ├── theme-toggle.tsx
│   │       └── social-links.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── fonts.ts
│   │   └── mdx.ts
│   ├── config/
│   │   ├── site.ts
│   │   └── navigation.ts
│   └── types/
│       └── index.ts
├── .cursorrules              # Cursor AI rules
├── .gitignore
├── biome.json               # Biome config
├── components.json          # shadcn config
├── contentlayer.config.ts   # Contentlayer config (hoặc velite.config.ts)
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Setup Commands

### 1. Create Next.js Project
```bash
npx create-next-app@latest gnourt-portfolio
# ✅ TypeScript: Yes
# ✅ ESLint: Yes
# ✅ Tailwind CSS: Yes
# ✅ src/ directory: Yes
# ✅ App Router: Yes
# ❌ Turbopack: No (still experimental)
```

### 2. Install Dependencies
```bash
cd gnourt-portfolio

# Core dependencies
npm install velite zod next-themes

# UI dependencies
npm install framer-motion lucide-react

# Form dependencies
npm install react-hook-form @hookform/resolvers

# MDX dependencies
npm install @next/mdx rehype-pretty-code rehype-slug rehype-autolink-headings

# Dev dependencies
npm install -D @biomejs/biome
```

### 3. Setup shadcn/ui
```bash
npx shadcn-ui@latest init
# ✅ Style: Default
# ✅ Base color: Slate
# ✅ CSS variables: Yes

# Install components
npx shadcn-ui@latest add button card badge separator
```

### 4. Setup Biome
```bash
npx @biomejs/biome init
```

---

## Context Engineering Best Practices

### 1. **Cursor Rules File** (.cursorrules)
Tạo file `.cursorrules` để AI hiểu codebase:

```markdown
# Project Context

This is a personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Velite (Content management)
- shadcn/ui (Components)

## Code Style
- Use functional components with TypeScript
- Use Tailwind for styling (no CSS modules)
- Use server components by default, client components only when needed
- Follow Next.js App Router conventions

## File Naming
- Components: PascalCase (e.g., BlogCard.tsx)
- Utils: camelCase (e.g., formatDate.ts)
- Pages: lowercase (e.g., page.tsx)

## Component Structure
- Export component as named export
- Include JSDoc comments for complex components
- Use TypeScript interfaces for props

## Content
- Blog posts in content/blog/*.mdx
- Projects in content/projects/*.mdx
- Use frontmatter for metadata
```

### 2. **Site Config** (src/config/site.ts)
```typescript
export const siteConfig = {
  name: "Gnourt's Portfolio",
  description: "Personal website and blog",
  url: "https://gnourt.dev",
  author: {
    name: "Gnourt",
    email: "your@email.com",
    twitter: "@gnourt",
    github: "gnourt",
  },
  links: {
    twitter: "https://twitter.com/gnourt",
    github: "https://github.com/gnourt",
    linkedin: "https://linkedin.com/in/gnourt",
  },
}
```

### 3. **MDX Components** (src/components/blog/mdx-components.tsx)
```typescript
import { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-semibold mb-3 mt-8">{children}</h2>
  ),
  // ... more components
}
```

---

## Recommended Tools Summary

| Tool | Purpose | Priority |
|------|---------|----------|
| **v0.dev** | AI UI generation | ⭐⭐⭐ |
| **Velite** | Content management | ⭐⭐⭐ |
| **shadcn/ui** | UI components | ⭐⭐⭐ |
| **Biome** | Linting/Formatting | ⭐⭐⭐ |
| **next-themes** | Dark mode | ⭐⭐⭐ |
| **Framer Motion** | Animations | ⭐⭐ |
| **React Hook Form** | Forms | ⭐⭐ |
| **Shiki** | Code highlighting | ⭐⭐ |
| **Fumadocs** | Documentation | ⭐ (optional) |

---

## Next Steps

1. ✅ Review technical spec này
2. 🚀 Setup Next.js project
3. 📦 Install dependencies
4. 🎨 Setup shadcn/ui
5. 📝 Configure Velite
6. 🏗️ Create basic structure
7. 💅 Build components
8. ✍️ Add content

---

**Bạn muốn tôi bắt đầu setup project ngay không?**
