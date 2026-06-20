/** Capability detection used to decide whether to mount the WebGL scene at all. */

export function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

/** Rough, cheap heuristic — not exact, just enough to scale particle counts down. */
export function isLowEndDevice(): boolean {
  const cores = navigator.hardwareConcurrency ?? 4
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4
  const isNarrow = window.innerWidth < 768
  return cores <= 4 || mem <= 4 || isNarrow
}
