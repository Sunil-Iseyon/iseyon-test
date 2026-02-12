import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check for required Brevo environment variables
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not set')
      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      )
    }

    const apiKey = process.env.BREVO_API_KEY.trim()

    // Generate confirmation token using email and a secret
    // This is stateless - we can verify it without storing in Brevo
    const secret = process.env.BREVO_API_KEY || 'fallback-secret'
    const tokenData = `${email}-confirm-newsletter`
    const token = crypto
      .createHash('sha256')
      .update(`${tokenData}-${secret}`)
      .digest('hex')

    console.log('Newsletter subscription - Token generated:', {
      email,
      tokenPrefix: token.substring(0, 15),
      tokenLength: token.length,
      apiKeyPrefix: apiKey.substring(0, 10)
    })

    // Auto-detect base URL (works for both local and production)
    // NEXT_PUBLIC_SITE_URL should be set in Vercel environment variables to https://iseyon3.vercel.app
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    console.log('Base URL for confirmation link:', baseUrl)

    // Create confirmation URL
    const confirmUrl = `${baseUrl}/api/newsletter/confirm?token=${token}&email=${encodeURIComponent(email)}`

    console.log('Newsletter subscription initiated for:', email)

    // Add contact to Brevo immediately with UNCONFIRMED status
    // This way you can see all subscription attempts in Brevo
    try {
      await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': apiKey,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          attributes: {
            SUBSCRIPTION_STATUS: 'PENDING_CONFIRMATION',
            SUBSCRIPTION_DATE: new Date().toISOString()
          },
          updateEnabled: true,
        }),
      })
      console.log('Contact added to Brevo with pending status:', email)
    } catch (error) {
      console.error('Failed to add contact to Brevo:', error)
      // Continue anyway - we'll add them to the list after confirmation
    }

    // Send confirmation email
    const confirmationEmailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
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
        subject: 'Please confirm your newsletter subscription',
        textContent: `Thank you for your interest in Iseyon Analytics Newsletter!

To complete your subscription and start receiving our latest insights on AI, analytics, and data science, please confirm your email address by clicking the link below:

${confirmUrl}

Didn't sign up? You can safely ignore this email. Your email address will not be added to our list.

© ${new Date().getFullYear()} Iseyon Analytics. All rights reserved.
New York | New Jersey | Minnesota | California | Florida | Bangalore`,
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
                              <h1 style="color: #ffffff; margin: 0; font-size: 28px;">📧 Confirm Your Subscription</h1>
                            </td>
                          </tr>
                          <!-- Content -->
                          <tr>
                            <td style="padding: 40px 30px;">
                              <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                                Thank you for your interest in Iseyon Analytics Newsletter!
                              </p>
                              <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 30px;">
                                To complete your subscription and start receiving our latest insights on AI, analytics, and data science, please confirm your email address by clicking the button below:
                              </p>
                              <div style="text-align: center; margin: 30px 0;">
                                <a href="${confirmUrl}" style="background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%); color: #ffffff; padding: 16px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; font-size: 16px;">
                                  ✓ Confirm Subscription
                                </a>
                              </div>
                              <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin: 30px 0 0; text-align: center;">
                                Or copy and paste this link into your browser:<br>
                                <a href="${confirmUrl}" style="color: #0ea5e9; word-break: break-all;">${confirmUrl}</a>
                              </p>
                              <div style="margin-top: 30px; padding: 15px; background-color: #fef3c7; border-radius: 6px; border-left: 4px solid #f59e0b;">
                                <p style="margin: 0; color: #92400e; font-size: 14px;">
                                  ⚠️ <strong>Didn't sign up?</strong> You can safely ignore this email. Your email address will not be added to our list.
                                </p>
                              </div>
                            </td>
                          </tr>
                          <!-- Footer -->
                          <tr>
                            <td style="background-color: #1e293b; padding: 30px; text-align: center;">
                              <p style="color: #94a3b8; font-size: 14px; margin: 0 0 10px;">
                                &copy; ${new Date().getFullYear()} Iseyon Analytics. All rights reserved.
                              </p>
                              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                                New York | New Jersey | Minnesota | California | Florida | Bangalore
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

    if (!confirmationEmailResponse.ok) {
      const errorData = await confirmationEmailResponse.json()
      console.error('Failed to send confirmation email:', {
        status: confirmationEmailResponse.status,
        statusText: confirmationEmailResponse.statusText,
        error: errorData,
        email: email
      })
      return NextResponse.json(
        { error: 'Failed to send confirmation email. Please try again later.' },
        { status: 500 }
      )
    }

    console.log('Confirmation email sent successfully to:', email)

    return NextResponse.json(
      { 
        message: 'Please check your email to confirm your subscription. Check your spam/junk folder if you don\'t see it within a few minutes.',
        requiresConfirmation: true
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
