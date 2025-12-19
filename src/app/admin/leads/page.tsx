import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import LeadsClient from './LeadsClient'

export default async function AdminLeadsPage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/admin/login')
    }

    // Fetch real stats with safety
    let totalLeads = 0
    let whatsappLeads = 0
    let webLeads = 0
    let scheduledAppointments = 0

    try {
        const [tLeads, wLeads, wbLeads, sAppts] = await Promise.all([
            prisma.contactLead.count().catch(() => 0),
            prisma.contactLead.count({ where: { source: 'WHATSAPP' } }).catch(() => 0),
            prisma.contactLead.count({ where: { source: 'WEB' } }).catch(() => 0),
            prisma.contactLead.count({ where: { status: 'CITA_PROGRAMADA' } }).catch(() => 0)
        ])
        totalLeads = tLeads
        whatsappLeads = wLeads
        webLeads = wbLeads
        scheduledAppointments = sAppts
    } catch (error) {
        console.error('Error fetching leads stats:', error)
    }

    return (
        <div className="min-h-screen bg-[var(--housen-light)]">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/admin" className="text-[var(--housen-gray)] hover:text-[var(--housen-dark)]">
                            ← Volver
                        </Link>
                        <h1 className="font-semibold text-[var(--housen-dark)]">CRM / Gestión de Leads</h1>
                    </div>
                    <button className="btn-secondary">
                        Exportar CSV
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <p className="text-sm text-[var(--housen-gray)]">Total Leads</p>
                        <p className="text-3xl font-bold text-[var(--housen-dark)]">{totalLeads}</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <p className="text-sm text-[var(--housen-gray)]">Desde WhatsApp</p>
                        <p className="text-3xl font-bold text-[#25D366]">
                            {whatsappLeads}
                        </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <p className="text-3xl font-bold text-purple-600">
                            {scheduledAppointments}
                        </p>
                    </div>
                </div>

                {/* Client-Side Interactivity */}
                <LeadsClient initialLeads={[]} /> {/* We could pass initial leads here but let's stick to client fetch for now or update it later */}
            </main>
        </div>
    )
}
