import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type Ref<T> = { current: T }

type Atom = {
  base: THREE.Vector3
  phase: number
  speed: number
  radius: number
}

/**
 * Slow-drifting 3D "molecule" field: instanced atoms orbiting their own anchor
 * point, connected by bonds when within range. Designed to read as ambient
 * scientific texture, not a focal element — kept low-density and very slow.
 */
export default function MolecularField({
  count = 22,
  bondDistance = 3.2,
  scrollProgress,
}: {
  count?: number
  bondDistance?: number
  scrollProgress: Ref<{ value: number }>
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const lineRef = useRef<THREE.LineSegments>(null)
  const groupRef = useRef<THREE.Group>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const atoms: Atom[] = useMemo(() => {
    return Array.from({ length: count }, () => ({
      base: new THREE.Vector3(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 8 - 2,
      ),
      phase: Math.random() * Math.PI * 2,
      speed: 0.08 + Math.random() * 0.06,
      radius: 0.35 + Math.random() * 0.5,
    }))
  }, [count])

  const bondPairs = useMemo(() => {
    const pairs: [number, number][] = []
    for (let i = 0; i < atoms.length; i++) {
      for (let j = i + 1; j < atoms.length; j++) {
        if (atoms[i].base.distanceTo(atoms[j].base) < bondDistance) pairs.push([i, j])
      }
    }
    return pairs
  }, [atoms, bondDistance])

  const linePositions = useMemo(() => new Float32Array(bondPairs.length * 2 * 3), [bondPairs])

  const positions = useRef<THREE.Vector3[]>(atoms.map((a) => a.base.clone()))

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.012
      groupRef.current.position.z = -(scrollProgress.current?.value ?? 0) * 4
    }

    atoms.forEach((atom, i) => {
      const drift = atom.radius * 0.6
      positions.current[i].set(
        atom.base.x + Math.sin(t * atom.speed + atom.phase) * drift,
        atom.base.y + Math.cos(t * atom.speed * 0.8 + atom.phase) * drift,
        atom.base.z + Math.sin(t * atom.speed * 0.6 + atom.phase) * drift * 0.6,
      )
      dummy.position.copy(positions.current[i])
      dummy.scale.setScalar(atom.radius)
      dummy.updateMatrix()
      meshRef.current?.setMatrixAt(i, dummy.matrix)
    })
    if (meshRef.current) meshRef.current.instanceMatrix.needsUpdate = true

    if (lineRef.current) {
      bondPairs.forEach(([a, b], i) => {
        const pa = positions.current[a]
        const pb = positions.current[b]
        linePositions[i * 6] = pa.x
        linePositions[i * 6 + 1] = pa.y
        linePositions[i * 6 + 2] = pa.z
        linePositions[i * 6 + 3] = pb.x
        linePositions[i * 6 + 4] = pb.y
        linePositions[i * 6 + 5] = pb.z
      })
      const attr = lineRef.current.geometry.getAttribute('position') as THREE.BufferAttribute
      attr.needsUpdate = true
      const mat = lineRef.current.material as THREE.LineBasicMaterial
      mat.opacity = 0.12 + Math.sin(t * 0.3) * 0.04
    }
  })

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.16, 12, 12]} />
        <meshStandardMaterial
          color="#5fa8ff"
          emissive="#2563eb"
          emissiveIntensity={0.5}
          roughness={0.4}
          metalness={0.1}
        />
      </instancedMesh>
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#38bdf8" transparent opacity={0.14} />
      </lineSegments>
    </group>
  )
}
