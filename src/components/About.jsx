import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <motion.h2
        className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h2>
      <motion.p
        className="mt-4 text-lg leading-relaxed text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        I design and build thoughtful digital products with a focus on clarity,
        performance, and accessibility. I enjoy collaborating with teams to turn
        complex problems into simple, beautiful interfaces.
      </motion.p>

      <div id="contact" className="mt-8">
        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md border border-black/5 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-black/5 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-black/5 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
