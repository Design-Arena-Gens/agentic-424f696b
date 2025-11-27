"use client"

import { Canvas } from '@react-three/fiber'
import { Environment, Float, OrbitControls, PerspectiveCamera, Stars, useProgress } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { Suspense } from 'react'

function Loader() {
  const { progress } = useProgress()
  return (
    <div className="absolute inset-0 grid place-items-center text-textSecondary font-mono text-xs">
      Loading {progress.toFixed(0)}%
    </div>
  )
}

function FilmTorus() {
  return (
    <group>
      {/* Torus as a film-reel inspired loop */}
      <Float speed={1} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh castShadow receiveShadow>
          <torusKnotGeometry args={[1.2, 0.32, 256, 32, 2, 5]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0.9}
            roughness={0.2}
            envMapIntensity={1.2}
          />
        </mesh>
        {/* Accent glow ring */}
        <mesh>
          <torusGeometry args={[1.8, 0.005, 64, 256]} />
          <meshBasicMaterial color="#00D1FF" transparent opacity={0.6} />
        </mesh>
      </Float>
    </group>
  )
}

export function Hero3D() {
  return (
    <section className="relative h-[85svh] min-h-[560px] w-full overflow-hidden border-b border-white/10 background-grid">
      <div className="absolute inset-0 -z-0">
        <Suspense fallback={<Loader />}>
          <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
            <color attach="background" args={[0.02, 0.02, 0.02]} />
            <PerspectiveCamera makeDefault position={[0, 0.2, 4.2]} fov={60} />

            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
            <directionalLight position={[-5, -2, -3]} intensity={0.5} />

            <FilmTorus />

            <Stars radius={50} depth={30} count={800} factor={4} saturation={0} fade speed={0.6} />
            <Environment preset="city" />
            <EffectComposer>
              <Bloom intensity={0.5} luminanceThreshold={0.1} luminanceSmoothing={0.15} mipmapBlur />
              <Vignette eskil offset={0.1} darkness={0.6} />
            </EffectComposer>

            <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2.1} />
          </Canvas>
        </Suspense>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 h-full flex items-center">
        <div className="w-full">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="editorial-heading font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.95] tracking-tight"
          >
            JESHUA DAVID
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.05, ease: 'easeOut' }}
            className="mt-4 text-textSecondary max-w-xl"
          >
            <span className="font-mono text-textPrimary">Video Editor</span>
            <span className="mx-2 text-textSecondary">&</span>
            <span className="font-sans">Visual Storyteller crafting editorial, cinematic narratives.</span>
          </motion.p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
