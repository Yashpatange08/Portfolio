import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export default function ScrollRig({ onScrollUpdate }) {
  const scroll = useScroll();
  const prevLevelRef = useRef(1);

  useFrame((state, delta) => {
    // Total vertical descent distance down Yggdrasil = 75 units (from Y: 0 to Y: -75)
    const targetY = -scroll.offset * 75;

    // Smooth lerp camera movement down the World Tree
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      targetY,
      Math.min(delta * 4.2, 1)
    );

    // On mobile viewports (< 768px), lock camera X to 0 to prevent card clipping and disorientation.
    // On desktop, retain elegant dynamic lateral sway tracking the zigzagging branches.
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const lateralSway = isMobile ? 0 : Math.sin(scroll.offset * Math.PI * 5) * 0.8;
    const targetX = isMobile ? 0 : (state.pointer.x * 0.8) + lateralSway;

    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      targetX,
      Math.min(delta * 3, 1)
    );

    // Keep comfortable camera depth
    state.camera.position.z = THREE.MathUtils.lerp(
      state.camera.position.z,
      15.2,
      Math.min(delta * 2, 1)
    );

    // Look at the central World Tree axis
    state.camera.lookAt(0, state.camera.position.y - 0.5, 0);

    // Broadcast current depth and level
    const currentDepth = Math.abs(state.camera.position.y);
    const calculatedLevel = Math.min(6, Math.max(1, Math.round(currentDepth / 15) + 1));
    
    if (onScrollUpdate) {
      onScrollUpdate({
        depth: currentDepth,
        offset: scroll.offset,
        level: calculatedLevel,
      });
    }

    if (calculatedLevel !== prevLevelRef.current) {
      prevLevelRef.current = calculatedLevel;
    }
  });

  return null;
}
