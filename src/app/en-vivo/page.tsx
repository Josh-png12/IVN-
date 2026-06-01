import { Radio, Youtube, Instagram, Clock } from 'lucide-react'
import Link from 'next/link'
import SermonesSection from '@/components/SermonesSection'

const horarios = [
  { dia: 'Domingo',    hora: '9:00 AM', culto: 'Culto General' },
  { dia: 'Miércoles', hora: '7:00 PM', culto: 'Oración' },
  { dia: 'Viernes',   hora: '7:00 PM', culto: 'Jóvenes' },
]

export default function EnVivoPage() {
  return (
    <>
      {/* ── Hero "Próximamente" ───────────────────────────── */}
      <section className="min-h-[100svh] flex flex-col items-center justify-center bg-gradient-to-br from-ivn-purple-dark via-ivn-purple to-purple-600 relative overflow-hidden px-4 text-center">

        {/* Orbes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-96 h-96 rounded-full bg-purple-400/20 blur-3xl -top-20 -left-20"
            style={{ animation: 'float1 8s ease-in-out infinite' }}
          />
          <div
            className="absolute w-80 h-80 rounded-full bg-ivn-fuchsia/15 blur-3xl -bottom-10 -right-10"
            style={{ animation: 'float2 10s ease-in-out infinite' }}
          />
        </div>
        <div className="absolute inset-0 pattern-dots opacity-30" />

        {/* Badge estado */}
        <div className="relative z-10 mb-8 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-white/80 text-sm font-medium backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          Próximamente
        </div>

        {/* Ícono central */}
        <div
          className="relative z-10 mb-8 w-28 h-28 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center"
          style={{ animation: 'shimmer 3s ease-in-out infinite' }}
        >
          <Radio className="w-14 h-14 text-white" />
        </div>

        <h1 className="relative z-10 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Transmisión en vivo
        </h1>

        <p className="relative z-10 text-white/70 text-lg md:text-xl max-w-xl mb-3 font-body italic">
          Estamos preparando nuestra transmisión online para que puedas
          conectarte con nosotros desde cualquier lugar.
        </p>

        <p className="relative z-10 text-white/50 text-sm mb-10 font-body">
          Mientras tanto, síguenos en nuestras redes
        </p>

        {/* Botones redes */}
        <div className="relative z-10 flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="https://youtube.com/@IVNRiohacha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Youtube className="w-5 h-5" />
            YouTube
          </a>
          <a
            href="https://instagram.com/IVN_Riohacha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:brightness-110 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            @IVN_Riohacha
          </a>
          <Link
            href="/"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* Horarios */}
        <div className="relative z-10 flex flex-wrap gap-3 justify-center">
          {horarios.map((h) => (
            <div
              key={h.dia}
              className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white/80 text-sm backdrop-blur-sm"
            >
              <Clock className="w-4 h-4 text-purple-300 flex-shrink-0" />
              <span className="font-medium">{h.dia}</span>
              <span className="text-white/50">{h.hora}</span>
              <span className="text-white/60 hidden sm:inline">— {h.culto}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Últimas prédicas ──────────────────────────────── */}
      <SermonesSection />
    </>
  )
}
