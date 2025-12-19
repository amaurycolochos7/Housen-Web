import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    // Create admin user
    const passwordHash = await bcrypt.hash('housen2024', 10)

    await prisma.user.upsert({
        where: { email: 'admin@housen.mx' },
        update: {},
        create: {
            name: 'Administrador',
            email: 'admin@housen.mx',
            passwordHash,
            role: 'ADMIN',
        },
    })

    // Create default site config
    await prisma.siteConfig.upsert({
        where: { id: 'main' },
        update: {},
        create: {
            id: 'main',
            companyName: 'HOUSEN® – Constructora & Inmobiliaria',
            address: '8va Ote entre 2da y 3ra Sur, Barrio San Roque, Tuxtla Gutiérrez, Chiapas, México, C.P. 29000',
            phone: '+52 960 233 8505',
            whatsappNumber: '529602338505',
            whatsappDefaultMessage: 'Hola, me gustaría recibir información sobre un proyecto de HOUSEN®',
            mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5!2d-93.1167!3d16.7528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ1JzEwLjEiTiA5M8KwMDcnMDAuMSJX!5e0!3m2!1ses!2smx!4v1',
        },
    })

    // Create demo projects
    const projects = [
        {
            slug: 'residencial-los-pinos',
            name: 'Residencial Los Pinos',
            description: 'Desarrollo residencial de lujo con 24 casas unifamiliares diseñadas para el confort moderno.',
            type: 'RESIDENCIAL',
            status: 'EN_CONSTRUCCION',
            location: 'Tuxtla Gutiérrez, Chiapas',
            coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
            galleryImages: [
                'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
            ],
            isFeatured: true,
        },
        {
            slug: 'plaza-comercial-san-roque',
            name: 'Plaza Comercial San Roque',
            description: 'Centro comercial con espacios premium para negocios y oficinas en ubicación estratégica.',
            type: 'COMERCIAL',
            status: 'PROXIMO',
            location: 'Tuxtla Gutiérrez, Chiapas',
            coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
            galleryImages: [],
            isFeatured: true,
        },
        {
            slug: 'torres-vista-hermosa',
            name: 'Torres Vista Hermosa',
            description: 'Complejo de departamentos con vista panorámica y amenidades de primer nivel.',
            type: 'RESIDENCIAL',
            status: 'ENTREGADO',
            location: 'San Cristóbal, Chiapas',
            coverImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
            galleryImages: [],
            isFeatured: true,
        },
    ]

    for (const project of projects) {
        await prisma.project.upsert({
            where: { slug: project.slug },
            update: {},
            create: project,
        })
    }

    console.log('Seed completed!')
    console.log('Admin credentials: admin@housen.mx / housen2024')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
