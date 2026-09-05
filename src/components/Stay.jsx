import { useCallback, useEffect, useRef, useState } from 'react'
import Section from './Section'
import { stay } from '../content'

// Arrow controls for the card rail. Touch and trackpad users can simply
// swipe, but a plain mouse wheel only scrolls vertically; without these a
// desktop visitor is left dragging a 6px scrollbar. Hidden below md, where
// swiping is the natural gesture and the "Swipe for more" hint shows instead.
function RailButton({ direction, onClick, disabled }) {
  const isLeft = direction === 'left'
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isLeft ? 'Show previous places' : 'Show more places'}
      className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/30 text-lg text-cream/90 transition-colors hover:border-cream/70 hover:text-cream focus-visible:ring-2 focus-visible:ring-cream/70 disabled:pointer-events-none disabled:opacity-20 md:flex"
    >
      <span aria-hidden="true">{isLeft ? '←' : '→'}</span>
    </button>
  )
}

export default function Stay() {
  const options = stay?.options ?? []
  const railRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  // Disable whichever arrow has nowhere left to go.
  const syncEdges = useCallback(() => {
    const rail = railRef.current
    if (!rail) return
    setAtStart(rail.scrollLeft <= 1)
    setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 1)
  }, [])

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    syncEdges()
    rail.addEventListener('scroll', syncEdges, { passive: true })
    window.addEventListener('resize', syncEdges)
    return () => {
      rail.removeEventListener('scroll', syncEdges)
      window.removeEventListener('resize', syncEdges)
    }
  }, [syncEdges])

  // Scroll by one card (the first <li>'s width plus the rail gap) so the
  // snap points line up and each click reveals exactly the next place.
  const scrollByCard = (dir) => {
    const rail = railRef.current
    if (!rail) return
    const card = rail.querySelector('li')
    const gap = parseFloat(getComputedStyle(rail).columnGap) || 0
    const step = card ? card.offsetWidth + gap : rail.clientWidth * 0.8
    rail.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  if (!options.length) return null

  return (
    <Section id="stay" heading={stay.heading} floral corners>
      {stay.intro && (
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed text-cream/90">
          {stay.intro}
        </p>
      )}

      {/* A horizontal rail rather than a grid: there are more places than
          fit across the page, and the order (nearest first) carries meaning.
          scroll-px-6 keeps the snap points inside the padding; without it the
          first card snaps flush to the container edge on load. */}
      <div className="mb-4 hidden items-center justify-end gap-3 md:flex">
        <RailButton direction="left" onClick={() => scrollByCard(-1)} disabled={atStart} />
        <RailButton direction="right" onClick={() => scrollByCard(1)} disabled={atEnd} />
      </div>

      <ul
        ref={railRef}
        className="stay-rail -mx-6 flex snap-x snap-mandatory list-none gap-6 overflow-x-auto scroll-px-6 px-6 pb-6"
        aria-label="Places to stay near the venue, nearest first"
      >
        {options.map((option, i) => (
          <li key={i} className="w-72 shrink-0 snap-start sm:w-80">
          <a
            href={option.link}
            target="_blank"
            rel="noreferrer"
            className="group flex h-full flex-col rounded-2xl border border-phthalo/60 bg-phthalo/40 p-7 shadow-lg backdrop-blur-sm transition-colors hover:border-leaf/70 hover:bg-phthalo/60 focus-visible:ring-2 focus-visible:ring-cream/70"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-serif text-2xl leading-tight text-blush">
                {option.name}
              </h3>
              {option.rating && (
                <span className="mt-1 shrink-0 rounded-full border border-clay/50 px-2.5 py-0.5 text-xs tracking-wide text-clay">
                  {option.rating} ★
                </span>
              )}
            </div>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/70">
              {option.area}
              {option.drive && ` · ${option.drive}`}
            </p>

            <div className="my-4 h-px w-10 bg-cream/30" />

            <p className="flex-1 leading-relaxed text-cream/90">
              {option.detail}
            </p>

            {option.ratingNote && (
              <p className="mt-4 text-xs italic text-cream/65">
                {option.ratingNote}
              </p>
            )}

            <span className="mt-5 text-xs uppercase tracking-widest text-clay transition-colors group-hover:text-blush">
              View on maps →
            </span>
          </a>
          </li>
        ))}
      </ul>

      <p className="mt-2 text-center text-xs uppercase tracking-[0.2em] text-cream/55 md:hidden">
        Swipe for more →
      </p>

      {stay.note && (
        <p className="mx-auto mt-10 max-w-xl text-center text-sm italic leading-relaxed text-cream/75">
          {stay.note}
        </p>
      )}
    </Section>
  )
}
