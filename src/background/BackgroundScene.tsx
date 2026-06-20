import { Suspense } from 'react'
import MolecularField from './MolecularField'
import ParticleField from './ParticleField'
import FluidShaderBackground from './FluidShaderBackground'
import CameraRig from './CameraRig'
import { usePointer } from './usePointer'
import { useScrollDepth } from './useScrollDepth'

export default function BackgroundScene({
  dark,
  particleCount,
  atomCount,
}: {
  dark: boolean
  particleCount: number
  atomCount: number
}) {
  const pointer = usePointer()
  const { progress, velocity } = useScrollDepth()

  return (
    <Suspense fallback={null}>
      {/* Cheap depth-of-field stand-in: fog hides the harsh edge of distant
          atoms/particles instead of a full postprocessing DOF pass. */}
      <fog attach="fog" args={[dark ? '#0b1220' : '#ffffff', 6, 22]} />
      <ambientLight intensity={dark ? 0.5 : 0.9} />
      <pointLight position={[4, 4, 4]} intensity={dark ? 0.6 : 0.4} color="#60a5fa" />

      <FluidShaderBackground dark={dark} />
      <MolecularField count={atomCount} scrollProgress={progress} />
      <ParticleField count={particleCount} pointer={pointer} scrollVelocity={velocity} />
      <CameraRig pointer={pointer} scrollProgress={progress} />
    </Suspense>
  )
}
