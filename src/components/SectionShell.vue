<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
  <section :id="id" class="border-t border-[color-mix(in_srgb,var(--accent)_10%,transparent)] py-18 md:py-20">
    <div class="mx-auto w-[min(1200px,92%)]">
      <p class="uppercase tracking-[.12em] text-sm text-[#a7b0aa] reveal"><slot name="kicker"/></p>
      <h2 class="font-extrabold text-[clamp(22px,2.4vw,30px)] mt-1 mb-2 reveal"><slot name="title"/></h2>
      <slot />
    </div>
  </section>
</template>
