import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET(
    req: Request,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const lead = await prisma.contactLead.findUnique({
            where: { id: params.id },
            include: {
                project: true,
                appointments: {
                    orderBy: { datetime: 'desc' }
                }
            }
        })
        return NextResponse.json(lead)
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching lead' }, { status: 500 })
    }
}

export async function PATCH(
    req: Request,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const body = await req.json()
        const lead = await prisma.contactLead.update({
            where: { id: params.id },
            data: body
        })
        return NextResponse.json(lead)
    } catch (error) {
        return NextResponse.json({ error: 'Error updating lead' }, { status: 500 })
    }
}

export async function DELETE(
    req: Request,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        await prisma.contactLead.delete({
            where: { id: params.id }
        })
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting lead' }, { status: 500 })
    }
}
