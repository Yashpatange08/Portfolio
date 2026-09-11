import React, { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

import { REALM_COORDINATES } from './realmCoordinates';
export { REALM_COORDINATES };

export default function BranchTreeModel({ onHoverBranch, onSelectRealm }) {
  const scroll = useScroll();
  const orbRef = useRef();
  const orbGlowRef = useRef();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // 1. Continuous Connecting Branch Curve (Image 3 Style: Branch Path Between Worlds)
  const connectingCurve = useMemo(() => {
    // Generate curved path with intermediate organic bend points
    const points = [];
    for (let i = 0; i < REALM_COORDINATES.length - 1; i++) {
      const p1 = REALM_COORDINATES[i];
      const p2 = REALM_COORDINATES[i + 1];
      points.push(p1);
      // Midpoint curving inward toward the central trunk
      const mid = new THREE.Vector3(
        (p1.x + p2.x) * 0.35,
        (p1.y + p2.y) * 0.5,
        (p1.z + p2.z) * 0.5 - 1.2
      );
      points.push(mid);
    }
    points.push(REALM_COORDINATES[REALM_COORDINATES.length - 1]);
    return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);
  }, []);

  // 2. Central Colossal Trunk Curve
  const trunkCurve = useMemo(() => {
    const points = [
      new THREE.Vector3(0, 12, -2),
      new THREE.Vector3(0.8, 2, -1.5),
      new THREE.Vector3(-0.6, -12, -1.8),
      new THREE.Vector3(0.5, -26, -1.2),
      new THREE.Vector3(-0.7, -40, -1.5),
      new THREE.Vector3(0.4, -54, -1.8),
      new THREE.Vector3(-0.3, -68, -2.0),
      new THREE.Vector3(0, -84, -2.5),
    ];
    return new THREE.CatmullRomCurve3(points);
  }, []);

  // 3. Offshoot Branches reaching out directly to each Realm
  const offshootBranches = useMemo(() => {
    return REALM_COORDINATES.map((coord, idx) => {
      // Find approximate trunk point at this height
      const t = Math.min(1, Math.max(0, (12 - coord.y) / 96));
      const trunkPoint = trunkCurve.getPoint(t);
      
      const mid = new THREE.Vector3(
        (trunkPoint.x + coord.x) * 0.5,
        coord.y + 0.8,
        (trunkPoint.z + coord.z) * 0.5
      );

      const curve = new THREE.CatmullRomCurve3([trunkPoint, mid, coord]);
      return {
        id: idx,
        curve,
        targetPos: coord,
      };
    });
  }, [trunkCurve]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Move the Glowing Traveler Orb along the Connecting Branch Path based on scroll
    if (orbRef.current && connectingCurve) {
      const scrollProgress = Math.min(1, Math.max(0, scroll.offset));
      const orbPos = connectingCurve.getPointAt(scrollProgress);
      orbRef.current.position.copy(orbPos);

      // Subtle pulse on traveler orb
      if (orbGlowRef.current) {
        orbGlowRef.current.intensity = 3.5 + Math.sin(t * 6) * 1.2;
      }
    }
  });

  return (
    <group>
      {/* --- CENTRAL YGGDRASIL TRUNK --- */}
      <mesh receiveShadow castShadow>
        <tubeGeometry args={[trunkCurve, 64, 2.2, 16, false]} />
        <meshStandardMaterial
          color="#1b140e"
          roughness={0.88}
          metalness={0.12}
        />
      </mesh>

      {/* Runic Sap Vein spiral running down the trunk */}
      <mesh position={[0, 0, 0.05]}>
        <tubeGeometry args={[trunkCurve, 48, 2.24, 8, false]} />
        <meshBasicMaterial
          color="#d4af37"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* --- CONNECTING BRANCH HIGHWAY (Image 3 Style) --- */}
      {/* This physical 3D branch connects World 1 to World 2 down to World 6 */}
      <mesh receiveShadow>
        <tubeGeometry args={[connectingCurve, 120, 0.45, 12, false]} />
        <meshStandardMaterial
          color="#2e2116"
          roughness={0.8}
          metalness={0.2}
          emissive="#d4af37"
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* Glowing Energy Vein along the connecting branch */}
      <mesh>
        <tubeGeometry args={[connectingCurve, 120, 0.48, 6, false]} />
        <meshBasicMaterial
          color="#ffd700"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* --- INTERACTIVE REALM BRANCH OFFSHOOTS --- */}
      {offshootBranches.map((branch) => {
        const isHovered = hoveredIndex === branch.id;
        return (
          <group key={branch.id}>
            {/* Interactive Branch Mesh with GPU scale transform instead of rebuilding geometry */}
            <mesh
              scale={isHovered ? [1.12, 1.12, 1.12] : [1, 1, 1]}
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredIndex(branch.id);
                if (onHoverBranch) onHoverBranch(branch.id);
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                setHoveredIndex(null);
                if (onHoverBranch) onHoverBranch(null);
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (onSelectRealm) onSelectRealm(branch.id + 1);
              }}
              cursor="pointer"
            >
              <tubeGeometry args={[branch.curve, 32, 0.48, 12, false]} />
              <meshStandardMaterial
                color={isHovered ? '#422f1d' : '#271c13'}
                roughness={0.7}
                metalness={0.2}
                emissive={isHovered ? '#ffd700' : '#d4af37'}
                emissiveIntensity={isHovered ? 0.8 : 0.15}
              />
            </mesh>

            {/* Hover Runic Halo around branch */}
            {isHovered && (
              <pointLight
                position={branch.targetPos}
                color="#ffd700"
                intensity={4}
                distance={6}
              />
            )}
          </group>
        );
      })}

      {/* --- GLOWING TRAVELER ORB (Image 3 Waypoint Orb) --- */}
      {/* Moves along the branch highway as user scrolls */}
      <group ref={orbRef} position={[-2.8, 0, 1]}>
        {/* Glowing Core Sphere */}
        <mesh>
          <sphereGeometry args={[0.38, 24, 24]} />
          <meshStandardMaterial
            color="#ffd700"
            emissive="#ffd700"
            emissiveIntensity={2.5}
            roughness={0.1}
            metalness={0.3}
          />
        </mesh>

        {/* Orbiting Golden Halo */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[0.55, 0.05, 12, 24]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>

        {/* Dynamic Light Source from the Orb */}
        <pointLight
          ref={orbGlowRef}
          color="#ffeaa7"
          intensity={4}
          distance={8}
        />
      </group>

      {/* Sprawling Ancient Roots at the base of Yggdrasil (Helheim) */}
      <group position={[0, -78, -2]}>
        {[0, 1.0, 2.1, 3.2, 4.3, 5.4].map((rad, i) => {
          const rootCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 4, 0),
            new THREE.Vector3(Math.cos(rad) * 4, -1, Math.sin(rad) * 4),
            new THREE.Vector3(Math.cos(rad) * 8, -6, Math.sin(rad) * 8),
          ]);
          return (
            <mesh key={i}>
              <tubeGeometry args={[rootCurve, 24, 0.7, 8, false]} />
              <meshStandardMaterial
                color="#1b202c"
                roughness={0.8}
                metalness={0.2}
                emissive="#38bdf8"
                emissiveIntensity={0.15}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}
