<template>
  <div class="bg-dark-800 rounded-3xl border border-dark-600 p-6 sm:p-8">
    <h3 class="text-xl font-display font-bold text-text-primary mb-6">价格走势</h3>

    <div class="space-y-6">
      <!-- Retail vs Market comparison -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-dark-700 rounded-2xl p-4 text-center">
          <span class="block text-xs text-text-muted mb-1">官方零售价</span>
          <span class="text-2xl font-display font-bold text-text-primary">
            ¥{{ figure.retailPrice }}
          </span>
        </div>
        <div class="bg-dark-700 rounded-2xl p-4 text-center">
          <span class="block text-xs text-text-muted mb-1">市场低价</span>
          <span class="text-2xl font-display font-bold text-pink-300">
            ¥{{ figure.marketPriceLow }}
          </span>
        </div>
        <div class="bg-dark-700 rounded-2xl p-4 text-center">
          <span class="block text-xs text-text-muted mb-1">市场高价</span>
          <span class="text-2xl font-display font-bold text-gold-300">
            ¥{{ figure.marketPriceHigh }}
          </span>
        </div>
      </div>

      <!-- Premium visualization -->
      <div class="bg-dark-700 rounded-2xl p-6">
        <div class="flex items-end gap-2 mb-4">
          <span class="text-text-muted text-sm">溢价幅度</span>
          <span :class="premiumLabelClass" class="text-lg font-display font-bold">
            {{ premiumLabel }}
          </span>
        </div>

        <!-- Visual bar chart -->
        <div class="relative h-10 bg-dark-900 rounded-xl overflow-hidden">
          <!-- Retail baseline -->
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-dashed border-pink-400/30"></div>
          </div>
          <!-- Market price bar -->
          <div
            class="absolute inset-y-0 left-0 rounded-xl transition-all duration-1000 ease-out"
            :class="premiumBarBg"
            :style="{ width: marketBarWidth + '%' }"
          ></div>
        </div>

        <div class="flex justify-between mt-3 text-xs text-text-muted">
          <span>¥0</span>
          <span class="text-pink-300/70">官价 ¥{{ figure.retailPrice }}</span>
          <span class="text-gold-300/70">最高 ¥{{ figure.marketPriceHigh }}</span>
        </div>
      </div>

      <!-- Disclaimer -->
      <p class="text-xs text-text-muted/70 leading-relaxed">
        💡 以上价格为参考数据，实际交易价格可能因市场供需、品相、配件完整性等因素有所波动。市场价格信息仅供参考。
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  figure: { type: Object, required: true },
})

const premium = computed(() => {
  if (props.figure.retailPrice <= 0) return 0
  return (props.figure.marketPriceHigh - props.figure.retailPrice) / props.figure.retailPrice
})

const premiumLabel = computed(() => {
  const pct = Math.round(premium.value * 100)
  if (premium.value <= 0) return '无溢价'
  if (premium.value < 0.5) return `+${pct}% 小幅溢价`
  if (premium.value < 2) return `+${pct}% 中等溢价`
  if (premium.value < 5) return `+${pct}% 高溢价`
  return `+${pct}% 超高溢价`
})

const premiumLabelClass = computed(() => {
  if (premium.value >= 5) return 'text-red-400'
  if (premium.value >= 2) return 'text-gold-400'
  if (premium.value >= 1) return 'text-pink-300'
  return 'text-green-400'
})

const premiumBarBg = computed(() => {
  if (premium.value >= 5) return 'bg-gradient-to-r from-pink-600 via-gold-400 to-red-500'
  if (premium.value >= 2) return 'bg-gradient-to-r from-pink-400 to-gold-400'
  return 'bg-gradient-to-r from-pink-400/50 to-gold-400/50'
})

const marketBarWidth = computed(() => {
  // Show market price relative to retail
  const ratio = props.figure.marketPriceHigh / Math.max(props.figure.retailPrice, 1)
  return Math.min(ratio > 0 ? Math.max(ratio * 12, 5) : 5, 100)
})
</script>
