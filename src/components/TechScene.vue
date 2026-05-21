<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as THREE from 'three'

const canvasRef = ref(null)

let animationId = 0
let renderer
let scene
let camera
let particles
let rings = []
let scanner
let resizeObserver

const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const createParticles = () => {
  const count = 520
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const colorA = new THREE.Color('#4cc9f0')
  const colorB = new THREE.Color('#35f6c7')
  const colorC = new THREE.Color('#ec4899')

  for (let index = 0; index < count; index += 1) {
    const i = index * 3
    positions[i] = (Math.random() - 0.5) * 18
    positions[i + 1] = (Math.random() - 0.5) * 10
    positions[i + 2] = -Math.random() * 6

    const mixedColor = colorA.clone().lerp(index % 7 === 0 ? colorC : colorB, Math.random() * 0.8)
    colors[i] = mixedColor.r
    colors[i + 1] = mixedColor.g
    colors[i + 2] = mixedColor.b
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const material = new THREE.PointsMaterial({
    size: 0.032,
    transparent: true,
    opacity: 0.72,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })

  return new THREE.Points(geometry, material)
}

const createRing = (radius, color, opacity) => {
  const points = []
  const segments = 160

  for (let index = 0; index <= segments; index += 1) {
    const angle = (index / segments) * Math.PI * 2
    points.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0))
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points)
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })

  return new THREE.LineLoop(geometry, material)
}

const createScanner = () => {
  const shape = new THREE.Shape()
  const radius = 2.8
  const sweep = Math.PI * 0.26
  shape.moveTo(0, 0)
  shape.absarc(0, 0, radius, -sweep / 2, sweep / 2, false)
  shape.lineTo(0, 0)

  const geometry = new THREE.ShapeGeometry(shape)
  const material = new THREE.MeshBasicMaterial({
    color: '#4cc9f0',
    transparent: true,
    opacity: 0.16,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  })

  return new THREE.Mesh(geometry, material)
}

const resize = () => {
  if (!renderer || !camera) {
    return
  }

  const width = window.innerWidth
  const height = window.innerHeight
  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

const animate = () => {
  const elapsed = performance.now() * 0.001

  if (particles) {
    particles.rotation.y = elapsed * 0.025
    particles.rotation.x = Math.sin(elapsed * 0.22) * 0.04

    const positions = particles.geometry.attributes.position
    for (let index = 0; index < positions.count; index += 1) {
      const currentY = positions.getY(index)
      const nextY = currentY + 0.0025
      positions.setY(index, nextY > 5 ? -5 : nextY)
    }
    positions.needsUpdate = true
  }

  rings.forEach((ring, index) => {
    const pulse = 1 + Math.sin(elapsed * 1.4 + index) * 0.035
    ring.scale.setScalar(pulse)
    ring.material.opacity = 0.1 + Math.abs(Math.sin(elapsed * 0.9 + index)) * 0.18
  })

  if (scanner) {
    scanner.rotation.z = elapsed * 0.75
  }

  renderer.render(scene, camera)
  animationId = window.requestAnimationFrame(animate)
}

onMounted(() => {
  if (!canvasRef.value) {
    return
  }

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(0, 0, 8)

  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
  resize()

  particles = createParticles()
  scene.add(particles)

  rings = [
    createRing(1.5, '#4cc9f0', 0.22),
    createRing(2.25, '#35f6c7', 0.16),
    createRing(3.1, '#ec4899', 0.1),
  ]
  rings.forEach((ring) => scene.add(ring))

  scanner = createScanner()
  scene.add(scanner)

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(document.body)
  window.addEventListener('resize', resize)

  if (!prefersReducedMotion()) {
    animate()
  } else {
    renderer.render(scene, camera)
  }
})

onBeforeUnmount(() => {
  window.cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
  resizeObserver?.disconnect()

  particles?.geometry.dispose()
  particles?.material.dispose()
  rings.forEach((ring) => {
    ring.geometry.dispose()
    ring.material.dispose()
  })
  scanner?.geometry.dispose()
  scanner?.material.dispose()
  renderer?.dispose()
})
</script>

<template>
  <canvas ref="canvasRef" class="tech-scene" aria-hidden="true" />
</template>
