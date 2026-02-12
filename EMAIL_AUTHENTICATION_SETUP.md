# Email Authentication Setup - Fix Spam/Junk Folder Issue

## Why Emails Go to Spam

Your emails are landing in spam/junk folders because `manasi.behera@iseyon.com` lacks proper email authentication (SPF, DKIM, DMARC). This is normal for new senders but can be fixed.

## Solution: Set Up Email Authentication in Brevo

### Step 1: Get Authentication Records from Brevo

1. **Log in to Brevo**: https://app.brevo.com
2. **Go to Settings** → **Senders & IPs** → **Domains**
3. **Add your domain**: `iseyon.com`
4. Brevo will provide you with DNS records:
   - **SPF Record** (TXT record)
   - **DKIM Record** (TXT record)
   - **DMARC Record** (TXT record) - optional but recommended

### Step 2: Add DNS Records to Your Domain

**You need access to your domain's DNS settings** (usually through your domain registrar like GoDaddy, Namecheap, Cloudflare, etc.)

#### Example DNS Records (yours will be different):

```
Type: TXT
Host/Name: @
Value: v=spf1 include:spf.brevo.com ~all
TTL: 3600
```

```
Type: TXT
Host/Name: mail._domainkey
Value: [Long DKIM key provided by Brevo]
TTL: 3600
```

```
Type: TXT
Host/Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:manasi.behera@iseyon.com
TTL: 3600
```

### Step 3: Verify in Brevo

1. After adding DNS records, **wait 24-48 hours** for propagation
2. Go back to Brevo → Settings → Domains
3. Click **Verify** next to your domain
4. Green checkmark ✅ = Authentication successful

### Step 4: Warm Up Your Sender Reputation

Even with authentication, new senders need to build reputation:

- **Start slow**: Send 10-20 emails/day for the first week
- **Gradually increase**: Double the volume each week
- **Monitor**: Check Brevo statistics for bounces/spam reports
- **Avoid**: Sending bulk emails immediately

## Alternative: Use a Verified Brevo Domain

If you cannot access DNS settings for `iseyon.com`, you can:

1. **Use a subdomain**: `mail.iseyon.com` or `newsletter.iseyon.com`
2. **Use Brevo's shared domain**: Less professional but works immediately
3. **Contact your IT team** to add the DNS records

## Quick Fix (Temporary)

Until DNS is configured, tell recipients to:

1. **Check spam/junk folder**
2. **Mark as "Not Spam"**
3. **Add sender to contacts**: `manasi.behera@iseyon.com`

This trains their email provider to trust future emails.

## Verify DNS Records (After Adding)

Use these tools to check if DNS records are properly set:

- **MXToolbox**: https://mxtoolbox.com/SuperTool.aspx
- **Google DNS Checker**: https://toolbox.googleapps.com/apps/checkmx/

Enter `iseyon.com` and verify SPF, DKIM, and DMARC records are present.

## Current Status

- ✅ **Brevo API Key**: Working
- ✅ **Sender Email Verified**: `manasi.behera@iseyon.com`
- ✅ **Emails Sending**: Successfully
- ❌ **SPF/DKIM/DMARC**: Not configured (causing spam folder delivery)
- ⏳ **Sender Reputation**: New (will improve over time)

## Next Steps

1. **Contact your domain administrator** or whoever manages `iseyon.com` DNS
2. **Request DNS records** from Brevo dashboard
3. **Add records** to DNS (or ask admin to do it)
4. **Wait 24-48 hours** for propagation
5. **Verify** in Brevo
6. **Test** by sending emails again

Once authentication is set up, emails will land in inbox instead of spam! 📧✅
