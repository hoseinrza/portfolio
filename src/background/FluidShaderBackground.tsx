import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// Lightweight value-noise + fbm (not a copyrighted Simplex implementation) —
// cheap enough to run per-fragment on a full-screen plane at 60fps.
const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorBg;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 4; i++) {
      v += amp * noise(p);
      p *= 2.02;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv * 3.0;

    float slow = uTime * 0.035;
    float n1 = fbm(p + vec2(slow, -slow * 0.6));
    float n2 = fbm(p * 1.3 - vec2(slow * 0.4, slow * 0.8) + 4.0);

    float mixVal = smoothstep(0.2, 0.8, (n1 + n2) * 0.5);
    vec3 color = mix(uColorBg, uColorA, mixVal);
    color = mix(color, uColorB, smoothstep(0.55, 0.95, n2));

    // Soft vignette so the gradient never reads as a hard rectangle.
    // (edge0 < edge1 is required by the GLSL spec — reversed args are undefined behavior.)
    float vignette = 1.0 - smoothstep(0.15, 0.85, length(uv - 0.5));
    color = mix(uColorBg, color, vignette);

    gl_FragColor = vec4(color, 1.0);
  }
`

export default function FluidShaderBackground({ dark = false }: { dark?: boolean }) {
  const matRef = useRef<THREE.ShaderMaterial>(null)

  // Stable uniforms object — r3f doesn't re-push GPU values when the whole
  // `uniforms` prop reference is swapped, so colors are mutated in place
  // via the effect below instead of being recreated per `dark` change.
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uColorA: { value: new THREE.Color() },
      uColorB: { value: new THREE.Color() },
      uColorBg: { value: new THREE.Color() },
    }),
    [],
  )

  useEffect(() => {
    uniforms.uColorA.value.set(dark ? '#13243f' : '#dbeefe')
    uniforms.uColorB.value.set(dark ? '#0e3a4a' : '#cdeef5')
    uniforms.uColorBg.value.set(dark ? '#0b1220' : '#ffffff')
  }, [dark, uniforms])

  useFrame(({ clock }) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = clock.elapsedTime
  })

  return (
    <mesh position={[0, 0, -10]} scale={[40, 24, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  )
}
