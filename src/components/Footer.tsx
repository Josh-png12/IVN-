import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Youtube, MessageCircle, Clock, MapPin } from 'lucide-react'
import { RevealSection } from '@/components/ui/RevealSection'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes somos', href: '/quienes-somos' },
  { label: 'Ministerios', href: '/ministerios' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'En Vivo', href: '/en-vivo' },
]

const horarios = [
  { dia: 'Domingo',    hora: '9:00 AM',  nombre: 'Culto General' },
  { dia: 'Miércoles', hora: '7:00 PM',  nombre: 'Oración' },
  { dia: 'Viernes',   hora: '7:00 PM',  nombre: 'Jóvenes' },
]

export default function Footer() {
  return (
    <footer className="bg-ivn-purple-dark text-white">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-ivn-purple via-ivn-fuchsia to-ivn-teal" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Logo + lema */}
          <RevealSection delay={0}>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="relative w-12 h-12 flex-shrink-0 bg-white/10 rounded-full p-1">
                  <Image src="/logo.png" alt="IVN Logo" fill className="object-contain" />
                </div>
                <span className="font-display font-bold text-xl">Iglesia Vino Nuevo</span>
              </div>
              <p className="text-ivn-purple-light text-lg font-semibold">"Una casa para todos"</p>
              <p className="text-white/70 italic text-sm leading-relaxed">
                "El vino nuevo en odres nuevos se ha de echar"
                <br />
                <span className="not-italic text-white/50">— Marcos 2:22</span>
              </p>
              <div className="flex items-start gap-2 mt-2 text-white/70 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-ivn-magenta" />
                <span>K5 36-96, Barrio Buenos Aires, Riohacha, La Guajira</span>
              </div>
            </div>
          </RevealSection>

          {/* Col 2: Links */}
          <RevealSection delay={150}>
            <div className="text-center md:text-left">
              <h3 className="font-display font-bold text-lg mb-6 text-ivn-purple-light">Páginas</h3>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealSection>

          {/* Col 3: Horarios + redes */}
          <RevealSection delay={300}>
            <div className="text-center md:text-left">
              <h3 className="font-display font-bold text-lg mb-6 text-ivn-purple-light">Cultos</h3>
              <ul className="flex flex-col gap-3 mb-8">
                {horarios.map((h) => (
                  <li key={h.dia} className="flex items-center gap-2 text-sm text-white/70">
                    <Clock size={14} className="text-ivn-magenta flex-shrink-0" />
                    <span>
                      <strong className="text-white">{h.dia}</strong> {h.hora} — {h.nombre}
                    </span>
                  </li>
                ))}
              </ul>
              <h3 className="font-display font-bold text-lg mb-4 text-ivn-purple-light">Síguenos</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://instagram.com/IVN_Riohacha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-ivn-magenta rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://wa.me/573000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Iglesia Vino Nuevo · Riohacha, La Guajira · Todos los derechos reservados
        </div>
      </div>
    </footer>
  )
}
