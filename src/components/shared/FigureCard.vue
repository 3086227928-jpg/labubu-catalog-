<template>
  <router-link
    :to="`/figure/${figure.id}`"
    class="group block bg-dark-800 rounded-2xl overflow-hidden border border-dark-600 hover:border-pink-400/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
  >
    <!-- Image container -->
    <div class="relative aspect-square bg-dark-700 overflow-hidden">
      <div
        class="absolute inset-0 flex items-center justify-center text-6xl select-none"
        :style="{ backgroundColor: placeholderBg }"
      >
        <span v-if="!figure.image || figure.image.includes('placeholder')" class="opacity-30">
          {{ figure.nameCN.charAt(0) }}
        </span>
        <img
          v-else
          :src="figure.image"
          :alt="figure.nameCN"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <!-- Rarity badge top-right -->
      <div class="absolute top-3 right-3">
        <RarityBadge :rarity="figure.rarity" />
      </div>
      <!-- Secret glow overlay -->
      <div
        v-if="figure.isSecret"
        class="absolute inset-0 bg-gradient-to-t from-pink-400/10 via-transparent to-transparent pointer-events-none"
      ></div>
    </div>

    <!-- Info -->
    <div class="p-4">
      <h3 class="font-display font-semibold text-text-primary text-base group-hover:text-pink-300 transition-colors">
        {{ figure.nameCN }}
      </h3>
      <p class="text-xs text-text-muted mt-0.5 mb-3">{{ figure.nameEN }}</p>
      <PriceDisplay
        :retail-price="figure.retailPrice"
        :market-low="figure.marketPriceLow"
        :market-high="figure.marketPriceHigh"
      />
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import RarityBadge from './RarityBadge.vue'
import PriceDisplay from './PriceDisplay.vue'

const props = defineProps({
  figure: { type: Object, required: true },
})

const placeholderBg = computed(() => {
  const colors = {
    'exciting-macaron': '#f472b620',
    'have-a-seat': '#a78bfa20',
    'fall-in-wild': '#fbbf2420',
    'coca-cola': '#ef444420',
    'wings-of-fortune': '#c084fc20',
    'time-to-chill': '#34d39920',
    'lets-checkmate': '#a78bfa20',
    'hide-and-seek': '#f9731620',
    'good-luck-to-you': '#fbbf2420',
  }
  return colors[props.figure.series] || '#242438'
})
</script>
