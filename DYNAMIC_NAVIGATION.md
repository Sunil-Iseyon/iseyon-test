# Dynamic Navigation Menu Guide

## ✅ Problem Solved

Previously, the navigation menu was hardcoded in `components/header.tsx`. When editors added new services in TinaCMS with filenames that didn't match the hardcoded URLs, the site would show "Service Not Found" errors.

## 🎯 New Solution: Auto-Generated Menu

The navigation menu now **automatically generates** from your TinaCMS content files. When you create a new service in TinaCMS, it instantly appears in the navigation menu under its category!

## How It Works

### 1. **Editor Creates Service in TinaCMS**
```
Go to TinaCMS → Service Content Pages → New Post
- Category: "Support" (select from dropdown)
- Heading: "Support & Training"
- Image: Upload image
- Subheading: Enter description
- Content: Add rich text content
- Save as: "support-training.json"
```

### 2. **Navigation Menu Updates Automatically**
The service immediately appears in the navigation menu:
```
Services → Support → Support & Training
```

### 3. **URL is Generated from Filename**
The URL becomes:
```
/services/support/support-training
```

## Categories Available

Your TinaCMS has 4 service categories (defined in `tina/config.ts`):

| Category Value | Display Name | Example Service |
|----------------|--------------|-----------------|
| `cloud-and-platforms` | Cloud & Platforms | AWS, Azure, Snowflake |
| `bi-and-analytics` | BI & Analytics | Power BI, Tableau |
| `data-and-engineering` | Data & Engineering | SQL Server, Big Data |
| `support` | Support | Support & Training |

## Adding a New Service Category

If you need a new category (e.g., "AI & Machine Learning"):

### 1. Update TinaCMS Config
Edit [tina/config.ts](tina/config.ts) around line 230:

```typescript
options: [
  {value: "cloud-and-platforms", label: "Cloud and Platforms"},
  {value: "bi-and-analytics", label: "BI and Analytics"},
  {value: "data-and-engineering", label: "Data and Engineering"},
  {value: "support", label: "Support"},
  {value: "ai-and-ml", label: "AI & Machine Learning"}, // ← Add new category
],
```

### 2. Update Category Labels
In [lib/tina-queries.ts](lib/tina-queries.ts), add the display name:

```typescript
const CATEGORY_LABELS: Record<string, string> = {
  "cloud-and-platforms": "Cloud & Platforms",
  "bi-and-analytics": "BI & Analytics",
  "data-and-engineering": "Data & Engineering",
  "support": "Support",
  "ai-and-ml": "AI & Machine Learning", // ← Add display name
};
```

### 3. Create Content
Go to TinaCMS and create services in the new category. They'll automatically appear in the navigation!

## File Naming Best Practices

### ✅ Good Filenames
- `power-bi.json` → `/services/bi-and-analytics/power-bi`
- `aws.json` → `/services/cloud-and-platforms/aws`
- `support-training.json` → `/services/support/support-training`

### ❌ Avoid
- Spaces: `power bi.json` (use hyphens instead: `power-bi.json`)
- Special characters: `power_bi!.json` (keep it simple)
- Uppercase: `PowerBI.json` (use lowercase: `powerbi.json` or `power-bi.json`)

## How the System Works (Technical)

### 1. Data Flow
```
TinaCMS Content Files
    ↓
lib/tina-queries.ts → getServicesForNavigation()
    ↓
app/layout.tsx → Fetches services at build time
    ↓
components/header.tsx → Receives servicesMenu prop
    ↓
Navigation Menu Renders Automatically
```

### 2. Grouping Logic
```typescript
// Services are automatically grouped by category
const grouped = {
  "cloud-and-platforms": [
    { label: "AWS", href: "/services/cloud-and-platforms/aws" },
    { label: "Azure", href: "/services/cloud-and-platforms/azure" }
  ],
  "bi-and-analytics": [
    { label: "Power BI", href: "/services/bi-and-analytics/power-bi" }
  ]
}
```

### 3. URL Generation
```typescript
// Filename becomes URL slug
filename: "support-training.json"
category: "support"
heading: "Support & Training"

// Generates:
href: "/services/support/support-training"
label: "Support & Training"
```

## Benefits

✅ **No More Hardcoded URLs** - Menu updates automatically  
✅ **Editor-Friendly** - Just create content, menu appears  
✅ **No "Service Not Found" Errors** - Filenames = URLs  
✅ **Alphabetically Sorted** - Services sorted by heading  
✅ **Category-Based** - Auto-grouped by category  

## Migration Complete

The old hardcoded `servicesMegaMenu` array has been removed. The navigation is now 100% driven by TinaCMS content.

## Testing

1. Create a new service in TinaCMS:
   - Category: "Support"
   - Heading: "Premium Support Plans"
   - Filename: "premium-support.json"

2. Rebuild/restart dev server:
   ```powershell
   pnpm dev
   ```

3. Check navigation menu → Services → Support → "Premium Support Plans" ✅

4. Visit URL: `/services/support/premium-support` ✅

## Future Enhancements

Consider making insights menu dynamic too:
- Currently hardcoded in `header.tsx` as `insightsSubmenu`
- Could use same pattern with `getInsightsForNavigation()`
