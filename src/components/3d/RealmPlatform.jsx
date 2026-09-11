import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export default function RealmPlatform({
  position = [0, 0, 0],
  realmName = "ASGARD",
  realmColor = "#d4af37",
  secondaryColor = "#f3e5ab",
  isAsgard = false,
  children,
  htmlOffset = [4.6, 0, 0], // Sits elegantly to the right/left of the 3D medallion on desktop
  scrollEl = null, // Drei scroll DOM element for forwarding gestures
}) {
  const medallionRef = useRef();
  const ringRef = useRef();
  const brazierRef = useRef();
  const cardContainerRef = useRef(null);
  const touchStartYRef = useRef(0);

  const [hovered, setHovered] = useState(false);
  const [isNearCamera, setIsNearCamera] = useState(true);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const [portalNode, setPortalNode] = useState(() =>
    typeof document !== 'undefined'
      ? document.getElementById('norse-html-overlay') || document.body
      : null
  );

  React.useEffect(() => {
    const el = document.getElementById('norse-html-overlay') || document.body;
    if (el) setPortalNode(el);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleWheel = (e) => {
    const el = cardContainerRef.current;
    if (!el || !scrollEl) return;
    const isScrollable = el.scrollHeight > el.clientHeight + 4;
    const atTop = el.scrollTop <= 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 4;

    if (!isScrollable || (e.deltaY > 0 && atBottom) || (e.deltaY < 0 && atTop)) {
      scrollEl.scrollTop += e.deltaY;
    }
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      touchStartYRef.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && scrollEl) {
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - currentY;
      const el = cardContainerRef.current;
      if (!el) return;

      const isScrollable = el.scrollHeight > el.clientHeight + 6;
      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 6;

      if (!isScrollable || (deltaY > 0 && atBottom) || (deltaY < 0 && atTop)) {
        scrollEl.scrollTop += deltaY * 1.5;
        touchStartYRef.current = currentY;
      }
    }
  };

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Sacred rotating outer runic ring (Image 2 style)
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.15;
    }

    // Natural fire / aura flicker
    if (brazierRef.current) {
      brazierRef.current.intensity = (isMobile ? 1.8 : 2.6) + Math.sin(t * 8) * 0.3;
    }

    // Gentle floating sway for the realm medallion
    if (medallionRef.current) {
      medallionRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.1;
    }

    // Smooth visibility check based on camera vertical distance
    const distY = Math.abs(state.camera.position.y - position[1]);
    setIsNearCamera(distY < 16);
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

        {/* Brazier Firelight Light - active only when near camera to maximize mobile GPU FPS */}
        {isNearCamera && (
          <pointLight
            ref={brazierRef}
            position={[0, 0.8, 0]}
            color={realmColor}
            intensity={isMobile ? 1.8 : 2.8}
            distance={8}
          />
        )}
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

        {/* Medallion Centerpiece: Glowing Elemental World Core */}
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
      {/* Positioned with effectiveHtmlOffset: centered on mobile, elegant side placement on desktop! */}
      {portalNode && (
        <Html
          position={isMobile ? [-position[0], isAsgard ? -0.2 : 0, 0] : htmlOffset}
          center
          portal={{ current: portalNode }}
          zIndexRange={[100, 0]}
          style={{
            pointerEvents: isNearCamera ? 'auto' : 'none',
            opacity: isNearCamera ? 1 : 0,
            transition: 'opacity 0.35s ease-in-out',
            userSelect: 'none',
          }}
        >
          <div
            ref={cardContainerRef}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className="w-[94vw] max-w-[420px] max-h-[70vh] sm:max-h-[78vh] md:w-[92vw] md:max-w-[660px] md:max-h-[85vh] overflow-y-auto px-0.5 sm:pr-1"
            style={{
              WebkitOverflowScrolling: 'touch',
              overscrollBehavior: 'contain',
            }}
          >
            {children}
          </div>
        </Html>
      )}
    </group>
  );
}
