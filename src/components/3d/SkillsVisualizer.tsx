"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls, Html } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import ErrorBoundary from '../ErrorBoundary';

const skills = [
  { name: 'Python', color: '#dbb8ff' },
  { name: 'SQL', color: '#5de6ff' },
  { name: 'Power BI', color: '#a078ff' },
  { name: 'Excel', color: '#00cbe6' },
  { name: 'DAX', color: '#d0bcff' },
  { name: 'Machine Learning', color: '#6d3bd7' },
  { name: 'Data Analytics', color: '#efdbff' },
  { name: 'Statistics', color: '#5de6ff' },
  { name: 'Powerpoint', color: '#dbb8ff' },
  { name: 'Tableau', color: '#a078ff' },
  { name: 'R Programming', color: '#00cbe6' },
  { name: 'NLP', color: '#6d3bd7' }
];

interface Skill {
  name: string;
  color: string;
}

function OrbitingNode({ skill, position }: { skill: Skill, position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.18, 12, 12]} />
        <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={1} />
      </mesh>
      <Html distanceFactor={10} zIndexRange={[100, 0]} center>
        <div className="bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 whitespace-nowrap">
          <span className="font-label-caps text-[10px] md:text-xs text-white drop-shadow-md">{skill.name}</span>
        </div>
      </Html>
    </group>
  );
}

function CoreSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.4;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[0.8, 16, 16]}>
      <MeshDistortMaterial
        color="#3c0091"
        attach="material"
        distort={0.6}
        speed={3}
        roughness={0}
        metalness={1}
        emissive="#3c0091"
        emissiveIntensity={2}
      />
    </Sphere>
  );
}

function RotatingSkillGroup({ positions }: { positions: [number, number, number][] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <OrbitingNode key={skill.name} skill={skill} position={positions[index]} />
      ))}
    </group>
  );
}

export default function SkillsVisualizer() {
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [pixelRatio, setPixelRatio] = useState(1);

  useEffect(() => {
    setIsReady(true);

    const match = window.matchMedia('(max-width: 767.98px)');
    const update = () => {
      setIsMobile(match.matches);
      setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    update();
    match.addEventListener('change', update);
    return () => match.removeEventListener('change', update);
  }, []);

  const positions = useMemo(() => {
    const total = skills.length;
    const radius = 3;

    return skills.map((_, index) => {
      const phi = Math.acos(-1 + (2 * index) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;

      return [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ] as [number, number, number];
    });
  }, []);

  if (!isReady) {
    return <div className="w-full h-[500px] md:h-[600px] relative" />;
  }

  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <ErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          dpr={pixelRatio}
          gl={{ antialias: false, powerPreference: 'high-performance', preserveDrawingBuffer: false }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          <CoreSphere />
          
          <RotatingSkillGroup positions={positions} />
          
          <OrbitControls enableZoom={false} enableRotate={!isMobile} autoRotate={!isMobile} autoRotateSpeed={0.5} />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
