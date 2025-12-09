<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white flex flex-col relative overflow-hidden font-sans selection:bg-brand-primary selection:text-white">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div class="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div class="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-purple/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
    </div>

    <main class="flex-grow flex flex-col items-center justify-center z-10 p-6 relative">
      <div 
        class="transition-all duration-1000 transform flex flex-col items-center text-center max-w-5xl mx-auto"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <div class="mb-12 relative group">
          <div class="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <img src="/banner.svg" alt="Servling" class="h-24 md:h-32 w-auto relative z-10 drop-shadow-xl" />
        </div>

        <h1 class="font-display text-6xl md:text-8xl font-bold mb-10 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent tracking-tight leading-tight">
          Self-Hosting. <br/> <span class="bg-gradient-to-r from-brand-purple to-brand-primary bg-clip-text text-transparent">Simplified.</span>
        </h1>

        <p class="text-gray-400 text-lg md:text-2xl max-w-3xl leading-relaxed mb-12">
          The modern fullstack platform for managing your Docker containers, services, and deployments. Servling orchestrates your infrastructure so you can focus on shipping.
        </p>

        <div class="flex flex-col items-center gap-6 mt-4">
          <NuxtLink 
            to="https://github.com/servling"
            external
            class="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-gray-200 font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <div class="i-carbon-logo-github text-2xl" />
            <span class="text-lg">Check it out on GitHub</span>
          </NuxtLink>
          
          <span class="text-xs font-medium text-gray-500 tracking-widest uppercase opacity-60">
            Work in Progress
          </span>
        </div>

      </div>
    </main>

    <footer class="w-full p-6 z-10">
      <div 
        class="flex flex-col items-center justify-center text-sm text-gray-600 max-w-7xl mx-auto border-t border-white/5 pt-6 transition-all duration-1000 delay-500"
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
@keyframes pulse-slow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}
.animate-pulse-slow {
  animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
