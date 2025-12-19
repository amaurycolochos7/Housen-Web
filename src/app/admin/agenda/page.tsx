'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

interface Appointment {
    id: string
    datetime: string
    location?: string
    notes?: string
    status: string
    lead: {
        name: string
        phone: string
    }
}

function AgendaContent() {
    const searchParams = useSearchParams()
    const leadIdFromParam = searchParams.get('leadId')

    const [appointments, setAppointments] = useState<Appointment[]>([])
    const [isModalOpen, setIsModalOpen] = useState(!!leadIdFromParam)
    const [formData, setFormData] = useState({
        leadId: leadIdFromParam || '',
        datetime: '',
        location: '',
        notes: ''
    })

    useEffect(() => {
        fetchAppointments()
    }, [])

    const fetchAppointments = async () => {
        try {
            const res = await fetch('/api/appointments')
            const data = await res.json()
            setAppointments(data)
        } catch (error) {
            console.error('Error fetching appointments:', error)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            if (res.ok) {
                setIsModalOpen(false)
                fetchAppointments()
                setFormData({ leadId: '', datetime: '', location: '', notes: '' })
            }
        } catch (error) {
            console.error('Error creating appointment:', error)
        }
    }

    return (
        <div className="min-h-screen bg-[var(--housen-light)]">
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/admin" className="text-[var(--housen-gray)] hover:text-[var(--housen-dark)]">← Volver</Link>
                        <h1 className="font-semibold text-[var(--housen-dark)]">Agenda de Citas</h1>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="btn-primary"
                    >
                        + Nueva Cita
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {appointments.length === 0 ? (
                        <div className="col-span-full py-20 text-center bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
                            <p className="text-gray-400">No hay citas programadas.</p>
                        </div>
                    ) : (
                        appointments.map((apt) => (
                            <div key={apt.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Cita Inmobiliaria</span>
                                    <span className={`px-2 py-1 text-[10px] font-bold rounded uppercase ${apt.status === 'PENDIENTE' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                                        {apt.status}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-[var(--housen-dark)] mb-1">{apt.lead.name}</h3>
                                <p className="text-sm text-[var(--housen-gray)] mb-4">{new Date(apt.datetime).toLocaleString('es-MX', {
                                    weekday: 'long',
                                    day: 'numeric',
                                    month: 'long',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}</p>

                                {apt.location && (
                                    <div className="flex items-center gap-2 text-sm text-[var(--housen-dark)] mb-2">
                                        <span>📍</span>
                                        {apt.location}
                                    </div>
                                )}

                                <div className="mt-6 flex gap-2">
                                    <a
                                        href={`tel:${apt.lead.phone}`}
                                        className="flex-1 py-2 bg-gray-100 rounded-lg text-center text-sm font-medium hover:bg-gray-200"
                                    >
                                        Llamar
                                    </a>
                                    <a
                                        href={`https://wa.me/${apt.lead.phone.replace(/\D/g, '')}`}
                                        target="_blank"
                                        className="flex-1 py-2 bg-[#25D366] text-white rounded-lg text-center text-sm font-medium hover:bg-[#128C7E]"
                                    >
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>

            {/* Simple Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[60]">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                        <h2 className="text-2xl font-bold mb-6">Programar Nueva Cita</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {!leadIdFromParam && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">ID del Lead</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.leadId}
                                        onChange={(e) => setFormData({ ...formData, leadId: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--housen-dark)] outline-none"
                                        placeholder="Pega el ID del lead"
                                    />
                                </div>
                            )}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha y Hora</label>
                                <input
                                    required
                                    type="datetime-local"
                                    value={formData.datetime}
                                    onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--housen-dark)] outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Ubicación (Opcional)</label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--housen-dark)] outline-none"
                                    placeholder="Ej. Oficinas Centrales"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Notas</label>
                                <textarea
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--housen-dark)] outline-none h-24 resize-none"
                                    placeholder="Detalles de la reunión..."
                                />
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-3 bg-[var(--housen-dark)] text-white rounded-xl hover:bg-[var(--housen-accent)] font-medium"
                                >
                                    Guardar Cita
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default function AgendaPage() {
    return (
        <Suspense fallback={<div className="p-8 text-center text-gray-400">Cargando agenda...</div>}>
            <AgendaContent />
        </Suspense>
    )
}
