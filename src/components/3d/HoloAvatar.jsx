import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function HoloAvatar({ position = [0, 0, 0] }) {
  const groupRef = useRef();
  const torusRef = useRef();
  const sphereRef = useRef();
  const capsuleRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Load user profile texture
  const texture = useTexture('/profile.jpg');
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Gentle studio floating motion
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(t * 1.6) * 0.12;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (state.pointer.x * 0.3) + (hovered ? 0.15 : 0),
        0.06
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -state.pointer.y * 0.2,
        0.06
      );
    }

    // Playful floating companion toys
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.8;
      torusRef.current.rotation.y = t * 0.6;
      torusRef.current.position.y = 1.6 + Math.sin(t * 2) * 0.15;
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = -1.6 + Math.cos(t * 1.8) * 0.15;
      sphereRef.current.rotation.y = t * 0.5;
    }
    if (capsuleRef.current) {
      capsuleRef.current.rotation.z = Math.sin(t * 1.2) * 0.4;
      capsuleRef.current.rotation.x = t * 0.4;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* --- 3D COLLECTIBLE BLISTER PACK CARD (TOYFIGHT AESTHETIC) --- */}

      {/* 1. Printed Cardboard Backing */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[3.4, 4.6, 0.08]} />
        <meshStandardMaterial
          color="#16161a"
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>

      {/* 2. Top Header Hanging Hook Slot (Die-Cut Punch Hole) */}
      <mesh position={[0, 2.0, 0.01]}>
        <ringGeometry args={[0.15, 0.28, 32]} />
        <meshBasicMaterial color="#0e0e12" side={THREE.DoubleSide} />
      </mesh>

      {/* 3. High-Gloss Card Border Rim in ToyFight Yellow */}
      <lineSegments position={[0, 0, 0.01]}>
        <edgesGeometry args={[new THREE.BoxGeometry(3.4, 4.6, 0.09)]} />
        <lineBasicMaterial color={hovered ? '#FD513B' : '#FFE500'} linewidth={2} />
      </lineSegments>

      {/* 4. The Profile Image in Blister Frame */}
      <mesh position={[0, -0.15, 0.02]}>
        <planeGeometry args={[3.0, 3.7]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {/* 5. Clear Glossy Acrylic Blister Bubble Shell (Protective Toy Casing) */}
      <mesh position={[0, -0.15, 0.18]}>
        <boxGeometry args={[3.05, 3.75, 0.25]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.25}
          roughness={0.05}
          metalness={0.1}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* 6. Collectible Figurine Badge: "SERIES 01 // 1 OF 1" */}
      <mesh position={[-0.8, -1.85, 0.32]}>
        <planeGeometry args={[1.4, 0.35]} />
        <meshBasicMaterial color="#FFE500" side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0.8, -1.85, 0.32]}>
        <planeGeometry args={[1.3, 0.35]} />
        <meshBasicMaterial color="#FFD8F5" side={THREE.DoubleSide} />
      </mesh>

      {/* --- PLAYFUL FLOATING 3D STUDIO TOYS --- */}

      {/* Toy 1: Glossy Canary Yellow Torus (ToyFight signature) */}
      <mesh ref={torusRef} position={[2.1, 1.6, 0.8]}>
        <torusGeometry args={[0.42, 0.16, 24, 48]} />
        <meshStandardMaterial
          color="#FFE500"
          roughness={0.15}
          metalness={0.1}
        />
      </mesh>

      {/* Toy 2: Glossy Bubblegum Pink Sphere */}
      <mesh ref={sphereRef} position={[-2.2, -1.6, 0.6]}>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshStandardMaterial
          color="#FFD8F5"
          roughness={0.1}
          metalness={0.15}
        />
      </mesh>

      {/* Toy 3: Glossy Mint/Lavender Pill Capsule */}
      <mesh ref={capsuleRef} position={[2.2, -1.4, 0.4]} rotation={[0.4, 0.2, 0.8]}>
        <capsuleGeometry args={[0.2, 0.5, 16, 32]} />
        <meshStandardMaterial
          color="#E9E3F3"
          roughness={0.12}
          metalness={0.1}
        />
      </mesh>

      {/* Soft Studio Key Light for Toy Gloss */}
      <pointLight
        position={[2, 3, 3]}
        intensity={hovered ? 4.5 : 3.0}
        color="#fff4e0"
        distance={8}
      />
    </group>
  );
}
