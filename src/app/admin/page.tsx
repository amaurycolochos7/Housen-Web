import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import DashboardClient from './DashboardClient'

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/admin/login')
    }

    // Default metrics
    let projectCount = 0
    let leadCount = 0
    let clickCount = 0
    let appointmentCount = 0
    let recentLeads: any[] = []

    try {
        // Fetch real metrics with safe fallback
        const [pCount, lCount, cCount, aCount] = await Promise.all([
            prisma.project.count().catch(() => 0),
            prisma.contactLead.count().catch(() => 0),
            prisma.trackedEvent.count({ where: { type: 'WHATSAPP_CLICK' } }).catch(() => 0),
            prisma.appointment.count({ where: { status: 'PENDIENTE' } }).catch(() => 0)
        ])

        projectCount = pCount
        leadCount = lCount
        clickCount = cCount
        appointmentCount = aCount

        recentLeads = await prisma.contactLead.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
            include: { project: { select: { name: true } } }
        }).catch(() => [])
    } catch (error) {
        console.error('Error fetching dashboard stats:', error)
    }

    const stats = [
        { label: 'Proyectos Totales', value: projectCount, icon: '🏗️' },
        { label: 'Leads Recibidos', value: leadCount, icon: '📧' },
        { label: 'Clics WhatsApp', value: clickCount, icon: '💬', highlight: 'text-green-600' },
        { label: 'Citas Pendientes', value: appointmentCount, icon: '📅', highlight: 'text-purple-600' },
    ]

    return (
        <DashboardClient
            session={session}
            stats={stats}
            recentLeads={recentLeads}
            clickCount={clickCount}
            leadCount={leadCount}
            appointmentCount={appointmentCount}
        />
    )
}
