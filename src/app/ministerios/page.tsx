import { Music, Zap, Star, Heart, Users, Clock } from 'lucide-react'

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

function ImagePlaceholder({ label, gradient }: { label: string; gradient: string }) {
  return (
    <div className={`aspect-[4/3] ${gradient} rounded-2xl flex flex-col items-center justify-center gap-3 border border-white/10`}>
      <Users size={40} className="text-white/60" />
      <p className="text-white/60 text-sm font-medium">{label}</p>
    </div>
  )
}

const ministeriosData = [
  {
    nombre: 'Ministerio de Jóvenes',
    subtitulo: 'Vino Nuevo Youth',
    icono: <Zap size={32} className="text-ivn-magenta" />,
    descripcion:
      'Vino Nuevo Youth es el espacio donde los jóvenes de Riohacha se reúnen para adorar, crecer en la Palabra y construir amistades genuinas. Creemos que esta generación tiene un propósito poderoso en las manos de Dios.',
    horario: 'Viernes 7:00 PM',
    gradient: 'bg-gradient-to-br from-ivn-magenta to-purple-700',
    label: 'Ministerio de Jóvenes',
    reverse: false,
  },
  {
    nombre: 'Ministerio de Niños',
    subtitulo: 'Semillitas IVN',
    icono: <Star size={32} className="text-ivn-gold" />,
    descripcion:
      'Semillitas IVN planta en los corazones de los más pequeños el amor a Dios y a los demás. Con dinámicas, historias bíblicas y manualidades, hacemos que la fe sea una aventura para cada niño.',
    horario: 'Domingo 9:00 AM (en paralelo con el culto)',
    gradient: 'bg-gradient-to-br from-yellow-400 to-orange-400',
    label: 'Ministerio de Niños',
    reverse: true,
  },
  {
    nombre: 'Ministerio de Alabanza',
    subtitulo: 'Equipo de Adoración',
    icono: <Music size={32} className="text-ivn-purple" />,
    descripcion:
      'Nuestro equipo de música cree que la adoración es la puerta al corazón de Dios. Con instrumentos, voces y pasión, guiamos a la congregación a encontrarse con el Señor en cada servicio.',
    horario: 'Domingo 9:00 AM y eventos especiales',
    gradient: 'bg-gradient-to-br from-ivn-purple to-ivn-purple-dark',
    label: 'Ministerio de Alabanza',
    reverse: false,
  },
  {
    nombre: 'Ministerio de Damas',
    subtitulo: 'Mujeres IVN',
    icono: <Heart size={32} className="text-pink-500" />,
    descripcion:
      'Mujeres IVN es una comunidad que fortalece, anima y equipa a cada mujer para cumplir su llamado. A través de encuentros, estudios bíblicos y retiros, construimos sororidad en la fe.',
    horario: 'Sábados en días de encuentro',
    gradient: 'bg-gradient-to-br from-pink-400 to-rose-500',
    label: 'Ministerio de Damas',
    reverse: true,
  },
]

export default function MinisteriosPage() {
  return (
    <>
      <InternalHero title="Ministerios" breadcrumb="Sirve y crece" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-ivn-muted text-lg max-w-2xl mx-auto">
              Cada ministerio es una familia dentro de la gran familia IVN. Encuentra el tuyo y descubre
              cómo Dios quiere usarte.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {ministeriosData.map((m) => (
              <div
                key={m.nombre}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${m.reverse ? 'lg:flex-row-reverse' : ''}`}
              >
                {m.reverse ? (
                  <>
                    <div className="order-2 lg:order-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-ivn-purple-light rounded-xl flex items-center justify-center">
                          {m.icono}
                        </div>
                        <div>
                          <h2 className="font-display font-bold text-2xl text-ivn-text">{m.nombre}</h2>
                          <p className="text-ivn-muted text-sm">{m.subtitulo}</p>
                        </div>
                      </div>
                      <p className="text-ivn-muted leading-relaxed text-lg mb-6">{m.descripcion}</p>
                      <div className="flex items-center gap-2 text-ivn-purple font-semibold text-sm">
                        <Clock size={16} />
                        {m.horario}
                      </div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <ImagePlaceholder label={m.label} gradient={m.gradient} />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <ImagePlaceholder label={m.label} gradient={m.gradient} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-ivn-purple-light rounded-xl flex items-center justify-center">
                          {m.icono}
                        </div>
                        <div>
                          <h2 className="font-display font-bold text-2xl text-ivn-text">{m.nombre}</h2>
                          <p className="text-ivn-muted text-sm">{m.subtitulo}</p>
                        </div>
                      </div>
                      <p className="text-ivn-muted leading-relaxed text-lg mb-6">{m.descripcion}</p>
                      <div className="flex items-center gap-2 text-ivn-purple font-semibold text-sm">
                        <Clock size={16} />
                        {m.horario}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA unirse */}
      <section className="py-20 bg-ivn-purple-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ivn-purple-dark mb-4">
            ¿Quieres ser parte de un ministerio?
          </h2>
          <p className="text-ivn-muted text-lg mb-8">
            Habla con nosotros, visítanos o escríbenos. Hay un lugar para ti en la familia IVN.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 bg-ivn-purple text-white px-8 py-4 rounded-full font-semibold hover:bg-ivn-purple-dark transition-colors duration-200 shadow-lg"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </>
  )
}
