import { MapPin, Clock, Instagram, Youtube, MessageCircle, Navigation } from 'lucide-react'

export default function MapaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map */}
          <div className="w-full rounded-2xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-video lg:aspect-square">
            <iframe
              src="https://maps.google.com/maps?q=K5+36-96+Buenos+Aires+Riohacha+La+Guajira&output=embed&z=15"
              width="100%"
              height="100%"
              className="w-full h-full block"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Iglesia Vino Nuevo"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ivn-text mb-4">
                Visítanos
              </h2>
              <div className="w-12 h-1 bg-ivn-purple rounded-full mb-6" />
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-ivn-purple-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={18} className="text-ivn-purple" />
              </div>
              <div>
                <p className="font-semibold text-ivn-text">Dirección</p>
                <p className="text-ivn-muted">K5 36-96, Barrio Buenos Aires</p>
                <p className="text-ivn-muted">Riohacha, La Guajira, Colombia</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-ivn-purple-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={18} className="text-ivn-purple" />
              </div>
              <div>
                <p className="font-semibold text-ivn-text mb-1">Horarios de culto</p>
                <ul className="text-ivn-muted text-sm space-y-1">
                  <li><strong className="text-ivn-text">Domingo</strong> 9:00 AM — Culto General</li>
                  <li><strong className="text-ivn-text">Miércoles</strong> 7:00 PM — Oración</li>
                  <li><strong className="text-ivn-text">Viernes</strong> 7:00 PM — Ministerio de Jóvenes</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              <a
                href="https://instagram.com/IVN_Riohacha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-md"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-red-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-md"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-green-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-md"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>

            <a
              href="https://maps.google.com/?q=K5+36-96+Buenos+Aires+Riohacha+La+Guajira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ivn-purple text-white px-6 py-3 rounded-full font-semibold hover:bg-ivn-purple-dark transition-colors duration-200 shadow-md w-fit"
            >
              <Navigation size={18} />
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
