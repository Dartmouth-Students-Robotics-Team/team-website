<script setup lang="ts">
const nextCycle = 'Fall Build — Oct 28'
</script>

<template>
  <header id="top" class="mx-auto w-[min(1200px,92%)] pt-20 pb-14 relative overflow-hidden">
    <div class="grid lg:grid-cols-[1.15fr_.85fr] gap-10 items-center">
      <div class="reveal space-y-4">
        <!--<span class="inline-flex items-center gap-2 rounded-full px-3 py-2 bg-[#0d1713] border border-[color-mix(in_srgb,var(--accent)_20%,transparent)] text-sm">⚙️ Building, learning, competing</span>-->
        <h2 class="font-black leading-[1.02] tracking-tight text-[clamp(28px,4vw,56px)]">Robots, research, and community</h2>
        <p class="opacity-90 max-w-[56ch]">We’re the Dartmouth Student Robotics Team — Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquam sit magni dolorum maiores nihil. Saepe recusandae fugit ducimus accusantium inventore vel, molestiae culpa illo id, rerum aliquid, itaque optio?</p>
        <div class="flex gap-2 flex-wrap pt-1">
          <span class="border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] px-2.5 py-2 rounded-xl text-xs opacity-95">Autonomy</span>
          <span class="border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] px-2.5 py-2 rounded-xl text-xs opacity-95">Controls</span>
          <span class="border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] px-2.5 py-2 rounded-xl text-xs opacity-95">Perception</span>
          <span class="border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] px-2.5 py-2 rounded-xl text-xs opacity-95">Mechanical</span>
          <span class="border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] px-2.5 py-2 rounded-xl text-xs opacity-95">Electrical</span>
          <span class="border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] px-2.5 py-2 rounded-xl text-xs opacity-95">Software</span>
        </div>
      </div>
      <div class="hero-art reveal aspect-[1.1/1] rounded-xl2 border border-[color-mix(in_srgb,var(--accent)_16%,transparent)] shadow-soft bg-[radial-gradient(120%_120%_at_80%_0%,#103b2b_0%,#0c1512_55%,#070b09_92%)] relative">
        <div class="absolute right-[14%] bottom-[14%] bg-[color-mix(in_oklab,var(--color-dartmouth-green)_30%,black)] text-[#c2f3dc] px-3 py-2 rounded-xl border border-[color-mix(in_srgb,var(--accent)_40%,transparent)] shadow-md text-sm">Next Build Cycle: <strong>{{ nextCycle }}</strong></div>
      </div>
    </div>
  </header>
</template>