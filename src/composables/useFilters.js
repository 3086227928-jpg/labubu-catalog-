import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export function useFilters(figuresRef) {
  const route = useRoute()
  const router = useRouter()

  const searchQuery = ref(route.query.q || '')
  const activeSeries = ref(route.query.series || null)
  const sortBy = ref(route.query.sort || 'trending')

  const sortOptions = [
    { value: 'trending', label: '热度优先' },
    { value: 'name-asc', label: '名称 A-Z' },
    { value: 'name-desc', label: '名称 Z-A' },
    { value: 'price-asc', label: '价格 ↑' },
    { value: 'price-desc', label: '价格 ↓' },
    { value: 'rarity', label: '稀有度优先' },
    { value: 'date-desc', label: '最新发布' },
  ]

  const rarityOrder = { secret: 4, rare: 3, uncommon: 2, common: 1 }

  const filteredFigures = computed(() => {
    let result = [...figuresRef.value]

    // Search filter
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.trim().toLowerCase()
      result = result.filter(
        (f) =>
          f.nameCN.toLowerCase().includes(q) ||
          f.nameEN.toLowerCase().includes(q) ||
          f.tags.some((t) => t.toLowerCase().includes(q)) ||
          f.description.toLowerCase().includes(q)
      )
    }

    // Series filter
    if (activeSeries.value) {
      result = result.filter((f) => f.series === activeSeries.value)
    }

    // Sort
    switch (sortBy.value) {
      case 'name-asc':
        result.sort((a, b) => a.nameEN.localeCompare(b.nameEN))
        break
      case 'name-desc':
        result.sort((a, b) => b.nameEN.localeCompare(a.nameEN))
        break
      case 'price-asc':
        result.sort((a, b) => a.retailPrice - b.retailPrice)
        break
      case 'price-desc':
        result.sort((a, b) => b.retailPrice - a.retailPrice)
        break
      case 'rarity':
        result.sort(
          (a, b) => (rarityOrder[b.rarity] || 0) - (rarityOrder[a.rarity] || 0)
        )
        break
      case 'date-desc':
        result.sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))
        break
      case 'trending':
      default:
        result.sort((a, b) => b.trendingScore - a.trendingScore)
        break
    }

    return result
  })

  // Sync state to URL query params
  let isUpdatingFromUrl = false

  watch(
    () => route.query,
    (newQuery) => {
      isUpdatingFromUrl = true
      searchQuery.value = newQuery.q || ''
      activeSeries.value = newQuery.series || null
      sortBy.value = newQuery.sort || 'trending'
      setTimeout(() => (isUpdatingFromUrl = false), 0)
    }
  )

  watch([searchQuery, activeSeries, sortBy], () => {
    if (isUpdatingFromUrl) return
    const query = {}
    if (searchQuery.value) query.q = searchQuery.value
    if (activeSeries.value) query.series = activeSeries.value
    if (sortBy.value && sortBy.value !== 'trending') query.sort = sortBy.value

    const currentQuery = { ...route.query }
    const isSame =
      JSON.stringify(query) === JSON.stringify(currentQuery) ||
      (Object.keys(query).length === 0 && Object.keys(currentQuery).length === 0)

    if (!isSame) {
      router.replace({ query })
    }
  })

  const setSeriesFilter = (slug) => {
    activeSeries.value = slug === activeSeries.value ? null : slug
  }

  const clearFilters = () => {
    searchQuery.value = ''
    activeSeries.value = null
    sortBy.value = 'trending'
  }

  const hasActiveFilters = computed(
    () => searchQuery.value.trim() !== '' || activeSeries.value !== null
  )

  return {
    searchQuery,
    activeSeries,
    sortBy,
    sortOptions,
    filteredFigures,
    setSeriesFilter,
    clearFilters,
    hasActiveFilters,
  }
}
