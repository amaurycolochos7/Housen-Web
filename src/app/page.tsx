import Link from 'next/link'
import Image from 'next/image'

// Demo projects for initial display
const featuredProjects = [
    {
        slug: 'residencial-los-pinos',
        name: 'Residencial Los Pinos',
        location: 'Tuxtla Gutiérrez, Chiapas',
        status: 'EN_CONSTRUCCION',
        type: 'RESIDENCIAL',
        coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    },
    {
        slug: 'plaza-comercial-san-roque',
        name: 'Plaza Comercial San Roque',
        location: 'Tuxtla Gutiérrez, Chiapas',
        status: 'PROXIMO',
        type: 'COMERCIAL',
        coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    },
    {
        slug: 'torres-vista-hermosa',
        name: 'Torres Vista Hermosa',
        location: 'San Cristóbal, Chiapas',
        status: 'ENTREGADO',
        type: 'RESIDENCIAL',
        coverImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    },
]

const statusLabels: Record<string, { label: string; class: string }> = {
    PROXIMO: { label: 'Próximamente', class: 'badge-proximo' },
    EN_CONSTRUCCION: { label: 'En Construcción', class: 'badge-construccion' },
    ENTREGADO: { label: 'Entregado', class: 'badge-entregado' },
}

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop"
                        alt="Arquitectura moderna HOUSEN"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Darker, more robust overlay */}
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="container-custom relative z-10 py-20">
                    <div className="max-w-3xl">
                        <div className="animate-slide-up">
                            <span className="inline-block text-white/90 text-sm uppercase tracking-widest mb-4 text-shadow font-medium">
                                Constructora & Inmobiliaria
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight text-shadow-lg text-balance">
                                Construimos espacios que{' '}
                                <span className="text-[var(--housen-gray)] brightness-125">transforman vidas</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-100 mb-8 max-w-2xl text-shadow font-medium leading-relaxed">
                                Más de una década creando proyectos residenciales y comerciales de alta calidad en Chiapas. Tu visión, nuestra experiencia.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/proyectos" className="btn-primary text-center">
                                    Ver Proyectos
                                </Link>
                                <Link href="/contacto" className="btn-whatsapp text-center">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Contactar por WhatsApp
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="section bg-[var(--housen-light)]">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-[var(--housen-gray)] text-sm uppercase tracking-widest mb-2 block text-balance">
                            Nuestro Portafolio
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--housen-dark)] mb-4 text-balance">
                            Proyectos Destacados
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/proyectos/${project.slug}`}
                                className="group card"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={project.coverImage}
                                        alt={project.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className={`badge ${statusLabels[project.status].class}`}>
                                            {statusLabels[project.status].label}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <span className="text-xs text-[var(--housen-gray)] uppercase tracking-widest block mb-2">
                                        {project.type}
                                    </span>
                                    <h3 className="text-xl font-bold text-[var(--housen-dark)] mb-2 group-hover:text-[var(--housen-accent)] transition-colors text-balance">
                                        {project.name}
                                    </h3>
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

                    <div className="text-center mt-12">
                        <Link href="/proyectos" className="btn-secondary">
                            Ver Todos los Proyectos
                        </Link>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="bg-[var(--housen-light)] rounded-3xl p-8 md:p-12 lg:p-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--housen-dark)] mb-4 text-balance">
                            ¿Listo para construir tu sueño?
                        </h2>
                        <p className="text-[var(--housen-gray)] text-lg mb-8 max-w-2xl mx-auto">
                            Contáctanos hoy y comienza a hacer realidad tu próximo proyecto.
                            Nuestro equipo está listo para asesorarte.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/529602338505?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20un%20proyecto%20de%20HOUSEN%C2%AE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Escribir por WhatsApp
                            </a>
                            <Link href="/contacto" className="btn-secondary">
                                Ver Información de Contacto
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
