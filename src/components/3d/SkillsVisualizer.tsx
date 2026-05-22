"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls, Html } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
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
  { name: 'NLP', color: '#6d3bd7' },
  { name: 'JIRA', color: '#d0bcff' },
  { name: 'MATLAB', color: '#efdbff' },
  { name: 'Deep Learning', color: '#5f3d7c' },
  { name: 'Artificial Intelligence', color: '#855ea7' }
];

interface Skill {
  name: string;
  color: string;
}

function OrbitingNode({ skill, index, total }: { skill: Skill, index: number, total: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Calculate position on a sphere
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;
  
  const radius = 3;
  const x = radius * Math.cos(theta) * Math.sin(phi);
  const y = radius * Math.sin(theta) * Math.sin(phi);
  const z = radius * Math.cos(phi);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Rotate the whole group slowly to simulate orbit
      groupRef.current.position.x = x * Math.cos(clock.getElapsedTime() * 0.2) - z * Math.sin(clock.getElapsedTime() * 0.2);
      groupRef.current.position.z = z * Math.cos(clock.getElapsedTime() * 0.2) + x * Math.sin(clock.getElapsedTime() * 0.2);
    }
  });

  return (
    <group ref={groupRef} position={[x, y, z]}>
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
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
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.5;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 32, 32]}>
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

export default function SkillsVisualizer() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <div className="w-full h-[500px] md:h-[600px] relative" />;
  }

  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <ErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: true }}
          onCreated={({ gl }) => {
            gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          <CoreSphere />
          
          {skills.map((skill, index) => (
            <OrbitingNode key={skill.name} skill={skill} index={index} total={skills.length} />
          ))}
          
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
