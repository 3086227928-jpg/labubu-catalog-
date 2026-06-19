<template>
  <div class="space-y-1">
    <div class="flex items-center gap-2 text-xs text-text-muted">
      <span>官价 ¥{{ retailPrice }}</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-gold-400 font-display font-semibold text-sm">
        ¥{{ marketLow }} - ¥{{ marketHigh }}
      </span>
      <span
        v-if="premium > 0"
        :class="premiumClass"
        class="text-xs px-1.5 py-0.5 rounded font-semibold"
      >
        {{ premium >= 1 ? '+' + Math.round(premium * 100) + '%' : '溢价' }}
      </span>
    </div>
    <!-- Premium bar -->
    <div v-if="premium > 0" class="w-full h-1 bg-dark-600 rounded-full overflow-hidden">
      <div
        :class="premiumBarClass"
        class="h-full rounded-full transition-all duration-500"
        :style="{ width: Math.min(premium * 100, 100) + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  retailPrice: { type: Number, required: true },
  marketLow: { type: Number, required: true },
  marketHigh: { type: Number, required: true },
})

const premium = computed(() => {
  if (props.retailPrice <= 0) return 0
  return (props.marketHigh - props.retailPrice) / props.retailPrice
})

const premiumClass = computed(() => {
  if (premium.value >= 3) return 'bg-red-500/20 text-red-400'
  if (premium.value >= 1) return 'bg-gold-400/20 text-gold-300'
  return 'bg-green-500/20 text-green-400'
})

const premiumBarClass = computed(() => {
  if (premium.value >= 3) return 'bg-gradient-to-r from-gold-400 to-red-400'
  if (premium.value >= 1) return 'bg-gradient-to-r from-pink-400 to-gold-400'
  return 'bg-gold-400'
})
</script>
