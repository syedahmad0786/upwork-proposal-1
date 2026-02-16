'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Mouse-tracking state ─── */
const mouseState = { x: 0, y: 0 };

if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (e) => {
    mouseState.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseState.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });
}

/* ─── Floating Torus ─── */
function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.4 + mouseState.y * 0.3;
    ref.current.rotation.y = Math.cos(t * 0.2) * 0.5 + mouseState.x * 0.3;
    ref.current.position.y = Math.sin(t * 0.5) * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={[2.5, 0.5, -1]}>
        <torusGeometry args={[1.2, 0.45, 48, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.4}
          chromaticAberration={0.3}
          anisotropy={0.2}
          distortion={0.3}
          distortionScale={0.5}
          temporalDistortion={0.1}
          ior={1.25}
          color="#3B82F6"
          roughness={0}
          transmission={0.98}
        />
      </mesh>
    </Float>
  );
}

/* ─── Floating Icosahedron ─── */
function FloatingIcosahedron() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.15 + mouseState.y * 0.2;
    ref.current.rotation.z = t * 0.1 + mouseState.x * 0.2;
    ref.current.position.y = Math.sin(t * 0.4 + 1) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={ref} position={[-2.8, -0.5, -0.5]}>
        <icosahedronGeometry args={[0.9, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.3}
          chromaticAberration={0.2}
          anisotropy={0.1}
          distortion={0.2}
          distortionScale={0.4}
          temporalDistortion={0.1}
          ior={1.3}
          color="#3B82F6"
          roughness={0}
          transmission={0.98}
        />
      </mesh>
    </Float>
  );
}

/* ─── Floating Sphere ─── */
function FloatingSphere() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.2 + mouseState.x * 0.15;
    ref.current.position.y = Math.sin(t * 0.6 + 2) * 0.25 + 0.3;
    ref.current.position.x = Math.cos(t * 0.3) * 0.15;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={ref} position={[0.5, 1.8, -2]}>
        <sphereGeometry args={[0.6, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.5}
          chromaticAberration={0.4}
          anisotropy={0.15}
          distortion={0.15}
          distortionScale={0.3}
          temporalDistortion={0.05}
          ior={1.2}
          color="#06B6D4"
          roughness={0}
          transmission={0.98}
        />
      </mesh>
    </Float>
  );
}

/* ─── Particle field ─── */
function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.02 + mouseState.x * 0.05;
    ref.current.rotation.x = mouseState.y * 0.03;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.03}
        color="#2563EB"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Scene lighting ─── */
function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-4, 3, -2]} intensity={0.6} color="#2563EB" />
      <pointLight position={[4, -2, 3]} intensity={0.4} color="#3B82F6" />
    </>
  );
}

/* ─── Camera rig that follows mouse ─── */
function CameraRig() {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.x += (mouseState.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (mouseState.y * 0.3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ─── Main exported scene ─── */
export default function HeroScene() {
  return (
    <div className="three-canvas-container">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <CameraRig />
        <Lights />
        <FloatingTorus />
        <FloatingIcosahedron />
        <FloatingSphere />
        <ParticleField />
      </Canvas>
    </div>
  );
}
