import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function YggdrasilTree() {
  const treeRef = useRef();
  const runesRingRef = useRef();
  const sporesRef = useRef();
  const sporesCount = 600;

  // Spores drifting along the vertical trunk of Yggdrasil
  const [sporePositions, sporeColors] = useMemo(() => {
    const pos = new Float32Array(sporesCount * 3);
    const col = new Float32Array(sporesCount * 3);
    const gold = new THREE.Color('#d4af37');
    const amber = new THREE.Color('#f97316');
    const mistBlue = new THREE.Color('#93c5fd');
    const emerald = new THREE.Color('#22c55e');

    for (let i = 0; i < sporesCount; i++) {
      const radius = 3.5 + Math.random() * 16;
      const angle = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = 12 - Math.random() * 95; // Y: +12 down to -83
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      const pick = Math.random();
      const c = pick > 0.65 ? gold : pick > 0.4 ? emerald : pick > 0.2 ? amber : mistBlue;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sporesRef.current) {
      sporesRef.current.rotation.y = t * 0.02;
    }
    if (runesRingRef.current) {
      runesRingRef.current.rotation.y = -t * 0.04;
    }
  });

  return (
    <group ref={treeRef}>
      {/* Primeval Lighting */}
      <ambientLight intensity={0.45} color="#b8c6dc" />
      <directionalLight position={[12, 18, 12]} intensity={1.2} color="#fbf4dd" />
      <directionalLight position={[-12, -40, -10]} intensity={0.6} color="#7c92b8" />

      {/* Central Colossal Trunk of Yggdrasil (Spanning Y: +15 down to -85) */}
      <mesh position={[0, -37.5, -4]}>
        <cylinderGeometry args={[2.8, 4.2, 105, 32]} />
        <meshStandardMaterial
          color="#1e1610"
          roughness={0.9}
          metalness={0.1}
          bumpScale={0.15}
        />
      </mesh>

      {/* Glowing Sap Veins of the World Tree */}
      <mesh position={[0, -37.5, -3.95]}>
        <cylinderGeometry args={[2.82, 4.22, 105, 12]} />
        <meshBasicMaterial
          color="#d4af37"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Tangled Roots at Helheim Base (Y: -75) */}
      <group position={[0, -75, -4]}>
        {[0, 1.2, 2.4, 3.6, 4.8].map((angle, i) => (
          <mesh
            key={i}
            position={[Math.cos(angle) * 3, -2, Math.sin(angle) * 3]}
            rotation={[0.3, angle, 0.4]}
          >
            <cylinderGeometry args={[0.6, 1.2, 12, 12]} />
            <meshStandardMaterial color="#14100c" roughness={0.95} />
          </mesh>
        ))}
      </group>

      {/* Floating World Tree Spores & Mists */}
      <points ref={sporesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={sporesCount}
            array={sporePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={sporesCount}
            array={sporeColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.18}
          vertexColors
          transparent
          opacity={0.7}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
