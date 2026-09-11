import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Preload Asgard portrait texture to prevent runtime suspense disruptions
useTexture.preload('/profile.jpg');

function AsgardPortrait({ hovered }) {
  const profileTexture = useTexture('/profile.jpg');
  return (
    <mesh position={[0, 0, 0.04]}>
      <circleGeometry args={[1.75, 32]} />
      <meshStandardMaterial
        map={profileTexture}
        roughness={0.4}
        metalness={0.1}
        emissive="#d4af37"
        emissiveIntensity={hovered ? 0.3 : 0.1}
      />
    </mesh>
  );
}

export default function RealmPlatform({
  position = [0, 0, 0],
  realmName = "ASGARD",
  realmColor = "#d4af37",
  secondaryColor = "#f3e5ab",
  isAsgard = false,
  children,
  htmlOffset = [4.6, 0, 0], // Sits elegantly to the right/left of the 3D medallion
}) {
  const medallionRef = useRef();
  const ringRef = useRef();
  const brazierRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Sacred rotating outer runic ring (Image 2 style)
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.15;
    }

    // Natural fire / aura flicker
    if (brazierRef.current) {
      brazierRef.current.intensity = 2.6 + Math.sin(t * 8) * 0.4 + Math.cos(t * 11) * 0.3;
    }

    // Gentle floating sway for the realm medallion
    if (medallionRef.current) {
      medallionRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.1;
    }
  });

  return (
    <group ref={medallionRef} position={position}>
      {/* --- 3D REALM MEDALLION & PLATFORM (Image 2 & 3 Hybrid) --- */}

      {/* 1. Stone Dais Base Platform (Image 3 Style) */}
      <group position={[0, -2.4, 0]}>
        {/* Ancient Stone Slab */}
        <mesh receiveShadow>
          <cylinderGeometry args={[2.8, 3.2, 0.4, 16]} />
          <meshStandardMaterial
            color="#191d26"
            roughness={0.88}
            metalness={0.15}
          />
        </mesh>

        {/* Glowing Base Perimeter Ring (Image 3 blue/cyan ring) */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.22, 0]}>
          <ringGeometry args={[2.85, 3.0, 32]} />
          <meshBasicMaterial color={realmColor} side={THREE.DoubleSide} />
        </mesh>

        {/* Brazier Stone Pillars (Image 3 Style) */}
        {[
          [-2.2, 0, -1.2],
          [2.2, 0, -1.2],
          [-2.2, 0, 1.2],
          [2.2, 0, 1.2],
        ].map(([px, py, pz], idx) => (
          <group key={idx} position={[px, py + 0.9, pz]}>
            <mesh>
              <boxGeometry args={[0.22, 1.8, 0.22]} />
              <meshStandardMaterial color="#222834" roughness={0.9} />
            </mesh>
            <mesh position={[0, 1.0, 0]}>
              <coneGeometry args={[0.2, 0.6, 6]} />
              <meshBasicMaterial color={realmColor} />
            </mesh>
          </group>
        ))}

        {/* Brazier Firelight Light */}
        <pointLight
          ref={brazierRef}
          position={[0, 0.8, 0]}
          color={realmColor}
          intensity={2.8}
          distance={8}
        />
      </group>

      {/* 2. Floating Circular World Medallion (Image 2 Drawing Style) */}
      <group
        position={[0, 0.3, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Outer Carved Stone Frame Ring */}
        <mesh>
          <torusGeometry args={[2.0, 0.16, 16, 32]} />
          <meshStandardMaterial
            color="#2a2216"
            roughness={0.6}
            metalness={0.4}
            emissive={realmColor}
            emissiveIntensity={hovered ? 0.6 : 0.25}
          />
        </mesh>

        {/* Rotating Sacred Rune Ring (Image 2 circular border) */}
        <group ref={ringRef}>
          <mesh position={[0, 0, 0.02]}>
            <ringGeometry args={[1.78, 1.94, 24]} />
            <meshBasicMaterial
              color={realmColor}
              side={THREE.DoubleSide}
              transparent
              opacity={0.75}
            />
          </mesh>
        </group>

        {/* Medallion Centerpiece: Either Asgard Portrait or Realm Elemental World Orb */}
        {isAsgard ? (
          <AsgardPortrait hovered={hovered} />
        ) : (
          // Other Realms: Glowing Elemental World Core
          <mesh position={[0, 0, 0.04]}>
            <circleGeometry args={[1.75, 32]} />
            <meshStandardMaterial
              color="#0d111a"
              roughness={0.3}
              metalness={0.7}
              emissive={realmColor}
              emissiveIntensity={hovered ? 0.4 : 0.15}
            />
          </mesh>
        )}

        {/* 3D Sphere of the Realm World hovering at center */}
        <mesh position={[0, 0, 0.2]}>
          <sphereGeometry args={[0.65, 32, 32]} />
          <meshStandardMaterial
            color={realmColor}
            emissive={realmColor}
            emissiveIntensity={hovered ? 0.8 : 0.45}
            roughness={0.2}
            metalness={0.4}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Realm Name Inscription Placard below medallion */}
        <group position={[0, -2.1, 0.2]}>
          <mesh>
            <planeGeometry args={[2.2, 0.45]} />
            <meshBasicMaterial color="#0c101a" />
          </mesh>
          <lineSegments>
            <edgesGeometry args={[new THREE.PlaneGeometry(2.2, 0.45)]} />
            <lineBasicMaterial color={realmColor} />
          </lineSegments>
        </group>
      </group>

      {/* --- SLEEK HTML UI OVERLAY SITTING BESIDE THE 3D TREE --- */}
      {/* Positioned with htmlOffset and center anchor so both the 3D Tree and Content are visible! */}
      <Html
        position={htmlOffset}
        distanceFactor={13}
        center
        zIndexRange={[100, 0]}
        style={{
          pointerEvents: 'auto',
          userSelect: 'none',
        }}
      >
        <div className="w-[90vw] max-w-[600px] max-h-[85vh] overflow-y-auto transform-gpu transition-all duration-300 pr-1">
          {children}
        </div>
      </Html>
    </group>
  );
}
