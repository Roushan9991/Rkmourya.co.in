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

  useEffect(() => {
    setIsReady(true);
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
