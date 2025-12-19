import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { authOptions } from '@/lib/auth'

// Demo projects data
const projects = [
    {
        id: '1',
        slug: 'residencial-los-pinos',
        name: 'Residencial Los Pinos',
        type: 'RESIDENCIAL',
        status: 'EN_CONSTRUCCION',
        location: 'Tuxtla Gutiérrez, Chiapas',
        isFeatured: true,
        published: true,
    },
    {
        id: '2',
        slug: 'plaza-comercial-san-roque',
        name: 'Plaza Comercial San Roque',
        type: 'COMERCIAL',
        status: 'PROXIMO',
        location: 'Tuxtla Gutiérrez, Chiapas',
        isFeatured: true,
        published: true,
    },
    {
        id: '3',
        slug: 'torres-vista-hermosa',
        name: 'Torres Vista Hermosa',
        type: 'RESIDENCIAL',
        status: 'ENTREGADO',
        location: 'San Cristóbal, Chiapas',
        isFeatured: true,
        published: true,
    },
]

const statusLabels: Record<string, { label: string; class: string }> = {
    PROXIMO: { label: 'Próximamente', class: 'bg-yellow-100 text-yellow-800' },
    EN_CONSTRUCCION: { label: 'En Construcción', class: 'bg-blue-100 text-blue-800' },
    ENTREGADO: { label: 'Entregado', class: 'bg-green-100 text-green-800' },
}

export default async function AdminProjectsPage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/admin/login')
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
                        <h1 className="font-semibold text-[var(--housen-dark)]">Proyectos</h1>
                    </div>
                    <Link href="/admin/proyectos/nuevo" className="btn-primary">
                        + Nuevo Proyecto
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--housen-dark)]">Proyecto</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--housen-dark)]">Tipo</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--housen-dark)]">Estado</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--housen-dark)]">Ubicación</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--housen-dark)]">Destacado</th>
                                <th className="px-6 py-4 text-right text-sm font-semibold text-[var(--housen-dark)]">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {projects.map((project) => (
                                <tr key={project.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-[var(--housen-dark)]">{project.name}</p>
                                            <p className="text-sm text-[var(--housen-gray)]">/{project.slug}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[var(--housen-dark)]">{project.type}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${statusLabels[project.status].class}`}>
                                            {statusLabels[project.status].label}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[var(--housen-gray)]">{project.location}</td>
                                    <td className="px-6 py-4">
                                        {project.isFeatured ? (
                                            <span className="text-green-600">✓</span>
                                        ) : (
                                            <span className="text-gray-400">−</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link
                                                href={`/admin/proyectos/${project.id}/editar`}
                                                className="text-sm text-blue-600 hover:text-blue-800"
                                            >
                                                Editar
                                            </Link>
                                            <Link
                                                href={`/proyectos/${project.slug}`}
                                                target="_blank"
                                                className="text-sm text-[var(--housen-gray)] hover:text-[var(--housen-dark)]"
                                            >
                                                Ver
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}
