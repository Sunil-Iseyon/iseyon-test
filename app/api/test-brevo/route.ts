import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey = process.env.BREVO_API_KEY?.trim()
  
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not set' }, { status: 500 })
  }

  try {
    // Test the API key by calling Brevo's account endpoint
    const response = await fetch('https://api.brevo.com/v3/account', {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
      },
    })

    const data = await response.json()

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      statusText: response.statusText,
      apiKeyInfo: {
        length: apiKey.length,
        prefix: apiKey.substring(0, 15),
        suffix: apiKey.substring(apiKey.length - 15),
      },
      accountData: response.ok ? {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        companyName: data.companyName,
      } : data,
    })
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to test API key',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
