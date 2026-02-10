# Tina CMS Setup Guide

This project uses Tina CMS for content management with JSON-based content storage.

## ⚡ Quick Start (Local Development)

The project is configured to work immediately with local JSON files - no Tina Cloud setup required for development!

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development
```bash
pnpm dev
```

That's it! The site will run using JSON files from the `/content` directory.

## Content Management Options

### Option 1: Local File Editing (Simple)
- Edit JSON files directly in the `/content` directory
- Changes take effect immediately on page refresh
- No additional setup required
- Great for development and simple content updates

### Option 2: Tina Cloud CMS (Advanced)
- Full visual editor at `/admin`
- Cloud-based content management
- Team collaboration features
- Required for production deployments

## Setting Up Tina Cloud (Optional)

If you want the visual CMS editor and cloud features:

### 1. Create Tina Cloud Account
1. Go to [tina.io](https://tina.io) and sign up
2. Create a new project
3. Connect your GitHub repository

### 2. Get Credentials
From your Tina Cloud dashboard, get:
- `NEXT_PUBLIC_TINA_CLIENT_ID`
- `TINA_TOKEN`

### 3. Configure Environment Variables
For production (Vercel, Netlify, etc.), set these environment variables:
```env
TINA_PUBLIC_IS_LOCAL=false
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_tina_token
GITHUB_OWNER=iSeyon-Analytics
GITHUB_REPO=iSeyonAnalytics_V0
GITHUB_BRANCH=main
```

### 4. Deploy
Deploy your application with the following environment variables:
```env
TINA_PUBLIC_IS_LOCAL=false
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_tina_token
```

The build process will connect to Tina Cloud for content management.

> **Note:** Without Tina Cloud credentials, the site will still work but the `/admin` editor won't be available.

## Content Structure

All content is stored in JSON files under the `/content` directory:

```
content/
├── hero/
│   └── main.json                 # Hero section content
├── services/
│   ├── advanced-analytics.json   # Individual service pages
│   ├── ai-solutions.json
│   ├── business-intelligence.json
│   ├── data-integration.json
│   ├── real-time-processing.json
│   └── security-compliance.json
├── service-content/              # Detailed service pages
├── testimonials/
│   ├── sarah-johnson.json
│   ├── michael-chen.json
│   └── emily-rodriguez.json
├── partners/
│   ├── aws.json
│   ├── databricks.json
│   └── ...
├── banner/
│   └── main.json
├── team/
│   ├── chandan-pandey.json
│   ├── kayel-nelson.json
│   └── walter-reis.json
├── company-values/
│   ├── learn.json
│   ├── educate.json
│   └── communicate.json
├── vision/
│   └── main.json
└── project/
    └── main.json
```

## Managing Content

### Local Development (Editing JSON Files)
1. Navigate to the `/content` directory
2. Find the JSON file you want to edit
3. Make your changes (follow the existing structure)
4. Save the file
5. Refresh your browser to see changes

**Example:** To update the hero section, edit `content/hero/main.json`

### With Tina Cloud CMS
1. Start the dev server with Tina: `pnpm tina:dev`
2. Navigate to `http://localhost:3000/admin`
3. Edit content in the visual editor
4. Changes save to JSON files automatically
5. Commit and push to repository

### Production (Tina Cloud)
1. Navigate to your production site + `/admin`
2. Login with Tina Cloud credentials
3. Edit content
4. Tina Cloud creates commits in your GitHub repository
5. Deployment platform auto-deploys changes

## Content Collections

### Hero Section
- Single instance (`hero/main.json`)
- Controls homepage hero content
- Fields: badge, title, description, CTAs

### Services
- Multiple instances (one per service)
- Main service cards displayed on homepage
- Fields: title, description, image, icon, features, benefits, stats, use cases

### Service Content Pages
- Detailed service information pages
- Category-based organization
- Fields: slug, category, title, description, content sections, features, stats, benefits

### Testimonials
- Client testimonials and reviews
- Fields: name, role, avatar, content, rating

### Partners
- Partner logos and information
- Fields: name, logo

### Banner Section
- Single instance (`banner/main.json`)
- Homepage banner content
- Fields: heading, subheading, benefits, stats

### Team Members
- Team member profiles
- Fields: name, role, image, description, LinkedIn

### Company Values
- Organization values and principles
- Fields: title, description

### Vision & Mission
- Single instance (`vision/main.json`)
- Company vision and mission statement
- Fields: mission title/heading/description, values, vision points

### Featured Project
- Single instance (`project/main.json`)
- Showcase project (e.g., Xcaria)
- Fields: name, tagline, logo, description, features, CTA

## Adding New Content

### Add a New Service
1. Go to `/admin`
2. Click "Services" in the sidebar
3. Click "Create New"
4. Fill in all required fields
5. Save

### Content changes not appearing
1. Clear your browser cache
2. Restart the dev server
3. Check that JSON syntax is valid

### Build failures
1. Ensure all required fields in JSON files are filled
2. Verify JSON syntax is correct
3. Check that image paths exist

### Setting up Tina Cloud for the first time
1. Create account at [tina.io](https://tina.io)
2. Run `pnpm tina:cloud:init` to connect your project
3. Follow the prompts to set up authentication
4. Update environment variables with provided credential
### Content changes not appearing
1. For local: Restart the dev server
2. For production: Check if Tina Cloud committed changes to GitHub
3. Verify deployment succeeded

### Build failures in production
1. Ensure all environment variables are set correctly
2. Check that `TINA_TOKEN` is set (required for production builds)
3. Verify GitHub repository access

## Best Practices

1. **Always use the Tina admin UI** to edit content (don't manually edit JSON files)
2. **Test locally first** before deploying to production
3. **For local development:** Edit JSON files directly for quick updates
2. **For production:** Use Tina Cloud for team collaboration and visual editing
3. **Test locally first** before pushing to production
4. **Use meaningful filenames** for new content items
5. **Keep JSON structure consistent** following the existing schema
6. **Validate JSON** before committing (use a JSON validator)
7. **Commit regularly** when editing content

- [Tina CMS Documentation](https://tina.io/docs/)
- [Tina Cloud Setup Guide](https://tina.io/docs/tina-cloud/)
- [Schema Reference](https://tina.io/docs/schema/)
