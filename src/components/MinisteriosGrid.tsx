import { Music, Zap, Star, Heart } from 'lucide-react'
import { ministerios } from '@/data/ministerios'
import SectionTitle from '@/components/ui/SectionTitle'
import { RevealSection } from '@/components/ui/RevealSection'

const iconMap: Record<string, React.ReactNode> = {
  music: <Music size={28} />,
  zap:   <Zap   size={28} />,
  star:  <Star  size={28} />,
  heart: <Heart size={28} />,
}

const ministerioColors: Record<string, string> = {
  'Alabanza': 'bg-ivn-purple-light text-ivn-purple  group-hover:bg-ivn-purple  group-hover:text-white',
  'Jóvenes':  'bg-fuchsia-100      text-fuchsia-600 group-hover:bg-ivn-fuchsia group-hover:text-white',
  'Niños':    'bg-amber-50         text-amber-500   group-hover:bg-amber-400   group-hover:text-white',
  'Damas':    'bg-rose-50          text-rose-500    group-hover:bg-ivn-rose    group-hover:text-white',
}

export default function MinisteriosGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nuestros ministerios"
          subtitle="Cada ministerio es un espacio para encontrarte con Dios y servir a tu comunidad."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ministerios.map((m, i) => (
            <RevealSection key={m.nombre} delay={i * 100}>
              <div className="group bg-white border border-ivn-gray rounded-2xl p-6 flex flex-col items-center text-center gap-4 cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:border-ivn-purple/30">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 ${
                    ministerioColors[m.nombre] ?? 'bg-ivn-purple-light text-ivn-purple group-hover:bg-ivn-purple group-hover:text-white'
                  }`}
                >
                  {iconMap[m.icono]}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ivn-text text-lg mb-1 transition-colors duration-200 group-hover:text-ivn-purple">
                    {m.nombre}
                  </h3>
                  <p className="text-ivn-muted text-sm font-body">{m.descripcion}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
