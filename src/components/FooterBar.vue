<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-10 text-[#bcd3c9] text-sm bg-gradient-to-b from-[#0f1613] to-[#0c1411] border border-[color-mix(in_srgb,var(--accent)_14%,transparent)]">
    <div class="mx-auto w-[min(1200px,92%)] text-right space-y-1 flex justify-between">
      <p>© {{ year }} Dartmouth Student Robotics Team • Hanover, NH</p>
      <p><a href="#top" class="underline decoration-dashed">Back to top ↑</a></p>
    </div>
  </footer>
</template>