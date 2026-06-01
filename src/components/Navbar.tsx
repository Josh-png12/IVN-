'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Radio } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes somos', href: '/quienes-somos' },
  { label: 'Ministerios', href: '/ministerios' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const max = document.body.scrollHeight - window.innerHeight
      if (max > 0) setScrollProgress((window.scrollY / max) * 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-ivn-purple-light shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-ivn-purple transition-all duration-100 rounded-full"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Logo Iglesia Vino Nuevo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-ivn-purple-dark font-bold text-lg leading-tight block">
                Iglesia Vino Nuevo
              </span>
              <span className="text-ivn-muted text-xs">Una casa para todos</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'relative font-body text-ivn-text hover:text-ivn-purple transition-colors duration-200 text-sm font-medium',
                  "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0",
                  'after:bg-ivn-purple after:rounded-full after:transition-all after:duration-300',
                  'hover:after:w-full',
                ].join(' ')}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/en-vivo"
              className="flex items-center gap-1.5 bg-ivn-magenta text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all duration-200 shadow-md"
              style={{ animation: 'pulse-ring 2s ease-out infinite' }}
            >
              <Radio size={15} />
              En Vivo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-ivn-text hover:bg-ivn-purple-light transition-colors"
            aria-label="Abrir menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-ivn-gray">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-body text-ivn-text hover:text-ivn-purple hover:bg-ivn-purple-light px-4 py-3 rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/en-vivo"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 bg-ivn-magenta text-white px-4 py-3 rounded-lg text-sm font-semibold mt-2"
            >
              <Radio size={15} />
              En Vivo
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
