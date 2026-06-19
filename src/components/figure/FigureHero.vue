<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
    <!-- Image -->
    <div class="relative aspect-square bg-dark-700 rounded-3xl overflow-hidden border border-dark-600 shadow-card">
      <div
        class="absolute inset-0 flex items-center justify-center text-9xl select-none"
        :style="{ backgroundColor: placeholderBg }"
      >
        <span class="opacity-20">{{ figure.nameCN.charAt(0) }}</span>
      </div>
      <!-- Secret badge -->
      <div
        v-if="figure.isSecret"
        class="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-pink-400/90 to-lavender-400/90 text-white rounded-full text-sm font-display font-bold shadow-glow-pink"
      >
        ⭐ 隐藏款
      </div>
    </div>

    <!-- Quick info -->
    <div class="flex flex-col justify-center">
      <router-link
        to="/catalog"
        class="inline-flex items-center gap-1 text-text-muted hover:text-pink-300 text-sm mb-6 transition-colors group"
      >
        <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        返回图鉴
      </router-link>

      <h1 class="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-2">
        {{ figure.nameCN }}
      </h1>
      <p class="text-lg text-text-secondary mb-4">{{ figure.nameEN }}</p>

      <div class="flex items-center gap-3 mb-6">
        <RarityBadge :rarity="figure.rarity" />
        <SeriesTag
          :active="true"
          :dot="true"
          :accent-color="seriesColor"
        >
          {{ seriesName }}
        </SeriesTag>
      </div>

      <div class="bg-dark-800 rounded-2xl p-5 border border-dark-600">
        <PriceDisplay
          :retail-price="figure.retailPrice"
          :market-low="figure.marketPriceLow"
          :market-high="figure.marketPriceHigh"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import RarityBadge from '@/components/shared/RarityBadge.vue'
import SeriesTag from '@/components/shared/SeriesTag.vue'
import PriceDisplay from '@/components/shared/PriceDisplay.vue'
import { useSeries } from '@/composables/useSeries.js'

const props = defineProps({
  figure: { type: Object, required: true },
})

const { getSeriesBySlug } = useSeries()
const series = computed(() => getSeriesBySlug(props.figure.series))

const seriesName = computed(() => series.value?.nameCN || props.figure.series)
const seriesColor = computed(() => series.value?.color || '#f472b6')

const placeholderBg = computed(() => {
  const colors = {
    'exciting-macaron': '#f472b618',
    'have-a-seat': '#a78bfa18',
    'fall-in-wild': '#fbbf2418',
    'coca-cola': '#ef444418',
    'wings-of-fortune': '#c084fc18',
    'time-to-chill': '#34d39918',
    'lets-checkmate': '#a78bfa18',
    'hide-and-seek': '#f9731618',
    'good-luck-to-you': '#fbbf2418',
  }
  return colors[props.figure.series] || '#242438'
})
</script>
