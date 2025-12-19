'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Property } from '@/data/properties'

interface PropertyDetailClientProps {
    property: Property
}

export default function PropertyDetailClient({ property }: PropertyDetailClientProps) {
    const [selectedImage, setSelectedImage] = useState(0)
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)

    const openGallery = (index: number) => {
        setSelectedImage(index)
        setIsGalleryOpen(true)
    }

    const closeGallery = () => {
        setIsGalleryOpen(false)
    }

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % property.gallery.length)
    }

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + property.gallery.length) % property.gallery.length)
    }

    return (
        <>
            {/* Hero with Main Image */}
            <section className="relative h-[50vh] md:h-[60vh] bg-[var(--housen-dark)]">
                <Image
                    src={property.mainImage}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <div className="container-custom">
                        <Link
                            href="/inmobiliaria"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Ver más propiedades
                        </Link>
                        <div className="flex items-start justify-between flex-wrap gap-4">
                            <div>
                                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
                                    {property.type}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                                    {property.title}
                                </h1>
                                <p className="text-white/80 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {property.location}
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
                                <p className="text-white/70 text-sm">Inversión desde</p>
                                <p className="text-2xl md:text-3xl font-bold text-white">{property.price}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Button */}
                <button
                    onClick={() => openGallery(0)}
                    className="absolute bottom-6 right-6 md:bottom-12 md:right-12 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl hover:bg-white/30 transition-colors flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Galería ({property.gallery.length} fotos)
                </button>
            </section>

            {/* Image Gallery Thumbnails */}
            <section className="py-6 bg-[var(--housen-light)]">
                <div className="container-custom">
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {property.gallery.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => openGallery(index)}
                                className="relative flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden hover:ring-2 hover:ring-[var(--housen-dark)] transition-all"
                            >
                                <Image
                                    src={image}
                                    alt={`${property.title} - Foto ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-10">
                            {/* Description */}
                            <div>
                                <h2 className="text-2xl font-bold text-[var(--housen-dark)] mb-4">
                                    Descripción
                                </h2>
                                <p className="text-[var(--housen-gray)] leading-relaxed">
                                    {property.description}
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div>
                                <h2 className="text-2xl font-bold text-[var(--housen-dark)] mb-4">
                                    Características
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {property.details.bedrooms && (
                                        <div className="bg-[var(--housen-light)] rounded-xl p-4 text-center">
                                            <svg className="w-8 h-8 mx-auto mb-2 text-[var(--housen-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                            </svg>
                                            <p className="text-2xl font-bold text-[var(--housen-dark)]">{property.details.bedrooms}</p>
                                            <p className="text-sm text-[var(--housen-gray)]">Recámaras</p>
                                        </div>
                                    )}
                                    {property.details.bathrooms && (
                                        <div className="bg-[var(--housen-light)] rounded-xl p-4 text-center">
                                            <svg className="w-8 h-8 mx-auto mb-2 text-[var(--housen-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                            </svg>
                                            <p className="text-2xl font-bold text-[var(--housen-dark)]">{property.details.bathrooms}</p>
                                            <p className="text-sm text-[var(--housen-gray)]">Baños</p>
                                        </div>
                                    )}
                                    {property.details.parking && (
                                        <div className="bg-[var(--housen-light)] rounded-xl p-4 text-center">
                                            <svg className="w-8 h-8 mx-auto mb-2 text-[var(--housen-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                            </svg>
                                            <p className="text-2xl font-bold text-[var(--housen-dark)]">{property.details.parking}</p>
                                            <p className="text-sm text-[var(--housen-gray)]">Estacionamiento</p>
                                        </div>
                                    )}
                                    <div className="bg-[var(--housen-light)] rounded-xl p-4 text-center">
                                        <svg className="w-8 h-8 mx-auto mb-2 text-[var(--housen-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                        </svg>
                                        <p className="text-lg font-bold text-[var(--housen-dark)]">{property.details.area.split('/')[0]}</p>
                                        <p className="text-sm text-[var(--housen-gray)]">Área</p>
                                    </div>
                                </div>
                            </div>

                            {/* Amenities */}
                            {property.details.amenities && (
                                <div>
                                    <h2 className="text-2xl font-bold text-[var(--housen-dark)] mb-4">
                                        Amenidades y Acabados
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {property.details.amenities.map((amenity, index) => (
                                            <div key={index} className="flex items-center gap-3 text-[var(--housen-gray)]">
                                                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {amenity}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Highlights */}
                            <div>
                                <h2 className="text-2xl font-bold text-[var(--housen-dark)] mb-4">
                                    Puntos Destacados
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {property.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-[var(--housen-light)] rounded-lg p-3">
                                            <svg className="w-5 h-5 text-[var(--housen-dark)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <span className="text-[var(--housen-dark)] font-medium">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar - Contact Card */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-[var(--housen-dark)] mb-4">
                                    ¿Te interesa esta propiedad?
                                </h3>
                                <p className="text-[var(--housen-gray)] mb-6">
                                    Contáctanos para agendar una visita o recibir más información.
                                </p>

                                <a
                                    href={`https://wa.me/529602338505?text=${encodeURIComponent(`Hola, me interesa la propiedad: ${property.title}. Me gustaría recibir más información y agendar una visita.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-[#25D366] text-white py-3 px-4 rounded-xl font-semibold hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 mb-4"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Contactar por WhatsApp
                                </a>

                                <a
                                    href="tel:+529602338505"
                                    className="w-full bg-[var(--housen-dark)] text-white py-3 px-4 rounded-xl font-semibold hover:bg-[var(--housen-dark)]/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Llamar ahora
                                </a>

                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <p className="text-sm text-[var(--housen-gray)] mb-2">Precio</p>
                                    <p className="text-2xl font-bold text-[var(--housen-dark)]">{property.price}</p>
                                </div>

                                <div className="mt-4 flex items-center gap-2 text-sm text-[var(--housen-gray)]">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {property.location}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Screen Gallery Modal */}
            {isGalleryOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
                    {/* Close Button */}
                    <button
                        onClick={closeGallery}
                        className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-50"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 text-white/80 hover:text-white p-2 z-50"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Main Image */}
                    <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-auto px-16">
                        <Image
                            src={property.gallery[selectedImage]}
                            alt={`${property.title} - Foto ${selectedImage + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextImage}
                        className="absolute right-4 text-white/80 hover:text-white p-2 z-50"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                        {selectedImage + 1} / {property.gallery.length}
                    </div>

                    {/* Thumbnails */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4">
                        {property.gallery.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all ${selectedImage === index ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-100'
                                    }`}
                            >
                                <Image
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
