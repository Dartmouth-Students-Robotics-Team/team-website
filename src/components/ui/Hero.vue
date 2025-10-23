<script setup lang="ts">
const nextCycle = 'Fall Build — Oct 28'
const tags = ['Autonomy', 'Controls', 'Perception', 'Mechanical', 'Electrical', 'Software']
</script>

<template>
  <header id="top" class="container mx-auto pt-20 pb-14 relative">
    <div class="grid lg:grid-cols-[1.15fr_.85fr] gap-10 items-center">
      <div class="space-y-4">
        <h2 class="font-black text-ink leading-tight tracking-tight text-[clamp(28px,4vw,56px)]">
          Robots, research, and community
        </h2>
        <p class="text-muted max-w-[56ch]">
          We’re the Dartmouth Student Robotics Team — building innovative robots...
        </p>
        <div class="flex flex-wrap gap-2 pt-1 text-xs">
          <span
            v-for="tag in tags"
            :key="tag"
            class="border border-[var(--color-accent-border)] text-muted text-xs px-2.5 py-2 rounded-xl"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="aspect-[1.1/1] rounded-xl2 border border-[color-mix(in_srgb,var(--accent)_16%,transparent)] shadow-soft bg-[radial-gradient(120%_120%_at_80%_0%,#103b2b_0%,#0c1512_55%,#070b09_92%)] relative">
        <div class="absolute right-[14%] bottom-[14%] text-[#c2f3dc] px-3 py-2 rounded-xl border border-[color-mix(in_srgb,var(--accent)_40%,transparent)] shadow-md text-sm bg-[color-mix(in_oklab,var(--color-dartmouth-green)_30%,black)]">
          Next Build Cycle: <strong>{{ nextCycle }}</strong>
        </div>
      </div>
    </div>
  </header>
</template>
