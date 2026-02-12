# Email System Summary - Quick Reference

## Current Status

✅ **Working**:
- Brevo API key authenticated
- Contact form sending emails to admin (`mbehera@lancetindia.com`)
- Contact form auto-reply to users
- Newsletter double opt-in system implemented
- Confirmation emails sending
- Welcome emails after confirmation

⚠️ **Issues**:
- Emails landing in **spam/junk folder** (both admin and users)
- **Root cause**: Domain `iseyon.com` lacks email authentication (SPF/DKIM/DMARC)

## Email Bouncer Locations

### 1. Contact Form Emails Go To:
- **Admin Email**: `mbehera@lancetindia.com` (you) - ✉️ Currently in junk
- **User Auto-Reply**: Email address they entered in form

### 2. Newsletter Emails Go To:
- **Confirmation Email**: User's email address
- **Welcome Email**: User's email address (after they click confirmation link)
- **Future Campaigns**: All confirmed subscribers in List #2

## How to Fix Junk Folder Issue

### Option 1: Set Up Email Authentication (**Permanent Fix**)

This is the **ONLY** way to permanently fix emails going to spam.

**Steps**:
1. **Go to Brevo**: https://app.brevo.com → Settings → Domains
2. **Add domain**: `iseyon.com`
3. **Copy DNS records** (Brevo will show you 3 records):
   - SPF record (TXT)
   - DKIM record (TXT)
   - DMARC record (TXT)
4. **Add to DNS** (contact whoever manages iseyon.com domain):
   - GoDaddy, Namecheap, Cloudflare, etc.
   - Paste each record exactly as shown
5. **Wait 24-48 hours** for DNS propagation
6. **Verify in Brevo** - Green checkmark means success
7. **Emails now go to inbox** ✅

**Detailed instructions**: See [EMAIL_AUTHENTICATION_SETUP.md](EMAIL_AUTHENTICATION_SETUP.md)

### Option 2: Temporary Workaround (**Quick Fix**)

For your admin email (`mbehera@lancetindia.com`):

1. **Mark as Not Spam**: Open email in junk → "Not Spam" button
2. **Add to Contacts**: Add `manasi.behera@iseyon.com` to your contacts
3. **Create Filter Rule**:
   - Go to your email settings
   - Create rule: If from `manasi.behera@iseyon.com` → Move to Inbox
   - This ensures future emails bypass junk folder

## Newsletter Flow Explained

### What Users Experience:

```
1. User enters email in newsletter form
   ↓
2. Gets message: "Check your email to confirm"
   ↓
3. Receives confirmation email (may be in spam)
   ↓
4. Clicks "Confirm Subscription" button
   ↓
5. Redirected to homepage with success banner
   ↓
6. Receives welcome email
   ↓
7. Will receive future newsletter campaigns
```

### What Happens in Backend:

1. **User submits email** → Saved in Brevo with `CONFIRMED: false`
2. **Confirmation email sent** → With unique link
3. **User clicks link** → Added to List #2 + `CONFIRMED: true`
4. **Welcome email sent** → Introduction to newsletter
5. **Future campaigns** → Admin sends from Brevo dashboard

**Full details**: See [NEWSLETTER_FLOW.md](NEWSLETTER_FLOW.md)

## How to Send Newsletter Campaigns

1. **Log in to Brevo**: https://app.brevo.com
2. **Go to Campaigns** → Email Campaigns → Create Campaign
3. **Select Recipients**: Choose "Newsletter Subscribers" list (ID: 2)
4. **Design Email**:
   - Use drag-and-drop editor
   - Or write HTML directly
   - Templates available
5. **Preview & Test**: Send test to yourself first
6. **Schedule or Send**: Choose time or send immediately
7. **Track Results**: View opens, clicks, bounces in statistics

## Understanding Contact Statuses in Brevo

Go to Brevo → Contacts → Search for an email to see:

### Contact Attributes:
- **Email**: The subscriber's email address
- **Lists**: Which lists they're in (Newsletter = List #2)
- **CONFIRMED**: `true` (confirmed) or `false` (pending confirmation)
- **CONFIRMATION_TOKEN**: Unique verification token
- **CONFIRMATION_SENT**: When confirmation email was sent
- **CONFIRMED_AT**: When they clicked confirmation link

### Subscription States:
- **Pending**: Received confirmation email, haven't clicked yet
- **Confirmed**: Clicked link, now in List #2, will receive campaigns
- **Unsubscribed**: Opted out (won't receive emails)

## Checking Email Logs

**To verify if emails were sent successfully**:

1. **Brevo Dashboard** → Statistics → Email
2. **Filter by date** to see recent emails
3. **View details**:
   - ✅ **Delivered**: Email successfully sent
   - ❌ **Bounced**: Email address invalid or full
   - 🚫 **Blocked**: Recipient's server blocked
   - 📧 **Opened**: User opened the email
   - 🔗 **Clicked**: User clicked link in email

## Key Files Reference

### API Routes:
- `app/api/contact/route.ts` - Contact form handler
- `app/api/newsletter/route.ts` - Newsletter subscription (sends confirmation)
- `app/api/newsletter/confirm/route.ts` - Handles confirmation clicks

### Components:
- `components/newsletter-status-banner.tsx` - Success/error messages
- `app/contact/page.tsx` - Contact form page
- `components/footer.tsx` - Newsletter signup form (likely)

### Configuration:
- `.env.local` - Environment variables (API keys, emails)
- `.env.example` - Template for environment variables

### Documentation:
- `NEWSLETTER_FLOW.md` - Complete newsletter flow details
- `EMAIL_AUTHENTICATION_SETUP.md` - How to fix spam folder issue
- `BREVO_SETUP.md` - Initial Brevo setup guide

## Environment Variables

In `.env.local`:

```env
# Brevo API (Required)
BREVO_API_KEY=xkeysib-3740fd45...  # Your API key

# Email Configuration
BREVO_SENDER_NAME="Iseyon Analytics"
BREVO_SENDER_EMAIL=manasi.behera@iseyon.com  # Verified sender
BREVO_ADMIN_EMAIL=mbehera@lancetindia.com    # Receives contact forms

# Newsletter
BREVO_NEWSLETTER_LIST_ID=2  # Confirmed subscribers list

# Confirmation Links
NEXT_PUBLIC_SITE_URL=http://localhost:3000  # Change in production
```

## Testing Checklist

### Contact Form:
- [ ] Submit form on `/contact` page
- [ ] Check admin email (`mbehera@lancetindia.com`) - may be in junk
- [ ] Check user email (address you entered) for auto-reply
- [ ] Verify you can reply to admin email directly

### Newsletter:
- [ ] Subscribe on homepage or newsletter page
- [ ] Check email for confirmation message - may be in spam
- [ ] Click "Confirm Subscription" button
- [ ] Redirected to homepage with green success banner
- [ ] Check email for welcome message
- [ ] Verify in Brevo: Contacts → Search email → Check `CONFIRMED: true`

## Common Questions

**Q: Why are emails in junk/spam?**
A: Domain authentication (SPF/DKIM) not set up. This is normal for new senders. Fix permanently by adding DNS records.

**Q: How do users unsubscribe?**
A: Click "Unsubscribe" link in email footers. Brevo handles this automatically.

**Q: Can I see who's subscribed?**
A: Yes! Brevo → Contacts → Lists → Newsletter Subscribers

**Q: How many emails can I send?**
A: Free tier: 300 emails/day. Paid plans have higher limits.

**Q: Do I need to code to send newsletters?**
A: No! Use Brevo's visual email builder. No coding required.

**Q: What if confirmation email never arrives?**
A: Check spam folder first. If not there, check Brevo logs or daily sending limit.

**Q: Can I import subscribers from another service?**
A: Yes! Brevo → Contacts → Import → Upload CSV. But they should re-confirm per best practices.

## Next Steps

1. **Test both systems** (contact form + newsletter)
2. **Set up DNS authentication** to fix junk folder (see EMAIL_AUTHENTICATION_SETUP.md)
3. **Add filter rule** in your email client (temporary fix)
4. **Send your first newsletter** from Brevo dashboard
5. **Monitor results** in Brevo statistics

## Support

- **Brevo Help**: https://help.brevo.com
- **DNS Help**: Contact your domain administrator
- **Code Issues**: Check console logs for errors
