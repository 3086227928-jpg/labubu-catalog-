<template>
  <div v-if="hasActiveFilters" class="flex items-center gap-2 flex-wrap">
    <span class="text-xs text-text-muted">当前筛选：</span>
    <span
      v-if="searchQuery"
      class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-pink-400/10 text-pink-300 border border-pink-400/30"
    >
      🔍 {{ searchQuery }}
      <button class="hover:text-white transition-colors" @click="$emit('clearSearch')">×</button>
    </span>
    <span
      v-if="activeSeries && activeSeriesLabel"
      class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-lavender-400/10 text-lavender-300 border border-lavender-400/30"
    >
      {{ activeSeriesLabel }}
      <button class="hover:text-white transition-colors" @click="$emit('clearSeries')">×</button>
    </span>
    <button
      class="text-xs text-text-muted hover:text-pink-300 transition-colors ml-2"
      @click="$emit('clearAll')"
    >
      清除全部
    </button>
  </div>
</template>

<script setup>
defineProps({
  hasActiveFilters: { type: Boolean, default: false },
  searchQuery: { type: String, default: '' },
  activeSeries: { type: String, default: null },
  activeSeriesLabel: { type: String, default: '' },
})

defineEmits(['clearSearch', 'clearSeries', 'clearAll'])
</script>
