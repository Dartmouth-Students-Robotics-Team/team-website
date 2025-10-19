<script setup lang="ts">
type AnyRec = Record<string, any>
const props = defineProps<{
  items: AnyRec[]
  title: (x: AnyRec) => string
  meta?: (x: AnyRec) => string | undefined
  body?: (x: AnyRec) => string | undefined
  keyFn?: (x: AnyRec, i: number) => string | number
}>()
const keyFn = props.keyFn ?? ((_, i) => i)
const meta  = props.meta  ?? (() => '')
const body  = props.body  ?? (() => '')
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <article v-for="(item,i) in items" :key="keyFn(item,i)" class="card col-span-12 sm:col-span-6 lg:col-span-4 bg-gradient-to-b from-[#0f1613] to-[#0c1411] border border-[color-mix(in_srgb,var(--accent)_14%,transparent)] rounded-xl2 p-4 shadow-soft transition-transform duration-200 hover:-translate-y-[3px] hover:border-[color-mix(in_srgb,var(--accent)_35%,transparent)]" :style="{'--i': String(i)}">
      <div class="aspect-[16/10] rounded-xl border border-[color-mix(in_srgb,var(--accent)_18%,transparent)] grid place-items-center text-[12px] text-[#a2b7ad] bg-[#0a120f]">16:10 image placeholder</div>
      <h3 class="text-[18px] mt-2 mb-1 font-semibold">{{ title(item) }}</h3>
      <p v-if="meta(item)" class="text-xs text-[#a7b0aa]">{{ meta(item) }}</p>
      <p v-if="body(item)" class="text-sm text-[#a7b0aa]">{{ body(item) }}</p>
    </article>
  </div>
</template>