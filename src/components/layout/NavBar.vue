<template>
  <nav class="sticky top-0 z-50 backdrop-blur-md bg-surface/70 border-b border-border-subtle">
    <div class="container mx-auto flex items-center justify-between py-3">
      <a href="#top" class="flex items-center gap-2 text-ink">
        <Logo style="width: 24px; height: 24px"/>
        <h1 class="text-lg font-bold tracking-wide">Dartmouth Robotics</h1>
      </a>
      <ul class="gap-5 text-ink/85 text-sm hidden md:flex">
        <li><a href="#robots" class="hover:text-accent transition-colors">Robots</a></li>
        <!--<li><a href="#results" class="hover:text-accent transition-colors">Results</a></li>-->
        <li><a href="#sponsors" class="hover:text-accent transition-colors">Sponsors</a></li>
        <li><a href="#team" class="hover:text-accent transition-colors">Team</a></li>
        <li>
          <a href="#join" class="px-3 py-2 rounded-xl font-bold text-bg bg-gradient-to-b from-accent to-accent-dark">
            Join Us
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
