import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET() {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const leads = await prisma.contactLead.findMany({
            include: {
                project: {
                    select: { name: true }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        return NextResponse.json(leads)
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching leads' }, { status: 500 })
    }
}
