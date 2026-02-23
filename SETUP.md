# Setup Guide

## ✅ Completed Steps

1. ✅ Created Next.js project structure
2. ✅ Installed all dependencies
3. ✅ Configured TypeScript
4. ✅ Setup Tailwind CSS
5. ✅ Configured Biome for linting
6. ✅ Setup Velite for content management
7. ✅ Created sample blog posts and projects
8. ✅ Configured dark mode support
9. ✅ Created basic folder structure

## 🚀 Next Steps

### 1. Test the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### 2. Install shadcn/ui Components

Install the components you need:

```bash
# Essential components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add label

# Optional components
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add navigation-menu
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add tooltip
```

### 3. Customize Site Configuration

Edit `src/config/site.ts` with your information:

```typescript
export const siteConfig = {
  name: "Your Name",
  description: "Your description",
  url: "https://yourdomain.com",
  author: {
    name: "Your Name",
    email: "your@email.com",
    twitter: "@yourhandle",
    github: "yourusername",
  },
  links: {
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
};
```

### 4. Create Your Content

#### Blog Posts

Create new blog posts in `content/blog/`:

```bash
# Example: content/blog/my-new-post.mdx
---
title: "My New Post"
description: "Post description"
date: 2026-02-23
published: true
tags: ["tag1", "tag2"]
---

Your content here...
```

#### Projects

Create project showcases in `content/projects/`:

```bash
# Example: content/projects/my-project.mdx
---
title: "My Project"
description: "Project description"
date: 2026-02-23
published: true
tags: ["nextjs", "react"]
link: "https://project-url.com"
github: "https://github.com/user/repo"
---

Your project details...
```

### 5. Build Components

Create the main components you need:

#### Header Component

```bash
# Create: src/components/layout/header.tsx
```

#### Footer Component

```bash
# Create: src/components/layout/footer.tsx
```

#### Blog Components

```bash
# Create: src/components/blog/blog-card.tsx
# Create: src/components/blog/blog-list.tsx
```

### 6. Create Pages

#### Blog Page

```bash
# Create: src/app/blog/page.tsx
# Create: src/app/blog/[slug]/page.tsx
```

#### Projects Page

```bash
# Create: src/app/projects/page.tsx
# Create: src/app/projects/[slug]/page.tsx
```

#### About Page

```bash
# Create: src/app/about/page.tsx
```

#### Contact Page

```bash
# Create: src/app/contact/page.tsx
```

### 7. Add Images

Place your images in `public/images/`:

- `avatar.jpg` - Your profile picture
- `og-image.png` - Open Graph image for social sharing
- `favicon.ico` - Site favicon

### 8. Setup Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values.

### 9. Test Build

```bash
npm run build
npm start
```

### 10. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## 📝 Development Workflow

### Daily Development

```bash
# Start dev server
npm run dev

# In another terminal, watch for linting issues
npm run lint

# Format code
npm run format
```

### Before Committing

```bash
# Check and fix linting issues
npm run lint:fix

# Format code
npm run format

# Test build
npm run build
```

## 🛠️ Tools & Resources

### Recommended Tools

1. **v0.dev** - Generate UI components with AI
   - Visit: https://v0.dev
   - Describe your component, get code

2. **Cursor AI** - Your IDE (already using!)
   - Use `.cursorrules` for context
   - Ask questions about the codebase

3. **shadcn/ui** - Component library
   - Browse: https://ui.shadcn.com
   - Copy components as needed

### Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Velite Docs](https://velite.js.org)

## 🐛 Troubleshooting

### Issue: Dependencies conflict

```bash
# Use legacy peer deps
npm install --legacy-peer-deps
```

### Issue: Build fails

```bash
# Clean and rebuild
rm -rf .next .velite node_modules
npm install --legacy-peer-deps
npm run build
```

### Issue: Velite not generating types

```bash
# Manually run Velite
npx velite build
```

## 📚 Project Structure Reference

```
gnourt-portfolio/
├── content/              # Your content (MDX files)
│   ├── blog/            # Blog posts
│   └── projects/        # Projects
├── public/              # Static files
│   └── images/          # Images
├── specs/               # Project documentation
├── src/
│   ├── app/            # Next.js pages
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   └── globals.css # Global styles
│   ├── components/     # React components
│   │   ├── ui/        # shadcn/ui components
│   │   ├── blog/      # Blog components
│   │   ├── layout/    # Layout components
│   │   └── shared/    # Shared components
│   ├── config/        # Configuration
│   ├── lib/           # Utilities
│   └── types/         # TypeScript types
├── .cursorrules       # Cursor AI context
├── biome.json         # Biome config
├── components.json    # shadcn/ui config
├── next.config.ts     # Next.js config
├── package.json       # Dependencies
├── tailwind.config.ts # Tailwind config
├── tsconfig.json      # TypeScript config
└── velite.config.ts   # Velite config
```

## 🎯 Recommended Development Order

1. ✅ Setup project (Done!)
2. 🔄 Install shadcn/ui components
3. 🔄 Create Header & Footer
4. 🔄 Build Home page
5. 🔄 Build About page
6. 🔄 Build Blog listing page
7. 🔄 Build Blog post page
8. 🔄 Build Projects page
9. 🔄 Build Contact page
10. 🔄 Add more content
11. 🔄 Deploy to Vercel

## 💡 Tips

- **Start simple** - Get basic pages working first
- **Use v0.dev** - Generate components quickly
- **Ask Cursor** - Use AI to help with code
- **Test often** - Run dev server frequently
- **Commit often** - Save your progress
- **Deploy early** - Get feedback sooner

## 🎉 You're Ready!

Your project is set up and ready to go. Start with `npm run dev` and begin building!

Need help? Check the specs folder for detailed documentation:
- `specs/personal-website-plan.md` - Overall plan
- `specs/technical-spec.md` - Technical details
