'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/constructora', label: 'Constructora' },
    { href: '/inmobiliaria', label: 'Inmobiliaria' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/50">
            <nav className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="HOUSEN Logo"
                            width={48}
                            height={48}
                            className="rounded"
                        />
                        <div className="hidden sm:block">
                            <span className="text-xl font-semibold text-[var(--housen-dark)]">HOUSEN</span>
                            <span className="text-[var(--housen-dark)] text-lg">®</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[var(--housen-dark)] hover:text-[var(--housen-accent)] font-medium transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--housen-dark)] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link href="/contacto" className="btn-primary">
                            Contáctanos
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-[var(--housen-dark)]"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-200/50 animate-fade-in">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-[var(--housen-dark)] hover:text-[var(--housen-accent)] font-medium py-4 px-2 transition-colors border-b border-gray-100 last:border-0 block"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contacto"
                                onClick={() => setIsMenuOpen(false)}
                                className="btn-primary text-center mt-2"
                            >
                                Contáctanos
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
