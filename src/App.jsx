import React, { useState, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, useScroll } from '@react-three/drei';

import BranchTreeModel from './components/3d/BranchTreeModel';
import { REALM_COORDINATES } from './components/3d/realmCoordinates';
import ScrollRig from './components/3d/ScrollRig';
import RealmPlatform from './components/3d/RealmPlatform';

// Realm HTML UI Overlays
import Realm1Asgard from './components/realms/Realm1Asgard';
import Realm2Vanaheim from './components/realms/Realm2Vanaheim';
import Realm3Midgard from './components/realms/Realm3Midgard';
import Realm4Alfheim from './components/realms/Realm4Alfheim';
import Realm5Muspelheim from './components/realms/Realm5Muspelheim';
import Realm6Helheim from './components/realms/Realm6Helheim';

// Norse HUD Overlay
import RunicHUD from './components/hud/RunicHUD';

// Norse Loading Screen
function NorseLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05080e] font-norse-title text-[#d4af37]">
      <div className="w-16 h-16 border-4 border-[#d4af37]/20 border-t-[#d4af37] rounded-full animate-spin mb-4" />
      <div className="flex items-center gap-2">
        <span className="text-xl">ᛟ</span>
        <span className="text-sm font-bold tracking-widest uppercase">
          AWAKENING YGGDRASIL // GROWING BRANCHES OF THE NINE REALMS
        </span>
      </div>
      <div className="text-xs font-norse-sub text-slate-400 mt-2">
        YASH PATANGE // 3D WORLD TREE HIGHWAY
      </div>
    </div>
  );
}

// Helper to capture Drei's scroll DOM element
function ScrollBridge({ onInitScroll, onScrollUpdate }) {
  const scroll = useScroll();

  React.useEffect(() => {
    if (scroll && scroll.el) {
      onInitScroll(scroll.el);
    }
  }, [scroll, onInitScroll]);

  return <ScrollRig onScrollUpdate={onScrollUpdate} />;
}

export default function App() {
  const [telemetry, setTelemetry] = useState({
    depth: 0,
    offset: 0,
    level: 1,
  });
  const [hoveredBranch, setHoveredBranch] = useState(null);
  const scrollElementRef = useRef(null);

  const handleScrollUpdate = (data) => {
    setTelemetry(data);
  };

  const handleInitScroll = (el) => {
    scrollElementRef.current = el;
  };

  const handleJumpToLevel = (levelIndex) => {
    const el = scrollElementRef.current;
    if (el) {
      const maxScroll = el.scrollHeight - el.clientHeight;
      const targetScroll = ((levelIndex - 1) / 5) * maxScroll;
      el.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#05080e]">
      {/* Fixed Runic HUD Viewport Overlay */}
      <RunicHUD
        currentLevel={telemetry.level}
        depth={telemetry.depth}
        scrollOffset={telemetry.offset}
        onJumpToLevel={handleJumpToLevel}
      />

      {/* 3D WebGL Canvas */}
      <Suspense fallback={<NorseLoader />}>
        <Canvas
          camera={{ position: [0, 0, 15.2], fov: 45 }}
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance',
            failIfMajorPerformanceCaveat: false,
          }}
          className="w-full h-full select-none"
          style={{ background: '#05080e' }}
          onCreated={({ gl }) => {
            gl.setClearColor('#05080e', 1);
            const canvasEl = gl.domElement;
            canvasEl.addEventListener(
              'webglcontextlost',
              (e) => {
                e.preventDefault();
                console.warn('WebGL context lost - preventing default to restore.');
              },
              false
            );
          }}
        >
          {/* Atmospheric Norse Mists Fog */}
          <fog attach="fog" args={['#05080e', 14, 46]} />

          {/* Global Ambient & Key Lights across Yggdrasil */}
          <ambientLight intensity={1.5} color="#e2e8f0" />
          <directionalLight position={[10, 20, 15]} intensity={1.8} color="#fff8e7" />
          <directionalLight position={[-12, -25, 12]} intensity={1.4} color="#86efac" />
          <directionalLight position={[12, -50, 12]} intensity={1.4} color="#fdba74" />
          <directionalLight position={[-10, -75, 14]} intensity={1.8} color="#93c5fd" />

          {/* Drei ScrollControls driving camera descent down the Branching World Tree */}
          <ScrollControls pages={6} damping={0.25} distance={1}>
            {/* Camera Scroll Rig with DOM Bridge */}
            <ScrollBridge
              onInitScroll={handleInitScroll}
              onScrollUpdate={handleScrollUpdate}
            />

            {/* Central 3D Yggdrasil Tree Model with Branch Offshoots & Connecting Highway */}
            <BranchTreeModel
              onHoverBranch={setHoveredBranch}
              onSelectRealm={handleJumpToLevel}
            />

            {/* REALM 1 (Y: 0): Asgard – Seat of the Aesir */}
            <RealmPlatform
              position={REALM_COORDINATES[0].toArray()}
              realmName="ASGARD"
              realmColor="#d4af37"
              secondaryColor="#f3e5ab"
              isAsgard={true}
              htmlOffset={[5.3, 0, 0]}
            >
              <Realm1Asgard />
            </RealmPlatform>

            {/* REALM 2 (Y: -15): Vanaheim – Sacred Grove of the Vanir */}
            <RealmPlatform
              position={REALM_COORDINATES[1].toArray()}
              realmName="VANAHEIM"
              realmColor="#22c55e"
              secondaryColor="#86efac"
              htmlOffset={[-5.7, 0, 0]}
            >
              <Realm2Vanaheim />
            </RealmPlatform>

            {/* REALM 3 (Y: -30): Midgard – Realm of Men & Codebases */}
            <RealmPlatform
              position={REALM_COORDINATES[2].toArray()}
              realmName="MIDGARD"
              realmColor="#c29b38"
              secondaryColor="#ffd700"
              htmlOffset={[4.9, 0, 0]}
            >
              <Realm3Midgard />
            </RealmPlatform>

            {/* REALM 4 (Y: -45): Alfheim – Sanctum of the Light Elves */}
            <RealmPlatform
              position={REALM_COORDINATES[3].toArray()}
              realmName="ALFHEIM"
              realmColor="#a5b4fc"
              secondaryColor="#38bdf8"
              htmlOffset={[-5.5, 0, 0]}
            >
              <Realm4Alfheim />
            </RealmPlatform>

            {/* REALM 5 (Y: -60): Muspelheim – Forge of Primordial Fire */}
            <RealmPlatform
              position={REALM_COORDINATES[4].toArray()}
              realmName="MUSPELHEIM"
              realmColor="#f97316"
              secondaryColor="#ffd700"
              htmlOffset={[5.1, 0, 0]}
            >
              <Realm5Muspelheim />
            </RealmPlatform>

            {/* REALM 6 (Y: -75): Helheim – The Roots of Yggdrasil */}
            <RealmPlatform
              position={REALM_COORDINATES[5].toArray()}
              realmName="HELHEIM"
              realmColor="#93c5fd"
              secondaryColor="#38bdf8"
              htmlOffset={[-5.3, 0, 0]}
            >
              <Realm6Helheim onScrollToTop={() => handleJumpToLevel(1)} />
            </RealmPlatform>
          </ScrollControls>
        </Canvas>
      </Suspense>
    </main>
  );
}
