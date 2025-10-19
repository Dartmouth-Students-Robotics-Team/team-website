<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import SectionShell from './components/SectionShell.vue'
import CardsGrid from './components/CardsGrid.vue'
import FooterBar from './components/FooterBar.vue'
import { robots, results, subteams } from './data'
</script>

<template>
  <NavBar />
  <HeroSection />

  <SectionShell id="robots">
    <template #kicker>Current &amp; Past</template>
    <template #title>Robots &amp; Projects</template>
    <CardsGrid :items="robots" :title="r=> r.name" :meta="r=> `${r.year} • ${r.track}`" :body="r=> r.summary" />
  </SectionShell>

  <SectionShell id="results">
    <template #kicker>Competitions</template>
    <template #title>Results &amp; Highlights</template>
    <CardsGrid :items="results" :title="r=> r.event" :meta="r=> `${r.date} • ${r.location}`" :body="r=> `${r.placement} — ${r.note}`" />
  </SectionShell>

  <SectionShell id="team">
    <template #kicker>People</template>
    <template #title>Leadership &amp; Subteams</template>
    <CardsGrid :items="subteams" :title="t=> t.name" :body="t=> t.description" />
  </SectionShell>

  <SectionShell id="sponsors">
    <template #kicker>Partners</template>
    <template #title>Sponsors &amp; Support</template>
    <div class="grid grid-cols-6 gap-2 reveal md:gap-3 max-md:grid-cols-3">
      <div v-for="i in 6" :key="i" class="opacity-70 p-3 rounded-lg border border-dashed border-[color-mix(in_srgb,var(--accent)_18%,transparent)] text-center">Logo</div>
    </div>
  </SectionShell>

  <SectionShell id="join">
    <template #kicker>Get Involved</template>
    <template #title>Join the Team</template>
    <div class="grid grid-cols-12 gap-4">
      <article class="card col-span-12 sm:col-span-6 lg:col-span-4 bg-gradient-to-b from-[#0f1613] to-[#0c1411] border border-[color-mix(in_srgb,var(--accent)_14%,transparent)] rounded-xl2 p-4 shadow-soft" style="--i:0">
        <h3 class="text-[18px] font-semibold mb-1">Open Roles</h3>
        <p class="text-[#a7b0aa]">Add a blurb and link to application or mailing list. Mechanical, embedded, controls, perception, ops, outreach.</p>
        <p class="pt-2"><a class="inline-block px-3 py-2 rounded-xl font-bold text-[#04120c] bg-gradient-to-b from-[var(--accent)] to-[#59c999]" href="#">Apply / Interest Form</a></p>
      </article>
      <article class="card col-span-12 sm:col-span-6 lg:col-span-4 bg-gradient-to-b from-[#0f1613] to-[#0c1411] border border-[color-mix(in_srgb,var(--accent)_14%,transparent)] rounded-xl2 p-4 shadow-soft" style="--i:1">
        <h3 class="text-[18px] font-semibold mb-1">Meeting Times</h3>
        <p class="text-[#a7b0aa]">List weekly build nights, standups, and lab locations. Include onboarding notes.</p>
      </article>
      <article class="card col-span-12 sm:col-span-6 lg:col-span-4 bg-gradient-to-b from-[#0f1613] to-[#0c1411] border-[color-mix(in_srgb,var(--accent)_14%,transparent)] border rounded-xl2 p-4 shadow-soft" style="--i:2">
        <h3 class="text-[18px] font-semibold mb-1">Contact</h3>
        <p class="text-[#a7b0aa]">Email, Discord, and socials. Add a note on how to sponsor or collaborate.</p>
      </article>
    </div>
  </SectionShell>

  <FooterBar />
</template>
