import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export default function LevelBase({
  y = 0,
  level = 1,
  accentColor = "#FFE500",
  secondaryColor = "#FFD8F5",
  children,
  htmlOffset = [0, 0, 0],
}) {
  const outerRingRef = useRef();
  const innerRingRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (outerRingRef.current) {
      outerRingRef.current.rotation.y = t * 0.08;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.y = -t * 0.12;
    }
  });

  return (
    <group position={[0, y, 0]}>
      {/* 3D Toy Studio Podium Base */}
      <group position={[0, -3.3, 0]}>
        {/* Main Sleek Glossy Studio Cylinder */}
        <mesh position={[0, 0, 0]} receiveShadow>
          <cylinderGeometry args={[5.2, 5.5, 0.45, 48]} />
          <meshStandardMaterial
            color="#18181d"
            roughness={0.25}
            metalness={0.4}
          />
        </mesh>

        {/* Top Glossy Inset Disc */}
        <mesh position={[0, 0.23, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[5.1, 48]} />
          <meshStandardMaterial
            color="#121215"
            roughness={0.2}
            metalness={0.6}
          />
        </mesh>

        {/* Outer Accent Band in ToyFight Color */}
        <group ref={outerRingRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.24, 0]}>
            <ringGeometry args={[5.15, 5.25, 48]} />
            <meshBasicMaterial
              color={accentColor}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>

        {/* Inner Secondary Color Ring */}
        <group ref={innerRingRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.25, 0]}>
            <ringGeometry args={[3.8, 3.88, 32]} />
            <meshBasicMaterial
              color={secondaryColor}
              side={THREE.DoubleSide}
              transparent
              opacity={0.8}
            />
          </mesh>
        </group>

        {/* Underneath Studio Glow Light */}
        <pointLight
          position={[0, -0.6, 0]}
          color={accentColor}
          intensity={2.2}
          distance={9}
        />
      </group>

      {/* ToyFight Floating HTML UI Screen Overlay */}
      <Html
        center
        position={htmlOffset}
        zIndexRange={[100, 0]}
        style={{
          pointerEvents: 'auto',
          userSelect: 'none',
        }}
      >
        <div className="w-[94vw] max-w-[1080px]">
          {children}
        </div>
      </Html>
    </group>
  );
}
