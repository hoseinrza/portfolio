import { useEffect, useState } from 'react'
import MolecularBackground from '../components/MolecularBackground'

/** Near-zero-cost static replacement for the WebGL scene — no three.js involved. */
export default function BackgroundFallback() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background: dark
          ? 'radial-gradient(circle at 20% 20%, #13243f, #0b1220 70%)'
          : 'radial-gradient(circle at 20% 20%, #dbeefe, #ffffff 70%)',
      }}
    >
      <MolecularBackground className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-40" />
    </div>
  )
}
