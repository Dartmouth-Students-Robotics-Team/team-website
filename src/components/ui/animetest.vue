<!-- src/components/HelloAnime.vue -->
<template>
  <div class="wrap">
    <h1 ref="title">Hello, anime.js 👋</h1>
    <button @click="bounce">Bounce</button>
    <div class="dots">
      <span v-for="n in 8" :key="n" class="dot"></span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { anime } from 'animejs'

const title = ref(null)

onMounted(() => {
  // fade+slide in on mount
  anime({
    targets: title.value,
    translateY: [-20, 0],
    opacity: [0, 1],
    duration: 700,
    easing: 'easeOutQuad'
  })

  // stagger the dots
  anime({
    targets: '.dot',
    translateY: [20, 0],
    opacity: [0, 1],
    delay: anime.stagger(70, {start: 200}),
    duration: 500,
    easing: 'easeOutQuad'
  })
})

function bounce() {
  anime({
    targets: '.dot',
    scale: [
      { value: 1.2, duration: 150, easing: 'easeOutQuad' },
      { value: 1.0, duration: 250, easing: 'easeOutBack' }
    ],
    delay: anime.stagger(50)
  })
}
</script>

<style scoped>
.wrap { display: grid; gap: 12px; }
.dots { display: grid; grid-template-columns: repeat(8, 16px); gap: 8px; }
.dot { width: 16px; height: 16px; border-radius: 50%; background: currentColor; opacity: 0; }
</style>
