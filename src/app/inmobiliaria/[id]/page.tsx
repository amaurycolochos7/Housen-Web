import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { properties, getPropertyById } from '@/data/properties'
import PropertyDetailClient from './PropertyDetailClient'

// Generate static params for all properties
export function generateStaticParams() {
    return properties.map((property) => ({
        id: property.id,
    }))
}

// Generate metadata for each property
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const property = getPropertyById(id)

    if (!property) {
        return {
            title: 'Propiedad no encontrada',
        }
    }

    return {
        title: `${property.title} | HOUSEN® Inmobiliaria`,
        description: property.description,
    }
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const property = getPropertyById(id)

    if (!property) {
        notFound()
    }

    return <PropertyDetailClient property={property} />
}
