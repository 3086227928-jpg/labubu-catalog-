<template>
  <span :class="badgeClass" class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold font-display">
    <span v-if="rarity === 'secret'" class="text-base leading-none">⭐</span>
    <span v-else-if="rarity === 'rare'" class="text-base leading-none">💎</span>
    {{ label }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  rarity: {
    type: String,
    required: true,
    validator: (v) => ['common', 'uncommon', 'rare', 'secret'].includes(v),
  },
})

const label = computed(() => {
  const map = {
    common: '常规款',
    uncommon: '稀有款',
    rare: '珍藏款',
    secret: '隐藏款',
  }
  return map[props.rarity] || props.rarity
})

const badgeClass = computed(() => {
  const map = {
    common: 'bg-dark-600 text-text-secondary border border-dark-600',
    uncommon: 'bg-lavender-400/10 text-lavender-300 border border-lavender-400/30',
    rare: 'bg-gold-400/10 text-gold-300 border border-gold-400/30',
    secret:
      'bg-gradient-to-r from-pink-400/20 to-lavender-400/20 text-pink-300 border border-pink-400/40 shadow-glow-pink',
  }
  return map[props.rarity] || map.common
})
</script>
