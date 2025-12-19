import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { properties } from '@/data/properties'

export const metadata: Metadata = {
    title: 'Inmobiliaria',
    description: 'Desarrollo inmobiliario y oportunidades de inversión en Chiapas, México. Proyectos habitacionales y comerciales.',
}

const benefits = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Inversión Segura',
        description: 'Proyectos con escrituración legal y plusvalía garantizada.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Facilidades de Pago',
        description: 'Planes de financiamiento directo sin aval ni buró de crédito.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        title: 'Alta Plusvalía',
        description: 'Ubicaciones estratégicas con proyección de crecimiento.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Asesoría Personalizada',
        description: 'Te acompañamos en todo el proceso de compra.',
    },
]

export default function InmobiliariaPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-20 bg-[var(--housen-dark)]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=600&fit=crop"
                        alt="Inmobiliaria HOUSEN"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-[var(--housen-gray)] text-sm uppercase tracking-widest mb-4 block">
                            Inversión Inmobiliaria
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            HOUSEN® Inmobiliaria
                        </h1>
                        <p className="text-xl text-gray-300">
                            Tu patrimonio comienza aquí. Ofrecemos las mejores oportunidades de
                            inversión inmobiliaria en Chiapas con respaldo y confianza.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-[var(--housen-light)]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="w-14 h-14 bg-[var(--housen-dark)] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-semibold text-[var(--housen-dark)] mb-2">{benefit.title}</h3>
                                <p className="text-sm text-[var(--housen-gray)]">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Opportunities */}
            <section className="section">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-[var(--housen-gray)] text-sm uppercase tracking-widest mb-2 block">
                            Oportunidades Disponibles
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--housen-dark)] mb-4">
                            Invierte en tu Futuro
                        </h2>
                        <p className="text-[var(--housen-gray)] max-w-2xl mx-auto">
                            Propiedades seleccionadas con el mejor potencial de plusvalía y retorno de inversión.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {properties.map((item) => (
                            <Link
                                key={item.id}
                                href={`/inmobiliaria/${item.id}`}
                                className="card group cursor-pointer hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative aspect-[3/2] overflow-hidden">
                                    <Image
                                        src={item.mainImage}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="badge bg-white/90 text-[var(--housen-dark)]">
                                            {item.type}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                        <span className="text-white text-sm font-medium flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            Ver {item.gallery.length} fotos
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-[var(--housen-dark)] mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-2xl font-bold text-[var(--housen-accent)] mb-4">
                                        {item.price}
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                        {item.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-[var(--housen-gray)]">
                                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="btn-primary w-full justify-center text-center inline-flex">
                                        Ver Detalles
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment Info */}
            <section className="section bg-[var(--housen-light)]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[var(--housen-gray)] text-sm uppercase tracking-widest mb-4 block">
                                ¿Por Qué Invertir en Chiapas?
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--housen-dark)] mb-6">
                                El Momento es Ahora
                            </h2>
                            <p className="text-[var(--housen-gray)] mb-6">
                                Chiapas es uno de los estados con mayor crecimiento inmobiliario en México.
                                La inversión en bienes raíces en esta región ofrece múltiples ventajas:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-[var(--housen-dark)]">Precios competitivos comparados con otras ciudades del país</span>
                                </li>
                                <li className="flex gap-3">
                                    <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-[var(--housen-dark)]">Crecimiento económico sostenido en la región</span>
                                </li>
                                <li className="flex gap-3">
                                    <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-[var(--housen-dark)]">Alta demanda de vivienda y espacios comerciales</span>
                                </li>
                                <li className="flex gap-3">
                                    <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-[var(--housen-dark)]">Desarrollo de infraestructura y servicios</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&h=800&fit=crop"
                                alt="Inversión inmobiliaria"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[var(--housen-dark)]">
                <div className="container-custom text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        ¿Listo para invertir?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Agenda una cita con nuestros asesores y conoce las mejores
                        opciones de inversión disponibles.
                    </p>
                    <a
                        href="https://wa.me/529602338505?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20para%20conocer%20opciones%20de%20inversi%C3%B3n"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Agendar Cita
                    </a>
                </div>
            </section>
        </>
    )
}
