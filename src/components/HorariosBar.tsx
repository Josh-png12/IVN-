import { Clock, Church, Heart, Users } from 'lucide-react'
import { horarios } from '@/data/horarios'
import { RevealSection } from '@/components/ui/RevealSection'

const iconMap: Record<string, React.ReactNode> = {
  church: <Church size={24} className="text-ivn-purple  transition-transform duration-300 group-hover:scale-110" />,
  heart:  <Heart  size={24} className="text-ivn-fuchsia transition-transform duration-300 group-hover:scale-110" />,
  users:  <Users  size={24} className="text-ivn-teal    transition-transform duration-300 group-hover:scale-110" />,
}

const borderColors = ['border-ivn-purple', 'border-ivn-fuchsia', 'border-ivn-teal']

const iconBg = ['bg-ivn-purple-light', 'bg-fuchsia-50', 'bg-teal-50']

export default function HorariosBar() {
  return (
    <section className="bg-gradient-to-r from-ivn-purple-light via-white to-ivn-purple-glow py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ivn-purple-dark mb-2">
            Próximos cultos
          </h2>
          <div className="w-12 h-1 bg-ivn-purple rounded-full mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {horarios.map((h, i) => (
            <RevealSection key={h.dia} delay={i * 100}>
              <div
                className={`group bg-white rounded-2xl p-5 sm:p-6 shadow-sm border-l-4 ${borderColors[i]} flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3 cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}
              >
                <div className={`w-12 h-12 ${iconBg[i]} rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                  {iconMap[h.icono] ?? <Clock size={24} className="text-ivn-purple" />}
                </div>
                <div>
                  <p className="font-body font-bold text-ivn-text text-lg">{h.dia}</p>
                  <p className="font-semibold text-sm" style={{ color: i === 0 ? '#7C3AED' : i === 1 ? '#D946EF' : '#0D9488' }}>
                    {h.hora}
                  </p>
                  <p className="text-ivn-muted text-sm">{h.nombre}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
