import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contacto',
    description: 'Contáctanos para conocer más sobre nuestros proyectos de construcción e inmobiliarios. HOUSEN® - Constructora & Inmobiliaria en Chiapas.',
}

const contactInfo = [
    {
        title: 'Teléfono',
        value: '+52 960 233 8505',
        href: 'tel:+529602338505',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
    },
    {
        title: 'Email',
        value: 'contacto@housen.mx',
        href: 'mailto:contacto@housen.mx',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Ubicación',
        value: 'Tuxtla Gutiérrez, Chiapas',
        href: 'https://maps.google.com/?q=Tuxtla+Gutierrez+Chiapas',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        title: 'Horario',
        value: 'Lun - Vie: 9:00 - 18:00',
        href: null,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
]

export default function ContactoPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-20 bg-[var(--housen-dark)]">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <span className="text-[var(--housen-gray)] text-sm uppercase tracking-widest mb-4 block">
                            Estamos para ti
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Contacto
                        </h1>
                        <p className="text-xl text-gray-300">
                            ¿Tienes un proyecto en mente? Contáctanos y hagamos realidad
                            la casa de tus sueños.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-[var(--housen-dark)] text-white rounded-xl flex items-center justify-center mb-4">
                                    {info.icon}
                                </div>
                                <h3 className="text-sm text-[var(--housen-gray)] uppercase tracking-wide mb-2">
                                    {info.title}
                                </h3>
                                {info.href ? (
                                    <a
                                        href={info.href}
                                        target={info.href.startsWith('http') ? '_blank' : undefined}
                                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="text-[var(--housen-dark)] font-semibold hover:underline"
                                    >
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="text-[var(--housen-dark)] font-semibold">
                                        {info.value}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Main Contact Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <div className="bg-[var(--housen-light)] rounded-2xl p-8 md:p-10">
                            <h2 className="text-2xl font-bold text-[var(--housen-dark)] mb-6">
                                Envíanos un mensaje
                            </h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-medium text-[var(--housen-dark)] mb-2">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--housen-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--housen-dark)]/20 transition-colors"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="telefono" className="block text-sm font-medium text-[var(--housen-dark)] mb-2">
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            id="telefono"
                                            name="telefono"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--housen-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--housen-dark)]/20 transition-colors"
                                            placeholder="Tu teléfono"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[var(--housen-dark)] mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--housen-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--housen-dark)]/20 transition-colors"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="servicio" className="block text-sm font-medium text-[var(--housen-dark)] mb-2">
                                        ¿Qué servicio te interesa?
                                    </label>
                                    <select
                                        id="servicio"
                                        name="servicio"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--housen-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--housen-dark)]/20 transition-colors bg-white"
                                    >
                                        <option value="">Selecciona una opción</option>
                                        <option value="construccion">Construcción de vivienda</option>
                                        <option value="remodelacion">Remodelación</option>
                                        <option value="inmobiliaria">Compra/Venta de propiedad</option>
                                        <option value="proyecto">Diseño de proyecto</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="mensaje" className="block text-sm font-medium text-[var(--housen-dark)] mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--housen-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--housen-dark)]/20 transition-colors resize-none"
                                        placeholder="Cuéntanos sobre tu proyecto..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[var(--housen-dark)] text-white py-4 rounded-xl font-semibold hover:bg-[var(--housen-dark)]/90 transition-colors"
                                >
                                    Enviar mensaje
                                </button>
                            </form>
                        </div>

                        {/* WhatsApp & Additional Info */}
                        <div className="space-y-8">
                            {/* WhatsApp CTA */}
                            <div className="bg-[var(--housen-dark)] rounded-2xl p-8 md:p-10 text-white">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center">
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">¿Prefieres WhatsApp?</h3>
                                        <p className="text-gray-300">Respuesta inmediata</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-6">
                                    Escríbenos directamente por WhatsApp y recibe atención
                                    personalizada de nuestro equipo de asesores.
                                </p>
                                <a
                                    href="https://wa.me/529602338505?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#20bd5a] transition-colors"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Escribir por WhatsApp
                                </a>
                            </div>

                            {/* FAQ Preview */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-[var(--housen-dark)] mb-6">
                                    Preguntas frecuentes
                                </h3>
                                <div className="space-y-4">
                                    <div className="border-b border-gray-100 pb-4">
                                        <h4 className="font-semibold text-[var(--housen-dark)] mb-2">
                                            ¿Cuánto tiempo toma construir una casa?
                                        </h4>
                                        <p className="text-[var(--housen-gray)] text-sm">
                                            Depende del tamaño y complejidad, pero generalmente entre 6 y 12 meses.
                                        </p>
                                    </div>
                                    <div className="border-b border-gray-100 pb-4">
                                        <h4 className="font-semibold text-[var(--housen-dark)] mb-2">
                                            ¿Ofrecen financiamiento?
                                        </h4>
                                        <p className="text-[var(--housen-gray)] text-sm">
                                            Trabajamos con diversos esquemas de pago y te asesoramos con créditos.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[var(--housen-dark)] mb-2">
                                            ¿En qué zonas trabajan?
                                        </h4>
                                        <p className="text-[var(--housen-gray)] text-sm">
                                            Principalmente en Tuxtla Gutiérrez y zonas metropolitanas de Chiapas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-[var(--housen-light)]">
                <div className="container-custom">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-[var(--housen-dark)]">
                            Encuéntranos
                        </h2>
                        <p className="text-[var(--housen-gray)] mt-2">
                            Visítanos en nuestra oficina en Tuxtla Gutiérrez
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden h-[400px] bg-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122474.45947731774!2d-93.17847585!3d16.7531245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85eca8abf11e4de1%3A0x3a4c3c3b3b3b3b3b!2sTuxtla%20Gutierrez%2C%20Chiapas!5e0!3m2!1ses!2smx!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación HOUSEN"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}
