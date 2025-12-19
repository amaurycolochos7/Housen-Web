export interface Property {
    id: string
    title: string
    type: 'Casas' | 'Departamentos' | 'Terrenos'
    price: string
    location: string
    description: string
    mainImage: string
    gallery: string[]
    features: string[]
    details: {
        area: string
        bedrooms?: number
        bathrooms?: number
        parking?: number
        yearBuilt?: string
        amenities?: string[]
    }
    highlights: string[]
}

export const properties: Property[] = [
    {
        id: 'residencial-los-pinos',
        title: 'Residencial Los Pinos',
        type: 'Casas',
        price: 'Desde $2,500,000 MXN',
        location: 'Tuxtla Gutiérrez, Chiapas',
        description: 'Descubre el hogar que siempre soñaste en Residencial Los Pinos. Este exclusivo desarrollo residencial combina arquitectura contemporánea con acabados de lujo en una de las zonas de mayor plusvalía de Tuxtla Gutiérrez. Cada vivienda está diseñada para ofrecerte espacios amplios, iluminados y funcionales, con acceso privilegiado a las principales vías de comunicación, plazas comerciales y las mejores escuelas de la ciudad.',
        mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop',
        ],
        features: ['3 Recámaras amplias', '2.5 Baños completos', '150 m² construcción', '2 Cajones de estacionamiento'],
        details: {
            area: '150 m² construcción / 200 m² terreno',
            bedrooms: 3,
            bathrooms: 2.5,
            parking: 2,
            yearBuilt: '2024',
            amenities: [
                'Cocina integral con electrodomésticos',
                'Sala y comedor con doble altura',
                'Closets vestidores de madera',
                'Jardín privado con riego',
                'Terraza techada para convivencia',
                'Cisterna y sistema hidroneumático',
                'Preinstalación para clima en todas las recámaras',
                'Pisos de porcelanato premium',
            ],
        },
        highlights: [
            'Acceso controlado 24/7',
            'Áreas verdes y parque infantil',
            'A 5 min de centros comerciales',
            'Plusvalía garantizada',
            'Financiamiento sin aval',
            'Entrega inmediata',
        ],
    },
    {
        id: 'torres-vista-hermosa',
        title: 'Torres Vista Hermosa',
        type: 'Departamentos',
        price: 'Desde $1,800,000 MXN',
        location: 'Col. Vista Hermosa, Tuxtla Gutiérrez',
        description: 'Vive la experiencia de despertar cada día con las mejores vistas panorámicas de la ciudad. Torres Vista Hermosa es un moderno complejo vertical que redefine el concepto de vivienda urbana, combinando diseño contemporáneo, amenidades de primer mundo y la seguridad que tu familia merece. Perfecto para profesionales exigentes y familias que buscan calidad de vida sin sacrificar ubicación.',
        mainImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop',
        ],
        features: ['2 Recámaras con vestidor', '2 Baños completos', '95 m² de lujo', 'Amenidades premium'],
        details: {
            area: '95 m² construcción',
            bedrooms: 2,
            bathrooms: 2,
            parking: 1,
            yearBuilt: '2023',
            amenities: [
                'Cocina integral con barra desayunador',
                'Área de lavado independiente',
                'Balcón con vista espectacular',
                'Closets de diseño en madera',
                'Clima instalado en todas las áreas',
                'Piso laminado tipo madera importado',
            ],
        },
        highlights: [
            'Alberca infinita con vista panorámica',
            'Gimnasio totalmente equipado',
            'Roof garden con área lounge',
            'Vigilancia y CCTV 24/7',
            'Elevadores de alta velocidad',
            'Estacionamiento techado asignado',
        ],
    },
    {
        id: 'lotes-san-roque',
        title: 'Terrenos San Roque',
        type: 'Terrenos',
        price: 'Desde $800 MXN/m²',
        location: 'San Roque, Tuxtla Gutiérrez',
        description: 'Tu mejor inversión empieza aquí. Los terrenos de San Roque representan una oportunidad única de inversión en una de las zonas de mayor crecimiento y desarrollo de Tuxtla Gutiérrez. Con todos los servicios incluidos, uso de suelo flexible y escrituras al corriente, estos lotes son ideales tanto para construir tu hogar como para desarrollar tu próximo proyecto comercial.',
        mainImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop',
        ],
        features: ['Desde 200 m²', 'Todos los servicios', '100% escriturado', 'Uso de suelo mixto'],
        details: {
            area: 'Lotes desde 200 m² hasta 500 m²',
            amenities: [
                'Agua potable municipal',
                'Sistema de drenaje sanitario',
                'Red eléctrica instalada',
                'Alumbrado público LED',
                'Calles completamente pavimentadas',
            ],
        },
        highlights: [
            'Escrituración inmediata',
            'Uso habitacional y comercial',
            'Sin restricciones de construcción',
            'Zona de alta plusvalía',
            'Financiamiento directo sin buró',
            'Enganche desde solo 20%',
        ],
    },
]

export function getPropertyById(id: string): Property | undefined {
    return properties.find(p => p.id === id)
}

export function getPropertyBySlug(slug: string): Property | undefined {
    return properties.find(p => p.id === slug)
}
