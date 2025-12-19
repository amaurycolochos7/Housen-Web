import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
    project: {
        slug: string
        name: string
        location: string
        status: string
        type: string
        coverImage: string
    }
}

const statusLabels: Record<string, { label: string; class: string }> = {
    PROXIMO: { label: 'Próximamente', class: 'badge-proximo' },
    EN_CONSTRUCCION: { label: 'En Construcción', class: 'badge-construccion' },
    ENTREGADO: { label: 'Entregado', class: 'badge-entregado' },
}

const typeLabels: Record<string, string> = {
    RESIDENCIAL: 'Residencial',
    COMERCIAL: 'Comercial',
    OBRA: 'Obra',
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const status = statusLabels[project.status] || statusLabels.PROXIMO

    return (
        <Link href={`/proyectos/${project.slug}`} className="group card block">
            <div className="relative aspect-[4/3] img-zoom">
                <Image
                    src={project.coverImage || '/placeholder-project.jpg'}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                    <span className={`badge ${status.class}`}>
                        {status.label}
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
                <div className="text-sm text-[var(--housen-gray)] mb-2">
                    {typeLabels[project.type] || project.type}
                </div>
                <h3 className="text-xl font-semibold text-[var(--housen-dark)] mb-2 group-hover:text-[var(--housen-accent)] transition-colors">
                    {project.name}
                </h3>
                <div className="flex items-center gap-2 text-[var(--housen-gray)]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{project.location}</span>
                </div>
            </div>
        </Link>
    )
}
