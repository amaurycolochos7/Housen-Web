import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Nosotros',
    description: 'Conoce la historia, valores y visión de HOUSEN® – Constructora & Inmobiliaria. Más de una década construyendo sueños en Chiapas.',
}

const values = [
    {
        title: 'Calidad',
        description: 'Materiales premium y acabados impecables en cada proyecto.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
    {
        title: 'Compromiso',
        description: 'Cumplimos lo que prometemos, en tiempo y forma.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: 'Innovación',
        description: 'Diseños modernos y técnicas constructivas de vanguardia.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        title: 'Confianza',
        description: 'Transparencia total en cada etapa del proyecto.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
]

const team = [
    {
        name: 'Ing. Carlos Méndez',
        role: 'Director General',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    },
    {
        name: 'Arq. María González',
        role: 'Directora de Proyectos',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
        name: 'Lic. Roberto Hernández',
        role: 'Director Comercial',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
]

export default function NosotrosPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-20 bg-[var(--housen-dark)]">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <span className="text-[var(--housen-gray)] text-sm uppercase tracking-widest mb-4 block">
                            Conócenos
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Nosotros
                        </h1>
                        <p className="text-xl text-gray-300">
                            Más de una década construyendo espacios que transforman vidas
                            y comunidades en Chiapas.
                        </p>
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-square rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=800&fit=crop"
                                alt="Historia HOUSEN"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <span className="text-[var(--housen-gray)] text-sm uppercase tracking-widest mb-4 block">
                                Nuestra Historia
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--housen-dark)] mb-6">
                                Construyendo Desde 2010
                            </h2>
                            <div className="space-y-4 text-[var(--housen-gray)]">
                                <p>
                                    HOUSEN® nació de la visión de un grupo de profesionales apasionados
                                    por la construcción y el desarrollo inmobiliario. Desde nuestros
                                    inicios en Tuxtla Gutiérrez, nos hemos dedicado a crear espacios
                                    que no solo cumplen expectativas, sino que las superan.
                                </p>
                                <p>
                                    A lo largo de más de una década, hemos desarrollado proyectos
                                    residenciales y comerciales que han transformado el panorama
                                    urbano de Chiapas. Cada proyecto lleva nuestra firma de calidad,
                                    innovación y compromiso.
                                </p>
                                <p>
                                    Hoy, HOUSEN® es sinónimo de confianza y excelencia en el sector
                                    de la construcción e inmobiliario, con más de 50 proyectos
                                    completados y cientos de familias satisfechas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section bg-[var(--housen-light)]">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-[var(--housen-gray)] text-sm uppercase tracking-widest mb-2 block">
                            Lo Que Nos Define
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--housen-dark)] mb-4">
                            Nuestros Valores
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="w-16 h-16 bg-[var(--housen-dark)] text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-[var(--housen-dark)] mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-[var(--housen-gray)]">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-[var(--housen-dark)] rounded-2xl p-8 md:p-12 text-white">
                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
                            <p className="text-gray-300">
                                Ser la constructora e inmobiliaria líder del sureste mexicano,
                                reconocida por transformar comunidades a través de proyectos
                                innovadores, sustentables y de alta calidad que generen valor
                                para nuestros clientes, colaboradores y la sociedad.
                            </p>
                        </div>
                        <div className="bg-[var(--housen-light)] rounded-2xl p-8 md:p-12">
                            <div className="w-14 h-14 bg-[var(--housen-dark)] text-white rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--housen-dark)] mb-4">Nuestra Misión</h3>
                            <p className="text-[var(--housen-gray)]">
                                Desarrollar proyectos de construcción e inmobiliarios que superen
                                las expectativas de nuestros clientes, utilizando materiales de
                                primera calidad, técnicas innovadoras y un equipo humano
                                comprometido con la excelencia en cada detalle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section bg-[var(--housen-light)]">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-[var(--housen-gray)] text-sm uppercase tracking-widest mb-2 block">
                            El Equipo
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--housen-dark)] mb-4">
                            Liderazgo HOUSEN®
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {team.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--housen-dark)]">{member.name}</h3>
                                <p className="text-[var(--housen-gray)]">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[var(--housen-dark)]">
                <div className="container-custom text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        ¿Quieres ser parte de nuestra historia?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Contáctanos y construyamos juntos el proyecto de tus sueños.
                    </p>
                    <a
                        href="https://wa.me/529602338505?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20HOUSEN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Contáctanos
                    </a>
                </div>
            </section>
        </>
    )
}
