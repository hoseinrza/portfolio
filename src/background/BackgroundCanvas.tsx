import { useEffect, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import BackgroundScene from './BackgroundScene'
import MolecularBackground from '../components/MolecularBackground'
import { isLowEndDevice, prefersReducedMotion, supportsWebGL } from './env'

/**
 * Fixed, full-viewport background layer mounted once at the app root.
 * Gates the heavy R3F scene behind capability checks and falls back to a
 * static, near-zero-cost gradient + SVG for unsupported/low-end/reduced-motion
 * cases. Pauses the render loop entirely when the tab isn't visible.
 */
export default function BackgroundCanvas() {
  const [capabilities] = useState(() => ({
    webgl: supportsWebGL(),
    reducedMotion: prefersReducedMotion(),
    lowEnd: isLowEndDevice(),
  }))
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [visible, setVisible] = useState(!document.hidden)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function onVisibility() {
      setVisible(!document.hidden)
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  const { particleCount, atomCount } = useMemo(() => {
    if (capabilities.lowEnd) return { particleCount: 1500, atomCount: 12 }
    return { particleCount: 5000, atomCount: 22 }
  }, [capabilities.lowEnd])

  const useStaticFallback = !capabilities.webgl || capabilities.reducedMotion

  if (useStaticFallback) {
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

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, capabilities.lowEnd ? 1.25 : 1.75]}
        frameloop={visible ? 'always' : 'never'}
        gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
      >
        <BackgroundScene dark={dark} particleCount={particleCount} atomCount={atomCount} />
      </Canvas>
    </div>
  )
}
