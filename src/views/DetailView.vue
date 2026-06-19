<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <!-- 404 State -->
    <div v-if="!figure" class="flex flex-col items-center justify-center py-24 text-center">
      <div class="text-7xl mb-6 animate-float">🔍</div>
      <h2 class="text-2xl font-display font-bold text-text-primary mb-2">
        精灵走丢了...
      </h2>
      <p class="text-text-secondary mb-8">
        这只 Labubu 可能藏到了别的地方，不如去图鉴里找找？
      </p>
      <router-link
        to="/catalog"
        class="px-6 py-3 bg-pink-400 hover:bg-pink-300 text-white rounded-full font-display font-semibold transition-all duration-300 hover:shadow-glow-pink"
      >
        返回图鉴
      </router-link>
    </div>

    <!-- Detail content -->
    <template v-else>
      <!-- Hero section -->
      <section class="mb-12">
        <FigureHero :figure="figure" />
      </section>

      <!-- Info + Price -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <FigureInfo :figure="figure" />
        <PriceTrend :figure="figure" />
      </div>

      <!-- Related figures -->
      <section v-if="relatedFigures.length > 0" class="pb-8">
        <RelatedFigures
          :related="relatedFigures"
          :series-slug="figure.series"
        />
      </section>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFigures } from '@/composables/useFigures.js'
import FigureHero from '@/components/figure/FigureHero.vue'
import FigureInfo from '@/components/figure/FigureInfo.vue'
import PriceTrend from '@/components/figure/PriceTrend.vue'
import RelatedFigures from '@/components/figure/RelatedFigures.vue'

const props = defineProps({
  id: { type: String, required: true },
})

const { getFigureById, getRelatedFigures } = useFigures()

const figure = computed(() => getFigureById(props.id).value)

const relatedFigures = computed(() => {
  if (!figure.value) return []
  return getRelatedFigures(props.id, figure.value.series, 4).value
})
</script>
