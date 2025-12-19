'use client'

import { useState } from 'react'
import Link from 'next/link'

interface DashboardClientProps {
    session: any
    stats: any[]
    recentLeads: any[]
    clickCount: number
    leadCount: number
    appointmentCount: number
}

interface FeatureInfo {
    title: string
    description: string
    status: string
    technicalDetails: string
}

export default function DashboardClient({
    session,
    stats,
    recentLeads,
    clickCount,
    leadCount,
    appointmentCount
}: DashboardClientProps) {
    const [selectedFeature, setSelectedFeature] = useState<FeatureInfo | null>(null)

    const features: Record<string, FeatureInfo> = {
        'Nuevo Proyecto': {
            title: 'Gestión de Proyectos',
            description: 'Módulo integral para el alta de propiedades. Permitirá subir galerías de fotos, definir precios, características (m², habitaciones) y ubicación en mapa.',
            status: 'En Desarrollo',
            technicalDetails: 'Implementación pendiente: Uploadthing para imágenes y esquema de base de datos para características dinámicas.'
        },
        'CRM Leads': {
            title: 'CRM & Gestión de Clientes',
            description: 'Centraliza todos los prospectos interesados. Podrás cambiar estados (Nuevo, Contactado, Cita, Vendido), añadir notas de seguimiento y asignar asesores.',
            status: 'Implementación Final',
            technicalDetails: 'Conexión con Prisma lista. Falta habilitar interfaz de edición de estados (Kanban).'
        },
        'Agenda Citas': {
            title: 'Calendario de Citas',
            description: 'Sistema de agenda interactiva. Visualiza visitas programadas por día/semana y recibe recordatorios automáticos para confirmar con clientes.',
            status: 'Próximamente',
            technicalDetails: 'Requiere integración con librería de calendario (FullCalendar) y sistema de notificaciones por email.'
        },
        'Configuración': {
            title: 'Configuración del Sitio',
            description: 'Panel de control global. Modifica números de teléfono, horarios, dirección y mensajes predeterminados de WhatsApp sin tocar código.',
            status: 'En Desarrollo',
            technicalDetails: 'Backend listo. Interfaz de usuario en construcción.'
        },
        'Stats': {
            title: 'Analíticas en Tiempo Real',
            description: 'Monitor de rendimiento. Visualiza conversiones de WhatsApp, visitas al sitio y efectividad de campañas publicitarias.',
            status: 'Demo Activa',
            technicalDetails: 'Los datos mostrados son reales baseados en la actividad actual del sitio.'
        }
    }

    const handleFeatureClick = (key: string) => {
        const feature = features[key]
        if (feature) {
            setSelectedFeature(feature)
        }
    }

    const quickActions = [
        { label: 'Nuevo Proyecto', key: 'Nuevo Proyecto', icon: '➕' },
        { label: 'CRM Leads', key: 'CRM Leads', icon: '🫂' },
        { label: 'Agenda Citas', key: 'Agenda Citas', icon: '📅' },
        { label: 'Configuración', key: 'Configuración', icon: '⚙️' },
    ]

    return (
        <div className="min-h-screen bg-[var(--housen-light)]">
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[var(--housen-dark)] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">H</span>
                        </div>
                        <div>
                            <h1 className="font-semibold text-[var(--housen-dark)]">Panel Administrativo</h1>
                            <p className="text-sm text-[var(--housen-gray)]">HOUSEN® CRM</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/" target="_blank" className="text-sm text-[var(--housen-gray)] hover:text-[var(--housen-dark)]">
                            Ver sitio →
                        </Link>
                        <span className="text-sm text-[var(--housen-dark)]">{session.user?.name}</span>
                        <Link href="/api/auth/signout" className="text-sm text-red-600 hover:text-red-700">
                            Cerrar Sesión
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 cursor-pointer" onClick={() => handleFeatureClick('Stats')}>
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[var(--housen-gray)]">{stat.label}</p>
                                    <p className={`text-3xl font-bold ${stat.highlight || 'text-[var(--housen-dark)]'}`}>{stat.value}</p>
                                </div>
                                <span className="text-3xl">{stat.icon}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="mb-8">
                    <h3 className="font-semibold text-[var(--housen-dark)] mb-4">Módulos Administrativos</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {quickActions.map((action, index) => (
                            <button
                                key={index}
                                onClick={() => handleFeatureClick(action.key)}
                                className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all border border-gray-100 hover:border-[var(--housen-gray)] flex flex-col items-center justify-center gap-2 group w-full"
                            >
                                <span className="text-3xl group-hover:scale-110 transition-transform">{action.icon}</span>
                                <span className="text-[var(--housen-dark)] font-medium">{action.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Recent Items Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-semibold text-[var(--housen-dark)]">Últimos Leads</h3>
                            <button onClick={() => handleFeatureClick('CRM Leads')} className="text-sm text-[var(--housen-gray)] hover:text-[var(--housen-dark)]">Ver todos →</button>
                        </div>
                        <div className="space-y-4">
                            {recentLeads.length === 0 ? (
                                <p className="text-center text-gray-500 py-8">No hay leads registrados aún.</p>
                            ) : (
                                recentLeads.map((lead: any) => (
                                    <div key={lead.id} className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 p-2 rounded transition-colors cursor-pointer" onClick={() => handleFeatureClick('CRM Leads')}>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${lead.source === 'WHATSAPP' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                            <span>{lead.source === 'WHATSAPP' ? '💬' : '🌐'}</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[var(--housen-dark)] font-medium">{lead.name}</p>
                                            <p className="text-sm text-[var(--housen-gray)]">{lead.project?.name || 'Consulta General'}</p>
                                        </div>
                                        <span className="text-xs text-gray-400">
                                            {new Date(lead.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <h3 className="font-semibold text-[var(--housen-dark)] mb-6">Eficiencia de Contacto</h3>
                        <div className="space-y-6">
                            <div className="p-4 bg-[var(--housen-light)] rounded-lg cursor-pointer" onClick={() => handleFeatureClick('Stats')}>
                                <p className="text-sm text-[var(--housen-gray)] mb-1">Interés por WhatsApp</p>
                                <div className="flex items-end gap-2">
                                    <p className="text-2xl font-bold text-[var(--housen-dark)]">{clickCount}</p>
                                    <p className="text-sm text-green-600 mb-1">clics totales</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => handleFeatureClick('Agenda Citas')}
                                    className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-center transition-colors w-full"
                                >
                                    <p className="text-purple-600 font-bold text-xl">{appointmentCount}</p>
                                    <p className="text-xs text-purple-400 uppercase font-bold">Citas Próximas</p>
                                </button>
                                <div className="p-4 bg-gray-50 rounded-lg text-center cursor-pointer" onClick={() => handleFeatureClick('Stats')}>
                                    <p className="text-gray-600 font-bold text-xl">
                                        {leadCount > 0 ? ((clickCount / leadCount) * 100).toFixed(1) : 0}%
                                    </p>
                                    <p className="text-xs text-gray-400 uppercase font-bold">Ratio Inbound</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Feature Modal */}
            {selectedFeature && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative animate-slide-up border-t-4 border-[var(--housen-dark)]">
                        <button
                            onClick={() => setSelectedFeature(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 mb-3">
                                {selectedFeature.status}
                            </span>
                            <h2 className="text-2xl font-bold text-[var(--housen-dark)] mb-2">
                                {selectedFeature.title}
                            </h2>
                            <div className="h-1 w-20 bg-[var(--housen-gray)]/30 rounded-full"></div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <p className="text-gray-600 leading-relaxed">
                                {selectedFeature.description}
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <p className="text-xs text-gray-500 font-mono">
                                    <strong className="text-gray-700 block mb-1">Nota Técnica:</strong>
                                    {selectedFeature.technicalDetails}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                            <div className="flex-1">
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Desarrollador Responsable</p>
                                <p className="text-[var(--housen-dark)] font-medium">Amaury Gordillo</p>
                                <p className="text-xs text-blue-600">Lead Developer</p>
                            </div>
                            <button
                                onClick={() => setSelectedFeature(null)}
                                className="bg-[var(--housen-dark)] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                            >
                                Entendido
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
