import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { authOptions } from '@/lib/auth'

export default async function AdminConfigPage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/admin/login')
    }

    const config = {
        companyName: 'HOUSEN® – Constructora & Inmobiliaria',
        address: '8va Ote entre 2da y 3ra Sur, Barrio San Roque, Tuxtla Gutiérrez, Chiapas, México, C.P. 29000',
        phone: '+52 960 233 8505',
        whatsappNumber: '529602338505',
        whatsappDefaultMessage: 'Hola, me gustaría recibir información sobre un proyecto de HOUSEN®',
        mapEmbedUrl: 'https://www.google.com/maps/embed?...',
    }

    return (
        <div className="min-h-screen bg-[var(--housen-light)]">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/admin" className="text-[var(--housen-gray)] hover:text-[var(--housen-dark)]">
                        ← Volver
                    </Link>
                    <h1 className="font-semibold text-[var(--housen-dark)]">Configuración del Sitio</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-3xl mx-auto px-4 py-8">
                <form className="space-y-8">
                    {/* Company Info */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-[var(--housen-dark)] mb-6">Información de la Empresa</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[var(--housen-dark)] mb-2">
                                    Nombre de la Empresa
                                </label>
                                <input
                                    type="text"
                                    defaultValue={config.companyName}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--housen-dark)]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--housen-dark)] mb-2">
                                    Dirección
                                </label>
                                <textarea
                                    defaultValue={config.address}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--housen-dark)]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--housen-dark)] mb-2">
                                    Teléfono (mostrado en el sitio)
                                </label>
                                <input
                                    type="text"
                                    defaultValue={config.phone}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--housen-dark)]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp Config */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-[var(--housen-dark)] mb-6">Configuración de WhatsApp</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[var(--housen-dark)] mb-2">
                                    Número de WhatsApp (sin espacios, incluir código de país)
                                </label>
                                <input
                                    type="text"
                                    defaultValue={config.whatsappNumber}
                                    placeholder="529602338505"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--housen-dark)]"
                                />
                                <p className="mt-1 text-sm text-[var(--housen-gray)]">
                                    Ejemplo: 529602338505 (52 es el código de México)
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--housen-dark)] mb-2">
                                    Mensaje Predeterminado de WhatsApp
                                </label>
                                <textarea
                                    defaultValue={config.whatsappDefaultMessage}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--housen-dark)]"
                                />
                                <p className="mt-1 text-sm text-[var(--housen-gray)]">
                                    Este mensaje aparecerá prellenado cuando los usuarios hagan clic en WhatsApp.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map Config */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-[var(--housen-dark)] mb-6">Configuración del Mapa</h2>

                        <div>
                            <label className="block text-sm font-medium text-[var(--housen-dark)] mb-2">
                                URL del Mapa Embebido (Google Maps)
                            </label>
                            <input
                                type="text"
                                defaultValue={config.mapEmbedUrl}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--housen-dark)]"
                            />
                            <p className="mt-1 text-sm text-[var(--housen-gray)]">
                                Ve a Google Maps → Compartir → Incorporar un mapa → Copiar la URL del src
                            </p>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end">
                        <button type="submit" className="btn-primary">
                            Guardar Cambios
                        </button>
                    </div>
                </form>
            </main>
        </div>
    )
}
