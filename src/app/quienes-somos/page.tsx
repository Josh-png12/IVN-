import { Eye, Heart, BookOpen, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { RevealSection } from '@/components/ui/RevealSection'

function InternalHero({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  return (
    <section className="pt-20 pb-12 md:pt-28 md:pb-16 bg-gradient-to-br from-ivn-purple-dark to-ivn-purple relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4 font-body text-white/50 text-sm">
          <Link href="/" className="hover:text-white/80 transition-colors">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white/80">{title}</span>
        </div>
        <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-tight">
          {title}
        </h1>
        <p className="font-body text-white/70 mt-4 text-base sm:text-lg max-w-xl mx-auto">
          {breadcrumb}
        </p>
      </div>
    </section>
  )
}

const hitos = [
  { year: '2010', title: 'Los primeros pasos', desc: 'Un pequeño grupo de familias se reúne en una sala para orar y creer por una iglesia que alcanzara a Riohacha.' },
  { year: '2013', title: 'Primera sede', desc: 'IVN abre sus puertas en el barrio Buenos Aires, con más de 80 personas en su primer culto oficial.' },
  { year: '2018', title: 'Expansión ministerial', desc: 'Nacen los ministerios de Jóvenes, Niños y Alabanza, dando forma a la comunidad multigeneracional que somos hoy.' },
  { year: '2023', title: 'Nuevos odres', desc: 'Con renovada visión, IVN lanza su plataforma digital y reafirma su compromiso: ser una casa para todos en La Guajira.' },
]

const lideres = [
  { nombre: 'Pastor Juan García',  cargo: 'Pastor Principal',  inicial: 'JG' },
  { nombre: 'Pastora María García', cargo: 'Co-pastora',        inicial: 'MG' },
  { nombre: 'Líder Carlos Pérez',  cargo: 'Líder de Jóvenes',  inicial: 'CP' },
]

export default function QuienesSomosPage() {
  return (
    <>
      <InternalHero title="Quiénes somos" breadcrumb="Conócenos" />

      {/* Visión y Misión */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ivn-text mb-4">Visión y Misión</h2>
            <div className="w-12 h-1 bg-ivn-purple rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealSection direction="left" delay={0}>
              <div className="bg-ivn-purple-light rounded-2xl p-8 border border-ivn-purple/10 h-full">
                <div className="w-14 h-14 bg-ivn-purple rounded-xl flex items-center justify-center mb-6">
                  <Eye size={28} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl text-ivn-purple-dark mb-4">Nuestra Visión</h3>
                <p className="text-ivn-text leading-relaxed">
                  Ser una iglesia que transforma comunidades a través del poder del Evangelio, levantando
                  discípulos comprometidos con vivir el reino de Dios en cada área de sus vidas, desde
                  Riohacha hasta los confines de la Tierra.
                </p>
              </div>
            </RevealSection>
            <RevealSection direction="right" delay={100}>
              <div className="bg-white rounded-2xl p-8 border border-ivn-gray shadow-sm h-full">
                <div className="w-14 h-14 bg-ivn-magenta rounded-xl flex items-center justify-center mb-6">
                  <Heart size={28} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl text-ivn-text mb-4">Nuestra Misión</h3>
                <p className="text-ivn-text leading-relaxed">
                  Alcanzar a toda persona con el amor de Cristo, formarla en la fe a través de la Palabra
                  y el compañerismo, y enviarla a servir a su familia, vecinos y ciudad con el carácter
                  del Señor Jesús.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Historia — línea de tiempo */}
      <section className="py-20 bg-ivn-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ivn-text mb-4">Nuestra historia</h2>
            <div className="w-12 h-1 bg-ivn-purple rounded-full mx-auto" />
          </div>
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-ivn-purple/20 -translate-x-1/2" />

            <div className="flex flex-col gap-12">
              {hitos.map((h, i) => (
                <div key={h.year} className={`flex gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content card — wrapped in RevealSection */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-16 md:pl-0`}>
                    <RevealSection direction="left" delay={i * 150}>
                      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <span className="inline-block bg-ivn-purple text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                          {h.year}
                        </span>
                        <h3 className="font-display font-bold text-xl text-ivn-text mb-2">{h.title}</h3>
                        <p className="text-ivn-muted leading-relaxed">{h.desc}</p>
                      </div>
                    </RevealSection>
                  </div>

                  {/* Pulsing dot — absolute, NOT inside RevealSection to preserve positioning */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-8">
                    <div className="relative w-4 h-4">
                      <div className="w-4 h-4 rounded-full bg-ivn-purple border-2 border-white shadow-md" />
                      <div className="absolute inset-0 rounded-full bg-ivn-purple opacity-40 animate-ping" />
                    </div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Liderazgo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ivn-text mb-4">Nuestro liderazgo</h2>
            <div className="w-12 h-1 bg-ivn-purple rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {lideres.map((l, i) => (
              <RevealSection key={l.nombre} delay={i * 100}>
                <div className="bg-ivn-gray rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-ivn-purple to-ivn-magenta rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-display font-bold text-white text-2xl">{l.inicial}</span>
                  </div>
                  <h3 className="font-display font-bold text-ivn-text text-lg">{l.nombre}</h3>
                  <p className="text-ivn-purple text-sm font-semibold mt-1">{l.cargo}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Versículo de identidad */}
      <RevealSection>
        <section className="py-24 bg-gradient-to-br from-ivn-purple-dark via-ivn-purple to-purple-600 relative overflow-hidden text-center px-4">
          {/* Orbes decorativos */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute w-80 h-80 rounded-full bg-ivn-magenta/20 blur-3xl -top-20 -left-20"
              style={{ animation: 'float1 8s ease-in-out infinite' }}
            />
            <div
              className="absolute w-64 h-64 rounded-full bg-ivn-fuchsia/15 blur-3xl -bottom-10 -right-10"
              style={{ animation: 'float2 10s ease-in-out infinite' }}
            />
          </div>
          <div className="absolute inset-0 pattern-dots opacity-20" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
              <BookOpen size={24} className="text-white" />
            </div>
            <blockquote className="verse text-white max-w-2xl mx-auto text-3xl md:text-4xl mb-6">
              "El vino nuevo en odres nuevos se ha de echar"
            </blockquote>
            <cite className="block font-body text-white/60 text-sm not-italic">— Marcos 2:22</cite>
          </div>
        </section>
      </RevealSection>
    </>
  )
}
