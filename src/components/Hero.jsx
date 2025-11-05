import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 md:flex-row md:gap-12 md:py-24">
        <div className="relative isolate w-full md:w-1/2">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Hey, I’m Your Name
          </motion.h1>
          <motion.p
            className="mt-4 max-w-md text-lg leading-relaxed text-gray-600 md:max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          >
            I’m a designer and front‑end developer focused on crafting delightful,
            accessible web experiences with clean design and subtle motion.
          </motion.p>
          <motion.div
            className="mt-8 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          >
            <a
              href="#work"
              className="rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800"
            >
              See my projects →
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 underline-offset-4 hover:underline"
            >
              Contact
            </a>
          </motion.div>
        </div>

        <div className="relative w-full md:w-1/2">
          <div className="h-[380px] w-full overflow-hidden rounded-xl border border-black/5 bg-white/60 shadow-sm md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
