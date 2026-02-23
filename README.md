# Gnourt's Portfolio

Personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Content:** Velite (MDX)
- **Linting/Formatting:** Biome
- **Deployment:** Vercel

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
gnourt-portfolio/
├── content/              # MDX content files
│   ├── blog/            # Blog posts
│   ├── projects/        # Project showcases
│   └── pages/           # Static pages
├── public/              # Static assets
│   └── images/
├── specs/               # Project specifications
│   ├── personal-website-plan.md
│   └── technical-spec.md
├── src/
│   ├── app/            # Next.js App Router
│   ├── components/     # React components
│   │   ├── ui/        # shadcn/ui components
│   │   ├── blog/      # Blog components
│   │   ├── layout/    # Layout components
│   │   └── shared/    # Shared components
│   ├── config/        # Configuration
│   ├── lib/           # Utilities
│   └── types/         # TypeScript types
├── .cursorrules       # Cursor AI rules
├── biome.json         # Biome config
├── components.json    # shadcn/ui config
└── velite.config.ts   # Velite config (to be added)
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Biome

## Features

- ✅ Modern Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Dark mode support
- ✅ MDX for content management
- ✅ SEO optimized
- ✅ Responsive design
- 🚧 Blog system (coming soon)
- 🚧 Project showcase (coming soon)
- 🚧 Contact form (coming soon)

## Next Steps

1. Install dependencies: `npm install`
2. Install shadcn/ui components: `npx shadcn-ui@latest add button card badge`
3. Configure Velite for content management
4. Create blog posts in `content/blog/`
5. Customize site config in `src/config/site.ts`
6. Deploy to Vercel

## Documentation

See the `specs/` folder for detailed project specifications:
- `personal-website-plan.md` - Overall project plan
- `technical-spec.md` - Technical specifications

## License

MIT
