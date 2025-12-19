'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Lead {
    id: string
    name: string
    phone: string
    email?: string
    message?: string
    status: string
    source: string
    createdAt: string
    project?: { name: string }
}

const statusConfig: Record<string, { label: string, color: string }> = {
    NUEVO: { label: 'Nuevo', color: 'bg-blue-100 text-blue-800' },
    CONTACTADO: { label: 'Contactado', color: 'bg-yellow-100 text-yellow-800' },
    CITA_PROGRAMADA: { label: 'Cita Programada', color: 'bg-purple-100 text-purple-800' },
    SEGUIMIENTO: { label: 'Seguimiento', color: 'bg-indigo-100 text-indigo-800' },
    CERRADO: { label: 'Cerrado/Vendido', color: 'bg-green-100 text-green-800' },
    PERDIDO: { label: 'Perdido', color: 'bg-red-100 text-red-800' },
}

interface LeadsClientProps {
    initialLeads: Lead[]
}

export default function LeadsClient({ initialLeads }: LeadsClientProps) {
    const [leads, setLeads] = useState<Lead[]>(initialLeads)
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('ALL')

    useEffect(() => {
        fetchLeads()
    }, [])

    const fetchLeads = async () => {
        try {
            const res = await fetch('/api/leads/list') // Note: We might need a list endpoint or use the existing logic
            const data = await res.json()
            setLeads(Array.isArray(data) ? data : [])
        } catch (error) {
            console.error('Error fetching leads:', error)
        } finally {
            setLoading(false)
        }
    }

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            await fetch(`/api/leads/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            })
            fetchLeads()
        } catch (error) {
            console.error('Error updating status:', error)
        }
    }

    const filteredLeads = leads.filter(l => filter === 'ALL' || l.status === filter)

    if (loading) return <div className="p-8 text-center text-gray-500">Cargando leads...</div>

    return (
        <div className="space-y-6">
            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                <button
                    onClick={() => setFilter('ALL')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'ALL' ? 'bg-[var(--housen-dark)] text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
                >
                    Todos
                </button>
                {Object.entries(statusConfig).map(([key, config]) => (
                    <button
                        key={key}
                        onClick={() => setFilter(key)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${filter === key ? 'bg-[var(--housen-dark)] text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
                    >
                        {config.label}
                    </button>
                ))}
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--housen-dark)]">Contacto</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--housen-dark)]">Estado</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--housen-dark)]">Proyecto</th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-[var(--housen-dark)]">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredLeads.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-gray-500 italic">
                                    No hay leads que coincidan con el filtro.
                                </td>
                            </tr>
                        ) : (
                            filteredLeads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-[var(--housen-dark)]">{lead.name}</p>
                                            <p className="text-sm text-[var(--housen-gray)]">{lead.phone}</p>
                                            <span className="text-[10px] uppercase font-bold text-gray-400">{lead.source}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <select
                                            value={lead.status}
                                            onChange={(e) => updateStatus(lead.id, e.target.value)}
                                            className={`text-xs font-semibold rounded-full px-3 py-1 border-none focus:ring-2 focus:ring-[var(--housen-dark)] ${statusConfig[lead.status]?.color || 'bg-gray-100'}`}
                                        >
                                            {Object.entries(statusConfig).map(([key, config]) => (
                                                <option key={key} value={key}>{config.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[var(--housen-gray)]">
                                        {lead.project?.name || '—'}
                                    </td>
                                    <td className="px-6 py-4 text-right space-x-3">
                                        <Link
                                            href={`/admin/agenda?leadId=${lead.id}`}
                                            className="text-sm text-purple-600 hover:text-purple-800 font-medium"
                                        >
                                            Agendar
                                        </Link>
                                        <a
                                            href={`https://wa.me/${lead.phone.replace(/\D/g, '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-[#25D366] hover:text-[#128C7E]"
                                        >
                                            WhatsApp
                                        </a>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
