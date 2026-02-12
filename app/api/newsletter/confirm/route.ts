import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function GET(request: NextRequest) {
  // Auto-detect base URL for redirects
  // NEXT_PUBLIC_SITE_URL should be set in Vercel environment variables to https://iseyon3.vercel.app
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    const email = searchParams.get('email')

    if (!token || !email) {
      
      // Redirect to homepage with error
      return NextResponse.redirect(
        new URL('/?newsletter=error&message=Invalid confirmation link', baseUrl)
      )
    }

    // Check for required Brevo environment variables
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not set')
      return NextResponse.redirect(
        new URL('/?newsletter=error&message=Server configuration error', baseUrl)
      )
    }

    const apiKey = process.env.BREVO_API_KEY.trim()

    // Verify token using the same stateless method as generation
    const secret = process.env.BREVO_API_KEY || 'fallback-secret'
    const tokenData = `${email}-confirm-newsletter`
    const expectedToken = crypto
      .createHash('sha256')
      .update(`${tokenData}-${secret}`)
      .digest('hex')

    console.log('Token verification:', {
      email,
      providedToken: token.substring(0, 15) + '...' + token.substring(token.length - 10),
      expectedToken: expectedToken.substring(0, 15) + '...' + expectedToken.substring(expectedToken.length - 10),
      tokensMatch: token === expectedToken,
      providedLength: token.length,
      expectedLength: expectedToken.length,
      apiKeyPrefix: apiKey.substring(0, 10)
    })

    if (token !== expectedToken) {
      console.error('Token verification failed for:', email, {
        providedPrefix: token.substring(0, 10),
        expectedPrefix: expectedToken.substring(0, 10)
      })
      return NextResponse.redirect(
        new URL('/?newsletter=error&message=Invalid confirmation token', baseUrl)
      )
    }

    console.log('✅ Token verified successfully for:', email)

    // Check if contact already exists and is subscribed
    try {
      const getContactResponse = await fetch(
        `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
        {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'api-key': apiKey,
          },
        }
      )

      const newsletterListId = parseInt(process.env.BREVO_NEWSLETTER_LIST_ID || '2')

      // Check if already subscribed to the newsletter list
      if (getContactResponse.ok) {
        const contactData = await getContactResponse.json()
        const subscribedLists = contactData.listIds || []
        
        if (subscribedLists.includes(newsletterListId)) {
          console.log('User already subscribed:', email)
          return NextResponse.redirect(
            new URL('/?newsletter=already-confirmed', baseUrl)
          )
        }
      }
    } catch (error) {
      console.error('Error checking contact:', error)
      // Continue with subscription even if check fails
    }

    // Add or update contact to newsletter list
    try {
      const updateResponse = await fetch(
        'https://api.brevo.com/v3/contacts',
        {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'api-key': apiKey,
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            listIds: [parseInt(process.env.BREVO_NEWSLETTER_LIST_ID || '2')],
            updateEnabled: true, // Update if contact already exists
          }),
        }
      )

      if (!updateResponse.ok && updateResponse.status !== 201 && updateResponse.status !== 204) {
        const errorData = await updateResponse.json()
        console.error('Failed to add contact to newsletter list:', errorData)
        return NextResponse.redirect(
          new URL('/?newsletter=error&message=Failed to complete subscription', baseUrl)
        )
      }

      console.log('Newsletter subscription confirmed for:', email)

      // Send notification to admin about new subscriber
      if (process.env.BREVO_ADMIN_EMAIL) {
        try {
          await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'api-key': apiKey,
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              sender: {
                name: process.env.BREVO_SENDER_NAME || 'Iseyon Analytics',
                email: process.env.BREVO_SENDER_EMAIL || 'manasi.behera@iseyon.com',
              },
              to: [{
                email: process.env.BREVO_ADMIN_EMAIL,
                name: 'Iseyon Admin'
              }],
              subject: `New Newsletter Subscriber: ${email}`,
              textContent: `
New Newsletter Subscription

A new subscriber has confirmed their newsletter subscription:

Email: ${email}
Confirmed At: ${new Date().toLocaleString()}
Source: ${baseUrl}

You can manage this subscriber in your Brevo Dashboard:
https://app.brevo.com/contact/list/id/${process.env.BREVO_NEWSLETTER_LIST_ID}
              `,
              htmlContent: `
                <!DOCTYPE html>
                <html>
                  <body style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2 style="color: #0ea5e9;">✉️ New Newsletter Subscription</h2>
                    <p>A new subscriber has confirmed their newsletter subscription:</p>
                    <div style="background-color: #f0f9ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
                      <strong>Email:</strong> ${email}<br>
                      <strong>Confirmed At:</strong> ${new Date().toLocaleString()}<br>
                      <strong>Source:</strong> ${baseUrl}
                    </div>
                    <p>You can manage this subscriber in your <a href="https://app.brevo.com/contact/list/id/${process.env.BREVO_NEWSLETTER_LIST_ID}" style="color: #0ea5e9;">Brevo Dashboard</a>.</p>
                  </body>
                </html>
              `,
            }),
          })
          console.log('Admin notification sent for new subscriber:', email)
        } catch (error) {
          console.error('Failed to send admin notification:', error)
          // Don't fail the subscription if admin notification fails
        }
      }

      // Send welcome email to subscriber
      try {
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'api-key': apiKey,
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            sender: {
              name: process.env.BREVO_SENDER_NAME || 'Iseyon Analytics',
              email: process.env.BREVO_SENDER_EMAIL || 'manasi.behera@iseyon.com',
            },
            to: [{ email: email }],
            subject: 'Welcome to Iseyon Analytics Newsletter! 🎉',
            textContent: `
Welcome to Iseyon Analytics!

Thank you for confirming your subscription!

You'll now receive the latest updates on AI, analytics, and data insights directly in your inbox.

What to expect:
- Industry Insights: Latest trends in AI and analytics
- Best Practices: Expert tips and proven strategies  
- Case Studies: Real-world success stories
- Exclusive Content: Early access to new resources

In the meantime, explore our latest content:
- Read Our Blog: https://www.iseyon.com/blog
- Our Services: https://www.iseyon.com/services

Best regards,
The Iseyon Analytics Team

---
© ${new Date().getFullYear()} Iseyon Analytics. All rights reserved.
New York | New Jersey | Minnesota | California | Florida | Bangalore

Don't want to receive these emails? Unsubscribe: https://www.iseyon.com/unsubscribe?email=${encodeURIComponent(email)}
            `,
            htmlContent: `
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
                    <tr>
                      <td align="center">
                        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                          <!-- Header -->
                          <tr>
                            <td style="background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%); padding: 40px 20px; text-align: center;">
                              <h1 style="color: #ffffff; margin: 0; font-size: 32px;">🎉 Welcome!</h1>
                              <p style="color: #e0f2fe; margin: 10px 0 0; font-size: 16px;">You're now part of the Iseyon Analytics community</p>
                            </td>
                          </tr>
                          <!-- Content -->
                          <tr>
                            <td style="padding: 40px 30px;">
                              <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                                <strong>Thank you for confirming your subscription!</strong>
                              </p>
                              <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                                You'll now receive the latest updates on AI, analytics, and data insights directly in your inbox.
                              </p>
                              <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #0ea5e9;">
                                <h3 style="color: #0c4a6e; font-size: 18px; margin: 0 0 15px;">What to expect:</h3>
                                <ul style="color: #334155; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
                                  <li><strong>Industry Insights:</strong> Latest trends in AI and analytics</li>
                                  <li><strong>Best Practices:</strong> Expert tips and proven strategies</li>
                                  <li><strong>Case Studies:</strong> Real-world success stories</li>
                                  <li><strong>Exclusive Content:</strong> Early access to new resources</li>
                                </ul>
                              </div>
                              <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 30px;">
                                In the meantime, explore our latest content:
                              </p>
                              <table cellpadding="10" cellspacing="0" style="margin: 20px 0; width: 100%;">
                                <tr>
                                  <td style="text-align: center;">
                                    <a href="https://www.iseyon.com/blog" style="display: inline-block; background-color: #0ea5e9; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 5px;">
                                      📚 Read Our Blog
                                    </a>
                                  </td>
                                  <td style="text-align: center;">
                                    <a href="https://www.iseyon.com/services" style="display: inline-block; background-color: #6366f1; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 5px;">
                                      🚀 Our Services
                                    </a>
                                  </td>
                                </tr>
                              </table>
                              <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin: 30px 0 0;">
                                Best regards,<br>
                                <strong style="color: #1e293b;">The Iseyon Analytics Team</strong>
                              </p>
                            </td>
                          </tr>
                          <!-- Footer -->
                          <tr>
                            <td style="background-color: #1e293b; padding: 30px; text-align: center;">
                              <p style="color: #94a3b8; font-size: 14px; margin: 0 0 10px;">
                                &copy; ${new Date().getFullYear()} Iseyon Analytics. All rights reserved.
                              </p>
                              <p style="color: #94a3b8; font-size: 12px; margin: 0 0 15px;">
                                New York | New Jersey | Minnesota | California | Florida | Bangalore
                              </p>
                              <p style="color: #64748b; font-size: 12px; margin: 0;">
                                Don't want to receive these emails? <a href="https://www.iseyon.com/unsubscribe?email=${encodeURIComponent(email)}" style="color: #94a3b8; text-decoration: underline;">Unsubscribe</a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </body>
              </html>
            `,
          }),
        })
        console.log('Welcome email sent to confirmed subscriber:', email)
      } catch (error) {
        console.error('Failed to send welcome email:', error)
        // Don't fail the confirmation if welcome email fails
      }

      // Redirect to success page
      return NextResponse.redirect(
        new URL('/?newsletter=confirmed', baseUrl)
      )
      
    } catch (error) {
      console.error('Error confirming subscription:', error)
      return NextResponse.redirect(
        new URL('/?newsletter=error&message=Failed to confirm subscription', baseUrl)
      )
    }
  } catch (error) {
    console.error('Newsletter confirmation error:', error)
    return NextResponse.redirect(
      new URL('/?newsletter=error&message=An unexpected error occurred', baseUrl)
    )
  }
}
