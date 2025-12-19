import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
    config?: {
        companyName: string
        address: string
        phone: string
        whatsappNumber: string
        whatsappDefaultMessage: string
    }
}

export default function Footer({ config }: FooterProps) {
    const currentYear = new Date().getFullYear()

    const defaultConfig = {
        companyName: 'HOUSEN® – Constructora & Inmobiliaria',
        address: '8va Ote entre 2da y 3ra Sur, Barrio San Roque, Tuxtla Gutiérrez, Chiapas, México, C.P. 29000',
        phone: '+52 960 233 8505',
        whatsappNumber: '529602338505',
        whatsappDefaultMessage: 'Hola, me gustaría recibir información sobre un proyecto de HOUSEN®'
    }

    const siteConfig = config || defaultConfig
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`
    const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=8va+Oriente+entre+2da+y+3ra+Sur+Barrio+San+Roque+Tuxtla+Gutierrez+Chiapas+Mexico'

    // Quick fix for the missing property in the interface
    const contactEmail = 'contacto@housen.mx'

    return (
        <footer className="bg-[#111111] text-white !mt-24">
            {/* Main Content */}
            <div className="container-custom !pt-32 pb-16 lg:!pt-40 lg:pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-20">
                    {/* Brand Section - Takes 4 columns */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/logo.png"
                                alt="HOUSEN Logo"
                                width={40}
                                height={40}
                                className="rounded opacity-90"
                            />
                            <span className="text-xl font-bold tracking-tight">HOUSEN<span className="text-gray-500 font-normal">®</span></span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Expertos en transformar visiones en realidades tangibles. Líderes en desarrollo inmobiliario y construcción de alto nivel.
                        </p>
                    </div>

                    {/* Links Section - Takes 8 columns split into 3 lists */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 ">
                        <div>
                            <h4 className="font-medium text-white mb-6">Navegación</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                                <li><Link href="/proyectos" className="hover:text-white transition-colors">Proyectos</Link></li>
                                <li><Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-white mb-6">Servicios</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li><Link href="/constructora" className="hover:text-white transition-colors">Constructora</Link></li>
                                <li><Link href="/inmobiliaria" className="hover:text-white transition-colors">Inmobiliaria</Link></li>
                                <li><Link href="/inmobiliaria" className="hover:text-white transition-colors">Inversiones</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-white mb-6">Contacto</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li>
                                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors flex items-center gap-2">
                                        {siteConfig.phone}
                                    </a>
                                </li>
                                <li>
                                    <a href={whatsappUrl} target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                                        WhatsApp
                                    </a>
                                </li>
                                <li>
                                    <a href={`mailto:${contactEmail}`} className="hover:text-white transition-colors block">
                                        {contactEmail}
                                    </a>
                                </li>
                                <li>
                                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors leading-relaxed block">
                                        {siteConfig.address}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 mt-16 lg:mt-24">
                <div className="container-custom py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>© {currentYear} HOUSEN®. Todos los derechos reservados.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-gray-400 transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Términos</a>
                        <Link href="/admin" className="hover:text-white transition-colors font-medium">
                            Acceso Administrativo
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

