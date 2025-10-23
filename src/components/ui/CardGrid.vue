<script setup lang="ts">
type AnyRec = Record<string, any>
const props = defineProps<{
  items: AnyRec[]
  title: (x: AnyRec) => string
  src?: (x: AnyRec) => string | undefined
  meta?: (x: AnyRec) => string | undefined
  body?: (x: AnyRec) => string | undefined
  keyFn?: (x: AnyRec, i: number) => string | number
}>()

const keyFn = props.keyFn ?? ((_, i) => i)
const meta  = props.meta  ?? (() => '')
const body  = props.body  ?? (() => '')
const src   = props.src   ?? (() => '')
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <article
      v-for="(item, i) in items"
      :key="keyFn(item, i)"
      class="card col-span-12 sm:col-span-6 lg:col-span-4 bg-gradient-to-b from-[#0f1613] to-[#0c1411] border border-[color-mix(in_srgb,var(--color-accent)_14%,transparent)] rounded-xl2 p-4 shadow-soft transition-transform hover:-translate-y-1"
    >
      <img
        v-if="src(item)"
        :src="src(item)"
        class="aspect-[16/10] rounded-xl border border-[color-mix(in_srgb,var(--color-accent)_18%,transparent)] mb-3"
        alt=""
      />
      <h3 class="text-lg font-semibold text-ink">{{ title(item) }}</h3>
      <p v-if="meta(item)" class="text-xs text-muted">{{ meta(item) }}</p>
      <p v-if="body(item)" class="text-sm text-muted mt-1">{{ body(item) }}</p>
    </article>
  </div>
</template>
