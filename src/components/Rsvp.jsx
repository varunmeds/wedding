import Section from './Section'
import { rsvp } from '../content'

// The one deliberately light section on the page; it lifts the RSVP
// out of the run of dark, hibiscus-backed sections around it.
export default function Rsvp() {
  if (!rsvp) return null

  return (
    <Section id="rsvp" heading={rsvp.heading} corners className="bg-blush/40">
      <div className="mx-auto max-w-2xl text-center">
        {rsvp.intro && (
          <p className="text-lg leading-relaxed text-ink/90">{rsvp.intro}</p>
        )}

        {rsvp.formUrl ? (
          <a
            href={rsvp.formUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-full bg-phthalo px-10 py-4 text-sm uppercase tracking-widest text-cream shadow-lg transition-colors hover:bg-leaf"
          >
            {rsvp.buttonLabel || 'RSVP'}
          </a>
        ) : (
          rsvp.fallback && (
            <p className="mx-auto mt-10 max-w-xl rounded-2xl border border-phthalo/30 bg-cream/70 px-8 py-6 leading-relaxed text-ink/90">
              {rsvp.fallback}
            </p>
          )
        )}

        {rsvp.deadline && (
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-phthalo">
            {rsvp.deadline}
          </p>
        )}
      </div>
    </Section>
  )
}
