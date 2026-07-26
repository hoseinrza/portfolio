import { useEffect, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import BackgroundScene from './BackgroundScene'

/**
 * Fixed, full-viewport WebGL background layer. Only ever mounted by App once
 * capability checks (WebGL support, reduced-motion) have already decided this
 * is the right thing to render — see App.tsx — so this module, and the
 * three.js/@react-three/fiber weight it pulls in, is fetched lazily and only
 * for users who will actually see it. Pauses the render loop when the tab
 * isn't visible.
 */
export default function BackgroundCanvas({ lowEnd }: { lowEnd: boolean }) {
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
    if (lowEnd) return { particleCount: 1500, atomCount: 12 }
    return { particleCount: 5000, atomCount: 22 }
  }, [lowEnd])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, lowEnd ? 1.25 : 1.75]}
        frameloop={visible ? 'always' : 'never'}
        gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
      >
        <BackgroundScene dark={dark} particleCount={particleCount} atomCount={atomCount} />
      </Canvas>
    </div>
  )
}
