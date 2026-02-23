# 🚀 Quick Start Guide

## ✅ Project Created Successfully!

Your Next.js portfolio is ready. Here's everything you need to know in 5 minutes.

## 🏃 Start Developing NOW

```bash
cd gnourt-portfolio
npm run dev
```

Open http://localhost:3000 - You should see "Welcome to Gnourt's Portfolio"

## 🛠️ Essential Tools (Context Engineering)

### 1. **v0.dev** - AI UI Generator (Thay thế Speckit)
```
URL: https://v0.dev
Usage: Describe UI → Get React code → Copy to project
Example: "Create a modern blog card with image, title, date, and tags"
```

### 2. **Cursor AI** - Your IDE
```
Already configured with .cursorrules
Ask: "Create a header component with navigation"
Ask: "Add a blog listing page"
```

### 3. **shadcn/ui** - Component Library
```bash
# Install components you need
npx shadcn-ui@latest add button card badge input
```

### 4. **Biome** - Super Fast Linting
```bash
npm run lint:fix    # Fix all issues
npm run format      # Format code
```

## 📁 Project Structure

```
gnourt-portfolio/
├── content/              # ✍️ Your blog posts & projects (MDX)
├── src/
│   ├── app/             # 📄 Pages (Next.js App Router)
│   ├── components/      # 🧩 React components
│   ├── config/          # ⚙️ Site configuration
│   └── lib/             # 🔧 Utilities
├── specs/               # 📚 Documentation
└── public/              # 🖼️ Images & static files
```

## ⚡ Quick Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint:fix     # Fix linting issues
npm run format       # Format code
```

## 🎯 Next 3 Steps

### Step 1: Install UI Components (2 minutes)
```bash
npx shadcn-ui@latest add button card badge separator
```

### Step 2: Customize Site Info (3 minutes)
Edit `src/config/site.ts`:
```typescript
name: "Your Name",
email: "your@email.com",
github: "yourusername",
```

### Step 3: Create Your First Page (5 minutes)
Use Cursor AI or v0.dev to create:
- `src/app/about/page.tsx` - About page
- `src/components/layout/header.tsx` - Navigation

## 📝 Create Content

### Blog Post
Create `content/blog/my-post.mdx`:
```mdx
---
title: "My First Post"
description: "Post description"
date: 2026-02-23
tags: ["nextjs", "react"]
---

Your content here...
```

### Project
Create `content/projects/my-project.mdx`:
```mdx
---
title: "My Project"
description: "Project description"
date: 2026-02-23
link: "https://project.com"
github: "https://github.com/user/repo"
---

Project details...
```

## 🎨 Use v0.dev for UI

1. Go to https://v0.dev
2. Describe what you want:
   - "Create a blog card component"
   - "Create a contact form"
   - "Create a project showcase grid"
3. Copy the generated code
4. Paste into your project
5. Customize as needed

## 🤖 Use Cursor AI

Ask Cursor to help you:
- "Create a header with navigation links"
- "Add a dark mode toggle button"
- "Create a blog listing page that shows all posts"
- "Add a contact form with validation"

## 🚀 Deploy to Vercel (5 minutes)

```bash
# Option 1: CLI
npm i -g vercel
vercel

# Option 2: GitHub
# 1. Push to GitHub
# 2. Go to vercel.com
# 3. Import repository
# 4. Deploy!
```

## 📚 Full Documentation

- `README.md` - Project overview
- `SETUP.md` - Detailed setup guide
- `specs/SETUP-COMPLETE.md` - What's been done
- `specs/personal-website-plan.md` - Full project plan
- `specs/technical-spec.md` - Technical details

## 💡 Pro Tips

1. **Use Server Components** - Default in Next.js, better performance
2. **Use v0.dev** - Generate UI components instantly
3. **Ask Cursor** - Your AI pair programmer
4. **Start Simple** - Get basic pages working first
5. **Deploy Early** - Get feedback from real users

## 🐛 Common Issues

### Can't install dependencies?
```bash
npm install --legacy-peer-deps
```

### Build fails?
```bash
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### Need help?
- Ask Cursor AI
- Check `SETUP.md`
- Check Next.js docs

## 🎉 You're Ready!

1. ✅ Run `npm run dev`
2. ✅ Install shadcn/ui components
3. ✅ Use v0.dev to generate UI
4. ✅ Ask Cursor AI for help
5. ✅ Build your portfolio!

---

**Happy coding! 🚀**

Need more details? Check `SETUP.md` or `specs/SETUP-COMPLETE.md`
