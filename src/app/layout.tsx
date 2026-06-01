import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PageTransition } from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Iglesia Vino Nuevo — Una casa para todos',
  description:
    'Iglesia Vino Nuevo (IVN) en Riohacha, La Guajira. Una comunidad cristiana acogedora. "El vino nuevo en odres nuevos se ha de echar."',
  keywords: 'iglesia, Riohacha, La Guajira, cristiana, Vino Nuevo, IVN',
  openGraph: {
    title: 'Iglesia Vino Nuevo',
    description: 'Una casa para todos — Riohacha, La Guajira',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Cormorant Garamond (display) + DM Sans (body) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16 md:pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}
