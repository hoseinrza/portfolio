import { useFrame } from '@react-three/fiber'

type Ref<T> = { current: T }

/**
 * Subtle camera parallax: position lerps toward the pointer/scroll targets
 * instead of snapping, so motion always reads as smooth drift.
 */
export default function CameraRig({
  pointer,
  scrollProgress,
}: {
  pointer: Ref<{ x: number; y: number }>
  scrollProgress: Ref<{ value: number }>
}) {
  useFrame(({ camera }) => {
    const targetX = pointer.current.x * 0.6
    const targetY = pointer.current.y * 0.35
    const targetZ = 6 + (scrollProgress.current?.value ?? 0) * 1.5

    camera.position.x += (targetX - camera.position.x) * 0.04
    camera.position.y += (targetY - camera.position.y) * 0.04
    camera.position.z += (targetZ - camera.position.z) * 0.04
    camera.lookAt(0, 0, -2)
  })

  return null
}
