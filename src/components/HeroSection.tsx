'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Radio, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-ivn-purple-dark via-ivn-purple to-[#6D28D9]">
      {/* Dot pattern */}
      <div className="absolute inset-0 pattern-dots opacity-60" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: 500, height: 500,
            background: '#A855F7',
            top: '-100px', left: '-100px',
            animation: 'float1 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 400, height: 400,
            background: '#7C3AED',
            bottom: '-80px', right: '-80px',
            opacity: 0.15,
            animation: 'float2 10s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full opacity-10 blur-2xl"
          style={{
            width: 200, height: 200,
            background: '#C084FC',
            top: '40%', left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'float3 6s ease-in-out infinite',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 py-24 max-w-4xl mx-auto">
        {/* Logo with shimmer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-6 md:mb-8 rounded-full"
          style={{ animation: 'shimmer 3s ease-in-out infinite' }}
        >
          <Image
            src="/logo.png"
            alt="Iglesia Vino Nuevo"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Una casa para todos
        </motion.h1>

        {/* Verse */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="font-display text-base sm:text-lg md:text-xl text-ivn-purple-light italic mb-10 md:mb-12 max-w-xs sm:max-w-md md:max-w-xl mx-auto leading-relaxed"
        >
          "El vino nuevo en odres nuevos se ha de echar"
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none sm:w-auto"
        >
          <Link
            href="/quienes-somos"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-ivn-purple-dark transition-all duration-200 text-base sm:text-lg"
          >
            Conócenos
            <ChevronRight size={20} />
          </Link>
          <Link
            href="/en-vivo"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-ivn-magenta text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:brightness-110 transition-all duration-200 shadow-lg shadow-ivn-magenta/30 text-base sm:text-lg"
          >
            <Radio size={20} />
            Transmisión en vivo
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1"
            style={{ animation: 'bounce-scroll 1.5s ease-in-out infinite' }}
          >
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
          <span className="text-white/50 text-xs tracking-widest uppercase">Desliza</span>
        </motion.div>
      </div>
    </section>
  )
}
