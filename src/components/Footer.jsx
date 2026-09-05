import { couple } from '../content'
import { Hills } from './Decor'

export default function Footer() {
  return (
    <footer className="relative bg-phthalo px-6 pb-16 pt-24 text-center text-cream">
      {/* Misty Coorg ridgelines rising into the footer */}
      <Hills className="absolute inset-x-0 top-0 h-24 w-full -translate-y-full text-phthalo" />

      <p className="font-serif text-4xl">
        {couple.partnerOne[0]} &amp; {couple.partnerTwo[0]}
      </p>
      <p className="mt-4 text-sm uppercase tracking-[0.2em] text-cream/85">
        {couple.date}
      </p>
      <p className="mt-8 text-xs uppercase tracking-widest text-cream/70">
        With love, from the hills of Coorg
      </p>
    </footer>
  )
}
