<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <!-- Page header -->
    <div class="mb-8">
      <h1 class="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-2">
        📚 玩偶图鉴
      </h1>
      <p class="text-text-secondary">
        探索全部 {{ filterMeta.totalCount }} 个 Labubu 精灵
        <span v-if="filteredFigures.length !== filterMeta.totalCount" class="text-pink-300">
          · 当前筛选 {{ filteredFigures.length }} 个
        </span>
      </p>
    </div>

    <!-- Filters -->
    <div class="sticky top-16 z-40 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 pb-6 bg-dark-900/90 backdrop-blur-sm">
      <FilterBar
        :search-query="searchQuery"
        :active-series="activeSeries"
        :sort-by="sortBy"
        :sort-options="sortOptions"
        :series="seriesList.value"
        :result-count="filteredFigures.length"
        @update:search-query="searchQuery = $event"
        @update:active-series="setSeriesFilter($event)"
        @update:sort-by="sortBy = $event"
      />
      <ActiveFilters
        :has-active-filters="hasActiveFilters"
        :search-query="searchQuery"
        :active-series="activeSeries"
        :active-series-label="activeSeriesLabel"
        @clear-search="searchQuery = ''"
        @clear-series="activeSeries = null"
        @clear-all="clearFilters"
      />
    </div>

    <!-- Grid -->
    <FigureGrid
      :figures="filteredFigures"
      @clear-filters="clearFilters"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFigures } from '@/composables/useFigures.js'
import { useSeries } from '@/composables/useSeries.js'
import { useFilters } from '@/composables/useFilters.js'
import FilterBar from '@/components/catalog/FilterBar.vue'
import ActiveFilters from '@/components/catalog/ActiveFilters.vue'
import FigureGrid from '@/components/catalog/FigureGrid.vue'

const { allFigures, getFigureCount } = useFigures()
const { seriesList, getSeriesBySlug } = useSeries()

const {
  searchQuery,
  activeSeries,
  sortBy,
  sortOptions,
  filteredFigures,
  setSeriesFilter,
  clearFilters,
  hasActiveFilters,
} = useFilters(allFigures)

const filterMeta = computed(() => ({
  totalCount: getFigureCount().value,
}))

const activeSeriesLabel = computed(() => {
  if (!activeSeries.value) return ''
  const s = getSeriesBySlug(activeSeries.value)
  return s.value?.nameCN || activeSeries.value
})
</script>
