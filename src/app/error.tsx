'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-ivn-purple-dark to-ivn-purple px-4 text-center">
      <AlertTriangle className="w-16 h-16 text-amber-400 mb-6" />
      <h1 className="font-display text-4xl font-bold text-white mb-3">
        Algo salió mal
      </h1>
      <p className="text-white/70 mb-8 max-w-md font-body">
        Ocurrió un error inesperado. Puedes intentar de nuevo o volver al inicio.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={reset}
          className="bg-white text-ivn-purple font-medium px-6 py-3 rounded-full hover:bg-purple-50 transition-colors duration-200"
        >
          Intentar de nuevo
        </button>
        <Link
          href="/"
          className="bg-white/10 border border-white/30 text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-colors duration-200"
        >
          Ir al inicio
        </Link>
      </div>
    </main>
  )
}
