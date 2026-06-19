<template>
  <div class="bg-dark-800 rounded-3xl border border-dark-600 p-6 sm:p-8 space-y-6">
    <h3 class="text-xl font-display font-bold text-text-primary">玩偶信息</h3>

    <!-- Description -->
    <p class="text-text-secondary leading-relaxed text-sm">
      {{ figure.description }}
    </p>

    <!-- Detail grid -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-dark-600">
      <div>
        <span class="block text-xs text-text-muted mb-1">发布日期</span>
        <span class="text-sm text-text-primary font-semibold">{{ figure.releaseDate }}</span>
      </div>
      <div>
        <span class="block text-xs text-text-muted mb-1">所属系列</span>
        <span class="text-sm text-text-primary font-semibold">{{ seriesName }}</span>
      </div>
      <div>
        <span class="block text-xs text-text-muted mb-1">设计师</span>
        <span class="text-sm text-text-primary font-semibold">Kasing Lung</span>
      </div>
      <div>
        <span class="block text-xs text-text-muted mb-1">品牌</span>
        <span class="text-sm text-text-primary font-semibold">泡泡玛特 POP MART</span>
      </div>
    </div>

    <!-- Tags -->
    <div class="pt-4 border-t border-dark-600">
      <span class="block text-xs text-text-muted mb-3">标签</span>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in figure.tags"
          :key="tag"
          class="px-3 py-1 rounded-full text-xs font-display bg-dark-700 text-text-secondary border border-dark-600 hover:border-pink-400/30 hover:text-pink-300 transition-colors cursor-default"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSeries } from '@/composables/useSeries.js'

const props = defineProps({
  figure: { type: Object, required: true },
})

const { getSeriesBySlug } = useSeries()
const series = computed(() => getSeriesBySlug(props.figure.series))
const seriesName = computed(() => series.value?.nameCN || props.figure.series)
</script>
