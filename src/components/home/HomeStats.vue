<template>
  <section class="py-16 sm:py-20">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-dark-800 rounded-3xl border border-dark-600 p-8 sm:p-12">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center"
          >
            <div class="text-3xl mb-2">{{ stat.icon }}</div>
            <div class="text-3xl sm:text-4xl font-display font-bold text-gradient-pink mb-1">
              {{ stat.value }}+
            </div>
            <div class="text-sm text-text-muted font-display">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFigures } from '@/composables/useFigures.js'
import { useSeries } from '@/composables/useSeries.js'

const { getFigureCount, getSecretCount } = useFigures()
const { seriesList } = useSeries()

const stats = [
  { icon: '📚', value: seriesList.value.length, label: '收录系列' },
  { icon: '🧸', value: getFigureCount().value, label: '收录玩偶' },
  { icon: '⭐', value: getSecretCount().value, label: '隐藏款' },
  { icon: '💝', value: '300', label: '全球粉丝' },
]
</script>
