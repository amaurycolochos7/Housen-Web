import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { slugify } from '@/lib/utils'

// GET all projects
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const status = searchParams.get('status')
    const featured = searchParams.get('featured')

    try {
        const projects = await prisma.project.findMany({
            where: {
                published: true,
                ...(type && { type }),
                ...(status && { status }),
                ...(featured === 'true' && { isFeatured: true }),
            },
            orderBy: { createdAt: 'desc' },
        })

        return NextResponse.json(projects)
    } catch (error) {
        console.error('Error fetching projects:', error)
        return NextResponse.json({ error: 'Error fetching projects' }, { status: 500 })
    }
}

// POST create new project
export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const body = await request.json()
        const { name, description, type, status, location, coverImage, galleryImages, isFeatured } = body

        const slug = slugify(name)

        const project = await prisma.project.create({
            data: {
                slug,
                name,
                description,
                type,
                status,
                location,
                coverImage,
                galleryImages: galleryImages || [],
                isFeatured: isFeatured || false,
                published: true,
            },
        })

        return NextResponse.json(project, { status: 201 })
    } catch (error) {
        console.error('Error creating project:', error)
        return NextResponse.json({ error: 'Error creating project' }, { status: 500 })
    }
}
