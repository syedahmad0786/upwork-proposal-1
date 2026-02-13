"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Generate deterministic pseudo-random positions for network nodes that
 *  roughly form a brain / sphere shape. */
function generateNodePositions(count: number, radius: number): THREE.Vector3[] {
  const positions: THREE.Vector3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; // range -1..1
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    positions.push(
      new THREE.Vector3(
        Math.cos(theta) * r * radius,
        y * radius,
        Math.sin(theta) * r * radius,
      ),
    );
  }
  return positions;
}

/** Build edges between nodes that are within `maxDist` of each other. */
function generateEdges(
  positions: THREE.Vector3[],
  maxDist: number,
): [number, number][] {
  const edges: [number, number][] = [];
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      if (positions[i].distanceTo(positions[j]) < maxDist) {
        edges.push([i, j]);
      }
    }
  }
  return edges;
}

// ---------------------------------------------------------------------------
// Sub-components rendered inside the Canvas
// ---------------------------------------------------------------------------

const NODE_COUNT = 60;
const RADIUS = 1.8;
const EDGE_MAX_DIST = 1.05;

/** A single glowing sphere node. */
function Node({
  position,
  index,
}: {
  position: THREE.Vector3;
  index: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const baseScale = 0.04 + Math.random() * 0.03;
  const speed = 0.8 + Math.random() * 1.2;
  const offset = index * 0.5;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * speed + offset) * 0.35;
    ref.current.scale.setScalar(baseScale * pulse);
  });

  // Alternate between electric blue and cyan
  const color = index % 3 === 0 ? "#06B6D4" : "#3B82F6";

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  );
}

/** All edges rendered as a single LineSegments object for performance. */
function Edges({
  positions,
  edges,
}: {
  positions: THREE.Vector3[];
  edges: [number, number][];
}) {
  const ref = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const pts: number[] = [];
    for (const [a, b] of edges) {
      pts.push(
        positions[a].x,
        positions[a].y,
        positions[a].z,
        positions[b].x,
        positions[b].y,
        positions[b].z,
      );
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(pts, 3),
    );
    return geo;
  }, [positions, edges]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.LineBasicMaterial;
    mat.opacity = 0.15 + Math.sin(clock.getElapsedTime() * 0.5) * 0.08;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial
        color="#3B82F6"
        transparent
        opacity={0.2}
        depthWrite={false}
      />
    </lineSegments>
  );
}

/** Floating particles surrounding the network. */
function FloatingParticles({ count = 300 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.03;
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#06B6D4"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

/** The main network group that rotates slowly. */
function Network() {
  const groupRef = useRef<THREE.Group>(null);

  const nodePositions = useMemo(
    () => generateNodePositions(NODE_COUNT, RADIUS),
    [],
  );
  const edges = useMemo(
    () => generateEdges(nodePositions, EDGE_MAX_DIST),
    [nodePositions],
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.08;
    groupRef.current.rotation.x = Math.sin(t * 0.04) * 0.15;
  });

  return (
    <group ref={groupRef}>
      <Edges positions={nodePositions} edges={edges} />
      {nodePositions.map((pos, i) => (
        <Node key={i} position={pos} index={i} />
      ))}
    </group>
  );
}

/** The complete 3D scene. */
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#3B82F6" />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#06B6D4" />

      {/* Network with gentle float */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <Network />
      </Float>

      {/* Particles */}
      <FloatingParticles />
    </>
  );
}

// ---------------------------------------------------------------------------
// Exported wrapper
// ---------------------------------------------------------------------------

/** Loading fallback rendered outside the Canvas. */
function Fallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-16 w-16 rounded-full border-2 border-electric/30 border-t-electric animate-spin" />
    </div>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Suspense fallback={<Fallback />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
