import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function SceneEnvironment() {
  const groupRef = useRef();

  // Floating ToyFight Studio Geometric Shapes (Toruses, Spheres, Capsules, Cubes)
  const toyItems = useMemo(() => {
    const items = [];
    const colors = ['#FFE500', '#FFD8F5', '#E9E3F3', '#FDEDD4', '#FD513B', '#FAF6EF'];
    const types = ['torus', 'sphere', 'cube', 'capsule'];

    for (let i = 0; i < 48; i++) {
      const angle = (i / 48) * Math.PI * 2 + Math.random() * 0.5;
      const radius = 6 + Math.random() * 8;
      const x = Math.cos(angle) * radius;
      const y = 8 - (i * 1.8) - Math.random() * 5; // spans down through all levels
      const z = Math.sin(angle) * radius * 0.8;

      items.push({
        id: i,
        type: types[i % types.length],
        pos: [x, y, z],
        color: colors[i % colors.length],
        scale: 0.35 + Math.random() * 0.45,
        rotSpeed: [
          (Math.random() - 0.5) * 0.8,
          (Math.random() - 0.5) * 0.8,
          (Math.random() - 0.5) * 0.8,
        ],
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.03;
    }
  });

  return (
    <group>
      {/* ToyFight High-End Studio Lighting */}
      <ambientLight intensity={0.75} />
      <directionalLight position={[10, 20, 15]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-10, 15, -10]} intensity={0.6} color="#ffe500" />
      <directionalLight position={[0, -40, 10]} intensity={0.8} color="#ffd8f5" />

      {/* Floating 3D Toy Objects Along Descent */}
      <group ref={groupRef}>
        {toyItems.map((item) => (
          <mesh
            key={item.id}
            position={item.pos}
            scale={item.scale}
          >
            {item.type === 'torus' && <torusGeometry args={[0.6, 0.22, 16, 32]} />}
            {item.type === 'sphere' && <sphereGeometry args={[0.5, 24, 24]} />}
            {item.type === 'cube' && <boxGeometry args={[0.8, 0.8, 0.8]} />}
            {item.type === 'capsule' && <capsuleGeometry args={[0.3, 0.6, 12, 24]} />}

            <meshStandardMaterial
              color={item.color}
              roughness={0.18}
              metalness={0.2}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
