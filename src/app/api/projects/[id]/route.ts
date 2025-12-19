import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

interface RouteParams {
    params: Promise<{ id: string }>
}

// GET single project
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { id } = await params

    try {
        const project = await prisma.project.findUnique({
            where: { id },
        })

        if (!project) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 })
        }

        return NextResponse.json(project)
    } catch (error) {
        console.error('Error fetching project:', error)
        return NextResponse.json({ error: 'Error fetching project' }, { status: 500 })
    }
}

// PUT update project
export async function PUT(request: NextRequest, { params }: RouteParams) {
    const session = await getServerSession(authOptions)
    const { id } = await params

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const body = await request.json()
        const { name, description, type, status, location, coverImage, galleryImages, isFeatured, published } = body

        const project = await prisma.project.update({
            where: { id },
            data: {
                name,
                description,
                type,
                status,
                location,
                coverImage,
                galleryImages,
                isFeatured,
                published,
            },
        })

        return NextResponse.json(project)
    } catch (error) {
        console.error('Error updating project:', error)
        return NextResponse.json({ error: 'Error updating project' }, { status: 500 })
    }
}

// DELETE project
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    const session = await getServerSession(authOptions)
    const { id } = await params

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        await prisma.project.delete({
            where: { id },
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error deleting project:', error)
        return NextResponse.json({ error: 'Error deleting project' }, { status: 500 })
    }
}
