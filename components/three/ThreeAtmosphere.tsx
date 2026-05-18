"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

function CinematicPetals() {
  // Use 200 petals for a rich atmosphere without overloading
  const count = 200;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const mouse = useMousePosition();

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const petals = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 20, // Spread across width
        Math.random() * 20 - 10,     // Spread vertically
        (Math.random() - 0.5) * 15   // Spread depth (into fog)
      ),
      rotation: new THREE.Vector3(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ),
      speed: new THREE.Vector3(
        (Math.random() - 0.5) * 0.015,  // Base horizontal drift
        Math.random() * 0.015 + 0.005,  // Gravity / fall speed
        (Math.random() - 0.5) * 0.01    // Depth drift
      ),
      rotSpeed: new THREE.Vector3(
        Math.random() * 0.02 - 0.01,
        Math.random() * 0.02 - 0.01,
        Math.random() * 0.02 - 0.01
      ),
      scale: Math.random() * 0.6 + 0.4,
      // Some petals glow more than others
      emissiveIntensity: Math.random() * 0.8 + 0.2
    }));
  }, [count]);

  const geometry = useMemo(() => {
    // A low-poly sphere flattened into a petal-like disc
    return new THREE.SphereGeometry(0.12, 7, 5);
  }, []);

  useFrame(({ clock }) => {
    if (!mesh.current) return;

    // Time-based wind variation
    const windForce = Math.sin(clock.elapsedTime * 0.5) * 0.005;

    petals.forEach((petal, i) => {
      // Motion: Gravity + Wind + Mouse Parallax
      petal.position.y -= petal.speed.y;
      petal.position.x += petal.speed.x + windForce + (mouse.x - 0.5) * 0.03;
      petal.position.z += petal.speed.z + (mouse.y - 0.5) * 0.01;

      // Looping mechanism
      if (petal.position.y < -10) {
        petal.position.y = 10;
        petal.position.x = (Math.random() - 0.5) * 20;
        petal.position.z = (Math.random() - 0.5) * 15;
      }

      // Smooth rotation
      petal.rotation.x += petal.rotSpeed.x;
      petal.rotation.y += petal.rotSpeed.y;
      petal.rotation.z += petal.rotSpeed.z;

      // Update matrix
      dummy.position.copy(petal.position);
      dummy.rotation.set(petal.rotation.x, petal.rotation.y, petal.rotation.z);
      // Flatten the sphere: X is normal, Y is elongated, Z is very thin
      dummy.scale.set(petal.scale * 1.0, petal.scale * 1.5, petal.scale * 0.15);
      dummy.updateMatrix();

      mesh.current!.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[geometry, undefined, count]} frustumCulled={false}>
      <meshStandardMaterial
        color="#3d0004" // Dark crimson base
        emissive="#e50914" // Neon cyberpunk red glow
        emissiveIntensity={0.65}
        roughness={0.4}
        metalness={0.2}
        transparent={true}
        opacity={0.8}
        side={THREE.DoubleSide}
      />
    </instancedMesh>
  );
}

function CinematicLighting() {
  const lightRef1 = useRef<THREE.PointLight>(null);
  const lightRef2 = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const isPlaying = document.documentElement.classList.contains('audio-playing');

    // Base intensity
    let intensity1 = 25;
    let intensity2 = 15;

    if (isPlaying) {
      // Audio-reactive pulse simulation based on sine waves
      const pulse = Math.sin(clock.elapsedTime * 8) * 0.5 + 0.5; // Fast beat
      const pulse2 = Math.sin(clock.elapsedTime * 2) * 0.5 + 0.5; // Slow swell

      intensity1 = 25 + pulse * 15; // Spike up to 40
      intensity2 = 15 + pulse2 * 10; // Swell up to 25
    }

    if (lightRef1.current) lightRef1.current.intensity = THREE.MathUtils.lerp(lightRef1.current.intensity, intensity1, 0.1);
    if (lightRef2.current) lightRef2.current.intensity = THREE.MathUtils.lerp(lightRef2.current.intensity, intensity2, 0.05);
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight ref={lightRef1} position={[4, 5, 4]} color="#e50914" intensity={25} distance={15} />
      <pointLight position={[-5, -2, 2]} color="#ffffff" intensity={5} distance={12} />
      <pointLight ref={lightRef2} position={[0, -5, -2]} color="#ff2a3d" intensity={15} distance={10} />
    </>
  );
}

export function ThreeAtmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 opacity-90">
      <Canvas camera={{ position: [0, 0, 7], fov: 52 }} dpr={[1, 1.5]} performance={{ min: 0.5 }} gl={{ alpha: true }} style={{ pointerEvents: 'none' }}>
        {/* Transparent background to allow the cinematic image system to show through */}
        <fog attach="fog" args={["#000000", 6, 20]} />
        <CinematicLighting />
        <CinematicPetals />
      </Canvas>
    </div>
  );
}
