import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ count = 2000 }) => {
  const points = useRef(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const mixedColor = i / count;
      color.setHSL(0.75 + mixedColor * 0.1, 0.8, 0.5);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.05;
    points.current.rotation.x = time * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial size={0.015} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const GalaxyBackground = () => {
  const isMobile = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches,
    []
  );

  const reduceMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  if (reduceMotion) {
    return <div className="fixed inset-0 w-full h-full z-[-2] bg-bg0 pointer-events-none" />;
  }

  const starsCount = isMobile ? 1500 : 5000;
  const pFloat = isMobile ? 900 : 3000;
  const pStatic = isMobile ? 300 : 1000;

  return (
    <div className="fixed inset-0 w-full h-full z-[-2] bg-bg0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={isMobile ? 1 : [1, 1.5]}
      >
        <ambientLight intensity={0.5} />

        <Stars radius={100} depth={50} count={starsCount} factor={4} saturation={0} fade speed={0.7} />

        <Float speed={1.5} rotationIntensity={0.35} floatIntensity={0.35}>
          <ParticleField count={pFloat} />
        </Float>

        <ParticleField count={pStatic} />
      </Canvas>
    </div>
  );
};

export default GalaxyBackground;