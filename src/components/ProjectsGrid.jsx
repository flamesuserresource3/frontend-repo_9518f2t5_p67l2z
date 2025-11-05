import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Interactive Dashboard',
    desc: 'Data-rich dashboard with charts, filters, and real-time interactions.',
    image:
      'https://images.unsplash.com/photo-1551281044-8d8d0d8d0d8d?q=80&w=1200&auto=format&fit=crop',
    href: '#',
  },
  {
    title: 'E-commerce Storefront',
    desc: 'Modern storefront with product discovery, carts, and smooth checkout.',
    image:
      'https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop',
    href: '#',
  },
  {
    title: 'Portfolio Website',
    desc: 'Clean personal site with motion, case studies, and contact integrations.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    href: '#',
  },
]

export default function ProjectsGrid() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mb-8 flex items-end justify-between md:mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Selected Work
        </h2>
        <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">
          Get in touch →
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            className="group relative overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
