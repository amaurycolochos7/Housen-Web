import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Proyectos',
    description: 'Explora nuestro portafolio de proyectos residenciales, comerciales y de construcción en Chiapas, México.',
}

// Demo data - will be replaced with database query
const projects = [
    {
        slug: 'residencial-los-pinos',
        name: 'Residencial Los Pinos',
        description: 'Desarrollo residencial de lujo con 24 casas unifamiliares diseñadas para el confort moderno.',
        location: 'Tuxtla Gutiérrez, Chiapas',
        status: 'EN_CONSTRUCCION',
        type: 'RESIDENCIAL',
        coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    },
    {
        slug: 'plaza-comercial-san-roque',
        name: 'Plaza Comercial San Roque',
        description: 'Centro comercial con espacios premium para negocios y oficinas en ubicación estratégica.',
        location: 'Tuxtla Gutiérrez, Chiapas',
        status: 'PROXIMO',
        type: 'COMERCIAL',
        coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    },
    {
        slug: 'torres-vista-hermosa',
        name: 'Torres Vista Hermosa',
        description: 'Complejo de departamentos con vista panorámica y amenidades de primer nivel.',
        location: 'San Cristóbal, Chiapas',
        status: 'ENTREGADO',
        type: 'RESIDENCIAL',
        coverImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    },
    {
        slug: 'centro-empresarial-housen',
        name: 'Centro Empresarial HOUSEN',
        description: 'Edificio de oficinas clase A con tecnología inteligente y espacios flexibles.',
        location: 'Tuxtla Gutiérrez, Chiapas',
        status: 'EN_CONSTRUCCION',
        type: 'COMERCIAL',
        coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    },
    {
        slug: 'residencial-del-bosque',
        name: 'Residencial del Bosque',
        description: 'Exclusivo fraccionamiento con áreas verdes y seguridad las 24 horas.',
        location: 'Berriozábal, Chiapas',
        status: 'ENTREGADO',
        type: 'RESIDENCIAL',
        coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    },
    {
        slug: 'parque-industrial-chiapas',
        name: 'Parque Industrial Chiapas',
        description: 'Complejo industrial con infraestructura de última generación para empresas.',
        location: 'Chiapa de Corzo, Chiapas',
        status: 'PROXIMO',
        type: 'OBRA',
        coverImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop',
    },
]

const statusLabels: Record<string, { label: string; class: string }> = {
    PROXIMO: { label: 'Próximamente', class: 'badge-proximo' },
    EN_CONSTRUCCION: { label: 'En Construcción', class: 'badge-construccion' },
    ENTREGADO: { label: 'Entregado', class: 'badge-entregado' },
}

const typeLabels: Record<string, string> = {
    RESIDENCIAL: 'Residencial',
    COMERCIAL: 'Comercial',
    OBRA: 'Obra',
}

export default function ProyectosPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-20 bg-[var(--housen-dark)]">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <span className="text-[var(--housen-gray)] text-sm uppercase tracking-widest mb-4 block">
                            Nuestro Portafolio
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Proyectos HOUSEN®
                        </h1>
                        <p className="text-xl text-gray-300">
                            Descubre nuestra trayectoria a través de proyectos que han transformado
                            el panorama inmobiliario de Chiapas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 bg-[var(--housen-light)] border-b border-gray-200 sticky top-20 z-40">
                <div className="container-custom">
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-[var(--housen-gray)]">Tipo:</span>
                            <button className="px-4 py-2 text-sm font-medium bg-[var(--housen-dark)] text-white rounded-full">
                                Todos
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-[var(--housen-dark)] hover:bg-gray-200 rounded-full transition-colors">
                                Residencial
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-[var(--housen-dark)] hover:bg-gray-200 rounded-full transition-colors">
                                Comercial
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-[var(--housen-dark)] hover:bg-gray-200 rounded-full transition-colors">
                                Obra
                            </button>
                        </div>
                        <div className="flex items-center gap-2 ml-auto">
                            <span className="text-sm text-[var(--housen-gray)]">Estado:</span>
                            <select className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--housen-dark)]">
                                <option value="">Todos</option>
                                <option value="PROXIMO">Próximamente</option>
                                <option value="EN_CONSTRUCCION">En Construcción</option>
                                <option value="ENTREGADO">Entregado</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/proyectos/${project.slug}`}
                                className="card group block"
                            >
                                <div className="relative aspect-[4/3] img-zoom overflow-hidden">
                                    <Image
                                        src={project.coverImage}
                                        alt={project.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className={`badge ${statusLabels[project.status].class}`}>
                                            {statusLabels[project.status].label}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="badge bg-white/90 text-[var(--housen-dark)]">
                                            {typeLabels[project.type]}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-[var(--housen-dark)] mb-2 group-hover:text-[var(--housen-accent)] transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-[var(--housen-gray)] text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-[var(--housen-gray)]">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-sm">{project.location}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[var(--housen-light)]">
                <div className="container-custom text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--housen-dark)] mb-4">
                        ¿Te interesa algún proyecto?
                    </h2>
                    <p className="text-[var(--housen-gray)] mb-8 max-w-xl mx-auto">
                        Contáctanos para recibir información detallada sobre disponibilidad,
                        precios y formas de pago.
                    </p>
                    <a
                        href="https://wa.me/529602338505?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20un%20proyecto%20de%20HOUSEN%C2%AE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Solicitar Información
                    </a>
                </div>
            </section>
        </>
    )
}
