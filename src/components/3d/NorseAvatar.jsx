import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function NorseAvatar({ position = [0, 0, 0] }) {
  const groupRef = useRef();
  const sunWheelRef = useRef();
  const innerRuneRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Load user profile photo
  const texture = useTexture('/profile.jpg');
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Gentle sacred floating sway
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.12;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (state.pointer.x * 0.25) + (hovered ? 0.15 : 0),
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -state.pointer.y * 0.15,
        0.05
      );
    }

    // Sacred Runic Sun Wheel Rotations
    if (sunWheelRef.current) {
      sunWheelRef.current.rotation.z = t * 0.2;
    }
    if (innerRuneRef.current) {
      innerRuneRef.current.rotation.z = -t * 0.3;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Sacred Solar Runic Wheels Orbiting the Runestone */}
      <group position={[0, 0, -0.1]}>
        <mesh ref={sunWheelRef}>
          <ringGeometry args={[2.5, 2.58, 24]} />
          <meshBasicMaterial
            color="#d4af37"
            side={THREE.DoubleSide}
            transparent
            opacity={0.65}
          />
        </mesh>
        <mesh ref={innerRuneRef}>
          <ringGeometry args={[2.8, 2.84, 16]} />
          <meshBasicMaterial
            color="#f3e5ab"
            side={THREE.DoubleSide}
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>

      {/* Weathered Granite Stele Backing Monolith */}
      <mesh position={[0, 0, -0.06]}>
        <boxGeometry args={[3.2, 4.4, 0.12]} />
        <meshStandardMaterial
          color="#161a22"
          roughness={0.9}
          metalness={0.15}
        />
      </mesh>

      {/* Gold Inlaid Celtic / Runic Edges */}
      <lineSegments position={[0, 0, 0.01]}>
        <edgesGeometry args={[new THREE.BoxGeometry(3.2, 4.4, 0.13)]} />
        <lineBasicMaterial color={hovered ? '#ffd700' : '#d4af37'} linewidth={2} />
      </lineSegments>

      {/* Yash Patange's Portrait Set Into the Ancient Stele */}
      <mesh position={[0, 0, 0.02]}>
        <planeGeometry args={[3.0, 4.15]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.5}
          metalness={0.1}
          emissive="#d4af37"
          emissiveIntensity={hovered ? 0.25 : 0.1}
        />
      </mesh>

      {/* Carved Rune Cornerstone Tokens */}
      {[
        [-1.6, 2.2],
        [1.6, 2.2],
        [-1.6, -2.2],
        [1.6, -2.2],
      ].map(([x, y], idx) => (
        <mesh key={idx} position={[x, y, 0.08]}>
          <boxGeometry args={[0.25, 0.25, 0.08]} />
          <meshBasicMaterial color="#ffd700" />
        </mesh>
      ))}

      {/* Bifrost Ambient Warmth Light */}
      <pointLight
        position={[0, 0, 1.5]}
        intensity={hovered ? 3.5 : 2.5}
        color="#ffeaa7"
        distance={6}
      />
    </group>
  );
}
