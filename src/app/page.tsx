import HeroSection from '@/components/HeroSection'
import HorariosBar from '@/components/HorariosBar'
import MinisteriosGrid from '@/components/MinisteriosGrid'
import SermonesSection from '@/components/SermonesSection'
import MapaSection from '@/components/MapaSection'
import { RevealSection } from '@/components/ui/RevealSection'
import { Church, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HorariosBar />

      {/* Quiénes somos preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Texto — primero en DOM, segundo en móvil */}
            <RevealSection direction="left" className="order-2 md:order-1">
              <div>
                <span className="section-tag mb-4 block">Nuestra comunidad</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ivn-text mb-6 leading-tight">
                  Somos una familia que camina juntos en la fe
                </h2>
                <p className="text-ivn-muted text-lg leading-relaxed mb-6">
                  Iglesia Vino Nuevo nació con un sueño sencillo: ser un lugar donde cada persona se sienta
                  recibida, amada y libre para encontrarse con Dios. En el corazón de Riohacha, construimos
                  comunidad con música, oración y servicio, creyendo que el amor transforma vidas.
                </p>
                <p className="text-ivn-muted leading-relaxed mb-8">
                  Aquí no importa de dónde vengas ni cuál sea tu historia: hay un lugar para ti. Somos un
                  pueblo que cree en la renovación, en el vino nuevo que Dios derrama sobre odres dispuestos
                  a ser transformados.
                </p>
                <Link
                  href="/quienes-somos"
                  className="inline-flex items-center gap-2 text-ivn-purple font-semibold hover:text-ivn-magenta transition-colors duration-200 group"
                >
                  Conoce nuestra historia
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </RevealSection>

            {/* Imagen — primera en móvil */}
            <RevealSection direction="right" className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-ivn-purple-light to-ivn-purple-glow rounded-2xl flex flex-col items-center justify-center gap-4 border border-ivn-purple/20">
                  <div className="w-20 h-20 bg-ivn-purple/10 rounded-full flex items-center justify-center">
                    <Church size={40} className="text-ivn-purple" />
                  </div>
                  <p className="text-ivn-purple/60 font-medium">Foto de la iglesia</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ivn-magenta/10 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-ivn-gold/10 rounded-xl -z-10" />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <MinisteriosGrid />
      <SermonesSection />

      {/* Mapa con scroll reveal */}
      <RevealSection>
        <MapaSection />
      </RevealSection>
    </>
  )
}
