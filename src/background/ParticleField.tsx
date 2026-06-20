import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

type Ref<T> = { current: T }

/**
 * GPU-friendly particle dust field — a single Points draw call (no per-particle
 * objects) with positions mutated directly in the typed array each frame.
 * Cursor repulsion is computed by projecting the pointer onto a world-space
 * plane at the field's average depth.
 */
export default function ParticleField({
  count = 4000,
  pointer,
  scrollVelocity,
}: {
  count?: number
  pointer: Ref<{ x: number; y: number }>
  scrollVelocity: Ref<number>
}) {
  const pointsRef = useRef<THREE.Points>(null)
  const { camera } = useThree()

  const { positions, velocities, basePositions } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    const basePositions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 26
      const y = (Math.random() - 0.5) * 16
      const z = (Math.random() - 0.5) * 14 - 4
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      basePositions[i * 3] = x
      basePositions[i * 3 + 1] = y
      basePositions[i * 3 + 2] = z
      velocities[i * 3] = (Math.random() - 0.5) * 0.004
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.004
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002
    }
    return { positions, velocities, basePositions }
  }, [count])

  const pointerWorld = useMemo(() => new THREE.Vector3(), [])
  const tmp = useMemo(() => new THREE.Vector3(), [])

  useFrame(({ clock }) => {
    const geom = pointsRef.current?.geometry
    if (!geom) return
    const attr = geom.getAttribute('position') as THREE.BufferAttribute
    const arr = attr.array as Float32Array

    // Project pointer into world space at z ≈ -2 (roughly the particle field's center depth).
    pointerWorld.set(pointer.current.x, pointer.current.y, 0.5)
    pointerWorld.unproject(camera)
    const dir = pointerWorld.sub(camera.position).normalize()
    const dist = (-2 - camera.position.z) / dir.z
    pointerWorld.copy(camera.position).add(dir.multiplyScalar(dist))

    const speedBoost = 1 + Math.min(Math.abs(scrollVelocity.current) * 40, 1.5)
    const t = clock.elapsedTime

    for (let i = 0; i < count; i++) {
      const ix = i * 3
      const iy = ix + 1
      const iz = ix + 2

      // Gentle drift back toward the base anchor with slow sinusoidal wander.
      arr[ix] += (basePositions[ix] + Math.sin(t * 0.05 + i) * 0.6 - arr[ix]) * 0.002
      arr[iy] += (basePositions[iy] + Math.cos(t * 0.04 + i) * 0.6 - arr[iy]) * 0.002
      arr[iz] += velocities[iz] * speedBoost

      // Cursor repulsion with smooth decay — only nearby particles are nudged.
      tmp.set(arr[ix], arr[iy], arr[iz])
      const d = tmp.distanceTo(pointerWorld)
      if (d < 2.2) {
        const force = (1 - d / 2.2) * 0.05
        arr[ix] += (tmp.x - pointerWorld.x) * force
        arr[iy] += (tmp.y - pointerWorld.y) * force
      }
    }

    attr.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#7dd3fc"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.45}
        depthWrite={false}
      />
    </points>
  )
}
