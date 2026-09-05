// Hand-drawn SVG motifs evoking Coorg: its coffee estates and the
// misty ridgelines of the Western Ghats. All use `currentColor`, so
// colour and opacity are controlled with Tailwind text-* / opacity-* classes.

// A single leaf, positioned and rotated by the caller.
function Leaf({ x, y, r, s = 1 }) {
  return (
    <path
      d="M0 0 Q10 -6 22 0 Q10 6 0 0 Z"
      fill="currentColor"
      transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}
    />
  )
}

// Small centred coffee sprig used under section headings.
export function HeadingOrnament({ className = '' }) {
  return (
    <svg
      viewBox="0 0 160 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 12 H62" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M98 12 H156" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      {/* centre stem + leaves */}
      <path d="M70 12 H90" stroke="currentColor" strokeWidth="1" />
      <path d="M73 12 Q68 7 63 5 Q69 10 71 12 Z" fill="currentColor" />
      <path d="M73 12 Q68 17 63 19 Q69 14 71 12 Z" fill="currentColor" />
      <path d="M87 12 Q92 7 97 5 Q91 10 89 12 Z" fill="currentColor" />
      <path d="M87 12 Q92 17 97 19 Q91 14 89 12 Z" fill="currentColor" />
      {/* coffee cherries */}
      <circle cx="80" cy="9" r="2.3" fill="currentColor" />
      <circle cx="80" cy="15" r="2.3" fill="currentColor" />
    </svg>
  )
}

// A trailing coffee branch for section corners.
export function CoffeeBranch({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 192 C 55 158, 88 116, 118 46"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Leaf x={40} y={168} r={-35} />
      <Leaf x={38} y={162} r={200} />
      <Leaf x={72} y={126} r={-45} />
      <Leaf x={70} y={120} r={190} />
      <Leaf x={100} y={82} r={-55} />
      <Leaf x={98} y={76} r={180} />
      {/* cherries near the tip */}
      <circle cx="122" cy="44" r="4" fill="currentColor" />
      <circle cx="114" cy="52" r="4" fill="currentColor" />
    </svg>
  )
}

// Layered misty ridgelines, a full-bleed hills silhouette.
export function Hills({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 140 L0 78 Q220 34 440 62 T860 58 Q1080 36 1280 66 T1440 60 L1440 140 Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M0 140 L0 98 Q260 60 520 84 T1000 82 Q1220 62 1440 88 L1440 140 Z"
        fill="currentColor"
      />
    </svg>
  )
}
