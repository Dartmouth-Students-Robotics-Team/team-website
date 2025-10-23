<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
  <section :id="id" class="border-t border-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] py-18 md:py-20">
    <div class="container mx-auto">
      <p class="uppercase tracking-[.12em] text-sm text-muted"><slot name="kicker"/></p>
      <h2 class="font-extrabold text-[clamp(22px,2.4vw,30px)] text-accent mb-6"><slot name="title"/></h2>
      <slot />
    </div>
  </section>
</template>
