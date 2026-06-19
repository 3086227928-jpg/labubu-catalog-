<template>
  <div class="flex flex-col items-center justify-center py-20 text-center">
    <!-- Cute empty illustration -->
    <div class="text-6xl mb-6 animate-float">
      🧸
    </div>
    <h3 class="text-xl font-display font-semibold text-text-primary mb-2">
      {{ title }}
    </h3>
    <p class="text-text-secondary mb-6 max-w-md">
      {{ description }}
    </p>
    <button
      v-if="showAction"
      class="px-6 py-2.5 bg-pink-400 hover:bg-pink-300 text-white rounded-full font-display font-semibold text-sm transition-all duration-300 hover:shadow-glow-pink"
      @click="$emit('action')"
    >
      {{ actionText }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '没有找到玩偶' },
  description: {
    type: String,
    default: '试试调整筛选条件或搜索关键词，说不定精灵就躲在那里哦～',
  },
  showAction: { type: Boolean, default: false },
  actionText: { type: String, default: '清除筛选' },
})

defineEmits(['action'])
</script>
