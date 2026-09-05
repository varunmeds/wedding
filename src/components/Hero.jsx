import { couple } from '../content'
import { assetUrl } from '../assetUrl'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${assetUrl('/invites/hibiscus.jpeg')}')` }}
      />
      <div className="absolute inset-0 bg-ink/45" />

      {/* Content */}
      <div className="relative z-10 px-6 text-center text-cream">
        <h1 className="font-serif text-5xl leading-tight drop-shadow-sm sm:text-7xl md:text-8xl">
          <span className="block">{couple.partnerOne}</span>
          <span className="my-2 block text-4xl italic font-normal opacity-90 sm:text-5xl md:text-6xl">
            &amp;
          </span>
          <span className="block">{couple.partnerTwo}</span>
        </h1>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] opacity-90">
          {couple.tagline}
        </p>
        <div className="mx-auto my-8 h-px w-24 bg-cream/60" />
        <p className="font-serif text-xl italic sm:text-2xl">{couple.date}</p>
        <p className="mt-2 text-sm uppercase tracking-[0.2em] opacity-90">
          {couple.location}
        </p>
      </div>

      <a
        href="#ceremonies"
        className="absolute bottom-6 left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center animate-bounce text-cream/90"
        aria-label="Scroll down"
      >
        ↓
      </a>
    </section>
  )
}
