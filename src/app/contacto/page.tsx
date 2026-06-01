'use client'

import { useState } from 'react'
import { MapPin, Clock, Instagram, Youtube, MessageCircle, Send, CheckCircle, ChevronRight } from 'lucide-react'
import Link from 'next/link'

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

export default function ContactoPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <InternalHero title="Visítanos" breadcrumb="Contáctanos" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Formulario */}
            <div>
              <h2 className="font-display text-2xl font-bold text-ivn-text mb-2">Escríbenos</h2>
              <p className="text-ivn-muted mb-8">
                ¿Tienes preguntas, necesitas oración o quieres conocernos? Con gusto te responderemos.
              </p>

              {sent ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="font-display font-bold text-xl text-green-700 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-green-600">
                    Gracias por escribirnos. Te responderemos pronto. ¡Dios te bendiga!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold text-ivn-text mb-1.5">
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      placeholder="Tu nombre"
                      className="input-ivn"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-ivn-text mb-1.5">
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tu@correo.com"
                      className="input-ivn"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-semibold text-ivn-text mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={5}
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full border border-ivn-gray rounded-xl px-4 py-3 text-ivn-text placeholder:text-ivn-muted focus:outline-none focus:ring-2 focus:ring-ivn-purple focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-ivn-purple text-white px-8 py-4 rounded-full font-semibold hover:bg-ivn-purple-dark transition-colors duration-200 shadow-md w-full"
                  >
                    <Send size={18} />
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>

            {/* Info de contacto */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-ivn-text mb-2">Encuéntranos</h2>
                <p className="text-ivn-muted mb-6">
                  Ven a visitarnos. Nuestras puertas siempre están abiertas.
                </p>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-ivn-purple-light rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-ivn-purple" />
                    </div>
                    <div>
                      <p className="font-semibold text-ivn-text">Dirección</p>
                      <p className="text-ivn-muted text-sm">K5 36-96, Barrio Buenos Aires</p>
                      <p className="text-ivn-muted text-sm">Riohacha, La Guajira, Colombia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-ivn-purple-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-ivn-purple" />
                    </div>
                    <div>
                      <p className="font-semibold text-ivn-text mb-1">Horarios</p>
                      <ul className="text-ivn-muted text-sm space-y-1">
                        <li><strong className="text-ivn-text">Domingo</strong> 9:00 AM — Culto General</li>
                        <li><strong className="text-ivn-text">Miércoles</strong> 7:00 PM — Oración</li>
                        <li><strong className="text-ivn-text">Viernes</strong> 7:00 PM — Jóvenes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href="https://instagram.com/IVN_Riohacha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    <Instagram size={16} />
                    @IVN_Riohacha
                  </a>
                  <a
                    href="https://wa.me/573000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Mini mapa */}
              <div className="rounded-2xl overflow-hidden shadow-md h-56">
                <iframe
                  src="https://maps.google.com/maps?q=K5+36-96+Buenos+Aires+Riohacha+La+Guajira&output=embed&z=15"
                  width="100%"
                  height="100%"
                  className="w-full h-full block"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación IVN"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa full-width */}
      <div className="h-64 sm:h-80">
        <iframe
          src="https://maps.google.com/maps?q=K5+36-96+Buenos+Aires+Riohacha+La+Guajira&output=embed&z=14"
          width="100%"
          height="100%"
          className="w-full h-full block"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa Iglesia Vino Nuevo"
        />
      </div>
    </>
  )
}
