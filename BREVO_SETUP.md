# Brevo Email Integration Setup

This document outlines the setup process for integrating Brevo (formerly Sendinblue) email services for the newsletter subscription and contact form.

## Overview

The application uses Brevo for:
- **Newsletter subscriptions**: Collecting and managing newsletter subscribers
- **Contact form submissions**: Sending contact form notifications and auto-replies
- **Transactional emails**: Welcome emails and confirmation messages

## Required Environment Variables

Add the following environment variables to your `.env.local` file:

```env
# Brevo API Configuration
BREVO_API_KEY=your_brevo_api_key_here
BREVO_NEWSLETTER_LIST_ID=2
BREVO_SENDER_NAME="Iseyon Analytics"
BREVO_SENDER_EMAIL=info@iSeyon.com
BREVO_ADMIN_EMAIL=info@iSeyon.com
```

## Setup Instructions

### 1. Create a Brevo Account

1. Go to [Brevo](https://www.brevo.com/) (formerly Sendinblue)
2. Sign up for a free account or log in if you already have one
3. The free plan includes:
   - 300 emails/day
   - Unlimited contacts
   - Email campaigns
   - Transactional emails

### 2. Get Your API Key

1. Log in to your Brevo dashboard
2. Navigate to **Settings** → **SMTP & API** → **API Keys**
3. Click **Generate a new API key**
4. Give it a name (e.g., "Iseyon Website")
5. Copy the API key and add it to your `.env.local` as `BREVO_API_KEY`

### 3. Verify Your Sender Email

1. Go to **Senders, Domains & Dedicated IPs** → **Senders**
2. Add and verify your sender email (e.g., info@iSeyon.com)
3. Follow the verification process (you'll receive a confirmation email)
4. Once verified, set this as `BREVO_SENDER_EMAIL` in your `.env.local`

### 4. Create a Newsletter Contact List

1. Navigate to **Contacts** → **Lists**
2. Create a new list (e.g., "Newsletter Subscribers")
3. Note the List ID (you can find it in the URL or list details)
4. Add this ID to your `.env.local` as `BREVO_NEWSLETTER_LIST_ID`

### 5. Configure Admin Email

Set `BREVO_ADMIN_EMAIL` to the email address where you want to receive:
- Contact form submissions
- Newsletter subscription notifications

## Features

### Newsletter Subscription

**Endpoint**: `POST /api/newsletter`

**What happens when someone subscribes:**
1. Contact is added to your Brevo contact list
2. If already subscribed, updates the contact
3. Sends a welcome email to the subscriber
4. Returns a success message

**Email Template Features:**
- Branded welcome email
- Links to your blog
- Professional design with gradient headers
- Responsive layout

### Contact Form

**Endpoint**: `POST /api/contact`

**What happens when someone submits the form:**
1. Sends a notification email to admin (`BREVO_ADMIN_EMAIL`)
2. Sends an auto-reply to the user
3. Admin email includes all form details and allows direct reply
4. User receives a thank you message with links to services

**Email Template Features:**
- Professional notification email to admin
- Reply-to functionality (admin can reply directly)
- Auto-reply with branding and CTAs
- All contact details beautifully formatted

### RSS Campaign (Automated Newsletter)

**RSS Feed URL**: `https://iseyon-analytics-v0.vercel.app/feed.xml`

**What is an RSS Campaign:**
An RSS (Really Simple Syndication) campaign allows you to automatically send newsletters to your subscribers whenever new blog posts are published. Brevo will check your RSS feed periodically and send an email to your subscribers with the new content.

**Setup Instructions:**

1. **Log in to Brevo Dashboard**
   - Navigate to **Campaigns** → **RSS Campaigns**

2. **Create New RSS Campaign**
   - Click **Create an RSS Campaign**
   - Enter campaign name (e.g., "iSeyon Blog Updates")

3. **Configure RSS Feed**
   - RSS Feed URL: `https://iseyon-analytics-v0.vercel.app/feed.xml`
   - Brevo will automatically parse the feed and detect new posts
   - Test the feed to ensure it's working correctly

4. **Select Recipients**
   - Choose your newsletter list (Newsletter Subscribers)
   - Option to segment your audience if needed

5. **Design Email Template**
   - Choose a template or create your own
   - Use RSS merge tags to display blog content:
     - `{{ rss.title }}` - Blog post title
     - `{{ rss.description }}` - Blog post description
     - `{{ rss.link }}` - Link to full blog post
     - `{{ rss.image }}` - Featured image
     - `{{ rss.author }}` - Post author
     - `{{ rss.pubDate }}` - Publication date
     - `{{ rss.category }}` - Post category

6. **Set Frequency**
   - Choose how often Brevo should check for new posts:
     - Daily (recommended)
     - Weekly
     - Monthly
   - Set the time when emails should be sent

7. **Configure Sender Information**
   - From Name: `iSeyon Analytics`
   - From Email: `info@iSeyon.com` (must be verified)
   - Subject line: Use merge tags like "New Blog Post: {{ rss.title }}"

8. **Activate Campaign**
   - Review all settings
   - Click **Activate** to start the automated campaign
   - Brevo will send emails automatically when new blog posts are detected

**RSS Feed Features:**
- Complies with RSS 2.0 standard
- Includes Dublin Core (dc:) metadata for author information
- Supports content encoding for full article text
- Includes featured images as enclosures
- SEO-friendly with proper GUID and permalinks
- Cached for 1 hour for optimal performance

**Benefits:**
- 100% automated - no manual intervention needed
- Subscribers stay updated with latest content
- Professional, consistent email format
- Increases blog engagement and traffic
- Saves time managing manual newsletters

**Best Practices:**
- Keep blog posts consistent in format
- Use compelling titles and descriptions
- Include high-quality featured images
- Write engaging preview text in `shortDescription`
- Monitor campaign analytics in Brevo dashboard
- A/B test subject lines for better open rates

## Testing

### Test Newsletter Subscription

```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

### Test Contact Form

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test User",
    "email":"test@example.com",
    "company":"Test Company",
    "phone":"1234567890",
    "contactType":"demo",
    "industry":"Technology",
    "message":"This is a test message"
  }'
```

## Monitoring & Analytics

### View Email Statistics

1. Log in to Brevo dashboard
2. Navigate to **Statistics** → **Email**
3. View:
   - Delivery rates
   - Open rates
   - Click rates
   - Bounce rates

### Manage Contacts

1. Navigate to **Contacts**
2. View all subscribers
3. Export contacts
4. Segment contacts
5. Manage subscriptions

## Email Templates

Both newsletter and contact form emails use:
- HTML email templates
- Responsive design
- Inline CSS for compatibility
- Professional branding matching Iseyon Analytics
- Gradient headers (#0ea5e9 to #6366f1)

## Troubleshooting

### Email not sending

1. **Check API Key**: Ensure `BREVO_API_KEY` is correctly set
2. **Verify Sender**: Make sure sender email is verified in Brevo
3. **Check Logs**: Look for error messages in console
4. **API Limits**: Free plan has 300 emails/day limit

### Newsletter subscription issues

1. **List ID**: Verify `BREVO_NEWSLETTER_LIST_ID` is correct
2. **Duplicate emails**: The system handles duplicates gracefully
3. **Check Brevo dashboard**: View contacts to confirm additions

### Contact form issues

1. **Admin not receiving emails**: Check `BREVO_ADMIN_EMAIL`
2. **Auto-reply not working**: Check sender email verification
3. **Form validation**: Ensure required fields (name, email, message) are provided

## Security Notes

- Never commit `.env.local` to version control
- Keep your API key secure
- Rotate API keys periodically
- Use environment variables for all sensitive data

## Migration from Azure Graph API

This setup replaces the previous Azure Graph API implementation with Brevo. Benefits:
- Simpler setup (no OAuth configuration)
- Better email delivery rates
- Built-in contact management
- Analytics and tracking
- More generous free tier

## Additional Resources

- [Brevo API Documentation](https://developers.brevo.com/)
- [Brevo Email Templates](https://help.brevo.com/hc/en-us/articles/360000991500)
- [Brevo Contact Lists](https://help.brevo.com/hc/en-us/articles/209499765)

## Support

For issues with:
- **Brevo service**: Contact [Brevo Support](https://www.brevo.com/support/)
- **Implementation**: Check the API route files in `/app/api/newsletter` and `/app/api/contact`
