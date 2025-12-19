import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET() {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const appointments = await prisma.appointment.findMany({
            include: {
                lead: true
            },
            orderBy: {
                datetime: 'asc'
            }
        })
        return NextResponse.json(appointments)
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching appointments' }, { status: 500 })
    }
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const body = await req.json()
        const appointment = await prisma.appointment.create({
            data: {
                leadId: body.leadId,
                datetime: new Date(body.datetime),
                location: body.location,
                notes: body.notes,
                status: body.status || 'PENDIENTE'
            }
        })

        // If appointment is created, update lead status
        await prisma.contactLead.update({
            where: { id: body.leadId },
            data: { status: 'CITA_PROGRAMADA' }
        })

        return NextResponse.json(appointment)
    } catch (error) {
        console.error('API Error:', error)
        return NextResponse.json({ error: 'Error creating appointment' }, { status: 500 })
    }
}
