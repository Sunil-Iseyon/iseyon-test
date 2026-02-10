# iSeyon Analytics - Email Integration Setup Guide

This guide will help you set up OAuth2 authentication for sending emails through your Outlook/Microsoft 365 account.

## Prerequisites

- An active Microsoft 365 or Outlook.com account
- Azure AD admin access (or contact your IT admin)
- Node.js and pnpm installed

## Setup Steps

### 1. Register an Application in Azure Portal

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** → **App registrations**
3. Click **New registration**
4. Fill in the details:
   - **Name**: `iSeyon Email Service` (or your preferred name)
   - **Supported account types**: Select "Accounts in this organizational directory only"
   - Click **Register**

### 2. Collect Your Credentials

After registration, you'll need three values:

#### Application (Client) ID
- Found on the app's **Overview** page
- Copy this value for `AZURE_CLIENT_ID`

#### Directory (Tenant) ID
- Also on the **Overview** page
- Copy this value for `AZURE_TENANT_ID`

#### Client Secret
1. Go to **Certificates & secrets** in the left menu
2. Click **New client secret**
3. Add a description (e.g., "Email Service Secret")
4. Set expiration (recommended: 24 months)
5. Click **Add**
6. **IMMEDIATELY** copy the secret value - you can't view it again!
7. Use this value for `AZURE_CLIENT_SECRET`

### 3. Configure API Permissions

1. Go to **API permissions** in the left menu
2. Click **Add a permission**
3. Select **Microsoft Graph**
4. Choose **Application permissions** (not Delegated)
5. Add these permissions:
   - `Mail.Send` - Required for sending emails
   - `Mail.ReadWrite` - Optional, for reading emails
6. Click **Add permissions**
7. Click **Grant admin consent for [Your Organization]**
   - This requires admin privileges
   - If you don't have admin rights, contact your IT administrator

### 4. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and fill in your values:
   ```env
   AZURE_TENANT_ID=your-tenant-id-here
   AZURE_CLIENT_ID=your-client-id-here
   AZURE_CLIENT_SECRET=your-client-secret-here
   EMAIL_USER=your-email@yourdomain.com
   EMAIL_RECIPIENT=admin@yourdomain.com
   ```

### 5. Verify Email Account

Make sure the email account you're using (`EMAIL_USER`) has:
- Active Microsoft 365 subscription OR Outlook.com account
- Permission to send emails
- Proper Exchange Online license (for Microsoft 365)

## Testing

### Test Contact Form
1. Start your development server:
   ```bash
   pnpm dev
   ```
2. Navigate to `http://localhost:3000/contact`
3. Fill out and submit the form
4. Check the console for any errors
5. Verify email delivery to `EMAIL_RECIPIENT`

### Test Newsletter Subscription
1. Navigate to any page with the footer
2. Enter an email in the newsletter subscription form
3. Submit and check:
   - Confirmation email to the subscriber
   - Notification email to the admin

## Troubleshooting

### Common Issues

#### "Invalid client secret"
- The client secret may have expired
- Generate a new secret in Azure Portal
- Update `.env.local` with the new secret

#### "Insufficient privileges"
- Make sure admin consent was granted for API permissions
- Verify the app has `Mail.Send` application permission
- Check that the permission is for "Application" not "Delegated"

#### "Authentication failed"
- Verify all three credentials (Tenant ID, Client ID, Client Secret) are correct
- Check for extra spaces or quotes in `.env.local`
- Ensure `.env.local` is in the project root directory

#### "SMTP connection failed"
- Outlook SMTP server: `smtp.office365.com`
- Port: `587`
- Make sure your firewall allows outbound connections on port 587

#### Emails not being sent
- Check the console logs for detailed error messages
- Verify `EMAIL_USER` is a valid Microsoft 365/Outlook account
- Ensure the account has an active subscription
- Check spam/junk folders

### Enable Detailed Logging

To see more detailed error messages, check the browser console (for client-side errors) and terminal (for server-side errors).

## Security Best Practices

1. **Never commit `.env.local` to version control**
   - It's already in `.gitignore`
   - Double-check before pushing code

2. **Rotate secrets regularly**
   - Set a reminder to renew client secrets before they expire
   - Azure will notify you, but it's good to track independently

3. **Use environment-specific secrets**
   - Different secrets for development, staging, and production
   - Never use production secrets in development

4. **Limit permissions**
   - Only grant the minimum required API permissions
   - Regularly audit what permissions your app has

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add all environment variables to your hosting platform's settings
2. Do NOT include `.env.local` in your deployment
3. Use the platform's environment variable feature
4. Test thoroughly before going live

### Vercel
```bash
vercel env add AZURE_TENANT_ID
vercel env add AZURE_CLIENT_ID
vercel env add AZURE_CLIENT_SECRET
vercel env add EMAIL_USER
vercel env add EMAIL_RECIPIENT
```

## Additional Resources

- [Microsoft Graph Mail API Documentation](https://learn.microsoft.com/en-us/graph/api/resources/mail-api-overview)
- [OAuth 2.0 Client Credentials Flow](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow)
- [Nodemailer Documentation](https://nodemailer.com/)
- [Azure AD App Registration](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review the console logs for specific error messages
3. Verify all configuration steps were completed
4. Check Azure AD audit logs for authentication attempts

## Features

### Contact Form
- Validates all required fields
- Sends formatted email to admin
- Shows success/error messages
- Includes all form data in email

### Newsletter Subscription
- Validates email format
- Sends confirmation to subscriber
- Notifies admin of new subscription
- Prevents duplicate submissions during processing
- Shows success/error feedback

Both features use OAuth2 for secure authentication with Microsoft services.
