<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'

type Num = number

const props = withDefaults(defineProps<{
  width?: Num          // SVG width (px)
  height?: Num         // SVG height (px)
  amplitude?: Num      // peak offset from midline (px)
  cycles?: Num         // number of full rotations across width
  samples?: Num        // how many sample points to use
  strokeWidth?: Num
  phaseDeg?: Num       // starting phase in degrees (0 => start at 0°, rising)
  color?: string       // starting phase in degrees (0 => start at 0°, rising)
  speed?: Num          // degrees per second
}>(), {
  width: 800,
  height: 200,
  amplitude: 60,
  cycles: 1,
  samples: 128,        // increase for higher fidelity
  strokeWidth: 3,
  phaseDeg: 0,
  color: 'var(--color-accent)',
  speed: 100
})

const angleDeg = ref(0)          // current angle

let raf: number | null = null
let lastTs = 0

// drag state
let dragLastX = 0

function loop(ts: number) {
  if (lastTs === 0) lastTs = ts
  const dt = (ts - lastTs) / 1000
  lastTs = ts

  // target speed:
  const base = props.speed

  angleDeg.value += base * dt

  raf = requestAnimationFrame(loop)
}

function stopLoop() {
  if (raf !== null) cancelAnimationFrame(raf)
  raf = null
  lastTs = 0
}

onMounted(() => { raf = requestAnimationFrame(loop) })
onBeforeUnmount(stopLoop)
const screenSize = ref<{ width: number; height: number }>({
  width: typeof window !== 'undefined' ? window.innerWidth : props.width,
  height: typeof window !== 'undefined' ? window.innerHeight : props.height,
})

function updateScreenSize() {
  if (typeof window === 'undefined') return
  screenSize.value.width = window.innerWidth
  screenSize.value.height = window.innerHeight
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateScreenSize)
  }
})
const viewBox = computed(() => `0 0 ${screenSize.value.width} ${props.height}`)

// Build sample points using real trig
const points = computed(() => {
  const { width: W, height: H, amplitude: A, cycles, samples, phaseDeg } = props
  const Yc = H / 2
  const phase = ((angleDeg.value + phaseDeg) * Math.PI) / 180
  const pts: Array<[number, number]> = []
  for (let i = 0; i <= samples; i++) {
    const x = (i / samples) * W
    const theta = (2 * Math.PI * cycles * x) / W + phase
    const theta2 = (2 * Math.PI * 1 * x) / W + 179
    // SVG y axis points down; subtract to make positive sin go visually upward
    const y = (Yc - A * Math.sin(theta) + (140 * Math.sin(theta2)) )
    pts.push([x, y])
  }
  return pts
})

// Catmull–Rom → Cubic Bézier (centripetal-ish, tension=1)
function catmullRomToBezierPath(pts: Array<[number, number]>): string {
  if (pts.length < 2) return ''
  const p = pts
  // duplicate endpoints for natural end tangents
  const get = (i: number) => p[Math.max(0, Math.min(p.length - 1, i))]
  let d = `M ${p[0][0].toFixed(3)},${p[0][1].toFixed(3)}`
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = get(i - 1), p1 = get(i), p2 = get(i + 1), p3 = get(i + 2)
    // control points
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C ${c1x.toFixed(3)},${c1y.toFixed(3)} ${c2x.toFixed(3)},${c2y.toFixed(3)} ${p2[0].toFixed(3)},${p2[1].toFixed(3)}`
  }
  return d
}

const pathD = computed(() => catmullRomToBezierPath(points.value))
</script>

<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Sine wave"
  >
    <path
      :d="pathD"
      fill="none"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
