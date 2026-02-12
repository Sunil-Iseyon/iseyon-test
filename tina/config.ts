import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io (only required for production/cloud)
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  // Get this from tina.io (only required for production/cloud)
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "hero",
        label: "Hero Section",
        path: "content/hero",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "badge",
            label: "Badge Text",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "object",
            name: "primaryCta",
            label: "Primary CTA",
            fields: [
              {
                type: "string",
                name: "text",
                label: "Button Text",
              },
              {
                type: "string",
                name: "href",
                label: "Link",
              },
            ],
          },
          {
            type: "object",
            name: "secondaryCta",
            label: "Secondary CTA",
            fields: [
              {
                type: "string",
                name: "text",
                label: "Button Text",
              },
              {
                type: "string",
                name: "href",
                label: "Link",
              },
            ],
          },
        ],
      },
      /* Removed - Now using serviceContent collection instead
      {
        name: "services",
        label: "Services",
        path: "content/services",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "icon",
            label: "Icon",
            required: true,
            options: [
              {value: "BarChart3", label: "Bar Chart"},
              {value: "Brain", label: "Brain/AI"},
              {value: "Database", label: "Database"},
              {value: "TrendingUp", label: "Trending Up"},
              {value: "Shield", label: "Shield"},
              {value: "Zap", label: "Zap"},
              {value: "Code", label: "Code"},
              {value: "Users", label: "Users"},
            ],
          },
          {
            type: "string",
            name: "variant",
            label: "Variant",
            options: ["primary", "secondary"],
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "rich-text",
            name: "detailedDescription",
            label: "Detailed Description",
          },
          {
            type: "string",
            name: "features",
            label: "Features",
            list: true,
          },
          {
            type: "object",
            name: "benefits",
            label: "Benefits",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "rich-text",
                name: "description",
                label: "Description",
              },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
              },
              {
                type: "string",
                name: "value",
                label: "Value",
              },
            ],
          },
          {
            type: "string",
            name: "useCases",
            label: "Use Cases",
            list: true,
          },
          {
            type: "string",
            name: "cta",
            label: "CTA Text",
          },
        ],
      },
      */
      {
        name: "serviceContent",
        label: "Service Content Pages",
        path: "content/service-content",
        format: "json",
        fields: [
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: [
              {value: "cloud-and-platforms", label: "Cloud and Platforms"},
              {value: "bi-and-analytics", label: "BI and Analytics"},
              {value: "data-and-engineering", label: "Data and Engineering"},
              {value: "support", label: "Support"},
            ],
          },
          {
            type: "string",
            name: "heading",
            label: "Heading",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "subheading",
            label: "Subheading",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            required: true,
          },
          {
            type: "boolean",
            name: "showOnHomePage",
            label: "Show on Home Page",
            description: "Enable to display this service on the home page services section",
          },
          {
            type: "string",
            name: "homePageDescription",
            label: "Home Page Description",
            description: "Short description for home page card (required if Show on Home Page is enabled)",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "homePageIcon",
            label: "Home Page Icon",
            description: "Icon for home page card (required if Show on Home Page is enabled)",
            options: [
              {value: "BarChart3", label: "Bar Chart"},
              {value: "Brain", label: "Brain/AI"},
              {value: "Database", label: "Database"},
              {value: "TrendingUp", label: "Trending Up"},
              {value: "Shield", label: "Shield"},
              {value: "Zap", label: "Zap"},
              {value: "Code", label: "Code"},
              {value: "Users", label: "Users"},
              {value: "Cloud", label: "Cloud"},
              {value: "LineChart", label: "Line Chart"},
              {value: "Server", label: "Server"},
              {value: "ShieldCheck", label: "Shield Check"},
              {value: "Settings", label: "Settings"},
              {value: "GitBranch", label: "Git Branch"},
            ],
          },
        ],
      },
      {
        name: "testimonials",
        label: "Testimonials",
        path: "content/testimonials",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Role",
            required: true,
          },
          {
            type: "image",
            name: "avatar",
            label: "Avatar Image",
          },
          {
            type: "string",
            name: "initials",
            label: "Initials",
            required: true,
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            required: true,
          },
          {
            type: "number",
            name: "rating",
            label: "Rating",
            required: true,
          },
        ],
      },
      {
        name: "founderMessages",
        label: "Founder Messages",
        path: "content/founder-messages",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Founder Name",
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Role",
            required: true,
          },
          {
            type: "image",
            name: "avatar",
            label: "Avatar Image",
          },
          {
            type: "string",
            name: "initials",
            label: "Initials",
            required: true,
          },
          {
            type: "rich-text",
            name: "message",
            label: "Message",
            required: true,
          },
        ],
      },
      {
        name: "partners",
        label: "Partners",
        path: "content/partners",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
            required: true,
          },
        ],
      },
      {
        name: "banner",
        label: "Banner Section",
        path: "content/banner",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "heading",
            label: "Heading",
            required: true,
          },
          {
            type: "rich-text",
            name: "subheading",
            label: "Subheading",
          },
          {
            type: "string",
            name: "benefits",
            label: "Benefits",
            list: true,
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            fields: [
              {
                type: "string",
                name: "value",
                label: "Value",
              },
              {
                type: "string",
                name: "label",
                label: "Label",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
            ],
          },
        ],
      },
      {
        name: "teamMembers",
        label: "Team Members",
        path: "content/team",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Role",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "rich-text",
            name: "descp",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "linkedin",
            label: "LinkedIn URL",
          },
        ],
      },
      {
        name: "companyValues",
        label: "Company Values",
        path: "content/company-values",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            required: true,
          },
        ],
      },
      {
        name: "vision",
        label: "Vision & Mission",
        path: "content/vision",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "missionTitle",
            label: "Mission Title",
          },
          {
            type: "string",
            name: "missionHeading",
            label: "Mission Heading",
          },
          {
            type: "rich-text",
            name: "missionDescription",
            label: "Mission Description",
          },
          {
            type: "object",
            name: "values",
            label: "Values",
            list: true,
            fields: [
              {
                type: "string",
                name: "icon",
                label: "Icon",
                options: [
                  {value: "Lightbulb", label: "Lightbulb"},
                  {value: "Shield", label: "Shield"},
                  {value: "Rocket", label: "Rocket"},
                  {value: "Heart", label: "Heart"},
                  {value: "Target", label: "Target"},
                  {value: "Users", label: "Users"},
                  {value: "Globe", label: "Globe"},
                ],
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "rich-text",
                name: "description",
                label: "Description",
              },
            ],
          },
          {
            type: "object",
            name: "visionPoints",
            label: "Vision Points",
            list: true,
            fields: [
              {
                type: "string",
                name: "icon",
                label: "Icon",
                options: [
                  {value: "Globe", label: "Globe"},
                  {value: "Target", label: "Target"},
                  {value: "Rocket", label: "Rocket"},
                  {value: "Users", label: "Users"},
                ],
              },
              {
                type: "string",
                name: "text",
                label: "Text",
              },
            ],
          },
        ],
      },
      {
        name: "project",
        label: "Featured Project",
        path: "content/project",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Project Name",
            required: true,
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline",
            required: true,
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
            required: true,
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
            required: true,
            description: "Main hero/showcase image for the project",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "object",
            name: "features",
            label: "Features",
            list: true,
            fields: [
              {
                type: "string",
                name: "icon",
                label: "Icon",
                options: [
                  {value: "Zap", label: "Zap"},
                  {value: "TrendingUp", label: "Trending Up"},
                  {value: "Shield", label: "Shield"},
                  {value: "Brain", label: "Brain"},
                ],
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
            ],
          },
          {
            type: "string",
            name: "ctaText",
            label: "CTA Text",
          },
          {
            type: "string",
            name: "ctaLink",
            label: "CTA Link",
          },
        ],
      },
      {
        name: "insights",
        label: "Insights Pages",
        path: "content/insights",
        format: "json",
        fields: [
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: [
              {value: "business-intelligence", label: "Business Intelligence"},
              {value: "internal-applications", label: "Internal Applications"},
            ],
          },
          {
            type: "string",
            name: "heading",
            label: "Heading",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
            required: true,
          },
          {
            type: "string",
            name: "subheading",
            label: "Subheading",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            required: true,
          },
        ],
      },
      /* Removed - Now using insights collection instead
      {
        name: "biInsights",
        label: "BI Insights Page",
        path: "content/insights/bi",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            fields: [
              {
                type: "string",
                name: "value",
                label: "Value",
              },
              {
                type: "string",
                name: "label",
                label: "Label",
              },
            ],
          },
          {
            type: "object",
            name: "coreCapabilities",
            label: "Core Capabilities",
            list: true,
            fields: [
              {
                type: "string",
                name: "icon",
                label: "Icon",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "string",
                name: "stats",
                label: "Stats",
              },
            ],
          },
          {
            type: "object",
            name: "useCases",
            label: "Use Cases",
            list: true,
            fields: [
              {
                type: "string",
                name: "icon",
                label: "Icon",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
            ],
          },
        ],
      },
      {
        name: "internalApps",
        label: "Internal Apps Page",
        path: "content/insights/internal-apps",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            fields: [
              {
                type: "string",
                name: "value",
                label: "Value",
              },
              {
                type: "string",
                name: "label",
                label: "Label",
              },
            ],
          },
          {
            type: "object",
            name: "features",
            label: "Features",
            list: true,
            fields: [
              {
                type: "string",
                name: "icon",
                label: "Icon",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
            ],
          },
        ],
      },
      */
      {
        name: "privacyPolicy",
        label: "Privacy Policy",
        path: "content/privacy-policy",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            required: true,
          },
        ],
      },
      {
        name: "blogPosts",
        label: "Blog Posts",
        path: "content/blog",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "shortDescription",
            label: "Short Description",
            description: "Brief description shown in blog cards (recommended: 100-150 characters)",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "description",
            label: "Full Content",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: ["Newsletter", "Tips", "Insight", "Success Stories"],
          },
          {
            type: "string",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "readTime",
            label: "Read Time",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            description: "Optional author name for the blog post",
          },
        ],
      },
      {
        name: "communityGallery",
        label: "Community Gallery",
        path: "content/community/gallery",
        format: "json",
        fields: [
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
          },
        ],
      },
      {
        name: "communityTimeline",
        label: "Community Timeline",
        path: "content/community/timeline",
        format: "json",
        fields: [
          {
            type: "string",
            name: "year",
            label: "Year",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            required: true,
          },
        ],
      },
    ],
  },
});
