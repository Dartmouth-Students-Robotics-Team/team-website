<script setup lang="ts">
const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#6CE0A9'
</script>

<template>
  <nav class="sticky top-0 z-50 backdrop-saturate-150 backdrop-blur bg-dartmouth-panel/70 border-b border-[color-mix(in_oklch,var(--accent)_15%,transparent)]">
    <div class="mx-auto w-[min(1200px,92%)] flex items-center justify-between py-3">
      <a href="#top" class="flex items-center gap-2" aria-label="Home">
        <svg viewBox="0 0 24 24" class="size-7" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="10" :stroke="accent" stroke-width="1.5"/>
          <path d="M7 13h10M9 9l3 8 3-8" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <h1 class="text-[18px] font-bold tracking-wide">Dartmouth Student Robotics</h1>
      </a>
      <div class="flex items-center gap-5 text-white/85">
        <a href="#robots" class="hover:opacity-100 opacity-85">Robots</a>
        <a href="#results" class="hover:opacity-100 opacity-85">Results</a>
        <a href="#team" class="hover:opacity-100 opacity-85">Team</a>
        <a href="#sponsors" class="hover:opacity-100 opacity-85">Sponsors</a>
        <a href="#join" class="px-3 py-2 rounded-xl font-bold text-[#04120c] bg-gradient-to-b from-[var(--accent)] to-[#59c999]">Join Us</a>
      </div>
    </div>
  </nav>
</template>