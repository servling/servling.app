<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<template>
  <div class="relative min-h-full flex flex-col overflow-hidden bg-[#0a0a0a] text-white font-sans selection:bg-brand-primary selection:text-white">
    <div class="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
      <div class="animate-pulse-slow absolute left-[-10%] top-[-20%] h-[50%] w-[50%] rounded-full bg-brand-primary/20 blur-[120px]" />
      <div class="animate-pulse-slow absolute bottom-[-20%] right-[-10%] h-[50%] w-[50%] rounded-full bg-brand-purple/20 blur-[120px] delay-1000" />
    </div>

    <main class="relative z-10 flex flex-grow flex-col items-center justify-center p-4 md:p-6">
      <div
        class="mx-auto max-w-5xl flex flex-col transform items-center text-center transition-all duration-1000"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <div class="group relative mb-6 md:mb-12">
          <div class="absolute inset-0 rounded-full bg-brand-primary/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
          <img src="/banner.svg" alt="Servling" class="relative z-10 h-24 w-auto drop-shadow-xl md:h-32">
        </div>

        <h1 class="mb-8 from-white to-gray-400 bg-gradient-to-r bg-clip-text text-5xl text-transparent font-bold leading-tight tracking-tight font-display md:text-7xl text-white">
          Self-Hosting. <br> <span class="from-brand-purple to-brand-primary bg-gradient-to-r bg-clip-text text-transparent">Simplified.</span>
        </h1>

        <p class="mb-12 max-w-3xl text-lg text-gray-400 leading-relaxed md:text-2xl">
          The complete zero-config self-hosting platform.
        </p>

        <div class="mt-4 flex flex-col items-center gap-6">
          <NuxtLink
            to="https://github.com/servling"
            external
            class="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all active:scale-95 hover:scale-105 hover:bg-gray-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <Icon name="carbon:logo-github" size="24" />
            <span class="text-lg">Check it out on GitHub</span>
          </NuxtLink>

          <span class="text-xs text-gray-500 font-medium tracking-widest uppercase opacity-60">
            Work in Progress
          </span>
        </div>
      </div>
    </main>

    <footer class="z-10 w-full p-6">
      <div
        class="mx-auto max-w-7xl flex flex-col items-center justify-center border-t border-white/5 pt-6 text-sm text-gray-600 transition-all duration-1000 delay-500"
        :class="isLoaded ? 'opacity-100' : 'opacity-0'"
      >
        <div class="flex items-center gap-2">
          <span>&copy; {{ new Date().getFullYear() }} Servling. All rights reserved.</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
html, body, #__nuxt {
  height: 100%;
  margin: 0;
  padding: 0;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}
.animate-pulse-slow {
  animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
