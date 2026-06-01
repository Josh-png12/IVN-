import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-ivn-purple-dark to-ivn-purple px-4 text-center">
      <p className="text-white/20 text-9xl font-bold font-display mb-2 leading-none">404</p>
      <h1 className="font-display text-4xl font-bold text-white mb-3">
        Página no encontrada
      </h1>
      <p className="text-white/70 mb-8 font-body max-w-sm">
        Esta página no existe, pero tu lugar en nuestra comunidad sí.
      </p>
      <Link
        href="/"
        className="bg-white text-ivn-purple-dark font-medium px-8 py-3 rounded-full hover:bg-ivn-purple-light transition-colors duration-200 shadow-lg"
      >
        Volver al inicio
      </Link>
    </main>
  )
}
