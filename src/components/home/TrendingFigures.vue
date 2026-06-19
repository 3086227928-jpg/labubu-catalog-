<template>
  <section class="py-16 sm:py-24 bg-dark-800/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-3">
          🔥 热款精灵
        </h2>
        <p class="text-text-secondary">当下最受追捧的 Labubu 玩偶</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <ScrollReveal
          v-for="(figure, index) in trendingFigures"
          :key="figure.id"
          :style="{ transitionDelay: index * 80 + 'ms' }"
        >
          <FigureCard :figure="figure" />
        </ScrollReveal>
      </div>

      <div class="text-center mt-10">
        <router-link
          to="/catalog"
          class="inline-flex items-center gap-2 px-6 py-3 border border-pink-400/30 text-pink-300 hover:text-white hover:bg-pink-400/10 rounded-full font-display font-semibold text-sm transition-all duration-300"
        >
          查看全部图鉴
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFigures } from '@/composables/useFigures.js'
import homepageData from '@/data/homepage.json'
import FigureCard from '@/components/shared/FigureCard.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'

const { getFiguresByIds } = useFigures()
const trendingFigures = getFiguresByIds(homepageData.trendingFigureIds)
</script>
