<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-10 text-muted text-sm bg-gradient-to-b from-[#0f1613] to-[#0c1411] border-t border-[color-mix(in_srgb,var(--color-accent)_14%,transparent)]">
    <div class="container mx-auto flex justify-between items-center">
      <p>© {{ year }} Dartmouth Student Robotics • Hanover, NH</p>
      <p><a href="#top" class="underline decoration-dashed">Back to top ↑</a></p>
    </div>
  </footer>
</template>
