"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars, OrbitControls } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import ErrorBoundary from '../ErrorBoundary';

function AnimatedSphere({ isMobile }: { isMobile: boolean }) {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  // Optimize geometry by using much fewer segments on mobile
  const segments = isMobile ? 24 : 64;

  return (
    <Sphere ref={sphereRef} args={[1.5, segments, segments]} scale={isMobile ? 1.0 : 1.2}>
      <MeshDistortMaterial
        color="#6d3bd7"
        attach="material"
        distort={isMobile ? 0.35 : 0.4}
        speed={isMobile ? 1.5 : 2}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
    </Sphere>
  );
}

function FloatingNodes({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  // Drop draw calls on mobile from 30 down to 8
  const count = isMobile ? 8 : 30;

  return (
    <group ref={groupRef}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
          ]}
        >
          {/* Low-poly spheres on mobile */}
          <sphereGeometry args={[0.05, isMobile ? 8 : 16, isMobile ? 8 : 16]} />
          <meshStandardMaterial
            color={Math.random() > 0.5 ? '#5de6ff' : '#d0bcff'}
            emissive={Math.random() > 0.5 ? '#5de6ff' : '#d0bcff'}
            emissiveIntensity={isMobile ? 1.5 : 2}
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

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0">
        <ErrorBoundary>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            // Optimize GPU/shading workload on mobile, keep original high density for desktop
            dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}
            gl={{ 
              antialias: !isMobile, 
              powerPreference: 'high-performance', 
              preserveDrawingBuffer: true 
            }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#d0bcff" />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#5de6ff" />
            
            <AnimatedSphere isMobile={isMobile} />
            <FloatingNodes isMobile={isMobile} />
            
            <Stars 
              radius={100} 
              depth={50} 
              count={isMobile ? 600 : 3000} 
              factor={4} 
              saturation={0} 
              fade 
              speed={isMobile ? 0.5 : 1} 
            />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={isMobile ? 0.3 : 0.5} />
          </Canvas>
        </ErrorBoundary>
      </div>
    </div>
  );
}
