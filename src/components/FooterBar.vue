<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-10 text-[#bcd3c9] text-sm">
    <div class="mx-auto w-[min(1200px,92%)] text-right space-y-1">
      <p>© {{ year }} Dartmouth Student Robotics Team • Hanover, NH</p>
      <p class="opacity-80">Vue + Tailwind v4 site with scroll‑linked animations via <code>view()</code>.</p>
      <p><a href="#top" class="underline decoration-dashed">Back to top ↑</a></p>
    </div>
  </footer>
</template>