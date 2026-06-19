<template>
  <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-hero"></div>

    <!-- Animated dots -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        v-for="i in 20"
        :key="i"
        class="absolute rounded-full animate-pulse-glow"
        :style="{
          width: (4 + Math.random() * 8) + 'px',
          height: (4 + Math.random() * 8) + 'px',
          left: (Math.random() * 100) + '%',
          top: (Math.random() * 100) + '%',
          animationDelay: (Math.random() * 3) + 's',
          animationDuration: (2 + Math.random() * 3) + 's',
          backgroundColor: ['#f472b6', '#a78bfa', '#fbbf24'][Math.floor(Math.random() * 3)],
          opacity: 0.3 + Math.random() * 0.4,
        }"
      ></div>
    </div>

    <!-- Floating shapes -->
    <div class="absolute top-20 left-10 w-20 h-20 rounded-full border border-pink-400/10 animate-float opacity-40" style="animation-delay: 0s"></div>
    <div class="absolute bottom-32 right-16 w-28 h-28 rounded-full border border-lavender-400/10 animate-float opacity-30" style="animation-delay: 1.5s"></div>
    <div class="absolute top-1/3 right-1/4 w-12 h-12 rounded-full border border-gold-400/10 animate-float opacity-40" style="animation-delay: 0.8s"></div>

    <!-- Content -->
    <div class="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <div class="mb-6 inline-block">
        <span class="text-7xl animate-float">🧸</span>
      </div>
      <h1 class="text-5xl sm:text-7xl font-display font-bold text-gradient-pink mb-6 tracking-tight">
        Labubu 收藏馆
      </h1>
      <p class="text-lg sm:text-xl text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
        探索泡泡玛特最可爱的精灵玩偶世界
        <br />
        <span class="text-text-muted text-base">每一只精灵，都是独一无二的陪伴</span>
      </p>
      <router-link
        to="/catalog"
        class="inline-flex items-center gap-2 px-8 py-4 bg-pink-400 hover:bg-pink-300 text-white rounded-full font-display font-bold text-lg transition-all duration-300 hover:shadow-glow-pink hover:scale-105 active:scale-95"
      >
        探索图鉴
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </router-link>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </section>
</template>
