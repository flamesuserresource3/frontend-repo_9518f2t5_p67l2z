import { useState } from 'react'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="font-semibold tracking-tight text-gray-900">
          <span className="rounded bg-gray-900 px-2 py-1 text-white">Your</span>{' '}
          <span className="ml-1">Name</span>
        </a>
        <button
          className="md:hidden rounded-md border border-gray-200 px-3 py-2 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="md:hidden border-t border-black/5 px-4 py-3 space-y-2 bg-white">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
