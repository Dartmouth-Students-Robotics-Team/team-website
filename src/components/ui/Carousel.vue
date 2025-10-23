<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'

type StrArr = string[]

const props = withDefaults(defineProps<{
  images: StrArr
  alts?: StrArr
  radius?: number
  width?: number
  height?: number
  gapDeg?: number
  perspective?: number
  speedDegPerSec?: number   // base rotation speed (+ clockwise)
  hoverStopTau?: number     // seconds time-constant to ease speed → 0 on hover
  resumeTau?: number        // seconds time-constant to ease speed → base when leaving hover
  dragDegPerPx?: number     // degrees rotated per horizontal px drag
}>(), {
  alts: () => [],
  radius: 280,
  width: 320,
  height: 200,
  gapDeg: 0,
  perspective: 1000,
  speedDegPerSec: 12,
  hoverStopTau: 0.6,
  resumeTau: 1.0,
  dragDegPerPx: 0.35,
})

const N = computed(() => Math.max(1, props.images.length))
const stepDeg = computed(() => (360 / N.value) + props.gapDeg)

const angleDeg = ref(0)          // current angle
const omega = ref(props.speedDegPerSec) // current angular velocity (deg/s)
const hovering = ref(false)
const isDragging = ref(false)

let raf: number | null = null
let lastTs = 0

// drag state
let dragLastX = 0

function loop(ts: number) {
  if (lastTs === 0) lastTs = ts
  const dt = (ts - lastTs) / 1000
  lastTs = ts

  // target speed:
  const base = props.speedDegPerSec
  const target = (hovering.value || isDragging.value || N.value <= 1) ? 0 : base

  // exponential ease of omega toward target
  const tau = (target === 0) ? Math.max(0.001, props.hoverStopTau)
                             : Math.max(0.001, props.resumeTau)
  const alpha = 1 - Math.exp(-dt / tau)  // 0..1
  omega.value += (target - omega.value) * alpha

  // integrate rotation only if not dragging (drag directly changes angle)
  if (!isDragging.value) {
    angleDeg.value += omega.value * dt
  }

  raf = requestAnimationFrame(loop)
}

function stopLoop() {
  if (raf !== null) cancelAnimationFrame(raf)
  raf = null
  lastTs = 0
}

function onPointerDown(e: PointerEvent) {
  if (e.button !== undefined && e.button !== 0) return
  isDragging.value = true
  dragLastX = e.clientX
  const el = e.currentTarget as HTMLElement
  el.setPointerCapture?.(e.pointerId)
  e.preventDefault()
}

function onPointerMove(e: PointerEvent) {
  if (!isDragging.value) return
  const x = e.clientX
  const dx = x - dragLastX
  dragLastX = x
  // rotate ring by drag amount (flip sign if you prefer opposite direction)
  angleDeg.value += dx * props.dragDegPerPx
}

function onPointerUp(e: PointerEvent) {
  if (!isDragging.value) return
  isDragging.value = false
  const el = e.currentTarget as HTMLElement
  el.releasePointerCapture?.(e.pointerId)
}

onMounted(() => { raf = requestAnimationFrame(loop) })
onBeforeUnmount(stopLoop)
</script>

<template>
  <div class="carousel3d">
    <div
      class="scene"
      :style="{ perspective: props.perspective + 'px' }"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
      @pointerleave="onPointerUp"
    >
      <div
        class="ring"
        :style="{
          transform: `translateZ(${-props.radius}px) rotateY(${angleDeg}deg)`,
          transition: 'none'
        }"
      >
        <figure
          v-for="(src, i) in props.images"
          :key="i"
          class="panel"
          :style="{
            transform: `rotateY(${i * stepDeg}deg) translateZ(${props.radius}px)`,
            width: props.width + 'px',
            height: props.height + 'px',
          }"
          role="group"
          :aria-label="`Slide ${i + 1} of ${props.images.length}`"
        >
          <img :src="src" :alt="props.alts?.[i] ?? ''" draggable="false" />
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel3d {
  position: relative;
  width: fit-content;
  margin: 0 auto;
  user-select: none;
}

.scene {
  width: 100%;
  height: 100%;
  perspective-origin: 50% 50%;
  touch-action: pan-y; /* keep vertical scroll; horizontal goes to pointer events */
  cursor: grab;
}
.scene:active { cursor: grabbing; }

.ring {
  position: relative;
  transform-style: preserve-3d;
  display: grid;
  place-items: center;
  min-width: 1px;
  min-height: 1px;
  will-change: transform;
}

.panel {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-style: preserve-3d;
  translate: -50% -50%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,.35);
  background: #0b1210;
  border: 1px solid color-mix(in oklab, var(--color-accent, #48cfae) 18%, transparent);
}

.panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
}
</style>
