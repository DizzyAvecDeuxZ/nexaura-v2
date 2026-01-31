import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";

interface OrbitalRingProps {
  radius: number;
  tubeRadius: number;
  rotation: [number, number, number];
  speed: number;
  direction: number;
}

function OrbitalRing({ radius, tubeRadius, rotation, speed, direction }: OrbitalRingProps) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.y += speed * direction;
      ringRef.current.rotation.x += speed * direction * 0.3;
    }
  });

  return (
    <mesh ref={ringRef} rotation={rotation}>
      <torusGeometry args={[radius, tubeRadius, 16, 64]} />
      <meshStandardMaterial
        color="#8a9299"
        metalness={1}
        roughness={0.15}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}

function CentralN() {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef}>
      {/* Barre gauche du N */}
      <mesh position={[-0.6, 0, 0]}>
        <boxGeometry args={[0.3, 2, 0.3]} />
        <meshStandardMaterial
          color="#3a4249"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>

      {/* Barre diagonale du N */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, -0.52]}>
        <boxGeometry args={[0.25, 2.5, 0.3]} />
        <meshStandardMaterial
          color="#3a4249"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>

      {/* Barre droite du N */}
      <mesh position={[0.6, 0, 0]}>
        <boxGeometry args={[0.3, 2, 0.3]} />
        <meshStandardMaterial
          color="#3a4249"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>
    </group>
  );
}

function LogoScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <CentralN />
      <OrbitalRing
        radius={2.2}
        tubeRadius={0.08}
        rotation={[Math.PI / 4, 0, Math.PI / 4]}
        speed={0.15}
        direction={1}
      />
      <OrbitalRing
        radius={2.5}
        tubeRadius={0.08}
        rotation={[-Math.PI / 4, 0, -Math.PI / 4]}
        speed={0.12}
        direction={-1}
      />
    </group>
  );
}

interface NexauraLogo3DProps {
  size?: number;
  className?: string;
}

export default function NexauraLogo3D({ size = 400, className }: NexauraLogo3DProps) {
  return (
    <div className={cn("", className)} style={{ width: size, height: size }}>
      <Canvas
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />

        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} />
        <pointLight position={[0, 0, 5]} intensity={0.8} color="#a855f7" />

        <Environment preset="studio" />

        <LogoScene />
      </Canvas>
    </div>
  );
}
