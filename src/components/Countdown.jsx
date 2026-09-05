import { useEffect, useState } from 'react'
import { assetUrl } from '../assetUrl'
import { couple } from '../content'
import { HeadingOrnament } from './Decor'

const target = new Date(couple.dateISO).getTime()

function getRemaining() {
  const diff = target - Date.now()
  if (isNaN(target) || diff <= 0) return null

  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  return { days, hours, minutes, seconds }
}

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-serif text-4xl text-cream sm:text-6xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/75">
        {label}
      </span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getRemaining)

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative overflow-hidden px-6 py-20 text-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${assetUrl('/invites/hibiscus.jpeg')}')` }}
      />
      <div className="absolute inset-0 bg-phthalo/85" />

      <div className="relative">
        {time ? (
          <>
            <p className="text-sm uppercase tracking-[0.3em] text-blush">
              Counting down to our day
            </p>
            <HeadingOrnament className="mx-auto mb-8 mt-4 h-6 w-40 text-cream/60" />
            {/* The ticking digits are decorative; announcing them every
                second would flood a screen reader, so the readable form
                is a single sentence beside them. */}
            <p className="sr-only">
              {time.days} days until the wedding on {couple.date}.
            </p>
            <div
              aria-hidden="true"
              className="mx-auto flex max-w-lg justify-center gap-6 sm:gap-12"
            >
              <Unit value={time.days} label="Days" />
              <Unit value={time.hours} label="Hours" />
              <Unit value={time.minutes} label="Minutes" />
              <Unit value={time.seconds} label="Seconds" />
            </div>
          </>
        ) : (
          <p className="font-serif text-3xl italic text-cream sm:text-4xl">
            Today we celebrate {couple.partnerOne} &amp; {couple.partnerTwo}
          </p>
        )}
      </div>
    </section>
  )
}
