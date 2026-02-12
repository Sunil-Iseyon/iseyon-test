# Newsletter Subscription Troubleshooting Guide

## Current Issue: "Invalid confirmation token" Error

### Most Likely Cause

Your **Vercel production environment** has a **different API key** than what was used to generate the confirmation link.

**Why this happens:**
1. You received confirmation email with token generated using API key "A"
2. You updated API key in Vercel to "B" 
3. When you click the link, it tries to verify with API key "B"
4. Token mismatch → Error ❌

### How to Debug

#### Step 1: Check Vercel Logs

1. Go to https://vercel.com/dashboard
2. Select your project: `iseyon3`
3. Go to **Deployments** → Click latest deployment
4. Click **Runtime Logs** or **Functions** tab
5. Look for logs when you click the confirmation link:
   - `Token verification:` - Shows if tokens match
   - `providedToken:` vs `expectedToken:`
   - `tokensMatch: true/false`

#### Step 2: Verify Environment Variables Match

**In Vercel Dashboard:**
1. Settings → Environment Variables
2. Check `BREVO_API_KEY` value
3. Make sure it's the **SAME** as your current Brevo API key

**In Brevo Dashboard:**
1. Go to https://app.brevo.com/settings/keys/api
2. Check which API key you're currently using
3. If you generated a new one recently, that's the problem!

### Solution Options

#### Option A: Keep Current API Key (Recommended)

1. **Delete old confirmation emails** - They have tokens from old API key
2. **Subscribe again** with the current API key in Vercel
3. **Click the NEW confirmation link** - Will work ✅

#### Option B: Use Previous API Key

If you still have access to your old API key:
1. Go to Vercel → Settings → Environment Variables
2. Update `BREVO_API_KEY` to the old key (the one that generated the email)
3. Redeploy
4. Click the confirmation link - Should work now

#### Option C: Reset Everything

1. **In Vercel**: Update `BREVO_API_KEY` to your current active key
2. **Redeploy** the app
3. **Delete old test subscribers** from Brevo
4. **Subscribe fresh** - Get new confirmation email
5. **Click new link** - Will work ✅

---

## Admin Email Notifications

### ✅ What Sends to Admin Email (`mbehera@lancetindia.com`):

1. **Contact Form Submissions** - Someone fills out contact form
2. **Newsletter Subscriptions** - Someone confirms their newsletter subscription (NEW!)

### 📧 What You'll Receive:

**Contact Form:**
- Email with all form details
- Ability to reply directly to the sender

**Newsletter Subscription:**
- Notification: "New Newsletter Subscriber: [email]"
- Shows subscriber email, timestamp, source
- Link to manage in Brevo dashboard

### ⚠️ Note About Junk Folder

Admin emails may still go to **junk/spam** until you:
1. Set up SPF/DKIM/DMARC (see EMAIL_AUTHENTICATION_SETUP.md)
2. Mark emails from `manasi.behera@iseyon.com` as "Not Spam"
3. Add sender to contacts

---

## Understanding "Subscribed" Status in Brevo

When you see a contact as "subscribed" in Brevo but they got an error:

**What happened:**
1. User filled newsletter form
2. Confirmation email sent
3. User clicked old confirmation link (with old token)
4. Error shown BUT contact was already added from previous attempt
5. Brevo shows "subscribed" because they're in List #2
6. User didn't get welcome email because confirmation failed

**How to fix for that user:**
1. Go to Brevo → Contacts → Find the email
2. Check if they're in "Newsletter Subscribers" list
3. If YES: They're subscribed, manually send them a welcome email
4. If NO: Remove the contact and have them subscribe fresh

---

## Testing Checklist

### Local Testing (http://localhost:3000):
- [ ] Restart dev server after changes
- [ ] Subscribe with test email
- [ ] Check console logs for token generation
- [ ] Click confirmation link from email
- [ ] Check console logs for token verification
- [ ] Verify `tokensMatch: true` in logs
- [ ] Check for success redirect
- [ ] Verify welcome email received
- [ ] Verify admin notification received

### Production Testing (https://iseyon3.vercel.app):
- [ ] Deploy latest changes to Vercel
- [ ] Verify `BREVO_API_KEY` is set in Vercel env vars
- [ ] Subscribe with NEW email (not previously used)
- [ ] Check Vercel runtime logs for token generation
- [ ] Click confirmation link
- [ ] Check Vercel runtime logs for token verification
- [ ] Verify logs show `tokensMatch: true`
- [ ] Check for success redirect on website
- [ ] Check email for welcome message
- [ ] Check admin email for notification

---

## Common Errors & Solutions

### Error: "Invalid confirmation token"
**Cause:** API key mismatch between generation and verification
**Fix:** 
- Use the same API key in Vercel that generated the email
- OR subscribe fresh with current API key

### Error: "Subscription not found"
**Cause:** Contact doesn't exist in Brevo (rare)
**Fix:** Subscribe again with fresh email

### Error: "Failed to complete subscription"
**Cause:** Brevo API error when adding to list
**Fix:** 
- Check Brevo daily sending limits
- Verify List ID exists in Brevo
- Check Vercel logs for detailed error

### No welcome email received
**Causes:**
- Email in spam/junk folder ✉️
- Daily sending limit exceeded in Brevo
- Welcome email API call failed

**Fix:**
- Check spam folder first
- Check Brevo → Statistics → Email for delivery status
- Check Vercel logs for "Welcome email sent" or errors

### No admin notification received
**Causes:**
- `BREVO_ADMIN_EMAIL` not set in environment
- Email in spam/junk folder
- Admin notification API call failed

**Fix:**
- Verify `BREVO_ADMIN_EMAIL` in Vercel env vars
- Check spam folder
- Check Vercel logs for "Admin notification sent" or errors

---

## Quick Commands for Debugging

### View Vercel Logs (via CLI):
```bash
# Install Vercel CLI if not installed
npm i -g vercel

# Pull environment variables
vercel env pull

# View logs
vercel logs [deployment-url]
```

### Check Environment Variables:
```bash
# In your project root
cat .env.local | grep BREVO

# On Vercel
vercel env ls
```

---

## Need More Help?

1. **Share Vercel logs** showing the token verification
2. **Confirm API key** is the same in Vercel and Brevo
3. **Try with a fresh email** that's never been used before
4. **Check spam folders** for all emails (confirmation, welcome, admin notification)

The detailed logging will show exactly where the issue is happening! 🔍
