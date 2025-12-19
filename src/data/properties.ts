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
        price: 'Desde $2.5 MDP',
        location: 'Tuxtla Gutiérrez, Chiapas',
        description: 'Exclusivo fraccionamiento residencial con casas de diseño contemporáneo, acabados de primera calidad y amplios espacios. Ubicado en una de las zonas de mayor plusvalía de Tuxtla Gutiérrez, con fácil acceso a vías principales, centros comerciales y escuelas.',
        mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop',
        ],
        features: ['3 Recámaras', '2.5 Baños', '150 m²', 'Estacionamiento'],
        details: {
            area: '150 m² construcción / 200 m² terreno',
            bedrooms: 3,
            bathrooms: 2.5,
            parking: 2,
            yearBuilt: '2024',
            amenities: [
                'Cocina integral equipada',
                'Sala y comedor con doble altura',
                'Closets de madera',
                'Jardín privado',
                'Terraza techada',
                'Cisterna y tinaco',
                'Instalación para aires acondicionados',
                'Pisos de porcelanato',
            ],
        },
        highlights: [
            'Fraccionamiento con acceso controlado',
            'Parques y áreas verdes',
            'Cerca de centros comerciales',
            'Excelente plusvalía',
            'Financiamiento disponible',
        ],
    },
    {
        id: 'torres-vista-hermosa',
        title: 'Torres Vista Hermosa',
        type: 'Departamentos',
        price: 'Desde $1.8 MDP',
        location: 'Col. Vista Hermosa, Tuxtla Gutiérrez',
        description: 'Moderno complejo de departamentos con las mejores vistas de la ciudad. Diseñados para el estilo de vida contemporáneo, con amenidades de primer nivel y seguridad 24/7. Ideal para jóvenes profesionales y familias pequeñas.',
        mainImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop',
        ],
        features: ['2 Recámaras', '2 Baños', '95 m²', 'Amenidades'],
        details: {
            area: '95 m² construcción',
            bedrooms: 2,
            bathrooms: 2,
            parking: 1,
            yearBuilt: '2023',
            amenities: [
                'Cocina integral',
                'Cuarto de lavado',
                'Balcón con vista panorámica',
                'Closets de madera',
                'Minisplit instalados',
                'Piso laminado de madera',
            ],
        },
        highlights: [
            'Alberca y área de asadores',
            'Gimnasio equipado',
            'Salón de usos múltiples',
            'Seguridad 24/7',
            'Elevadores',
            'Cajón de estacionamiento techado',
        ],
    },
    {
        id: 'lotes-san-roque',
        title: 'Lotes San Roque',
        type: 'Terrenos',
        price: 'Desde $800 MXN/m²',
        location: 'San Roque, Tuxtla Gutiérrez',
        description: 'Excelente oportunidad de inversión en terrenos con todos los servicios. Ubicados en zona de alto crecimiento con uso de suelo mixto, ideal para construir tu casa o negocio. Todos los lotes cuentan con escrituras al corriente.',
        mainImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop',
        ],
        features: ['Desde 200 m²', 'Servicios', 'Escriturado', 'Uso mixto'],
        details: {
            area: 'Lotes desde 200 m² hasta 500 m²',
            amenities: [
                'Agua potable',
                'Drenaje',
                'Electricidad',
                'Alumbrado público',
                'Calles pavimentadas',
            ],
        },
        highlights: [
            'Escrituras inmediatas',
            'Uso de suelo mixto',
            'Sin restricción de construcción',
            'Zona de alta plusvalía',
            'Financiamiento directo',
            'Enganche desde 20%',
        ],
    },
]

export function getPropertyById(id: string): Property | undefined {
    return properties.find(p => p.id === id)
}

export function getPropertyBySlug(slug: string): Property | undefined {
    return properties.find(p => p.id === slug)
}
