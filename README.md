# iSeyon Analytics Website

A modern Next.js website for iSeyon Analytics powered by Tina CMS for flexible content management.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## ✨ Features

- **Next.js 16** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Tina CMS** - JSON-based content management
- **Radix UI** - Accessible component primitives
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── team/              # Team page
│   ├── vision/            # Vision page
│   └── services/          # Services pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── ...               # Feature components
├── content/              # Content JSON files (Tina CMS)
│   ├── hero/
│   ├── services/
│   ├── testimonials/
│   └── ...
├── lib/                  # Utility functions
├── public/               # Static assets
├── tina/                 # Tina CMS configuration
└── ...
```

## 🎨 Content Management

This project uses **Tina CMS** for content management with JSON-based storage.

### Option 1: Edit JSON Files Directly (Simple)

All content is stored in the `/content` directory as JSON files. Simply edit these files and refresh your browser.

**Example:** Edit hero section content
```json
// content/hero/main.json
{
  "badge": "✨ Welcome to the Future of Analytics",
  "title": "Transform your business...",
  "description": "Unlock actionable insights..."
}
```

### Option 2: Use Tina Cloud CMS (Advanced)

Set up Tina Cloud for a visual editor with team collaboration features.

**Setup:**
1. Create account at [tina.io](https://tina.io)
2. Run `pnpm tina:cloud:init`
3. Configure environment variables
4. Run `pnpm tina:dev`
5. Access editor at `http://localhost:3000/admin`

**See full documentation:** [TINA_SETUP.md](./TINA_SETUP.md)

## 🔧 Environment Variables

Create a `.env.local` file (optional):

```env
# For local development (default)
TINA_PUBLIC_IS_LOCAL=true

# For Tina Cloud (optional)
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token
```

## 📝 Content Collections

Content is organized into collections:

- **Hero** - Homepage hero section
- **Services** - Service offerings
- **Service Content** - Detailed service pages
- **Testimonials** - Client testimonials
- **Partners** - Partner logos
- **Banner** - Call-to-action banner
- **Team Members** - Team profiles
- **Company Values** - Core values
- **Vision** - Mission and vision
- **Project** - Featured projects

## 🛠️ Development Scripts

```bash
# Standard development
pnpm dev

# Development with Tina Cloud CMS
pnpm tina:dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Initialize Tina Cloud
pnpm tina:cloud:init

# Build Tina schema (requires Tina Cloud)
pnpm tina:build
```

## 📚 Documentation

- [**TINA_SETUP.md**](./TINA_SETUP.md) - Complete Tina CMS setup guide
- [**TINA_MIGRATION_SUMMARY.md**](./TINA_MIGRATION_SUMMARY.md) - Migration details and changes

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables (if using Tina Cloud)
4. Deploy

### Other Platforms

Works with any platform supporting Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted

## 🧰 Tech Stack

### Core
- [Next.js 16](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

### Styling
- [Tailwind CSS 4](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - Component primitives
- [Framer Motion](https://www.framer.com/motion/) - Animations

### Content Management
- [Tina CMS](https://tina.io/) - Git-based CMS
- JSON - Content storage format

### Development Tools
- [pnpm](https://pnpm.io/) - Package manager
- [ESLint](https://eslint.org/) - Code linting
- [PostCSS](https://postcss.org/) - CSS processing

## 📦 Key Dependencies

```json
{
  "next": "16.0.10",
  "react": "19.2.0",
  "tinacms": "^3.4.1",
  "@tinacms/cli": "^2.1.5",
  "tailwindcss": "^4.1.9",
  "framer-motion": "^11.0.8",
  "typescript": "^5"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

All rights reserved © iSeyon Analytics

## 🆘 Support

### Common Issues

**Content not updating?**
- Restart the dev server
- Check JSON syntax is valid
- Clear browser cache

**Build errors?**
- Run `pnpm install` to ensure all dependencies are installed
- Check that all image paths in JSON files are valid
- Verify environment variables are set correctly

**Need help with Tina?**
- Check [TINA_SETUP.md](./TINA_SETUP.md)
- Visit [Tina documentation](https://tina.io/docs/)

## 🗺️ Roadmap

- [ ] Add more service pages
- [ ] Implement blog functionality
- [ ] Add case studies section
- [ ] Enhance animations
- [ ] Add analytics integration
- [ ] Implement contact form

---

Built with ❤️ by iSeyon Analytics
