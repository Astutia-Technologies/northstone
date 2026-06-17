import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh, Group } from "three";

function Keystone() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <octahedronGeometry args={[1.4, 0]} />
      <meshPhysicalMaterial
        color="#B07D3A"
        metalness={0.85}
        roughness={0.2}
        clearcoat={0.8}
        clearcoatRoughness={0.15}
      />
    </mesh>
  );
}

function Tower({ position, scale }: { position: [number, number, number]; scale: number }) {
  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh position={position} scale={[scale, scale * 2.4, scale]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#F8F5F0" metalness={0.1} roughness={0.5} opacity={0.9} transparent />
      </mesh>
    </Float>
  );
}

function Particles() {
  const ref = useRef<Group>(null);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.05;
  });
  const pts = Array.from({ length: 30 }, (_, i) => {
    const a = (i / 30) * Math.PI * 2;
    const r = 3 + Math.sin(i) * 0.5;
    return [Math.cos(a) * r, Math.sin(i * 2) * 1.5, Math.sin(a) * r] as [number, number, number];
  });
  return (
    <group ref={ref}>
      {pts.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#E2C089" />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute !inset-0"
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFE9C2" />
      <directionalLight position={[-4, -2, -3]} intensity={0.5} color="#7BA7E2" />
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.7}>
        <Keystone />
      </Float>
      <Tower position={[-2.2, -0.6, -0.5]} scale={0.35} />
      <Tower position={[2.3, -0.8, -0.6]} scale={0.4} />
      <Tower position={[1.6, -0.4, 0.8]} scale={0.25} />
      <Particles />
      <Environment preset="sunset" />
    </Canvas>
  );
}
