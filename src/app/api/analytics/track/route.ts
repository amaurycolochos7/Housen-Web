import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { type, category, metadata } = body

        const event = await prisma.trackedEvent.create({
            data: {
                type,
                category,
                metadata: metadata || {},
            },
        })

        return NextResponse.json(event)
    } catch (error) {
        console.error('Error tracking event:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET() {
    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const stats = await prisma.trackedEvent.groupBy({
            by: ['type', 'category'],
            _count: {
                _all: true,
            },
        })

        return NextResponse.json(stats)
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
