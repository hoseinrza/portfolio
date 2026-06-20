import { useEffect, useRef } from 'react'

/** Normalized (-1..1) pointer position, smoothed by consumers via lerp in useFrame. */
export function usePointer() {
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    function onMove(e: PointerEvent) {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1
      target.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return target
}
