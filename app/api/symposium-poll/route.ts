import { NextRequest, NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

export interface SymposiumPollPayload {
  name: string | null
  email: string
  attending: string
  preferredMonth: string
  topicInterests: string[]
  otherTopic: string | null
}

const redis = Redis.fromEnv()

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SymposiumPollPayload
    const { email, attending, preferredMonth, topicInterests } = body

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Valid email address is required.' }, { status: 400 })
    }
    if (!attending) {
      return NextResponse.json({ error: 'Attendance preference is required.' }, { status: 400 })
    }
    if (!preferredMonth) {
      return NextResponse.json({ error: 'Preferred month is required.' }, { status: 400 })
    }
    if (!Array.isArray(topicInterests) || topicInterests.length === 0) {
      return NextResponse.json({ error: 'At least one topic interest is required.' }, { status: 400 })
    }

    const record = {
      ...body,
      submittedAt: new Date().toISOString(),
    }

    // Push each response to a Redis list — newest first
    await redis.lpush('symposium:poll:responses', JSON.stringify(record))

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[Symposium Poll Error]', error)
    return NextResponse.json({ error: 'Failed to process submission.' }, { status: 500 })
  }
}
