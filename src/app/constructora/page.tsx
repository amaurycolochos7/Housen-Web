import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Constructora',
    description: 'Servicios de construcción residencial y comercial con los más altos estándares de calidad en Chiapas, México.',
}

const services = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        title: 'Construcción Residencial',
        description: 'Casas unifamiliares, departamentos y fraccionamientos con diseños modernos y funcionales.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        title: 'Construcción Comercial',
        description: 'Plazas comerciales, oficinas y edificios corporativos diseñados para maximizar el retorno de inversión.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
        title: 'Proyectos Llave en Mano',
        description: 'Nos encargamos de todo: diseño, permisos, construcción y acabados. Tú solo recibes las llaves.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        title: 'Remodelaciones',
        description: 'Transformamos espacios existentes con renovaciones integrales que maximizan funcionalidad y estética.',
    },
]

const process = [
    {
        step: '01',
        title: 'Consulta Inicial',
        description: 'Nos reunimos para entender tu visión, necesidades y presupuesto.',
    },
    {
        step: '02',
        title: 'Diseño y Planeación',
        description: 'Desarrollamos planos, renders 3D y especificaciones técnicas detalladas.',
    },
    {
        step: '03',
        title: 'Permisos y Trámites',
        description: 'Gestionamos todos los permisos necesarios ante las autoridades correspondientes.',
    },
    {
        step: '04',
        title: 'Construcción',
        description: 'Ejecutamos la obra con supervisión constante y reportes de avance periódicos.',
    },
    {
        step: '05',
        title: 'Entrega',
        description: 'Realizamos inspección final y entregamos tu proyecto listo para habitar.',
    },
]

export default function ConstructoraPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-20 bg-[var(--housen-dark)]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=600&fit=crop"
                        alt="Construcción HOUSEN"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-[var(--housen-gray)] text-sm uppercase tracking-widest mb-4 block">
                            Servicios de Construcción
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            HOUSEN® Constructora
                        </h1>
                        <p className="text-xl text-gray-300">
                            Construimos con pasión, precisión y compromiso. Cada proyecto es una
                            oportunidad para crear espacios que superen expectativas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-[var(--housen-gray)] text-sm uppercase tracking-widest mb-2 block">
                            Lo Que Ofrecemos
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--housen-dark)] mb-4">
                            Nuestros Servicios
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-[var(--housen-light)] rounded-2xl p-8 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-16 h-16 bg-[var(--housen-dark)] text-white rounded-xl flex items-center justify-center mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-[var(--housen-dark)] mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-[var(--housen-gray)]">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section bg-[var(--housen-light)]">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-[var(--housen-gray)] text-sm uppercase tracking-widest mb-2 block">
                            Nuestro Proceso
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--housen-dark)] mb-4">
                            Cómo Trabajamos
                        </h2>
                        <p className="text-[var(--housen-gray)] max-w-2xl mx-auto">
                            Un proceso estructurado que garantiza calidad, transparencia y
                            cumplimiento de plazos en cada proyecto.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--housen-gray)]/30 -translate-x-1/2" />

                        <div className="space-y-12">
                            {process.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className={`bg-white rounded-xl p-6 shadow-md ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                                            } max-w-md`}>
                                            <h3 className="text-xl font-semibold text-[var(--housen-dark)] mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-[var(--housen-gray)]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative z-10 w-16 h-16 bg-[var(--housen-dark)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                                        {item.step}
                                    </div>
                                    <div className="flex-1" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-square rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=800&fit=crop"
                                alt="Calidad HOUSEN"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <span className="text-[var(--housen-gray)] text-sm uppercase tracking-widest mb-4 block">
                                Nuestro Compromiso
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--housen-dark)] mb-6">
                                Calidad en Cada Detalle
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--housen-dark)] mb-1">Materiales Premium</h3>
                                        <p className="text-[var(--housen-gray)]">Utilizamos solo materiales de primera calidad que garantizan durabilidad y acabados impecables.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--housen-dark)] mb-1">Equipo Especializado</h3>
                                        <p className="text-[var(--housen-gray)]">Contamos con arquitectos, ingenieros y maestros de obra con amplia experiencia.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--housen-dark)] mb-1">Garantía Extendida</h3>
                                        <p className="text-[var(--housen-gray)]">Ofrecemos garantías en estructura y acabados para tu total tranquilidad.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[var(--housen-dark)]">
                <div className="container-custom text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        ¿Tienes un proyecto en mente?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Platícanos tu idea y te ayudamos a hacerla realidad.
                        Consulta inicial sin compromiso.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/529602338505?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20de%20construcci%C3%B3n"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Cotizar Proyecto
                        </a>
                        <Link href="/proyectos" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--housen-dark)]">
                            Ver Proyectos
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
