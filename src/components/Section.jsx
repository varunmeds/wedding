import { useReveal } from "../useReveal";
import { assetUrl } from '../assetUrl'
import { HeadingOrnament, CoffeeBranch } from "./Decor";

// Shared section wrapper: consistent spacing, centered heading, and
// a scroll-reveal animation. Pass `floral` for the dark hibiscus
// backdrop (matching the hero) with cream text, and `corners` to add
// faint Coorg coffee-branch accents in opposite corners. `wide` relaxes
// the content width for sections that lay cards out in a row.
export default function Section({
  id,
  heading,
  children,
  className = "",
  floral = false,
  corners = false,
  wide = false,
}) {
  const ref = useReveal();

  return (
    <section
      id={id}
      className={`relative overflow-hidden px-6 py-24 ${className}`}
    >
      {floral && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('${assetUrl('/invites/hibiscus.jpeg')}')` }}
          />
          <div className="absolute inset-0 bg-ink/80" />
        </>
      )}

      {corners && (
        <>
          <CoffeeBranch
            className={`pointer-events-none absolute -left-6 -top-6 h-40 w-40 -scale-x-100 ${floral ? "text-leaf/25" : "text-phthalo/35"}`}
          />
          <CoffeeBranch
            className={`pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 -scale-y-100 ${floral ? "text-leaf/25" : "text-phthalo/35"}`}
          />
        </>
      )}

      <div
        ref={ref}
        className={`reveal relative mx-auto ${wide ? "max-w-7xl" : "max-w-5xl"}`}
      >
        {heading && (
          <div className="mb-14 text-center">
            <h2
              className={`font-serif text-4xl sm:text-5xl ${
                floral ? "text-cream" : "text-terracotta"
              }`}
            >
              {heading}
            </h2>
            <HeadingOrnament
              className={`mx-auto mt-4 h-6 w-40 ${
                floral ? "text-cream/70" : "text-clay/75"
              }`}
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
