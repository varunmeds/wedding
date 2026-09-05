import { useEffect, useState } from 'react'
import { nav, couple } from '../content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const monogram = `${couple.partnerOne[0]} & ${couple.partnerTwo[0]}`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-phthalo/90 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className={`font-serif text-2xl tracking-wide transition-colors ${
            scrolled ? 'text-cream' : 'text-cream drop-shadow'
          }`}
        >
          {monogram}
        </a>

        <ul className="hidden gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-clay ${
                  scrolled ? 'text-cream/90' : 'text-cream drop-shadow'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={`-mr-3 min-h-11 px-3 text-sm uppercase tracking-widest md:hidden ${
            scrolled ? 'text-cream' : 'text-cream drop-shadow'
          }`}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="flex flex-col bg-phthalo/95 px-6 pb-4 backdrop-blur md:hidden"
        >
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm uppercase tracking-widest text-cream/90 hover:text-clay"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
