/* eslint-disable react/no-unknown-property */
'use client';
import { Suspense, useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer, OrbitControls, Box, Html, Image, RoundedBox, Text } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

import * as THREE from 'three';
import './Lanyard.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

extend({ MeshLineGeometry, MeshLineMaterial });

export interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

function HolographicFoil() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  
  useFrame((state) => {
    if (matRef.current) {
      matRef.current.uniforms.time.value = state.clock.elapsedTime;
      // Mouse position from -1 to 1
      matRef.current.uniforms.mouse.value.set(
        THREE.MathUtils.lerp(matRef.current.uniforms.mouse.value.x, state.pointer.x, 0.1),
        THREE.MathUtils.lerp(matRef.current.uniforms.mouse.value.y, state.pointer.y, 0.1)
      );
    }
  });

  const shader = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 mouse;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        // HSV to RGB
        vec3 hsv2rgb(vec3 c) {
          vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
          vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
          return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
        }

        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          
          // Fresnel effect for edge glow
          float fresnel = dot(normal, viewDir);
          float invertedFresnel = 1.0 - clamp(fresnel, 0.0, 1.0);
          
          // Parallax calculation
          vec2 parallaxOffset = mouse * 0.5;
          vec2 movingUv = vUv + parallaxOffset + vec2(time * 0.05);
          
          // Spectral holographic rainbow
          float hue = fract(movingUv.x * 1.5 + movingUv.y * 1.2 + invertedFresnel * 2.0);
          vec3 foilColor = hsv2rgb(vec3(hue, 0.65, 0.8));
          
          // Glare and highlights responding to mouse
          float glare = pow(max(0.0, 1.0 - distance(vUv, mouse * 0.5 + 0.5)), 3.0);
          
          // Tactical scanlines overlay
          float scanline = sin(vUv.y * 150.0 - time * 2.0) * 0.05;
          
          // Combine layers: Foil + Glare + Fresnel Glow
          vec3 finalColor = foilColor * (invertedFresnel * 1.2) + vec3(glare * 0.8) + scanline;
          
          // Cinematic mask (darker in center, holo on edges)
          float edgeAlpha = pow(invertedFresnel, 3.0) * 0.8;
          float glareAlpha = glare * 0.6;
          float alpha = clamp(edgeAlpha + glareAlpha, 0.0, 0.7);
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `
    });
  }, []);

  return (
    <mesh position={[0, 0, 0.008]}>
      <planeGeometry args={[0.66, 0.6]} />
      <primitive object={shader} ref={matRef} attach="material" />
    </mesh>
  );
}

export default function Lanyard({ position = [0, 0, 13], gravity = [0, -40, 0], fov = 25, transparent = true }: LanyardProps) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  const { t } = useLanguage();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position: position, fov: fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        {/* Subtle cinematic red accent glow */}
        <pointLight position={[2, -1, 4]} color="#ff2a3d" intensity={18} distance={15} />
        <spotLight position={[-2, 2, 4]} color="#e50914" intensity={12} angle={0.8} penumbra={1} />
        <Suspense fallback={null}>
          <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
            <Band isMobile={isMobile} lanyardRole={t('hero.lanyard.role')} lanyardId={t('hero.lanyard.id')} />
          </Physics>
          <Environment blur={0.75}>
            <Lightformer
              intensity={2}
              color="white"
              position={[0, -1, 5]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[-1, -1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[1, 1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={10}
              color="white"
              position={[-10, 0, 14]}
              rotation={[0, Math.PI / 2, Math.PI / 3]}
              scale={[100, 10, 1]}
            />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false, lanyardRole = "FRONTEND DEVELOPER", lanyardId = "ID: 2024-X49-S" }) {
  const band = useRef<any>(null),
    fixed = useRef<any>(null),
    j1 = useRef<any>(null),
    j2 = useRef<any>(null),
    j3 = useRef<any>(null),
    card = useRef<any>(null);
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic' as const, canSleep: true, colliders: false as const, angularDamping: 4, linearDamping: 4 };
  const fixedSegmentProps = { type: 'kinematicPosition' as const, canSleep: false, colliders: false as const };
  const { nodes, materials } = useGLTF('/card.glb') as any;

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  const [flipped, setFlipped] = useState(false);
  const cardGroup = useRef<any>(null);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'pointer';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (cardGroup.current) {
      const targetRotation = flipped ? 0 : Math.PI;
      cardGroup.current.rotation.y = THREE.MathUtils.lerp(cardGroup.current.rotation.y, targetRotation, delta * 6);
      
      const targetScale = hovered ? 1.04 : 1.0;
      cardGroup.current.scale.setScalar(THREE.MathUtils.lerp(cardGroup.current.scale.x, targetScale, delta * 6));
    }

    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      // Idle floating sway
      const t = state.clock.getElapsedTime();
      fixed.current.setNextKinematicTranslation({
        x: Math.sin(t * 0.5) * 0.4,
        y: 4,
        z: Math.cos(t * 0.5) * 0.3
      });

      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      if (j3.current) {
        curve.points[0].copy(j3.current.translation());
        curve.points[1].copy(j2.current.lerped);
        curve.points[2].copy(j1.current.lerped);
        curve.points[3].copy(fixed.current.translation());
        band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      }
      if (card.current) {
        ang.copy(card.current.angvel());
        rot.copy(card.current.rotation());
        card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
      }
    }
  });

  curve.curveType = 'chordal';

  return (
    <>
      <group position={[0, 4, 0]} rotation={[0, 0, 0.08]}>
        <RigidBody ref={fixed} {...fixedSegmentProps} />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              if (card.current) {
                drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(!flipped);
            }}
          >
            <group ref={cardGroup} rotation={[0, Math.PI, 0]}>
              <mesh geometry={nodes.card.geometry}>
                <meshPhysicalMaterial
                  color="#050505"
                  transparent
                  opacity={0.9}
                  clearcoat={1}
                  clearcoatRoughness={0}
                  roughness={0.1}
                  metalness={0.8}
                  iridescence={1}
                  iridescenceIOR={1.5}
                  iridescenceThicknessRange={[100, 400]}
                />
              </mesh>
              <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
              <mesh geometry={nodes.clamp.geometry} material={materials.metal} />

              {/* Front Avatar UI Group */}
              <group position={[0, 0, -0.016]} rotation={[0, Math.PI, 0]}>
                
                {/* 1. Inner Red Foil Gasket (Recessed Base) */}
                <RoundedBox args={[0.64, 0.58, 0.002]} radius={0.03} position={[0, 0.58, 0.001]}>
                  <meshPhysicalMaterial color="#ff0a16" emissive="#500000" metalness={0.8} roughness={0.2} iridescence={1} />
                </RoundedBox>

                {/* 2. Embedded Avatar Image */}
                <Image url="/avatar.jpg" position={[0, 0.58, 0.003]} scale={[0.62, 0.56]} radius={0.025} toneMapped={false} />

                {/* 3. Thick Acrylic Glass Slab (Encasing the image with 3D depth and parallax reflections) */}
                <RoundedBox args={[0.66, 0.6, 0.015]} radius={0.035} position={[0, 0.58, 0.011]}>
                  <meshPhysicalMaterial 
                    transparent 
                    opacity={0.15} 
                    color="#ffffff"
                    metalness={0.9} 
                    roughness={0} 
                    clearcoat={1} 
                    clearcoatRoughness={0} 
                    iridescence={1} 
                    iridescenceIOR={1.4} 
                    iridescenceThicknessRange={[100, 400]} 
                  />
                  {/* Premium Holographic Foil Overlay */}
                  <HolographicFoil />
                </RoundedBox>

                {/* 4. Typography Panel (Bottom, Better Height & Spacing) */}
                <group position={[0, 0.16, 0.001]}>
                  {/* Backdrop */}
                  <RoundedBox args={[0.64, 0.22, 0.001]} radius={0.03} position={[0, 0, 0]}>
                     <meshBasicMaterial color="#050505" opacity={0.9} transparent />
                  </RoundedBox>
                  {/* Red Accent Line */}
                  <RoundedBox args={[0.015, 0.22, 0.001]} radius={0.01} position={[-0.3125, 0, 0.001]}>
                     <meshBasicMaterial color="#e50914" />
                  </RoundedBox>
                  
                  {/* Name & Class */}
                  <Text position={[-0.27, 0.06, 0.002]} fontSize={0.06} color="#ffffff" anchorX="left" anchorY="middle" letterSpacing={0.05}>
                    Ferdy A
                  </Text>
                  <Text position={[-0.27, -0.01, 0.002]} fontSize={0.022} color="#e50914" anchorX="left" anchorY="middle" letterSpacing={0.2}>
                    {lanyardRole}
                  </Text>
                  <Text position={[-0.27, -0.07, 0.002]} fontSize={0.022} color="#cccccc" anchorX="left" anchorY="middle" letterSpacing={0.1}>
                    LV.99 // RANK: S
                  </Text>

                  {/* Rarity Label */}
                  <Text position={[0.29, 0.06, 0.002]} fontSize={0.018} color="#ffd700" anchorX="right" anchorY="middle" letterSpacing={0.1}>
                    ★ SECRET RARE
                  </Text>

                  {/* Text Panel Acrylic Glass Encasing */}
                  <RoundedBox args={[0.66, 0.24, 0.01]} radius={0.035} position={[0, 0, 0.008]}>
                    <meshPhysicalMaterial transparent opacity={0.12} metalness={0.9} roughness={0} clearcoat={1} clearcoatRoughness={0} color="#ffffff" />
                  </RoundedBox>
                </group>
              </group>

              {/* Back Side Cyberpunk UI Group */}
              <group position={[0, 0, 0.016]} rotation={[0, 0, 0]}>
                {/* Black Tech Backdrop Sticker */}
                <RoundedBox args={[0.65, 0.94, 0.001]} radius={0.03} position={[0, 0.533, 0.005]}>
                  <meshStandardMaterial color="#0a0a0a" roughness={1} metalness={0} />
                </RoundedBox>

                {/* Tech Stack Matrix */}
                <group position={[0, 0.78, 0.008]}>
                  <RoundedBox args={[0.58, 0.32, 0.001]} radius={0.02} position={[0, 0, 0]}>
                    <meshBasicMaterial color="#111111" />
                  </RoundedBox>
                  <RoundedBox args={[0.01, 0.32, 0.001]} radius={0.005} position={[-0.285, 0, 0.001]}>
                    <meshBasicMaterial color="#e50914" />
                  </RoundedBox>
                  <Text position={[-0.24, 0.1, 0.001]} fontSize={0.025} color="#ffffff" anchorX="left" letterSpacing={0.1}>
                    &gt; TECH_STACK
                  </Text>
                  <Text position={[-0.24, 0.03, 0.001]} fontSize={0.02} color="#888888" anchorX="left" letterSpacing={0.1}>
                    REACT // THREE.JS // RAPIER
                  </Text>
                  <Text position={[-0.24, -0.03, 0.001]} fontSize={0.02} color="#888888" anchorX="left" letterSpacing={0.1}>
                    NEXT.JS // TAILWIND // GSAP
                  </Text>
                  <Text position={[-0.24, -0.09, 0.001]} fontSize={0.02} color="#e50914" anchorX="left" letterSpacing={0.1}>
                    AI INTEGRATION // WEBGL
                  </Text>
                </group>

                {/* QR-Style Access Graphic */}
                <group position={[0, 0.45, 0.008]}>
                  <mesh position={[-0.15, 0, 0]}>
                    <planeGeometry args={[0.15, 0.15]} />
                    <meshBasicMaterial color="#ffffff" wireframe />
                  </mesh>
                  <mesh position={[0.1, 0.05, 0]}>
                    <planeGeometry args={[0.1, 0.1]} />
                    <meshBasicMaterial color="#e50914" />
                  </mesh>
                  <mesh position={[0.1, -0.05, 0]}>
                    <planeGeometry args={[0.2, 0.02]} />
                    <meshBasicMaterial color="#ffffff" />
                  </mesh>
                  <Text position={[0, -0.15, 0]} fontSize={0.022} color="#e50914" anchorX="center" letterSpacing={0.2}>
                    ACCESS GRANTED
                  </Text>
                </group>

                {/* Serial Barcode Graphic (Fills lower empty space) */}
                <group position={[0, 0.2, 0.008]}>
                  <mesh position={[0, 0, 0]}>
                    <planeGeometry args={[0.45, 0.08]} />
                    <meshBasicMaterial color="#ffffff" />
                  </mesh>
                  {Array.from({ length: 18 }).map((_, i) => (
                    <mesh key={i} position={[-0.2 + i * 0.0235, 0, 0.001]}>
                      <planeGeometry args={[i % 3 === 0 ? 0.012 : 0.005, 0.06]} />
                      <meshBasicMaterial color="#000000" />
                    </mesh>
                  ))}
                  <Text position={[0, -0.08, 0]} fontSize={0.02} color="#888888" anchorX="center" letterSpacing={0.3}>
                    {lanyardId}
                  </Text>
                </group>
              </group>
            </group>
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#050505"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
