import { Play, Clock, Calendar, ExternalLink } from 'lucide-react'
import { sermones } from '@/data/sermones'
import SectionTitle from '@/components/ui/SectionTitle'
import { RevealSection } from '@/components/ui/RevealSection'

const gradients = [
  'from-ivn-purple to-ivn-magenta',
  'from-ivn-purple-dark to-ivn-purple-mid',
  'from-ivn-fuchsia to-ivn-rose',
]

export default function SermonesSection() {
  return (
    <section className="py-20 bg-ivn-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Últimas prédicas"
          subtitle="Alimenta tu espíritu con la Palabra. Escucha nuestros mensajes más recientes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {sermones.map((s, i) => (
            <RevealSection key={s.titulo} delay={i * 100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-ivn-purple/10 transition-all duration-300 group h-full">
                {/* Thumbnail with zoom on hover */}
                <div className="relative h-44 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]} transition-transform duration-500 group-hover:scale-105`}
                  />
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/40 backdrop-blur-sm">
                      <Play size={28} className="text-white ml-1" />
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/40 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                      <Clock size={11} />
                      {s.duracion}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-ivn-text text-lg mb-2 leading-snug">
                    {s.titulo}
                  </h3>
                  <p className="text-ivn-purple text-sm font-semibold mb-1">{s.pastor}</p>
                  <div className="flex items-center gap-1 text-ivn-muted text-xs mb-4">
                    <Calendar size={12} />
                    {s.fecha}
                  </div>
                  <button className="flex items-center gap-2 text-ivn-purple font-semibold text-sm hover:text-ivn-magenta transition-colors duration-200 group/btn">
                    <Play size={15} className="group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                    Ver prédica
                  </button>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ivn-purple font-semibold hover:text-ivn-magenta transition-colors duration-200 group"
          >
            Ver todos los sermones
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  )
}
