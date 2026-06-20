import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Smoothed scroll progress (0..1 of document height) and raw scroll velocity,
 * both exposed via refs so they can be read inside useFrame without re-rendering React.
 * GSAP tweens the smoothed value toward the raw scroll target on every scroll event.
 */
export function useScrollDepth() {
  const progress = useRef({ value: 0 })
  const velocity = useRef(0)

  useEffect(() => {
    let lastY = window.scrollY
    let lastT = performance.now()

    function onScroll() {
      const y = window.scrollY
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      const target = y / max

      const now = performance.now()
      const dt = Math.max(now - lastT, 1)
      velocity.current = (y - lastY) / dt
      lastY = y
      lastT = now

      gsap.to(progress.current, {
        value: target,
        duration: 1.1,
        ease: 'power3.out',
        overwrite: true,
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { progress, velocity }
}
