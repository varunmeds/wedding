import Section from './Section'
import { venue } from '../content'

export default function Venue() {
  return (
    <Section id="venue" heading={venue.heading} floral corners>
      <div className="mb-12 text-center">
        <h3 className="font-serif text-3xl text-cream">{venue.name}</h3>
        <p className="mt-2 text-cream/85">{venue.address}</p>
        <a
          href={venue.mapsLink}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block rounded-full border border-cream/60 px-6 py-3 text-sm uppercase tracking-widest text-cream transition-colors hover:bg-cream hover:text-ink"
        >
          Open in Google Maps
        </a>
      </div>

      <div className="grid items-stretch gap-8 md:grid-cols-2">
        {venue.mapEmbed && (
          <div className="overflow-hidden rounded-2xl border border-phthalo/60 shadow-lg">
            <iframe
              title={`Map to ${venue.name}`}
              src={venue.mapEmbed}
              className="h-72 w-full border-0 md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        )}

        <div className="flex flex-col justify-center gap-6">
          {venue.travel.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-phthalo/60 bg-phthalo/40 p-8 shadow-lg backdrop-blur-sm"
            >
              <h4 className="font-serif text-xl text-blush">{item.title}</h4>
              <p className="mt-3 text-cream/90">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
