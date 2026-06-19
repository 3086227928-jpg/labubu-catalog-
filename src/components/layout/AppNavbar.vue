<template>
  <nav class="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-lg border-b border-dark-600/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 group">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-400 to-lavender-400 flex items-center justify-center text-white text-lg shadow-glow-pink">
            L
          </div>
          <span class="font-display font-bold text-lg text-text-primary group-hover:text-pink-300 transition-colors">
            Labubu
          </span>
        </router-link>

        <!-- Desktop links -->
        <div class="hidden md:flex items-center gap-1">
          <router-link
            to="/"
            class="px-4 py-2 rounded-xl text-sm font-display font-semibold text-text-secondary hover:text-pink-300 hover:bg-dark-700/50 transition-all duration-200"
            :class="{ 'text-pink-300 bg-dark-700/30': $route.path === '/' }"
          >
            首页
          </router-link>
          <router-link
            to="/catalog"
            class="px-4 py-2 rounded-xl text-sm font-display font-semibold text-text-secondary hover:text-pink-300 hover:bg-dark-700/50 transition-all duration-200"
            :class="{ 'text-pink-300 bg-dark-700/30': $route.path.startsWith('/catalog') }"
          >
            图鉴
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <button
          class="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-dark-700 transition-colors"
          @click="menuOpen = !menuOpen"
        >
          <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <transition name="slide-down">
        <div v-if="menuOpen" class="md:hidden pb-4 flex flex-col gap-1">
          <router-link
            to="/"
            class="px-4 py-3 rounded-xl text-sm font-display font-semibold text-text-secondary hover:text-pink-300 hover:bg-dark-700/50 transition-all"
            :class="{ 'text-pink-300 bg-dark-700/30': $route.path === '/' }"
            @click="menuOpen = false"
          >
            🏠 首页
          </router-link>
          <router-link
            to="/catalog"
            class="px-4 py-3 rounded-xl text-sm font-display font-semibold text-text-secondary hover:text-pink-300 hover:bg-dark-700/50 transition-all"
            :class="{ 'text-pink-300 bg-dark-700/30': $route.path.startsWith('/catalog') }"
            @click="menuOpen = false"
          >
            📚 图鉴
          </router-link>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
