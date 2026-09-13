import { useState } from 'react'
import { assetUrl } from '../assetUrl'

// Renders an illustration, but disappears cleanly if the file isn't
// present yet, so empty image slots never show a broken-image icon.
export default function Illustration({ src, alt, className = '' }) {
  const [ok, setOk] = useState(true)
  if (!src || !ok) return null

  return (
    <img
      src={assetUrl(src)}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setOk(false)}
    />
  )
}
