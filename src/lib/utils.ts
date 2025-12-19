import { prisma } from './prisma'

export async function getSiteConfig() {
    let config = await prisma.siteConfig.findUnique({
        where: { id: 'main' }
    })

    if (!config) {
        config = await prisma.siteConfig.create({
            data: {
                id: 'main',
                companyName: 'HOUSEN® – Constructora & Inmobiliaria',
                address: '8va Ote entre 2da y 3ra Sur, Barrio San Roque, Tuxtla Gutiérrez, Chiapas, México, C.P. 29000',
                phone: '+52 960 233 8505',
                whatsappNumber: '529602338505',
                whatsappDefaultMessage: 'Hola, me gustaría recibir información sobre un proyecto de HOUSEN®',
                mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5!2d-93.1167!3d16.7528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ1JzEwLjEiTiA5M8KwMDcnMDAuMSJX!5e0!3m2!1ses!2smx!4v1'
            }
        })
    }

    return config
}

export function getWhatsAppUrl(number: string, message: string, projectName?: string) {
    const fullMessage = projectName
        ? `${message} - Proyecto: ${projectName}`
        : message
    return `https://wa.me/${number}?text=${encodeURIComponent(fullMessage)}`
}

export function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
}
