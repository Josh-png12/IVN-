import { Clock, Calendar, MapPin, ChevronRight, Church } from 'lucide-react'
import Link from 'next/link'
import { RevealSection } from '@/components/ui/RevealSection'

function InternalHero({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  return (
    <section className="bg-gradient-to-br from-ivn-purple-dark to-ivn-purple py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-ivn-purple-light text-sm uppercase tracking-widest mb-4">{breadcrumb}</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white">{title}</h1>
        <div className="w-16 h-1 bg-ivn-magenta rounded-full mx-auto mt-6" />
      </div>
    </section>
  )
}

const cultosRegulares = [
  { dia: 'Domingo',    hora: '9:00 AM', nombre: 'Culto General',         descripcion: 'Toda la congregación reunida para adorar, escuchar la Palabra y compartir en familia.' },
  { dia: 'Miércoles', hora: '7:00 PM', nombre: 'Reunión de Oración',    descripcion: 'Espacio íntimo de intercesión y búsqueda de Dios para toda la iglesia.' },
  { dia: 'Viernes',   hora: '7:00 PM', nombre: 'Ministerio de Jóvenes', descripcion: 'Vino Nuevo Youth en su noche de encuentro semanal para jóvenes.' },
]

const proximosEventos = [
  {
    fecha: '14 Jun 2025',
    titulo: 'Retiro de Jóvenes — Nuevos Odres',
    descripcion: 'Un fin de semana de renovación espiritual, adoración y encuentro con Dios para el ministerio juvenil.',
    lugar: 'Campamento La Llanura, La Guajira',
    tipo: 'Retiro',
    color: 'bg-ivn-magenta',
  },
  {
    fecha: '22 Jun 2025',
    titulo: 'Conferencia: Familia Bajo la Gracia',
    descripcion: 'Dos noches de enseñanza sobre matrimonio, crianza y relaciones familiares desde la perspectiva bíblica.',
    lugar: 'Templo IVN — Riohacha',
    tipo: 'Conferencia',
    color: 'bg-ivn-purple',
  },
  {
    fecha: '05 Jul 2025',
    titulo: 'Noche de Alabanza y Adoración',
    descripcion: 'Una noche especial dedicada a la adoración libre con músicos invitados y un tiempo poderoso de ministerio.',
    lugar: 'Templo IVN — Riohacha',
    tipo: 'Adoración',
    color: 'bg-purple-600',
  },
  {
    fecha: '19 Jul 2025',
    titulo: 'Encuentro de Damas — Mujeres de Valor',
    descripcion: 'El encuentro semestral del Ministerio de Damas, un día de comunión, testimonios y fortalecimiento.',
    lugar: 'Salón Comunitario IVN',
    tipo: 'Ministerio',
    color: 'bg-pink-500',
  },
]

const topBorders = ['border-t-ivn-purple', 'border-t-ivn-fuchsia', 'border-t-ivn-teal', 'border-t-amber-400']

export default function AgendaPage() {
  return (
    <>
      <InternalHero title="Agenda y eventos" breadcrumb="Únetenos" />

      {/* Cultos regulares */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ivn-text mb-4">Cultos regulares</h2>
            <div className="w-12 h-1 bg-ivn-purple rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cultosRegulares.map((c, i) => (
              <RevealSection key={c.dia} delay={i * 100}>
                <div className="bg-ivn-gray rounded-2xl p-6 border-l-4 border-ivn-purple hover:shadow-md transition-shadow duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Church size={22} className="text-ivn-purple" />
                    </div>
                    <div>
                      <p className="font-bold text-ivn-text">{c.dia}</p>
                      <p className="text-ivn-purple font-semibold text-sm flex items-center gap-1">
                        <Clock size={13} />
                        {c.hora}
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-xl text-ivn-text mb-2">{c.nombre}</h3>
                  <p className="text-ivn-muted text-sm leading-relaxed">{c.descripcion}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Próximos eventos */}
      <section className="py-20 bg-ivn-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ivn-text mb-4">Próximos eventos</h2>
            <div className="w-12 h-1 bg-ivn-purple rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proximosEventos.map((e, i) => (
              <RevealSection key={e.titulo} delay={i * 80}>
                <div className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full border-t-4 ${topBorders[i % topBorders.length]}`}>
                  <div className={`${e.color} px-6 py-4 flex items-center justify-between`}>
                    <span className="text-white/80 text-sm font-medium">{e.tipo}</span>
                    {/* Animated date badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium transition-all duration-300 group-hover:bg-white group-hover:text-ivn-purple-dark">
                      <Calendar size={13} />
                      {e.fecha}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-ivn-text mb-3">{e.titulo}</h3>
                    <p className="text-ivn-muted text-sm leading-relaxed mb-4">{e.descripcion}</p>
                    <div className="flex items-center gap-1.5 text-ivn-muted text-sm mb-4">
                      <MapPin size={14} className="text-ivn-purple flex-shrink-0" />
                      {e.lugar}
                    </div>
                    <button className="flex items-center gap-1.5 text-ivn-purple font-semibold text-sm hover:text-ivn-magenta transition-colors group/btn">
                      Más información
                      <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Banner primera visita */}
      <section className="py-20 bg-gradient-to-br from-ivn-purple-dark to-ivn-purple">
        <RevealSection>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Es tu primera vez? Te esperamos
            </h2>
            <p className="text-ivn-purple-light text-lg mb-8 max-w-xl mx-auto">
              No importa dónde estés en tu camino de fe — aquí hay un lugar para ti. Ven este domingo y
              experiméntalo por ti mismo.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-ivn-purple-dark px-8 py-4 rounded-full font-semibold hover:bg-ivn-purple-light transition-colors duration-200 shadow-lg group"
            >
              Escríbenos antes de venir
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </RevealSection>
      </section>
    </>
  )
}
