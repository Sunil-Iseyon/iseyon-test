import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Parse FormData to handle file uploads
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const company = formData.get('company') as string
    const phone = formData.get('phone') as string
    const contactType = formData.get('contactType') as string
    const industry = formData.get('industry') as string
    const message = formData.get('message') as string
    
    // Extract attachments
    const attachments: Array<{ content: string; name: string }> = []
    let attachmentIndex = 0
    while (formData.has(`attachment_${attachmentIndex}`)) {
      const file = formData.get(`attachment_${attachmentIndex}`) as File
      if (file) {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const base64Content = buffer.toString('base64')
        attachments.push({
          content: base64Content,
          name: file.name
        })
      }
      attachmentIndex++
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
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
    
    console.log('Brevo Config:', {
      apiKeyExists: !!apiKey,
      apiKeyLength: apiKey.length,
      apiKeyPrefix: apiKey.substring(0, 10),
      apiKeySuffix: apiKey.substring(apiKey.length - 10),
      senderEmail: process.env.BREVO_SENDER_EMAIL,
      adminEmail: process.env.BREVO_ADMIN_EMAIL
    })

    // Send notification email to admin
    const adminEmailPayload: any = {
      sender: {
        name: process.env.BREVO_SENDER_NAME || 'Iseyon Website',
        email: process.env.BREVO_SENDER_EMAIL || 'manasi.behera@iseyon.com',
      },
      to: [{
        email: process.env.BREVO_ADMIN_EMAIL || 'mbehera@lancetindia.com',
        name: 'Iseyon Team'
      }],
      replyTo: {
        email: email,
        name: name
      },
      subject: `New Contact Form Submission from ${name}${attachments.length > 0 ? ` (${attachments.length} attachment${attachments.length > 1 ? 's' : ''})` : ''}`,
      textContent: `
New Contact Form Submission

Contact Information:
Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}
${contactType ? `Contact Type: ${contactType}` : ''}
${industry ? `Industry: ${industry}` : ''}

Message:
${message}

${attachments.length > 0 ? `\nAttachments (${attachments.length}):\n${attachments.map(a => `- ${a.name}`).join('\n')}` : ''}

---
Submitted on ${new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}

Tip: You can reply directly to this email to respond to ${name}.
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
                        <td style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px 20px; text-align: center;">
                          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                        </td>
                      </tr>
                      <!-- Content -->
                      <tr>
                        <td style="padding: 30px;">
                          <h2 style="color: #1e293b; font-size: 18px; margin: 0 0 20px;">Contact Information</h2>
                          <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 20px;">
                            <tr>
                              <td style="color: #64748b; font-weight: bold; width: 150px;">Name:</td>
                              <td style="color: #1e293b;">${name}</td>
                            </tr>
                            <tr>
                              <td style="color: #64748b; font-weight: bold;">Email:</td>
                              <td style="color: #1e293b;"><a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></td>
                            </tr>
                            ${company ? `
                            <tr>
                              <td style="color: #64748b; font-weight: bold;">Company:</td>
                              <td style="color: #1e293b;">${company}</td>
                            </tr>
                            ` : ''}
                            ${phone ? `
                            <tr>
                              <td style="color: #64748b; font-weight: bold;">Phone:</td>
                              <td style="color: #1e293b;">${phone}</td>
                            </tr>
                            ` : ''}
                            ${contactType ? `
                            <tr>
                              <td style="color: #64748b; font-weight: bold;">Contact Type:</td>
                              <td style="color: #1e293b;">${contactType}</td>
                            </tr>
                            ` : ''}
                            ${industry ? `
                            <tr>
                              <td style="color: #64748b; font-weight: bold;">Industry:</td>
                              <td style="color: #1e293b;">${industry}</td>
                            </tr>
                            ` : ''}
                          </table>
                          <h3 style="color: #1e293b; font-size: 16px; margin: 20px 0 10px;">Message:</h3>
                          <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; border-left: 4px solid #0ea5e9;">
                            <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                          </div>
                          ${attachments.length > 0 ? `
                          <h3 style="color: #1e293b; font-size: 16px; margin: 20px 0 10px;">Attachments (${attachments.length}):</h3>
                          <div style="background-color: #f0fdf4; padding: 15px; border-radius: 6px; border-left: 4px solid #10b981;">
                            ${attachments.map(a => `<p style="margin: 5px 0; color: #166534;">📎 ${a.name}</p>`).join('')}
                          </div>
                          ` : ''}
                          <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 6px; border-left: 4px solid #3b82f6;">
                            <p style="margin: 0; color: #1e40af; font-size: 14px;">
                              💡 <strong>Tip:</strong> You can reply directly to this email to respond to ${name}.
                            </p>
                          </div>
                        </td>
                      </tr>
                      <!-- Footer -->
                      <tr>
                        <td style="background-color: #f8fafc; padding: 20px; text-align: center;">
                          <p style="color: #64748b; font-size: 12px; margin: 0;">
                            Submitted on ${new Date().toLocaleString('en-US', { 
                              dateStyle: 'long', 
                              timeStyle: 'short' 
                            })}
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
    }
    
    // Add attachments to the payload if present
    if (attachments.length > 0) {
      adminEmailPayload.attachment = attachments
    }
    
    const adminEmailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify(adminEmailPayload),
    })

    if (!adminEmailResponse.ok) {
      const errorData = await adminEmailResponse.json()
      console.error('Brevo admin email error:', {
        status: adminEmailResponse.status,
        statusText: adminEmailResponse.statusText,
        error: errorData
      })
      
      // Return helpful error message
      if (errorData.code === 'unauthorized') {
        return NextResponse.json(
          { error: 'Email service authentication failed. Please verify your Brevo API key and sender email are correct.' },
          { status: 500 }
        )
      }
      
      throw new Error(`Failed to send notification email: ${errorData.message || 'Unknown error'}`)
    }

    // Send auto-reply to user
    console.log('Attempting to send auto-reply to:', email)
    try {
      const autoReplyResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
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
          to: [{ email: email, name: name }],
          subject: 'Thank you for contacting Iseyon Analytics',
          textContent: `
Thank You for Reaching Out!

Dear ${name},

Thank you for contacting Iseyon Analytics. We have received your message and one of our team members will get back to you within 24 hours.

Your Message:
${message}

In the meantime, feel free to explore:
- Our Services: https://www.iseyon.com/services
- Read Our Blog: https://www.iseyon.com/blog

Best regards,
The Iseyon Analytics Team

---
© ${new Date().getFullYear()} Iseyon Analytics. All rights reserved.
New York | New Jersey | Minnesota | California | Florida | Bangalore
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
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Thank You for Reaching Out!</h1>
                          </td>
                        </tr>
                        <!-- Content -->
                        <tr>
                          <td style="padding: 40px 30px;">
                            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                              Dear ${name},
                            </p>
                            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                              Thank you for contacting Iseyon Analytics. We have received your message and one of our team members will get back to you within 24 hours.
                            </p>
                            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #0ea5e9;">
                              <h3 style="color: #1e293b; font-size: 16px; margin: 0 0 10px;">Your Message:</h3>
                              <p style="color: #475569; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                            </div>
                            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                              In the meantime, feel free to explore our:
                            </p>
                            <table cellpadding="10" cellspacing="0" style="margin: 20px 0; width: 100%;">
                              <tr>
                                <td style="text-align: center;">
                                  <a href="https://www.iseyon.com/services" style="display: inline-block; background-color: #0ea5e9; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 5px;">
                                    Our Services
                                  </a>
                                </td>
                                <td style="text-align: center;">
                                  <a href="https://www.iseyon.com/blog" style="display: inline-block; background-color: #6366f1; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 5px;">
                                    Read Our Blog
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

      if (!autoReplyResponse.ok) {
        const errorData = await autoReplyResponse.json()
        console.error('Failed to send auto-reply to user:', {
          status: autoReplyResponse.status,
          statusText: autoReplyResponse.statusText,
          error: errorData,
          userEmail: email
        })
      } else {
        console.log('Auto-reply sent successfully to:', email)
      }
    } catch (autoReplyError) {
      console.error('Failed to send auto-reply:', autoReplyError)
      // Don't fail the request if auto-reply fails
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
      },
      { status: 200 }
    )

  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }
}
