<script setup lang="ts">
import NavBar from './components/layout/NavBar.vue'
import Hero from './components/ui/Hero.vue'
import Section from './components/ui/Section.vue'
import CardGrid from './components/ui/CardGrid.vue'
import Carousel from './components/ui/Carousel.vue'
import Footer from './components/layout/Footer.vue'
import Path from './components/ui/Path.vue'

import { robots, results, subteams } from './data'

const x = 5 // set X to the number of pictures you have
const files = Array.from({ length: x }, (_, i) => `picture${i + 1}.jpg`)
const images = files.map(f => `${import.meta.env.BASE_URL}carousel/${f}`)
</script>

<template>
  <NavBar />
  <Hero />

  <div class="relative mx-auto -mt-20 w-full " id="robots">
    <Path class="absolute left-1/2 -translate-x-1/2 hidden sm:block" v-for="i in [1,2,3,4]"
      :width="1500"
      color="var(--color-accent)"
      height="340"
      :speed="40 + i*10"
      cycles="2"
      :amplitude="20 + (i * 20 %40) * (i %2 ===0 ? 1 : -1)"
      :phaseDeg="i * 90"
    />
  </div>

  <div class="container mx-auto mt-40 relative mb-32">
    <!--<h2 class="text-center text-4xl font-bold -mb-48 text-ink">24–25 Robot</h2>-->
    <Carousel :images="images" class="mx-auto" />
  </div>

  <!--
  <Section id="results">
    <template #kicker>Competitions</template>
    <template #title>Results &amp; Highlights</template>
    <CardGrid
      :items="results"
      :title="r => r.event"
      :meta="r => `${r.date} • ${r.location}`"
      :body="r => `${r.placement} — ${r.note}`"
    />
  </Section>
  -->

  <Section id="sponsors">
    <template #kicker>Partners</template>
    <template #title>Sponsors &amp; Support</template>
    <div class="flex flex-wrap gap-4">
      <div class="w-64 transition-all hover:-translate-y-1 hover:from-accent/15 p-4 flex justify-center align-middle rounded-xl bg-gradient-to-b border from-[#0f1613] to-[#0c1411] border-[color-mix(in_srgb,var(--color-accent)_14%,transparent)]">
        <img class="w-96" src="/polymaker-full-logo.svg" alt="">
      </div>
      <div class="w-64 transition-all hover:-translate-y-1 hover:from-accent/15 p-4 flex justify-center align-middle rounded-xl bg-gradient-to-b border from-[#0f1613] to-[#0c1411] border-[color-mix(in_srgb,var(--color-accent)_14%,transparent)]">
        <img class="w-96" src="/dartmouth-engineering-logo.png" alt="">
      </div>
    </div>
  </Section>

  <Section id="team">
    <template #kicker>People</template>
    <template #title>Leadership &amp; Subteams</template>
    <CardGrid
      :items="subteams"
      :title="t => t.name"
      :body="t => t.description"
    />
  </Section>

  <Section id="join">
    <template #kicker>Get Involved</template>
    <template #title>Join the Team</template>
    <CardGrid
      :items="[
        /*{ title: 'Open Roles', body: 'Mechanical, embedded, controls, perception, ops, outreach.', link: '#' },*/
        { title: 'Meeting Times', body: 'Wednesdays & Sundays 8PM @ ESCS 116.' },
        { title: 'Contact', body: 'Instagram @dartmouth_robotics' },
      ]"
      :title="i => i.title"
      :body="i => i.body"
    />
  </Section>

  <Footer />
</template>
