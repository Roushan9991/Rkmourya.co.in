"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars, OrbitControls } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import ErrorBoundary from '../ErrorBoundary';

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1.5, 64, 64]} scale={1.2}>
      <MeshDistortMaterial
        color="#6d3bd7"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
    </Sphere>
  );
}

function FloatingNodes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
          ]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            color={Math.random() > 0.5 ? '#5de6ff' : '#d0bcff'}
            emissive={Math.random() > 0.5 ? '#5de6ff' : '#d0bcff'}
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroVisualizer({ className = "w-full min-h-[400px] md:min-h-[600px] glass-panel rounded-xl" }: { className?: string }) {
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsReady(true);
    const match = window.matchMedia('(max-width: 767.98px)');
    setIsMobile(match.matches);
    const update = () => {
      setIsMobile(match.matches);
    };
    match.addEventListener('change', update);
    return () => match.removeEventListener('change', update);
  }, []);

  if (!isReady) {
    return <div className={`relative overflow-hidden ${className}`} />;
  }

  if (isMobile) {
    return (
      <div className={`relative overflow-hidden ${className} flex flex-col items-center justify-center p-8 bg-surface-container-lowest/30`}>
        {/* Dynamic neon glowing orb representation for mobile */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 pointer-events-none" />
        <div className="relative w-56 h-56 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-[40px] animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-spin [animation-duration:16s]" />
          <div className="absolute inset-4 rounded-full border border-dashed border-secondary/20 animate-spin [animation-duration:10s] [animation-direction:reverse]" />
          <div className="absolute inset-8 rounded-full border border-dotted border-tertiary-container/30 animate-pulse" />
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-primary-container via-[#8b5cf6]/20 to-secondary-container flex items-center justify-center border border-white/20 shadow-2xl backdrop-blur-xl hover:scale-105 transition-transform duration-500">
            <svg className="w-14 h-14 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
        <div className="text-center mt-6 z-10">
          <p className="font-label-caps text-[10px] text-primary tracking-widest uppercase mb-1">Interactive 3D Active</p>
          <p className="text-[11px] text-on-surface-variant font-body-md max-w-[240px]">Cinematic WebGL visualizations running at full resolution on desktop.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0">
        <ErrorBoundary>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: true }}
            onCreated={({ gl }) => {
              gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#d0bcff" />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#5de6ff" />
            <AnimatedSphere />
            <FloatingNodes />
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </ErrorBoundary>
      </div>
    </div>
  );
}
