<template>
  <div class="space-y-4">
    <!-- Search -->
    <SearchInput
      :model-value="searchQuery"
      placeholder="搜索玩偶名称、标签..."
      @update:model-value="$emit('update:searchQuery', $event)"
    />

    <!-- Series filter chips -->
    <div class="flex flex-wrap items-center gap-2">
      <SeriesTag
        :active="!activeSeries"
        :clickable="true"
        accent-color="#6b6b80"
        @click="$emit('update:activeSeries', null)"
      >
        全部
      </SeriesTag>
      <SeriesTag
        v-for="s in series"
        :key="s.slug"
        :active="activeSeries === s.slug"
        :clickable="true"
        :accent-color="s.color"
        :dot="true"
        @click="$emit('update:activeSeries', activeSeries === s.slug ? null : s.slug)"
      >
        {{ s.nameCN }}
      </SeriesTag>
    </div>

    <!-- Sort -->
    <div class="flex items-center gap-3">
      <span class="text-xs text-text-muted whitespace-nowrap">排序：</span>
      <select
        :value="sortBy"
        class="text-xs bg-dark-800 border border-dark-600 rounded-lg px-3 py-2 text-text-secondary focus:outline-none focus:border-pink-400/50 cursor-pointer"
        @change="$emit('update:sortBy', $event.target.value)"
      >
        <option v-for="opt in sortOptions" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>

      <!-- Result count -->
      <span class="ml-auto text-xs text-text-muted">
        共 {{ resultCount }} 个玩偶
      </span>
    </div>
  </div>
</template>

<script setup>
import SearchInput from '@/components/shared/SearchInput.vue'
import SeriesTag from '@/components/shared/SeriesTag.vue'

defineProps({
  searchQuery: { type: String, default: '' },
  activeSeries: { type: String, default: null },
  sortBy: { type: String, default: 'trending' },
  sortOptions: { type: Array, required: true },
  series: { type: Array, required: true },
  resultCount: { type: Number, default: 0 },
})

defineEmits([
  'update:searchQuery',
  'update:activeSeries',
  'update:sortBy',
])
</script>
