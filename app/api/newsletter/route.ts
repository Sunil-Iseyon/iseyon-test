import { NextRequest, NextResponse } from 'next/server'

// Function to get access token using client credentials flow
async function getAccessToken() {
  const tokenEndpoint = `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/token`
  
  const params = new URLSearchParams({
    client_id: process.env.AZURE_CLIENT_ID!,
    client_secret: process.env.AZURE_CLIENT_SECRET!,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  })

  const response = await fetch(tokenEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  })

  const data = await response.json()
  
  if (!response.ok) {
    throw new Error(`Failed to get access token: ${data.error_description || data.error}`)
  }
  
  return data.access_token
}

// Function to send email using Microsoft Graph API
async function sendEmailViaGraph(accessToken: string, emailData: any) {
  const graphEndpoint = `https://graph.microsoft.com/v1.0/users/${process.env.SMTP_USER}/sendMail`
  
  const response = await fetch(graphEndpoint, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Failed to send email: ${error}`)
  }
  
  return response
}

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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Get access token
    const accessToken = await getAccessToken()

    // Prepare confirmation email to subscriber
    const confirmationEmailData = {
      message: {
        subject: "Welcome to iSeyon Analytics Newsletter",
        body: {
          contentType: "HTML",
          content: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #4F46E5 0%, #6366F1 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to iSeyon Analytics</h1>
              </div>
              
              <div style="background-color: #ffffff; padding: 40px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
                <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                  Thank you for subscribing to our newsletter!
                </p>
                
                <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                  You'll now receive the latest updates on:
                </p>
                
                <ul style="color: #374151; line-height: 1.8; font-size: 15px;">
                  <li>AI-powered analytics insights</li>
                  <li>Business intelligence trends</li>
                  <li>Industry best practices</li>
                  <li>New product features and updates</li>
                  <li>Exclusive content and resources</li>
                </ul>

                <div style="background-color: #EEF2FF; padding: 20px; border-radius: 8px; margin: 30px 0;">
                  <p style="margin: 0; color: #4F46E5; font-weight: 600; font-size: 16px;">
                    🎉 Stay tuned for valuable insights!
                  </p>
                </div>

                <p style="font-size: 14px; color: #6b7280; margin-top: 30px;">
                  If you have any questions, feel free to reach out to us at 
                  <a href="mailto:info@iSeyon.com" style="color: #4F46E5; text-decoration: none;">info@iSeyon.com</a>
                </p>
              </div>

              <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
                <p style="margin: 5px 0;">© 2026 iSeyon Analytics. All rights reserved.</p>
              </div>
            </div>
          `,
        },
        toRecipients: [
          {
            emailAddress: {
              address: email,
            },
          },
        ],
      },
    }

    // Prepare notification email to admin
    const notificationEmailData = {
      message: {
        subject: "New Newsletter Subscription",
        body: {
          contentType: "HTML",
          content: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
                New Newsletter Subscription
              </h2>
              
              <div style="margin: 20px 0; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
                <p style="font-size: 16px; color: #374151; margin: 0;">
                  <strong>Email:</strong> <a href="mailto:${email}" style="color: #4F46E5;">${email}</a>
                </p>
                <p style="font-size: 14px; color: #6b7280; margin-top: 10px;">
                  Subscribed on: ${new Date().toLocaleString()}
                </p>
              </div>

              <div style="margin-top: 20px; padding: 15px; background-color: #EEF2FF; border-left: 4px solid #4F46E5; border-radius: 4px;">
                <p style="margin: 0; color: #4F46E5; font-size: 14px;">
                  💡 Consider adding this subscriber to your email marketing platform.
                </p>
              </div>
            </div>
          `,
        },
        toRecipients: [
          {
            emailAddress: {
              address: process.env.CONTACT_EMAIL || process.env.EMAIL_RECIPIENT || "infoindia@lancetindia.com",
            },
          },
        ],
      },
    }

    // Send both emails via Microsoft Graph API
    if (process.env.AZURE_CLIENT_ID && process.env.AZURE_CLIENT_SECRET && process.env.AZURE_TENANT_ID && process.env.SMTP_USER) {
      try {
        await Promise.all([
          sendEmailViaGraph(accessToken, confirmationEmailData),
          sendEmailViaGraph(accessToken, notificationEmailData)
        ])

        return NextResponse.json(
          { 
            success: true,
            message: 'Successfully subscribed! Check your email for confirmation.'
          },
          { status: 200 }
        )
      } catch (emailError) {
        console.error('Error sending newsletter emails:', emailError)
        console.log('Newsletter subscription:', email)
        
        return NextResponse.json(
          { 
            error: 'Failed to send confirmation email. Please try again.',
            details: emailError instanceof Error ? emailError.message : 'Unknown error'
          },
          { status: 500 }
        )
      }
    } else {
      console.log('Azure OAuth credentials not configured. Email not sent.')
      console.log('Newsletter subscription:', email)
      
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly.' },
        { status: 503 }
      )
    }
  } catch (error) {
    console.error('Error processing newsletter subscription:', error)
    return NextResponse.json(
      { 
        error: 'Failed to subscribe. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
