import Section from './Section'
import { gallery } from '../content'

// Renders nothing until photos are listed in `gallery.images`.
export default function Gallery() {
  const images = gallery?.images ?? []
  if (!images.length) return null

  return (
    <Section id="gallery" heading={gallery.heading} floral corners>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, i) => (
          <figure
            key={i}
            className="overflow-hidden rounded-2xl border border-cream/15 shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt || ''}
              loading="lazy"
              className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </Section>
  )
}
