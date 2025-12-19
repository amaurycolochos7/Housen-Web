import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Demo data
const projects: Record<string, {
    name: string
    description: string
    location: string
    status: string
    type: string
    coverImage: string
    galleryImages: string[]
    features: string[]
}> = {
    'residencial-los-pinos': {
        name: 'Residencial Los Pinos',
        description: 'Desarrollo residencial de lujo con 24 casas unifamiliares diseñadas para el confort moderno. Cada vivienda cuenta con amplios espacios, acabados premium y áreas verdes privadas. El fraccionamiento incluye casa club, área de juegos infantiles y seguridad las 24 horas.',
        location: 'Tuxtla Gutiérrez, Chiapas',
        status: 'EN_CONSTRUCCION',
        type: 'RESIDENCIAL',
        coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
        ],
        features: ['24 casas unifamiliares', 'Casa club', 'Área de juegos', 'Seguridad 24/7', 'Áreas verdes', 'Estacionamiento']
    },
    'plaza-comercial-san-roque': {
        name: 'Plaza Comercial San Roque',
        description: 'Centro comercial con espacios premium para negocios y oficinas en ubicación estratégica. Diseñado para maximizar el flujo de clientes y la visibilidad de cada local. Cuenta con estacionamiento amplio, aire acondicionado central y sistemas de seguridad modernos.',
        location: 'Tuxtla Gutiérrez, Chiapas',
        status: 'PROXIMO',
        type: 'COMERCIAL',
        coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1577415124269-fc1140354b26?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        ],
        features: ['20 locales comerciales', 'Oficinas ejecutivas', 'Estacionamiento', 'A/C central', 'Food court', 'Vigilancia 24/7']
    },
    'torres-vista-hermosa': {
        name: 'Torres Vista Hermosa',
        description: 'Complejo de departamentos con vista panorámica y amenidades de primer nivel. Ubicado en la zona más exclusiva de San Cristóbal, ofrece departamentos desde 80 hasta 150 m² con acabados de lujo y las mejores vistas de la ciudad.',
        location: 'San Cristóbal, Chiapas',
        status: 'ENTREGADO',
        type: 'RESIDENCIAL',
        coverImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
        ],
        features: ['48 departamentos', 'Gimnasio', 'Roof garden', 'Lobby con recepción', 'Estacionamiento', 'Vista panorámica']
    },
}

const statusLabels: Record<string, { label: string; class: string }> = {
    PROXIMO: { label: 'Próximamente', class: 'badge-proximo' },
    EN_CONSTRUCCION: { label: 'En Construcción', class: 'badge-construccion' },
    ENTREGADO: { label: 'Entregado', class: 'badge-entregado' },
}

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const project = projects[slug]

    if (!project) {
        return { title: 'Proyecto no encontrado' }
    }

    return {
        title: project.name,
        description: project.description,
        openGraph: {
            title: project.name,
            description: project.description,
            images: [project.coverImage],
        },
    }
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params
    const project = projects[slug]

    if (!project) {
        notFound()
    }

    const status = statusLabels[project.status]
    const whatsappUrl = `https://wa.me/529602338505?text=${encodeURIComponent(`Hola, me gustaría recibir información sobre el proyecto ${project.name}`)}`

    return (
        <>
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px]">
                <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="container-custom">
                        <span className={`badge ${status.class} mb-4`}>{status.label}</span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            {project.name}
                        </h1>
                        <div className="flex items-center gap-2 text-gray-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{project.location}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-[var(--housen-dark)] mb-4">
                                Descripción del Proyecto
                            </h2>
                            <p className="text-[var(--housen-gray)] text-lg leading-relaxed mb-8">
                                {project.description}
                            </p>

                            {/* Features */}
                            <h3 className="text-xl font-semibold text-[var(--housen-dark)] mb-4">
                                Características
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                {project.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-[var(--housen-dark)]">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Gallery */}
                            <h3 className="text-xl font-semibold text-[var(--housen-dark)] mb-4">
                                Galería
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {project.galleryImages.map((image, index) => (
                                    <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden img-zoom">
                                        <Image
                                            src={image}
                                            alt={`${project.name} - Imagen ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28 bg-[var(--housen-light)] rounded-2xl p-6">
                                <h3 className="text-xl font-semibold text-[var(--housen-dark)] mb-4">
                                    ¿Te interesa este proyecto?
                                </h3>
                                <p className="text-[var(--housen-gray)] mb-6">
                                    Contáctanos para recibir información detallada sobre disponibilidad,
                                    precios y formas de pago.
                                </p>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-whatsapp w-full justify-center mb-4"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Solicitar Información
                                </a>
                                <Link href="/contacto" className="btn-secondary w-full justify-center text-center block">
                                    Ver Contacto
                                </Link>

                                <hr className="my-6 border-gray-200" />

                                <div className="space-y-4 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-[var(--housen-gray)]">Tipo:</span>
                                        <span className="text-[var(--housen-dark)] font-medium">{project.type}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[var(--housen-gray)]">Estado:</span>
                                        <span className={`badge ${status.class}`}>{status.label}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[var(--housen-gray)]">Ubicación:</span>
                                        <span className="text-[var(--housen-dark)] font-medium">{project.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back Link */}
            <section className="pb-16">
                <div className="container-custom">
                    <Link href="/proyectos" className="inline-flex items-center gap-2 text-[var(--housen-gray)] hover:text-[var(--housen-dark)] transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Volver a Proyectos
                    </Link>
                </div>
            </section>
        </>
    )
}
